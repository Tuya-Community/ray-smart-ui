---
category: Display
---

# Progress

### Introduction

Progress Bar

### Introduction

```jsx
import { Progress } from '@ray-js/smart-ui';
```

## Code demonstration

### Basic Usage

```jsx
import { Progress } from '@ray-js/smart-ui';

export default function Demo() {
  return (
    <ProgressBar
      style={{ marginBottom: '18rpx' }}
      percent={70}
      fillColor="linear-gradient(to right, #FA709A 0%, #FEDD44 100%)"
    />
  );
}
```

### Circular Progress Bar

```jsx
<Circle value={20} />
```

## API

### Progress

<!-- prettier-ignore -->
|Property Name|Description|Type|Default Value|
|---|---|---|---|
style|Style|CSSProperties|undefined|
width|width|string|0|
height|High|string|'4px'|
percent|Percentage|number|0|
trackColor|Color of the lines|string|'#d3d3d3'|
fillColor|Fill color|any|'#007AFF'|

### Progress.Circle

<!-- prettier-ignore -->
|Property Name|Description|Type|Default Value|
|---|---|---|---|
className|Class Name|string|undefined|
children|Child Element|ReactNode|undefined|
style|Style|CSSProperties|undefined|
size|Size|string|'100px'|
trackWidth|Chute Width|string|'10px'|
trackColor|Slide Color|string|'#d3d3d3'|
fillColor|Fill color|string|'#007AFF'|
percent|Percentage|number|0|
maskColor|Mask Color|string|'#ffffff'|
