---
category: Display
---

# Transition

### Introduction

Make elements gradually change from one style to the effect of one style.

### Introduce

```jsx
import { Transition } from '@ray-js/smart-ui';
```

## Code demonstration

### Basic usage

Wrap the element inside the transition component, and there will be corresponding transition animations when the element is shown/hidden.

```jsx
import { Button, Transition } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [show, setShow] = React.useState(true);
  return (
    <>
      <Button onClick={() => setShow(!show)}>
        Switch display
      </Button>
      <Transition show={show} customClass="block">
        content
      </Transition>
    </>
  );
}
```

### Animation

The transition component comes with multiple built-in animations, and you can specify the animation type using the `name` field.

```jsx
import { Button, Transition } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [show, setShow] = React.useState(true);
  return (
    <>
      <Button onClick={() => setShow(!show)}>
        Switch display
      </Button>
      <Transition show={show} name="fade-up">
        content
      </Transition>
    </>
  );
}
```

### High -level usage

The transition effect can be customized through the external style class, and the duration of entering and removing can be customized.

```jsx
<Transition
  show={show}
  name=""
  duration={{ enter: 300, leave: 1000 }}
  enterClass="smart-enter-class"
  enterActiveClass="smart-enter-active-class"
  leaveActiveClass="smart-leave-active-class"
  leaveToClass="smart-leave-to-class"
/>
```

```css
.smart-enter-active-class,
.smart-leave-active-class {
  transition-property: background-color, transform;
}

.smart-enter-class,
.smart-leave-to-class {
  background-color: red;
  transform: rotate(-360deg) translate3d(-100%, -100%, 0);
}
```

## API

### Props

| Parameter    | Description            | Type               | Default |
| ------------ | ---------------------- | ------------------ | ------- |
| customStyle | Custom style | _React.CSSProperties_ | - |
| duration | Animation duration in ms | _number \| object_ | `300` |
| name | Animation type | _string_ | `fade` |
| show | Whether to show component | _boolean_ | `true` |

### Events

| Event Name        | Description    | Parameters |
| ----------------- | -------------- | ---------- |
| onAfterEnter | Triggered after entering | - |
| onAfterLeave | Triggered after leaving | - |
| onBeforeEnter | Triggered before entering | - |
| onBeforeLeave | Triggered before leaving | - |
| onEnter | Triggered during entering | - |
| onLeave | Triggered during leaving | - |

### External Style Classes

| Class Name         | Description                                                                                                                                                     |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| customClass | Root node style class |
| enterActiveClass | Defines the state when the enter transition is active. Applied throughout the entering transition phase, effective before the element is inserted, removed after the transition/animation ends. Can be used to define the transition time, delay, and curve function. |
| enterClass | Defines the initial state of the enter transition. Effective before the element is inserted, removed the next frame after the element is inserted. |
| enterToClass | Defines the end state of the enter transition. Effective the next frame after the element is inserted (enter-class removed simultaneously), removed after the transition/animation ends. |
| leaveActiveClass | Defines the state when the leave transition is active. Applied throughout the leaving transition phase, effective immediately when the leave transition is triggered, removed after the transition/animation ends. Can be used to define the transition time, delay, and curve function. |
| leaveClass | Defines the initial state of the leave transition. Effective immediately when the leave transition is triggered, removed the next frame. |
| leaveToClass | Defines the end state of the leave transition. Effective the next frame after the leave transition is triggered (leave-class removed simultaneously), removed after the transition/animation ends. |

### Animation Types

| Name        | Description   |
| ----------- | ------------- |
| fade | Fade in |
| fadeDown | Fade in from bottom |
| fadeLeft | Fade in from left |
| fadeRight | Fade in from right |
| fadeUp | Fade in from top |
| slideDown | Slide in from bottom |
| slideLeft | Slide in from left |
| slideRight | Slide in from right |
| slideUp | Slide in from top |