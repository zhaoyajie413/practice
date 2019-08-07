# Card 卡片

### 引入
``` javascript
import { Card } from 'vant';

Vue.use(Card);
```

## 代码演示

### 基础用法

```html
<van-card
  num="2"
  price="2.00"
  desc="描述信息"  
  title="商品标题"
  thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
/>
```

### 营销信息

通过`origin-price`设置商品原价，通过`tag`设置商品左上角标签

```html
<van-card
  num="2"
  tag="标签"
  price="2.00"
  desc="描述信息"  
  title="商品标题"
  thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
  origin-price="10.00"
/>
```

### 自定义内容

`Card`组件提供了多个插槽，可以灵活地自定义内容

```html
<van-card
  num="2"
  price="2.00"
  desc="描述信息"  
  title="商品标题"
  thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
>
  <div slot="tags">
    <van-tag plain type="danger">标签</van-tag>
    <van-tag plain type="danger">标签</van-tag>
  </div>
  <div slot="footer">
    <van-button size="mini">按钮</van-button>
    <van-button size="mini">按钮</van-button>
  </div>
</van-card>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| thumb | 左侧图片 URL | `string` | - | - |
| title | 标题 | `string` | - | - |
| desc | 描述 | `string` | - | - |
| tag | 图片角标 | `string` | - | - |
| num | 商品数量 | `string | number` | - | - |
| price | 商品价格 | `string | number` | - | - |
| origin-price | 商品划线原价 | `string | number` | - | - |
| centered | 内容是否垂直居中 | `boolean` | `false` | - |
| currency | 货币符号 |  `string` | `¥` | - |
| thumb-link | 点击左侧图片后的跳转链接 | `string` | - | - |
| lazy-load | 是否开启图片懒加载，须配合 [Lazyload](#/zh-CN/lazyload) 组件使用 | `boolean` | `false` | 1.5.0 |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击时触发 | event: Event |
| click-thumb | 点击自定义图片时触发 | event: Event |

### Slots

| 名称 | 说明 |
|------|------|
| title | 自定义标题 |
| desc | 自定义描述 |
| num | 自定义数量 |
| price | 自定义价格 |
| origin-price | 自定义商品原价 |
| bottom | 自定义价格下方区域 |
| thumb | 自定义图片 |
| tag | 自定义图片角标 |
| tags | 自定义描述下方标签区域 |
| footer | 自定义右下角内容 |
