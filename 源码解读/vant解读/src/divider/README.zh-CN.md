# Divider 分割线

### 引入

``` javascript
import { Divider } from 'vant';

Vue.use(Divider);
```

## 代码演示

### 基础用法

默认渲染一条水平分割线

```html
<van-divider />
```

### 展示文字

通过插槽在可以分割线中间插入内容

```html
<van-divider>文字</van-divider>
```

### 内容位置

通过`content-position`指定内容所在位置

```html
<van-divider content-position="left">文字</van-divider>
<van-divider content-position="right">文字</van-divider>
```

### 虚线

添加`dashed`属性使分割线渲染为虚线

```html
<van-divider dashed>文字</van-divider>
```

### 自定义样式

可以直接通过`style`属性设置分割线的样式

```html
<van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
  文字
</van-divider>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| dashed | 是否使用虚线 | `boolean` | `false` | - |
| hairline | 是否使用 0.5px 线 | `boolean` | `true` | - |
| content-position | 内容位置，可选值为`left` `right` | `string` | `center` | - |

### Slots

| 名称 | 说明 |
|------|------|
| default | 内容 |
