import { createNamespace } from '../../utils';
import { inherit } from '../../utils/functional';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../../utils/types';
import { SkuTreeItemData } from '../type';

export type SkuRowProps = {
  skuRow: SkuTreeItemData;
};

const [createComponent, bem] = createNamespace('sku-row');

function SkuRow(
  h: CreateElement,
  props: SkuRowProps,
  slots: DefaultSlots,
  ctx: RenderContext<SkuRowProps>
) {
  return (
    <div class={[bem(), 'van-hairline--bottom']} {...inherit(ctx)}>
      <div class={bem('title')}>{props.skuRow.k}</div>
      {slots.default && slots.default()}
    </div>
  );
}

SkuRow.props = {
  skuRow: Object
};

export default createComponent<SkuRowProps>(SkuRow);
