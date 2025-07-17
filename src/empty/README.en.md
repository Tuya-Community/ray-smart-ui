---
category: Display
---

# Empty

### Introduce

Settlement prompts in empty state.

### Introduce

```jsx
import { Empty } from '@ray-js/smart-ui';
```

## Code demonstration

### Basic usage

```jsx
import { Empty } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Empty description="Description" />;
}
```

### Picture type

EMPTY components have a variety of picture types built -in, which can be used in different business scenarios.

```jsx
import { Empty } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <>
    { /** Universal error */ }
    <Empty image="error" description="Description" />
    { /** Network error */ }
    <Empty image="network" description="Description" />
    { /** Search prompt */ }
    <Empty image="search" description="Description" />
  </>
}
```

### Custom picture

When you need to customize pictures, you can pass any picture URL in the image attribute.

```jsx
import { Empty } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Empty
    image="https://static1.tuyacn.com/static/tuya-miniapp-doc/_next/static/images/logo-small.png"
    description="Description"
  />;
}
```

### Bottom content

The content can be inserted under the default slot.

```jsx
import { Button, Empty } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Empty description="Description">
    <Button round type="danger" >
      Button
    </Button>
  </Empty>
}
```

## API

### Props

| Parameters  | Description                                                                                   | Type     | Default value |
| ----------- | --------------------------------------------------------------------------------------------- | -------- | ------------- |
| description | Description text below the picture                                                            | _string_ | -             |
| image       | Image type, selectable values are `error`, `network`, `search`, supports passing in image URL | _string_ | `default`     |

### Slots

| Name        | Description             |
| ----------- | ----------------------- |
| -           | Custom bottom content   |
| description | Custom description text |
| image       | Custom icon             |
