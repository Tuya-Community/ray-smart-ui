---
category: 展示
---

# Overlay 遮罩层

### 介绍

创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。

### 引入

```jsx
import { Overlay } from '@ray-js/smart-ui';
```

## 代码演示

### 基础用法

```jsx
import { View } from '@ray-js/ray';
import { Overlay, Button } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [show, setShow] = React.useState(false);
  const onClickShow = () => setShow(true);
  const onClickHide = () => setShow(false);

  return (
    <View>
      <Button type="primary" onClick={onClickShow}>
        显示遮罩层
      </Button>
      <Overlay show={show} onClick={onClickHide} />
    </View>
  );
}
```

### 嵌入内容

通过默认插槽可以在遮罩层上嵌入任意内容。

```jsx
import { View } from '@ray-js/ray';
import { Overlay, Button } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [show, setShow] = React.useState(false);
  const onClickShow = () => setShow(true);
  const onClickHide = () => setShow(false);

  const onBlockClick = evt => {
    evt?.origin?.stopPropagation();
  };
  return (
    <View>
      <Button type="primary" onClick={onClickShow}>嵌入内容</Button>
      <Overlay show={show} onClick={onClickHide}>
        <View style={styles.wrapper}>
          <View style={styles.block} onClick={onBlockClick} />
        </View>
      </Overlay>
    </View>
  );
}

const styles = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  block: {
    width: '120px',
    height: "120px",
    backgroundColor: '#fff'
  }
}
```

### Props

| 参数        | 说明                                             | 类型               | 默认值  |
| ----------- | ------------------------------------------------ | ------------------ | ------- |
| children    | 默认插槽，用于在遮罩层上方嵌入内容               | _React.ReactNode_  | null    |
| className   | 自定义类名                                       | _string_           | -       |
| customStyle | 自定义样式                                       | _object_           | -       |
| duration    | 动画时长，单位秒                                 | _string \| number_ | `0.3`   |
| lockScroll  | 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动 | _boolean_          | `true`  |
| show        | 是否展示遮罩层                                   | _boolean_          | `false` |
| zIndex      | z-index 层级                                     | _string \| number_ | `1`     |

### Events

| 事件名  | 说明       | 回调参数 |
| ------- | ---------- | -------- |
| onClick | 点击时触发 | -        |


### 外部样式类

| 类名        | 说明         |
| ----------- | ------------ |
| customClass | 根节点样式类 |

### 样式变量

组件会根据设备是否支持 `backdrop-filter` 自动选择**毛玻璃遮罩**或**半透明遮罩**，以减轻 iOS 输入框聚焦时页面布局上移的跳动感；不支持模糊的机型（如部分 Android）使用半透明降级样式。

| 名称                              | 默认值（浅色 / 深色）                    | 描述 |
| --------------------------------- | ----------------------------------------- | ---- |
| --overlay-background-color        | _rgba(0,0,0,0.4)_ / _rgba(0,0,0,0.7)_        | 直接指定遮罩背景色时使用，设置后不再使用毛玻璃/半透明变量 |
| --overlay-blur-background  `v2.12.0`        | _rgba(40,44,53,0.22)_ / _rgba(0,0,0,0.6)_ | 支持模糊时的毛玻璃遮罩背景色 |
| --overlay-blur-radius  `v2.12.0`            | _16px_                                    | 毛玻璃模糊半径 |

## API

### Props

| 参数           | 说明                                             | 类型               | 默认值  |
| -------------- | ------------------------------------------------ | ------------------ | ------- |
| classmartName | 自定义类名 | _string_ | - |
| customStyle | 自定义样式 | _React.CSSProperties_ | - |
| duration | 动画时长，单位秒 | _string \| number_ | `0.3` |
| lockScroll | 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动 | _boolean_ | `true` |
| show | 是否展示遮罩层 | _boolean_ | `false` |
| zIndex | z-index 层级 | _string \| number_ | `1` |

### Events

| 事件名     | 说明       | 回调参数 |
| ---------- | ---------- | -------- |
| onClick | 点击时触发 | - |

### Slots

| 名称 | 说明                               |
| ---- | ---------------------------------- |
| -    | 默认插槽，用于在遮罩层上方嵌入内容 |


### 外部样式类

| 类名         | 说明         |
| ------------ | ------------ |
| customClass | 根节点样式类 |

### 样式变量

组件会根据设备是否支持 `backdrop-filter` 自动选择**毛玻璃遮罩**或**半透明遮罩**，以减轻 iOS 输入框聚焦时页面布局上移的跳动感；不支持模糊的机型（如部分 Android）使用半透明降级样式。

| 名称                              | 默认值（浅色 / 深色）                    | 描述 |
| --------------------------------- | ----------------------------------------- | ---- |
| --overlay-background-color        | _rgba(0,0,0,0.4)_ / _rgba(0,0,0,0.7)_        | 直接指定遮罩背景色时使用，设置后不再使用毛玻璃/半透明变量 |
| --overlay-blur-background  `v2.12.0`        | _rgba(40,44,53,0.22)_ / _rgba(0,0,0,0.6)_ | 支持模糊时的毛玻璃遮罩背景色 |
| --overlay-blur-radius  `v2.12.0`            | _16px_                                    | 毛玻璃模糊半径 |