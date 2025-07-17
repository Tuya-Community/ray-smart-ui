---
category: Display
---

# Divider

### Introduce

Used to separate the content into multiple areas.

### Introduce

```jsx
import { Divider } from '@ray-js/smart-ui';
```

## Code demonstration

### Basic usage

```jsx
import { Divider } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Divider />;
}
```

### use hairline

```jsx
import { Divider } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Divider hairline />
}
```

### dotted line

```jsx
import { Divider } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Divider dashed />
}
```

### Text location

```jsx
import { Divider } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <>
    <Divider contentPosition="center">text</Divider>
    <Divider contentPosition="left">text</Divider>
    <Divider contentPosition="right">text</Divider>
  </>
}
```

### Custom attribute

```jsx
import { Divider } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <>
    <Divider contentPosition="center" textColor="#1989fa">Text color</Divider>
    <Divider contentPosition="center" borderColor="#1989fa"> border color </Divider>
    <Divider contentPosition="center" fontSize="18">Font size</Divider>
  </>
}
```

### Custom style

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
    text
  </Divider>
}
```

## API

### Props

| Parameters      | Description                           | Type      | Default value |
| --------------- | ------------------------------------- | --------- | ------------- |
| contentPosition | Text location,`left` `center` `right` | _string_  | -             |
| customStyle     | Custom style                          | _object_  | -             |
| dashed          | dotted line                           | _boolean_ | false         |
| hairline        | Thin line                             | _boolean_ | false         |

### Slot

| Name    | Description         |
| ------- | ------------------- |
| Default | Custom text content |
