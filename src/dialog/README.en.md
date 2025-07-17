---
category: Feedback
---


# Dialog

### Introduction

Pop-up modal dialogs are commonly used for message prompts, message confirmations, or to complete specific interactions within the current page. They support both function calls and component calls.

### Introduction

```jsx
import { Dialog, DialogInstance } from '@ray-js/smart-ui';
```

## Code Demo

### Message prompt

Used to remind some messages, including only one confirmation button.

```jsx
import { Dialog, Button } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [show, setShow] = React.useState(false)
  return <>
    <Dialog id="smart-dialog" show={show} />
    <Button onClick={() => setShow(!show)}>Click to display</Button>
  </>
}
```

```javascript
import { Button } from '@ray-js/smart-ui';
import React from 'react';
import { DialogInstance, Dialog } from '@ray-js/smart-ui';

export default function Demo() {
  return <>
    <Dialog id="smart-dialog" />
    <Button onClick={() => {
      DialogInstance.alert({
        message: 'Pop -up content',
      }).then(() => {
        // on close
      });
    }}>Click to display</Button>
  </>
}
```

### Message confirmation

Used to confirm the message, including the cancellation and confirmation button.

```jsx
import { Dialog } from '@ray-js/smart-ui';

<Dialog id="smart-dialog" />
```

```javascript
import { DialogInstance } from '@ray-js/smart-ui';

DialogInstance.confirm({
  title: 'title',
  message: 'Pop -up content',
})
  .then(() => {
    // on confirm
  })
  .catch(() => {
    // on cancel
  });
```

### Input box

Used to enter copywriting information.

```jsx
import { Dialog } from '@ray-js/smart-ui';

<Dialog id="smart-dialog" />
```

```javascript
import { DialogInstance } from '@ray-js/smart-ui';

DialogInstance.input({
  title: 'Title',
  value: '',
  cancelButtonText: 'Sub Action',
})
  .then(() => {
    // on confirm
  })
  .catch(() => {
    // on cancel
  });
```

### Corner button style

Setting the theme option to `round-button` will display a popup with rounded button style.

```jsx
import { Dialog } from '@ray-js/smart-ui';

<Dialog id="smart-dialog" />
```

```javascript
import { DialogInstance } from '@ray-js/smart-ui';

DialogInstance.alert({
  title: 'title',
  message: 'Pop -up content',
  theme: 'round-button',
}).then(() => {
  // on close
});

DialogInstance.alert({
  message: 'Pop -up content',
  theme: 'round-button',
}).then(() => {
  // on close
});
```

### Asynchronous closure

You can pass a callback function through the `beforeClose` attribute to perform specific actions before the dialog closes.

```jsx
import { Dialog } from '@ray-js/smart-ui';

<Dialog id="smart-dialog" />
```

```javascript
import { DialogInstance } from '@ray-js/smart-ui';

const beforeClose = (action) =>
  new Promise((resolve) => {
    setTimeout(() => {
      if (action === 'confirm') {
        resolve(true);
      } else {
        // Interception and cancellation operation
        resolve(false);
      }
    }, 1000);
  });

DialogInstance.confirm({
  title: 'title',
  message: 'Pop -up content',
  beforeClose,
});
```

### Component call

If you need to embed components or other custom content in the pop -up window, you can use components to call.

```jsx
import React from 'react';
import { Image } from '@ray-js/ray';
import { Dialog } from '@ray-js/smart-ui';

const [show, setShow] = React.useState(true);

const onClose = () => setShow(false);

<Dialog
  useSlot
  title="title"
  show={show}
  showCancelButton
  confirmButtonOpenType="getUserInfo"
  onClose={onClose}
>
  <Image src="https://static1.tuyacn.com/static/tuya-miniapp-doc/_next/static/images/logo-small.png" />
</Dialog>
```

### Custom style

If you need to customize the style, it is recommended to use `customClass` instead. The `className` attribute is no longer recommended (it will not work in custom components). The usage is as follows:

#### Component call

```jsx
<Dialog
  title="title"
  message="Pop -up content"
  show={show}
  customClass="my-custom-class"
/>
```

#### API call

```jsx
<Dialog id="smart-dialog" customClass="my-custom-class" />
```

## API

### method

| Method Name                | Parameters | Return Value | Description                                                                               |
| -------------------------- | ---------- | ------------ | ----------------------------------------------------------------------------------------- |
| Dialog                     | `options`  | `Promise`    | Show the pop -up window                                                                   |
| Dialog.alert               | `options`  | `Promise`    | Show message prompt pop -up window                                                        |
| Dialog.close               | -          | `void`       | Close the pop -up window                                                                  |
| Dialog.confirm             | `options`  | `Promise`    | Display message confirmation dialog, at this point `showCancelButton` defaults to `true`. |
| Dialog.input               | `options`  | `Promise`    | Show the input box pop -up window                                                         |
| Dialog.resetDefaultOptions | -          | `void`       | Reset the default configuration and take effect on all Dialog                             |
| Dialog.setDefaultOptions   | `options`  | `void`       | Modify the default configuration and take effect on all Dialog                            |
| Dialog.stopLoading         | -          | `void`       | The loading state of the stop button                                                      |

### Options

When the dialog is called through the function, the following options are supported:

| Parameters          | Description                                                                                            | Type                                        | Default value  |
| ------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------- | -------------- |
| beforeClose         | The callback function before closed, returning `false` to prevent closure, support returning Promise   | _(action) => boolean \| Promise\<boolean\>_ | -              |
| cancelButtonText    | Cancellation of the copy of the button                                                                 | _string_                                    | `Cancel`       |
| closeOnClickOverlay | Whether to close the pop -up window when clicking on the mask layer                                    | _boolean_                                   | `false`        |
| confirmButtonText   | Copy for the confirm buttons                                                                           | _string_                                    | `Confirm`      |
| context             | The selection range of the selector can be passed into the this of the custom component as the context | _object_                                    | Current page   |
| customStyle         | Custom style                                                                                           | _object_                                    | ''             |
| icon                | Whether to display a warning icon                                                                      | _boolean_                                   | `false`        |
| maxlength           | The maximum input length is not limited to the maximum length when set to -1                           | _number_                                    | `-1`           |
| message             | Text content, support through `\n`                                                                     | _string_                                    | -              |
| messageAlign        | Content alignment method, optional value is `left` `right`                                             | _string_                                    | `center`       |
| overlay             | Whether to show the mask layer                                                                         | _boolean_                                   | `true`         |
| overlayStyle        | Custom mask layer style                                                                                | _object_                                    | -              |
| password            | Whether it is a password type                                                                          | _boolean_                                   | `false`        |
| placeholder         | The input box is the place where time is empty                                                         | _string_                                    | -              |
| selector            | Customized selector                                                                                    | _string_                                    | `smart-dialog` |
| showCancelButton    | Whether to show the cancellation button, when the `dialog.confirm` is called                           | _boolean_                                   | `false`        |
| showConfirmButton   | Whether to show the confirmation button                                                                | _boolean_                                   | `true`         |
| theme               | Style style, the optional value is `ROND-Button`                                                       | _string_                                    | `default`      |
| title               | title                                                                                                  | _string_                                    | -              |
| transition          | Animated name, optional value is `fade` `none`                                                         | _string_                                    | `scale`        |
| value               | The initial value of the input box                                                                     | _string_                                    | -              |
| width               | The popup window width, the default unit is `px`                                                       | _string \| number_                          | `320px`        |
| zIndex              | z-index Level                                                                                          | _number_                                    | `100`          |

<!-- ### OpenType Options

使用`confirmButtonOpenType`后，支持以下选项：

| 参数             | 说明                                                                | 类型     | 默认值       | open-type     |
| ---------------- | ------------------------------------------------------------------- | -------- | ------------ | ------------- |
| appParameter     | 打开 APP 时，向 APP 传递的参数                                      | _string_ | -            | `launchApp`   |
| businessId       | 客服消息子商户 id                                                   | _number_ | -            | `contact`     |
| lang             | 指定返回用户信息的语言，zh_CN 简体中文，<br>zh_TW 繁体中文，en 英文 | _string_ | `en`         | `getUserInfo` |
| sendMessageImg   | sendMessageImg                                                      | _string_ | 截图         | `contact`     |
| sendMessagePath  | 会话内消息卡片点击跳转小程序路径                                    | _string_ | 当前分享路径 | `contact`     |
| sendMessageTitle | 会话内消息卡片标题                                                  | _string_ | 当前标题     | `contact`     |
| sessionFrom      | 会话来源                                                            | _string_ | -            | `contact`     |
| showMessageCard  | 显示会话内消息卡片                                                  | _string_ | `false`      | `contact`     | --> |

### Props

When the dialog is called through the component, the following props are supported:

| Parameters           | Description                                                                                          | Type                                                        | Default value |
| -------------------- | ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ------------- |
| beforeClose          | Callback function before closing, returning `false` can prevent closing, supports returning Promise. | _(action, value?: string) => boolean \| Promise\<boolean\>_ | -             |
| cancelButtonColor    | Cancel the font color of the button                                                                  | _string_                                                    | `#333`        |
| cancelButtonText     | Cancellation of the copy of the button                                                               | _string_                                                    | `Cancel`      |
| closeOnClickOverlay  | Whether to close the pop -up window when clicking on the mask layer                                  | _boolean_                                                   | `false`       |
| confirmButtonColor   | Confirm the font color of the button                                                                 | _string_                                                    | `#ee0a24`     |
| confirmButtonId      | The identifier of the confirmation button, as the ID value of the underlying native button component | _string_                                                    | -             |
| confirmButtonText    | Copy for the confirm buttons                                                                         | _string_                                                    | `Confirm`     |
| customStyle          | Custom style                                                                                         | _object_                                                    | ''            |
| icon                 | Whether to display a warning icon                                                                    | _boolean_                                                   | `false`       |
| maxlength            | The maximum input length is not limited to the maximum length when set to -1                         | _number_                                                    | `-1`          |
| message              | Text content, support through `\n`                                                                   | _string_                                                    | -             |
| messageAlign         | Content alignment options: `left` `right`                                                            | _string_                                                    | `center`      |
| overlay              | Whether to show the mask layer                                                                       | _boolean_                                                   | `true`        |
| overlayStyle         | Custom mask layer style                                                                              | _object_                                                    | -             |
| password             | Whether it is a password type                                                                        | _boolean_                                                   | `false`       |
| placeholder          | The input box is the place where time is empty                                                       | _string_                                                    | -             |
| show                 | Whether to display a pop -up window                                                                  | _boolean_                                                   | -             |
| showCancelButton     | Whether to show the cancellation button                                                              | _boolean_                                                   | `false`       |
| showConfirmButton    | Whether to show the confirmation button                                                              | _boolean_                                                   | `true`        |
| slot                 | Customize slot content nodes, refer to the Slot documentation section for details.                   | _Record<string, React.ReactNode>_                           | `null`        |
| theme                | Style style, the optional value is `ROND-Button`                                                     | _string_                                                    | `default`     |
| title                | title                                                                                                | _string_                                                    | -             |
| transition           | Animation name, options are `fade`                                                                   | _string_                                                    | `scale`       |
| useCancelButtonSlot  | To use a custom cancel button slot, it must be used together with the `slot` props.                  | _boolean_                                                   | `false`       |
| useConfirmButtonSlot | To use a custom confirmation button slot, you need to use it with the `slot` props.                  | _boolean_                                                   | `false`       |
| useSlot              | To use custom content slots, you need to use them with the `slot` props.                             | _boolean_                                                   | `false`       |
| useTitleSlot         | To use a custom title slot, it must be used together with the `slot` props.                          | _boolean_                                                   | `false`       |
| value                | The initial value of the input box                                                                   | _string_                                                    | -             |
| width                | The popup window width, the default unit is `px`                                                     | _string \| number_                                          | `320px`       |
| zIndex               | z-index Level                                                                                        | _number_                                                    | `100`         |

### Events

| Event     | Description                                 | Return parameters                                                                                 |
| --------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| onCancel  | Trigger when clicking the cancel button     | -                                                                                                 |
| onClose   | Triggered when the pop -up window is closed | event.detail: The source of the close event trigger, enumerated as `confirm`, `cancel`, `overlay` |
| onConfirm | Trigger when clicking the confirm button    | -                                                                                                 |

### Slot

| Name          | Description                                                                                     |
| ------------- | ----------------------------------------------------------------------------------------------- |
| cancelButton  | To customize the `cancelButton` display content, `useCancelButtonSlot` must be set to `true`.   |
| confirmButton | To customize the `confirmButton` display content, `useConfirmButtonSlot` must be set to `true`. |
| title         | Custom `title` display content, will not be effective if `title` attribute is set.              |

### External style class

| Class Name         | Description              |
| ------------------ | ------------------------ |
| cancelButtonClass  | Cancel button style      |
| confirmButtonClass | Confirm the button style |
| customClass        | Root node nodes          |
