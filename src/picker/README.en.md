---
category: Feedback
assets: LoopPicker
---

# Picker

### Introduction

Provides a collection of multiple options for users to choose from, supporting single-column and multi-column cascade selections. It is usually used in conjunction with the [Popup](/material/smartui?comId=popup) component.

### Import

```jsx
import { Picker } from '@ray-js/smart-ui';
```

## Code Example

### Basic Usage

In single column mode, the `active-index` attribute can control the selected item of the picker; `change-animation` can enable the transition animation effect for the selected value change of the picker.

```javascript
import { Picker } from '@ray-js/smart-ui';
import { showToast } from '@ray-js/ray';
import React, { useCallback } from 'react';

export default function Demo() {
  const [activeIndex, setActiveIndex] = useState(3);
  const onChange = useCallback(event => {
    const { value, index } = event.detail;
    setActiveIndex(index);
    showToast({
      icon: 'none',
      title: `Value: ${value}, Index：${index}`,
    });
  }, []);

  return <Picker activeIndex={activeIndex} changeAnimation columns={['Hangzhou', 'Ningbo', 'Wenzhou', 'Jiaxing', 'Huzhou']} onChange={onChange} />;
}
```

### Multi-Column Usage

`disabled` `v2.3.5` attribute can disable this column; `style` attribute can set the style of this column; `fontStyle` `v2.3.5` attribute can set the font style of this column; `activeIndex` can set the selected item of the column.

```javascript
import { Picker } from '@ray-js/smart-ui';
import { showToast } from '@ray-js/ray';
import React, { useCallback } from 'react';

const columns = [
  {
    values: new Array(100).fill(1).map((x, i) => i),
    style: { flex: 'none', width: 'auto', minWidth: '61px' },
    fontStyle: { fontSize: '16px' },
    activeIndex: 0,
  },
  {
    values: ['.'],
    disabled: true,
    style: { flex: 'none', width: '8px', display: 'flex', justifyContent: 'center' },
  },
  {
    values: new Array(20).fill(1).map((x, i) => i),
    style: { flex: 'none', width: 'auto', minWidth: '61px' },
    unit: 'Kg',
    activeIndex: 1,
  },
],

export default function Demo() {
  const onChange = useCallback(event => {
    const { value, index } = event.detail;
    showToast({
      icon: 'none',
      title: `Value: ${value}, Index：${index}`,
    });
  }, []);

  return (
    <Picker 
      columns={columns} 
      onChange={onChange} 
      activeStyle={{
        color: 'rgb(135, 180, 244)',
      }}
    />
  );
}
```


### Loop List `2.7.0`

`loop` can enable loop rendering of lists, which will be connected end-to-end and loop infinitely

```javascript
import { Picker } from '@ray-js/smart-ui';
import React from 'react';
const columns = [
  {
    values: new Array(100).fill(1).map((x, i) => i),
  },
];
export default function Demo() {
  return <Picker loop columns={columns} />;
}
```

### Default Selected Item

For a single-column picker, you can directly use the `defaultIndex` property to set the index of the initial selected item.

```javascript
import { Picker } from '@ray-js/smart-ui';
import { showToast } from '@ray-js/ray';
import React, { useCallback } from 'react';

export default function Demo() {
  const onChange = useCallback(event => {
    const { value, index } = event.detail;
    showToast({
      icon: 'none',
      title: `Value: ${value}, Index：${index}`,
    });
  }, []);

  return (
    <Picker
      defaultIndex={2}
      columns={['Hangzhou', 'Ningbo', 'Wenzhou', 'Jiaxing', 'Huzhou']}
      onChange={onChange}
    />
  );
}
```

### Display Top Bar

```javascript
import { Picker } from '@ray-js/smart-ui';
import { showToast } from '@ray-js/ray';
import React, { useCallback } from 'react';

export default function Demo() {
  const onChange = useCallback(event => {
    const { value, index } = event.detail;
    showToast({
      icon: 'none',
      title: `Value: ${value}, Index：${index}`,
    });
  }, []);

  return (
    <Picker
      showToolbar
      title="Title"
      defaultIndex={2}
      columns={['Hangzhou', 'Ningbo', 'Wenzhou', 'Jiaxing', 'Huzhou']}
      onChange={onChange}
    />
  );
}
```

### Multi-Column Linkage

```javascript
import { Picker } from '@ray-js/smart-ui';
import React, { useCallback } from 'react';

const citys = [
  ['Hangzhou', 'Ningbo', 'Wenzhou', 'Jiaxing', 'Huzhou'],
  ['Fuzhou', 'Xiamen', 'Putian', 'Sanming', 'Quanzhou'],
];

export default function Demo() {
  const [column, setColumn] = useState([
    {
      values: ['Zhejiang', 'Fujian'],
      className: 'column1',
      unit: 'Province',
    },
    {
      values: ['Hangzhou', 'Ningbo', 'Wenzhou', 'Jiaxing', 'Huzhou'],
      className: 'column2',
      defaultIndex: 2,
      unit: 'City',
    },
  ]);
  const onChange = useCallback(event => {
    const { value, index } = event.detail;
    const provinceIndex = column[0].values.findIndex(item => item === value[0]);
    const cityList = cities[provinceIndex];
    const cityIndex = index ? cityList.findIndex(item => item === value[1]) : 0;
    setColumn([
      {
        ...column[0],
        activeIndex: provinceIndex,
      },
      {
        ...column[1],
        activeIndex: cityIndex,
        values: cityList,
      },
    ]);
  }, []);

  return <Picker columns={columns} onChange={onChange} />;
}
```

### Disable Options

Options can be in object structure. Options can be disabled by setting the disabled attribute.

```javascript
import { Picker } from '@ray-js/smart-ui';
import { showToast } from '@ray-js/ray';
import React, { useCallback } from 'react';

const columns = [{ text: 'Hangzhou', disabled: true }, { text: 'Ningbo' }, { text: 'Wenzhou' }];

export default function Demo() {
  const onChange = useCallback(event => {
    const { value, index } = event.detail;
    showToast({
      icon: 'none',
      title: `Value: ${value}, Index：${index}`,
    });
  }, []);

  return <Picker columns={columns} onChange={onChange} />;
}
```

### Loading State

When Picker data is retrieved asynchronously, the `loading` attribute can be used to display a loading prompt.

```javascript
import { Picker } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Picker loading columns={['Hangzhou', 'Ningbo', 'Wenzhou', 'Jiaxing', 'Huzhou']} />;
}
```

### Set Column Style Order `v2.2.0`

By setting the `order` attribute of the column, you can set the order of the columns. The larger the column's order, the later it will appear, similar to the CSS `flex order` property. This only changes the order of columns from a styling perspective, without affecting the logic.

```javascript
import { Picker } from '@ray-js/smart-ui';
import React from 'react';
const columns = [
  {
    values: ['Zhejiang', 'Fujian'],
    order: 2,
  },
  {
    values: ['Hangzhou', 'Ningbo', 'Wenzhou', 'Jiaxing', 'Huzhou'],
    order: 1,
  },
];
export default function Demo() {
  return <Picker columns={columns} />;
}
```

### More 3D `2.7.0`

`fullHeight` property allows for more space to display and see more 3D-flipped items; of course, you can also override the component's height style to customize the visible space you need.

```javascript
import { Picker } from '@ray-js/smart-ui';
import React from 'react';
const columns = [
  {
    values: new Array(100).fill(1).map((x, i) => i),
  },
];
export default function Demo() {
  return <Picker fullHeight loop columns={columns} />;
}
```

## API

### Props

| Parameter          | Description                     | Type      | Default  |
| ------------------ | ------------------------------- | --------- | -------- |
| activeIndex | Current selected item index for single-column picker,<br>refer to Columns configuration for multi-column picker | _number_ | `-1` |
| cancelButtonText | Cancel button text | _string_ | `Cancel` |
| columns | Array of objects to configure data displayed in each column | _Array_ | `[]` |
| confirmButtonText | Confirm button text | _string_ | `Confirm` |
| defaultIndex | Default selected item index for single-column picker,<br>refer to Columns configuration for multi-column picker | _number_ | `0` |
| itemHeight | Option height | _number_ | `44` |
| loading | Whether to show loading state | _boolean_ | `false` |
| showToolbar | Whether to show the top bar | _boolean_ | `false` |
| title | Top bar title | _string_ | `''` |
| toolbarPosition | Top bar position, optional value is `bottom` | _string_ | `top` |
| unit | Default unit for single-column picker,<br>refer to Columns configuration for multi-column picker | _number_ | '' |
| valueKey | Key corresponding to text in option object | _string_ | `text` |
| visibleItemCount | Number of visible options | _3 \| 5 \| 7 \| 9_ | `5` |
| activeStyle `v2.0.0` | Style in selected state | _string_ | `''` |
| changeAnimation `v2.2.0` | Whether the component requires a transition animation when the value selected by data-driven changes (excluding the animation of finger interactive scrolling). | _boolean_ | `false` |
| animationTime `v2.3.7` | Transition animation and the delay time for selection callback (Unit: ms) | _number_ | `800` `v2.3.7` `300` `v2.6.0` |
| loop `v2.7.0` | Loop List | _boolean_ | `false` |
| fontStyle `v2.7.0` | Font style has lower priority than within columns | _string_ | - |
| fullHeight `v2.7.0` | Does the height directly equal `visibleItemCount * itemHeight`, the component will default to reduce the outer visible height by `* 0.9`. | _boolean_ | `false` |

### Events

The events of the Picker component return different parameters depending on whether `columns` is single-column or multi-column.

| Event Name    | Description         | Parameters                                                                                     |
| ------------- | ------------------- | ---------------------------------------------------------------------------------------------- |
| onCancel | Triggered when cancel button is clicked | Single column: selected value, index of selected value<br>Multi-column: all selected values, indexes of selected values |
| onChange | Triggered when the option changes | Single column: Picker instance, selected value, index of selected value<br>Multi-column: Picker instance, all selected values, index of the current column |
| onConfirm | Triggered when confirm button is clicked | Single column: selected value, index of selected value<br>Multi-column: all selected values, indexes of selected values |
| onAnimationStart `v2.3.0` | Component internal animation starts | - |
| onAnimationEnd `v2.3.0` | The internal animation of the component has ended. | - |

### Columns Data Structure

When passing in multi-column data, `columns` is an array of objects. Each object in the array configures each column, and each column has the following `key`.

| Key           | Description                         |
| ------------- | ----------------------------------- |
| activeIndex | Index of the currently selected item, default is -1 |
| defaultIndex | Index of the initially selected item, default is 0 |
| style `v2.0.0` | Column style |
| fontStyle `v2.3.5` | Column text style |
| unit | Unit corresponding to the column, default is empty |
| values | Array of options corresponding to the column |
| order `v2.2.0` | Set the order of columns, similar to `flex order` property, only changing the order from a style perspective; logic remains unchanged | _number_ | - |
| disabled `v2.3.5` | Disable this column | _boolean_ | `false` |
| loop `v2.7.0` | Loop List | _boolean_ | `false` |

### External Style Classes

| Class Name      | Description        |
| --------------- | ------------------ |
| columnClass | Column style class |
| customClass | Root node style class |
| toolbarClass | Top bar style class |
| hairlineClass `v2.6.0` | Style class of the dividing line |

### Methods

You can get the picker instance through [selectComponent](/material/smartui?comId=faq) and call its instance methods.

| Method Name     | Parameter          | Return Value | Description                  |
| --------------- | ------------------ | ------------ | ---------------------------- |
| getColumnIndex | columnIndex | optionIndex | Get the index of the selected item in the corresponding column |
| getColumnValue | columnIndex | value | Get the selected value in the corresponding column |
| getColumnValues | columnIndex | values | Get all options in the corresponding column |
| getIndexes | - | indexes | Get the indexes corresponding to the selected values in all columns |
| getValues | - | values | Get the selected values in all columns |
| setColumnIndex | columnIndex, optionIndex | - | Set the index of the selected item in the corresponding column |
| setColumnValue | columnIndex, value | - | Set the selected value in the corresponding column |
| setColumnValues | columnIndex, values | - | Set all options in the corresponding column |
| setIndexes | indexes | - | Set the indexes corresponding to the selected values in all columns |
| setValues | values | - | Set the selected values in all columns |

### Style Variables

The component provides the following CSS variables for custom styling. For usage, please refer to the [ConfigProvider component](/material/smartui?comId=config-provider).
| Name                              | Default Value                               | Description                       |
| --------------------------------- | -------------------------------------------- | --------------------------------- |
| --picker-background-color         | _var(--app-B4, #ffffff)_                     | Picker background color           |
| --picker-padding                  | _16px_                                       | Picker padding                    |
| --picker-toolbar-height           | _44px_                                       | Toolbar height                    |
| --picker-title-font-size          | _16px_                                       | Title font size                   |
| --picker-action-padding           | _0 @padding-md_                              | Action button padding             |
| --picker-action-font-size         | _14px_                                       | Action button font size           |
| --picker-confirm-action-color     | _#576b95_                                    | Confirm button color              |
| --picker-cancel-action-color      | _#969799_                                    | Cancel button color               |
| --picker-option-font-size         | _16px_                                       | Option font size                  |
| --picker-option-unit-font-size    | _12px_                                       | Unit font size                    |
| --picker-option-text-color        | _var(--app-B6-N3, rgba(0, 0, 0, 0.5))_       | Option text color                 |
| --picker-option-unit-text-color   | _var(--app-B6-N4, rgba(0, 0, 0, 0.4))_       | Unit text color                   |
| --picker-loading-icon-color       | _#1989fa_                                    | Loading icon color                |
| --picker-loading-mask-color       | _var(--app-B4, #ffffff)_                     | Loading mask color                |
| --picker-option-disabled-opacity  | _0.3_      | Disabled option opacity           |
| --picker-option-selected-text-color | _var(--app-B6-N1, rgba(0, 0, 0, 1))_       | Selected option text color        |
| --picker-option-unit-mid-size `v2.4.0` | _0_  `v2.4.0` _4px_ `v2.6.0` | Spacing between units and content text |
| --picker-option-selected-font-weight-bold `v2.6.0` | _700_ | Font weight of selected text |