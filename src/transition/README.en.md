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

| Parameters  | Description                                      | Type               | Default value |
| ----------- | ------------------------------------------------ | ------------------ | ------------- |
| customStyle | Custom style                                     | _object_           | -             |
| duration    | The animation duration, the unit is milliseconds | _number \| object_ | `300`         |
| name        | Animation                                        | _string_           | `fade`        |
| show        | Whether to display components                    | _boolean_          | `true`        |

### Events

| Event Name    | Description                | Parameters |
| ------------- | -------------------------- | ---------- |
| onAfterEnter  | Trigger after entering     | -          |
| onAfterLeave  | Trigger after leaving      | -          |
| onBeforeEnter | Before entering            | -          |
| onBeforeLeave | Triggence before leaving   | -          |
| onEnter       | Enter the trigger          | -          |
| onLeave       | Triggered in the departure | -          |

### External style

| Class Name       | Description                                                                                                                                                                                                                                                                                                            |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| customClass      | Root node nodes                                                                                                                                                                                                                                                                                                        |
| enterActiveClass | Define the state when entering the transition.Apply through the entire transition stage, take effect before the element is inserted, and remove after the transition/animation is completed.This class can be used to define the process of entering the transition, delay and curve function.                         |
| enterClass       | Define the beginning of the transition.Effective before the element is inserted, and the next frame is removed after the element is inserted.                                                                                                                                                                          |
| enterToClass     | Defines the end state of the entering transition. It takes effect on the next frame after the element is inserted (at the same time enterClass is removed) and is removed after the transition/animation is complete.                                                                                                  |
| leaveActiveClass | Define the state when the transition is effective.Applying throughout the transitional stage, it takes effect immediately when the transition is triggered, and removes after the transition/animation is completed.This class can be used to define the process time, delay and curve function of leaving transition. |
| leaveClass       | Define the beginning of leaving the transition.When the transition is triggered, it takes effect immediately, and the next frame is removed.                                                                                                                                                                           |
| leaveToClass     | Defines the end state of leaving transition. It takes effect in the next frame after the leaving transition is triggered (meanwhile, leaveClass is removed) and is removed after the transition/animation is completed.                                                                                                |

### Animation

| Name        | Description        |
| ----------- | ------------------ |
| fade        | fade in            |
| fade-down   | Flow               |
| fade-left   | Left slide         |
| fade-right  | Slide in the right |
| fade-up     | Slide              |
| slide-down  | Go down            |
| slide-left  | Sitto entry        |
| slide-right | Swipe right slide  |
| slide-up    | Slide up           |
