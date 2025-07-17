---
category: Navigation
---

# Tabbar

### Introduction

The bottom navigation bar is used to switch between different pages.

### Introduce

```jsx
import { Tabbar, TabbarItem } from '@ray-js/smart-ui';
```

## Code demonstration

### Basic usage

```jsx
import Tornado from '@tuya-miniapp/icons/dist/svg/Tornado';
import Timer from '@tuya-miniapp/icons/dist/svg/Timer';
import Snow from '@tuya-miniapp/icons/dist/svg/Snow';
import Airplane from '@tuya-miniapp/icons/dist/svg/Airplane';
import React from 'react';
import { Tabbar, TabbarItem } from '@ray-js/smart-ui';

export default function Demo() {
  const [active, setActive] = React.useState(0);
  const onChange = e => {
    setActive(e.detail);
  };

  return (
    <Tabbar active={active} safeAreaInsetBottom={false} onChange={onChange}>
      <TabbarItem icon={Tornado}>Label</TabbarItem>
      <TabbarItem icon={Timer}>Label</TabbarItem>
      <TabbarItem icon={Snow}>Label</TabbarItem>
      <TabbarItem icon={Airplane}>Label</TabbarItem>
    </Tabbar>
  );
}
```

### Match by name

When the `name` attribute is specified for the tag, the value of `active` is the tag's current `name`.

```jsx
import Tornado from '@tuya-miniapp/icons/dist/svg/Tornado';
import Timer from '@tuya-miniapp/icons/dist/svg/Timer';
import Snow from '@tuya-miniapp/icons/dist/svg/Snow';
import Airplane from '@tuya-miniapp/icons/dist/svg/Airplane';
import React, { useState } from 'react';
import { Tabbar, TabbarItem } from '@ray-js/smart-ui';

export default function Demo() {
  const [active, setActive] = useState('home');
  const onChange = e => {
    setActive(e.detail);
  };
  return (
    <Tabbar active={active} safeAreaInsetBottom={false} onChange={onChange}>
      <TabbarItem name="home" icon={Tornado}>
        Label
      </TabbarItem>
      <TabbarItem name="search" icon={Timer}>
        Label
      </TabbarItem>
      <TabbarItem name="friends" icon={Snow}>
        Label
      </TabbarItem>
      <TabbarItem name="setting" icon={Airplane}>
        Label
      </TabbarItem>
    </Tabbar>
  );
}
```

### Display logo

```jsx
import Tornado from '@tuya-miniapp/icons/dist/svg/Tornado';
import Timer from '@tuya-miniapp/icons/dist/svg/Timer';
import Snow from '@tuya-miniapp/icons/dist/svg/Snow';
import Airplane from '@tuya-miniapp/icons/dist/svg/Airplane';
import React, { useState } from 'react';
import { Tabbar, TabbarItem } from '@ray-js/smart-ui';

export default function Demo() {
  const [active, setActive] = useState(0);
  const onChange = e => {
    setActive(e.detail);
  };
  return (
    <Tabbar active={active} safeAreaInsetBottom={false} onChange={onChange}>
      <TabbarItem icon={Tornado}>Label</TabbarItem>
      <TabbarItem icon={Timer} dot>
        Label
      </TabbarItem>
      <TabbarItem icon={Snow} info="5">
        Label
      </TabbarItem>
      <TabbarItem icon={Airplane} info="20">
        Label
      </TabbarItem>
    </Tabbar>
  );
}
```

### Custom icon

You can customize the icon via a slot. The 'icon' slot represents the icon in an unselected state, while the 'icon-active' slot represents the icon in a selected state.

```jsx
import Snow from '@tuya-miniapp/icons/dist/svg/Snow';
import Airplane from '@tuya-miniapp/icons/dist/svg/Airplane';

import React, { useState } from 'react';
import { Tabbar, TabbarItem } from '@ray-js/smart-ui';
import { Image } from '@ray-js/ray'

export default function Demo() {
  const [active, setActive] = useState(0);
  const onChange = e => {
    setActive(e.detail);
  };
  const icon = {
    normal: '',
    active: 'https://static1.tuyacn.com/static/tuya-miniapp-doc/_next/static/images/logo-small.png',
  };
  return (
    <Tabbar active={active} safeAreaInsetBottom={false} onChange={onChange}>
      <TabbarItem info="3">
        <Image slot="icon" src={icon.normal} mode="aspectFit" style={{ width: 30, height: 18 }} />
        <Image
          slot="icon-active"
          src={icon.active}
          mode="aspectFit"
          style={{ width: 30, height: 18 }}
        />
        Custom
      </TabbarItem>
      <TabbarItem icon={Snow}>Label</TabbarItem>
      <TabbarItem icon={Airplane}>Label</TabbarItem>
    </Tabbar>
  );
}
```

### Custom color

```jsx
import Tornado from '@tuya-miniapp/icons/dist/svg/Tornado';
import Timer from '@tuya-miniapp/icons/dist/svg/Timer';
import Snow from '@tuya-miniapp/icons/dist/svg/Snow';
import Airplane from '@tuya-miniapp/icons/dist/svg/Airplane';

import React, { useState } from 'react';
import { Tabbar, TabbarItem } from '@ray-js/smart-ui';

export default function Demo() {
  const [active, setActive] = useState(0);
  const onChange = e => {
    setActive(e.detail);
  };

  return (
    <Tabbar
      active={active}
      safeAreaInsetBottom={false}
      activeColor="#07c160"
      inactiveColor="rgba(0, 0, 0, 0.3)"
      onChange={onChange}
    >
      <TabbarItem icon={Tornado}>Label</TabbarItem>
      <TabbarItem icon={Timer}>Label</TabbarItem>
      <TabbarItem icon={Snow}>Label</TabbarItem>
      <TabbarItem icon={Airplane}>Label</TabbarItem>
    </Tabbar>
  );
}
```

### Switch label event

```jsx
import Tornado from '@tuya-miniapp/icons/dist/svg/Tornado';
import Timer from '@tuya-miniapp/icons/dist/svg/Timer';
import Snow from '@tuya-miniapp/icons/dist/svg/Snow';
import Airplane from '@tuya-miniapp/icons/dist/svg/Airplane';

import React, { useState } from 'react';
import { Tabbar, TabbarItem } from '@ray-js/smart-ui';
import { showToast } from '@ray-js/ray';

export default function Demo() {
  const [active, setActive] = useState(0);
  const handleChange = e => {
    setActive(e.detail);
    showToast({ title: `Click the tag ${e.detail + 1}`, icon: 'none' });
  };

  return (
    <Tabbar active={active} safeAreaInsetBottom={false} onChange={handleChange}>
      <TabbarItem icon={Tornado}>Label1</TabbarItem>
      <TabbarItem icon={Timer}>Label2</TabbarItem>
      <TabbarItem icon={Snow}>Label3</TabbarItem>
      <TabbarItem icon={Airplane}>Label4</TabbarItem>
    </Tabbar>
  );
}
```

### Combine with custom tabBar

Please refer to the [Smart Mini Program Official Documentation](https://developer.tuya.com/cn/miniapp/develop/miniapp/framework/app/app-json#tabbar)

## API

### Tabbar Props

| Parameters          | Description                                                                                   | Type      | Default value |
| ------------------- | --------------------------------------------------------------------------------------------- | --------- | ------------- |
| active              | Currently selecting the index of the label                                                    | _number_  | -             |
| activeColor         | Select the color of the label                                                                 | _string_  | `#1989fa`     |
| border              | Whether to display the outer frame                                                            | _boolean_ | `true`        |
| fixed               | Whether it is fixed at the bottom                                                             | _boolean_ | `true`        |
| inactiveColor       | Color that is not selected for label                                                          | _string_  | `#7d7e80`     |
| placeholder         | When fixed at the bottom, whether to generate a high -occupying element at the label position | _boolean_ | `false`       |
| safeAreaInsetBottom | Whether to reserve the bottom safety margin for iPhone X                                      | _boolean_ | `true`        |
| zIndex              | element z-index                                                                               | _number_  | `1`           |

### Tabbar Event

| Event Name | Description                     | Parameters                                                            |
| ---------- | ------------------------------- | --------------------------------------------------------------------- |
| onChange   | Triggered when switching labels | event.detail: The name or index value of the currently selected label |

### TabbarItem Props

| Parameters | Description                                                                                                            | Type               | Default value                        |
| ---------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------------------------ |
| dot        | Whether to display a small red dot                                                                                     | _boolean_          | -                                    |
| icon       | Icon name or image link, optional values can be found in [Icon component](/material/smartui?comId=icon)                | _string_           | -                                    |
| iconPrefix | Icon class name prefix, same as the [class-prefix attribute](/material/smartui?comId=icon#Props) of the Icon component | _string_           | `smart-icon`                         |
| info       | Prompt information in the upper right corner of the icon                                                               | _string \| number_ | -                                    |
| linkType   | Link jump types, optional values are `redirectTo`, `switchTab`, `reLaunch`                                             | _string_           | `redirectTo`                         |
| name       | Tag name, as a matching identifier                                                                                     | _string \| number_ | The index value of the current label |
| url        | The link address to which the click redirects must start with '/'                                                      | _string_           | -                                    |

### TabbarItem Slot

| Name       | Description                      |
| ---------- | -------------------------------- |
| icon       | The icon when it is not selected |
| iconActive | Icon when chosen                 |
