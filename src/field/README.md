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

`hiddenLabel` 可以隐藏整个左侧内容。

```jsx
import { Field, CellGroup } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value, setValue] = React.useState('')
  const [value2, setValue2] = React.useState('')
  const onChange = (event) => {
    // event.detail 为当前输入的值
    console.log(event.detail);
  }
  const onChange2 = (event) => {
    setValue2(event.detail)
  }
  return (
    <CellGroup>
      <Field 
        value={value}
        label="标题"
        placeholder="请输入"
        onChange={onChange}
      />
      <Field 
        value={value} 
        label="标题"
        placeholder="请输入"
        hiddenLabel
        onChange={onChange2}
      />
    </CellGroup>
  );
}
```

### 自定义类型

根据`type`属性定义不同类型的输入框；`cardMode` 开启此模式可以开启卡片输入模式。

```jsx
import { Field, CellGroup } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [password, setPassword] = React.useState('')
  const [num, setNum] = React.useState('')
  return (
    <CellGroup>
      <Field 
        value={password}
        type="password"
        label="密码"
        placeholder="请输入"
      />
      <Field 
        value={num} 
        cardMode
        type="number"
        subLabel="副标题"
        label="标题"
        placeholder="请输入"
      />
    </CellGroup>
  );
}
```

### 禁用输入框

`disabled` 可以设置整个输入框禁用。

```jsx
import { Field, CellGroup } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value, setValue] = React.useState('')
  const [num, setNum] = React.useState('')
  return (
    <CellGroup>
      <Field 
        value={value}
        disabled
        placeholder="输入框已禁用"
        label="标题"
      />
      <Field 
        value={num} 
        cardMode
        disabled
        subLabel="副标题"
        label="标题"
        placeholder="请输入"
      />
    </CellGroup>
  );
}
```

### 显示图标

使用插槽 `leftIcon` 可以插入左侧的图标。

```jsx
import { Field, Icon, CellGroup } from '@ray-js/smart-ui';
import { Sun } from '@tuya-miniapp/icons/dist/svg/Sun';
import { Image } from '@ray-js/ray'
import React from 'react';

export default function Demo() {
  const [num, setNum] = React.useState('')
  return (
    <CellGroup>
      <Field 
        label="标题"
        placeholder="请输入"
        slot={{
          leftIcon: <Icon name={Sun} color="#3678E3" size="22" />
        }}
      />
      <Field 
        value={num}
        cardMode
        label="标题"
        placeholder="请输入"
        slot={{
          leftIcon: (
            <Image 
              style={{ height: '50px', width: '50px' }}
              src="https://images.tuyacn.com/rms-static/974a30f0-a624-11ef-be03-d1a4feb99779-1731986155903.png?tyName=light-img" 
            />
          )
        }}
      />
    </CellGroup>
  );
}
```

### 错误提示

通过`errorMessage`属性增加对应的错误提示;设置 `interError` 可以将错误信息覆盖 `placeholder` 的内容。

```jsx
import { Field, Icon, CellGroup } from '@ray-js/smart-ui';
import { Image } from '@ray-js/ray'
import React from 'react';

export default function Demo() {
  const [value, setValue] = React.useState('')
  const [num, setNum] = React.useState('')
  return (
    <CellGroup>
      <Field 
        label="标题"
        errorMessage="请输入用户名"
        interError
        required
      />
      <Field 
        value={value}
        label="标题"
        placeholder="请输入"
        errorMessage="格式错误"
        required
      />
      <Field 
        value={num}
        cardMode
        label="标题"
        subLabel="标题"
        placeholder="请输入"
        errorMessage="格式错误"
        required
        slot={{
          leftIcon: (
            <Image 
              style={{ height: '50px', width: '50px' }}
              src="https://images.tuyacn.com/rms-static/974a30f0-a624-11ef-be03-d1a4feb99779-1731986155903.png?tyName=light-img" 
            />
          )
        }}
      />
    </CellGroup>
  );
}
```

### 插入按钮

通过 button slot 可以在输入框尾部插入按钮。

```jsx
import { Field, Button, CellGroup } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [num, setNum] = React.useState('')
  return (
    <CellGroup>
      <Field 
        value={num}
        label="标题"
        placeholder="请输入短信验证码"
        type="number"
        inputAlign="left"
        slot={{
          button: <Button type="info" custom-class="button">发送验证码</Button>
        }}
      />
    </CellGroup>
  );
}
```

### 留言

设置 type 为 `textarea` 模式时，可以在末尾显示输入的字数数量和限制数量。

```jsx
import { Field, CellGroup } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [message, setMessage] = React.useState('')
  const onChange = (event) => {
    setMessage(event.detail)
  }
  return (
    <Field 
      value={message}
      label="事项"
      type="textarea"
      placeholder="请输入留言"
      showWordLimit
      maxlength={200}
      onChange={onChange}
    />
  );
}
```

## API

### Props

| 参数                          | 说明                                                                                                           | 类型                | 默认值  |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------- | ------- |
| adjustPosition | 键盘弹起时，是否自动上推页面 | _boolean_ | `true` |
| alwaysEmbed `v1.9.2` | 强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效) | _boolean_ | `false` |
| arrowDirection | 箭头方向，可选值为 `left` `up` `down` | _string_ | - |
| autoFocus  `@deprecated 小程序不支持` | 自动聚焦，拉起键盘 | _boolean_ | `false` |
| autosize | 是否自适应内容高度，只对 textarea 有效，<br>可传入对象,如 { maxHeight: 100, minHeight: 50 }，<br>单位为`px` | _boolean \| object_ | `false` |
| border | 是否显示内边框 | _boolean_ | `false` |
| center | 是否使内容垂直居中 | _boolean_ | `false` |
| clearTrigger `v1.8.4` | 显示清除图标的时机，`always` 表示输入框不为空时展示，<br>`focus` 表示输入框聚焦且不为空时展示 | _string_ | `focus` |
| clearable | 是否启用清除控件 | _boolean_ | `false` |
| clickable | 是否开启点击反馈 | _boolean_ | `false` |
| confirmHold | 点击键盘右下角按钮时是否保持键盘不收起，在 type='textarea' 时无效 | _boolean_ | `false` |
| confirmType | 设置键盘右下角按钮的文字，仅在 type='text' 时生效 | _string_ | `done` |
| cursor | 指定 focus 时的光标位置 | _number_ | `-1` |
| cursorSpacing | 输入框聚焦时底部与键盘的距离 | _number_ | `50` |
| customStyle | 自定义样式 | _React.CSSProperties_ | - |
| disableDefaultPadding | 是否去掉 iOS 下的默认内边距，只对 textarea 有效 | _boolean_ | `true` |
| disabled | 是否禁用输入框 | _boolean_ | `false` |
| error | 是否将输入内容标红 | _boolean_ | `false` |
| errorMessage | 底部错误提示文案，为空时不展示 | _string_ | `''` |
| errorMessageAlign | 底部错误提示文案对齐方式，可选值为 `center` `right` | _string_ | `''` |
| extraEventParams `v1.10.12` | 开启事件增强模式，会在 input 和 change 事件额外提供 `cursor` 和 `keyCode` 参数，计划在下一个大版本作为默认行为 | _boolean_ | `false` |
| fixed | 如果 type 为 `textarea` 且在一个 `position:fixed` 的区域，需要显示指定属性 fixed 为 true | _boolean_ | `false` |
| focus `@deprecated 小程序不支持` | 获取焦点 | _boolean_ | `false` |
| holdKeyboard | focus 时，点击页面的时候不收起键盘 | _boolean_ | `false` |
| inputAlign | 输入框内容对齐方式，可选值为 `center` `right` | _string_ | - |
| isLink | 是否展示右侧箭头并开启点击反馈 | _boolean_ | `false` |
| label | 输入框左侧文本 | _string_ | - |
| leftIcon | 左侧图标svg值或图片链接，可选值见 [Icon 组件](/material/smartui?comId=icon) | _string_ | - |
| maxlength | 最大输入长度，设置为 -1 的时候不限制最大长度 | _number_ | `-1` |
| name | 在表单内提交时的标识符。可以通过配置 `name` 来扩大点击区域 | _string_ | - |
| password | 是否是密码类型 | _boolean_ | `false` |
| placeholder | 输入框为空时占位符 | _string_ | - |
| placeholderStyle | 指定 placeholder 的样式 | _React.CSSProperties_ | - |
| readonly | 是否只读 | _boolean_ | `false` |
| required | 是否显示表单必填星号 | _boolean_ | `false` |
| rightIcon | 右侧图标svg值或图片链接，可选值见 [Icon 组件](/material/smartui?comId=icon) | _string_ | - |
| selectionEnd | 光标结束位置，自动聚集时有效，需与 selection-start 搭配使用 | _number_ | `-1` |
| selectionStart | 光标起始位置，自动聚集时有效，需与 selection-end 搭配使用 | _number_ | `-1` |
| showConfirmBar | 是否显示键盘上方带有”完成“按钮那一栏，只对 textarea 有效 | _boolean_ | `true` |
| showWordLimit | 是否显示字数统计，需要设置`maxlength`属性 | _boolean_ | `false` |
| size | 单元格大小，可选值为 `large` | _string_ | - |
| titleWidth | 标题宽度 | _string_ | `6.2em` |
| type | 可设置为任意原生类型, 如 `number` `idcard` `textarea` `digit` `nickname` | _string_ | `text` |
| value | 当前输入的值 | _string \| number_ | - |
| interError `v2.1.0` | 错误信息是否在输入框内 | _boolean_ | - |
| subLabel `v2.1.0` | 副标题 | _string_ | - |
| cardMode `v2.1.0` | 卡片模式 | _boolean_ | - |
| hiddenLabel `v2.1.0` | 隐藏左侧label相关内容 | _boolean_ | - |

### Events

| 事件                          | 说明                                                   | 回调参数                                                                                                 |
| ----------------------------- | ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| onBlur | 输入框失焦时触发 | event.detail.value: 当前输入值; <br>event.detail.cursor: 游标位置(如果 `type` 不为 `textarea`，值为 `0`) |
| onChange | 输入内容时触发 | event.detail: 当前输入值; 在 extra-event-params 为 `true` 时为 [InputDetail](#InputDetail) |
| onClear | 点击清空控件时触发 | - |
| onClickIcon | 点击尾部图标时触发 | - |
| onClickInput | 点击输入区域时触发 | - |
| onConfirm | 点击完成按钮时触发 | event.detail: 当前输入值 |
| onFocus | 输入框聚焦时触发 | event.detail.value: 当前输入值; <br>event.detail.height: 键盘高度 |
| onInput | 输入内容时触发 | event.detail: 当前输入值; 在 extra-event-params 为 `true` 时为 [InputDetail](#InputDetail) |
| onKeyboardheightchange | 键盘高度发生变化的时候触发此事件 | event.detail = { height: height, duration: duration } |
| onLinechange | 输入框行数变化时调用，只对 textarea 有效 | event.detail = { height: 0, heightRpx: 0, lineCount: 0 } |
| onNicknamereview `v1.11.5` | 用户昵称审核完毕后触发，仅在 type 为 "nickname" 时有效 | event.detail = { pass, timeout } |

### InputDetail

| 参数     | 说明                                                                                                                                                                    | 类型       | 默认值 |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ------ |
| callback | 调用该函数传 `{ value: string, cursor: number }` 来替换输入框的内容，具体用法可以参考 [wx-input](https://developers.weixin.qq.com/miniprogram/dev/component/input.html) | _function_ | - |
| cursor | 光标位置 | _number_ | - |
| keyCode | 键值 | _number_ | - |
| value | 当前输入值 | _string_ | - |

### Slot

| 名称       | 说明                                                       |
| ---------- | ---------------------------------------------------------- |
| button | 自定义输入框尾部按钮 |
| input | 自定义输入框，使用此插槽后，与输入框相关的属性和事件将失效 |
| label | 自定义输入框标签，如果设置了`label`属性则不生效 |
| leftIcon | 自定义输入框头部图标 |
| rightIcon | 自定义输入框尾部图标 |

### 外部样式类

| 类名                    | 说明           |
| ----------------------- | -------------- |
| customClass `v1.10.21` | 根节点样式类 |
| inputClass | 输入框样式类 |
| labelClass | 左侧文本样式类 |
| rightIconClass | 右侧图标样式类 |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/material/smartui?comId=config-provider)。

| 名称                          | 默认值                                 | 描述 |
| ----------------------------- | -------------------------------------- | ---- |
| --field-label-color   | _var(--app-B6-N1, rgba(0, 0, 0, 1))_   | label颜色    |
| --field-input-text-color  | _var(--app-B6-N1, rgba(0, 0, 0, 1))_  | input文字颜色    |
| --field-input-text-font-size `v2.1.0`  | _16px_   | 输入框内的字体大小    |
| --field-input-error-text-color  | _var(--app-M2, #f04c4c)_   | error模式文字颜色    |
| --field-placeholder-text-color  | _var(--app-B6-N4, rgba(0, 0, 0, 0.4))_   | placeholder文字颜色    |
| --field-icon-size  | _16px_   | icon字体大小    |
| --field-clear-icon-size  | _16px_   | 清楚icon字体大小    |
| --field-clear-icon-color  | _var(--app-B4-N4, rgba(0, 0, 0, 0.4))_   | 清除icon颜色    |
| --field-icon-container-color  | _#969799_   | 右侧icon盒子字体颜色    |
| --field-error-message-color  | _var(--app-M2, #f04c4c)_   | 错误提示文字颜色    |
| --field-error-message-text-font-size  | _14px_   | 提示文字字体大小    |
| --field-text-area-min-height  | _130px_   | textarea最小高度    |
| --field-word-limit-color  | _var(--app-B6-N4, rgba(0, 0, 0, 0.4))_   | 输入长度限制文字颜色    |
| --field-disabled-opacity `v2.1.0`  | _0.7_   | 禁用透明度    |
| --field-label-font-size `v2.1.0`  | _16px_   | label字体大小    |
| --field-label-line-height `v2.1.0`  | _18px_   | label标题字体高度    |
| --field-sub-label-font-size `v2.1.0`  | _14px_   | 副标题字体大小    |
| --field-sub-label-line-height `v2.1.0`  | _16px_   | 副标题字体高度    |
| --field-error-message-text-line-height `v2.1.0`  | _16px_   | 错误提示字体高度    |
| --field-subtitle-text-color `v2.1.0`  | _var(--app-B6-N3, rgba(0, 0, 0, 0.5))_   | 副标题颜色    |
| --field-left-icon-margin-right `v2.1.0`  | _10px_   | icon的右侧外边距    |
| --field-left-body-padding-right `v2.1.0`  | _16px_   | 左侧部分的右内边距    |

#### card模式CSS变量
| 名称                          | 默认值                                 | 描述 |
| ----------------------------- | -------------------------------------- | ---- |
| --field-card-border-radius `v2.1.0`   | _8px_   | 卡片边框圆角    |
| --field-card-background `v2.1.0`   | _var(--app-B6-N7, rgba(0, 0, 0, 0.1))_   | 卡片输入输背景色    |
| --field-card-width `v2.1.0`   | _105px_   | 卡片输入宽度    |
| --field-card-height `v2.1.0`   | _38px_   | 卡片输入高度    |
| --field-card-padding `v2.1.0`   | _0 10px_   | 卡片输入框内部padding    |

#### textarea CSS变量
| 名称                          | 默认值                                 | 描述 |
| ----------------------------- | -------------------------------------- | ---- |
| --field-word-limit-font-size  | _10px_   | 输入长度限制文字字体大小    |
| --field-word-limit-line-height  | _14px_   | 输入长度限制文字字体高度    |
| --field-word-num-full-color  | _var(--app-M2, #f04c4c)_   | 输入长度超出限制文字颜色    |
| --field-textarea-background `v2.1.0`   | _var(--app-B3, #ffffff)_   | 输入框背景色    |
| --field-textarea-border-radius `v2.1.0`   | _8px_   | 输入框圆角    |
| --field-textarea-padding `v2.1.0`   | _12px 8px_   | 输入内边距    |
| --field-textarea-limit-padding-bottom `v2.1.0`   | _20px_   | 输入框底部显示限制字符串数量时的内边距    |