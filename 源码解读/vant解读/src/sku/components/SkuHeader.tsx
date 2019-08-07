import { createNamespace } from '../../utils';
import { inherit } from '../../utils/functional';
import Icon from '../../icon';

// Types
import Vue, { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../../utils/types';
import { SkuData, SkuGoodsData, SelectedSkuData } from '../type';

export type SkuHeaderProps = {
  sku: SkuData;
  goods: SkuGoodsData;
  skuEventBus: Vue;
  selectedSku: SelectedSkuData;
};

const [createComponent, bem] = createNamespace('sku-header');

function getSkuImg(sku: SkuData, selectedSku: SelectedSkuData) {
  const id = selectedSku.s1;

  if (id) {
    // skuImg 挂载在 skuTree 中 s1 上
    const treeItem = sku.tree.filter(item => item.k_s === 's1')[0] || {};
    if (treeItem.v) {
      const matchedSku = treeItem.v.filter(skuValue => skuValue.id === id)[0];
      if (matchedSku) {
        return matchedSku.imgUrl || matchedSku.img_url;
      }
    }
  }
}

function SkuHeader(
  h: CreateElement,
  props: SkuHeaderProps,
  slots: DefaultSlots,
  ctx: RenderContext<SkuHeaderProps>
) {
  const { sku, goods, skuEventBus, selectedSku } = props;
  const goodsImg = getSkuImg(sku, selectedSku) || goods.picture;

  const previewImage = () => {
    skuEventBus.$emit('sku:previewImage', goodsImg);
  };

  return (
    <div class={[bem(), 'van-hairline--bottom']} {...inherit(ctx)}>
      <div class={bem('img-wrap')} onClick={previewImage}>
        <img src={goodsImg} />
      </div>
      <div class={bem('goods-info')}>
        {slots.default && slots.default()}
        <Icon
          name="clear"
          class="van-sku__close-icon"
          onClick={() => {
            skuEventBus.$emit('sku:close');
          }}
        />
      </div>
    </div>
  );
}

SkuHeader.props = {
  sku: Object,
  goods: Object,
  skuEventBus: Object,
  selectedSku: Object
};

export default createComponent<SkuHeaderProps>(SkuHeader);
