---
category: Feedback
---

# SwipeCell

### Introduction

You can slide left and right to display the unit grid components of the operation button.

### Introduce

```jsx
import { SwipeCell } from '@ray-js/smart-ui';
```

## Code demonstration

### Basic usage

```jsx
import React, { useCallback } from 'react';
import { SwipeCell, CellGroup, Cell } from '@ray-js/smart-ui';
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
  return (
    <SwipeCell
      rightWidth={65}
      leftWidth={65}
      slot={{
        left: <View style={style}>choose</View>,
        right: <View style={style}>delete</View>,
      }}
    >
      <CellGroup>
        <Cell title="Cell" value="content" />
      </CellGroup>
    </SwipeCell>
  );
}
```

### Asynchronous closure

When `async-close` is enabled, you can customize the closing behavior when clicking on the sliding content on both sides by binding the `close` event.

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
          message: 'Are you deleted?',
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
          left: <View style={style}>choose</View>,
          right: <View style={style}>delete</View>,
        }}
        asyncClose
        onClose={handleClose}
      >
        <CellGroup>
          <Cell title="Cell" value="content" />
        </CellGroup>
      </SwipeCell>
      <Dialog id="smart-dialog" />
    </>
  );
}
```

### Take the initiative to open

```jsx
import React, { useCallback } from 'react';
import { SwipeCell, CellGroup, Cell, Notify, NotifyInstance } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

function Demo() {
  const handleOpen = useCallback(event => {
    const { position, name } = event.detail;
    switch (position) {
      case 'left':
        NotifyInstance({
          context: this,
          type: 'primary',
          message: `${name}${position}Partial display of the Open event is triggered`,
        });
        break;
      case 'right':
        NotifyInstance({
          context: this,
          type: 'primary',
          message: `${name}${position}Partial display of the Open event is triggered`,
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
          left: <View className={styles.left}>choose</View>,
          right: <View className={styles.right}>delete</View>,
        }}
        onOpen={handleOpen}
      >
        <CellGroup>
          <Cell title="Cell" value="content" />
        </CellGroup>
      </SwipeCell>
      <Notify id="smart-notify" />
    </>
  );
}
```

## API

### Props

| Parameters | Description                                                             | Type               | Default value |
| ---------- | ----------------------------------------------------------------------- | ------------------ | ------------- |
| asyncClose | Whether to close asynchronous                                           | _boolean_          | `false`       |
| disabled   | Whether to disable sliding                                              | _boolean_          | `false`       |
| leftWidth  | Width of the sliding area on the left                                   | _number_           | `0`           |
| name       | The identifier can be retrieved from the parameters of the close event. | _string \| number_ | -             |
| rightWidth | Sliding area width on the right                                         | _number_           | `0`           |

### Slot

| Name  | Description                  |
| ----- | ---------------------------- |
| left  | Sliding content on the left  |
| right | Sliding content on the right |

### Children

The children attribute of the component is for custom display content.

### Events

| Event Name | Description            | Parameters                                                     |
| ---------- | ---------------------- | -------------------------------------------------------------- |
| onClick    | Triggeon when clicking | Clicked position when closed (`left` `right` `cell` `outside`) |
| onClose    | Triggeon when closed   | { position: 'left' \| 'right' , instance , name: string }      |
| onOpen     | Triggeon when opening  | { position: 'left' \| 'right' , name: string }                 |

### close parameter

| Parameters | Type       | Description                                                    |
| ---------- | ---------- | -------------------------------------------------------------- |
| instance   | _object_   | SwipeCell Instance                                             |
| name       | Identifier | _string_                                                       |
| position   | _string_   | Clicked position when closed (`left` `right` `cell` `outside`) |

### method

You can use selectComponent to get the SwipeCell instance and call its instance methods.

| Method Name | Parameter                 | Return Value | Introduction                        |
| ----------- | ------------------------- | ------------ | ----------------------------------- |
| close       | -                         | -            | Poster the sidebar of the unit grid |
| open        | position: `left \| right` | -            | Open the sidebar of the unit grid   |
