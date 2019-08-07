import { createNamespace } from '../utils';
import { isAndroid } from '../utils/validate/system';
import Cell from '../cell';
import Field from '../field';

const [createComponent, bem, t] = createNamespace('address-edit-detail');
const android = isAndroid();

export default createComponent({
  props: {
    value: String,
    error: Boolean,
    focused: Boolean,
    detailRows: Number,
    searchResult: Array,
    detailMaxlength: Number,
    showSearchResult: Boolean
  },

  methods: {
    onSelect(express) {
      this.$emit('select-search', express);
      this.$emit(
        'input',
        `${express.address || ''} ${express.name || ''}`.trim()
      );
    },

    onFinish() {
      this.$refs.field.blur();
    },

    renderFinish() {
      const show = this.value && this.focused && android;
      if (show) {
        return (
          <div class={bem('finish')} onClick={this.onFinish}>
            {t('complete')}
          </div>
        );
      }
    },

    renderSearchResult() {
      const { searchResult } = this;
      const show = this.focused && searchResult && this.showSearchResult;
      if (show) {
        return searchResult.map(express => (
          <Cell
            key={express.name + express.address}
            title={express.name}
            label={express.address}
            icon="location-o"
            clickable
            onClick={() => {
              this.onSelect(express);
            }}
          />
        ));
      }
    }
  },

  render() {
    return (
      <Cell class={bem()}>
        <Field
          autosize
          ref="field"
          rows={this.detailRows}
          clearable={!android}
          type="textarea"
          value={this.value}
          error={this.error}
          label={t('label')}
          maxlength={this.detailMaxlength}
          placeholder={t('placeholder')}
          scopedSlots={{ icon: this.renderFinish }}
          {...{ on: this.$listeners }}
        />
        {this.renderSearchResult()}
      </Cell>
    );
  }
});
