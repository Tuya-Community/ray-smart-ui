---
category: 反馈
---

# SwipeCell 滑动单元格

### 介绍

可以左右滑动来展示操作按钮的单元格组件。

### 引入

```jsx
import { SwipeCell } from '@ray-js/smart-ui';
```

## 代码演示

### 基础用法
`onTabClose` `v2.7.0` 属性是侧边栏关闭时触发的回调事件


```jsx
import React, { useCallback } from 'react';
import { SwipeCell, CellGroup, Cell, SmartEventHandler, SmartSwipeCellPosition } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

const style = {
  display: 'flex',
  width: '65px',
  height: '100%',
  fontSize: '15px',
  color: '#fff',
  backgroundColor: '#ee0a24',
  justifyContent: 'center',
  alignItems: 'center',
};

export default function Demo() {

  const onHandleTabClose: SmartEventHandler<SmartSwipeCellPosition> = event => {
    console.log(event.detail, '--position');
  };
  return ( 
    <SwipeCell
      rightWidth={65}
      leftWidth={65}
      slot={{
        left: <View style={style}>选择</View>,
        right: <View style={style}>删除</View>,
      }}
      onTabClose={onHandleTabClose}
    >
      <CellGroup>
        <Cell title="单元格" value="内容" />
      </CellGroup>
    </SwipeCell>
  );
}
```

### 异步关闭

当开启`async-close`时， 通过绑定`close`事件，可以自定义两侧滑动内容点击时的关闭行为。

```jsx
import React, { useCallback } from 'react';
import { SwipeCell, CellGroup, Cell, Dialog, DialogInstance } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

const style = {
  display: 'flex',
  width: '65px',
  height: '100%',
  fontSize: '15px',
  color: '#fff',
  backgroundColor: '#ee0a24',
  justifyContent: 'center',
  alignItems: 'center',
} as React.CSSProperties

export default function Demo() {
  const handleClose = useCallback(event => {
    const { position, instance } = event.detail;
    switch (position) {
      case 'left':
      case 'cell':
        instance.close();
        break;
      case 'right':
        DialogInstance.confirm({
          context: this,
          message: '确定删除吗？',
        }).then(() => {
          instance.close();
        });
        break;
      default:
    }
  }, []);
  return (
    <>
      <SwipeCell
        rightWidth={65}
        leftWidth={65}
        slot={{
          left: <View style={style}>选择</View>,
          right: <View style={style}>删除</View>,
        }}
        asyncClose
        onClose={handleClose}
      >
        <CellGroup>
          <Cell title="单元格" value="内容" />
        </CellGroup>
      </SwipeCell>
      <Dialog id="smart-dialog" />
    </>
  );
}
```

### 提示被打开

```jsx
import React, { useCallback } from 'react';
import { SwipeCell, CellGroup, Cell, Notify, NotifyInstance } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  const handleOpen = useCallback(event => {
    const { position, name } = event.detail;
    switch (position) {
      case 'left':
        NotifyInstance({
          context: this,
          type: 'primary',
          message: `${name}${position}部分展示open事件被触发`,
        });
        break;
      case 'right':
        NotifyInstance({
          context: this,
          type: 'primary',
          message: `${name}${position}部分展示open事件被触发`,
        });
        break;
      default:
    }
  }, []);
  return (
    <>
      <SwipeCell
        id="swipe-cell"
        rightWidth={65}
        leftWidth={65}
        slot={{
          left: <View className={styles.left}>选择</View>,
          right: <View className={styles.right}>删除</View>,
        }}
        onOpen={handleOpen}
      >
        <CellGroup>
          <Cell title="单元格" value="内容" />
        </CellGroup>
      </SwipeCell>
      <Notify id="smart-notify" />
    </>
  );
}
```

## API

### Props

| 参数        | 说明                                    | 类型               | 默认值  |
| ----------- | --------------------------------------- | ------------------ | ------- |
| asyncClose | 是否异步关闭 | _boolean_ | `false` |
| disabled | 是否禁用滑动 | _boolean_ | `false` |
| leftWidth | 左侧滑动区域宽度 | _number_ | `0` |
| name | 标识符，可以在 close 事件的参数中获取到 | _string \| number_ | - |
| rightWidth | 右侧滑动区域宽度 | _number_ | `0` |

### Slot

| 名称  | 说明           |
| ----- | -------------- |
| -     | 自定义显示内容 |
| left | 左侧滑动内容 |
| right | 右侧滑动内容 |

### Events

| 事件名     | 说明       | 参数                                                      |
| ---------- | ---------- | --------------------------------------------------------- |
| onClick | 点击时触发 | 关闭时的点击位置 (`left` `right` `cell` `outside`) |
| onClose | 关闭时触发 | { position: 'left' \| 'right' , instance , name: string } |
| onOpen | 打开时触发 | { position: 'left' \| 'right' , name: string } |

### close 参数

| 参数     | 类型     | 说明                                               |
| -------- | -------- | -------------------------------------------------- |
| instance | _object_ | SwipeCell 实例 |
| name | 标识符 | _string_ |
| position | _string_ | 关闭时的点击位置 (`left` `right` `cell` `outside`) |

### 方法

通过 selectComponent 可以获取到 SwipeCell 实例并调用实例方法

| 方法名 | 参数                      | 返回值 | 介绍             |
| ------ | ------------------------- | ------ | ---------------- |
| close | - | - | 收起单元格侧边栏 |
| open | position: `left \| right` | - | 打开单元格侧边栏 |