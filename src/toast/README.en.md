---
category: Feedback
---

# Toast

### Introduction

A black translucent notification that pops up in the middle of the page, used for message notifications, loading prompts, operation result prompts, etc.

### Import

```js
import { Toast, ToastInstance } from '@ray-js/smart-ui';
```

## Code Demonstration

```warning:⚠️Note
When using the ToastInstance method to call the component, a Toast component with the corresponding Id must be present on the page, and the Id must be globally unique!
```

### Text Notification
To use the `ToastInstance` method, you must mount a `<Toast id="smart-toast" />` node on the page to dynamically generate notification pop-ups.

```jsx
import { Toast, ToastInstance, Button } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const open = () => {
    ToastInstance('I am the notification text, it is recommended not to exceed fifteen characters~');
  }
  return (
    <>
      <Toast id="smart-toast" />
      <Button onClick={open}>Click to show</Button>
    </>
  )
}
```

### Loading Notification

Use the `ToastInstance.loading` method to display loading notifications. You can disable background click with the `forbidClick` attribute and customize the loading icon type with the `loadingType` attribute.

```jsx
import { Toast, ToastInstance, Button } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const open = () => {
    ToastInstance.loading({
      message: 'Loading...',
      forbidClick: true,
    });
  }

  const openIcon = () => {
    ToastInstance.loading({
      message: 'Loading...',
      forbidClick: true,
      loadingType: 'spinner',
    });
  }
  return (
    <>
      <Toast id="smart-toast" />
      <Button onClick={open}>Click to show</Button>
      <Button onClick={openIcon}>Custom loading icon</Button>
    </>
  )
}
```

### Success/Failure Notification

```jsx
import { Toast, ToastInstance, Button } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const openSuccess = () => {
    ToastInstance.success('Success text');
  }

  const openFail = () => {
    ToastInstance.fail('Failure text');
  }
  return (
    <>
      <Toast id="smart-toast" />
      <Button onClick={openSuccess}>Success</Button>
      <Button onClick={openFail}>Failure</Button>
    </>
  )
}
```

### Dynamic Update Notification

```jsx
import { Toast, ToastInstance, Button } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const open = () => {
    const toast = ToastInstance.loading({
      duration: 0, // Continue to display toast
      forbidClick: true,
      message: 'Countdown 3 seconds',
      selector: '#custom-selector',
      width: 88,
    });

    let second = 3;
    const timer = setInterval(() => {
      second--;
      if (second) {
        toast.setData({
          message: `Countdown ${second} seconds`,
        });
      } else {
        clearInterval(timer);
        Toast.clear();
      }
    }, 1000);
  }

  return (
    <>
      <Toast id="custom-selector" />
      <Button onClick={open}>Popup notification</Button>
    </>
  )
}
```

### OnClose Callback Function


```jsx
import { Toast, ToastInstance, Button } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const open = () => {
    ToastInstance({
      type: 'success',
      message: 'Submission successful',
      onClose: () => {
        console.log('Execute OnClose function');
      },
    });
  }

  return (
    <>
      <Toast id="smart-toast" />
      <Button onClick={open}>Popup notification</Button>
    </>
  )
}
```

### Different locations

```jsx
import { Toast, ToastInstance, Button } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const showBottomToast = () => {
    ToastInstance({
      message: Strings.getLang('promptContent'),
      position: 'bottom',
    });
  };

  const showTopToast = () => {
    ToastInstance({
      message: Strings.getLang('promptContent'),
      position: 'top',
    });
  };

  return (
    <>
      <Button onClick={showBottomToast}>Bottom</Button>
      <Button onClick={showTopToast}>Top</Button>
      <Toast id="smart-toast" />
    </>
  )
}
```


### Custom Color `v2.8.0`

You can customize the text color using the `textColor` property and customize the icon color using the `iconColor` property.

```jsx
import { Toast, ToastInstance, Button } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const openText = () => {
    ToastInstance({
      message: 'This is a notification, recommended not to exceed fifteen characters~'
      textColor: '#1989FA',
    });
  }

  const openSuccess = () => {
    ToastInstance.success({
      message: 'Success message',
      textColor: '#1989FA',
      iconColor: '#1989FA',
    });
  }
  return (
    <>
      <Toast id="smart-toast" />
      <Button onClick={openText}>Text</Button>
      <Button onClick={openSuccess}>Success</Button>
    </>
  )
}
```

## API

### Methods

| Method Name    | Parameters   | Return Value     | Description   |
| ---------- | ------------ | ---------- | --------- |
| ToastInstance | `options \| message` | toast instance | Display notification |
| ToastInstance.clear | `clearAll` | `void` | Close notification |
| ToastInstance.fail | `options \| message` | toast instance | Display failure notification |
| ToastInstance.loading | `options \| message` | toast instance | Display loading notification |
| ToastInstance.resetDefaultOptions | - | `void` | Reset default configuration, effective for all Toasts |
| ToastInstance.setDefaultOptions | `options` | `void` | Modify default configuration, effective for all Toasts |
| ToastInstance.success | `options \| message` | toast instance | Display success notification |

### Options

| Parameter        | Description                                                                              | Type       | Default Value        |
| ----------- | --------------------------------------------------------------------------------- | ---------- | ------------- |
| context | The scope of the selector, you can pass in the `this` of a custom component as context | _object_ | Current page |
| duration | Display duration(ms), when the value is 0, the toast will not disappear | _number_ | `2000` |
| forbidClick | Whether to disable background clicks | _boolean_ | `false` |
| loadingType | Type of loading icon, optional value is `spinner` | _string_ | `circular` |
| mask | Whether to show the mask layer | _boolean_ | `false` |
| message | Content | _string_ | `''` |
| textColor `v2.8.0` | Text color | _string_ | - |
| iconColor `v2.8.0` | Icon color | _string_ | `white` |
| onClose | Callback function on close | _Function_ | - |
| position | Position, optional values are `top` `middle` `bottom` | _string_ | `middle` |
| selector | Custom selector | _string_ | `#smart-toast` |
| type | Notification type, optional values are `loading` `success` `fail` `warn` `html` (`warn` supported from `^v2.0.0`) | _string_ | `text` |
| zIndex | z-index level | _number_ | `1000` |
| width `v2.1.7` | Custom popup width | _number_ | `''` |
| nativeDisabled `v2.5.0` | Disable local gestures during the popup open period? | _boolean_ | `false` |

### Slot

| Name | Description       |
| ---- | ---------- |
| -    | Custom content |

### Style Variables

The component provides the following CSS variables for custom styling. For usage, refer to the [ConfigProvider Component](/material/smartui?comId=config-provider).

| Name                          | Default Value                                 | Description |
| ----------------------------- | -------------------------------------- | ---- |
| --toast-min-width `v2.6.0` | _88px_ | Minimum width prompt |
| --toast-max-width | _70%_ | Maximum width of the notification |
| --toast-font-size | _14px_ | Notification font size |
| --toast-text-color | _#fff_ | Notification text color |
| --toast-line-height | _20px_ | Notification line height |
| --toast-border-radius | _10px_ | Notification border radius |
| --toast-background-color | _fade(@black, 70%)_ | Notification background color |
| --toast-icon-size | _36px_ | Notification icon size |
| --toast-text-min-width `@deprecated v2.6.0` | _96px_ | Minimum width of the notification text |
| --toast-text-padding | _@padding-xs @padding-sm_ | Notification text padding |
| --toast-default-padding | _16px_ | Default notification padding |
| --toast-default-width | _88px_ | Default notification width |
| --toast-default-min-height | _88px_ | Default minimum height of the notification |