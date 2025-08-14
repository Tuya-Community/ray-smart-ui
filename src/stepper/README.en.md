---
category: Data Entry
---

# Stepper

### Introduction

The stepper consists of an increment button, a decrement button, and an input box used to input and adjust numbers within a certain range.

### Import

```jsx
import { Stepper } from '@ray-js/smart-ui';
```

## Code Demonstrations

### Basic Usage

Set the input value using `value`, and listen for changes in the input value through the `onChange` event.

```jsx
import { Stepper } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const onChange = event => {
    console.log(event.detail);
  };

  return <Stepper value={1} onChange={onChange} />;
}
```

### Step Size Configuration

Set the value change for each click of the increment or decrement button using the `step` property, with a default of `1`.

```jsx
import { Stepper } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Stepper value={1} step="2" />;
}
```

### Limit Input Range

Limit the input value range using the `min` and `max` properties.

```jsx
import { Stepper } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Stepper value={5} min="5" max="8" />
}
```

### Limit to Integer Inputs

Set the `integer` property to allow only integer inputs in the input box.

```jsx
import { Stepper } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Stepper value={1} integer />
}
```

### Disabled State

Disable the stepper by setting the `disabled` property. In the disabled state, the buttons cannot be clicked or the input box modified.

```jsx
import { Stepper } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Stepper value={1} disabled />
}
```

### Disable Long Press

Decide if the stepper will enable long press gestures by setting the `longpress` property.

```jsx
import { Stepper } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Stepper value={1} longPress={false} />
}
```

### Fixed Decimal Places

Set the `decimalLength` property to retain fixed decimal places.

```jsx
import { Stepper } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Stepper value={1} step="0.2" decimalLength={1} />
}
```

### Asynchronous Changes

If you need to modify the value in the input box asynchronously, you can set the `asyncChange` property and manually modify `value` in the `onChange` event.

```jsx
import { Stepper } from '@ray-js/smart-ui';
import React, { useState } from 'react';
import { showLoading, hideLoading } from '@ray-js/ray';

export default function Demo() {
  const [value, setValue] = useState(1);
  const onChange = event => {
    showLoading({ title: '', mask: true });

    setTimeout(() => {
      hideLoading();
      setValue(event.detail);
    }, 500);
  };

  return <Stepper value={value} asyncChange onChange={onChange} />
}
```

### Custom Size

Set the width of the input box using the `inputWidth` property and the size of the buttons and the height of the input box using the `buttonSize` property.

```jsx
import { Stepper } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Stepper value={1} inputWidth="40px" buttonSize="32px" />
}
```

## API

### Props

| Parameter              | Description                                                                        | Type               | Default  |
| ---------------------  | ---------------------------------------------------------------------------------  | ------------------ | -------  |
| alwaysEmbed `v1.9.3` | Force the input to stay in the same layer state, defaults to non-same layer on focus (only effective on iOS) | _boolean_ | `false` |
| asyncChange | Whether to enable asynchronous changes. If enabled, the input value needs to be manually controlled | _boolean_ | `false` |
| buttonSize | Button size, default unit is `px`. Input box height will match the button size | _string \| number_ | `28px` |
| decimalLength | Fixes the number of decimal places displayed | _number_ | - |
| disableInput | Whether to disable the input box | _boolean_ | `false` |
| disableMinus | Whether to disable the decrement button | _boolean_ | - |
| disablePlus | Whether to disable the increment button | _boolean_ | - |
| disabled | Whether to disable | _boolean_ | `false` |
| inputWidth | Input box width, default unit is `px` | _string \| number_ | `32px` |
| integer | Whether to only allow integer input | _boolean_ | `false` |
| longPress | Whether to enable long-press gesture | _boolean_ | `true` |
| max | Maximum value | _string \| number_ | - |
| min | Minimum value | _string \| number_ | `1` |
| name | Identifier when submitting in a form | _string_ | - |
| showMinus | Whether to show the decrement button | _boolean_ | `true` |
| showPlus | Whether to show the increment button | _boolean_ | `true` |
| step | Step size | _string \| number_ | `1` |
| theme | Style theme, optional value `round` | _string_ | - |
| value | Input value | _string \| number_ | Minimum |

### Events

| Event Name       | Description                | Callback Parameter          |
| --------------   | -------------------------- | --------------------------  |
| onBlur | Triggered when the input box loses focus | - |
| onChange | Event triggered when the binding value changes | event.detail: the current input value |
| onFocus | Triggered when the input box gains focus | - |
| onMinus | Triggered when the decrement button is clicked | - |
| onOverlimit | Triggered when an unusable button is clicked | - |
| onPlus | Triggered when the increment button is clicked | - |

### Slot

| Name   | Description   |
| -----  | -------------- |
| minus | Decrement button |
| plus | Increment button |

### External Style Classes

| Class Name           | Description         |
| -------------------  | ------------------- |
| customClass | Root node style class |
| inputClass | Input box style class |
| minusmartClass | Decrement button style class |
| plusmartClass | Increment button style class |

### Style Variables

The component provides the following CSS variables, which can be used to customize styles. See [ConfigProvider Component](/material/smartui?comId=config-provider) for usage instructions.

| Name                                     | Default Value                                 | Description                      |
| ---------------------------------------- | --------------------------------------------- | -------------------------------- |
| --stepper-container-background-color     | _var(--app-B6-N9, rgba(0, 0, 0, 0.05))_       | Background color                 |
| --stepper-background-border-radius       | _10px_                                        | Background border radius         |
| --stepper-padding                        | _2px_                                         | Padding                          |
| --stepper-active-color                   | _#e8e8e8_                                     | Button active color              |
| --stepper-background-color               | _var(--app-B6, #fff)_                         | Button background color          |
| --stepper-button-icon-color              | _var(--app-B6-N3, rgba(0, 0, 0, 0.5))_        | Button icon color                |
| --stepper-button-disabled-color          | _none_ `v2.1.7`  _var(--app-B6, #ffffff)_ `v2.6.1`    | Button disabled color   |
| --stepper-button-disabled-icon-color     | _var(--app-B6-N7, rgba(0, 0, 0, 0.1))_        | Button disabled icon color       |
| --stepper-button-round-theme-color       | _#ee0a24_                                     | Round style button color         |
| --stepper-btn-width                      | _44px_                                        | Button width                     |
| --stepper-btn-height                     | _28px_                                        | Button height                    |
| --stepper-input-width                    | _50px_                                        | Middle input box width           |
| --stepper-input-height                   | _28px_                                        | Middle input box height          |
| --stepper-input-font-size                | _16px_                                        | Middle input box font size       |
| --stepper-input-line-height              | _normal_                                      | Middle input box line height     |
| --stepper-input-text-color               | _var(--app-B6-N1, rgba(0, 0, 0, 1))_          | Middle input box text color      |
| --stepper-input-disabled-text-color      | _var(--app-B6-N7, rgba(0, 0, 0, 0.1))_        | Middle input box disabled text color |
| --stepper-border-radius                  | _8px_                                         | Button border radius             |
| --stepper-button-border `v2.2.0` | _0_ | Button Border |
| --stepper-button-icon-font-size `v2.2.0` | _22px_ | Font size of the icon inside the button |