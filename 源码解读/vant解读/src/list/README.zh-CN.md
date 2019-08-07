# List 列表

### 介绍

瀑布流滚动加载，用于展示长列表，当列表即将滚动到底部时，会触发事件并加载更多列表项。

### 引入

``` javascript
import { List } from 'vant';

Vue.use(List);
```

## 代码演示

### 基础用法

List 组件通过`loading`和`finished`两个变量控制加载状态，当组件滚动到底部时，会触发`load`事件并将`loading`设置成`true`。此时可以发起异步操作并更新数据，数据更新完毕后，将`loading`设置成`false`即可。若数据已全部加载完毕，则直接将`finished`设置成`true`即可。

```html
<van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
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
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    }
  }
}
```

### 错误提示

若列表数据加载失败，将`error`设置成`true`即可显示错误提示，用户点击错误提示后会重新触发 load 事件。

```html
<van-list
  v-model="loading"
  :error.sync="error"
  error-text="请求失败，点击重新加载"
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

## 常见问题

### List 的运行机制是什么？

List 会监听浏览器的滚动事件并计算列表的位置，当列表底部与可视区域的距离小于`offset`时，List 会触发一次 load 事件。

### 为什么 List 初始化后会立即触发 load 事件？

List 初始化后会触发一次 load 事件，用于加载第一屏的数据，这个特性可以通过`immediate-check`属性关闭。

### 为什么会连续触发 load 事件？

如果一次请求加载的数据条数较少，导致列表内容无法铺满当前屏幕，List 会继续触发 load 事件，直到内容铺满屏幕或数据全部加载完成。因此你需要调整每次获取的数据条数，理想情况下每次请求获取的数据条数应能够填满一屏高度。

### loading 和 finished 分别是什么含义？

`List`有以下三种状态，理解这些状态有助于你正确地使用`List`组件：

- 非加载中，`loading`为`false`，此时会根据列表滚动位置判断是否触发`load`事件（列表内容不足一屏幕时，会直接触发）
- 加载中，`loading`为`true`，表示正在发送异步请求，此时不会触发`load`事件
- 加载完成，`finished`为`true`，此时不会触发`load`事件

在每次请求完毕后，需要手动将`loading`设置为`false`，表示加载结束

### 使用 float 布局后一直触发加载？

若 List 的内容使用了 float 布局，可以在容器上添加`van-clearfix`类名来清除浮动，使得 List 能正确判断元素位置


## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| v-model | 是否处于加载状态，加载过程中不触发`load`事件 | `boolean` | `false` | - |
| finished | 是否已加载完成，加载完成后不再触发`load`事件 | `boolean` | `false` | - |
| error | 是否加载失败，加载失败后点击错误提示可以重新<br>触发`load`事件，必须使用`sync`修饰符 | `boolean` | `false` | - |
| offset | 滚动条与底部距离小于 offset 时触发`load`事件 | `number` | `300` | - |
| loading-text | 加载过程中的提示文案 | `string` | `加载中...` | - |
| finished-text | 加载完成后的提示文案 | `string` | - | - |
| error-text | 加载失败后的提示文案 | `string` | - | 1.5.3 |
| immediate-check | 是否在初始化时立即执行滚动位置检查 | `boolean` | `true` | - |
| direction | 滚动触发加载的方向，可选值为`up` | `string` | `down` | 1.6.16 |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| load | 滚动条与底部距离小于 offset 时触发 | - |

### 方法

通过 ref 可以获取到 list 实例并调用实例方法

| 方法名 | 参数 | 返回值 | 介绍 |
|------|------|------|------|
| check | - | - | 检查当前的滚动位置，若已滚动至底部，则会触发 load 事件 |

### Slots

| 名称 | 说明 |
|------|------|
| default | 列表内容 |
| loading | 自定义底部加载中提示 |
