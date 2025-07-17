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

### Events

| Event Name | Description            | Return parameters |
| ---------- | ---------------------- | ----------------- |
| onClick    | Triggeon when clicking | -                 |


### outer style class

| Class Name  | Description     |
| ----------- | --------------- |
| customClass | Root node nodes |

### Style Variables

The component provides the following CSS variables that can be used for custom styles. For usage, refer to the [ConfigProvider Component](/material/smartui?comId=config-provider).

| Name                          | Default Value                             | Description |
| ----------------------------- | ----------------------------------------- | ----------- |

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

The component provides the following CSS variables that can be used for custom styles. For usage, refer to the [ConfigProvider Component](/material/smartui?comId=config-provider).

| Name                          | Default Value                             | Description |
| ----------------------------- | ----------------------------------------- | ----------- |
| --overlay-background-color | _rgba(0, 0, 0, 0.7)_ | Background color |