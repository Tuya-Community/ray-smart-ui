---
category: 数据录入
assets: LampTouchSlider,LampColorSlider,LampSaturationSlider,LampTempSlider,LampBrightSlider,LampStyleSlider,LampVerticalTouchSlider,LampVerticalPercentSlider,HighPerfText
---

# Slider 滑动条

### 介绍

滑动条是代表模拟无线电调谐或音量控制表盘的 UI 组件。它允许用户从左到右滑动旋钮、手柄或栏，反之亦然。UI 滑动条非常适合用户快速同时探索许多不同的选项或值。最重要的是，当数量或值不需要精确时，它们对于用户来说是实用的组件。

### 引入

```jsx
import { Slider } from '@ray-js/smart-ui';
```

## 代码演示

### 普通滑动条

```jsx
import { Slider } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value, setValue] = React.useState(30);

  return (
    <Slider
      maxTrackHeight="4px"
      minTrackHeight="4px"
      thumbHeight="28px"
      thumbWidth="28px"
      value={value}
      onAfterChange={value => setValue(value)}
    />
  );
}
```

### 间隔滑动条

设置 `isShowTicks` 为 `true` ，可以展示出滑动间隔

```jsx
import { Slider } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value, setValue] = React.useState(30);

  return (
    <Slider
      value={value}
      onAfterChange={value => setValue(value)}
      maxTrackHeight={8}
      minTrackHeight={8}
      tickHeight="4px"
      tickWidth="4px"
      thumbHeight="18px"
      thumbWidth="18px"
      minTrackTickColor="#fff"
      maxTrackTickColor="#fff"
      isShowTicks
      step={10}
      min={0}
      max={100}
    />
  );
}
```

### 间隔滑动条 - 样式2

设置 `hideThumbButton` 为 `true` ，可以隐藏滑块按钮

```jsx
import { Slider } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value, setValue] = React.useState(30);

  return (
    <Slider
      isShowTicks
      step={30}
      min={0}
      max={90}
      maxTrackHeight="40px"
      maxTrackRadius="16px"
      minTrackWidth="40px"
      minTrackHeight="40px"
      minTrackRadius="16px"
      tickWidth="4px"
      tickHeight="12px"
      tickRadius="4px"
      hideThumbButton
      value={value}
      onAfterChange={value => setValue(value)}
    />
  );
}
```

### 拖动滑动条

```jsx
import { Slider } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value, setValue] = React.useState(30);

  return (
    <Slider
      minTrackRadius="13px"
      minTrackHeight="22px"
      maxTrackRadius="13px"
      maxTrackHeight="26px"
      value={value}
      thumbWidth={18}
      thumbHeight={18}
      parcel
      parcelMargin={2}
      onAfterChange={value => setValue(value)}
    />
  );
}
```

### 拖动滑动条 - 样式2

```jsx
import { Slider } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value, setValue] = React.useState(30);

  return (
    <Slider
      minTrackRadius="8px"
      minTrackHeight="45px"
      maxTrackRadius="8px"
      maxTrackHeight="45px"
      value={value}
      onAfterChange={value => setValue(value)}
      thumbWidth={15}
      thumbHeight={50}
      thumbRadius={2}
      thumbStyle={{
        background: '#BBC5D4',
        border: '2px solid #FFFFFF',
        boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.5)',
      }}
    />
  );
}
```

### 拖动滑动条 - 样式3

```jsx
import { Slider } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value, setValue] = React.useState(30);

  return (
    <Slider
      parcel
      parcelMargin={2}
      minTrackRadius="5px"
      minTrackHeight="22px"
      maxTrackRadius="5px"
      maxTrackHeight="26px"
      value={value}
      thumbWidth={3}
      thumbHeight={16}
      onAfterChange={value => setValue(value)}
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


### 竖向

```jsx
import { Slider } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value, setValue] = React.useState(30);
  return (
    <Slider
      isVertical
      value={value}
      step={1}
      min={0}
      max={100}
      parcel
      parcelMargin={2}
      useParcelPadding={false}
      thumbWidth={12}
      thumbHeight={2}
      thumbRadius={2}
      maxTrackWidth="48px"
      maxTrackHeight="203px"
      maxTrackRadius="8px"
      minTrackWidth="48px"
      minTrackHeight="114px"
      maxTrackColor="rgba(0, 0, 0, 0.08)"
      minTrackColor="#1989FA"
      onAfterChange={setValue}
      thumbStyle={{
        borderRadius: '2px',
        width: '12px',
        height: '2px',
      }}
    />
  );
}
```

## API

### Slider Props

|属性名|描述|类型|默认值|
|---|---|---|---|
|instanceId|--|string|undefined|
|className|类名|string|undefined|
|style|样式|CSSProperties|undefined|
|isVertical|是否垂直展示，垂直展示时，需要设置滑槽宽高|boolean|false|
|value|样式|number|undefined|
|defaultValue|默认值|number|0|
|min|最小值|number|0|
|max|最大值|number|100|
|step|步距，取值必须大于 `0`，并且可被 `(max - min)` 整除。|number|1|
|forceStep|和 step 一致，用于滑块不跟随刻度时设置|number|1|
|disabled|是否禁用|boolean|false|
|onChange|拖拽滑块时触发，并把当前拖拽的值作为参数传入|(value: number) => void|undefined|
|onBeforeChange|滑块拖拽开始时触发，并把当前拖拽的值作为参数传入|(value: number) => void|undefined|
|onAfterChange|与 `touchend` 触发时机一致，把当前值作为参数传入|(value: number) => void|undefined|
|maxTrackWidth|滑槽宽度|Width<string \| number>|'100%'|
|maxTrackHeight|滑槽高度|Width<string \| number>|'4px'|
|maxTrackRadius|滑槽圆角|BorderRadius<string \| number>|'4px'|
|maxTrackColor|滑槽颜色|Background<0 \| (string & {})>|'#d8d8d8'|
|minTrackWidth|滑条最小宽度|Width<string \| number>|'28px'|
|minTrackHeight|滑条高度|Width<string \| number>|'4px'|
|minTrackRadius|滑条圆角|BorderRadius<string \| number>|'inherit'|
|minTrackColor|滑条颜色|Background<0 \| (string & {})>|'#158CFB'|
|thumbWidth|滑块宽度|Width<string \| number>|'28px'|
|thumbStyle|滑块样式|CSSProperties|null|
|thumbWrapStyle|滑块wrap样式|CSSProperties|null|
|thumbHeight|滑块高度|string | number|'28px'|
|thumbRadius|滑块圆角|string | number|'28px'|
|thumbColor|滑块颜色|Background<0 \| (string & {})>|'#ffffff'|
|thumbBorderStyle|滑块边框类型|BorderStyle|'none'|
|thumbBoxShadowStyle|滑块阴影|BoxShadow|'0px 0.5px 4px rgba(0, 0, 0, 0.12), 0px 6px 13px rgba(0, 0, 0, 0.12)'|
|isShowTicks|是否显示刻度|boolean|false|
|tickWidth|刻度宽度|string|'4px'|
|tickHeight|刻度高度|string|'12px'|
|tickRadius|刻度圆角|string|'4px'|
|maxTrackTickColor|滑槽刻度颜色|string|'#158CFB'|
|minTrackTickColor|滑条刻度颜色|string|'#ffffff'|
|trackStyle|轨道样式|CSSProperties|undefined|
|barStyle|滑条样式|CSSProperties|undefined|
|renderType|渲染方式|"ray" | "sjs"|'sjs'|
|hideThumbButton|隐藏滑块|boolean|null|
|thumbStyleRenderFormatter|渲染按钮背景色，例如 "rgb(value,100,100)"，将value替换为滑动值(仅sjs支持)|Partial<Record<keyof CSSProperties, string>>|null|
|thumbStyleRenderValueScale|渲染value时的缩放倍数|number|1|
|thumbStyleRenderValueStart|渲染value时的起始值|number|0|
|thumbStyleRenderValueReverse|渲染value时反转值|boolean|false|
|enableTouch|使用触摸跳跃|boolean|true|
|hidden|是否隐藏|boolean|false|
|parcel|包裹滑动条|boolean|false|
|parcelMargin|包裹滑动条间隔|number|0|

### Slot

| 名称  | 说明     |
| ----- | -------- |
| bar `v2.4.0` | 滑动条插槽 |
| thumb  `v2.4.0` | 滑块插槽 |

### RangeSlider Props

|参数|说明|类型|默认值|
|---|---|---|---|
|value|当前进度百分比，在双滑块模式下为数组格式|number | number[]|0|
|disabled|是否禁用滑块|boolean|false|
|max|最大值|number|100|
|min|最小值|number|0|
|step|步长|number|1|
|barHeight|进度条高度，默认单位为 px|string | number|2px|
|activeColor|进度条激活态颜色|string|#1989fa|
|inactiveColor|进度条默认颜色|string|#e5e5e5|
|vertical|是否垂直展示|boolean|false|
|onDrag|拖动进度条时触发|event.detail.value: 当前进度|
|onChange|进度值改变后触发|event.detail: 当前进度|
|onDragStart|开始拖动时触发|-|
|onDragEnd|结束拖动时触发|-|

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/material/smartui?comId=config-provider)。

| 名称                          | 默认值                                 | 描述 |
| ----------------------------- | -------------------------------------- | ---- |
| --slider-active-background-color | _#1989fa_ | 设置滑块激活状态下的背景颜色。 |
| --slider-inactive-background-color | _#ebedf0_ | 设置滑块未激活状态下的背景颜色。 |
| --slider-disabled-opacity | _0.3_ | 设置滑块禁用状态的透明度，数值越小透明度越高。 |
| --slider-bar-height | _2px_ | 设置滑块轨道的高度。 |
| --slider-button-width | _24px_ | 设置滑块按钮的宽度。 |
| --slider-button-height | _24px_ | 设置滑块按钮的高度。 |
| --slider-button-border-radius | _50%_ | 设置滑块按钮的圆角半径，通常用来实现圆形按钮。 |
| --slider-button-background-color | _#fff_ | 设置滑块按钮的背景颜色。 |
| --slider-button-box-shadow | _0 1px 2px rgba(0, 0, 0, 0.5)_ | 设置滑块按钮的阴影效果，可以增强立体感。 |
| --slider-thumb-color | _var(--app-B3, #ffffff)_ | 设置滑块按钮的指示色，通常用于显示当前进度的指示器。 |

## 常见问题

### Slider 拖动时会抖动卡顿

Slider 拖动时会抖动卡顿，需要检查一下是否为非受控组件写法，尽量使用 `onAfterChange` 来更新 `value`，推荐写法如下：

```tsx
export default () => {
  const [value, setValue] = useState(10) // onAfterChange 拖动结束后更新
  const [showValue, setShowValue] = useState(10) // 只用作实时展示使用

  return (
    <>
      <View>当前值：{showValue}</View>
      <Slider
        value={value}
        onChange={(newValue) => {
          setShowValue(newValue)
        }}
        onAfterChange={setValue} // 松开滑块时触发
      />
    </>
  )
}
```


### Slider 受控模式滑动位置定位异常，该如何处理？

这种情况往往是在在`Popup`弹框内嵌套使用`Slider`，由于 `Slider` 组件使用到 `auto-height` 属性时，在 `Popup` 打开时可能尚未完全渲染，因此我们无法获取其 DOM，从而导致定位出现问题。  
解决方案是在 `Popup` 的 `onAfterEnter` 事件回调之后再开始渲染此类组件。这样，我们可以确保此类组件能够在获取 DOM 时被正常渲染。请参考以下示例：

```jsx
import React from 'react';
import { Cell, Popup } from '@ray-js/smart-ui';
import { DemoBlock } from '@/components';
import { View, Slider } from '@ray-js/ray';

function Demo() {
  const [show, setShow] = React.useState(false);
  const [isReady, setIsReady] = React.useState(false);
  const showBasic = () => setShow(true);
  const handleChange = e => setValue(e.detail.value);

  return (
    <DemoBlock title="基础用法">
      <Cell title="展示弹出层" isLink onClick={showBasic} />
      <Popup
        show={show}
        position="bottom"
        onClose={hideBasic}
        onAfterEnter={() => setIsReady(true)}
      >
        <View style={{ padding: '32px', position: 'relative' }}>
          {isReady && <Slider value={value} max={100} min={0} onChange={handleChange} />}
        </View>
      </Popup>
    </DemoBlock>
  );
}
```

注意，`isReady` 可能存在首次渲染布局抖动，请升级到最新版，使用 `Slider` 的 `deps` 属性进行渲染优化，示例：

```jsx
import React from 'react';
import { Cell, Popup } from '@ray-js/smart-ui';
import { DemoBlock } from '@/components';
import { View, Slider } from '@ray-js/ray';

function Demo() {
  const [show, setShow] = React.useState(false);
  const [isReady, setIsReady] = React.useState(false);
  const showBasic = () => setShow(true);
  const handleChange = e => setValue(e.detail.value);

  return (
    <DemoBlock title="基础用法">
      <Cell title="展示弹出层" isLink onClick={showBasic} />
      <Popup
        show={show}
        position="bottom"
        onClose={hideBasic}
        onAfterEnter={() => setIsReady(true)}
      >
        <View style={{ padding: '32px', position: 'relative' }}>
          <Slider deps={[show]} value={value} max={100} min={0} onChange={handleChange} />
        </View>
      </Popup>
    </DemoBlock>
  );
}
```