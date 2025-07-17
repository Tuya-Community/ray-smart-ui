<!-- ---
category: Display
--- -->

# Progress Bar

### Introduction

Progress bar

### Import

```jsx
import { Progress } from '@ray-js/smart-ui';
```

## Code Demonstration

### Basic Usage

```jsx
import React from 'react';
import { Progress } from '@ray-js/smart-ui';

export default function Demo() {
  return (
    <Progress
      percentage={70}
      color="linear-gradient(to right, #FA709A 0%, #FEDD44 100%)"
    />
  );
}
```

### Circular Progress Bar

```jsx
<Progress.Circle percent={20} />
```

## API

### Progress

<!-- prettier-ignore -->
| Parameter    | Description                 | Type                | Default           |
| ------------ | -------------------------- | ------------------ | ---------------- |
| color        | Progress bar color          | _string_           | `#1989fa`        |
| inactive     | Whether to gray out         | _boolean_          | `false`          |
| percentage   | Progress percentage         | _number_           | `0`              |
| pivotColor  | Background color of the text | _string_           | Same as bar color|
| pivotText   | Displayed text               | _string_           | Percentage text  |
| showPivot   | Whether to show text         | _boolean_          | `true`           |
| strokeWidth | Thickness of progress bar (unit: `px`)| _string \| number_| `4px`|
| textColor   | Text color                   | _string_           | `#fff`           |
| trackColor  | Track color                  | _string_           | `#e5e5e5`        |


### Progress.Circle

<!-- prettier-ignore -->
| Property | Description | Type | Default Value |
| -------- | ----------- | ---- | ------------- |
className|Class name|string|undefined|
children|Children elements|ReactNode|undefined|
style|Style|CSSProperties|undefined|
size|Size|string|'100px'|
trackWidth|Track width|string|'10px'|
trackColor|Track color|string|'#d3d3d3'|
fillColor|Fill color|string|'#007AFF'|
percent|Percentage|number|0|
maskColor|Mask color|string|'#ffffff'|

### Style Variables

The component provides the following CSS variables for customizing styles. For usage, please refer to the [ConfigProvider Component](/material/smartui?comId=config-provider).

| Name                              | Default Value| Description |
| --------------------------------- | ------------ | ----------- |
| --progress-height | _4px_ | - |
| --progress-background-color | _#ebedf0_ | - |
| --progress-pivot-padding | _0 5px_ | - |
| --progress-color | _#1989fa_ | - |
| --progress-pivot-font-size | _10px_ | - |
| --progress-pivot-line-height | _1.6_ | - |
| --progress-pivot-background-color | _#1989fa_ | - |
| --progress-pivot-text-color | _#fff_ | - |
| --circle-text-color | _#323233_ | Text color inside the circle |