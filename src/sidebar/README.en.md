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

| Parameters | Description     | Type               | Default value |
| ---------- | --------------- | ------------------ | ------------- |
| activeKey  | Elected indexes | _string \| number_ | `0`           |

### Sidebar Event

| Event Name | Description                        | Parameters                                 |
| ---------- | ---------------------------------- | ------------------------------------------ |
| onChange   | Triggered when switching the badge | Currently selecting the index of the badge |

### Sidebar External style

| Class Name  | Description     |
| ----------- | --------------- |
| customClass | Root node nodes |

### SidebarItem Props

| Parameters | Description                                                   | Type               | Default value |
| ---------- | ------------------------------------------------------------- | ------------------ | ------------- |
| badge      | The content of the logo in the upper right corner of the icon | _string \| number_ | `''`          |
| disabled   | Whether to disable this item                                  | _boolean_          | `false`       |
| dot        | Whether to show a small red dot in the upper right corner     | _boolean_          | `false`       |
| title      | content                                                       | _string_           | `''`          |

### SidebarItem Slot

| Name  | Description                                                                 |
| ----- | --------------------------------------------------------------------------- |
| title | Custom title bar, if you set the `title` attribute, it will not take effect |

### SidebarItem Event

| Event Name | Description                       | Parameters                                 |
| ---------- | --------------------------------- | ------------------------------------------ |
| onClick    | Triggered when clicking the badge | `event.detail` Index for the current badge |

### SidebarItem External style

| Class Name  | Description     |
| ----------- | --------------- |
| customClass | Root node nodes |
