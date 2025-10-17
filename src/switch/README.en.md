---
category: Feedback
---

# Switch

### Introduction

Simple and easy-to-use switch component

### Import

```jsx
import { Switch } from '@ray-js/smart-ui';
```

## Code Examples

### Basic Usage

```jsx
import { Switch } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value, onChange] = React.useState(true);

  return (
    <>
      <Switch
        checked={value}
        onChange={event => {
          onChange(event.detail);
        }}
      />
      <Switch
        checked={!value}
        onChange={event => {
          onChange(event.detail);
        }}
      />
    </>
  );
}
```

### Switch Label `v2.7.0`

```jsx
import { Switch } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value, onChange] = React.useState(true);

  return (
    <>
      <Switch
        checked={value}
        activeText="ON"
        inactiveText="OFF"
        onChange={event => {
          onChange(event.detail);
        }}
      />
      <ConfigProvider
        themeVars={{
          switchLabelFontSize: '10px',
        }}
      >
        <Switch
          checked={value}
          activeText="show"
          inactiveText="hide"
          onChange={event => {
            onChange(event.detail);
          }}
        />
      </ConfigProvider>
    </>
  );
}
```


### Disabled

```jsx
import { Switch } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value, onChange] = React.useState(true);

  return (
    <Switch
      checked={value}
      disabled
    />
  );
}
```

### Loading

```jsx
import { Switch } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value, onChange] = React.useState(true);

  return (
    <Switch
      checked={value}
      loading
    />
  );
}
```

### Custom Size

The `size` property can set the size of the component.

```jsx
import { Switch } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value, onChange] = React.useState(true);

  return (
    <Switch
      checked={value}
      size="24px"
    />
  );
}
```

### Custom Colors

Set `activeColor` to change the color when selected, and `inactiveColor` to change the color when not selected.

```jsx
import { Switch } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value, onChange] = React.useState(true);

  return (
    <Switch
      checked={value}
      activeColor="#07c160"
      inactiveColor="#ee0a24"
    />
  );
}
```

### Gradient Color `v2.5.0`

All attributes that CSS background can achieve can also be achieved by `active-color` and `inactive-color`.

```jsx
import { Switch } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value, onChange] = React.useState(true);

  return (
    <Switch
      checked={value}
      activeColor="linear-gradient(to right, #ff7e5f, #987AFF)"
      inactiveColor="linear-gradient(to right, #407e5f, #841AFF)"
    />
  );
}
```

### Asynchronous Control

```jsx
import { Switch, DialogInstance, Dialog } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value, setValue] = React.useState(true);

  const onChange = ({ detail }) => {
    DialogInstance.confirm({
      context: this,
      title: 'Prompt',
      message: 'Do you want to toggle the switch?',
    }).then(() => {
      setValue(detail);
    });
  };

  return (
    <>
      <Switch
        checked={value}
        onChange={onChange}
      />
      <Dialog id="smart-dialog" />
    </>
  );
}
```

### Prevent Bubbling

The `stopClickPropagation` attribute can prevent bubbling.

```jsx
import { Switch } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value, onChange] = React.useState(true);

  return (
    <Switch
      checked={value}
      stopClickPropagation
      onChange={event => {
        onChange(event.detail);
      }}
    />
  );
}
```

### List Usage

```jsx
import { Switch, Cell, CellGroup } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value, onChange] = React.useState(true);

  return (
    <CellGroup>
      <Cell title="Title">
        <Switch
          checked={value}
          onChange={event => {
            onChange(event.detail);
          }}
        />
      </Cell>
    </CellGroup>
  );
}
```

## API

### Props

| Parameter                      | Description                | Type      | Default   |
| ------------------------------ | -------------------------- | --------- | --------- |
| activeColor | Background color when on | _string_ | `#1989fa` |
| activeValue | Value when on | _any_ | `true` |
| checked | Switch checked state | _any_ | `false` |
| disabled | Whether it is disabled | _boolean_ | `false` |
| inactiveColor | Background color when off | _string_ | `#fff` |
| inactiveValue | Value when off | _any_ | `false` |
| loading | Whether it is loading | _boolean_ | `false` |
| name | Identifier when submitting | _string_ | - |
| size | Switch size | _string_ | `30px` |
| stopClickPropagation `v1.0.2` | Whether to prevent bubbling | _boolean_ | `false` |
| activeText `v2.7.0` | Text when opening | _string_ | - |
| inactiveText `v2.7.0` | Text when closed | _string_ | - |

### Events

| Event Name     | Description            | Parameter                       |
| -------------- | ---------------------- | -------------------------------- |
| onChange | Callback for switch state change | event.detail: Whether the switch is selected |

### External Style Classes

| Class Name     | Description            |
| -------------- | ---------------------- |
| customClass | Root node style class |
| nodeClass | Node style class |

### Style Variables

The component provides the following CSS variables for custom styling. See [ConfigProvider Component](/material/smartui?comId=config-provider) for usage.

| Name                          | Default Value                            | Description |
| ----------------------------- | ---------------------------------------- | ----------- |
| --switch-width                | _1.5338em_            | Switch width |
| --switch-height               | _0.867em_             | Switch height |
| --switch-node-size            | _0.867em_      | Switch node size |
| --switch-node-z-index         | _1_      | Switch node z-index |
| --switch-node-background-color| _#fff_       | -             |
| --switch-node-box-shadow      | _0 3px 1px 0 rgba(0, 0, 0, 0.05),_    | Switch node shadow |
| --switch-background-color     | _var(--app-B4-N6, rgba(0, 0, 0, 0.2))_   | Switch background color |
| --switch-on-background-color  | _#1989fa_       | Switch on background color |
| --switch-transition-duration  | _0.3s_        | Switch transition duration |
| --switch-disabled-opacity     | _0.4_          | Switch disabled opacity |
| --switch-border `@deprecated v2.5.0`             | _0.08em solid rgba(0, 0, 0, 0.1)_     | Switch border |
| --switch-node-on-background-color `v2.4.0` | _var(--switch-node-background-color, #fff)_ | Background color of the sphere when turned on |
| --switch-padding `v2.5.0` | _0.08em_ | Internal padding |
| --switch-label-font-size | `12px` | Font Size |
| --switch-label-active-color | `var(--app-B3, #ffffff)` | Text color on open |
| --switch-label-inactive-color | `var(--app-B3, #ffffff)` | Text color when turned off |