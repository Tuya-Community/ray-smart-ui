---
category: 通用
assets: Battery
---

# Battery 电池

### 介绍

电池，可自定义颜色

### 引入

```jsx
import { Battery } from '@ray-js/smart-ui';
```

## 代码演示

### 基础用法

```jsx
import React from 'react';
import { Battery } from '@ray-js/smart-ui';

export default function Demo() {
  return <Battery size={20} value={100} />;
}
```

### 水平

```jsx
import React from 'react';
import { Battery } from '@ray-js/smart-ui';

export default function Demo() {
  return <Battery type="horizontal" value={100} />;
}
```

### 设置颜色 `v2.6.2`

`color` 属性可以直接设置组件的颜色，拥有最高优先级

```jsx
import React from 'react';
import { Battery } from '@ray-js/smart-ui';

export default function Demo() {
  return <Battery type="horizontal" color="red" value={100} />;
}
```

## API

### Props

| 参数             | 说明                                             | 类型                       | 默认值     |
| ---------------- | ------------------------------------------------ | -------------------------- | ---------- |
| backgroundColor | 电量背景色 | _string_ | - |
| highColor | 电量高的颜色 | _string_ | `#70CF98` |
| lowColor | 电量低的颜色 | _string_ | `#FF4444` |
| middleColor | 电量中的颜色 | _string_ | `#F5A623` |
| size | 尺寸 | _number_ | 10 |
| type | 电池方向 | `vertical` \| `horizontal` | `vertical` |
| value | 电量值 | _number_ | 70 |
| color `v2.6.2` | 电量的颜色（优先级最高） | _string_ | - |