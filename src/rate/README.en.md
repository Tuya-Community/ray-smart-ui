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

| Parameter      | Description                                               | Type               | Default              |
| -------------- | ---------------------------------------------------------- | ------------------ | --------------------- |
| allowHalf | Whether to allow half selection | _boolean_ | `false` |
| color | Color when selected | _string_ | `#ffd21e` |
| count | Total number of icons | _number_ | `5` |
| disabled | Whether to disable rating | _boolean_ | `false` |
| disabledColor | Color when disabled | _string_ | `#bdbdbd` |
| gutter | Icon spacing, default unit is `px` | _string \| number_ | `4px` |
| icon | Icon svg value or image link when selected, see [Icon Component](/material/smartui?comId=icon) for options | _string_ | `CheckmarkCircle` |
| name | Identifier for form submission | _string_ | - |
| readonly | Whether it is in read-only state | _boolean_ | `false` |
| size | Icon size, default unit is `px` | _string \| number_ | `20px` |
| touchable | Whether selection can be made via swipe gesture | _boolean_ | `true` |
| value | Current rating value | _number_ | - |
| voidColor | Color when not selected | _string_ | `#c7c7c7` |
| voidIcon | Icon svg value or image link when not selected, see [Icon Component](/material/smartui?comId=icon) for options | _string_ | `CheckmarkCircleVoid` |

### Events

| Event Name   | Description                | Callback Parameters  |
| ------------ | -------------------------- | --------------------- |
| onChange | Event triggered when the rating value changes | event.detail: Current rating value |

### External Style Classes

| Class Name    | Description       |
| ------------- | ----------------- |
| customClass | Root node style class |
| iconClass | Icon style class |
### Style Variables

The component provides the following CSS variables that can be used for custom styles. For usage, refer to the [ConfigProvider Component](/material/smartui?comId=config-provider).

| Name                          | Default Value                           | Description              |
| ----------------------------- | ---------------------------------------- | ------------------------ |
| --rate-horizontal-padding     | _2px_                                    | Rating icon horizontal padding |
| --rate-icon-size              | _20px_                                   | Rating icon size         |
| --rate-icon-void-color        | _#c8c9cc_                                | Void state icon color    |
| --rate-icon-full-color        | _#ee0a24_                                | Full state icon color    |
| --rate-icon-disabled-color    | _#c8c9cc_                                | Disabled state icon color|
| --rate-icon-gutter            | _4px_                                    | Icon spacing             |