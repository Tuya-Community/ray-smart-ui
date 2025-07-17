---
category: Display
---

# Divider

### Introduction

Used to separate content into multiple areas.

### Import

```jsx
import { Divider } from '@ray-js/smart-ui';
```

## Code Demonstration

### Basic Usage

```jsx
import { Divider } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Divider />;
}
```

### Use Hairline

```jsx
import { Divider } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Divider hairline />
}
```

### Dashed Line

```jsx
import { Divider } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Divider dashed />
}
```

### Content Position

```jsx
import { Divider } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <>
    <Divider contentPosition="center">Text</Divider>
    <Divider contentPosition="left">Text</Divider>
    <Divider contentPosition="right">Text</Divider>
  </>
}
```

### Custom Properties

```jsx
import { Divider } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <>
    <Divider contentPosition="center" textColor="#1989fa">Text Color</Divider>
    <Divider contentPosition="center" borderColor="#1989fa"> Border Color </Divider>
    <Divider contentPosition="center" fontSize="18">Font Size</Divider>
  </>
}
```

### Custom Styles

```jsx
import { Divider } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Divider
    contentPosition="center"
    customStyle={{
      color: '#1989fa',
      borderColor: '#1989fa',
      fontSize: '18px'
    }}
  >
    Text
  </Divider>
}
```

## API

### Props

| Parameter        | Description                               | Type      | Default |
| ---------------- | ----------------------------------------- | --------- | ------- |
| contentPosition | Text position, `left` `center` `right` | _string_ | - |
| customStyle | Custom styles | _React.CSSProperties_ | - |
| dashed | Dashed line | _boolean_ | false |
| hairline | Hairline | _boolean_ | false |

### Slot

| Name  | Description         |
| ----- | ------------------- |
| Default | Custom text content |

### Style Variables

The component provides the following CSS variables that can be used for custom styles. For usage, refer to the [ConfigProvider Component](/material/smartui?comId=config-provider).

| Name                          | Default Value                           | Description           |
| ----------------------------- | ---------------------------------------- | --------------------- |
| --divider-margin              | _@padding-md 0_                          | Top and bottom margin |
| --divider-text-color          | _#969799_                                | Text color            |
| --divider-font-size           | _14px_                                   | Font size             |
| --divider-line-height         | _24px_                                   | Line height           |
| --divider-border-color        | _var(--app-B6-N7, rgba(0, 0, 0, 0.1))_   | Border color          |
| --divider-content-padding     | _16px_                                   | Content padding       |
| --divider-content-left-width  | _10%_                                    | Left content width    |
| --divider-content-right-width | _10%_                                    | Right content width   |