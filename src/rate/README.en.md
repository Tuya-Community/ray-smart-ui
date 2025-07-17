---
category: Data Entry
---

# Rate

### Introduction

Used to rated things.

### Introduce

```jsx
import { Rate } from '@ray-js/smart-ui';
```

## Code demonstration

### Basic usage

```jsx
import { showToast } from '@ray-js/ray';
import { Rate } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value, setValue] = React.useState(3);
  const onChange = event => {
    setValue(event.detail);
    showToast({
      icon: 'none',
      title: `Current value:${event.detail}`,
    });
  };

  return <Rate value={value} onChange={onChange} />;
}
```

### Custom icon

```jsx
import { showToast } from '@ray-js/ray';
import { Rate } from '@ray-js/smart-ui';
import React, { useState } from 'react';

import IcloudIcon from '@tuya-miniapp/icons/dist/svg/Icloud';
import XmarkIcloudIcon from '@tuya-miniapp/icons/dist/svg/XmarkIcloud';

const icon = IcloudIcon;
const voidIcon = XmarkIcloudIcon;

export default function Demo() {
  const [value, setValue] = useState(3);
  const onChange = event => {
    setValue(event.detail);
    showToast({
      icon: 'none',
      title: `Current value:${event.detail}`,
    });
  };

  return <Rate value={value} icon={icon} voidIcon={voidIcon} onChange={onChange} />;
}
```

### Custom style

```jsx
import { showToast } from '@ray-js/ray';
import { Rate } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value, setValue] = React.useState(3);
  const onChange = event => {
    setValue(event.detail);
    showToast({
      icon: 'none',
      title: `Current value:${event.detail}`,
    });
  };

  return <Rate value={value} size={25} color="#ffd21e" voidColor="#eee" onChange={onChange} />
}
```

### Half -star

```jsx
import { showToast } from '@ray-js/ray';
import { Rate } from '@ray-js/smart-ui';
import React, { useState } from 'react';

import IcloudIcon from '@tuya-miniapp/icons/dist/svg/Icloud';
import XmarkIcloudIcon from '@tuya-miniapp/icons/dist/svg/XmarkIcloud';

const icon = IcloudIcon;
const voidIcon = XmarkIcloudIcon;

export default function Demo() {
  const [value, setValue] = useState(2.5);

  const onChange = event => {
    setValue(event.detail);
    showToast({
      icon: 'none',
      title: `Current value:${event.detail}`,
    });
  };

  return <Rate value={value} allowHalf voidIcon={voidIcon} voidColor="#eee" onChange={onChange} />;
}
```

### Custom quantity

```jsx
import { showToast } from '@ray-js/ray';
import { Rate } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value, setValue] = React.useState(3);
  const onChange = event => {
    setValue(event.detail);
    showToast({
      icon: 'none',
      title: `Current value:${event.detail}`,
    });
  };

  return <Rate value={value} count={6} onChange={onChange} />
}
```

### Disable

```jsx
import { showToast } from '@ray-js/ray';
import { Rate } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value, setValue] = React.useState(3);
  const onChange = event => {
    setValue(event.detail);
    showToast({
      icon: 'none',
      title: `Current value:${event.detail}`,
    });
  };

  return <Rate disabled value={value} onChange={onChange} />
}
```

### Read only

```jsx
import { showToast } from '@ray-js/ray';
import { Rate } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value, setValue] = React.useState(3);
  const onChange = event => {
    setValue(event.detail);
    showToast({
      icon: 'none',
      title: `Current value:${event.detail}`,
    });
  };

  return <Rate readonly value={value} onChange={onChange} />
}
```

### Listen to change events

A `change` event will be triggered when the rating changes.

```jsx
import { showToast } from '@ray-js/ray';
import { Rate } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [value, setValue] = useState(2);

  const onChange = event => {
    setValue(event.detail);
    showToast({
      icon: 'none',
      title: `Current value:${event.detail}`,
    });
  };

  return <Rate value={value} onChange={onChange} />;
}
```

## API

### Props

| Parameters    | Description                                                                                                     | Type               | Default value |
| ------------- | --------------------------------------------------------------------------------------------------------------- | ------------------ | ------------- |
| allowHalf     | Whether to allow half -election                                                                                 | _boolean_          | `false`       |
| color         | Color when chosen                                                                                               | _string_           | `#ffd21e`     |
| count         | Total number of icons                                                                                           | _number_           | `5`           |
| disabled      | Whether to disable the score                                                                                    | _boolean_          | `false`       |
| disabledColor | Color when disabled                                                                                             | _string_           | `#bdbdbd`     |
| gutter        | Icon spacing, default unit is `px`                                                                              | _string \| number_ | `4px`         |
| icon          | The name or image link of the icon when selected. Optional values can be found in the [Icon component](#/icon). | _string_           | `star`        |
| name          | The identifier when submitted in the form                                                                       | _string_           | -             |
| readonly      | Whether to read only                                                                                            | _boolean_          | `false`       |
| size          | Icon size, default unit is `px`                                                                                 | _string \| number_ | `20px`        |
| touchable     | Can you choose the score by sliding gestures                                                                    | _boolean_          | `true`        |
| value         | Current score                                                                                                   | _number_           | -             |
| voidColor     | The color when it is not selected                                                                               | _string_           | `#c7c7c7`     |
| voidIcon      | When not selected, the icon name or image link. See optional values in [Icon Component](#/icon).                | _string_           | `star-o`      |

### Events

| Event Name | Description                                       | Reprint parameters         |
| ---------- | ------------------------------------------------- | -------------------------- |
| onChange   | Event triggered when the current score is changed | event.detail:Current score |

### External style

| Class Name  | Description     |
| ----------- | --------------- |
| customClass | Root node nodes |
| iconClass   | Icon style      |
