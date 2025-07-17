---
category: Display
---

# Progress

### Introduce

Progress bar

### Introduce

```jsx
import { Progress } from '@ray-js/smart-ui';
```

## code demonstration

### Basic usage

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

### Circular progress bar

```jsx
<Progress.Circle percent={20} />
```

## API

### Progress

<!-- prettier-ignore -->
| Attribute Name | Description | Type | Default value |
| -------------- | ----------- | ---- | ------------- |


style|style|CSSProperties|undefined|
width|width|string|0|
height|height|string|'4px'|
percent|percent|number|0|
trackColor|trackColor|string|'#d3d3d3'|
fillColor|fillColor|any|'#007AFF'|

### Progress.Circle

<!-- prettier-ignore -->
| Attribute Name | Description | Type | Default value |
| -------------- | ----------- | ---- | ------------- |


className|className|string|undefined|
children|Sub -element|ReactNode|undefined|
style|style|CSSProperties|undefined|
size|尺寸|string|'100px'|
trackWidth|trackWidth|string|'10px'|
trackColor|trackColor|string|'#d3d3d3'|
fillColor|fillColor|string|'#007AFF'|
percent|percent|number|0|
maskColor|maskColor|string|'#ffffff'|
