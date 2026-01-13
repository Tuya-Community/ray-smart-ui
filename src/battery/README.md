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

### 水平

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

### 显示百分比

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

### 水平(显示百分比)

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

### 自定义大小

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

| 参数             | 说明                     | 类型                       | 默认值     |
| ---------------- | ------------------------ | -------------------------- | ---------- |
| backgroundColor | 电量背景色 | _string_ | - |
| color `v2.6.2` | 电量的颜色（优先级最高） | _string_ | - |
| highColor | 电量高的颜色 | _string_ | `var(--app-B1-N1, rgba(0, 0, 0, 0.9))` |
| middleColor | 电量中的颜色 | _string_ | `#ffcb00` |
| lowColor | 电量低的颜色 | _string_ | `#ee652e` |
| inCharging `v2.10.0` | 是否处于充电状态，开启后会显示充电图标并使用充电颜色 | _boolean_ | `false` |
| chargingColor `v2.10.0` | 充电状态下的颜色 | _string_ | `#2fc755` |
| showText `v2.10.0` | 是否显示电量百分比文本，会在电池旁边显示当前电量值 | _boolean_ | `false` |
| size | 尺寸 | _number_ | 10 `v2.0.0` 24 `2.10.0` |
| type | 电池方向 | `vertical` \| `horizontal` | `vertical` |
| value | 电量值 | _number_ | 70 |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/material/smartui?comId=config-provider)。

| 名称                                        | 默认值                | 描述           |
| ------------------------------------------- | --------------------- | -------------- |
| --battery-body-base-background `v2.10.0`     | _var(--smart-ui-battery-body-base-background, rgba(0, 0, 0, 0.25))_ | 电池主体背景色 |
| --battery-body-charging-background `v2.10.0` | _#2fc755_             | 充电状态背景色 |
| --battery-body-high-background `v2.10.0`   | _var(--app-B1-N1, rgba(0, 0, 0, 0.9))_  | 高电量背景色   |
| --battery-body-middle-background `v2.10.0`   | _#ffcb00_             | 中电量背景色   |
| --battery-body-low-background `v2.10.0`      | _#ee652e_             | 低电量背景色   |
| --battery-slash-border-color `v2.10.0`       | _var(--smart-ui-battery-slash-border-color, #ffffff)_   | 斜线边框颜色   |
| --battery-text-color `v2.10.0`  | _var(--smart-ui-battery-text-color, rgba(0, 0, 0, 0.6))_  | 电量文本颜色   |