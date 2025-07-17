---
category: Navigation
---

# Sidebar

### Introduction

The vertical display navigation bar is used to switch between different content areas.

### Introduce

```jsx
import { Sidebar, SidebarItem } from '@ray-js/smart-ui';
```

## Code demonstration

### Basic usage

Control the selected item by setting the `activeKey` property on the `Sidebar`.

```jsx
import { Sidebar, SidebarItem } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const activeKey = 0;

  return (
    <Sidebar activeKey={activeKey}>
      <SidebarItem title="Label" />
      <SidebarItem title="Label" />
      <SidebarItem title="Label" />
    </Sidebar>
  );
}
```

### Logo

After setting the `dot` attribute, a small red dot will be displayed in the upper right corner. After setting the `badge` attribute, the corresponding badge will be displayed in the upper right corner.

```jsx
import { Sidebar, SidebarItem } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const activeKey = 0;

  return (
    <Sidebar activeKey={activeKey}>
      <SidebarItem title="Label" dot />
      <SidebarItem title="Label" badge="5" />
      <SidebarItem title="Label" badge="99+" />
    </Sidebar>
  );
}
```

### Disable option

Disable options using the `disabled` attribute.

```jsx
import { Sidebar, SidebarItem } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const activeKey = 0;

  return (
    <Sidebar activeKey={activeKey}>
      <SidebarItem title="Label" />
      <SidebarItem title="Label" disabled />
      <SidebarItem title="Label" />
    </Sidebar>
  );
}
```

### Monitoring and switching event

Set the `change` method to listen for events when switching navigation items.

```jsx
const activeKey = 0;
const onChange = React.useCallback(event => {
  NotifyInstance({
    type: 'primary',
    message: `Switch to the first${event.detail}item`,
  });
}, []);

<Sidebar activeKey={activeKey} onChange={onChange}>
  <SidebarItem title="Label 1" />
  <SidebarItem title="Label 2" />
  <SidebarItem title="Label 3" />
</Sidebar>

<Notify id="smart-notify" />
```

## API

### Sidebar Props

| Parameter | Description           | Type               | Default |
| --------- | --------------------- | ------------------ | ------- |
| activeKey | Index of selected item | _string \| number_ | `0` |

### Sidebar Event

| Event Name | Description           | Parameter                |
| ---------- | --------------------- | ------------------------ |
| change | Triggered when switching badges | Index of the currently selected badge |

### Sidebar External Class

| Class Name    | Description        |
| ------------- | ------------------ |
| customClass | Root node style class |

### SidebarItem Props

| Parameter | Description            | Type      | Default  |
| --------- | ---------------------- | --------- | -------- |
| dot | Whether to show the small red dot in the upper right corner | _boolean_ | `false` |
| title | Content | _string_ | `''` |
| badge | Badge content in the upper right corner of the icon | _string \| number_ | `''` |
| disabled | Whether to disable this item | _boolean_ | `false` |

### SidebarItem Slot

| Name   | Description                                 |
| ------ | ------------------------------------------- |
| title | Custom title bar, will not take effect if the `title` attribute is set |

### SidebarItem Event

| Event Name | Description           | Parameter               |
| ---------- | --------------------- | ----------------------- |
| click | Triggered when the badge is clicked | `event.detail` is the index of the current badge |

### SidebarItem External Class

| Class Name    | Description        |
| ------------- | ------------------ |
| customClass | Root node style class |

### Style Variables

The component provides the following CSS variables that can be used for custom styles. For usage, refer to the [ConfigProvider Component](/material/smartui?comId=config-provider).

| Name                          | Default Value                           | Description              |
| ----------------------------- | ---------------------------------------- | ------------------------ |
| --sidebar-width               | _80px_                                   | Sidebar width            |
| --sidebar-font-size           | _14px_                                   | Sidebar font size        |
| --sidebar-line-height         | _20px_                                   | Sidebar line height      |
| --sidebar-text-color          | _var(--app-B6-N1, rgba(0, 0, 0, 1))_     | Sidebar text color       |
| --sidebar-disabled-text-color | _var(--app-B6-N5, rgba(0, 0, 0, 0.3))_   | Disabled text color      |
| --sidebar-padding             | _20px @padding-sm 20px @padding-xs_      | Sidebar padding          |
| --sidebar-active-color        | _var(--app-B6, #fff)_                    | Active state color       |
| --sidebar-background-color    | _var(--app-B1, #f6f7fb)_                 | Sidebar background color |
| --sidebar-selected-font-weight| _500_                                    | Selected font weight     |
| --sidebar-selected-text-color | _var(--app-B6-N1, rgba(0, 0, 0, 1))_     | Selected text color      |
| --sidebar-selected-border-color| _#ee0a24_                              | Selected border color    |
| --sidebar-selected-background-color| _var(--app-B6, #fff)_               | Selected background color|