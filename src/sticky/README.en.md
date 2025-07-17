---
category: Layout
---

# Sticky

### Introduction

The Sticky component achieves the same effect as the `position: sticky` property in CSS. When the component is within the viewport, it arranges according to the normal layout. When the component scrolls out of the viewport, it will always be fixed at the top of the screen.

### Import

```jsx
import { Sticky } from '@ray-js/smart-ui';
```

## Code Demonstration

### Basic Usage

Wrap content inside the `Sticky` component.

```jsx
import { Sticky, Button } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <Sticky>
      <Button type="primary">Basic Usage</Button>
    </Sticky>
  );
}
```

### Offset Top

You can set the distance from the top when the component is sticky using the `offsetTop` attribute.

```jsx
import { Sticky, Button } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <Sticky offsetTop={50}>
      <Button customStyle={{ marginLeft: '115px' }} type="info">Offset Top</Button>
    </Sticky>
  );
}
```

### Specify Container

You can specify the component's container using the `container` attribute. When the page scrolls, the component will always remain within the container's range. When the component is about to exceed the container's bottom, it returns to its original position.

```jsx
import { Sticky, Button } from '@ray-js/smart-ui';
import { View, createSelectorQuery } from '@ray-js/ray';
import React from 'react';

export default function Demo() {
  const container = () => createSelectorQuery().select('#container');
  return (
    <View id="container">
      <Sticky container={container}>
        <Button customStyle={{ marginLeft: '215px' }} type="warning">
          Specify Container
        </Button>
      </Sticky>
    </View>
  );
}
```

## API

### Props

| Parameter   | Description                                                 | Type       | Default Value |
| ----------- | ----------------------------------------------------------- | ---------- | ------------- |
| container | A function that returns the container's corresponding NodesRef node | _function_ | - |
| offsetTop | The distance from the top when sticky, in `px` | _number_ | `0` |
| scrollTop | Current scroll position of the scroll area. When not `null`, it disables the page's scroll event listener | _number_ | - |
| zIndex | z-index when sticky | _number_ | `99` |

### Events

| Event Name   | Description  | Callback Parameters                                      |
| ------------ | ------------ | -------------------------------------------------------- |
| onScroll | Triggered when scrolling | { scrollTop: Distance from the top position, isFixed: Whether sticky } |