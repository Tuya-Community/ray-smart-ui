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
import { Image } from '@ray-js/ray';

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

### Using Slots

```jsx
import Tornado from '@tuya-miniapp/icons/dist/svg/Tornado';
import Timer from '@tuya-miniapp/icons/dist/svg/Timer';
import Snow from '@tuya-miniapp/icons/dist/svg/Snow';
import Airplane from '@tuya-miniapp/icons/dist/svg/Airplane';

import React, { useState } from 'react';
import { Tabbar, TabbarItem, Icon } from '@ray-js/smart-ui';
import { showToast, Image } from '@ray-js/ray';
const icon = {
  normal: 'https://static1.tuyacn.com/static/tuya-miniapp-doc/_next/static/images/logo-small.png',
};
export default function Demo() {
  const [active, setActive] = useState(0);
  const handleChange = e => {
    setActive(e.detail);
    showToast({ title: `Click the tag ${e.detail + 1}`, icon: 'none' });
  };

  return (
    <Tabbar
      active={active}
      safeAreaInsetBottom={false}
      slot={{
        left: (
          <Image
            src={icon.normal}
            style={{
              height: '40px',
              width: '40px',
              margin: '6px 10px',
            }}
          />
        ),
      }}
      onChange={handleChange}
    >
      <TabbarItem
        slot={{
          icon: <Icon name={Tornado} />,
          iconActive: <Icon name={Tornado} color="red" />,
        }}
      >
        Label1
      </TabbarItem>
      <TabbarItem
        slot={{
          icon: <Icon name={Timer} />,
          iconActive: <Icon name={Timer} color="red" />,
        }}
      >
        Label2
      </TabbarItem>
      <TabbarItem
        slot={{
          icon: <Icon name={Snow} />,
          iconActive: <Icon name={Snow} color="red" />,
        }}
      >
        Label3
      </TabbarItem>
      <TabbarItem
        slot={{
          icon: <Icon name={Airplane} />,
          iconActive: <Icon name={Airplane} color="red" />,
        }}
      >
        Label4
      </TabbarItem>
    </Tabbar>
  );
}
```

### Combine with custom tabBar

Please refer to the [Smart Mini Program Official Documentation](https://developer.tuya.com/cn/miniapp/develop/miniapp/framework/app/app-json#tabbar)

### Upside Down `v2.5.1`

`upsideDown` attribute can turn the label and text upside down

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
    <Tabbar upsideDown active={active} safeAreaInsetBottom={false} onChange={onChange}>
      <TabbarItem icon={Tornado}>Tags</TabbarItem>
      <TabbarItem icon={Timer}>Tags</TabbarItem>
      <TabbarItem icon={Snow}>Tags</TabbarItem>
      <TabbarItem icon={Airplane}>Tags</TabbarItem>
    </Tabbar>
  );
}
```

## API

### Tabbar Props

| Parameter               | Description                                        | Type      | Default Value    |
| ---------------------- | -------------------------------------------------- | --------- | ---------------- |
| active | Index of currently selected tab | _number_ | - |
| activeColor | Color of the selected tab | _string_ | `--tabbar-item-active-color` \| `--app-M1` \| `#3678e3` |
| border | Whether to display an outer border | _boolean_ | `true` |
| fixed | Whether to fix at the bottom | _boolean_ | `true` |
| inactiveColor | Color of the non-selected tab | _string_ | `#7d7e80` |
| placeholder | Whether to generate a height-equal placeholder at tab position when fixed at bottom | _boolean_ | `false` |
| safeAreaInsetBottom | Whether to reserve bottom safe area for iPhoneX | _boolean_ | `true` |
| zIndex | Element z-index | _number_ | `1` |
| upsideDown `v2.5.1` | Top-bottom inversion | _boolean_ | `false` |

### Tabbar Slot

| Name        | Description           |
| ----------- | ---------------------- |
| -           | Default slot, insert sub-tabs |
| left `v2.2.0` | Slot on the left side of the tab |
| right `v2.2.0` | Slot on the right side of the tab |

### Tabbar Event

| Event Name    | Description          | Parameters                                    |
| ------------- | -------------------- | --------------------------------------------- |
| onChange | Triggered on tab switch | event.detail: The name or index of the currently selected tab |

### TabbarItem Props

| Parameter             | Description                                      | Type               | Default Value     |
| --------------------- | ------------------------------------------------ | ------------------ | ------------------ |
| dot | Whether to show a dot | _boolean_ | - |
| icon | Icon SVG value or image link, optional values see [Icon component](/material/smartui?comId=icon) | _string_ | - |
| iconPrefix | Icon class name prefix, same as Icon component's [class-prefix attribute](/material/smartui?comId=icon#Props) | _string_ | `smart-icon` |
| info | Icon upper right corner information | _string \| number_ | - |
| linkType `v1.10.13` | Type of link jump, optional values are `redirectTo`, `switchTab`, `reLaunch` | _string_ | `redirectTo` |
| name | Tab name as an identifier | _string \| number_ | Current tab index |
| url `v1.10.13` | The address of the link to jump to, must start with `/` | _string_ | - |
| disabled `v2.3.5` | Whether to disable | _boolean_ | - |

### TabbarItem Slot

| Name        | Description           |
| ----------- | ---------------------- |
| icon | Icon when not selected |
| iconActive | Icon when selected |

### TabbarItem Event

| Name        | Description           |
| ----------- | ---------------------- |
| click | Click event, there will be a callback even when setting disabled |

### Style Variables

The component provides the following CSS variables for customizing the style. For usage, refer to the [ConfigProvider component](/material/smartui?comId=config-provider).

| Name                        | Default Value                          | Description         |
| --------------------------- | -------------------------------------- | ------------------- |
| --tabbar-height             | _55px_                                 | Tab bar height      |
| --tabbar-background-color   | _var(--app-B5, #f6f7fb)_               | Tab bar background color |
| --tabbar-border-color       | _var(--app-B6-N7, rgba(0, 0, 0, 0.1))_ | Tab bar border color |
| --tabbar-item-font-size     | _12px_                                 | Tab item font size  |
| --tabbar-item-text-color    | _var(--app-B6-N5, rgba(0, 0, 0, 0.3))_ | Tab item text color |
| --tabbar-item-active-color  | _var(--app-M1, #3678e3)_               | Active state item color |
| --tabbar-item-line-height   | _1_                                    | Tab item line height |
| --tabbar-item-icon-size     | _22px_                                 | Tab item icon size  |
| --tabbar-item-margin-bottom | _4px_                                  | Tab item bottom margin |