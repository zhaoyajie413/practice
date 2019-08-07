import Button from '../../goods-action-button';
import Icon from '../../goods-action-icon';
import { mount } from '../../../test/utils';

test('Button click event', () => {
  const wrapper = mount(Button);
  wrapper.trigger('click');
  expect(wrapper.emitted('click').length).toEqual(1);
});

test('Icon click event', () => {
  const wrapper = mount(Icon);
  wrapper.trigger('click');
  expect(wrapper.emitted('click').length).toEqual(1);
});

test('Button render default slot', () => {
  const wrapper = mount({
    render(h) {
      return h(Button, null, ['Default Content']);
    }
  });

  expect(wrapper).toMatchSnapshot();
});

test('Icon render default slot', () => {
  const wrapper = mount({
    render(h) {
      return h(Icon, null, ['Default Content']);
    }
  });

  expect(wrapper).toMatchSnapshot();
});

test('Icon render icon slot', () => {
  const wrapper = mount({
    render(h) {
      return h(Icon, {
        scopedSlots: {
          default: () => 'Text',
          icon: () => 'Custom Icon'
        }
      });
    }
  });

  expect(wrapper).toMatchSnapshot();
});
