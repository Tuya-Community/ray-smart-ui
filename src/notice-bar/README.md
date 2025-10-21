---
category: 展示
assets: NoticeBar
---

# NoticeBar 通知栏

> v2.0.0 开始加入

### 介绍

用于循环播放展示一组消息通知。

### 引入

```jsx
import { NoticeBar } from '@ray-js/smart-ui';
```

## 代码演示

### 基础用法

文字较长时，可以通过设置 `wrapable` 属性来开启多行展示。`type` 可以设置通知的类型。

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
      text="如果是家中常住成员，建议您将他设为家庭成员，共享家中所有设备和智能场景。"
      btnText="家庭设置"
    />
     <NoticeBar 
      wrapable
      type="warning"
      left-icon={Warning}
      custom-style="margin-bottom: 10px;"
      text="如果是家中常住成员，建议您将他设为家庭成员，共享家中所有设备和智能场景。"
      btnText="家庭设置"
    />
    <NoticeBar 
      wrapable
      type="error"
      left-icon={Warning}
      custom-style="margin-bottom: 10px;"
      text="如果是家中常住成员，建议您将他设为家庭成员，共享家中所有设备和智能场景。"
      btnText="家庭设置"
    />
  </>)
}
```
### 关闭

`mode` 设置为 `closeable` 则可以将此通知关闭，页面刷新后还会再次出现。

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
      text="如果是家中常住成员，建议您将他设为家庭成员，共享家中所有设备和智能场景。"
      btnText="家庭设置"
    />
  )
}
```

### 溢出文本自动滚动

通知栏的内容长度溢出时会自动开启滚动播放，通过 `scrollable` 属性可以控制该行为。`speed` 可以控制滚动的速度。

```tsx
import { NoticeBar } from '@ray-js/smart-ui';
import React from 'react';
import Warning from '@tuya-miniapp/icons/dist/svg/Warning';

export default function Demo() {
  return (
    <>
      {/* 文字较短时，通过设置 scrollable 属性开启滚动播放 */}
      <NoticeBar 
        speed={100}
        scrollable
        text="技术是开发它的人的共同灵魂。"
      />
      {/* 文字较长时，通过禁用 scrollable 属性关闭滚动播放 */}
      <NoticeBar 
        scrollable={false}
        text="如果是家中常住成员，建议您将他设为家庭成员。"
      />
    </>
  )
}
```

### 自定义样式

```tsx
import { NoticeBar } from '@ray-js/smart-ui';
import React from 'react';
import Warning from '@tuya-miniapp/icons/dist/svg/Warning';

export default function Demo() {
  return (
    <NoticeBar 
      wrapable
      left-icon={Warning}
      text="如果是家中常住成员，建议您将他设为家庭成员，共享家中所有设备和智能场景。"
      btnText="家庭设置"
      background="rgba(25, 137, 250, 0.1)"
      color="#1989FA"
      leftIconColor="#0009FA"
      btnTextColor="#0009FA"
    />
  )
}
```

### 链接模式

设置 `mode`为`link`组件会自动在右侧出现一个箭头图标，点击组件也会增加`hover`样式。点击后会跳转到对应的`url` 路由导航地址。

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
      text="如果是家中常住成员，建议您将他设为家庭成员，共享家中所有设备和智能场景。"
    />
  )
}
```

### 使用插槽

组件内部的所有部分都可以通过插槽插入来自定义内容。

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
      <Text>如果是家中常住成员，建议您将他设为家庭成员，共享家中所有设备和智能场景。</Text>
      <Text style={{ color: '#1989FA' }}>家庭设置</Text>
    </NoticeBar>
  )
}
```

## API

### Props

| 参数       | 说明                                     | 类型      | 默认值     |
| ---------- | ---------------------------------------- | --------- | ---------- |
| text | 通知文本内容 | _string_ | `''` |
| btnText | 按钮文本内容 | _string_ | `''` |
| btnTextColor | 按钮文本颜色 | _string_ | `''` |
| type | 通知类型，可选值为 `info` `warning` `error` | _string_ | `'info'` |
| background | 滚动条背景 | _string_ | `rgba(25, 137, 250, 0.1)` |
| color | 通知文本颜色 | _string_ | `#1989fa` |
| delay | 动画延迟时间 (ms) | _number_ | `1` |
| leftIcon | 左侧[图标](/material/smartui?comId=icon)或图片链接 | _string_ | - |
| leftIconColor | 左侧[图标](/material/smartui?comId=icon)颜色 | _string_ | - |
| rightIconColor | 右侧[图标](/material/smartui?comId=icon)颜色 | _string_ | - |
| leftIconStyle | 左侧[图标](/material/smartui?comId=icon)样式 | _React.CSSProperties_ | - |
| rightIconStyle | 左侧[图标](/material/smartui?comId=icon)样式 | _React.CSSProperties_ | - |
| mode | 通知栏模式，可选值为 `closeable` `link` | _string_ | `''` |
| openType | `link`模式时,路由跳转方法名称 | _string_ | `navigateTo` |
| url | `link`模式时,路由跳转地址 | _string_ | `''` |
| scrollable | 是否开启滚动播放，内容长度溢出时默认开启 | _boolean_ | - |
| speed | 滚动速率 (px/s) | _number_ | `60` |
| wrapable | 是否开启文本换行，只在禁用滚动时生效 | _boolean_ | `false` |
| customStyle | 跟节点样式 | _React.CSSProperties_ | - |
| customHoverClass | 跟节点点击样式类 | _string_ | `''` |


### Events

| 事件名     | 说明             | 参数           |
| ---------- | ---------------- | -------------- |
| onClick | 点击通知栏时触发 | _event: Event_ |
| onClose | 关闭通知栏时触发 | _event: Event_ |
| onBtnClick `v2.7.0` | 按钮文案点击时触发 | _event: Event_ |


### Slot

| 名称       | 说明                                     |
| ---------- | ---------------------------------------- |
| -          | 通知文本内容，仅在 `text` 属性为空时有效 |
| leftIcon | 自定义左侧图标 |
| rightIcon | 自定义右侧图标 |

### 外部样式类

| 类名         | 说明         |
| ------------ | ------------ |
| customClass | 根节点样式类 |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/material/smartui?comId=config-provider)。

| 名称                          | 默认值                                 | 描述 |
| ----------------------------- | -------------------------------------- | ---- |
| --notice-bar-font-size        | _14px_                                 | 内部字体大小    |
| --notice-bar-height           | _40px_                                 | 单行时高度    |
| --notice-bar-icon-size        | _16px_                                 | icon大小    |
| --notice-bar-line-height      | _14px_                                 | 内部字体行高大小    |
| --notice-bar-padding          | _0 var(--smart-padding-md)_            | 单行模式外部盒子边距    |
| --notice-bar-text-color       | _var(--app-B6-N3, rgba(0, 0, 0, 0.5))_ | 内部字体颜色    |
| --notice-bar-wrapable-padding | _var(--padding-xs) var(--padding-md)_  | 多行模式外部盒子边距    |
| --notice-bar-background-color | _#E7F3FE_        | info类型背景色    |
| --notice-bar-background-warning-color | _#FFF5E5_    | warning类型背景色    |
| --notice-bar-background-error-color | _#FDEDED_    | error类型背景色    |
| --notice-bar-info-color | _#1989fa_              | 左侧图标 info 类型颜色    |
| --notice-bar-warning-color | _#ffa000_              | 左侧图标 warning 类型颜色    |
| --notice-bar-error-color | _#f04c4c_              | 左侧图标 error 类型颜色    |
| --notice-bar-left-icon-margin-right | _8px_              | 左侧图标右侧外边距    |
| --notice-bar-right-icon-color `v2.1.7` | _rgba(0, 0, 0, 0.2)_              | 右侧图标颜色    |
| --notice-bar-right-icon-margin-left | _8px_              | 右侧图标左侧外边距    |
| --notice-bar-btn-color | _var(--app-M4, #1989fa)_              | 按钮文案颜色    |