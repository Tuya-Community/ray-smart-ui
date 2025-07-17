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
import { View, Text, showToast, getCurrentPages } from '@ray-js/ray';
import React, { useState, useCallback } from 'react';
import * as icons from '@tuya-miniapp/icons'

export default function Demo() {
  const [timeData, setTimeData] = useState<any>({});

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
        <GridItem text="start" icon={icons.APlayfill} onClick={start} />
        <GridItem text="pause" icon={icons.APausefill} onClick={pause} />
        <GridItem text="Repossess" icon={icons.Repeat} onClick={reset} />
      </Grid>
    </>
  );
}
```

## API

### Props

| Parameter   | Description                                                         | Type      | Default Value |
| ----------- | ------------------------------------------------------------------- | --------- | ------------- |
| autoStart   | Automatically start countdown?                                      | _boolean_ | `true`        |
| format      | Time format, DD-day, HH-hour, mm-minute, ss-second, SSS-millisecond | _string_  | `HH:mm:ss`    |
| millisecond | Enable millisecond-level rendering?                                 | _boolean_ | `false`       |
| time        | Countdown duration, in milliseconds                                 | _number_  | -             |
| useSlot     | Use custom style slots?                                             | _boolean_ | `false`       |

### Events

| Event Name | Description                                                           | Callback Parameters |
| ---------- | --------------------------------------------------------------------- | ------------------- |
| onChange   | Triggers on time change, will only trigger after `useSlot` is enabled | timeData            |
| onFinish   | Triggered when the countdown ends                                     | -                   |

### timeData Format

| Name         | Description            | Type     |
| ------------ | ---------------------- | -------- |
| days         | Days Remaining         | _number_ |
| hours        | Remaining Hours        | _number_ |
| milliseconds | Remaining milliseconds | _number_ |
| minutes      | Remaining minutes      | _number_ |
| seconds      | Remaining seconds      | _number_ |

### Method

You can obtain the CountDown instance and call the instance methods through selectComponent.

| Method Name | Parameters | Return Value | Description                                                                                            |
| ----------- | ---------- | ------------ | ------------------------------------------------------------------------------------------------------ |
| pause       | -          | -            | Pause Countdown                                                                                        |
| reset       | -          | -            | Reset the countdown. If `autoStart` is `true`, the countdown will automatically start after resetting. |
| start       | -          | -            | Start countdown                                                                                        |
