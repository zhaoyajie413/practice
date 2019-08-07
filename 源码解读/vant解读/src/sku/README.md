# Sku

### Install

```javascript
import { Sku } from 'vant';

Vue.use(Sku);
```

## Usage

### Basic Usage

```html
<van-sku
  v-model="show"
  :sku="sku"
  :goods="goods"
  :goods-id="goodsId"
  :hide-stock="sku.hide_stock"
  :quota="quota"
  :quota-used="quotaUsed"
  :reset-stepper-on-hide="resetStepperOnHide"
  :reset-selected-sku-on-hide="resetSelectedSkuOnHide"
  :close-on-click-overlay="closeOnClickOverlay"
  :disable-stepper-input="disableStepperInput"
  :message-config="messageConfig"
  @buy-clicked="onBuyClicked"
  @add-cart="onAddCartClicked"
/>
```

```js
export default {
  data() {
    return {
      show: false,
      sku: {},
      goods: {},
      messageConfig: {}
    };
  }
}
```

### Custom Stepper Config

```html
<van-sku
  v-model="show"
  :sku="sku"
  :goods="goods"
  :goods-id="goodsId"
  :hide-stock="sku.hide_stock"
  :quota="quota"
  :quota-used="quotaUsed"
  :custom-stepper-config="customStepperConfig"
  @buy-clicked="onBuyClicked"
  @add-cart="onAddCartClicked"
/>
```

### Advanced Usage

```html
<van-sku
  v-model="show"
  stepper-title="Stepper title"
  :sku="sku"
  :goods="goods"
  :goods-id="goodsId"
  :hide-stock="sku.hide_stock"
  :quota="quota"
  :quota-used="quotaUsed"
  show-add-cart-btn
  reset-stepper-on-hide
  :initial-sku="initialSku"
  @buy-clicked="onBuyClicked"
  @add-cart="onAddCartClicked"
>
  <!-- custom sku-header-price -->
  <template slot="sku-header-price" slot-scope="props">
    <div class="van-sku__goods-price">
      <span class="van-sku__price-symbol">￥</span><span class="van-sku__price-num">{{ props.price }}</span>
    </div>
  </template>

  <!-- custom sku actions -->
  <template slot="sku-actions" slot-scope="props">
    <div class="van-sku-actions">
      <van-button
        square
        size="large"
        type="warning"
        @click="onPointClicked"
      >
        Button
      </van-button>
      <!-- trigger sku inner event -->
      <van-button
        square
        size="large"
        type="danger"
        @click="props.skuEventBus.$emit('sku:buy')"
      >
        Button
      </van-button>
    </div>
  </template>
</van-sku>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Whether to show sku | `boolean` | `false` |
| sku | Sku data | `object` | - |
| goods | Goods info | `object` | - |
| goods-id | Goods id | `string | `number` | - |
| price-tag | Tag behind the price | `string` | - |
| hide-stock | Whether to hide stock | `boolean` | `false` |
| hide-quota-text | Whether to hide quota text | `boolean` | `false` |
| hide-selected-text | Whether to hide selected text | `boolean` | `false` |
| show-add-cart-btn | Whether to show cart button | `boolean` | `true` |
| buy-text | Buy button text | `string` | - | - |
| add-cart-text | Add cart button text | `string` | - | - |
| quota | Quota (0 as no limit) | `number` | `0` |
| quota-used | Used quota | `number` | `0` |
| reset-stepper-on-hide | Whether to reset stepper when hide | `boolean` | `false` |
| reset-selected-sku-on-hide | Whether to reset selected sku when hide | `boolean` | `false` |
| disable-stepper-input | Whether to disable stepper input | `boolean` | `false` |
| close-on-click-overlay | Whether to close sku popup when click overlay | `boolean` | `false` |
| stepper-title | Quantity title | `string` | `Quantity` |
| custom-stepper-config | Custom stepper related config | `object` | `{}` |
| message-config | Message related config | `object` | `{}` |
| get-container | Return the mount node for sku | `string | () => HTMLElement` | - |

### Events

| Event | Description | Arguments |
|------|------|------|
| add-cart | Triggered when click cart button | data: object |
| buy-clicked | Triggered when click buy button | data: object |
| stepper-change | Triggered when stepper value changed | value: number |
| sku-selected | Triggered when select sku | { skuValue, selectedSku, selectedSkuComb } |
| open-preview | Triggered when open image preview | data: object |
| close-preview | Triggered when close image preview | data: object |

### Methods

Use ref to get sku instance and call instance methods

| Name | Attribute | Return value | Description |
|------|------|------|------|
| getSkuData | - | skuData | Get current skuData |

### Slots

| Name | Description | 
|------|------|
| sku-header | Custom header |
| sku-header-price | Custom header price area |
| sku-header-origin-price | Custom header origin price area |
| sku-header-extra | Extra header area |
| sku-body-top | Custom content before sku-group |
| sku-group | Custom sku |
| extra-sku-group | Extra custom content |
| sku-stepper | Custom stepper |
| sku-messages | Custom messages |
| sku-actions | Custom button actions |

### Sku Data Structure

```javascript
sku: {
  tree: [
    {
      k: 'Color',
      v: [
        {
          id: '30349',
          name: 'Red',
          imgUrl: 'https://img.yzcdn.cn/1.jpg'
        },
        {
          id: '1215',
          name: 'Blue',
          imgUrl: 'https://img.yzcdn.cn/2.jpg'
        }
      ],
      k_s: 's1'
    }
  ],
  list: [
    {
      id: 2259,
      price: 100,
      s1: '1215',
      s2: '1193',
      s3: '0',
      stock_num: 110
    }
  ],
  price: '1.00',
  stock_num: 227,
  collection_id: 2261,
  none_sku: false,
  messages: [
    {
      datetime: '0',
      multiple: '0',
      name: 'Message',
      type: 'text',
      required: '1'，
      placeholder: ''
    }
  ],
  hide_stock: false
}
```

### initialSku Data Structure

```javascript
{
  // Key：skuKeyStr
  // Value：skuValueId
  s1: '30349',
  s2: '1193',
  selectedNum: 3
}
```

### Goods Data Structure

```javascript
goods: {
  title: 'Title',
  picture: 'https://img.yzcdn.cn/1.jpg'
}
```


### customStepperConfig Data Structure

```javascript
customStepperConfig: {
  // custom quota text
  quotaText: 'only 5 can buy',
  // custom callback when over limit
  handleOverLimit: (data) => {
    const { action, limitType, quota, quotaUsed } = data;

    if (action === 'minus') {
      Toast('at least select one');
    } else if (action === 'plus') {
      // const { LIMIT_TYPE } = Sku.skuConstants;
      if (limitType === LIMIT_TYPE.QUOTA_LIMIT) {
        let msg = `Buy up to ${quota}`;
        if (quotaUsed > 0) msg += `，you already buy ${quotaUsed}`;
        Toast(msg);
      } else {
        Toast('not enough stock');
      }
    }
  },
  // custom callback when stepper value change
  handleStepperChange: currentValue => {},
  // stock
  stockNum: 1999,
  // stock fomatter
  stockFormatter: stockNum => {},
}
```

### messageConfig Data Structure

```javascript
messageConfig: {
  // the upload image callback
  uploadImg: () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve('https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg'), 1000);
    });
  },
  // max file size (MB)
  uploadMaxSize: 3,
  // placeholder config
  placeholderMap: {
    text: 'xxx',
    tel: 'xxx',
    ...
  }
}
```

### Events Params Data Structure

```javascript
skuData: {
  goodsId: '946755',
  messages: {
    message_0: '12',
    message_1: ''
  },
  cartMessages: {
    'Message 1': 'xxxx'
  },
  selectedNum: 1,
  selectedSkuComb: {
    id: 2257,
    price: 100,
    s1: '30349',
    s2: '1193',
    s3: '0',
    stock_num: 111
  }
}
```
