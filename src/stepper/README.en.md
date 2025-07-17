---
category: Data Entry
---

# Stepper

### Introduction

The stepper consists of an increase button, a reduction button, and the input box, which is used to enter and adjust the number within a certain range.

### Introduce

```jsx
import { Stepper } from '@ray-js/smart-ui';
```

## Code demonstration

### Basic usage

Set the input value via `value`, and changes to the input value can be monitored through the `onChange` event.

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

### Step -long settings

Use the `step` attribute to set the value change for each click of the increase or decrease button. The default is `1`.

```jsx
import { Stepper } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Stepper value={1} step="2" />;
}
```

### Limit input range

Limit input values using the 'min' and 'max' attributes.

```jsx
import { Stepper } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Stepper value={5} min="5" max="8" />
}
```

### Restricted input integer

After setting the `integer` attribute, the input box will be restricted to only allow integer input.

```jsx
import { Stepper } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Stepper value={1} integer />
}
```

### Disable

By setting the `disabled` property, the stepper can be disabled. In the disabled state, the buttons cannot be clicked, nor can the input box be modified.

```jsx
import { Stepper } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Stepper value={1} disabled />
}
```

### Turn off long press

By setting the `longpress` attribute, you can determine whether the stepper enables the long press gesture.

```jsx
import { Stepper } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Stepper value={1} longPress={false} />
}
```

### Fixed decimal digits

The `decimalLength` property can be set to retain a fixed number of decimal places.

```jsx
import { Stepper } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Stepper value={1} step="0.2" decimalLength={1} />
}
```

### Asynchronous change

If you need to asynchronously modify the value of the input box, you can set the `asyncChange` attribute and manually modify the `value` in the `onChange` event.

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

### Custom size

Set the input box width with the `inputWidth` property and the button size and input box height with the `buttonSize` property.

```jsx
import { Stepper } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Stepper value={1} inputWidth="40px" buttonSize="32px" />
}
```

## API

### Props

| Parameters           | Description                                                                                                                                        | Type               | Default value |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------- |
| alwaysEmbed | Force the input to stay at the same layer state, by default, the input will switch to a different layer state when focused (only effective on iOS) | _boolean_          | `false`       |
| asyncChange          | Whether to turn on asynchronous changes, you need to manually control the input value after opening                                                | _boolean_          | `false`       |
| buttonSize           | The button size, with a default unit of `px`, will be matched by the height of the input box.                                                      | _string \| number_ | `28px`        |
| decimalLength        | Fixed display decimal digits                                                                                                                       | _number_           | -             |
| disableInput         | Whether to disable the input box                                                                                                                   | _boolean_          | `false`       |
| disableMinus         | Whether to disable the reduction button                                                                                                            | _boolean_          | -             |
| disablePlus          | Whether to disable the increase button                                                                                                             | _boolean_          | -             |
| disabled             | Whether to disable                                                                                                                                 | _boolean_          | `false`       |
| inputWidth           | Input box width, default unit is `px`                                                                                                              | _string \| number_ | `32px`        |
| integer              | Whether only an integer is allowed                                                                                                                 | _boolean_          | `false`       |
| longPress            | Do you turn on and press and press the gesture                                                                                                     | _boolean_          | `true`        |
| max                  | Maximum                                                                                                                                            | _string \| number_ | -             |
| min                  | Minimum                                                                                                                                            | _string \| number_ | `1`           |
| name                 | The identifier when submitted in the form                                                                                                          | _string_           | -             |
| showMinus            | Whether to display the reduction button                                                                                                            | _boolean_          | `true`        |
| showPlus             | Whether to display the increase button                                                                                                             | _boolean_          | `true`        |
| step                 | Step -by -step                                                                                                                                     | _string \| number_ | `1`           |
| theme                | Style options with selectable values as 'round'.                                                                                                   | _string_           | -             |
| value                | Input value                                                                                                                                        | _string \| number_ | Minimum       |

### Events

| Event Name  | Description                                     | Return parameters                            |
| ----------- | ----------------------------------------------- | -------------------------------------------- |
| onBlur      | Triggered when the input box is lost            | -                                            |
| onChange    | Event triggered when the binding value changes  | event.detail: The value of the current input |
| onFocus     | Triggered when the input box focuses            | -                                            |
| onMinus     | Click to reduce the button to trigger           | -                                            |
| onOverlimit | Triggered when clicking the unavailable buttons | -                                            |
| onPlus      | Trigger when clicking the increase button       | -                                            |

### Slot

| Name  | Description       |
| ----- | ----------------- |
| minus | Reduction button  |
| plus  | Add number button |

### External style

| Class Name  | Description             |
| ----------- | ----------------------- |
| customClass | Root node nodes         |
| inputClass  | Input box style         |
| minusClass  | Reduction button style  |
| plusClass   | Add number button style |
