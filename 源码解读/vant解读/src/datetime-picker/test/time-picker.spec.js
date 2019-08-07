import TimePicker from '../TimePicker';
import { mount, later, triggerDrag } from '../../../test/utils';

function filter(type, options) {
  const mod = type === 'minute' ? 10 : 5;
  return options.filter(option => option % mod === 0);
}

function formatter(type, value) {
  return `${value} ${type}`;
}

test('format initial value', () => {
  const wrapper = mount(TimePicker, {
    propsData: {
      minHour: 22,
      minMinute: 58
    }
  });

  expect(wrapper).toMatchSnapshot();
});

test('max-hour & max-minute', () => {
  const wrapper = mount(TimePicker, {
    propsData: {
      value: '23:59',
      maxHour: 2,
      maxMinute: 2
    }
  });

  expect(wrapper).toMatchSnapshot();
});

test('filter prop', () => {
  const wrapper = mount(TimePicker, {
    propsData: {
      filter,
      value: '12:00'
    }
  });

  expect(wrapper).toMatchSnapshot();
});

test('formatter prop', async () => {
  const wrapper = mount(TimePicker, {
    propsData: {
      filter,
      formatter,
      value: '12:00'
    }
  });

  expect(wrapper).toMatchSnapshot();

  triggerDrag(wrapper.find('.van-picker-column'), 0, -100);
  wrapper.find('.van-picker-column ul').trigger('transitionend');
  await later();

  expect(wrapper.emitted('change')[0][0].getValues()).toEqual(['20 hour', '00 minute']);
});

test('confirm event', () => {
  const wrapper = mount(TimePicker, {
    propsData: {
      value: '12:00'
    }
  });

  triggerDrag(wrapper.find('.van-picker-column'), 0, -100);
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')[0][0]).toEqual('23:00');
});

test('cancel event', () => {
  const wrapper = mount(TimePicker);

  wrapper.find('.van-picker__cancel').trigger('click');
  expect(wrapper.emitted('cancel')).toBeTruthy();
});

test('dynamic set value', () => {
  const wrapper = mount(TimePicker);

  wrapper.setProps({ value: '00:00' });
  wrapper.find('.van-picker__confirm').trigger('click');
  wrapper.setProps({ value: '22:30' });
  wrapper.find('.van-picker__confirm').trigger('click');

  expect(wrapper.emitted('confirm')[0][0]).toEqual('00:00');
  expect(wrapper.emitted('confirm')[1][0]).toEqual('22:30');
});
