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
      <Button type="primary" onClick={onClickShow}>
        Embedded content
      </Button>
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
    height: '120px',
    backgroundColor: '#fff',
  },
};
```

## API

### Props

| Parameter      | Description                                         | Type               | Default |
| -------------- | --------------------------------------------------- | ------------------ | ------- |
| classmartName | Custom class name | _string_ | - |
| customStyle | Custom style | _React.CSSProperties_ | - |
| duration | Animation duration in seconds | _string \| number_ | `0.3` |
| lockScroll | Whether to lock background scroll | _boolean_ | `true` |
| show | Whether to show the overlay | _boolean_ | `false` |
| zIndex | z-index level | _string \| number_ | `1` |

### Events

| Event Name  | Description      | Callback Parameters |
| ----------- | ---------------- | ------------------- |
| onClick | Triggered on click | - |

### Slots

| Name | Description                           |
| ---- | ------------------------------------- |
| -    | Default slot for embedding content in the overlay |

### External Class Styles

| Class Name     | Description               |
| -------------- | --------------------------|
| customClass | Class of the root element |

### Style Variables

The overlay automatically uses a **blur backdrop** when the device supports `backdrop-filter`, and falls back to a **semi-transparent** backdrop otherwise (e.g. some Android devices), to reduce layout jump when the keyboard opens on iOS.

| Name                           | Default (light / dark)                   | Description |
| ------------------------------ | ---------------------------------------- | ----------- |
| --overlay-background-color     | _rgba(0,0,0,0.4)_ / _rgba(0,0,0,0.7)_    | Override overlay background; when set, blur/fallback variables are not used |
| --overlay-blur-background `v2.12.0`      | _rgba(40,44,53,0.22)_ / _rgba(0,0,0,0.6)_ | Background when blur is supported |
| --overlay-blur-radius  `v2.12.0`         | _16px_                                   | Blur radius for backdrop |