---
category: Feedback
---

# Switch

### Introduction

Simple and easy -to -use switch component

### Introduce

```jsx
import { Switch } from '@ray-js/smart-ui';
```

## Code demonstration

### Basic usage

```jsx
import { Switch } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value, onChange] = React.useState(true);

  return (
    <Switch
      checked={value}
      onChange={event => {
        onChange(event.detail);
      }}
    />
  );
}
```

## API

### Props

| Parameters                    | Description                               | Type      | Default value |
| ----------------------------- | ----------------------------------------- | --------- | ------------- |
| activeColor                   | Background color when opening             | _string_  | `#1989fa`     |
| activeValue                   | Value when opening                        | _any_     | `true`        |
| checked                       | Switch selection status                   | _any_     | `false`       |
| disabled                      | Whether it is a disabled state            | _boolean_ | `false`       |
| inactiveColor                 | The background color when closed          | _string_  | `#fff`        |
| inactiveValue                 | Value when closed                         | _any_     | `false`       |
| loading                       | Whether it is loading                     | _boolean_ | `false`       |
| name                          | The identifier when submitted in the form | _string_  | -             |
| size                          | Switching size                            | _string_  | `30px`        |
| stopClickPropagation `v1.0.4` | Whether to stop bubbling                  | _boolean_ | `false`       |

### Events

| Event Name | Description                 | Parameters                               |
| ---------- | --------------------------- | ---------------------------------------- |
| onChange   | Switch state switching back | event.detail: Whether to select a switch |

### External style

| Class Name  | Description     |
| ----------- | --------------- |
| customClass | Root node nodes |
| nodeClass   | Dot style       |

