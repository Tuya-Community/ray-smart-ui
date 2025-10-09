---
category: Feedback
---

# SwipeCell

### Introduction

A cell component that can be swiped left or right to reveal action buttons.

### Import

```jsx
import { SwipeCell } from '@ray-js/smart-ui';
```

## Code Examples

### Basic Usage

`onTabClose` `v2.7.0` The property is a callback event triggered when the sidebar is closed.

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
        left: <View style={style}>Select</View>,
        right: <View style={style}>Delete</View>,
      }}
      onTabClose={onHandleTabClose}
    >
      <CellGroup>
        <Cell title="Cell" value="Content" />
      </CellGroup>
    </SwipeCell>
  );
}
```

### Asynchronous Close

When `async-close` is enabled, you can control the closing behavior when clicking the sliding content on both sides by binding the `close` event.

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
          message: 'Are you sure you want to delete?',
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
          left: <View style={style}>Select</View>,
          right: <View style={style}>Delete</View>,
        }}
        asyncClose
        onClose={handleClose}
      >
        <CellGroup>
          <Cell title="Cell" value="Content" />
        </CellGroup>
      </SwipeCell>
      <Dialog id="smart-dialog" />
    </>
  );
}
```

### Notify When Opened

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
          message: `${name}${position} part display open event triggered`,
        });
        break;
      case 'right':
        NotifyInstance({
          context: this,
          type: 'primary',
          message: `${name}${position} part display open event triggered`,
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
          left: <View className={styles.left}>Select</View>,
          right: <View className={styles.right}>Delete</View>,
        }}
        onOpen={handleOpen}
      >
        <CellGroup>
          <Cell title="Cell" value="Content" />
        </CellGroup>
      </SwipeCell>
      <Notify id="smart-notify" />
    </>
  );
}
```

## API

### Props

| Parameter   | Description                                  | Type              | Default |
| ----------- | -------------------------------------------- | ----------------- | ------- |
| asyncClose | Whether to close asynchronously | _boolean_ | `false` |
| disabled | Whether to disable sliding | _boolean_ | `false` |
| leftWidth | Width of the left sliding area | _number_ | `0` |
| name | Identifier, can be retrieved from close event | _string \| number_ | - |
| rightWidth | Width of the right sliding area | _number_ | `0` |

### Slot

| Name  | Description           |
| ----- | --------------------- |
| -     | Custom display content |
| left | Left sliding content |
| right | Right sliding content |

### Events

| Event Name  | Description   | Parameter                                                  |
| ----------- | ------------- | ---------------------------------------------------------- |
| onClick | Triggered on click | Click position on close (`left` `right` `cell` `outside`) |
| onClose | Triggered on close | { position: 'left' \| 'right', instance, name: string } |
| onOpen | Triggered on open | { position: 'left' \| 'right', name: string } |

### Close Parameter

| Parameter  | Type     | Description                                   |
| ---------- | -------- | --------------------------------------------  |
| instance | _object_ | SwipeCell instance |
| name | Identifier | _string_ |
| position | _string_ | Click position on close (`left` `right` `cell` `outside`) |

### Methods

You can access the SwipeCell instance via selectComponent and call instance methods.

| Method Name | Parameters                  | Return | Description           |
| ----------- | --------------------------- | ------ | --------------------- |
| close | - | - | Collapse the cell sidebar |
| open | position: `left \| right` | - | Open the cell sidebar |