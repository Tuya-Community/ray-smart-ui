---
category: 展示
new: true
version: v2.3.0
assets: LampCirclePicker,CircleProgress,LampHuePicker,LampColorWheel,LampRhythmCircle,LampCirclePickerColor,LampCirclePickerWhite
---

# Circle 环形进度条

### 介绍

进度条组件，v2.3.0 重构为 canvas 实现

### 引入

```jsx
import { Circle } from '@ray-js/smart-ui';
```

```warning:⚠️注意
从 v2.3.9 开始将不支持微信小程序。
```

## 代码演示

### 基础用法

`percent`属性表示进度条的目标进度。

```tsx
import React from 'react';
import { Circle } from '@ray-js/smart-ui';

export default function Demo() {
  return (
    <Circle percent={20}></Circle>
  );
}
```

### 缺口圆角

`mode`属性表示类型，angle、angle2 为半圆类型。`angleOffset` `v2.8.0` 属性可以设置角度偏移量。

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

### 不使用圆角

`round`属性设置为 false 为直角。

```tsx
import React from 'react';
import { Circle } from '@ray-js/smart-ui';

export default function Demo() {
  return (
    <Circle percent={50} mode="angle" round={false} />
  );
}
```

### 自定义颜色

`fillColor` 可设置自定义颜色，`fillColorStops` 设置渐变色，

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

### 自定义宽度

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

| 属性名                     | 描述     | 类型          | 默认值                     |
| -------------------------- | -------- | ------------- | -------------------------- |
| angleOffset   `v2.8.0` | 角度偏移 | number | -1 |
| children | 子元素 | ReactNode | undefined |
| className | 类名 | string | undefined |
| customStyle `v2.3.3` | 样式 | CSSProperties | undefined |
| fillColor | 填充颜色 | string | '#007AFF' |
| maskColor | 遮罩颜色 | string | 'transparent' |
| mode `v2.3.0` | 样式风格 | string | `basic`、`angle`、`angle2` |
| percent | 百分比 | number | 0 |
| round `v2.3.0` | 遮罩颜色 | string | `true` |
| size | 尺寸 | string | '100px' |
| style `@deprecated v2.1.7` | 样式 | CSSProperties | undefined |
| trackColor | 滑槽颜色 | string | '#d3d3d3' |
| trackWidth | 滑槽宽度 | number | 10 |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/material/smartui?comId=config-provider)。

| 名称                                     | 默认值    | 描述             |
| ---------------------------------------- | --------- | ---------------- |
| --circle-text-color `@deprecated v2.3.0` | _#323233_ | 圆环内的文字颜色 |