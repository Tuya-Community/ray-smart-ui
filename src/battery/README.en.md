---
category: Universal
---

# Battery

### Introduction

Battery, customizable colors

### Introduce

```jsx
import { Battery } from '@ray-js/smart-ui';
```

## Code Demonstration

### Basic Usage

```jsx
import React from 'react';
import { Battery } from '@ray-js/smart-ui';

export default function Demo() {
  return <Battery size={20} value={100} />;
}
```

### Horizontal direction

```jsx
import React from 'react';
import { Battery } from '@ray-js/smart-ui';

export default function Demo() {
  return <Battery type="horizontal" value={100} />;
}
```

## API

### Props

| 参数            | 说明                                             | 类型                       | 默认值     |
| --------------- | ------------------------------------------------ | -------------------------- | ---------- |
| type            | Battery                                         | `vertical` \| `horizontal` | `vertical` |
| size            | size                                             | _number_                   | 10         |
| value           | Value                                           | _number_                   | 70         |
| highColor       | Color with high electricity                                     | _string_                   | `#70CF98`  |
| middleColor     | The color in the power                                     | _string_                   | `#F5A623`  |
| lowColor        | Low -electricity color                                     | _string_                   | `#FF4444`  |
| backgroundColor | Electricity background color                                       | _string_                   | -          |
| onCalcColor     | Calculation of electricity color calculation rules callback function, return the calculated color value | _() => string_             | -          |
