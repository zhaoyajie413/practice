# List

### Intro

A list component to show items and control loading status.

### Install

``` javascript
import { List } from 'vant';

Vue.use(List);
```

## Usage

### Basic Usage

```html
<van-list
  v-model="loading"
  :finished="finished"
  finished-text="Finished"
  @load="onLoad"
>
  <van-cell
    v-for="item in list"
    :key="item"
    :title="item"
  />
</van-list>
```

```js
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    };
  },

  methods: {
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    }
  }
}
```

### Error Info

```html
<van-list
  v-model="loading"
  :error.sync="error"
  error-text="Request failed. Click to reload"
  @load="onLoad"
>
  <van-cell
    v-for="item in list"
    :key="item"
    :title="item"
  />
</van-list>
```

```js
export default {
  data() {
    return {
      list: [],
      error: false,
      loading: false
    };
  },

  methods: {
    onLoad() {
      fetchSomeThing().catch(() => {
        this.error = true;
      })
    }
  }
}
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Whether to show loading info，the `load` event will not be triggered when loading | `boolean` | `false` |
| finished | Whether loading is finished，the `load` event will not be triggered when finished | `boolean` | `false` |
| error | Whether loading is error，the `load` event will be triggered only when error text clicked, the `sync` modifier is needed | `boolean` | `false` |
| offset | The load event will be triggered when the distance between the scrollbar and the bottom is less than offset | `number` | `300` |
| loading-text | Loading text | `string` | `Loading...` |
| finished-text | Finished text | `string` | - |
| error-text | Error loaded text | `string` | - |
| immediate-check | Whether to check loading position immediately after mounted | `boolean` | `true` |
| direction | Scroll direction，can be set to `up` | `string` | `down` |

### Events

| Event | Description | Arguments |
|------|------|------|
| load | Triggered when the distance between the scrollbar and the bottom is less than offset | - |

### Methods

Use ref to get list instance and call instance methods

| Name | Attribute | Return value | Description |
|------|------|------|------|
| check | - | - | Check scroll position |

### Slots

| Name | Description |
|------|------|
| default | List content |
| loading | Custom loading tips |
