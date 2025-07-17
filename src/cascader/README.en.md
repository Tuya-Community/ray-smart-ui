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

| Parameter        | Description                                                              | Type               | Default    |
| ---------------- | ------------------------------------------------------------------------ | ------------------ | ---------- |
| activeColor | Highlight color of the selected state | _string_ | `#1989fa` |
| closeIcon | svg value or URL of the close icon, equivalent to the Icon component's [name attribute](/material/smartui?comId=icon) | _string_ | `cross` |
| closeable | Whether to display the close icon | _boolean_ | `true` |
| ellipsis | Whether to truncate long title text, closing it will cause horizontal scrolling for long text | _boolean_ | `true` |
| options | Data source for options | _CascaderOption[]_ | `[]` |
| placeholder | Placeholder text when no option is selected | _string_ | `Please select` |
| showHeader | Whether to display the title bar | _boolean_ | `true` |
| swipeThreshold | Scroll threshold, horizontal scrolling will start when the number of labels exceeds the threshold and the total width exceeds the width of the label bar | _number_ | `5` |
| swipeable | Whether to enable left and right swipe gestures | _boolean_ | `false` |
| title | Top title | _string_ | - |
| useTitleSlot | Whether to use a custom title slot | _boolean_ | `false` |
| value | Value of the selected option | _string \| number_ | - |

### CascaderOption Data Structure

The `options` attribute is an array of objects where each object configures an option. The objects can include the following values:

| Key        | Description                   | Type                        |
| ---------- | ----------------------------- | --------------------------- |
| className | Adds extra class to the corresponding column | _string \| Array \| object_ |
| color | Text color of the option | _string_ |
| disabled | Whether to disable the option | _boolean_ |
| options | List of child options | _CascaderOption[]_ |
| text | Text of the option (required) | _string_ |
| value | Value corresponding to the option (required) | _string \| number_ |

### Events

| Event           | Description                    | Callback Parameters                                                                              |
| --------------- | ------------------------------ | ------------------------------------------------------------------------------------------------ |
| onChange | Triggered when the selected option changes | event.detail: _{ value: string \| number, selectedOptions: CascaderOption[], tabIndex: number }_ |
| onClickTab | Triggered when a tab is clicked | event.detail: _{ tabIndex: number, title: string }_ |
| onClose | Triggered when the close icon is clicked | - |
| onFinish | Triggered when all options are selected | event.detail: _{ value: string \| number, selectedOptions: CascaderOption[], tabIndex: number }_ |

### Slots

| Name  | Description                | Parameters |
| ----- | -------------------------- | ---------- |
| title | Custom top title | - |

### Style Variables

The component provides the following CSS variables that can be used for custom styles. For usage, refer to the [ConfigProvider Component](/material/smartui?comId=config-provider).  

| Name                                  | Default Value                             | Description                              |
| ------------------------------------- | ----------------------------------------- | ---------------------------------------- |
| --cascader-header-height              | _48px_                                    | Cascader header height                   |
| --cascader-header-padding             | _0 16px_                                  | Cascader header padding                  |
| --cascader-title-font-size            | _16px_                                    | Cascader title font size                 |
| --cascader-title-line-height          | _20px_                                    | Cascader title line height               |
| --cascader-close-icon-size            | _22px_                                    | Cascader close icon size                 |
| --cascader-close-icon-color           | _#c8c9cc_                                 | Cascader close icon color                |
| --cascader-selected-icon-size         | _18px_                                    | Cascader selected icon size              |
| --cascader-tabs-height                | _48px_                                    | Cascader tabs height                     |
| --cascader-active-color               | _#1989fa_                                 | Cascader active item color               |
| --cascader-options-height             | _384px_                                   | Cascader options height                  |
| --cascader-option-disabled-color      | _#c8c9cc_                                 | Cascader disabled option color           |
| --cascader-tab-color                  | _var(--app-B6-N1, rgba(0, 0, 0, 1))_      | Cascader tab color                       |
| --cascader-unselected-tab-color       | _#969799_                                 | Cascader unselected tab color            |
| --cascader-tab-inactive-color         | _var(--app-B6-N5, rgba(0, 0, 0, 0.3))_    | Cascader tab inactive color              |
| --cascader-text-color                 | _var(--app-B6-N5, rgba(0, 0, 0, 0.3))_    | Cascader text color                      |