---
category: Display
---

# Overlay

### Introduce

Create a mask layer to emphasize specific page elements and prevent users from performing other operations.

### Introduction

```jsx
import { Overlay } from '@ray-js/smart-ui';
```

## code demonstration

### Basic usage

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
        Show the mask layer
      </Button>
      <Overlay show={show} onClick={onClickHide} />
    </View>
  );
}
```

### embedded content

Through the default slot, you can embed any content on the mask layer.

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
      <Button type="primary" onClick={onClickShow}>Embedded content</Button>
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

| Parameters  | Description                                                                                        | Type               | Default value |
| ----------- | -------------------------------------------------------------------------------------------------- | ------------------ | ------------- |
| children    | The default slot is used to embed the content above the mask layer                                 | _React.ReactNode_  | null          |
| className   | Customized class name                                                                              | _string_           | -             |
| customStyle | Custom style                                                                                       | _object_           | -             |
| duration    | Animation time, unit seconds                                                                       | _string \| number_ | `0.3`         |
| lockScroll  | Whether to lock the background rolling, the content in the mask when locking will not be scheduled | _boolean_          | `true`        |
| show        | Whether to show the mask layer                                                                     | _boolean_          | `false`       |
| zIndex      | z-index Level                                                                                      | _string \| number_ | `1`           |
<!-- | rootPortal | 是否从页面中脱离出来，用于解决各种 fixed 失效问题，微信基础库 >= `2.25.2 ` | _boolean_ | `false` | -->

### Events

| Event Name | Description            | Return parameters |
| ---------- | ---------------------- | ----------------- |
| onClick    | Triggeon when clicking | -                 |


### outer style class

| Class Name  | Description     |
| ----------- | --------------- |
| customClass | Root node nodes |
