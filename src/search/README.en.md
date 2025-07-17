---
category: Data Entry
---

# Search

### Introduction

Input box components for searching scenes.

### Introduce

```jsx
import { Search } from '@ray-js/smart-ui';
```

## Code demonstration

### Basic usage

In `Search`, the value is used to control the text in the search box.

```jsx
import { Search } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value] = React.useState('');
  return <Search value={value} placeholder="Please enter the search keyword" />;
}
```

### Simple style

In `Search`, value is used to control the text in the search box. Background can be adjusted via css variables.

```less
.easy-demo {
  --search-background-color: transparent;
  --search-body-background-color: #fff;
}
```

```jsx
import { Search } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const onSearch = event => {
    showToast({
      icon: 'none',
      title: `Search：${event.detail}`,
    });
  };
  const [value] = React.useState('');
  return (
    <Search
      value={value}
      customClass="easy-demo"
      searchText="Search"
      placeholder="Please enter the search keyword"
      onSearch={onSearch}
    />
  );
}
```

### Incident monitoring

`Search` provides search and cancel events. The search event is triggered when the user clicks the search button on the keyboard. The cancel event is triggered when the user clicks the cancel button on the right side of the search box.

```jsx
import { showToast } from '@ray-js/ray';
import { Search } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value] = React.useState('');

  const onSearch = event => {
    showToast({
      icon: 'none',
      title: `search:${event.detail}`,
    });
  };

  const onCancel = () => {};

  return (
    <Search
      value={value}
      showAction
      searchText="Search"
      placeholder="Please enter the search keyword"
      onSearch={onSearch}
      onCancel={onCancel}
      actionText="Cancel"
    />
  );
}
```

### Search box content alignment

The alignment of the search box content can be set through the `inputAlign` property.

```jsx
import { Search } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value] = React.useState('');

  return <Search value={value} inputAlign="center" placeholder="Please enter the search keyword" />;
}
```

### Disable search box

The `disabled` attribute can be used to set the component to a disabled state.

```jsx
import { Search } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value] = React.useState('');

  return <Search value={value} disabled placeholder="Please enter the search keyword" />;
}
```

### Custom button

`Search` supports custom right-side cancel buttons. Use the slot named 'action' and set 'useActionSlot' to true.

```jsx
import { showToast, View } from '@ray-js/ray';
import { Search, Icon } from '@ray-js/smart-ui';
import React, { useState } from 'react';
import TriangleDown from '@tuya-miniapp/icons/dist/svg/TriangleDown';

export default function Demo() {
  const [value, setValue] = useState('');

  const onSearch = event => {
    showToast({
      icon: 'none',
      title: `search:${event.detail}`,
    });
  };

  const onClick = () => {};
  const onChange = event => {
    setValue(event.detail);
  };

  return (
    <>
      <Search
        value={value}
        label="Address"
        shape="round"
        useActionSlot
        placeholder="Please enter the search keyword"
        onSearch={onSearch}
        onChange={onChange}
        slot={{
          action: (
            <View onClick={onClick} style={styles.searchAction}>
              Search
            </View>
          ),
        }}
      />

      <Search
        value={value}
        shape="round"
        placeholder="Please enter the search keyword"
        onSearch={onSearch}
        onChange={onChange}
        slot={{
          searchButton: (
            <View onClick={onClick}>
              Search
            </View>
          ),
          label: (
            <View slot="label">
              Address
              <Icon style={styles.icon} name={TriangleDown} size="12px" />
            </View>
          ),
        }}
      />
    </>
  );
}

const styles = {
  searchAction: {
    marginLeft: '10px',
    marginRight: '10px',
  },
  icon: {
    margin: '0 8px 0 4px',
  },
};
```

## API

### Props

| Parameter             | Description                                                                                                                                                   | Type               | Default  |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | -------- |
| actionText | Cancel button text | _string_ | `Cancel` |
| background | Background color of the search box | _string_ | `#f2f2f2` |
| clearIcon | Clear [icon](/material/smartui?comId=icon) or image link | _string_ | `close` |
| clearTrigger | When to show the clear icon, `always` means displayed when the input box is not empty, <br>`focus` means displayed when the input box is focused and not empty | _string_ | `focus` |
| clearable | Whether to enable the clear control | _boolean_ | `true` |
| cursorSpacing | The distance between the bottom of the input box and the keyboard when it is focused | _number_ | `0` |
| disabled | Whether to disable the input box | _boolean_ | `false` |
| error | Whether to mark the input content in red | _boolean_ | `false` |
| focus | Autofocus | _boolean_ | `false` |
| inputAlign | Input box content alignment, optional values are `center` `right` | _string_ | `left` |
| label | Text on the left side of the search box | _string_ | - |
| leftIcon | Icon name or image link on the left side of the input box. Optional values are in the Icon component (ineffective if use-left-icon-slot is set) | _string_ | `search` |
| maxlength | Maximum input length, setting to -1 means no limit | _number_ | `-1` |
| name | Identifier when submitting within a form | _string_ | - |
| placeholder | Placeholder when the input box is empty | _string_ | - |
| placeholderStyle | Style of the placeholder | _React.CSSProperties_ | - |
| readonly | Read-only | _boolean_ | `false` |
| rightIcon | Icon name or image link on the right side of the input box. Optional values are in the Icon component (ineffective if use-right-icon-slot is set) | _string_ | - |
| shape | Shape, optional value is `round` | _string_ | `square` |
| showAction | Whether to show the cancel button on the right side of the search box | _boolean_ | `false` |
| useActionSlot | Whether to use action slot | _boolean_ | `false` |
| useLeftIconSlot | Whether to use the icon slot on the left side of the input box | _boolean_ | `false` |
| useRightIconSlot | Whether to use the icon slot on the right side of the input box | _boolean_ | `false` |
| value | Current input value | _string \| number_ | - |
| searchText `v2.0.0` | Search button text | _string_ | - |

### Events

| Event Name        | Description                  | Parameters                   |
| ----------------- | ---------------------------- | ---------------------------- |
| onBlur | Triggered when input loses focus | - |
| onCancel | Triggered when search is canceled | - |
| onChange | Triggered when input content changes | event.detail: Current input value |
| onClear | Triggered when clear control is clicked | - |
| onClickInput | Triggered when search area is clicked | - |
| onFocus | Triggered when input is focused | - |
| onSearch | Triggered when search is confirmed | event.detail: Current input value |

### Slot

| Name        | Description                                                                       |
| ----------- | --------------------------------------------------------------------------------- |
| action | Custom button on the right side of the search box, shown only when `use-action-slot` is true |
| label | Custom text on the left side of the search box |
| leftIcon | Custom icon on the left side of the input box, shown only when `use-left-icon-slot` is true |
| rightIcon | Custom icon on the right side of the input box, shown only when `use-right-icon-slot` is true |
| searchButton `v2.0.0` | Custom search button |

### External Style Classes

| Class Name    | Description      |
| ------------- | ---------------- |
| cancelClass | Cancel button style class |
| customClass | Root node style class |
| fieldClass | Search box style class |
| inputClass | Input box style class |


### Style Variables

The component provides the following CSS variables for custom styles. Refer to the [ConfigProvider component](/material/smartui?comId=config-provider) for usage instructions.

| Name | Default Value | Description |
| --- | --- | --- |
| --search-background-color | _var(--app-B3, #fff)_ | Search box background color |
| --search-body-background-color | _var(--app-B4-N9,rgba(0,0,0,0.05))_ | Search content background color |
| --search-padding | _12px var(--padding-md, 16px)_ | Search box padding |
| --search-input-height | _24px_ | Input box height |
| --search-label-padding | _0 5px_ | Label padding |
| --search-label-color | _var(--app-B4_N1, #000)_ | Label text color |
| --search-label-font-size | _var(--font-size-md)_ | Label font size |
| --search-value-font-size | _var(--font-size-md)_ | Input text font size |
| --search-left-icon-color | _var(--app-B4_N4, rgba(0,0,0,0.4))_ | Left icon color |
| --search-action-padding | _0 var(--padding-md) 0 var(--padding-sm)_ | Action button padding |
| --search-action-text-color | _var(--app-B4_N3, rgba(0,0,0,0.5))_ | Action button text color |
| --search-action-font-size | _var(--font-size-md)_ | Action button font size |
| --search-submit-font-size | _var(--font-size-md)_ | Submit button font size |
| --search-submit-color | _var(--app-M1, #3678e3)_ | Submit button color |
| --search-btn-hover-color | _var(--app-B4_N9, rgba(0,0,0,0.05))_ | Button hover color |
| --search-submit-line-width | _1px_ | Submit button line width |
| --search-submit-line-height | _12px_ | Submit button line height |
| --search-btn-hover-opacity | _0.4_ | Button hover opacity |