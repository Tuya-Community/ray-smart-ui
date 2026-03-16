---
category: Feedback
assets: SearchDeviceTipModal,GatewayAddDeviceProgress
---

# Dialog

### Introduction

Modal popups, commonly used for message prompts, message confirmations, or completing specific interactive operations within the current page. Supports both function calls and component calls.

### Import

```jsx
import { Dialog, DialogInstance } from '@ray-js/smart-ui';
```

## Code Examples

```warning:⚠️Note
When using the DialogInstance method to call components, the page must have a Dialog component with the corresponding Id, and the Id must be unique globally!
```

### Prompt Popup

Used to prompt some messages, containing only a confirmation button.

```jsx
import React from 'react';
import { DialogInstance, Dialog, Button } from '@ray-js/smart-ui';

export default function Demo() {
  const open = () => {
    DialogInstance.alert({
      message: 'Popup content',
    }).then(() => {
      // on close
    });
  }
  return (
    <>
      <Dialog id="smart-dialog" />
      <Button onClick={open}>Click to show</Button>
    </>
  )
}
```

### Message Confirmation

`DialogInstance.confirm` is used for message confirmation, containing cancel and confirm buttons; the `selector` attribute can customize the selection of the `Dialog` component with the corresponding Id.

```jsx
import React from 'react';
import { DialogInstance, Dialog, Button } from '@ray-js/smart-ui';

export default function Demo() {
  const open = () => {
    DialogInstance.confirm({
      selector: '#smart-dialog2',
      title: 'Title',
      message: 'Popup content',
    })
      .then(() => {
        // confirm
      })
      .catch(() => {
        // cancel
      });
  }
  return (
    <>
      <Dialog id="smart-dialog2" />
      <Button onClick={open}>Click to show</Button>
    </>
  )
}
```

### Input Box

Used to input copy information, the default maximum input limit `maxlength` is `20`; the `emptyDisabled` `v2.7.0` attribute can restrict the submission when the input field is empty.

```jsx
import React from 'react';
import { DialogInstance, Dialog, Button } from '@ray-js/smart-ui';

const beforeClose = (action: 'confirm' | 'cancel' | 'overlay', value?: string): Promise<boolean> => {
  return new Promise((resolve) => {
    if (action === 'confirm') {
      // Intercept the confirm operation if there is no input value
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
        console.log('=== onConfirm', res);
        const inputValue = res?.data?.inputValue;
      })
      .catch(() => {
        // on cancel
      });
  }
  return (
    <>
      <Dialog id="smart-dialog" />
      <Button onClick={open}>Click to show</Button>
    </>
  )
}
```

### Rounded Button Style

Set the theme option to `round-button` to display the rounded button style popup.

```jsx
import React from 'react';
import { DialogInstance, Dialog, Button } from '@ray-js/smart-ui';

export default function Demo() {
  const openHasTitle = () => {
    DialogInstance.alert({
      title: 'Title',
      message: 'Popup content',
      theme: 'round-button',
    }).then(() => {
      // on close
    });
  }
  const open = () => {
    DialogInstance.alert({
      message: 'Popup content',
      theme: 'round-button',
      showCancelButton: true,
      cancelButtonText: 'cancel'
    }).then(() => {
      // on close
    });
  }
  return (
    <>
      <Dialog id="smart-dialog" />
      <Button onClick={openHasTitle}>Click to show (with title)</Button>
      <Button onClick={open}>Click to show (no title)</Button>
    </>
  )
}
```

### Asynchronous Close

The `beforeClose` attribute allows a callback function to be passed, performing specific operations before closing the popup.  
> Note: Only supported for API calls, not component usage

```jsx
import React from 'react';
import { DialogInstance, Dialog, Button } from '@ray-js/smart-ui';

const beforeClose = (action: 'confirm' | 'cancel' | 'overlay', value?: string): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (action === 'confirm') {
        resolve(true);
      } else {
        // Intercept the cancel operation
        resolve(false);
      }
    }, 1000);
  });
}   

export default function Demo() {
  const open = () => {
    DialogInstance.confirm({
      title: 'Title',
      message: 'Popup content',
      beforeClose,
    });
  }
  return (
    <>
      <Dialog id="smart-dialog" />
      <Button onClick={open}>Click to show</Button>
    </>
  )
}
```

### Custom Icon `v2.6.3`

The icon property supports passing in an SVG string, using SmartUI's Icon component underneath. The icon property simply passes the name attribute to the Icon component.

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
      <Button onClick={open}>Click to display</Button>
    </>
  )
}
```

### Component Call

If you need to embed components or other custom content within the popup, you can use the component call method.

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
      <Button onClick={() => setShow(true)}>Click to show</Button>
      <Dialog
        useSlot
        title="Title"
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

### Custom Style

If you need to customize styles, it's recommended to use `customClass` instead of the `className` attribute (which won't be effective in custom components). Usage is as follows:

Method 1: Component Call

```jsx
<Dialog
  title="Title"
  message="Popup content"
  show={show}
  customClass="my-custom-class"
/>
```

Method 2: API Call  

```jsx
<Dialog id="smart-dialog" customClass="my-custom-class" />
```

## API

### Methods

| Method Name  | Parameters | Return Value | Description |
| -------- | --------- | --------- | --------- |
| DialogInstance | `options` | `Promise` | Show dialog box |
| DialogInstance.alert | `options` | `Promise` | Show message alert dialog box |
| DialogInstance.close | - | `void` | Close the popup and clear the cache queue |
| DialogInstance.confirm | `options` | `Promise` | Show message confirmation dialog box |
| DialogInstance.input | `options` | `Promise` | Show input box dialog box |
| DialogInstance.resetDefaultOptions | - | `void` | Reset default options, effective for all Dialogs |
| DialogInstance.setDefaultOptions | `options` | `void` | Modify default options, effective for all Dialogs |
| DialogInstance.stopLoading | - | `void` | Stop button loading state |

### Options

When calling Dialog via a function, the following options are supported:

| Parameter     | Description  | Type   | Default Value |
| ------------ | --------- | -------------- | --------- |
| icon | Whether to display the warning icon or the name value of the icon | _boolean_ `v2.0.0` _boolean \| string_ `v2.6.3` | `false` |
| iconColor `v2.6.3` | icon color | _string_ | `#F04C4C` |
| iconSize `v2.6.3` | icon size | _string_ | - |
| maxlength | Maximum input length, unlimited when set to -1 | _number_ | `20` |
| message | Text content, supports line breaks using `\n` | _string_ | - |
| messageAlign | Message alignment, options are `left` `right` | _string_ | `center` |
| password | Whether it is a password type | _boolean_ | `false` |
| placeholder | Placeholder when the input box is empty | _string_ | - |
| theme | Style theme, options are `round-button` | _string_ | `default` |
| title | Title | _string_ | - |
| value | Initial value of the input box | _string_ | - |
| onInput `v2.10.0` | Input Box Callback | _(value: string) => void_ | - |
| width | Dialog box width, default unit is `px` | _string \| number_ | `320px` |
| zIndex | z-index level | _number_ | `100` |
| customStyle | Custom style | _string_ | '' |
| selector | Custom selector | _string_ | `#smart-dialog` |
| cancelButtonText | Cancel button text | _string_ | `Cancel` |
| closeOnClickOverlay | Whether to close the dialog when clicking on the overlay | _boolean_ | `false` |
| confirmButtonText | Confirm button text | _string_ | `Confirm` |
| overlay | Whether to show overlay | _boolean_ | `true` |
| overlayStyle | Custom overlay style | _object_ | - |
| showCancelButton | Whether to show cancel button | _boolean_ | `false` |
| showConfirmButton | Whether to show confirm button | _boolean_ | `true` |
| beforeClose | Callback function before closing, returning `false` can prevent closing, supports returning Promise | _(action) => boolean \| Promise\<boolean\>_ | - |
| context | The selection range of the selector, you can pass in the `this` of a custom component as context | _object_ | Current page |
| transition | Animation name, options are `fade` `none` | _string_ | `scale` |
| nativeDisabled `v2.3.8` | Whether to disable local gestures during the pop-up period | _boolean_ | `false` |
| autoClose `v2.6.3` | Whether to automatically close after callback click | _boolean_ | `true` |
| emptyDisabled `v2.7.0` | Input box mode, cannot submit when value is empty | _boolean_ | `false` |
| fullCoverView `v2.11.1` | Whether to use cover-view to wrap the popup for covering native components (such as map, video). | _boolean_ | `false` |


### Props

The following Props are supported when calling Dialog via component invocation:

| Parameter              | Description  | Type   | Default Value |
| ----------------- | --------- | ------------ | --------- |
| confirmButtonId | Identifier for the confirm button, used as the id value for the underlying native button component | _string_ | - |
| icon | Whether to display the warning icon or the name value of the icon | _boolean_  `v2.6.3` _boolean \| string_  `v2.6.3` | `false` |
| iconColor `v2.0.0` | icon color | _string_ | `#F04C4C` |
| iconSize `v2.6.3` | icon size | _string_ | - |
| maxlength | Maximum input length, unlimited when set to -1 | _number_ | `20` |
| message | Text content, supports line breaks using `\n` | _string_ | - |
| messageAlign | Message alignment, options are `left` `right` | _string_ | `center` |
| password | Whether it is a password type | _boolean_ | `false` |
| placeholder | Placeholder when the input box is empty | _string_ | - |
| show | Whether to display the dialog box | _boolean_ | - |
| theme | Style theme, options are `round-button` | _string_ | `default` |
| title | Title | _string_ | - |
| value | Initial value of the input box | _string_ | - |
| width | Dialog box width, default unit is `px` | _string \| number_ | `320px` |
| zIndex | z-index level | _number_ | `100` |
| customStyle | Custom style | _React.CSSProperties_ | - |
| showConfirmButton | Whether to show confirm button | _boolean_ | `true` |
| cancelButtonColor | Font color of the cancel button | _string_ | `#333` |
| cancelButtonText | Text of the cancel button | _string_ | `Cancel` |
| closeOnClickOverlay | Whether to close the dialog when clicking on the overlay | _boolean_ | `false` |
| confirmButtonColor | Font color of the confirm button | _string_ | `#ee0a24` |
| confirmButtonText | Text of the confirm button | _string_ | `Confirm` |
| overlay | Whether to show overlay | _boolean_ | `true` |
| overlayStyle | Custom overlay style | _object_ | - |
| showCancelButton | Whether to show cancel button | _boolean_ | `false` |
| useCancelButtonSlot | Whether to use a custom slot for the cancel button | _boolean_ | `false` |
| useConfirmButtonSlot | Whether to use a custom slot for the confirm button | _boolean_ | `false` |
| useSlot | Whether to use a custom slot for content | _boolean_ | `false` |
| useTitleSlot | Whether to use a custom slot for the title | _boolean_ | `false` |
| beforeClose | Callback function before closing, returning `false` can prevent closing, supports returning Promise | _(action, value?: string) => boolean \| Promise\<boolean\>_ | - |
| transition | Animation name, options are `fade` | _string_ | `scale` |
| autoClose `v2.6.3` | Whether to automatically close after callback click | _boolean_ | `false` |
| emptyDisabled `v2.7.0` | Input box mode, cannot submit when value is empty | _boolean_ | `false` |
| fullCoverView `v2.11.1` | Whether to use cover-view to wrap the popup for covering native components (such as map, video). | _boolean_ | `false` |

### Events

| Event         | Description      | Callback Parameter        |
| ------------ | -------------- | ------------ |
| onCancel | Triggered when the cancel button is clicked | - |
| onClose | Triggered when the dialog box is closed | event.detail: Source of the closing event, <br>enumeration is `confirm`,`cancel`,`overlay` |
| onConfirm | Triggered when the confirm button is clicked | - |

### Slot

| Name         | Description                |
| ---------- | ----------------------- |
| cancelButton | Custom content of the `cancel-button` slot, `use-cancel-button-slot` must be `true` |
| confirmButton | Custom content of the `confirm-button` slot, `use-confirm-button-slot` must be `true` |
| title | Custom content of the `title` slot, which is ineffective if the `title` attribute is set |

### External Style Classes

| Class Name                 | Description           |
| -------------------- | -------------- |
| cancelButtonClass | Cancel button style class |
| confirmButtonClass | Confirm button style class |
| customClass | Root node style class |

### Style Variables

The component provides the following CSS variables for custom styles. Please refer to the [ConfigProvider Component](/material/smartui?comId=config-provider) for the usage method.  

| Name    | Default Value   | Description |
| ------------ | --------- | ---- |
| --dialog-cancel-color `v2.1.7` | _var(--app-B4-N3, rgba(0, 0, 0, 0.5))_ | Cancel button color |
| --dialog-confirm-color `v2.1.7` | _var(--app-B4-N1, rgba(0, 0, 0, 1))_ | Confirm button color |
| --dialog-confirm-font-weight `v2.5.1` | _normal_ | Weight of confirm button |
| --dialog-cancel-font-weight `v2.5.1` | _normal_ | Cancel Button Font Weight |
| --dialog-width | _311px_ | Dialog width |
| --dialog-small-screen-width | _90%_ | Small screen dialog width |
| --dialog-font-size | _16px_ | Dialog font size |
| --dialog-border-radius | _16px_ | Border radius |
| --dialog-background-color | _var(--smart-ui-dialog-background, rgba(255, 255, 255, 1))_ | Background color |
| --dialog-header-font-color | _var(--app-B4-N1, rgba(0, 0, 0, 1))_ | Header font color |
| --dialog-header-font-weight | _400_ | Header font weight |
| --dialog-header-line-height | _24px_ | Header line height |
| --dialog-header-padding `v2.3.5` | _0_ | Header Title Padding |
| --dialog-header-padding-top | _24px_ | Header Title Top padding |
| --dialog-header-isolated-padding | _@padding-lg 0_ | Header padding |
| --dialog-message-padding | _24px_ | Message padding |
| --dialog-message-font-size | _16px_ | Message font size |
| --dialog-message-line-height | _20px_ | Message line height |
| --dialog-message-max-height | _60vh_ | Message max height |
| --dialog-message-text-color | _var(--app-B4-N1, rgba(0, 0, 0, 1))_ | Message text color |
| --dialog-has-title-message-font-size | _14px_ | Title message font size |
| --dialog-has-title-message-text-color | _var(--app-B4-N3, rgba(0, 0, 0, 0.5))_ | Title message text color |
| --dialog-has-title-message-padding-top | _8px_ | Title message top padding |
| --dialog-header-icon-size | _39px_ | Icon size |
| --dialog-input-height | _40px_ | Input height |
| --dialog-input-background-color | _var(--app-B4-N9, rgba(0, 0, 0, 0.05))_ | Input background color |
| --dialog-input-margin | _0 16px 24px_ | Input margin |
| --dialog-input-padding | _0 10px_ | Input padding |
| --dialog-input-border-radius | _10px_ | Input border radius |
| --dialog-input-font-size | _14px_ | Input font size |
| --dialog--round-button-border-radius `v2.3.5` | _20px_ `v2.3.5` _301px_ `v2.7.1` | When setting `theme: 'round-button'` button with rounded corners |