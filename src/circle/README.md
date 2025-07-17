---
category: 展示
---

# Progress 进度条

### 介绍

进度条

### 引入

```jsx
import { Progress } from '@ray-js/smart-ui';
```

## 代码演示

### 基础用法

```jsx
import { Progress } from '@ray-js/smart-ui';

export default function Demo() {
  return (
    <ProgressBar
      style={{ marginBottom: '18rpx' }}
      percent={70}
      fillColor="linear-gradient(to right, #FA709A 0%, #FEDD44 100%)"
    />
  );
}
```

### 圆形进度条

```jsx
<Circle value={20} />
```

## API

### Progress

<!-- prettier-ignore -->
|属性名|描述|类型|默认值|
|---|---|---|---|
style|样式|CSSProperties|undefined|
width|宽|string|0|
height|高|string|'4px'|
percent|百分比|number|0|
trackColor|线条的颜色|string|'#d3d3d3'|
fillColor|填充的颜色|any|'#007AFF'|

### Progress.Circle

<!-- prettier-ignore -->
|属性名|描述|类型|默认值|
|---|---|---|---|
className|类名|string|undefined|
children|子元素|ReactNode|undefined|
style|样式|CSSProperties|undefined|
size|尺寸|string|'100px'|
trackWidth|滑槽宽度|string|'10px'|
trackColor|滑槽颜色|string|'#d3d3d3'|
fillColor|填充颜色|string|'#007AFF'|
percent|百分比|number|0|
maskColor|遮罩颜色|string|'#ffffff'|
