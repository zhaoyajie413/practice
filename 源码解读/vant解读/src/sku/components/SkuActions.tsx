import { createNamespace } from '../../utils';
import { inherit } from '../../utils/functional';
import Button from '../../button';

// Types
import Vue, { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../../utils/types';

export type SkuActionsProps = {
  buyText?: string;
  skuEventBus: Vue;
  addCartText?: string;
  showAddCartBtn?: boolean;
};

const [createComponent, bem] = createNamespace('sku-actions');

function SkuActions(
  h: CreateElement,
  props: SkuActionsProps,
  slots: DefaultSlots,
  ctx: RenderContext<SkuActionsProps>
) {
  const createEmitter = (name: string) => () => {
    props.skuEventBus.$emit(name);
  };

  return (
    <div class={bem()} {...inherit(ctx)}>
      {props.showAddCartBtn && (
        <Button
          size="large"
          type="warning"
          text={props.addCartText || '加入购物车'}
          onClick={createEmitter('sku:addCart')}
        />
      )}
      <Button
        size="large"
        type="danger"
        text={props.buyText || '立即购买'}
        onClick={createEmitter('sku:buy')}
      />
    </div>
  );
}

SkuActions.props = {
  buyText: String,
  addCartText: String,
  skuEventBus: Object,
  showAddCartBtn: Boolean
};

export default createComponent<SkuActionsProps>(SkuActions);
