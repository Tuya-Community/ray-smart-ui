---
category: 反馈
---

# CountDown 倒计时

### 介绍

用于实时展示倒计时数值，支持毫秒精度。

### 引入

```jsx
import { CountDown } from '@ray-js/smart-ui';
```

## 代码演示

### 基础用法

`time`属性表示倒计时总时长，单位为毫秒。

```jsx
import { CountDown } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <CountDown time={30 * 60 * 60 * 1000} />;
}
```

### 自定义格式

通过`format`属性设置倒计时文本的内容。

```jsx
import { CountDown } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <CountDown time={30 * 60 * 60 * 1000} format="DD 天 HH 时 mm 分 ss 秒" />;
}
```

### 毫秒级渲染

通过`millisecond`属性开启毫米级渲染

```jsx
import { CountDown } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <CountDown millisecond time={30 * 60 * 60 * 1000} format="HH:mm:ss:SSS" />;
}
```

### 自定义样式

设置`useSlot`属性后可以自定义倒计时样式，需要通过`onChange`事件获取`timeData`对象并自行渲染，格式见下方表格。

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

### 手动控制

通过 `selectComponent` 选择器获取到组件实例后，可以调用`start`、`pause`、`reset`方法。

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
      title: '倒计时结束',
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
        <GridItem text="开始" icon={PlayIcon} onClick={start} />
        <GridItem text="暂停" icon={PauseIcon} onClick={pause} />
        <GridItem text="重置" icon={RepeatIcon} onClick={reset} />
      </Grid>
    </>
  );
}
```

## API

### Props

| 参数        | 说明                                           | 类型      | 默认值     |
| ----------- | ---------------------------------------------- | --------- | ---------- |
| autoStart | 是否自动开始倒计时 | _boolean_ | `true` |
| format | 时间格式，DD-日，HH-时，mm-分，ss-秒，SSS-毫秒 | _string_ | `HH:mm:ss` |
| millisecond | 是否开启毫秒级渲染 | _boolean_ | `false` |
| time | 倒计时时长，单位毫秒 | _number_ | - |
| useSlot | 是否使用自定义样式插槽 | _boolean_ | `false` |

### Events

| 事件名      | 说明                                         | 回调参数 |
| ----------- | -------------------------------------------- | -------- |
| onChange | 时间变化时触发，仅在开启`use-slot`后才会触发 | timeData |
| onFinish | 倒计时结束时触发 | - |

### timeData 格式

| 名称         | 说明     | 类型     |
| ------------ | -------- | -------- |
| days | 剩余天数 | _number_ |
| hours | 剩余小时 | _number_ |
| milliseconds | 剩余毫秒 | _number_ |
| minutes | 剩余分钟 | _number_ |
| seconds | 剩余秒数 | _number_ |

### 方法

通过 [selectComponent](/material/smartui?comId=faq) 可以获取到 CountDown 实例并调用实例方法。

| 方法名 | 参数 | 返回值 | 介绍                                                       |
| ------ | ---- | ------ | ---------------------------------------------------------- |
| pause | - | - | 暂停倒计时 |
| reset | - | - | 重设倒计时，若`auto-start`为`true`，重设后会自动开始倒计时 |
| start | - | - | 开始倒计时 |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/material/smartui?comId=config-provider)。

| 名称                          | 默认值                                 | 描述 |
| ----------------------------- | -------------------------------------- | ---- |
| --count-down-text-color | _var(--app-B6-N2, rgba(0, 0, 0, 0.7))_ | 文本颜色 |
| --count-down-font-size | _14px_ | 字体大小 |
| --count-down-line-height | _20px_ | 行高 |