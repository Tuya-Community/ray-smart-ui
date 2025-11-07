---
category: Feedback
new: true
version: v2.3.0
---

# Popover

### Introduction

Starting from v2.3.0, the Popover container is added to display lightweight content such as popups or information tips.

### Import

```jsx
import { Popover } from '@ray-js/smart-ui';
```

## Code Demo

### Basic Usage

```jsx
import { View } from '@ray-js/ray';
import { Popover, Icon, Button } from '@ray-js/smart-ui';
import React from 'react';
import Sun from '@tuya-miniapp/icons/dist/svg/Sun';

export default function Demo() {
  const [show, setShow] = React.useState(false);
  const showPopup = () => setShow(true);
  const onClose = () => setShow(false);

  return (
    <View style={{paddingBottom: '64px'}}>
      <View
        style={{
          padding: '10vh',
          paddingTop: 0,
          paddingLeft: 8,
        }}
      >
        <Popover
          show={show}
          onClose={() => setShow(false)}
          placement="bottomLeft"
          customStyle={{
            padding: '0px',
            width: '200px',
          }}
          slot={{
            overlay: (
              <View>
                {[1, 2, 3].map(n => (
                  <View className={styles.listItem} key={n}>
                    <Icon name={Sun} size="24px" color="#3678E3" />
                    <Text className={styles.listText}>Title</Text>
                  </View>
                ))}
              </View>
            ),
          }}
        >
          <Button>Bottom Left Popover</Button>
        </Popover>
      </View>
      <View
        style={{
          padding: '10vh',
          paddingTop: 0,
          paddingLeft: '20vw',
        }}
      >
        <Popover
          placement="bottom"
          customStyle={{
            padding: '0px',
            width: '200px',
          }}
          slot={{
            overlay: (
              <View>
                {[1, 2, 3].map(n => (
                  <View className={styles.listItem} key={n}>
                    <Icon name={Sun} size="24px" color="#3678E3" />
                    <Text className={styles.listText}>Title</Text>
                  </View>
                ))}
              </View>
            ),
          }}
        >
          <Button>Bottom Center Popover</Button>
        </Popover>
      </View>
      <View
        style={{
          padding: '10vh',
          paddingTop: 0,
          paddingLeft: '40vw',
        }}
      >
        <Popover
          placement="bottomRight"
          customStyle={{
            padding: '0px',
            width: '200px',
          }}
          slot={{
            overlay: (
              <View>
                {[1, 2, 3].map(n => (
                  <View className={styles.listItem} key={n}>
                    <Icon name={Sun} size="24px" color="#3678E3" />
                    <Text className={styles.listText}>Title</Text>
                  </View>
                ))}
              </View>
            ),
          }}
        >
          <Button>Bottom Right Popover</Button>
        </Popover>
      </View>
      <View
        style={{
          paddingLeft: 8,
          paddingTop: '10vh',
        }}
      >
        <Popover
          placement="top"
          slot={{
            overlay: <View>tip</View>,
          }}
        >
          <Button>Top Popover</Button>
        </Popover>
      </View>
      <View
        style={{
          paddingLeft: '20vw',
          paddingTop: '10vh',
        }}
      >
        <Popover
          placement="left"
          slot={{
            overlay: <View>tip</View>,
          }}
        >
          <Button>Left Popover</Button>
        </Popover>
      </View>
      <View
        style={{
          paddingLeft: '8px',
          paddingTop: '10vh',
        }}
      >
        <Popover
          placement="right"
          slot={{
            overlay: <View>tip</View>,
          }}
        >
          <Button>Right Popover</Button>
        </Popover>
      </View>
      <View
        style={{
          paddingLeft: '8px',
          paddingTop: '10vh',
        }}
      >
        <Popover
          placement="bottom"
          slot={{
            overlay: <View>tip</View>,
          }}
        >
          <Button>Bottom Center Popover</Button>
        </Popover>
      </View>
    </View>
  );
}
```

less style:

```less
.listItem {
  height: 96rpx;
  padding: 0 32rpx;
  line-height: 96rpx;
  display: flex;
  align-items: center;
  position: relative;
  &:nth-child(n + 2)::after {
    display: block;
    content: '';
    height: 1px;
    background-color: #ebebeb;
    width: 90%;
    position: absolute;
    right: 0;
    top: 0;
  }
}

.listText {
  margin-left: 20rpx;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.9);
}
```

### Controlled Usage

Control whether the popover is displayed through the `show` attribute.

```tsx
import { View } from '@ray-js/ray';
import { Popover, Button } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [show, setShow] = React.useState(false);

  return (
    <Popover placement="bottom" show={show} onClose={() => setShow(false)} onShowChange={e => setShow(e.detail)} slot={{
      overlay: <View>tip</View>
    }}>
      <Button>Bottom Popover</Button>
    </Popover>
  )
}
```

### Popover Position

Set the popover position using the `position` attribute. By default, it pops up on the right side. It can be set to `top`, `topLeft`, `topRight`, `bottom`, `bottomLeft`, `bottomRight`, `left`, `leftTop`, `leftBottom`, `right`, `rightTop`, `rightBottom`.

```jsx
import { View } from '@ray-js/ray';
import { Popover, Button } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <Popover placement="right" slot={{
      overlay: <View>Popup Content</View>
    }}>
      <Button>Right Popover</Button>
    </Popover>
  );
}
```

## API

### Props
| Parameter        | Description                                                                                                                                                           | Type      | Default  |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | -------- |
| customStyle | Custom popup style | _React.CSSProperties_ | - |
| duration | Delay time for closing (ms) | number | `3000` |
| placement | Position of the popup, supported values: `top`, `topLeft`, `topRight`, `bottom`, `bottomLeft`, `bottomRight`, `left`, `leftTop`, `leftBottom`, `right`, `rightTop`, `rightBottom` | _string_ | `right` |
| show | Controls whether the popup is displayed and listens for state changes, updating `currentShow` when the value changes | _boolean_ | `false` |
| trigger `v2.5.0` | Control the trigger method of the popup layer, support `tap`、`longpress` | _string_ | `tap` |

### Events

| Event Name       | Description             | Parameters |
| ---------------- | ----------------------- | ---------- |
| onClose | Triggered on close | - |
| onShowChange | Triggered on show/hide | - |

### Popover Slot

| Name    | Description       |
| ------------ | ------------ |
| overlay | Popup content |

### External Styles

| Class Name      | Description        |
| --------------- | ------------------ |
| customClass | Root node style class |

### Style Variables

The component provides the following CSS variables for custom styling. For usage, see [ConfigProvider Component](/material/smartui?comId=config-provider).

| Name                       | Default Value                          | Description  |
| -------------------------- | -------------------------------------- | ------------ |
| --popover-background-color | #fff     | Popup background color (including triangle color) |
| --popover-border-radius    | 12px      | Popup border radius    |
| --popover-box-shadow       | 0px 6px 12px 0px rgba(0, 0, 0, 0.1)    | Popup box shadow       |
| --popover-padding          | 12px   | Popup padding          |