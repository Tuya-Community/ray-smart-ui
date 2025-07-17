<!-- ---
category: 展示
--- -->

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
import React from 'react';
import { Progress } from '@ray-js/smart-ui';

export default function Demo() {
  return (
    <Progress
      percentage={70}
      color="linear-gradient(to right, #FA709A 0%, #FEDD44 100%)"
    />
  );
}
```

### 圆形进度条

```jsx
<Progress.Circle percent={20} />
```

## API

### Progress

<!-- prettier-ignore -->
| 参数         | 说明                       | 类型               | 默认值           |
| ------------ | -------------------------- | ------------------ | ---------------- |
| color        | 进度条颜色                 | _string_           | `#1989fa`        |
| inactive     | 是否置灰                   | _boolean_          | `false`          |
| percentage   | 进度百分比                 | _number_           | `0`              |
| pivotColor  | 文字背景色                 | _string_           | 与进度条颜色一致 |
| pivotText   | 文字显示                   | _string_           | 百分比文字       |
| showPivot   | 是否显示进度文字           | _boolean_          | `true`           |
| strokeWidth | 进度条粗细，默认单位为`px` | _string \| number_ | `4px`            |
| textColor   | 进度文字颜色               | _string_           | `#fff`           |
| trackColor  | 轨道颜色                   | _string_           | `#e5e5e5`        |


### Progress.Circle

<!-- prettier-ignore -->
| 属性名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | ------ |
className|类名|string|undefined|
children|子元素|ReactNode|undefined|
style|样式|CSSProperties|undefined|
size|尺寸|string|'100px'|
trackWidth|滑槽宽度|string|'10px'|
trackColor|滑槽颜色|string|'#d3d3d3'|
fillColor|填充颜色|string|'#007AFF'|
percent|百分比|number|0|
maskColor|遮罩颜色|string|'#ffffff'|

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/material/smartui?comId=config-provider)。

| 名称                              | 默认值    | 描述 |
| --------------------------------- | --------- | ---- |
| --progress-height | _4px_ | - |
| --progress-background-color | _#ebedf0_ | - |
| --progress-pivot-padding | _0 5px_ | - |
| --progress-color | _#1989fa_ | - |
| --progress-pivot-font-size | _10px_ | - |
| --progress-pivot-line-height | _1.6_ | - |
| --progress-pivot-background-color | _#1989fa_ | - |
| --progress-pivot-text-color | _#fff_ | - |
| --circle-text-color | _#323233_ | 圆环内的文字颜色 |
