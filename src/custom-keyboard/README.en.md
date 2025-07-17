---
category: Data Entry
assets: CustomKeyboard
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

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| confirmColor | Background color of the confirm button on the numeric keypad | _string_ | - |
| confirmText | Text for the confirm button | _string_ | Confirm |
| confirmTextStyle | Style for the confirm button | _React.CSSProperties_ | - |
| digitalBase | Base adaptation feature (range 1-10) | _number_ | 10 |
| inputContainerStyle | Input container style | _React.CSSProperties_ | - |
| ismartHideZero | Whether to hide zero | _boolean_ | false |
| placeholder | Placeholder text | _string_ | `please input` |
| value | Value | _string_ | - |
| valueTextStyle | Style for the current value (applicable to placeholder style) | _React.CSSProperties_ | - |

### Slot

| Name          | Description      |
| ------------- | ---------------- |
| customButton | Custom right content |
```

### Style Variables

The component provides the following CSS variables that can be used for custom styles. For usage, refer to the [ConfigProvider Component](/material/smartui?comId=config-provider).

| Name                          | Default Value                           | Description           |
| ----------------------------- | --------------------------------------  | --------------------- |
| --custom-keyboard-bg-color    | _var(--app-B6, #fff)_                   | Background color      |
| --custom-keyboard-text-color  | _var(--app-B6-N2, rgba(0, 0, 0, 0.7))_  | Font color            |
| --custom-keyboard-border-color| _var(--app-B6-N7, rgba(0, 0, 0, 0.1))_  | Border color          |
| --custom-keyboard-placeholder-color | _var(--app-B6-N6, rgba(0, 0, 0, 0.2))_ | Placeholder color    |
| --custom-keyboard-popup-bg-color | _var(--app-B6-N6, rgba(0, 0, 0, 0.2))_ | Popup background color |
| --custom-keyboard-popup-item-color | _var(--app-B6, #fff)_                | Popup item color      |
| --custom-keyboard-popup-confirm-color | _var(--app-M3, #2dda86)_         | Confirm button color  |
| --custom-keyboard-popup-text-color | _var(--app-B6-N2, rgba(0, 0, 0, 0.7))_ | Popup text color    |
| --custom-keyboard-popup-hover-color | _var(--app-B6-N7, rgba(0, 0, 0, 0.1))_ | Hover color         |