---
category: Data Entry
---

# Radio Single -choice

### Introduce

A single selection is performed in a group of preparations.

### Introduce

```jsx
import { Radio, RadioGroup } from '@ray-js/smart-ui';
```

## Code demonstration

### Basic usage

Bind the value of the currently selected item's name through `value`.

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

### Horizontal arrangement

After setting the `direction` attribute to `horizontal`, the radio button group will be arranged horizontally.

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
      <Radio name="1">Radio 1</Radio>
      <Radio name="2">Radio 2</Radio>
    </RadioGroup>
  );
}
```

### Disable

Disable switching options via the `disabled` attribute. Setting `disabled` on a `Radio` can disable a single option.

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
      <Radio name="1">Radio 1</Radio>
      <Radio name="2">Radio 2</Radio>
    </RadioGroup>
  );
}
```

### Custom shape

Set the `shape` attribute to `square`, and the radio button will become square-shaped.

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
      <Radio name="1" shape="square">
        Radio 1
      </Radio>
      <Radio name="2" shape="square">
        Radio 2
      </Radio>
    </RadioGroup>
  );
}
```

### Custom color

Set the icon color in the selected state through the `checkedColor` property.

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
      <Radio name="1" checkedColor="#07c160">
        Radio 1
      </Radio>
      <Radio name="2" checkedColor="#07c160">
        Radio 2
      </Radio>
    </RadioGroup>
  );
}
```

### Custom size

You can customize the icon size through the 'iconSize' property.

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
      <Radio name="1" iconSize="24px">
        Radio 1
      </Radio>
      <Radio name="2">Radio 2</Radio>
    </RadioGroup>
  );
}
```

### Custom icon

Customize icons through the `icon` slot. You need to set the `useIconSlot` property.

```jsx
import { Radio, RadioGroup, Image } from '@ray-js/smart-ui';
import React, { useState } from 'react';

const icon = {
  normal: 'https://static1.tuyacn.com/static/tuya-miniapp-doc/_next/static/images/logo-small.png',
  active: 'https://static1.tuyacn.com/static/tuya-miniapp-doc/_next/static/images/logo-small.png',
};

export default function Demo() {
  const [radio4, setRadio] = useState('1');

  const onChange = event => {
    setRadio(event.detail);
  };

  return (
    <RadioGroup value={radio4} dataKey="radio4" onChange={onChange}>
      <Radio name="1" useIconSlot>
        Custom icon
        <Image
          slot="icon"
          src={radio4 === '1' ? icon.active : icon.normal}
          width="20px"
          height="20px"
          fit="cover"
        />
      </Radio>
      <Radio name="2" useIconSlot>
        Custom icon
        <Image
          slot="icon"
          src={radio4 === '2' ? icon.active : icon.normal}
          width="20px"
          height="20px"
          fit="cover"
        />
      </Radio>
    </RadioGroup>
  );
}
```

### Disable text click

The `labelDisabled` attribute can disable clicking on the radio button text.

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

### Use with the Cell component

At this point, you need to introduce the `Cell` and `CellGroup` components.

```jsx
import { Radio, RadioGroup, CellGroup, Cell } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [radio, setRadio] = useState('1');

 const onChange = (event) => {
    setRadio(event.detail);
  };

 const onClick = (event) => {
    const { name } = event.currentTarget.dataset;
    setRadio(name);
  };
  return (
    <RadioGroup value={radio}>
      <CellGroup>
        <Cell title="Radio 1" clickable dataName="1" onClick={onClick}>
          <Radio slot="right-icon" name="1" />
        </Cell>
        <Cell title="Radio 2" clickable dataName="2" onClick={onClick}>
          <Radio slot="right-icon" name="2" />
        </Cell>
      </CellGroup>
    </RadioGroup>
  );
}
```

## API

### RadioGroup Props

| Parameters | Description                                   | Type      | Default value |
| ---------- | --------------------------------------------- | --------- | ------------- |
| direction  | Arrange direction, the optional value is      | _string_  | `vertical`    |
| disabled   | Whether to disable all single -choice boxes   | _boolean_ | `false`       |
| name       | The identifier when submitted in the form     | _string_  | -             |
| value      | The identifier of the currently selected item | _any_     | -             |

### Radio Props

| Parameters    | Description                                | Type               | Default value |
| ------------- | ------------------------------------------ | ------------------ | ------------- |
| checkedColor  | Choose status color                        | _string_           | `#1989fa`     |
| disabled      | Whether it is a disabled state             | _boolean_          | `false`       |
| iconSize      | The default unit for icon size is 'px'.    | _string \| number_ | `20px`        |
| labelDisabled | Whether to disable text content click      | _boolean_          | `false`       |
| labelPosition | Text position, optional values are 'left'. | _string_           | `right`       |
| name          | Identifier                                 | _string_           | -             |
| shape         | Shape, optional value is `square`          | _string_           | `round`       |
| useIconSlot   | Whether to use icon slot                   | _boolean_          | `false`       |

### Radio Event

| Event Name | Description                                    | Return parameters            |
| ---------- | ---------------------------------------------- | ---------------------------- |
| onChange   | Event triggered when the binding value changes | Currently selected item name |

### Radio External style

| Class Name  | Description                   |
| ----------- | ----------------------------- |
| customClass | Root node nodes               |
| iconClass   | Icon style                    |
| labelClass  | Description information style |

### RadioGroup Event

| Event Name | Description                                    | Return parameters            |
| ---------- | ---------------------------------------------- | ---------------------------- |
| onChange   | Event triggered when the binding value changes | Currently selected item name |
