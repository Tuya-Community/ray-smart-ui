---
category: Universal
assets: Battery
---

# Battery

### Introduction

Customizable battery color.

### Import

```jsx
import { Battery } from '@ray-js/smart-ui';
```

## Code Demos

### Basic Usage

```jsx
import React from 'react';
import { Battery } from '@ray-js/smart-ui';

export default function Demo() {
  return <Battery size={20} value={100} />;
}
```

### Horizontal

```jsx
import React from 'react';
import { Battery } from '@ray-js/smart-ui';

export default function Demo() {
  return <Battery type="horizontal" value={100} />;
}
```

### Set Color `v2.6.2`

`color` The attribute can directly set the color of the component and has the highest priority.

```jsx
import React from 'react';
import { Battery } from '@ray-js/smart-ui';

export default function Demo() {
  return <Battery type="horizontal" color="red" value={100} />;
}
```

## API

### Props

| Property         | Description                           | Type                       | Default    |
| ---------------- | ------------------------------------- | -------------------------- | ---------- |
| backgroundColor | Battery background color | _string_ | - |
| color `v2.6.2` | Battery color (highest priority) | _string_ | - |
| highColor | Color when battery level is high | _string_ | `#70CF98` |
| middleColor | Color when battery level is medium | _string_ | `#F5A623` |
| lowColor | Color when battery level is low | _string_ | `#FF4444` |
| inCharging `v2.10.0` | Whether the battery is charging | _boolean_ | `false` |
| chargingColor `v2.10.0` | Charging Color | _string_ | `#2fc755` |
| showText  `v2.10.0` | Whether to display battery level text | _boolean_ | `false` |
| size | Size | _number_ | 24 |
| type | Battery orientation | `vertical` \| `horizontal` | `vertical` |
| value | Battery level | _number_ | 70 |

### Style Variables

The component provides the following CSS variables that can be used for custom styles. For usage, refer to the [ConfigProvider Component](/material/smartui?comId=config-provider).

| Name             | Default Value         | Description                     |
| -------------------- | --------------------- | ------------------------------- |
| --battery-body-base-background `v2.10.0`     | _rgba(0, 0, 0, 0.25)_ | Battery body background         |
| --battery-body-charging-background `v2.10.0` | _#2fc755_             | Charging state background       |
| --battery-body-high-background `v2.10.0`   | _var(--app-B1-N1, rgba(0, 0, 0, 0.9))_  | High battery background color   |
| --battery-body-middle-background `v2.10.0`   | _#ffcb00_             | Medium battery level background |
| --battery-body-low-background `v2.10.0`      | _#ee652e_             | Low battery level background    |
| --battery-slash-border-color `v2.10.0`       | _var(--smart-ui-battery-slash-border-color, #ffffff)_  | Slash border color              |
| --battery-text-color `v2.10.0`    | _var(--smart-ui-battery-text-color, rgba(0, 0, 0, 0.6))_  | Battery level text color        |