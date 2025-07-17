---
category: Data Entry
---

# Slider

### Introduction

Sliding bar is a UI component that simulates the wireless electrical mortar or volume control dial.It allows users to slide the knob, handle or bar from left to right, and vice versa.UI sliding bars are very suitable for users to quickly explore many different options or values ​​at the same time.The most important thing is that when the quantity or value does not need to be accurate, they are practical components for users.

### Introduce

```jsx
import { Slider } from '@ray-js/smart-ui';
```

## Code demonstration

### Basic usage

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

### Double slide sliding strip

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
| Attribute Name | Description | Type | Default value |
| -------------- | ----------- | ---- | ------------- |
instanceId|--|string|undefined|
className|Classification|string|undefined|
style|style|CSSProperties|undefined|
isVertical|Whether to display vertically, when displaying vertically, you need to set the width height|boolean|false|
value|style|number|undefined|
defaultValue|default value|number|0|
min|Minimum|number|0|
max|Maximum|number|100|
step|Step size must be greater than 0 and divisible by (max - min).|number|1|
forceStep|Similar to 'step', used for setting when the slider does not follow the scale.|number|1|
disabled|Whether to disable|boolean|false|
onChange|Triggered when dragging and sliding, and the current dragging value is passed into the parameter|(value: number) => void|undefined|
onBeforeChange|Triggered at the beginning of the slider dragging, and the current dragging value is passed into the parameter|(value: number) => void|undefined|
onAfterChange|Triggered at the same time as `touchend`, passing the current value as an argument.|(value: number) => void|undefined|
maxTrackWidth|Sliding width|Width<string | number>|'100%'|
maxTrackHeight|Height|Width<string | number>|'4px'|
maxTrackRadius|Glu|BorderRadius<string | number>|'4px'|
maxTrackColor|Sliding color|Background<0 | (string & {})>|'#d8d8d8'|
minTrackWidth|Smooth width|Width<string | number>|'28px'|
minTrackHeight|Height|Width<string | number>|'4px'|
minTrackRadius|Slide|BorderRadius<string | number>|'inherit'|
minTrackColor|Slide|Background<0 | (string & {})>|'#158CFB'|
thumbWidth|Slider width|Width<string | number>|'28px'|
thumbStyle|Slid|CSSProperties|null|
thumbWrapStyle|Slider wrap style|CSSProperties|null|
thumbHeight|Cubes height|string | number|'28px'|
thumbRadius|Custard rounded corner|string | number|'28px'|
thumbColor|Slide|Background<0 | (string & {})>|'#ffffff'|
thumbBorderStyle|Slider frame style|BorderStyle|'0px solid #ffffff'|
thumbBoxShadowStyle|Shadow|BoxShadow|'0px 0.5px 4px rgba(0, 0, 0, 0.12), 0px 6px 13px rgba(0, 0, 0, 0.12)'|
isShowTicks|Whether to display the scale|boolean|false|
tickWidth|Scale width|string|'4px'|
tickHeight|Height|string|'12px'|
tickRadius|Scaled rounded corner|string|'4px'|
maxTrackTickColor|Slip scale color|string|'#158CFB'|
minTrackTickColor|Slide scale color|string|'#ffffff'|
trackStyle|Orbital style|CSSProperties|undefined|
barStyle|Slide style|CSSProperties|undefined|
renderType|Rendering|"ray" | "sjs"|'sjs'|
hideThumbButton|Hidden slider|boolean|null|
thumbStyleRenderFormatter|Render the button background color, e.g., 'rgb(value,100,100)', with 'value' replaced by the slider value (only supported by SJS)|Partial<Record<keyof CSSProperties, string>>|null|
thumbStyleRenderValueScale|The zoom multiple of the rendering Value|number|1|
thumbStyleRenderValueStart|The starting value of when rendering the value|number|0|
thumbStyleRenderValueReverse|Reverse value when rendering value|boolean|false|
enableTouch|Use touch jumping|boolean|true|
hidden|Whether to hide|boolean|false|
parcel|Wrap sliding bar|boolean|false|
parcelMargin|Parcel sliding septum|number|0|

### RangeSlider Props

<!-- prettier-ignore -->
| Parameters | Description | Type | Default value |
| ---------- | ----------- | ---- | ------------- |
value|The current progress percentage is the array format in the double -slider mode|number | number[]|0|
disabled|Whether to disable the slider|boolean|false|
max|Maximum|number|100|
min|Minimum|number|0|
step|Step -by -step|number|1|
barHeight|The height of the progress bar, with the default unit as px.|string | number|2px|
activeColor|Progressive entry activation state color|string|#1989fa|
inactiveColor|Progressive Bar default color|string|#e5e5e5|
vertical|Whether to display it vertically|boolean|false|
onDrag|Triggered when dragging the progress bar|event.detail.value: Current progress|
onChange|Triggered after the progress value is changed|event.detail: Current progress|
onDragStart|Triggered when dragging|-|
onDragEnd|Triggered when the drag is ended|-|
