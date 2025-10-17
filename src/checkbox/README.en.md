---
category: Data Entry
---

# Checkbox

### Introduction

Select multiple options from a set of alternatives.

### Import

```jsx
import { Checkbox, CheckboxGroup } from '@ray-js/smart-ui';
```

## Code Examples

### Basic Usage

Bind the checkbox's checked state through `value`.

```jsx
import { Checkbox } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [checked, setChecked] = useState(true);

  const onChange = event => {
    setChecked(event.detail);
  };

  const onChange2 = event => {
    setChecked(!event.detail);
  };

  return (
    <>
      <Checkbox
        value={checked}
        customClass="demo-checkbox-inline"
        onChange={onChange}
      />
      <Checkbox
        value={!checked}
        customClass="demo-checkbox-inline"
        onChange={onChange2}
      />
    </>
  );
}
```

```css
.demo-checkbox-inline {
  margin: 10px 0 0 20px;
  display: inline-block !important;
}
```

### Disabled State

You can disable the checkbox by setting the `disabled` property.

```jsx
import { Checkbox } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <>
      <Checkbox disabled value={false} customClass="demo-checkbox-inline" />
      <Checkbox disabled value customClass="demo-checkbox-inline" />
    </>
  );
}
```

### Custom Shape

Set the `shape` property to `square`, and the checkbox will become square-shaped.

```jsx
import { Checkbox } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [checked, setChecked] = useState(true);

  const onChange = event => {
    setChecked(event.detail);
  };

  const onChange2 = event => {
    setChecked(!event.detail);
  };

  return (
    <>
      <Checkbox
        value={checked}
        shape="square"
        customClass="demo-checkbox-inline"
        onChange={onChange}
      />
      <Checkbox
        value={!checked}
        shape="square"
        customClass="demo-checkbox-inline"
        onChange={onChange2}
      />
    </>
  );
}
```

### Custom Color

Customize the icon color in checked state through the `checkedColor` property.

```jsx
import { Checkbox } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [checked, setChecked] = useState(true);

  const onChange = event => {
    setChecked(event.detail);
  };

  const onChange2 = event => {
    setChecked(!event.detail);
  };

  return (
    <>
      <Checkbox
        value={checked}
        checkedColor="#10D0D0"
        customClass="demo-checkbox-inline"
        onChange={onChange}
      />
      <Checkbox
        value={!checked}
        checkedColor="#10D0D0"
        customClass="demo-checkbox-inline"
        onChange={onChange2}
      />
    </>
  );
}
```

### Custom Size

Customize the icon size through the `iconSize` property.

```jsx
import { Checkbox } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [checked, setChecked] = useState(true);

  const onChange = event => {
    setChecked(event.detail);
  };

  const onChange2 = event => {
    setChecked(!event.detail);
  };

  return (
    <>
      <Checkbox
        iconSize="28px"
        value={checked}
        customClass="demo-checkbox-inline"
        onChange={onChange}
      />
      <Checkbox
        iconSize="28px"
        value={!checked}
        customClass="demo-checkbox-inline"
        onChange={onChange2}
      />
    </>
  );
}
```

### Display Text

Customize text content through child nodes.

```jsx
import { Checkbox } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [checked, setChecked] = useState(true);

  const onChange = event => {
    setChecked(event.detail);
  };

  return (
    <Checkbox
      value={checked}
      customClass="demo-checkbox"
      onChange={onChange}
    >
      Custom Text
    </Checkbox>
  );
}
```

### Custom Icon

Customize the icon through the icon slot.

```jsx
import { Checkbox } from '@ray-js/smart-ui';
import React, { useState } from 'react';
import { Image } from '@ray-js/ray';

const activeIcon = 'https://images.tuyacn.com/content-platform/hestia/1729664215ebd89f13e54.png';
const inactiveIcon = 'https://images.tuyacn.com/content-platform/hestia/1730877912e76cbdb7563.png';

export default function Demo() {
  const [checked, setChecked] = useState(true);

  const onChange = event => {
    setChecked(event.detail);
  };

  return (
    <Checkbox
      useIconSlot
      value={checked}
      onChange={onChange}
      slot={{
        icon: (
          <Image
            style={{ width: 40, height: 40 }}
            mode="widthFix"
            src={checked ? activeIcon : inactiveIcon}
          />
        ),
      }}
      customClass="demo-checkbox"
    >
      Custom Icon
    </Checkbox>
  );
}
```

```css
.demo-checkbox {
  margin: 10px 0 0 20px;
}
```

### Disable Label Click

Disable checkbox text click by setting the `labelDisabled` property.

```jsx
import { Checkbox } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [checked, setChecked] = useState(true);

  return (
    <Checkbox
      labelDisabled
      value={checked}
      onChange={onChange}
      customClass="demo-checkbox"
    >
      Checkbox
    </Checkbox>
  );
}
```

### Checkbox Group

Need to be used with `CheckboxGroup`. The selected value is an array, bound to `value` on `CheckboxGroup`. Items in the array are the values set by the `name` property of the selected `Checkbox`.

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

### Limit Maximum Selectable Number to 2

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

### Use with Cell Component

In this case, you need to import `Cell` and `CellGroup` components and manually trigger the toggle through the checkbox's toggle method.

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
              key={item}
              title={`Checkbox ${item}`}
              valueClass="value-class"
              clickable
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

| Attribute       | Description                      | Type               | Default   |
| --------------- | -------------------------------- | ------------------ | --------- |
| checkedColor | Checked state color | _string_ | `#1989fa` |
| disabled | Whether the checkbox is disabled | _boolean_ | `false` |
| iconSize | Icon size | _string \| number_ | `24px` |
| labelDisabled | Whether to disable text click | _boolean_ | `false` |
| labelPosition | Text position, `left` option | _string_ | `right` |
| name | Checkbox name identifier | _string_ | - |
| shape | Shape, `round` or `square` | _string_ | `round` |
| useIconSlot | Whether to use icon slot | _boolean_ | `false` |
| value | Whether it’s checked | _boolean_ | `false` |

### CheckboxGroup Props

| Attribute           | Description                       | Type      | Default      |
| ------------------- | --------------------------------- | --------- | ------------ |
| direction | Orientation, `horizontal` option | _string_ | `vertical` |
| disabled | Whether all checkboxes are disabled | _boolean_ | `false` |
| max | Set maximum selection count | _number_ | `0` (no limit) |
| name | Identifier in a form submission | _string_ | - |
| value | Names of all selected items | _Array_ | - |

### Checkbox Event

| Event Name   | Description                    | Callback Parameter |
| ------------ | ------------------------------ | ------------------ |
| onChange | Triggered when the bound value changes | Current component value |

### Checkbox External Style Classes

| Class Name    | Description          |
| ------------- | -------------------- |
| customClass | Root node style class |
| iconClass | Icon style class |
| labelClass | Description style class |

### CheckboxGroup Event

| Event Name   | Description                    | Callback Parameter |
| ------------ | ------------------------------ | ------------------ |
| onChange | Triggered when the bound value changes | Current component value |

### Checkbox Slot

| Name | Description    |
| ---- | -------------- |
| -    | Custom text    |
| icon | Custom icon |

### Checkbox Method

Get a checkbox instance with [selectComponent](/material/smartui?comId=faq) and call its methods.

| Method Name | Parameters | Return Value | Description      |
| ----------- | ---------- | ------------ | ---------------- |
| toggle | - | - | Toggle checked state |

### Style Variables

The component offers the following CSS variables for custom styles. For usage, please refer to the [ConfigProvider component](/material/smartui?comId=config-provider).

| Name                          | Default Value                          | Description                       |
| ----------------------------- | -------------------------------------- | --------------------------------- |
| --checkbox-size               | _24px_                                 | Size of the checkbox              |
| --checkbox-border-color       | _var(--app-B6-N6, rgba(0, 0, 0, 0.2))_ | Border color of the checkbox      |
| --checkbox-border-radius      | _4px_                                  | Border radius of the checkbox     |
| --checkbox-transition-duration| _0.2s_                                 | Transition duration of the checkbox |
| --checkbox-label-size         | _12px_                                 | Font size of the checkbox label   |
| --checkbox-label-margin       | _10px_                                 | Margin of the checkbox label      |
| --checkbox-label-color        | _var(--app-B6-N1, rgba(0, 0, 0, 1))_   | Color of the checkbox label       |
| --checkbox-checked-icon-color | _@M4_                                  | Icon color when the checkbox is checked |
| --checkbox-disabled-label-color| _var(--app-B6-N1, rgba(0, 0, 0, 1))_  | Label color when the checkbox is disabled |
| --checkbox-disabled-opacity   | _0.3_                                  | Opacity of the checkbox when disabled |