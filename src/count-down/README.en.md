---
category: Feedback
---

# CountDown

### Introduction

Used for real-time display of countdown values, supports millisecond precision.

### Introduce

```jsx
import { CountDown } from '@ray-js/smart-ui';
```

## Code Demo

### Basic Usage

`time` attribute represents the total duration of the countdown in milliseconds.

```jsx
import { CountDown } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <CountDown time={30 * 60 * 60 * 1000} />;
}
```

### Custom Format

Set the countdown text content through the `format` attribute.

```jsx
import { CountDown } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <CountDown time={30 * 60 * 60 * 1000} format="DD Day HH Time mm Divide ss second" />;
}
```

### Millisecond-level rendering

Use `millisecond` Attribute enables millimeter-level rendering

```jsx
import { CountDown } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <CountDown millisecond time={30 * 60 * 60 * 1000} format="HH:mm:ss:SSS" />;
}
```

### Custom Style

After setting the `useSlot` property, you can customize the countdown style. You need to obtain the `timeData` object through the `onChange` event and render it yourself. The format is shown in the table below.

```jsx
import { CountDown } from '@ray-js/smart-ui';
import { View, Text } from '@ray-js/ray';
import React, { useState, useCallback } from 'react';

const style = {
  display: 'inline-block',
  width: '22px',
  marginRight: '5px',
  color: '#fff',
  fontSize: '12px',
  textAlign: 'center',
  backgroundColor: '#1989fa',
  borderRadius: '2px'
} as React.CSSProperties

export default function Demo() {
  const [timeData, setTimeData] = useState<any>({});

  const handleChange = useCallback(e => {
    setTimeData(e.detail);
  }, []);
  return (
    <CountDown useSlot time={30 * 60 * 60 * 1000} onChange={handleChange}>
      <View>
        <Text style={style}>{timeData.hours}</Text>
        <Text style={style}>{timeData.minutes}</Text>
        <Text style={style}>{timeData.seconds}</Text>
      </View>
    </CountDown>
  );
}
```

### Manual Control

After obtaining the component instance through the `selectComponent` selector, you can call the `start`, `pause`, and `reset` methods.

```jsx
import { CountDown, Grid, GridItem } from '@ray-js/smart-ui';
import { showToast, getCurrentPages } from '@ray-js/ray';
import React, { useCallback } from 'react';
import PlayIcon from '@tuya-miniapp/icons/dist/svg/Play';
import PauseIcon from '@tuya-miniapp/icons/dist/svg/Pause';
import RepeatIcon from '@tuya-miniapp/icons/dist/svg/Repeat';

export default function Demo() {
  const finished = useCallback(() => {
    showToast({
      title: 'Countdown ended',
    });
  }, []);
  const start = useCallback(() => {
    const pages = getCurrentPages();
    const pageInstall = pages[pages.length - 1];
    const countdown = pageInstall.selectComponent('.control-count-down');
    countdown.start();
  }, []);

  const pause = useCallback(() => {
    const pages = getCurrentPages();
    const pageInstall = pages[pages.length - 1];
    const countdown = pageInstall.selectComponent('.control-count-down');
    countdown.pause();
  }, []);

  const reset = useCallback(() => {
    const pages = getCurrentPages();
    const pageInstall = pages[pages.length - 1];
    const countdown = pageInstall.selectComponent('.control-count-down');
    countdown.reset();
  }, []);
  return (
    <>
      <CountDown
        className="control-count-down"
        millisecond
        time={3000}
        autoStart={false}
        format="ss:SSS"
        onFinish={finished}
      />
      <Grid clickable column-num="3">
        <GridItem text="start" icon={PlayIcon} onClick={start} />
        <GridItem text="pause" icon={PauseIcon} onClick={pause} />
        <GridItem text="Repossess" icon={RepeatIcon} onClick={reset} />
      </Grid>
    </>
  );
}
```

## API

### Props

| Parameter   | Description                                  | Type      | Default     |
| ----------- | -------------------------------------------- | --------- | ----------- |
| autoStart | Whether to automatically start the countdown | _boolean_ | `true` |
| format | Time format. DD-Day, HH-Hour, mm-Minute, ss-Second, SSS-Millisecond | _string_ | `HH:mm:ss` |
| millisecond | Whether to enable millisecond-level rendering | _boolean_ | `false` |
| time | Duration of the countdown in milliseconds | _number_ | - |
| useSlot | Whether to use custom style slot | _boolean_ | `false` |

### Events

| Event Name  | Description                                 | Callback Params |
| ----------- | ------------------------------------------- | --------------- |
| onChange | Triggered when the time changes. Only triggers after `use-slot` is enabled | timeData |
| onFinish | Triggered when the countdown ends | - |

### timeData Format

| Name         | Description  | Type     |
| ------------ | ------------ | -------- |
| days | Remaining days | _number_ |
| hours | Remaining hours | _number_ |
| milliseconds | Remaining milliseconds | _number_ |
| minutes | Remaining minutes | _number_ |
| seconds | Remaining seconds | _number_ |

### Methods

You can get the CountDown instance through `selectComponent` and call instance methods.

| Method Name | Parameter | Return Value | Description                                          |
| ----------- | --------- | ------------ | ---------------------------------------------------- |
| pause | - | - | Pause the countdown |
| reset | - | - | Reset the countdown. If `auto-start` is `true`, it will automatically start the countdown after resetting |
| start | - | - | Start the countdown |

### Style Variables

The component provides the following CSS variables that can be used for custom styles. For usage, refer to the [ConfigProvider Component](/material/smartui?comId=config-provider).

| Name                          | Default Value                             | Description |
| ----------------------------- | ----------------------------------------- | ----------- |
| --count-down-text-color | _var(--app-B6-N2, rgba(0, 0, 0, 0.7))_ | Text Color |
| --count-down-font-size | _14px_ | Font Size |
| --count-down-line-height | _20px_ | Line Height |