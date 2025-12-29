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

### 水平

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

### 基础用法(百分比)

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

### 水平(百分比)

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

| 参数                | 说明                     | 类型                       | 默认值     |
| ------------------- | ------------------------ | -------------------------- | ---------- |
| backgroundColor     | 电量背景色               | _string_                   | -          |
| color `v2.6.2`      | 电量的颜色（优先级最高） | _string_                   | -          |
| highColor           | 电量高的颜色             | _string_                   | `#70CF98`  |
| inCharging `v2.8.1` | 是否处于充电状态         | _boolean_                  | `false`    |
| lowColor            | 电量低的颜色             | _string_                   | `#FF4444`  |
| middleColor         | 电量中的颜色             | _string_                   | `#F5A623`  |
| showText `v2.8.1`   | 是否显示电量文本         | _boolean_                  | `false`    |
| size                | 尺寸                     | _number_                   | 10         |
| type                | 电池方向                 | `vertical` \| `horizontal` | `vertical` |
| value               | 电量值                   | _number_                   | 70         |
