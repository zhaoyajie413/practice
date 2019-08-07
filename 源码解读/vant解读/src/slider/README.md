# Slider

### Install

``` javascript
import { Slider } from 'vant';

Vue.use(Slider);
```

## Usage

### Basic Usage

```html
<van-slider v-model="value" @change="onChange" />
```

```js
export default {
  data() {
    return {
      value: 50
    };
  },

  methods: {
    onChange(value) {
      this.$toast('Current value：' + value);
    }
  }
};
```

### Range

```html
<van-slider v-model="value" :min="-50" :max="50" />
```

### Disabled

```html
<van-slider v-model="value" disabled />
```

### Step size

```html
<van-slider v-model="value" :step="10" />
```

### Custom style

```html
<van-slider
  v-model="value"
  bar-height="4px"
  active-color="#f44"
/>
```

### Custom button

```html
<van-slider
  v-model="value"
  active-color="#f44"
>
  <div
    slot="button"
    class="custom-button"
  >
    {{ value }}
  </div>
</van-slider>
```

### Vertical

```html
<div :style="{ height: '100px' }">
  <van-slider v-model="value" vertical />
</div>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|------|
| value | Current value | `number` | `0` |
| disabled | Whether to disable slider | `boolean` | `false` |
| max | Max value | `number` | `100` |
| min | Min value | `number` | `0` |
| step | Step size | `number` | `1` |
| bar-height | Height of bar | `number | string` | `2px` |
| active-color | Active color of bar | `string` | `#1989fa` |
| inactive-color | Inactive color of bar | `string` | `#e5e5e5` |
| vertical | Whether to display vertical | `boolean` | `false` |

### Events

| Event | Description | Arguments |
|------|------|------|
| change | Triggered after value change | value: current rate |
| drag-start | Triggered when start drag | - |
| drag-end | Triggered when end drag | - |

### Slots

| Name | Description |
|------|------|
| button | Custom button |
