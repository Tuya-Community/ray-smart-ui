---
category: Data Entry
---


# Cascader

### Introduction

Cascading selection box, used for multi-level data selection, a typical scenario is province-city-district selection.

### Introduce

```jsx
import { Cascader } from '@ray-js/smart-ui';
```

## Code demonstration

### Basic Usage

The cascading selection component can be used in conjunction with the Field and Popup components, as shown in the example below:

```jsx
import { Cascader, Field, Popup } from '@ray-js/smart-ui';
import React, { useCallback, useState } from 'react';

const options = [
  {
    text: 'Zhejiang Province',
    value: '330000',
    className: 'test',
    options: [
      {
        text: 'Hangzhou City',
        value: '330100',
        options: [
          {
            text: 'Upper City District',
            value: '330102',
          },
          {
            text: 'Lower Town District',
            value: '330103',
          },
          {
            text: 'Jianggan District',
            value: '330104',
          },
        ],
      },
    ],
  },
];

export default function Demo() {
  const [visible, setVisible] = useState(false);
  const [result, setResult] = useState('');
  const [value, setValue] = useState('');
  const showArea = useCallback(() => {
    setVisible(true);
  }, []);
  const onClose = useCallback(() => {
    setVisible(false);
  }, []);
  const onFinish = useCallback(() => {
    const { selectedOptions, value } = e.detail;
    const result = selectedOptions.map(option => option.text).join('/');
    setValue(value);
    setResult(result);
    setVisible(false);
  }, []);
  return (
    <>
      <Field
        value={result}
        isLink
        readonly
        label="region"
        placeholder="Please select a region"
        onTap={showArea}
      />
      <Popup show={visible} round position="bottom">
        {visible && (
          <Cascader
            value={value}
            title="Please select a region"
            options={options}
            onClose={onClose}
            onFinish={onFinish}
          />
        )}
      </Popup>
    </>
  );
}
```

### Custom Color

Set the highlight color for the selected state using the `active-color` property.

```jsx
import { Cascader, Field, Popup } from '@ray-js/smart-ui';
import React, { useCallback, useState } from 'react';

const options = [
  {
    text: 'Zhejiang Province',
    value: '330000',
    className: 'test',
    options: [
      {
        text: 'Hangzhou City',
        value: '330100',
        options: [
          {
            text: 'Shangcheng District',
            value: '330102',
          },
          {
            text: 'Downtown District',
            value: '330103',
          },
          {
            text: 'Jianggan District',
            value: '330104',
          },
        ],
      },
    ],
  },
];

export default function Demo() {
  const [visible, setVisible] = useState(false);
  const [result, setResult] = useState('');
  const [value, setValue] = useState('');
  const showArea = useCallback(() => {
    setVisible(true);
  }, []);
  const onClose = useCallback(() => {
    setVisible(false);
  }, []);
  const onFinish = useCallback(() => {
    const { selectedOptions, value } = e.detail;
    const result = selectedOptions.map(option => option.text).join('/');
    setValue(value);
    setResult(result);
    setVisible(false);
  }, []);
  return (
    <>
      <Field
        value={result}
        isLink
        readonly
        label="Region"
        placeholder="Please select a region"
        onTap={showArea}
      />
      <Popup show={visible} round position="bottom">
        {visible && (
          <Cascader
            activeColor="#ee0a24"
            value={value}
            title="Please select a region"
            options={options}
            onClose={onClose}
            onFinish={onFinish}
          />
        )}
      </Popup>
    </>
  );
}
```

### Asynchronous Loading Options

You can listen to the `change` event and dynamically set `options` to achieve asynchronous loading of options.

```jsx
import { Cascader, Field, Popup } from '@ray-js/smart-ui';
import React, { useCallback, useState } from 'react';

const asyncOptions2 = [
  { text: 'Hangzhou', value: '330100' },
  { text: 'Ningbo City', value: '330200' },
];

export default function Demo() {
  const [visible, setVisible] = useState(false);
  const [result, setResult] = useState('');
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([
    {
      text: 'Zhejiang Province',
      value: '330000',
      options: [],
    },
  ]);
  const showArea = useCallback(() => {
    setVisible(true);
  }, []);
  const onClose = useCallback(() => {
    setVisible(false);
  }, []);
  const onFinish = useCallback(() => {
    const { selectedOptions, value } = e.detail;
    const result = selectedOptions.map(option => option.text).join('/');
    setValue(value);
    setResult(result);
    setVisible(false);
  }, []);

  const loadDynamicOptions = useCallback(
    e => {
      const { value } = e.detail;
      if (value === '330000') {
        const data = [...options];
        data[0].options = asyncOptions2;
        setTimeout(() => {
          setOptions(data);
        }, 500);
      }
    },
    [options]
  );
  return (
    <>
      <Field
        value={result}
        isLink
        readonly
        label="Region"
        placeholder="Please select a region"
        onTap={showArea}
      />
      <Popup show={visible} round position="bottom">
        {visible && (
          <Cascader
            value={value}
            options={options}
            title="Please select a region"
            onClose={onClose}
            onFinish={onFinish}
            onChange={loadDynamicOptions}
          />
        )}
      </Popup>
    </>
  );
}
```

## API

### Props

| Parameter         | Description                                                           | Type               | Default Value    |
| ------------ | -------------------------------------------------------------- | ------------------ | --------- |
| title        | Top title                                                       | _string_           | -         |
| value        | The value of the selected item                                                     | _string \| number_ | -         |
| options      | Optional data source                                                   | _CascaderOption[]_ | `[]`      |
| placeholder  | The prompt copy when the unlicensed                                             | _string_           | `请选择`  |
| activeColor  | Choose the high bright color of the state                                             | _string_           | `#1989fa` |
| swipeable    | Whether to turn on the gesture to slide left and right                                       | _boolean_          | `false`   |
| closeable    | Whether to show off the icon                                               | _boolean_          | `true`    |
| showHeader   | Whether to display the title bar                                                 | _boolean_          | `true`    |
| closeIcon    | Close icon name or image link, equivalent to the name attribute of the Icon component [name attribute](#/icon) | _string_           | `cross`   |
| useTitleSlot | Whether to use a custom title slot                                       | _boolean_          | `false`   |

### CascaderOption Data Structure

`options` property is an array of objects, each object in the array configures an option. An object may contain the following values:

| Key Name      | Description                     | Type                        |
| --------- | ------------------------ | --------------------------- |
| text      | Option text (required)         | _string_                    |
| value     | Value corresponding to the option (required)     | _string \| number_          |
| color     | Option text color             | _string_                    |
| options   | Sub-option List               | _CascaderOption[]_          |
| disabled  | Disable option?             | _boolean_                   |
| className | Add additional class to the corresponding column | _string \| Array \| object_ |

### Events

| Event       | Description                   | Callback Parameters                                                                                         |
| ---------- | ---------------------- | ------------------------------------------------------------------------------------------------ |
| onChange   | Triggered when the selected item changes       | event.detail：_{ value: string \| number, selectedOptions: CascaderOption[], tabIndex: number }_ |
| onFinish   | Triggered after all options are selected | event.detail：_{ value: string \| number, selectedOptions: CascaderOption[], tabIndex: number }_ |
| onClose    | Triggered when the close icon is clicked     | -                                                                                                |
| onClickTab | Triggered upon clicking the label         | event.detail：_{ tabIndex: number, title: string }_                                              |

### Slots

| Name  | Explanation           | Parameter |
| ----- | -------------- | ---- |
| title | Custom Top Title | -    |
