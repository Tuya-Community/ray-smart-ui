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

`inCharging` `v2.10.0` 可以让电池显示充电中

```jsx
import React from 'react';
import { View } from '@ray-js/ray';
import { Battery } from '@ray-js/smart-ui';

export default function Demo() {
  return (
    <View>
      <Battery value={80} />
      <Battery value={50} />
      <Battery value={20} />
      <Battery value={0} />
      <Battery inCharging value={80} />
    </View>
  );
}
```

### level

```jsx
import React from 'react';
import { View } from '@ray-js/ray';
import { Battery } from '@ray-js/smart-ui';

export default function Demo() {
  return (
    <View>
      <Battery type="horizontal" value={100} />
      <Battery type="horizontal" />
      <Battery type="horizontal" value={10} />
      <Battery type="horizontal" value={3} />
      <Battery type="horizontal" value={0} />
    </View>
  );
}
```

### Show Percentage `v2.10.0`

`showText` 可以显示电池的百分比文案

```jsx
import React from 'react';
import { View } from '@ray-js/ray';
import { Battery } from '@ray-js/smart-ui';

export default function Demo() {
  return (
    <View>
      <Battery showText value={80} />
      <Battery showText value={50} />
      <Battery showText value={20} />
      <Battery showText value={0} />
      <Battery showText inCharging value={80} />
    </View>
  );
}
```

### level(Show Percentage) `v2.10.0`

`showText` 可以显示电池的百分比文案

```jsx
import React from 'react';
import { View } from '@ray-js/ray';
import { Battery } from '@ray-js/smart-ui';

export default function Demo() {
  return (
    <View>
      <Battery showText type="horizontal" value={100} />
      <Battery showText type="horizontal" />
      <Battery showText type="horizontal" value={10} />
      <Battery showText type="horizontal" value={3} />
      <Battery showText type="horizontal" value={0} />
    </View>
  );
}
```

### Custom Size

```jsx
import React from 'react';
import { View } from '@ray-js/ray';
import { Battery } from '@ray-js/smart-ui';

export default function Demo() {
  return (
    <View>
      <Battery type="horizontal" size={28} value={100} />
      <Battery showText type="horizontal" size={28} value={100} />
      <Battery size={28} value={100} />
      <Battery showText size={28} value={100} />
    </View>
  );
}
```

## API

### Props

| Property         | Description                           | Type                       | Default    |
| ---------------- | ------------------------------------- | -------------------------- | ---------- |
| backgroundColor | Battery background color | _string_ | - |
| color `v2.6.2` | Battery color (highest priority) | _string_ | - |
| highColor | Color when battery level is high | _string_ | `var(--app-B1-N1, rgba(0, 0, 0, 0.9))` |
| middleColor | Color when battery level is medium | _string_ | `#ffcb00` |
| lowColor | Color when battery level is low | _string_ | `#ee652e` |
| inCharging `v2.10.0` | Whether the battery is charging | _boolean_ | `false` |
| chargingColor `v2.10.0` | Charging Color | _string_ | `#2fc755` |
| showText  `v2.10.0` | Whether to display battery level text | _boolean_ | `false` |
| size | Size | _number_ | 10 `v2.0.0` 24 `2.10.0` |
| type | Battery orientation | `vertical` \| `horizontal` | `vertical` |
| value | Battery level | _number_ | 70 |

### Style Variables

The component provides the following CSS variables that can be used for custom styles. For usage, refer to the [ConfigProvider Component](/material/smartui?comId=config-provider).

| Name             | Default Value         | Description                     |
| -------------------- | --------------------- | ------------------------------- |
| --battery-body-base-background `v2.10.0`     | _var(--smart-ui-battery-body-base-background, rgba(0, 0, 0, 0.25))_ | Battery body background         |
| --battery-body-charging-background `v2.10.0` | _#2fc755_             | Charging state background       |
| --battery-body-high-background `v2.10.0`   | _var(--app-B1-N1, rgba(0, 0, 0, 0.9))_  | High battery background color   |
| --battery-body-middle-background `v2.10.0`   | _#ffcb00_             | Medium battery level background |
| --battery-body-low-background `v2.10.0`      | _#ee652e_             | Low battery level background    |
| --battery-slash-border-color `v2.10.0`       | _var(--smart-ui-battery-slash-border-color, #ffffff)_  | Slash border color              |
| --battery-text-color `v2.10.0`    | _var(--smart-ui-battery-text-color, rgba(0, 0, 0, 0.6))_  | Battery level text color        |