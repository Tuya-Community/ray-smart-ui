---
category: Display
---

# Empty

> v2.0.0 Version Refactoring

### Introduction

Placeholder prompt for empty states.

### Import

```jsx
import { Empty } from '@ray-js/smart-ui';
```

## Code Examples

### Basic Usage

```jsx
import { Empty } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Empty title="Title" description="Description text" />;
}
```

### Custom Image

To customize the image, you can pass any image URL to the image property.

```jsx
import { Empty } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Empty
    image="https://images.tuyacn.com/rms-static/ae2ff530-976e-11ef-9ccb-47cdb7db279b-1730368709635.png?tyName=img_custom_empty.png"
  />;
}
```

### Bottom Content

The default slot is inserted at the bottom of the component.

```jsx
import { Button, Empty } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Empty description="Description text">
    <Button round type="primary" >
      Button
    </Button>
  </Empty>
}
```

### Using Slots

Custom slots `title` can insert a title, and `description` can insert descriptive text.

```jsx
import { Empty } from '@ray-js/smart-ui';
import { Text } from '@ray-js/ray';
import React from 'react';

export default function Demo() {
  return <Empty>
    <Text slot="title">Insert title using slot</Text>
    <Text slot="description">Insert description using slot</Text>
  </Empty>
}
```

## API

### Props

| Parameter   | Description                                                      | Type     | Default   |
| ----------- | ---------------------------------------------------------------- | -------- | --------- |
| description | Description text below the image | _string_ | - |
| image | Custom image URL | _string_ | `default` |
| imageStyle | Image style | _React.CSSProperties_ | - |
| titleStyle | Title style | _React.CSSProperties_ | - |
| descriptionStyle | Description style | _React.CSSProperties_ | - |

### Slots

| Name        | Description    |
| ----------- | -------------- |
| -           | Custom bottom content |
| title | Custom title |
| description | Custom description text |

### Style Variables

The component provides the following CSS variables that can be used for custom styles. For usage, refer to the [ConfigProvider Component](/material/smartui?comId=config-provider).

| Name                          | Default Value                             | Description |
| ----------------------------- | ----------------------------------------- | ----------- |
| --empty-image-width           | _180px_                                   | Image width |
| --empty-image-height          | _180px_                                   | Image height |
| --empty-title-color           | _var(--app-B6-N1, rgba(0, 0, 0, 1))_      | Title color |
| --empty-title-font-size       | _16px_                                    | Title font size |
| --empty-title-font-weight     | _normal_                                  | Title font weight |
| --empty-title-line-height     | _24px_                                    | Title line height |
| --empty-title-margin-top      | _7px_                                     | Title top margin |
| --empty-description-color     | _var(--app-B4-N3, rgba(0, 0, 0, 0.5))_    | Description text color |
| --empty-description-font-size | _14px_                                    | Description text font size |
| --empty-description-font-weight | _normal_                                | Description text font weight |
| --empty-description-line-height | _20px_                                  | Description text line height |
| --empty-description-margin-top | _4px_                                    | Description text top margin |
| --empty-bottom-margin-top     | _24px_                                    | Bottom content top margin |