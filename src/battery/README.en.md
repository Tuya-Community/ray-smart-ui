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

## API

### Props

| Property         | Description                                        | Type                       | Default     |
| ---------------- | -------------------------------------------------- | -------------------------- | ----------  |
| backgroundColor | Battery background color | _string_ | - |
| highColor | Color when battery level is high | _string_ | `#70CF98` |
| lowColor | Color when battery level is low | _string_ | `#FF4444` |
| middleColor | Color when battery level is medium | _string_ | `#F5A623` |
| size | Size | _number_ | 10 |
| type | Battery orientation | `vertical` \| `horizontal` | `vertical` |
| value | Battery level | _number_ | 70 |
| color `v2.6.2` | Battery color (highest priority) | _string_ | - |