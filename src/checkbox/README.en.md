---
category: Data Entry
---

# Checkbox

### Introduction

Select multiple options from a set of choices.

### Introduce

```jsx
import { Checkbox, CheckboxGroup } from '@ray-js/smart-ui';
```

## Code Demo

### Basic Usage

Bind the checked state of the checkbox through `value`.

```jsx
import { Checkbox } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [checked, setChecked] = useState(true);
  const onChange = event => {
    setChecked(event.detail);
  };

  return (
    <Checkbox value={checked} onChange={onChange}>
      Checkbox
    </Checkbox>
  );
}
```

### Disabled status

You can disable the checkbox by setting the `disabled` attribute.

```jsx
import { Checkbox } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [checked, setChecked] = useState(true);
  const onChange = event => {
    setChecked(event.detail);
  };

  return (
    <Checkbox disabled value={checked} onChange={onChange}>
      Checkbox
    </Checkbox>
  );
}
```

### Custom Shape

Set the `shape` attribute to `square`, and the shape of the checkbox will become square.

```jsx
import { Checkbox } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [checked, setChecked] = useState(true);
  const onChange = event => {
    setChecked(event.detail);
  };

  return (
    <Checkbox value={checked} shape="square" onChange={onChange}>
      Checkbox
    </Checkbox>
  );
}
```

### Custom color

The icon color in the selected state can be customized via the `checkedColor` property.

```jsx
import { Checkbox } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [checked, setChecked] = useState(true);
  const onChange = event => {
    setChecked(event.detail);
  };

  return (
    <Checkbox value={checked} checkedColor="#07c160" onChange={onChange}>
      Checkbox
    </Checkbox>
  );
}
```

### Custom Size

The `iconSize` property allows you to customize the size of the icon.

```jsx
import { Checkbox } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [checked, setChecked] = useState(true);
  const onChange = event => {
    setChecked(event.detail);
  };

  return (
    <Checkbox value={checked} iconSize="25px">
      Checkbox
    </Checkbox>
  );
}
```

### Custom Icon

Customize icons via the icon slot.

```jsx
import { Checkbox } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const activeIcon =
    'https://static1.tuyacn.com/static/tuya-miniapp-doc/_next/static/images/logo-small.png';
  const inactiveIcon =
    'https://static1.tuyacn.com/static/tuya-miniapp-doc/_next/static/images/logo-small2.png';

  const [checked, setChecked] = useState(true);
  const onChange = event => {
    setChecked(event.detail);
  };


  return (
    <Checkbox useIconSlot value={checked} onChange={onChange}>
      Custom Icon
      <image slot="icon" src={checked ? activeIcon : inactiveIcon} style={{width: 48, height: 48}} />
    </Checkbox>
  );
}
```

### Disable text clicking

By setting the `labelDisabled` attribute, you can disable text click on the checkbox.

```jsx
import { Checkbox } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [checked, setChecked] = useState(true);

  return (
    <Checkbox value={checked} labelDisabled>
      Checkbox
    </Checkbox>
  );
}
```

### Checkbox Group

Needs to be used with `CheckboxGroup`. The selected value is an array bound to the `CheckboxGroup` through `value`. The items in the array are the values set by the `name` attribute of the selected `Checkbox`.

```jsx
import { Checkbox, CheckboxGroup } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [result, setResult] = React.useState(['a', 'b']);
  const onChange = event => {
    setResult(event.detail);
  };

  return (
    <CheckboxGroup value={result} onChange={onChange}>
      <Checkbox name="a" dataName="a">
        Checkbox a
      </Checkbox>
      <Checkbox name="b" dataName="b">
        Checkbox b
      </Checkbox>
      <Checkbox name="c" dataName="c">
        Checkbox c
      </Checkbox>
    </CheckboxGroup>
  );
}
```

### The maximum selectable number is limited to 2.

```jsx
import { Checkbox, CheckboxGroup } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [result, setResult] = React.useState(['a', 'b']);
  const onChange = event => {
    setResult(event.detail);
  };

  return (
    <CheckboxGroup value={result} onChange={onChange} max={2}>
      <Checkbox name="a" dataName="a">
        Checkbox a
      </Checkbox>
      <Checkbox name="b" dataName="b">
        Checkbox b
      </Checkbox>
      <Checkbox name="c" dataName="c">
        Checkbox c
      </Checkbox>
    </CheckboxGroup>
  );
}
```

### Use with cell component

At this point, you need to introduce the `Cell` and `CellGroup` components, and manually trigger the toggle by using the checkbox's toggle method.

```jsx
import { Checkbox, CheckboxGroup, CellGroup, Cell } from '@ray-js/smart-ui';
import React, { useState } from 'react';
import { getCurrentPages } from '@ray-js/ray'

export default function Demo() {
  const list = ['a', 'b', 'c'];
  const [result, setResult] = React.useState(['a', 'b']);
  const onChange = event => {
    setResult(event.detail);
  };
  const toggle = index => {
    const pages = getCurrentPages();
    const pageInstall = pages[pages.length - 1];
    const checkbox = pageInstall.selectComponent(`#checkboxes-${index}`);
    checkbox.toggle();
  };
  return (
    <CheckboxGroup value={result} onChange={onChange}>
      <CellGroup>
        {list.map((item, index) => {
          return (
            <Cell
              title={`Checkbox ${item}`}
              valueClass="value-class"
              clickable
              dataIndex={index}
              onClick={() => {
                toggle(index);
              }}
            >
              <Checkbox id={`checkboxes-${index}`} name={item} dataName={item} />
            </Cell>
          );
        })}
      </CellGroup>
    </CheckboxGroup>
  );
}
```

```css
.value-class {
  flex: none !important;
}
```

## API

### Checkbox Props

| Parameter | Description | Type | Default |
| ------------- | ------------------------------- | ------------------ | --------- |
| checkedColor  | Choose status color                    | _string_           | `#1989fa` |
| disabled      | Whether to disable a single selection box                  | _boolean_          | `false`   |
| iconSize      | icon size                       | _string \| number_ | `20px`    |
| labelDisabled | Whether to disable the content box content click          | _boolean_          | `false`   |
| labelPosition | Text position, optional values are `left`       | _string_           | `right`   |
| name          | Identify Checkbox Name              | _string_           | -         |
| shape         | Shape, optional values are `round` `square` | _string_           | `round`   |
| useIconSlot   | Whether to use icon slot             | _boolean_          | `false`   |
| value         | Selected or not                  | _boolean_          | `false`   |

### CheckboxGroup Props

| Parameter | Description | Type | Default Value |
| -------- | ---------------------- | --------- | ------------- |
| disabled | Whether to disable all single -choice boxes     | _boolean_ | `false`       |
| max      | Set the maximum optional number         | _number_  | `0`(Unlimited) |
| name     | The identifier when submitted in the form | _string_  | -             |
| value    | All selected items NAME      | _Array_   | -             |

### Checkbox Event

| Event Name | Description | Callback Parameter |
| -------- | ------------------------ | ------------ |
| onChange | Event triggered when the bound value changes | Current component value |

### Checkbox 外部样式类

| Class Name | Description |
| ----------- | -------------- |
| customClass | Root node style class   |
| iconClass   | Icon Style Class     |
| labelClass  | Description Information Style Class |

### CheckboxGroup Event

| Event Name | Description | Callback Parameters |
| -------- | ------------------------ | ------------ |
| onChange | Event triggered when the bound value changes | Current component value |

### Checkbox Slot

| Name | Description |
| ---- | ---------- |
| -    | Custom Text |
| icon | Custom Icons |

### Checkbox Method

The checkbox instance can be obtained and its methods called using selectComponent.

| Method Name | Parameters | Return Value | Description |
| ------ | ---- | ------ | ------------ |
| toggle | -    | -      | Toggle selection state |
