---
category: Display
assets: NoticeBar
---

# NoticeBar

> Added in v2.0.0

### Introduction

Used for cyclically displaying a set of message notifications.

### Import

```jsx
import { NoticeBar } from '@ray-js/smart-ui';
```

## Code Demo

### Basic Usage

When the text is long, you can set the `wrapable` property to enable multi-line display. The `type` property can set the type of notification.

```tsx
import { NoticeBar } from '@ray-js/smart-ui';
import React from 'react';
import Warning from '@tuya-miniapp/icons/dist/svg/Warning';

export default function Demo() {
  return (<>
    <NoticeBar 
      wrapable
      type="info"
      left-icon={Warning}
      custom-style="margin-bottom: 10px;"
      text="If the person is a resident family member, it is recommended that you add them as a family member to share all devices and smart scenes at home."
      btnText="Household Settings"
    />
     <NoticeBar 
      wrapable
      type="warning"
      left-icon={Warning}
      custom-style="margin-bottom: 10px;"
      text="If the person is a resident family member, it is recommended that you add them as a family member to share all devices and smart scenes at home."
      btnText="Household Settings"
    />
    <NoticeBar 
      wrapable
      type="error"
      left-icon={Warning}
      custom-style="margin-bottom: 10px;"
      text="If the person is a resident family member, it is recommended that you add them as a family member to share all devices and smart scenes at home."
      btnText="Household Settings"
    />
  </>)
}
```
### Closable

When `mode` is set to `closeable`, this notification can be closed and will reappear after the page is refreshed.

```tsx
import { NoticeBar } from '@ray-js/smart-ui';
import React from 'react';
import Warning from '@tuya-miniapp/icons/dist/svg/Warning';

export default function Demo() {
  return (
    <NoticeBar 
      wrapable
      mode="closeable"
      left-icon={Warning}
      text="If the person is a resident family member, it is recommended that you add them as a family member to share all devices and smart scenes at home."
      btnText="Household Settings"
    />
  )
}
```

### Auto Scrolling of Overflow Text

When the content length of the notification bar overflows, scrolling will automatically start. You can control this behavior with the `scrollable` property. The `speed` property can control the scrolling speed.

```tsx
import { NoticeBar } from '@ray-js/smart-ui';
import React from 'react';
import Warning from '@tuya-miniapp/icons/dist/svg/Warning';

export default function Demo() {
  return (
    <>
      {/* When the text is short, scrolling can be enabled by setting the scrollable property */}
      <NoticeBar 
        speed={100}
        scrollable
        text="Technology is the shared soul of those who develop it."
      />
      {/* When the text is long, scrolling can be disabled by setting the scrollable property to false */}
      <NoticeBar 
        scrollable={false}
        text="If the person is a resident family member, it is recommended that you add them as a family member."
      />
    </>
  )
}
```

### Custom Style

```tsx
import { NoticeBar } from '@ray-js/smart-ui';
import React from 'react';
import Warning from '@tuya-miniapp/icons/dist/svg/Warning';

export default function Demo() {
  return (
    <NoticeBar 
      wrapable
      left-icon={Warning}
      text="If the person is a resident family member, it is recommended that you add them as a family member to share all devices and smart scenes at home."
      btnText="Household Settings"
      background="rgba(25, 137, 250, 0.1)"
      color="#1989FA"
      leftIconColor="#0009FA"
      btnTextColor="#0009FA"
    />
  )
}
```

### Link Mode

Setting `mode` to `link` will automatically display an arrow icon on the right side of the component, and clicking on the component will add a `hover` style. Upon clicking, it will navigate to the corresponding `url` routing address.

```tsx
import { NoticeBar } from '@ray-js/smart-ui';
import React from 'react';
import Warning from '@tuya-miniapp/icons/dist/svg/Warning';

export default function Demo() {
  return (
    <NoticeBar 
      scrollable={false}
      mode="link"
      openType="navigateTo"
      url="/pages/cell/index"
      left-icon={Warning}
      text="If the person is a resident family member, it is recommended that you add them as a family member to share all devices and smart scenes at home."
    />
  )
}
```

### Using Slots

All parts of the component can be inserted with custom content through slots.

```tsx
import { NoticeBar, Icon } from '@ray-js/smart-ui';
import React from 'react';
import Warning from '@tuya-miniapp/icons/dist/svg/Warning';
import SpeakerWaveLoud from '@tuya-miniapp/icons/dist/svg/SpeakerWaveLoud';
import { Text } from '@ray-js/ray';

export default function Demo() {
  return (
    <NoticeBar 
      wrapable 
      slot={{
        leftIcon: (
          <Icon
            size="16"
            color="#1989FA"
            customStyle={{
              marginRight: '8px',
            }}
            name={SpeakerWaveLoud}
          />
        ),
        rightIcon: (
          <Icon
            size="16"
            color="#1989FA"
            customStyle={{
              marginLeft: '8px',
            }}
            name={Warning}
          />
        ),
    }}>
      <Text>If the person is a resident family member, it is recommended that you add them as a family member to share all devices and smart scenes at home.</Text>
      <Text style={{ color: '#1989FA' }}>Household Settings</Text>
    </NoticeBar>
  )
}
```

## API

### Props

| Prop        | Description                          | Type      | Default Value |
| ----------- | ------------------------------------ | --------- | ------------- |
| text | Notification text content | _string_ | `''` |
| btnText | Button text content | _string_ | `''` |
| btnTextColor | Button text color | _string_ | `''` |
| type | Notification type, options are `info`, `warning`, `error` | _string_ | `'info'` |
| background | Background color of the scrolling bar | _string_ | `rgba(25, 137, 250, 0.1)` |
| color | Notification text color | _string_ | `#1989fa` |
| delay | Animation delay time (ms) | _number_ | `1` |
| leftIcon | Left [icon](/material/smartui?comId=icon) or image link | _string_ | - |
| rightIconColor | Right [icon](/material/smartui?comId=icon) color | _string_ | - |
| leftIconColor | Left [icon](/material/smartui?comId=icon) color | _string_ | - |
| leftIconStyle | Left [icon](/material/smartui?comId=icon) style | _React.CSSProperties_ | - |
| rightIconStyle | Right [icon](/material/smartui?comId=icon) style | _React.CSSProperties_ | - |
| mode | Notice bar mode, options are `closeable`, `link` | _string_ | `''` |
| openType | Method name for route navigation in `link` mode | _string_ | `navigateTo` |
| url | Route navigation address in `link` mode | _string_ | `''` |
| scrollable | Whether to enable scrolling playback, enabled by default when content length overflows | _boolean_ | - |
| speed | Scrolling speed (px/s) | _number_ | `60` |
| wrapable | Whether to enable text wrapping, effective only when scrolling is disabled | _boolean_ | `false` |
| customStyle | Root node style | _React.CSSProperties_ | - |
| customHoverClass | Root node click style class | _string_ | `''` |


### Events

| Event Name  | Description       | Parameters       |
| ----------- | ----------------- | ---------------- |
| onClick | Triggered when the notice bar is clicked | _event: Event_ |
| onClose | Triggered when the notice bar is closed | _event: Event_ |
| onBtnClick | Triggered when the button text is clicked | _event: Event_ |


### Slot

| Name        | Description                              |
| ----------- | ---------------------------------------- |
| -           | Notification text content, effective only when `text` property is empty |
| leftIcon | Custom left icon |
| rightIcon | Custom right icon |

### External Style Classes

| Class Name    | Description     |
| ------------- | --------------- |
| customClass | Root node style class |

### Style Variables

The component provides the following CSS variables for custom styles. Please refer to the [ConfigProvider component](/material/smartui?comId=config-provider) for usage.

| Name                             | Default Value                          | Description |
| -------------------------------- | -------------------------------------- | ----------- |
| --notice-bar-font-size           | _14px_                                 | Inner font size |
| --notice-bar-height              | _40px_                                 | Height in single-line mode |
| --notice-bar-icon-size           | _16px_                                 | Icon size |
| --notice-bar-line-height         | _14px_                                 | Inner font line height |
| --notice-bar-padding             | _0 var(--smart-padding-md)_            | Outer box margin in single-line mode |
| --notice-bar-text-color          | _var(--app-B6-N3, rgba(0, 0, 0, 0.5))_ | Inner font color |
| --notice-bar-wrapable-padding    | _var(--padding-xs) var(--padding-md)_  | Outer box margin in multi-line mode |
| --notice-bar-background-color    | _#E7F3FE_              | Background color of info type |
| --notice-bar-background-warning-color | _#FFF5E5_           | Background color of warning type |
| --notice-bar-background-error-color | _#FDEDED_            | Background color of error type |
| --notice-bar-info-color          | _#1989fa_                             | Color of the left icon in info type |
| --notice-bar-warning-color       | _#ffa000_                             | Color of the left icon in warning type |
| --notice-bar-error-color         | _#f04c4c_                             | Color of the left icon in error type |
| --notice-bar-right-icon-color `v2.1.7` | _rgba(0, 0, 0, 0.2)_              | right icon color    |
| --notice-bar-left-icon-margin-right | _8px_                             | Right margin of the left icon |
| --notice-bar-right-icon-margin-left | _8px_                             | Left margin of the right icon |