---
category: Data Entry
assets: LampTouchSlider,LampColorSlider,LampSaturationSlider,LampTempSlider,LampBrightSlider,LampStyleSlider,LampVerticalTouchSlider,LampVerticalPercentSlider,HighPerfText
---

# Slider

### Introduction

The slider is a UI component that represents a simulated radio tuner or volume control dial. It allows users to slide knobs, handles, or bars from left to right and vice versa. UI sliders are perfect for users to quickly explore many different options or values simultaneously. Most importantly, they are practical components for users when precision is not required.

### Import

```jsx
import { Slider } from '@ray-js/smart-ui';
```

## Code Examples

### Standard Slider

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

### Discrete Slider

Set `isShowTicks` to `true` to display discrete ticks

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

### Discrete Slider - Style 2

Set `hideThumbButton` to `true` to hide the thumb button

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

### Drag Slider

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
      onAfterChange={value => setValue(value)}
    />
  );
}
```

### Drag Slider - Style 2

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

### Drag Slider - Style 3

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

### Dual-Thumb Slider

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


### Vertical

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

|Property Name|Description|Type|Default Value|
|---|---|---|---|
|instanceId|--|string|undefined|
|className|Class name|string|undefined|
|style|Style|CSSProperties|undefined|
|isVertical|Whether to display vertically. When displayed vertically, the track's width and height need to be set.|boolean|false|
|value|Style|number|undefined|
|defaultValue|Default value|number|0|
|min|Minimum value|number|0|
|max|Maximum value|number|100|
|step|Step size, must be greater than `0` and be divisible by `(max - min)`.|number|1|
|forceStep|Similar to step, used when the slider does not follow the ticks|number|1|
|disabled|Whether disabled|boolean|false|
|onChange|Triggered during slider drag and passes the current dragged value as a parameter|(value: number) => void|undefined|
|onBeforeChange|Triggered when slider drag starts and passes the current dragged value as a parameter|(value: number) => void|undefined|
|onAfterChange|Triggered at the same time as `touchend`, passing the current value as a parameter|(value: number) => void|undefined|
|maxTrackWidth|Track width|Width<string \| number>|'100%'|
|maxTrackHeight|Track height|Width<string \| number>|'4px'|
|maxTrackRadius|Track border radius|BorderRadius<string \| number>|'4px'|
|maxTrackColor|Track color|Background<0 \| (string & {})>|'#d8d8d8'|
|minTrackWidth|Slider's minimum width|Width<string \| number>|'28px'|
|minTrackHeight|Slider height|Width<string \| number>|'4px'|
|minTrackRadius|Slider border radius|BorderRadius<string \| number>|'inherit'|
|minTrackColor|Slider color|Background<0 \| (string & {})>|'#158CFB'|
|thumbWidth|Thumb width|Width<string \| number>|'28px'|
|thumbStyle|Thumb style|CSSProperties|null|
|thumbWrapStyle|Thumb wrap style|CSSProperties|null|
|thumbHeight|Thumb height|string | number|'28px'|
|thumbRadius|Thumb border radius|string | number|'28px'|
|thumbColor|Thumb color|Background<0 \| (string & {})>|'#ffffff'|
|thumbBorderStyle|Thumb border style|BorderStyle|'0px solid #ffffff'|
|thumbBoxShadowStyle|Thumb box shadow|BoxShadow|'0px 0.5px 4px rgba(0, 0, 0, 0.12), 0px 6px 13px rgba(0, 0, 0, 0.12)'|
|isShowTicks|Whether to display tick marks|boolean|false|
|tickWidth|Tick width|string|'4px'|
|tickHeight|Tick height|string|'12px'|
|tickRadius|Tick border radius|string|'4px'|
|maxTrackTickColor|Track tick color|string|'#158CFB'|
|minTrackTickColor|Slider tick color|string|'#ffffff'|
|trackStyle|Track style|CSSProperties|undefined|
|barStyle|Slider style|CSSProperties|undefined|
|renderType|Render method|"ray" | "sjs"|'sjs'|
|hideThumbButton|Hide thumb|boolean|null|
|thumbStyleRenderFormatter|Render button background color, e.g., "rgb(value,100,100)", replacing value with slider value (only supported by sjs)|Partial<Record<keyof CSSProperties, string>>|null|
|thumbStyleRenderValueScale|Scaling factor when rendering value|number|1|
|thumbStyleRenderValueStart|Starting value when rendering value|number|0|
|thumbStyleRenderValueReverse|Reverse value when rendering|boolean|false|
|enableTouch|Use touch jump|boolean|true|
|hidden|Whether hidden|boolean|false|
|parcel|Wrap slider|boolean|false|
|parcelMargin|Parcel slider margin|number|0|

### Slot

| Name  | Description     |
| ----- | -------- |
| bar  `v2.4.0` | Slider slot |
| thumb  `v2.4.0` | Thumb slot |
### RangeSlider Props

|Parameter|Description|Type|Default Value|
|---|---|---|---|
|value|Current progress percentage, in array format for dual-thumb mode|number | number[]|0|
|disabled|Whether to disable the slider|boolean|false|
|max|Maximum value|number|100|
|min|Minimum value|number|0|
|step|Step size|number|1|
|barHeight|Progress bar height, default unit is px|string | number|2px|
|activeColor|Progress bar active color|string|#1989fa|
|inactiveColor|Progress bar default color|string|#e5e5e5|
|vertical|Whether to display vertically|boolean|false|
|onDrag|Triggered when dragging the progress bar|event.detail.value: Current progress|
|onChange|Triggered after progress value change|event.detail: Current progress|
|onDragStart|Triggered when starting to drag|-|
|onDragEnd|Triggered when ending the drag|-|

### Style Variables

The component provides the following CSS variables for custom styling. Refer to the [ConfigProvider Component](/material/smartui?comId=config-provider) for usage.

| Name                          | Default Value                                 | Description |
| ----------------------------- | -------------------------------------- | ---- |
| --slider-active-background-color | _#1989fa_ | Sets the background color of the slider when active. |
| --slider-inactive-background-color | _#ebedf0_ | Sets the background color of the slider when inactive. |
| --slider-disabled-opacity | _0.3_ | Sets the opacity of the slider when disabled; lower values mean higher transparency. |
| --slider-bar-height | _2px_ | Sets the height of the slider track. |
| --slider-button-width | _24px_ | Sets the width of the slider thumb. |
| --slider-button-height | _24px_ | Sets the height of the slider thumb. |
| --slider-button-border-radius | _50%_ | Sets the border radius of the slider thumb, often used to create a circular button. |
| --slider-button-background-color | _#fff_ | Sets the background color of the slider thumb. |
| --slider-button-box-shadow | _0 1px 2px rgba(0, 0, 0, 0.5)_ | Sets the shadow effect of the slider thumb, enhancing the three-dimensional effect. |
| --slider-thumb-color | _var(--app-B3, #ffffff)_ | Sets the indicator color of the slider thumb, usually used to show the current progress indicator. |

## FAQ

### Slider Jittery stuttering occurs when dragging

The `Slider` jitters and lags when dragged. Please check whether the implementation is for an uncontrolled component. Try to use `onAfterChange` to update the `value`. The recommended approach is as follows:

```tsx
export default () => {
  const [value, setValue] = useState(10) // onAfterChange Update after drag ends
  const [showValue, setShowValue] = useState(10) // For real-time display only

  return (
    <>
      <View>当前值：{showValue}</View>
      <Slider
        value={value}
        onChange={(newValue) => {
          setShowValue(newValue)
        }}
        onAfterChange={setValue} // Triggered when releasing the slider
      />
    </>
  )
}
```


### Slider What should be done when the controlled mode sliding position is located abnormally?

This situation often occurs when the `Slider` is nested within a `Popup`. When the `auto-height` attribute is used in the `Slider` component, it might not be fully rendered when the `Popup` opens, so we cannot obtain its DOM, resulting in positioning issues.
The solution is to start rendering such components after the `onAfterEnter` event callback of the `Popup`. This way, we can ensure that such components are properly rendered when fetching the DOM. Please refer to the example below:

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
    <DemoBlock>
      <Cell title="Show popup layer" isLink onClick={showBasic} />
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

Note, `isReady` may cause layout jitter during first rendering. Please upgrade to the latest version and use the `deps` property of `Slider` for rendering optimization. Example:

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
    <DemoBlock title="Basic Usage">
      <Cell title="Show popup layer" isLink onClick={showBasic} />
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