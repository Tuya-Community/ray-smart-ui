---
category: Data Entry
---

# Radio

### Introduction

Single selection among a group of options.

### Import

```jsx
import { Radio, RadioGroup } from '@ray-js/smart-ui';
```

## Code Examples

### Basic Usage

Bind the `value` to the name of the currently selected item.

```jsx
import { Radio, RadioGroup } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [radio, setRadio] = useState('1');

  const onChange = event => {
    setRadio(event.detail);
  };

  return (
    <RadioGroup value={radio} onChange={onChange}>
      <Radio name="1" customClass="demo-radio-inline" />
      <Radio name="2" customClass="demo-radio-inline" />
    </RadioGroup>
  );
}
```

```css
.demo-radio-inline {
  margin: 10px 0 0 20px;
  display: inline-block !important;
}
```

### Disabled State

The `disabled` property prohibits option switching. Setting `disabled` on `Radio` can disable an individual option.

```jsx
import { Radio, RadioGroup } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [radio, setRadio] = useState('1');

  const onChange = event => {
    setRadio(event.detail);
  };

  return (
    <RadioGroup disabled value={radio} onChange={onChange}>
      <Radio name="1" customClass="demo-radio-inline" />
      <Radio name="2" customClass="demo-radio-inline" />
    </RadioGroup>
  );
}
```

### Custom Shape

Set the `shape` attribute to `square`, and the shape of the radio button becomes square.

```jsx
import { Radio, RadioGroup } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [radio, setRadio] = useState('1');

  const onChange = event => {
    setRadio(event.detail);
  };

  return (
    <RadioGroup value={radio} onChange={onChange}>
      <Radio name="1" shape="square" customClass="demo-radio-inline" />
      <Radio name="2" shape="square" customClass="demo-radio-inline" />
    </RadioGroup>
  );
}
```

### Custom Color

Use the `checkedColor` property to set the icon color when selected.

```jsx
import { Radio, RadioGroup } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [radio, setRadio] = useState('1');

  const onChange = event => {
    setRadio(event.detail);
  };

  return (
    <RadioGroup value={radio} onChange={onChange}>
      <Radio name="1" customClass="demo-radio-inline" checkedColor="#10D0D0" />
      <Radio name="2" customClass="demo-radio-inline" checkedColor="#10D0D0" />
    </RadioGroup>
  );
}
```

### Custom Size

The size of the icon can be customized with the `iconSize` property.

```jsx
import { Radio, RadioGroup } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [radio, setRadio] = useState('1');

  const onChange = event => {
    setRadio(event.detail);
  };

  return (
    <RadioGroup value={radio} onChange={onChange}>
      <Radio name="1" iconSize="28px" customClass="demo-radio-inline" />
      <Radio name="2" iconSize="28px" customClass="demo-radio-inline" />
    </RadioGroup>
  );
}
```

### Custom Text

Custom text content can be set through children nodes.

```jsx
import { Radio, RadioGroup } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [radio, setRadio] = useState('1');

  const onChange = event => {
    setRadio(event.detail);
  };

  return (
    <RadioGroup value={radio} onChange={onChange}>
      <Radio name="1">Radio 1</Radio>
      <Radio name="2">Radio 2</Radio>
    </RadioGroup>
  );
}
```

### Horizontal Arrangement

Set the `direction` property to `horizontal`, and the radio button group will be arranged horizontally.

```jsx
import { Radio, RadioGroup } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [radio, setRadio] = useState('1');

  const onChange = event => {
    setRadio(event.detail);
  };

  return (
    <RadioGroup value={radio} onChange={onChange} direction="horizontal">
      <Radio name="1" customClass="demo-radio">Radio 1</Radio>
      <Radio name="2" customClass="demo-radio">Radio 2</Radio>
    </RadioGroup>
  );
}
```

```css
.demo-radio {
  margin: 10px 0 0 20px;
}
```

### Custom Icons

Use the `icon` slot to customize the icon. The `useIconSlot` property needs to be set.

```jsx
import { Radio, RadioGroup, Image } from '@ray-js/smart-ui';
import React, { useState } from 'react';

const icon = {
  normal: 'https://images.tuyacn.com/content-platform/hestia/1729664215ebd89f13e54.png',
  active: 'https://images.tuyacn.com/content-platform/hestia/1730877912e76cbdb7563.png',
};

export default function Demo() {
  const [radio, setRadio] = useState('1');

  const onChange = event => {
    setRadio(event.detail);
  };

  return (
    <RadioGroup value={radio} onChange={onChange}>
      <Radio
        name="1"
        customClass="demo-radio"
        useIconSlot
        slot={{
          icon: (
            <Image
              src={radio === '1' ? icon.active : icon.normal}
              width="20px"
              height="20px"
              fit="cover"
            />
          ),
        }}
      >
        Custom Icon
      </Radio>
      <Radio
        name="2"
        customClass="demo-radio"
        useIconSlot
        slot={{
          icon: (
            <Image
              src={radio === '2' ? icon.active : icon.normal}
              width="20px"
              height="20px"
              fit="cover"
            />
          ),
        }}
      >
        Custom Icon
      </Radio>
    </RadioGroup>
  );
}
```

### Disable Text Click

You can disable radio button text clicks by setting the `labelDisabled` property.

```jsx
import { Radio, RadioGroup } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [radioLabel, setRadio] = useState('1');

  const onChange = event => {
    setRadio(event.detail);
  };

  return (
    <RadioGroup value={radioLabel} onChange={onChange}>
      <Radio labelDisabled name="1">
        Radio 1
      </Radio>
      <Radio label-disabled name="2">
        Radio 2
      </Radio>
    </RadioGroup>
  );
}
```

### Using with Cell Component

In this case, you also need to import the `Cell` and `CellGroup` components.

```jsx
import { Radio, RadioGroup, CellGroup, Cell } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [radio, setRadio] = useState('1');

  const onClick = event => {
    const { name } = event.currentTarget.dataset;
    setRadio(name);
  };

  return (
    <RadioGroup value={radio}>
      <CellGroup>
        <Cell
          title="Radio 1"
          clickable
          data-name="1"
          slot={{ rightIcon: <Radio name="1" /> }}
          onClick={onClick}
        />
        <Cell
          title="Radio 2"
          clickable
          data-name="2"
          slot={{ rightIcon: <Radio name="2" /> }}
          onClick={onChange}
        />
      </CellGroup>
    </RadioGroup>
  );
}
```

### prevent default UI Actions

if `UI Update` Need Custom Action, you can set preventDefault with it!

```jsx
import { Radio, RadioGroup } from '@ray-js/smart-ui';
import React, { useState } from 'react';
import { showModal } from '@ray-js/ray';

export default function Demo() {
  const [radio, setRadio] = useState('1');

    const onPreventDefaultChange = event => {
    const value = event.detail;
    showModal({
      content: `onChange name: ${value}`,
      showCancel: true,
      success: (res) => {
        if (res.confirm) {
          setRadioPreventDefault(value);
        }
      }
    })
  }

  return (
    <RadioGroup value={radio} preventDefault onChange={}>
      <Radio name="1">Radio 1</Radio>
      <Radio name="2">Radio 2</Radio>
    </RadioGroup>
  );
}
```

## API

### RadioGroup Props

| Attribute              | Description                             | Type      | Default   |
| ---------------------- | --------------------------------------- | --------- | ---------- |
| direction | Arrangement direction, optional `horizontal` | _string_ | `vertical` |
| disabled | Whether to disable all radios | _boolean_ | `false` |
| name | Identifier for submission in a form | _string_ | - |
| value | Identifier for the currently selected item | _any_ | - |
| preventDefault `v2.3.8` | prevent default ui update | _boolean_ | `false` |

### Radio Props

| Attribute          | Description                    | Type               | Default    |
| ------------------ | -----------------------------  | ------------------ | ---------  |
| checkedColor | Checked state color | _string_ | `#1989fa` |
| disabled | Whether it is in disabled state | _boolean_ | `false` |
| iconSize | Icon size, default unit is `px` | _string \| number_ | `24px` |
| labelDisabled | Whether to disable text click | _boolean_ | `false` |
| labelPosition | Text position, optional `left` | _string_ | `right` |
| name | Identifier | _string_ | - |
| shape | Shape, optional `square` | _string_ | `round` |
| useIconSlot | Whether to use icon slot | _boolean_ | `false` |

### Radio Event

| Event Name   | Description                       | Callback Parameters   |
| ------------ | --------------------------------- | --------------------- |
| onChange | Event triggered when the bound value changes | Name of the currently selected item |

### Radio External Style Class

| Class Name   | Description                       |
| ------------ | --------------------------------- |
| customClass | Root Node Style Class |
| iconClass | Icon Style Class |
| labelClass | Description Information Style Class |

### RadioGroup Event

| Event Name   | Description                       | Callback Parameters   |
| ------------ | --------------------------------- | --------------------- |
| onChange | Event triggered when the bound value changes | Name of the currently selected item |

### Style Variables

The component offers the following CSS variables for custom styles. For usage, please refer to the [ConfigProvider component](/material/smartui?comId=config-provider).

| Name                          | Default Value                            | Description |
| ----------------------------- | ---------------------------------------- | ----------- |
| --radio-size | 24px | Size of the radio button |
| --radio-border-color | var(--app-B6-N6, rgba(0, 0, 0, 0.2)) | Border color of the radio button |
| --radio-border-radius | 4px | Border radius of the radio button |
| --radio-transition-duration | 0.2s | Transition duration of the radio button |
| --radio-label-size | 12px | Font size of the radio button label |
| --radio-label-margin | 10px | Margin of the radio button label |
| --radio-label-color | var(--app-B6-N1, rgba(0, 0, 0, 1)) | Font color of the radio button label |
| --radio-checked-icon-color | var(--app-M4, #1989fa) | Icon color when the radio button is checked |
| --radio-disabled-label-color | var(--app-B6-N5, rgba(0, 0, 0, 0.3)) | Label color when the radio button is disabled |
| --radio-disabled-opacity | 0.3 | Opacity when the radio button is disabled |