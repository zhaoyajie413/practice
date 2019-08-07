# AddressEdit 地址编辑

### 引入
``` javascript
import { AddressEdit } from 'vant';

Vue.use(AddressEdit);
```

## 代码演示

### 基础用法

```html
<van-address-edit
  :area-list="areaList"
  show-postal
  show-delete
  show-set-default
  show-search-result
  :search-result="searchResult"
  @save="onSave"
  @delete="onDelete"
  @change-detail="onChangeDetail"
/>
```

```javascript
export default {
  data() {
    return {
      areaList,
      searchResult: []
    }
  },

  methods: {
    onSave() {
      Toast('save');
    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
    }
  }
}
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| area-list | 地区列表 | `object` | - | - |
| address-info | 收货人信息初始值 | `AddressInfo` | `{}` | - |
| search-result | 详细地址搜索结果 | `SearchResult[]` | `[]` | - |
| show-postal | 是否显示邮政编码 | `boolean` | `false` | - |
| show-delete | 是否显示删除按钮 | `boolean` | `false` | - |
| show-set-default | 是否显示默认地址栏 | `boolean` | `false` | - |
| show-search-result | 是否显示搜索结果 | `boolean` | `false` | - |
| save-button-text | 保存按钮文字 | `string` | `保存` | - |
| delete-button-text | 删除按钮文字 | `string` | `删除` | - |
| detail-rows | 详细地址输入框行数 | `number` | `1` |
| detail-maxlength | 详细地址最大长度 | `number` | `200` | 2.0.4 |
| is-saving | 是否显示保存按钮加载动画 | `boolean` | `false` | - |
| is-deleting | 是否显示删除按钮加载动画 | `boolean` | `false` | - |
| tel-validator | 手机号格式校验函数 | `string => boolean` | - | - |
| validator | 自定义校验函数 | `(key, value) => string` | - | - |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| save | 点击保存按钮时触发 | content：表单内容 |
| focus | 输入框聚焦时触发 | key: 聚焦的输入框对应的 key |
| delete | 确认删除地址时触发 | content：表单内容 |
| cancel-delete | 取消删除地址时触发 | content：表单内容 |
| select-search | 选中搜索结果时触发 | value: 搜索结果 |
| change-area | 修改收件地区时触发 | values: 地区信息 |
| change-detail | 修改详细地址时触发 | value: 详细地址内容 |
| change-default | 切换是否使用默认地址时触发 | value: 是否选中 |

### Slots

| 名称 | 说明 |
|------|------|
| default | 在邮政编码下方插入内容 |

### 方法

通过 ref 可以获取到 address-edit 实例并调用实例方法

| 方法名 | 参数 | 返回值 | 介绍 |
|------|------|------|------|
| setAddressDetail | addressDetail: string | - | 设置详细地址 |

### AddressInfo 数据格式

注意：AddressInfo 仅作为初始值传入，表单最终内容可以在 save 事件中获取

| key | 说明 | 类型 |
|------|------|------|
| id | 每条地址的唯一标识 | `string | number` |
| name | 收货人姓名 | `string` |
| tel | 收货人手机号 | `string` |
| province | 省份 | `string` |
| city | 城市 | `string` |
| county | 区县 | `string` |
| addressDetail | 详细地址 | `string` |
| areaCode | 地区编码，通过`省市区选择`获取（必填） | `string` |
| postalCode | 邮政编码 | `string` |
| isDefault | 是否为默认地址 | `boolean` |

### SearchResult 数据格式

| key | 说明 | 类型 |
|------|------|------|
| name | 地名 | `string` |
| address | 详细地址 | `string` |

### 省市县列表数据格式

请参考 [Area](#/zh-CN/area) 组件。
