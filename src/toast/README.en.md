---
category: Feedback
---

# Toast

### Introduction

Black transparent reminders pop up in the middle of the page are used for message notifications, loading prompts, and operating results prompts.

### Introduce

```js
import { Toast, ToastInstance } from '@ray-js/smart-ui';
```

## Code demonstration

### Text prompt

```js
ToastInstance('I am a reminder copy, it is recommended that no more than fifteen characters~');
```

```js
import { Toast } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Toast show id="smart-toast" message="This is the content" />;
}
```

### Loading prompt

Use the `ToastInstance.loading` method to display a loading prompt. The `forbidClick` attribute can be used to disable background clicks, and the `loadingType` attribute allows you to customize the type of loading icon.

```js
ToastInstance.loading({
  message: 'loading...',
  forbidClick: true,
});

// 自定义加载图标
ToastInstance.loading({
  message: 'loading...',
  forbidClick: true,
  loadingType: 'spinner',
});
```

### success/Failure Tips

```js
ToastInstance.success('Successful copy');
ToastInstance.fail('Failed copywriting');
```

### Dynamic update prompt

```js
const toast = ToastInstance.loading({
  duration: 0, // Continuously display toast
  forbidClick: true,
  message: 'Countdown 3 秒',
  selector: '#custom-selector',
});

let second = 3;
const timer = setInterval(() => {
  second--;
  if (second) {
    toast.setData({
      message: `Countdown ${second} 秒`,
    });
  } else {
    clearInterval(timer);
    Toast.clear();
  }
}, 1000);
```

```js
<Toast id="custom-selector" />
```

### OnClose Callback function

```js
ToastInstance({
  type: 'success',
  message: 'Successful submission',
  onClose: () => {
    console.log('Execute the onClose function');
  },
});
```

## API

### method

| Method Name                       | Parameter            | Return Value   | Introduction                                             |
| --------------------------------- | -------------------- | -------------- | -------------------------------------------------------- |
| ToastInstance                     | `options \| message` | toast Instance | Show prompt                                              |
| ToastInstance.clear               | `clearAll`           | `void`         | Close prompt                                             |
| ToastInstance.fail                | `options \| message` | toast Instance | Show failure prompt                                      |
| ToastInstance.loading             | `options \| message` | toast Instance | Show load prompt                                         |
| ToastInstance.resetDefaultOptions | -                    | `void`         | Reset default configuration, effective for all Toasts    |
| ToastInstance.setDefaultOptions   | `options`            | `void`         | Modify the default configuration to apply to all Toasts. |
| ToastInstance.success             | `options \| message` | toast Instance | Show successfully                                        |

### Options

| Parameters  | Description                                                                 | Type       | Default value |
| ----------- | --------------------------------------------------------------------------- | ---------- | ------------- |
| context     | The selection range of the picker can take the component's this as context. | _object_   | Current page  |
| duration    | Display duration (ms), when the value is 0, the toast will not disappear    | _number_   | `2000`        |
| forbidClick | Whether to prohibit background click                                        | _boolean_  | `false`       |
| loadingType | Loading icon type, optional value is `spinner`                              | _string_   | `circular`    |
| mask        | Whether to display the mask layer                                           | _boolean_  | `false`       |
| message     | content                                                                     | _string_   | `''`          |
| onClose     | The callback function when closed                                           | _Function_ | -             |
| position    | Position, optional values are `top`, `middle`, `bottom`                     | _string_   | `middle`      |
| selector    | Customized selector                                                         | _string_   | `smart-toast` |
| type        | Tip types, optional values are `loading`, `success`, `fail`, `html`         | _string_   | `text`        |
| zIndex      | z-index level                                                               | _number_   | `1000`        |

### Slot

| Name | Description    |
| ---- | -------------- |
| -    | Custom content |
