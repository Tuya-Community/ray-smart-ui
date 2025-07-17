---
category: 数据录入
---

# CustomKeyboard 数字键盘

### 介绍

自定义数字键盘

### 引入

```jsx
import { CustomKeyboard } from '@ray-js/smart-ui';
```

## 代码演示

### 基础用法

```jsx
import { CustomKeyboard } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const onChange = (v) => {
    console.log('onChange value =====>', v.detail);
  }
  const onConfirm = (v)=> {
    console.log('onConfirm value ====>', v.detail);
  }
  return <CustomKeyboard onChange={onChange} onConfirm={onConfirm} />;
}
```

### 高级用法

可以通过插槽添加定制内容。

```jsx
import { CustomKeyboard } from '@ray-js/smart-ui';
import React from 'react';
import { View } from '@ray-js/ray'

export default function Demo() {
  const onChange = (v) => {
    console.log('onChange value =====>', v.detail);
  }
  const onConfirm = (v) => {
    console.log('onConfirm value ====>', v.detail);
  }
  const handleBtn = () => {
    console.log('click');
  };
  return (
    <CustomKeyboard
      inputContainerStyle="
        marginLeft: 56rpx;
        marginTop: 16rpx;
        marginBottom: 56rpx;
        width: 560rpx;
        height: 120rpx;
      "
      placeholder="请输入"
      confirmText="确认"
      value="123"
      confirmColor="#123321"
      onChange={onChange}
      onConfirm={onConfirm}
    >
      <View
        slot="custom-button"
        onClick={handleBtn}
        style={{
          border: "1px solid blue", borderRadius: "4px", marginRight: '4px'
        }}
      >
        点击
      </View>
    </CustomKeyboard>
  );
}
```


## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 值 | _string_ | - |
| placeholder | placeholder 文案 | _string_ | `please input` |
| digitalBase | 用于适配进制功能（取值范围 1-10） | _number_ | 10 |
| isHideZero | 是否隐藏零 | _boolean_ | false |
| confirmColor | 数字键盘的确认按钮背景色 | _string_ | - |
| confirmText | 确认按钮文案 | _string_ | Confirm |
| inputContainerStyle | 输入框容器样式 | _object_ | - |
| valueTextStyle | 当前值的样式（适用于 placeholder 样式） | _object_ | - |
| confirmTextStyle | 确认按钮的样式 | _object_ | - |

### Slot

| 名称          | 说明           |
| ------------- | -------------- |
| customButton | 自定义右侧内容 |
