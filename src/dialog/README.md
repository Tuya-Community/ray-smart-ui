---
category: 反馈
assets: SearchDeviceTipModal,GatewayAddDeviceProgress
---

# Dialog 弹出框

### 介绍

弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作，支持函数调用和组件调用两种方式。

### 引入

```jsx
import { Dialog, DialogInstance } from '@ray-js/smart-ui';
```

## 代码演示

```warning:⚠️注意
通过 DialogInstance 方式调用组件时，页面上需要存在对应 Id 的 Dialog 组件，且 Id 全局不能重复哦！
```

### 提示弹窗

用于提示一些消息，只包含一个确认按钮。

```jsx
import React from 'react';
import { DialogInstance, Dialog, Button } from '@ray-js/smart-ui';

export default function Demo() {
  const open = () => {
    DialogInstance.alert({
      message: '弹窗内容',
    }).then(() => {
      // on close
    });
  }
  return (
    <>
      <Dialog id="smart-dialog" />
      <Button onClick={open}>点击展示</Button>
    </>
  )
}
```

### 消息确认

`DialogInstance.confirm`用于确认消息，包含取消和确认按钮; `selector` 属性可以自定义的选择对应 Id 的 `Dialog` 组件。

```jsx
import React from 'react';
import { DialogInstance, Dialog, Button } from '@ray-js/smart-ui';

export default function Demo() {
  const open = () => {
    DialogInstance.confirm({
      selector: '#smart-dialog2',
      title: '标题',
      message: '弹窗内容',
    })
      .then(() => {
        // 确认
      })
      .catch(() => {
        // 取消
      });
  }
  return (
    <>
      <Dialog id="smart-dialog2" />
      <Button onClick={open}>点击展示</Button>
    </>
  )
}
```

### 输入框

用于输入文案信息，此时默认最大输入限制`maxLength`是`20`;`emptyDisabled` `v2.7.0` 属性可以限制输入框内为空时无法提交。

```jsx
import React from 'react';
import { DialogInstance, Dialog, Button } from '@ray-js/smart-ui';

const beforeClose = (action: 'confirm' | 'cancel' | 'overlay', value?: string): Promise<boolean> => {
  return new Promise((resolve) => {
    if (action === 'confirm') {
      // 不存在输入值则拦截确认操作
      resolve(!!value);
    } else {
      resolve(true);
    }
  });
}   

export default function Demo() {
  const open = () => {
    DialogInstance.input({
      title: 'Title',
      value: '',
      beforeClose,
      emptyDisabled: true,
      cancelButtonText: 'Sub Action',
    })
      .then(() => {
        // on confirm
      })
      .catch(() => {
        // on cancel
      });
  }
  return (
    <>
      <Dialog id="smart-dialog" />
      <Button onClick={open}>点击展示</Button>
    </>
  )
}
```

### 圆角按钮样式

将 theme 选项设置为 `round-button` 可以展示圆角按钮风格的弹窗。

```jsx
import React from 'react';
import { DialogInstance, Dialog, Button } from '@ray-js/smart-ui';

export default function Demo() {
  const openHasTitle = () => {
    DialogInstance.alert({
      title: '标题',
      message: '弹窗内容',
      theme: 'round-button',
    }).then(() => {
      // on close
    });
  }
  const open = () => {
    DialogInstance.alert({
      message: '弹窗内容',
      theme: 'round-button',
    }).then(() => {
      // on close
    });
  }
  return (
    <>
      <Dialog id="smart-dialog" />
      <Button onClick={openHasTitle}>点击展示(有标题)</Button>
      <Button onClick={open}>点击展示(无标题)</Button>
    </>
  )
}
```

### 异步关闭

通过 `beforeClose` 属性可以传入一个回调函数，在弹窗关闭前进行特定操作。  
> 注意：只支持API方式调用，不支持组件方式使用

```jsx
import React from 'react';
import { DialogInstance, Dialog, Button } from '@ray-js/smart-ui';

const beforeClose = (action: 'confirm' | 'cancel' | 'overlay', value?: string): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (action === 'confirm') {
        resolve(true);
      } else {
        // 拦截取消操作
        resolve(false);
      }
    }, 1000);
  });
}   

export default function Demo() {
  const open = () => {
    DialogInstance.confirm({
      title: '标题',
      message: '弹窗内容',
      beforeClose,
    });
  }
  return (
    <>
      <Dialog id="smart-dialog" />
      <Button onClick={open}>点击展示</Button>
    </>
  )
}
```


### 自定义图标 `v2.6.3`

icon 属性支持传入 svg string，底层用的是 SmartUI 的 Icon 组件，icon 属性就是传入name属性到 Icon 组件上


```jsx
import React from 'react';
import { DialogInstance, Dialog, Button } from '@ray-js/smart-ui';
import AlarmIcon from '@tuya-miniapp/icons/dist/svg/Alarm';

export default function Demo() {
  const open = () => {
    DialogInstance.confirm({
      title: 'Title',
      icon: AlarmIcon,
      iconColor: '#1989fa',
      iconSize: '36px',
      message: 'body',
      cancelButtonText: 'Sub Action',
    });
  }
  return (
    <>
      <Dialog id="smart-dialog" />
      <Button onClick={open}>点击展示</Button>
    </>
  )
}
```

### 组件调用

如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式。

```jsx
import React from 'react';
import { Dialog, Button, Image, SmartEventHandler } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  const [show, setShow] = React.useState(true);

  const onClose: SmartEventHandler = event => {
    const { detail } = event;
    if (detail === 'confirm') {
      setShow(false);
    }
  };

  return (
    <>
      <Button onClick={() => setShow(true)}>点击展示</Button>
      <Dialog
        useSlot
        title="标题"
        show={show}
        showCancelButton
        onClose={onClose}
      >
        <View style={{ display: 'flex', justifyContent: 'center' }}>
          <Image height="88" width="88" src="https://static1.tuyacn.com/static/tuya-miniapp-doc/_next/static/images/logo-small.png" />
        </View>
      </Dialog>
    </>
  )
}
```

### 自定义样式

如果需要自定义样式，建议使用 `customClass` 实现，不在推荐 `className` 属性（在自定义组件中使用并不会生效），使用方法如下  

方式一：组件调用  

```jsx
<Dialog
  title="标题"
  message="弹窗内容"
  show={show}
  customClass="my-custom-class"
/>
```

方式二：API 调用  

```jsx
<Dialog id="smart-dialog" customClass="my-custom-class" />
```

## API

### 方法

| 方法名  | 参数      | 返回值    | 介绍     |
| -------- | --------- | --------- | --------- |
| DialogInstance | `options` | `Promise` | 展示弹窗 |
| DialogInstance.alert | `options` | `Promise` | 展示消息提示弹窗 |
| DialogInstance.close | - | `void` | 关闭弹窗, 并清空缓存队列 |
| DialogInstance.confirm | `options` | `Promise` | 展示消息确认弹窗 |
| DialogInstance.input | `options` | `Promise` | 展示输入框弹窗 |
| DialogInstance.resetDefaultOptions | - | `void` | 重置默认配置，对所有 Dialog 生效 |
| DialogInstance.setDefaultOptions | `options` | `void` | 修改默认配置，对所有 Dialog 生效 |
| DialogInstance.stopLoading | - | `void` | 停止按钮的加载状态 |

### Options

icon: AlarmIcon,
  iconColor: '#1989fa',
  iconSize: '36px',

通过函数调用 Dialog 时，支持传入以下选项：

| 参数         | 说明  | 类型   | 默认值    |
| ------------ | --------- | -------------- | --------- |
| icon | 是否显示警告图标，或者icon的name值 | _boolean \| string`v2.6.3`_ | `false` |
| iconColor `v2.6.3` | icon的颜色 | _string_ | `#F04C4C` |
| iconSize `v2.6.3` | icon的大小 | _string_ | - |
| maxlength | 最大输入长度，设置为 -1 的时候不限制最大长度 | _number_ | `20` |
| message | 文本内容，支持通过`\n`换行 | _string_ | - |
| messageAlign | 内容对齐方式，可选值为`left` `right` | _string_ | `center` |
| password | 是否是密码类型 | _boolean_ | `false` |
| placeholder | 输入框为空时占位符 | _string_ | - |
| theme | 样式风格，可选值为`round-button` | _string_ | `default` |
| title | 标题 | _string_ | - |
| value | 输入框的初始值 | _string_ | - |
| width | 弹窗宽度，默认单位为`px` | _string \| number_ | `320px` |
| zIndex | z-index 层级 | _number_ | `100` |
| customStyle | 自定义样式 | _string_ | '' |
| selector | 自定义选择器 | _string_ | `#smart-dialog` |
| cancelButtonText | 取消按钮的文案 | _string_ | `Cancel` |
| closeOnClickOverlay | 点击遮罩层时是否关闭弹窗 | _boolean_ | `false` |
| confirmButtonText | 确认按钮的文案 | _string_ | `Confirm` |
| overlay | 是否展示遮罩层 | _boolean_ | `true` |
| overlayStyle | 自定义遮罩层样式 | _object_ | - |
| showCancelButton | 是否展示取消按钮 | _boolean_ | `false` |
| showConfirmButton | 是否展示确认按钮 | _boolean_ | `true` |
| beforeClose | 关闭前的回调函数，返回 `false` 可阻止关闭，支持返回 Promise | _(action) => boolean \| Promise\<boolean\>_ | - |
| context | 选择器的选择范围，可以传入自定义组件的 this 作为上下文 | _object_ | 当前页面 |
| transition | 动画名称，可选值为`fade` `none` | _string_ | `scale` |
| nativeDisabled `v2.3.8` | 开启弹框期间是否禁用本地手势 | _boolean_ | `false` |
| autoClose `v2.6.3` | 是否自动点击回调后关闭 | _boolean_ | `true` |


### Props

通过组件调用 Dialog 时，支持以下 Props:

| 参数              | 说明  | 类型   | 默认值    |
| ----------------- | --------- | ------------ | --------- |
| confirmButtonId | 确认按钮的标识符，作为底层原生 button 组件的 id 值 | _string_ | - |
| icon | 是否显示警告图标，或者icon的name值 | _boolean \| string`v2.6.3`_ | `false` |
| iconColor `v2.6.3` | icon的颜色 | _string_ | `#F04C4C` |
| iconSize `v2.6.3` | icon的大小 | _string_ | - |
| maxlength | 最大输入长度，设置为 -1 的时候不限制最大长度 | _number_ | `20` |
| message | 文本内容，支持通过`\n`换行 | _string_ | - |
| messageAlign | 内容对齐方式，可选值为`left` `right` | _string_ | `center` |
| password | 是否是密码类型 | _boolean_ | `false` |
| placeholder | 输入框为空时占位符 | _string_ | - |
| show | 是否显示弹窗 | _boolean_ | - |
| theme | 样式风格，可选值为`round-button` | _string_ | `default` |
| title | 标题 | _string_ | - |
| value | 输入框的初始值 | _string_ | - |
| width | 弹窗宽度，默认单位为`px` | _string \| number_ | `320px` |
| zIndex | z-index 层级 | _number_ | `100` |
| customStyle | 自定义样式 | _React.CSSProperties_ | - |
| showConfirmButton | 是否展示确认按钮 | _boolean_ | `true` |
| cancelButtonColor | 取消按钮的字体颜色 | _string_ | `#333` |
| cancelButtonText | 取消按钮的文案 | _string_ | `取消` |
| closeOnClickOverlay | 点击遮罩层时是否关闭弹窗 | _boolean_ | `false` |
| confirmButtonColor | 确认按钮的字体颜色 | _string_ | `#ee0a24` |
| confirmButtonText | 确认按钮的文案 | _string_ | `确认` |
| overlay | 是否展示遮罩层 | _boolean_ | `true` |
| overlayStyle | 自定义遮罩层样式 | _object_ | - |
| showCancelButton | 是否展示取消按钮 | _boolean_ | `false` |
| useCancelButtonSlot | 是否使用自定义取消按钮的插槽 | _boolean_ | `false` |
| useConfirmButtonSlot | 是否使用自定义确认按钮的插槽 | _boolean_ | `false` |
| useSlot | 是否使用自定义内容的插槽 | _boolean_ | `false` |
| useTitleSlot | 是否使用自定义标题的插槽 | _boolean_ | `false` |
| beforeClose | 关闭前的回调函数，返回 `false` 可阻止关闭，支持返回 Promise | _(action, value?: string) => boolean \| Promise\<boolean\>_ | - |
| transition | 动画名称，可选值为`fade` | _string_ | `scale` |
| autoClose `v2.6.3` | 是否自动点击回调后关闭 | _boolean_ | `false` |


### Events

| 事件         | 说明      | 回调参数        |
| ------------ | -------------- | ------------ |
| onCancel | 点击取消按钮时触发 | - |
| onClose | 弹窗关闭时触发 | event.detail: 触发关闭事件的来源，<br>枚举为`confirm`,`cancel`,`overlay` |
| onConfirm | 点击确认按钮时触发 | - |

### Slot

| 名称         | 说明                |
| ---------- | ----------------------- |
| cancelButton | 自定义`cancel-button`显示内容，需要 `use-cancel-button-slot` 为 `true` |
| confirmButton | 自定义`confirm-button`显示内容，需要 `use-confirm-button-slot` 为 `true` |
| title | 自定义`title`显示内容，如果设置了`title`属性则不生效 |

### 外部样式类

| 类名                 | 说明           |
| -------------------- | -------------- |
| cancelButtonClass | 取消按钮样式类 |
| confirmButtonClass | 确认按钮样式类 |
| customClass | 根节点样式类 |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/material/smartui?comId=config-provider)。
| 名称    | 默认值   | 描述 |
| ------------ | --------- | ---- |
| --dialog-cancel-color `v2.1.7` | _var(--app-B4-N3, rgba(0, 0, 0, 0.5))_ | 取消按钮颜色 |
| --dialog-confirm-color `v2.1.7` | _var(--app-B4-N1, rgba(0, 0, 0, 1))_ | 确认按钮颜色 |
| --dialog-confirm-font-weight `v2.5.1` | _normal_ | 确认按钮的字重 |
| --dialog-cancel-font-weight `v2.5.1` | _normal_ | 取消按钮字重 |
| --dialog-width | _311px_ | 弹窗宽度 |
| --dialog-small-screen-width | _90%_ | 小屏幕弹窗宽度 |
| --dialog-font-size | _16px_ | 对话框字体大小 |
| --dialog-border-radius | _16px_ | 圆角半径 |
| --dialog-background-color | _var(--smart-ui-dialog-background, rgba(255, 255, 255, 1))_ | 背景颜色 |
| --dialog-header-font-color | _var(--app-B4-N1, rgba(0, 0, 0, 1))_ | 标题字体颜色 |
| --dialog-header-font-weight | _400_ | 标题字体粗细 |
| --dialog-header-line-height | _24px_ | 标题行高 |
| --dialog-header-padding `2.3.5` | _0_ | 头部标题内边距 |
| --dialog-header-padding-top | _24px_ | 头部标题顶部内边距 |
| --dialog-header-isolated-padding | _@padding-lg 0_ | 标题内边距 |
| --dialog-message-padding | _24px_ | 消息内边距 |
| --dialog-message-font-size | _16px_ | 消息字体大小 |
| --dialog-message-line-height | _20px_ | 消息行高 |
| --dialog-message-max-height | _60vh_ | 消息最大高度 |
| --dialog-message-text-color | _var(--app-B4-N1, rgba(0, 0, 0, 1))_ | 消息字体颜色 |
| --dialog-has-title-message-font-size | _14px_ | 标题消息字体大小 |
| --dialog-has-title-message-text-color | _var(--app-B4-N3, rgba(0, 0, 0, 0.5))_ | 标题消息字体颜色 |
| --dialog-has-title-message-padding-top | _8px_ | 标题消息顶部内边距 |
| --dialog-header-icon-size | _39px_ | 图标大小 |
| --dialog-input-height | _40px_ | 输入框高度 |
| --dialog-input-background-color | _var(--app-B4-N9, rgba(0, 0, 0, 0.05))_ | 输入框背景色 |
| --dialog-input-margin | _0 16px 24px_ | 输入框外边距 |
| --dialog-input-padding | _0 10px_ | 输入框内边距 |
| --dialog-input-border-radius | _10px_ | 输入框圆角半径 |
| --dialog-input-font-size | _14px_ | 输入框字体大小 |
| --dialog--round-button-border-radius `v2.3.5` | _20px_ | 当设置`theme: 'round-button'`的按钮圆角 |