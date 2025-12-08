---
category: Display
new: true
version: v2.3.0
assets: LampCirclePicker,CircleProgress,LampHuePicker,LampColorWheel,LampRhythmCircle,LampCirclePickerColor,LampCirclePickerWhite
---

# Circle Ring Progress Bar

### Introduction

Progress bar component, refactored to canvas implementation in v2.3.0

### Import

```jsx
import { Circle } from '@ray-js/smart-ui';
```

```warning:⚠️Note
Starting from v2.3.9, it is no longer supported in WeChat mini programs.
```

## Code Demonstration

### Basic Usage

The `percent` property indicates the target progress of the progress bar.

```tsx
import React from 'react';
import { Circle } from '@ray-js/smart-ui';

export default function Demo() {
  return (
    <Circle percent={20}></Circle>
  );
}
```

### Notch Round Corner

The `mode` property indicates the type, `angle` and `angle2` are semi-circle types. The `angleOffset` property can set the angle offset.

```tsx
import React from 'react';
import { Circle } from '@ray-js/smart-ui';

export default function Demo() {
  return (
    <>
      <Circle percent={50} mode="angle" />
      <Circle percent={50} mode="angle2" />
      <Circle percent={50} mode="angle" angleOffset={30} />
    </>
  );
}
```

### Without Round Corner

Set the `round` property to false for right angles.

```tsx
import React from 'react';
import { Circle } from '@ray-js/smart-ui';

export default function Demo() {
  return (
    <Circle percent={50} mode="angle" round={false} />
  );
}
```

### Custom Colors

`fillColor` can be set to a custom color, `fillColorStops` sets gradient colors.

```tsx
import React from 'react';
import { Circle } from '@ray-js/smart-ui';

export default function Demo() {
  return (
    <>
      <Circle percent={50} mode="angle" round={false} fillColor="#DE23CB" />
      <Circle percent={50} mode="angle" round={false} fillColorStops={{ '0%': '#2361DE', '50%': '#23DEB5', }} />
    </>
  );
}
```

### Custom Width

```tsx
import React from 'react';
import { Circle } from '@ray-js/smart-ui';

export default function Demo() {
  return (
    <Circle percent={60} trackWidth={15} mode="angle" round={false} />
  );
}
```

## API

### props

| Property Name              | Description  | Type          | Default Value              |
| -------------------------- | ------------ | ------------- | -------------------------- |
| angleOffset `v2.7.4`        | Angle Offset | number        | -1                         |
| children                    | Children     | ReactNode     | undefined                  |
| className                   | Class Name   | string        | undefined                  |
| customStyle `v2.3.3`        | Style        | CSSProperties | undefined                  |
| fillColor                   | Fill Color   | string        | '#007AFF'                  |
| maskColor                   | Mask Color   | string        | 'transparent'              |
| mode `v2.3.0`               | Style Mode   | string        | `basic`, `angle`, `angle2` |
| percent                     | Percentage   | number        | 0                          |
| round `v2.3.0`              | Mask Color   | string        | `true`                     |
| size                        | Size         | string        | '100px'                    |
| style `@deprecated v2.1.7`  | Style        | CSSProperties | undefined                  |
| trackColor                  | Track Color  | string        | '#d3d3d3'                  |
| trackWidth                  | Track Width  | number        | 10                         |

### Style Variables

The component provides the following CSS variables for styling customization, see the [ConfigProvider Component](/material/smartui?comId=config-provider) for usage instructions.

| Name                                     | Default Value | Description                  |
| ---------------------------------------- | ------------- | ---------------------------- |
| --circle-text-color `@deprecated v2.3.0` | _#323233_     | Text color inside the circle |
