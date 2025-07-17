---
category: Navigation
---

# NavBar

### Introduce

Provide navigation functions for pages, which is often used on the top of the page.

### Introduce

```jsx
import { NavBar } from '@ray-js/smart-ui';
```

## Code demonstration

### Basic usage

```jsx
import { NavBar } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const onClickLeft = React.useCallback(event => {
    console.log('Click the back button');
  }, []);

  const onClickRight = React.useCallback(event => {
    console.log('Click on the right button');
  }, []);
  return (
    <NavBar
      title="title"
      leftText="return"
      rightText="Button"
      leftArrow
      onClickLeft={onClickLeft}
      onClickRight={onClickRight}
    />
  );
}
```

### High -level usage

Customized content through slot.

```jsx
import { Icon, NavBar } from '@ray-js/smart-ui';
import React from 'react';
import * as Icons from '@tuya-miniapp/icons'

export default function Demo() {
  return (
    <NavBar
      title="title"
      leftText="return"
      leftArrow
      slot={{
        right: <Icon name={Icons.Cloud} size="32px" />,
      }}
    />
  );
}
```

## API

### Props

| Parameters       | Description                                                      | Type      | Default value |
| ---------------- | ---------------------------------------------------------------- | --------- | ------------- |
| border           | Whether to display the lower frame                               | _boolean_ | `true`        |
| customStyle      | Custom style of root node                                        | _object_  | -             |
| fixed            | Whether it is fixed at the top                                   | _boolean_ | `false`       |
| leftArrow        | Whether to display the left arrow                                | _boolean_ | `false`       |
| leftText         | Left copywriting                                                 | _string_  | `''`          |
| placeholder      | Whether to open the position when fixed at the top               | _boolean_ | `false`       |
| rightText        | Right copywriting                                                | _string_  | `''`          |
| safeAreaInsetTop | Whether to leave the top safe distance (the state column height) | _boolean_ | `true`        |
| title            | title                                                            | _string_  | `''`          |
| zIndex           | element z-index                                                  | _number_  | `1`           |

### Slot

| Name  | Description                     |
| ----- | ------------------------------- |
| left  | Custom on the left area content |
| right | Custom right area content       |
| title | Custom title                    |

### Events

| Event Name   | Description                            | Parameters |
| ------------ | -------------------------------------- | ---------- |
| onClickLeft  | Trigger when clicking the left button  | -          |
| onClickRight | Trigger when clicking the right button | -          |

### External style

| Class Name  | Description     |
| ----------- | --------------- |
| customClass | Root node nodes |
| titleClass  | Title style     |
