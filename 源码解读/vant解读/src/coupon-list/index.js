import { createNamespace } from '../utils';
import Tab from '../tab';
import Tabs from '../tabs';
import Field from '../field';
import Button from '../button';
import Coupon from '../coupon';

const [createComponent, bem, t] = createNamespace('coupon-list');
const EMPTY_IMAGE = 'https://img.yzcdn.cn/vant/coupon-empty.png';

export default createComponent({
  model: {
    prop: 'code'
  },

  props: {
    code: String,
    closeButtonText: String,
    inputPlaceholder: String,
    enabledTitle: String,
    disabledTitle: String,
    exchangeButtonText: String,
    exchangeButtonLoading: Boolean,
    exchangeButtonDisabled: Boolean,
    exchangeMinLength: {
      type: Number,
      default: 1
    },
    chosenCoupon: {
      type: Number,
      default: -1
    },
    coupons: {
      type: Array,
      default: () => []
    },
    disabledCoupons: {
      type: Array,
      default: () => []
    },
    displayedCouponIndex: {
      type: Number,
      default: -1
    },
    showExchangeBar: {
      type: Boolean,
      default: true
    },
    showCloseButton: {
      type: Boolean,
      default: true
    },
    currency: {
      type: String,
      default: '¥'
    },
    emptyImage: {
      type: String,
      default: EMPTY_IMAGE
    }
  },

  data() {
    return {
      tab: 0,
      winHeight: window.innerHeight,
      currentCode: this.code || ''
    };
  },

  computed: {
    buttonDisabled() {
      return (
        !this.exchangeButtonLoading &&
        (this.exchangeButtonDisabled ||
          !this.currentCode ||
          this.currentCode.length < this.exchangeMinLength)
      );
    },

    listStyle() {
      return {
        height: this.winHeight - (this.showExchangeBar ? 140 : 94) + 'px'
      };
    }
  },

  watch: {
    code(code) {
      this.currentCode = code;
    },

    currentCode(code) {
      this.$emit('input', code);
    },

    displayedCouponIndex(val) {
      this.scrollToShowCoupon(val);
    }
  },

  mounted() {
    this.scrollToShowCoupon(this.displayedCouponIndex);
  },

  methods: {
    onClickExchangeButton() {
      this.$emit('exchange', this.currentCode);

      // auto clear currentCode when not use vModel
      if (!this.code) {
        this.currentCode = '';
      }
    },

    // scroll to show specific coupon
    scrollToShowCoupon(index) {
      if (index === -1) {
        return;
      }

      this.$nextTick(() => {
        const { card, list } = this.$refs;

        /* istanbul ignore next */
        if (list && card && card[index]) {
          list.scrollTop = card[index].$el.offsetTop - 100;
        }
      });
    },

    renderEmpty() {
      return (
        <div class={bem('empty')}>
          <img src={this.emptyImage} />
          <p>{t('empty')}</p>
        </div>
      );
    },

    renderExchangeButton() {
      return (
        <Button
          size="small"
          type="danger"
          class={bem('exchange')}
          text={this.exchangeButtonText || t('exchange')}
          loading={this.exchangeButtonLoading}
          disabled={this.buttonDisabled}
          onClick={this.onClickExchangeButton}
        />
      );
    }
  },

  render() {
    const { coupons, disabledCoupons } = this;
    const title = `${this.enabledTitle || t('enable')} (${coupons.length})`;
    const disabledTitle = `${this.disabledTitle || t('disabled')} (${
      disabledCoupons.length
    })`;

    const ExchangeBar = this.showExchangeBar && (
      <Field
        vModel={this.currentCode}
        clearable
        border={false}
        class={bem('field')}
        placeholder={this.inputPlaceholder || t('placeholder')}
        maxlength="20"
        scopedSlots={{
          button: this.renderExchangeButton
        }}
      />
    );

    const onChange = index => () => this.$emit('change', index);

    const CouponTab = (
      <Tab title={title}>
        <div class={bem('list')} style={this.listStyle}>
          {coupons.map((coupon, index) => (
            <Coupon
              ref="card"
              key={coupon.id}
              coupon={coupon}
              currency={this.currency}
              chosen={index === this.chosenCoupon}
              nativeOnClick={onChange(index)}
            />
          ))}
          {!coupons.length && this.renderEmpty()}
        </div>
      </Tab>
    );

    const DisabledCouponTab = (
      <Tab title={disabledTitle}>
        <div class={bem('list')} style={this.listStyle}>
          {disabledCoupons.map(coupon => (
            <Coupon disabled key={coupon.id} coupon={coupon} currency={this.currency} />
          ))}
          {!disabledCoupons.length && this.renderEmpty()}
        </div>
      </Tab>
    );

    return (
      <div class={bem()}>
        {ExchangeBar}
        <Tabs vModel={this.tab} class={bem('tab')} line-width={120}>
          {CouponTab}
          {DisabledCouponTab}
        </Tabs>
        <Button
          vShow={this.showCloseButton}
          size="large"
          class={bem('close')}
          text={this.closeButtonText || t('close')}
          onClick={onChange(-1)}
        />
      </div>
    );
  }
});
