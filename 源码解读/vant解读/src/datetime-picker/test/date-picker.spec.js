import DatePicker from '../DatePicker';
import { mount, later, triggerDrag } from '../../../test/utils';

function filter(type, options) {
  const mod = type === 'year' ? 10 : 5;
  return options.filter(option => option % mod === 0);
}

function formatter(type, value) {
  return `${value} ${type}`;
}

test('filter prop', () => {
  const wrapper = mount(DatePicker, {
    propsData: {
      filter,
      value: new Date(2019, 10, 1, 0, 0)
    }
  });

  expect(wrapper).toMatchSnapshot();
});

test('formatter prop', async () => {
  const wrapper = mount(DatePicker, {
    propsData: {
      filter,
      formatter,
      value: new Date(2019, 10, 1, 0, 0)
    }
  });

  expect(wrapper).toMatchSnapshot();

  triggerDrag(wrapper.find('.van-picker-column'), 0, -100);
  wrapper.find('.van-picker-column ul').trigger('transitionend');
  await later();

  expect(wrapper.emitted('change')[0][0].getValues()).toEqual([
    '2020 year',
    '05 month',
    '05 day',
    '00 hour',
    '00 minute'
  ]);
});

test('confirm event', () => {
  const date = new Date(2019, 10, 1, 0, 0);

  const wrapper = mount(DatePicker, {
    propsData: {
      value: date
    }
  });

  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')[0][0].getFullYear()).toEqual(2019);

  triggerDrag(wrapper.find('.van-picker-column'), 0, -100);
  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')[1][0].getFullYear()).toEqual(2029);
});

test('cancel event', () => {
  const wrapper = mount(DatePicker);

  wrapper.find('.van-picker__cancel').trigger('click');
  expect(wrapper.emitted('cancel')).toBeTruthy();
});

test('max-date prop', () => {
  const maxDate = new Date(2010, 5, 0, 0, 0);
  const wrapper = mount(DatePicker, {
    propsData: {
      value: new Date(2020, 10, 30, 30, 30),
      maxDate
    }
  });

  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')[0][0]).toEqual(maxDate);
});

test('min-date prop', () => {
  const minDate = new Date(2030, 0, 0, 0, 0);
  const wrapper = mount(DatePicker, {
    propsData: {
      value: new Date(2020, 0, 0, 0, 0),
      minDate
    }
  });

  wrapper.find('.van-picker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')[0][0]).toEqual(minDate);
});

test('dynamic set value', () => {
  const wrapper = mount(DatePicker, {
    propsData: {
      value: new Date(2019, 1, 1)
    }
  });

  wrapper.setProps({ value: new Date(2019, 1, 1) });
  wrapper.find('.van-picker__confirm').trigger('click');
  wrapper.setProps({ value: new Date(2025, 1, 1) });
  wrapper.find('.van-picker__confirm').trigger('click');

  expect(wrapper.emitted('confirm')[0][0].getFullYear()).toEqual(2019);
  expect(wrapper.emitted('confirm')[1][0].getFullYear()).toEqual(2025);
});
