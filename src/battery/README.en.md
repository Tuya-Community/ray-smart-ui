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
  return (
    <>
      <Battery size={20} value={100} />
      <Battery value={80} />
      <Battery value={50} />
      <Battery value={20} />
      <Battery value={0} />
      <Battery inCharging value={80} />
    </>
  );
}
```

### Horizontal

```jsx
import React from 'react';
import { Battery } from '@ray-js/smart-ui';

export default function Demo() {
  return (
    <>
      <Battery type="horizontal" value={100} />
      <Battery type="horizontal" />
      <Battery type="horizontal" value={10} />
      <Battery type="horizontal" value={3} />
      <Battery type="horizontal" value={0} />
    </>
  );
}
```

### Basic Usage(With Percent)

```jsx
import React from 'react';
import { Battery } from '@ray-js/smart-ui';

export default function Demo() {
  return (
    <>
      <Battery showText size={20} value={100} />
      <Battery showText value={80} />
      <Battery showText value={50} />
      <Battery showText value={20} />
      <Battery showText value={0} />
      <Battery showText inCharging value={80} />
    </>
  );
}
```

### Horizontal(With Percent)

```jsx
import React from 'react';
import { Battery } from '@ray-js/smart-ui';

export default function Demo() {
  return (
    <>
      <Battery showText type="horizontal" value={100} />
      <Battery showText type="horizontal" />
      <Battery showText type="horizontal" value={10} />
      <Battery showText type="horizontal" value={3} />
      <Battery showText type="horizontal" value={0} />
    </>
  );
}
```

## API

### Props

| Property            | Description                           | Type                       | Default    |
| ------------------- | ------------------------------------- | -------------------------- | ---------- |
| backgroundColor     | Battery background color              | _string_                   | -          |
| color `v2.6.2`      | Battery color (highest priority)      | _string_                   | -          |
| highColor           | Color when battery level is high      | _string_                   | `#70CF98`  |
| inCharging `v2.8.1` | Whether the battery is charging       | _boolean_                  | `false`    |
| lowColor            | Color when battery level is low       | _string_                   | `#FF4444`  |
| middleColor         | Color when battery level is medium    | _string_                   | `#F5A623`  |
| showText `v2.8.1`   | Whether to display battery level text | _boolean_                  | `false`    |
| size                | Size                                  | _number_                   | 10         |
| type                | Battery orientation                   | `vertical` \| `horizontal` | `vertical` |
| value               | Battery level                         | _number_                   | 70         |
