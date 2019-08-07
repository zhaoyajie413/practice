# GoodsAction

### Install

``` javascript
import {
  GoodsAction,
  GoodsActionButton,
  GoodsActionIcon
} from 'vant';

Vue
  .use(GoodsAction)
  .use(GoodsActionButton)
  .use(GoodsActionIcon);
```

## Usage

### Basic Usage

```html
<van-goods-action>
  <van-goods-action-icon
    icon="chat-o"
    text="Icon1"
    @click="onClickIcon"
  />
  <van-goods-action-icon
    icon="cart-o"
    text="Icon2"
    @click="onClickIcon"
  />
  <van-goods-action-button
    type="warning"
    text="Button1"
    @click="onClickButton"
  />
  <van-goods-action-button
    type="danger"
    text="Button2"
    @click="onClickButton"
  />
</van-goods-action>
```

```javascript
export default {
  methods: {
    onClickIcon() {
      Toast('Click Icon');
    },
    onClickButton() {
      Toast('Click Button');
    }
  }
}
```

### Icon info

Use `info` prop to show messages in upper right corner of icon

```html
<van-goods-action>
  <van-goods-action-icon
    icon="chat-o"
    text="Icon1"
  />
  <van-goods-action-icon
    info="5"
    icon="cart-o"
    text="Icon2"
  />
  <van-goods-action-icon
    icon="shop-o"
    text="Icon3"
  />
  <van-goods-action-button
    type="warning"
    text="Button1"
  />
  <van-goods-action-button
    type="danger"
    text="Button2"
  />
</van-goods-action>
```

## API

### GoodsAction Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation, to enable those features use `viewport-fit=cover` in the `viewport` meta tag | `boolean` | `false` |

### GoodsActionIcon Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| text | Button text | `string` | - |
| icon | Icon | `string` | - |
| icon-class | Icon class name | `any` | `''` |
| info | Info message | `string | number` | - |
| url | Link | `string` | - |
| to | Target route of the link, same as to of vue-router | `string | object` | - |
| replace | If true, the navigation will not leave a history record | `boolean` | `false` |

### GoodsActionButton Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| type | Button type, Can be set to `primary` `info` `warning` `danger` | `string` | `default` |
| text | Button text | `string` | - |
| primary | Is primary button (red color) | `boolean` | `false` |
| disabled | Whether to disable button | `boolean` | `false` |
| loading | Whether show loading status | `boolean` | `false` |
| url | Link | `string` | - |
| to | Target route of the link, same as to of vue-router | `string | object` | - |
| replace | If true, the navigation will not leave a history record | `boolean` | `false` |

### GoodsActionIcon Slots

| Name | Description |
|------|------|
| default | Text |
| icon | Custom icon |

### GoodsActionButton Slots

| Name | Description |
|------|------|
| default | Button content |
