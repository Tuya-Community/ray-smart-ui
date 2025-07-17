---
category: 数据录入
---

# Slider 滑动条

### 介绍

滑动条是代表模拟无线电调谐或音量控制表盘的 UI 组件。它允许用户从左到右滑动旋钮、手柄或栏，反之亦然。UI 滑动条非常适合用户快速同时探索许多不同的选项或值。最重要的是，当数量或值不需要精确时，它们对于用户来说是实用的组件。

### 引入

```jsx
import { Slider } from '@ray-js/smart-ui';
```

## 代码演示

### 基础用法

```jsx
import { Slider } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value, setValue] = React.useState(30);

  return (
    <Slider
      style={{ marginTop: 48 }}
      min={0}
      max={100}
      value={value}
      minTrackRadius="4px"
      maxTrackHeight="4px"
      minTrackHeight="4px"
    />
  );
}
```

### 双滑块滑动条

```jsx
import { View } from '@ray-js/ray';
import { Slider } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value, setValue] = React.useState([10, 30]);

  return (
    <View style={{ padding: 48 }}>
      <Slider.RangeSlider
        min={0}
        max={100}
        barHeight="4px"
        value={value}
        inActiveColor="#D8D9DC"
        activeColor="#007AFF"
        onChange={event => setValue(event.detail)}
      />
    </View>
  );
}
```

## API

### Slider Props

<!-- prettier-ignore -->
|属性名|描述|类型|默认值|
|---|---|---|---|
instanceId|--|string|undefined|
className|类名|string|undefined|
style|样式|CSSProperties|undefined|
isVertical|是否垂直展示，垂直展示时，需要设置滑槽宽高|boolean|false|
value|样式|number|undefined|
defaultValue|默认值|number|0|
min|最小值|number|0|
max|最大值|number|100|
step|步距，取值必须大于 `0`，并且可被 `(max - min)` 整除。|number|1|
forceStep|和 step 一致，用于滑块不跟随刻度时设置|number|1|
disabled|是否禁用|boolean|false|
onChange|拖拽滑块时触发，并把当前拖拽的值作为参数传入|(value: number) => void|undefined|
onBeforeChange|滑块拖拽开始时触发，并把当前拖拽的值作为参数传入|(value: number) => void|undefined|
onAfterChange|与 `touchend` 触发时机一致，把当前值作为参数传入|(value: number) => void|undefined|
maxTrackWidth|滑槽宽度|Width<string | number>|'100%'|
maxTrackHeight|滑槽高度|Width<string | number>|'4px'|
maxTrackRadius|滑槽圆角|BorderRadius<string | number>|'4px'|
maxTrackColor|滑槽颜色|Background<0 | (string & {})>|'#d8d8d8'|
minTrackWidth|滑条最小宽度|Width<string | number>|'28px'|
minTrackHeight|滑条高度|Width<string | number>|'4px'|
minTrackRadius|滑条圆角|BorderRadius<string | number>|'inherit'|
minTrackColor|滑条颜色|Background<0 | (string & {})>|'#158CFB'|
thumbWidth|滑块宽度|Width<string | number>|'28px'|
thumbStyle|滑块样式|CSSProperties|null|
thumbWrapStyle|滑块wrap样式|CSSProperties|null|
thumbHeight|滑块高度|string | number|'28px'|
thumbRadius|滑块圆角|string | number|'28px'|
thumbColor|滑块颜色|Background<0 | (string & {})>|'#ffffff'|
thumbBorderStyle|滑块边框样式|BorderStyle|'0px solid #ffffff'|
thumbBoxShadowStyle|滑块阴影|BoxShadow|'0px 0.5px 4px rgba(0, 0, 0, 0.12), 0px 6px 13px rgba(0, 0, 0, 0.12)'|
isShowTicks|是否显示刻度|boolean|false|
tickWidth|刻度宽度|string|'4px'|
tickHeight|刻度高度|string|'12px'|
tickRadius|刻度圆角|string|'4px'|
maxTrackTickColor|滑槽刻度颜色|string|'#158CFB'|
minTrackTickColor|滑条刻度颜色|string|'#ffffff'|
trackStyle|轨道样式|CSSProperties|undefined|
barStyle|滑条样式|CSSProperties|undefined|
renderType|渲染方式|"ray" | "sjs"|'sjs'|
hideThumbButton|隐藏滑块|boolean|null|
thumbStyleRenderFormatter|渲染按钮背景色，例如 "rgb(value,100,100)"，将value替换为滑动值(仅sjs支持)|Partial<Record<keyof CSSProperties, string>>|null|
thumbStyleRenderValueScale|渲染value时的缩放倍数|number|1|
thumbStyleRenderValueStart|渲染value时的起始值|number|0|
thumbStyleRenderValueReverse|渲染value时反转值|boolean|false|
enableTouch|使用触摸跳跃|boolean|true|
hidden|是否隐藏|boolean|false|
parcel|包裹滑动条|boolean|false|
parcelMargin|包裹滑动条间隔|number|0|

### RangeSlider Props

<!-- prettier-ignore -->
|参数|说明|类型|默认值|
|---|---|---|---|
value|当前进度百分比，在双滑块模式下为数组格式|number | number[]|0|
disabled|是否禁用滑块|boolean|false|
max|最大值|number|100|
min|最小值|number|0|
step|步长|number|1|
barHeight|进度条高度，默认单位为 px|string | number|2px|
activeColor|进度条激活态颜色|string|#1989fa|
inactiveColor|进度条默认颜色|string|#e5e5e5|
vertical|是否垂直展示|boolean|false|
onDrag|拖动进度条时触发|event.detail.value: 当前进度|
onChange|进度值改变后触发|event.detail: 当前进度|
onDragStart|开始拖动时触发|-|
onDragEnd|结束拖动时触发|-|
