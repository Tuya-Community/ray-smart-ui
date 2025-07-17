---
category: 数据录入
assets: CustomKeyboard
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
| confirmColor | 数字键盘的确认按钮背景色 | _string_ | - |
| confirmText | 确认按钮文案 | _string_ | Confirm |
| confirmTextStyle | 确认按钮的样式 | _React.CSSProperties_ | - |
| digitalBase | 用于适配进制功能（取值范围 1-10） | _number_ | 10 |
| inputContainerStyle | 输入框容器样式 | _React.CSSProperties_ | - |
| ismartHideZero | 是否隐藏零 | _boolean_ | false |
| placeholder | placeholder 文案 | _string_ | `please input` |
| value | 值 | _string_ | - |
| valueTextStyle | 当前值的样式（适用于 placeholder 样式） | _React.CSSProperties_ | - |

### Slot

| 名称          | 说明           |
| ------------- | -------------- |
| customButton | 自定义右侧内容 |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/material/smartui?comId=config-provider)。

| 名称                          | 默认值                                 | 描述 |
| ----------------------------- | -------------------------------------- | ---- |
| --custom-keyboard-bg-color | _var(--app-B6, #fff)_ | 背景颜色 |
| --custom-keyboard-text-color | _var(--app-B6-N2, rgba(0, 0, 0, 0.7))_ | 字体颜色 |
| --custom-keyboard-border-color | _var(--app-B6-N7, rgba(0, 0, 0, 0.1))_ | 边框颜色 |
| --custom-keyboard-placeholder-color | _var(--app-B6-N6, rgba(0, 0, 0, 0.2))_ | 占位符颜色 |
| --custom-keyboard-popup-bg-color | _var(--app-B6-N6, rgba(0, 0, 0, 0.2))_ | 弹窗背景色 |
| --custom-keyboard-popup-item-color | _var(--app-B6, #fff)_ | 弹窗项目颜色 |
| --custom-keyboard-popup-confirm-color | _var(--app-M3, #2dda86)_ | 确认按钮颜色 |
| --custom-keyboard-popup-text-color | _var(--app-B6-N2, rgba(0, 0, 0, 0.7))_ | 弹窗文字颜色 |
| --custom-keyboard-popup-hover-color | _var(--app-B6-N7, rgba(0, 0, 0, 0.1))_ | 鼠标悬停颜色 |