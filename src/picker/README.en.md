---
category: Feedback
---


# Picker

### Introduce

Provide multiple option sets for users to choose from. Supports single or multi-column cascading selection. Typically used with the [Popup](#/popup) component.

### Introduce

```jsx
import { Picker } from '@ray-js/smart-ui';
```

## Code demonstration

### Basic usage

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

  return <Picker columns={['Hangzhou', 'Ningbo', 'Wenzhou', 'Jiaxing', 'Huzhou']} onChange={onChange} />;
}
```

### Multi -row usage

```javascript
import { Picker } from '@ray-js/smart-ui';
import { showToast } from '@ray-js/ray';
import React, { useCallback } from 'react';

const columns = [
  {
    values: new Array(100).fill(1).map((x, i) => i),
  },
  {
    values: ['.'],
  },
  {
    values: new Array(10).fill(1).map((x, i) => i),
    unit: 'Kg',
  },
];

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

### Selected by default

A single-column selector can set the initial selected item index directly through the `defaultIndex` property.

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

### Show the top column

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
      title="title"
      defaultIndex={2}
      columns={['Hangzhou', 'Ningbo', 'Wenzhou', 'Jiaxing', 'Huzhou']}
      onChange={onChange}
    />
  );
}
```

### Multi -row linkage

```javascript
import { Picker } from '@ray-js/smart-ui';
import React, { useCallback } from 'react';

const columns = [
  {
    values: ['Zhejia', 'Fujian'],
    className: 'column1',
    unit: 'Province',
  },
  {
    values: ['Hangzhou', 'Ningbo', 'Wenzhou', 'Jiaxing', 'Huzhou'],
    className: 'column2',
    defaultIndex: 2,
    unit: 'city',
  },
];

const citys = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou', 'Jiaxing', 'Huzhou'],
  Fujian: ['Fuzhou', 'Xiamen', 'Putian', 'Trimidity', 'Quanzhou'],
};

export default function Demo() {
  const onChange = useCallback(event => {
    const { picker, value } = event.detail;
    picker.setColumnValues(1, citys[value[0]]);
  }, []);

  return <Picker columns={columns} onChange={onChange} />;
}
```

### disable option

The options can be the object structure, and the option can be disabled by setting Disabled.

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

### Loading status

When the Picker data is obtained asynchronously, the loading prompt can be displayed through the 'loading' attribute.

```javascript
import { Picker } from '@ray-js/smart-ui';
import React, { useCallback } from 'react';

export default function Demo() {
  return <Picker loading columns={['Hangzhou', 'Ningbo', 'Wenzhou', 'Jiaxing', 'Huzhou']} />;
}
```

## API

### Props

| Parameters        | Description                                                                                                                                   | Type      | Default value |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------------- |
| activeIndex       | The currently selected item index of the single-column selector. For multi-column selectors, please refer to the Columns configuration below. | _number_  | `-1`          |
| cancelButtonText  | Cancel button text                                                                                                                            | _string_  | `Cancel`      |
| columns           | Object number, configure the data displayed in each column                                                                                    | _Array_   | `[]`          |
| confirmButtonText | Confirm the button text                                                                                                                       | _string_  | `confirm`     |
| defaultIndex      | Default selected item index for single column selector. For multi-column selector, please refer to the Columns configuration below.           | _number_  | `0`           |
| itemHeight        | Height                                                                                                                                        | _number_  | `44`          |
| loading           | Whether to display loading status                                                                                                             | _boolean_ | `false`       |
| showToolbar       | Whether to display the top column                                                                                                             | _boolean_ | `false`       |
| title             | Top column title                                                                                                                              | _string_  | `''`          |
| toolbarPosition   | Top bar position, optional value: 'bottom'                                                                                                    | _string_  | `top`         |
| unit              | The default unit for a single column selector. For multi-column selectors, please refer to the Columns configuration below.                   | _number_  | ''            |
| valueKey          | In the option object, the key corresponding to the text                                                                                       | _string_  | `text`        |
| visibleItemCount  | Visible number of options                                                                                                                     | _number_  | `6`           |

### Events

The Picker component event returns different parameters depending on whether columns is single-column or multi-column.

| Event Name | Description                      | Parameters                                             |
| ---------- | -------------------------------- | ------------------------------------------------------ |
| onConfirm  | Trigger when clicking the button | Single column: Selected value, Index of selected value |
Multiple columns: All selected values of columns, Indices of all selected values of columns                     |
| onCancel | Trigger when clicking the cancel button | Single Column: Selected Value, Index of Selected Value<br>Multiple Columns: All Selected Values, Indices of All Selected Values |
| onChange | Triggered when the option is changed | Single Column: Picker instance, selected value, index of the selected value
Multiple Columns: Picker instance, selected values for all columns, index corresponding to the current column |

### Columns Data structure

When multiple columns of data are passed in, `columns` is an array of objects. Each object in the array configures each column. Each column has the following `key`.

| key          | illustrate                                           |
| ------------ | ---------------------------------------------------- |
| activeIndex  | The index currently selected, the default -1         |
| defaultIndex | The index of the initial selection, the default is 0 |
| unit         | The corresponding unit is empty default              |
| values       | Corresponding alternative value in columns           |

### External style

| Class Name   | Description             |
| ------------ | ----------------------- |
| activeClass  | Choose a model category |
| columnClass  | Column style            |
| customClass  | Root node nodes         |
| toolbarClass | Top column style        |

### method

You can obtain the picker instance through selectComponent and call the instance method.

| Method Name     | Parameter                | Return Value | Introduction                                          |
| --------------- | ------------------------ | ------------ | ----------------------------------------------------- |
| getColumnIndex  | columnIndex              | optionIndex  | Get the index of the corresponding selection          |
| getColumnValue  | columnIndex              | value        | Get the value of the corresponding selection          |
| getColumnValues | columnIndex              | values       | Get all the options in the corresponding column       |
| getIndexes      | -                        | indexes      | Get all the indexes corresponding to the medium value |
| getValues       | -                        | values       | Get all the selected values                           |
| setColumnIndex  | columnIndex, optionIndex | -            | Set the index of the corresponding selected item      |
| setColumnValue  | columnIndex, value       | -            | Set the value of the corresponding selection          |
| setColumnValues | columnIndex, values      | -            | Set all the options in the corresponding column       |
| setIndexes      | indexes                  | -            | Set all the indexes corresponding to the medium value |
| setValues       | values                   | -            | Set all the selected values                           |
