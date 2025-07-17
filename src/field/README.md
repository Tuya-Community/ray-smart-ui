---
category: 数据录入
---

# Field 输入框

### 介绍

输入框

### 引入

```jsx
import { Field } from '@ray-js/smart-ui';
```

## 代码演示

### 基础用法

```jsx
import { Field } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value] = React.useState('')
  return <Field value={value} placeholder="请输入用户名" border={false} clearable />;
}
```

## API

### Props

| 参数                      | 说明                                                                                                       | 类型    | 默认值 |
| ------------------------- | ---------------------------------------------------------------------------------------------------------- | ------- | ------ |
| adjustPosition            | 键盘弹起时，是否自动上推页面                                                                               | boolean | true   |
| alwaysEmbed        | 强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效)                            | boolean | false  |
| arrowDirection            | 箭头方向，可选值为 left up down                                                                            | string  | -      |
| autoFocus                 | 自动聚焦，拉起键盘                                                                                         | boolean | false  |
| autosize                  | 是否自适应内容高度，只对 textarea 有效，可传入对象,如 { maxHeight: 100, minHeight: 50 }，单位为 px         |
| border                    | 是否显示内边框                                                                                             | boolean | true   |
| center                    | 是否使内容垂直居中                                                                                         | boolean | false  |
| clearTrigger       | 显示清除图标的时机，always 表示输入框不为空时展示，focus 表示输入框聚焦且不为空时展示                      | string  | focus  |
| clearable                 | 是否启用清除控件                                                                                           | boolean | false  |
| clickable                 | 是否开启点击反馈                                                                                           | boolean | false  |
| confirmHold               | 点击键盘右下角按钮时是否保持键盘不收起，在 type='textarea' 时无效                                          | boolean | false  |
| confirmType               | 设置键盘右下角按钮的文字，仅在 type='text' 时生效                                                          | string  | done   |
| cursor                    | 指定 focus 时的光标位置                                                                                    | number  | -1     |
| cursorSpacing             | 输入框聚焦时底部与键盘的距离                                                                               | number  | 50     |
| customStyle               | 自定义样式                                                                                                 | object  | -      |
| disableDefaultPadding     | 是否去掉 iOS 下的默认内边距，只对 textarea 有效                                                            | boolean | true   |
| disabled                  | 是否禁用输入框                                                                                             | boolean | false  |
| error                     | 是否将输入内容标红                                                                                         | boolean | false  |
| errorMessage              | 底部错误提示文案，为空时不展示                                                                             | string  | ''     |
| errorMessageAlign         | 底部错误提示文案对齐方式，可选值为 center right                                                            | string  | ''     |
| extraEventParams | 开启事件增强模式，会在 input 和 change 事件额外提供 cursor 和 keyCode 参数，计划在下一个大版本作为默认行为 | boolean | false  |
| fixed                     | 如果 type 为 textarea 且在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true                       | boolean | false  |
| focus                     | 获取焦点                                                                                                   | boolean | false  |
| holdKeyboard              | focus 时，点击页面的时候不收起键盘                                                                         | boolean | false  |
| inputAlign                | 输入框内容对齐方式，可选值为 center right                                                                  | string  | left   |
| isLink                    | 是否展示右侧箭头并开启点击反馈                                                                             | boolean | false  |
| label                     | 输入框左侧文本                                                                                             | string  | -      |
| leftIcon                  | 左侧图标名称或图片链接，可选值见 Icon 组件                                                                 | string  | -      |
| maxlength                 | 最大输入长度，设置为 -1 的时候不限制最大长度                                                               | number  | -1     |
| name                      | 在表单内提交时的标识符。可以通过配置 name 来扩大点击区域                                                   | string  | -      |
| password                  | 是否是密码类型                                                                                             | boolean | false  |
| placeholder               | 输入框为空时占位符                                                                                         | string  | -      |
| placeholderStyle          | 指定 placeholder 的样式                                                                                    | object  | -      |
| readonly                  | 是否只读                                                                                                   | boolean | false  |
| required                  | 是否显示表单必填星号                                                                                       | boolean | false  |
| rightIcon                 | 右侧图标名称或图片链接，可选值见 Icon 组件                                                                 | string  | -      |
| selectionEnd              | 光标结束位置，自动聚集时有效，需与 selection-start 搭配使用                                                | number  | -1     |
| selectionStart            | 光标起始位置，自动聚集时有效，需与 selection-end 搭配使用                                                  | number  | -1     |
| showConfirmBar            | 是否显示键盘上方带有”完成“按钮那一栏，只对 textarea 有效                                                   | boolean | true   |
| showWordLimit             | 是否显示字数统计，需要设置 maxlength 属性                                                                  | boolean | false  |
| size                      | 单元格大小，可选值为 large                                                                                 | string  | -      |
| titleWidth                | 标题宽度                                                                                                   | string  | 6.2em  |
| type                      | 可设置为任意原生类型, 如 number idcard textarea digit nickname                                             | string  | text   |
| value                     | 当前输入的值                                                                                               | string  | number | - |

### Events

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| onInput | 输入内容时触发 | event.detail: 当前输入值; 在 extraEventParams 为 `true` 时为 `InputDetail` |
| onChange | 输入内容时触发 | event.detail: 当前输入值; 在 extraEventParams 为 `true` 时为 `InputDetail` |
| onConfirm | 点击完成按钮时触发 | event.detail: 当前输入值 |
| onClickIcon | 点击尾部图标时触发 | - |
| onFocus | 输入框聚焦时触发 | event.detail.value: 当前输入值; <br>event.detail.height: 键盘高度 |
| onBlur | 输入框失焦时触发 | event.detail.value: 当前输入值; <br>event.detail.cursor: 游标位置(如果 `type` 不为 `textarea`，值为 `0`) |
| onClear | 点击清空控件时触发 | - |
| onClickInput | 点击输入区域时触发 | - |
| onlinechange | 输入框行数变化时调用，只对 textarea 有效 | event.detail = { height: 0, heightRpx: 0, lineCount: 0 } |
| onKeyboardHeightChange | 键盘高度发生变化的时候触发此事件 | event.detail = { height: height, duration: duration } |

### InputDetail

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前输入值 | _string_ | - |
| cursor | 光标位置 | _number_ | - |
| keyCode | 键值 | _number_ | - |

### Slot

| 名称       | 说明                                                       |
| ---------- | ---------------------------------------------------------- |
| label      | 自定义输入框标签，如果设置了 `label` 属性则不生效            |
| leftIcon  | 自定义输入框头部图标                                       |
| rightIcon | 自定义输入框尾部图标                                       |
| button     | 自定义输入框尾部按钮                                       |
| input      | 自定义输入框，使用此插槽后，与输入框相关的属性和事件将失效 |

### 外部样式类

| 类名                    | 说明           |
| ----------------------- | -------------- |
| customClass | 根节点样式类   |
| labelClass             | 左侧文本样式类 |
| inputClass             | 输入框样式类   |
| rightIconClass        | 右侧图标样式类 |
