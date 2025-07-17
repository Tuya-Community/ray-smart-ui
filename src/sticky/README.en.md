---
category: Layout
---

# Sticky

### Introduction

Sticky components are consistent with the implementation of the implementation of the attribute in CSS `Position: Sticky`. When the component is within the screen, it will be arranged according to the normal layout. When the component rolls out the screen range, it will always be fixed on the top of the screen.

### Introduce

```jsx
import { Sticky } from '@ray-js/smart-ui';
```

## Code demonstration

### Basic usage

Simply wrap the content inside the `Sticky` component.

```jsx
import { Sticky, Button } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <Sticky>
      <Button type="primary">Basic usage</Button>
    </Sticky>
  );
}
```

### Suction distance

The `offsetTop` attribute can be used to set the distance between the component and the top when it is sticky.

```jsx
<Sticky offsetTop={50}>
  <Button type="info">Suction distance</Button>
</Sticky>
```

### Designated container

The `container` attribute specifies the component's container. When the page scrolls, the component will always stay within the container's boundaries. If the component is about to exceed the bottom of the container, it will return to its original position.

```jsx
import { View, createSelectorQuery } from '@ray-js/ray';

const container = createSelectorQuery().select('#container')

<view id="container" style={{ height: 150 }}>
  <Sticky container={container}>
    <Button type="warning">Designated container</Button>
  </Sticky>
</view>
```

## API

### Props

| Parameters | Description                                                                                                             | Type       | Default value |
| ---------- | ----------------------------------------------------------------------------------------------------------------------- | ---------- | ------------- |
| container  | A function that returns the NodesRef node corresponding to the container.                                               | _function_ | -             |
| offsetTop  | Distance from the top when mounted on the ceiling, unit `px`                                                            | _number_   | `0`           |
| scrollTop  | The current scroll position of the scroll area. When it is not `null`, the page scroll event listener will be disabled. | _number_   | -             |
| zIndex     | z-index when ceiling mounted                                                                                            | _number_   | `99`          |

### Events

| Event Name | Description            | Return parameters                                               |
| ---------- | ---------------------- | --------------------------------------------------------------- |
| onScroll   | Triggence when rolling | { scrollTop: Distance from top, isFixed: Whether fixed to top } |
