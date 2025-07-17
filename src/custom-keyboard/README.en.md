---
category: Data Entry
---

# CustomKeyboard

### Introduction

Custom Numeric Keyboard

### Introduce

```jsx
import { CustomKeyboard } from '@ray-js/smart-ui';
```

## Code Demo

### Basic Usage

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

### Advanced Usage

Custom content can be added via slots.

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
      placeholder="Please enter"
      confirmText="confirm"
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
        Clicked
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
