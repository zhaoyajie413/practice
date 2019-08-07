import { createNamespace, isDef } from '../utils';
import { inherit } from '../utils/functional';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/types';

export type InfoProps = {
  info?: string | number;
};

const [createComponent, bem] = createNamespace('info');

function Info(
  h: CreateElement,
  props: InfoProps,
  slots: DefaultSlots,
  ctx: RenderContext<InfoProps>
) {
  if (!isDef(props.info) || props.info === '') {
    return;
  }

  return (
    <div class={bem()} {...inherit(ctx, true)}>
      {props.info}
    </div>
  );
}

Info.props = {
  info: [Number, String]
};

export default createComponent<InfoProps>(Info);
