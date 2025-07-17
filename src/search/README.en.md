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

In `Search`, the value is used to control the text in the search box. The background can be customized for the external background color of the search box.

```jsx
import { Search } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value] = React.useState('');
  return <Search value={value} placeholder="请输入搜索关键词" />;
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

  const onSearch = (event) => {
    showToast({
      icon: 'none',
      title: `search:${event.detail}`
    })
  }

  const onCancel = () => {}

  return <Search
    value={value}
    showAction
    placeholder="Please enter the search keyword"
    onSearch={onSearch}
    onCancel={onCancel}
    actionText="Cancel"
  />
}
```

### Search box content alignment

The alignment of the search box content can be set through the `inputAlign` property.

```jsx
import { Search } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value] = React.useState('');

  return <Search
    value={value}
    inputAlign="center"
    placeholder="Please enter the search keyword"
  />
}
```

### Disable search box

The `disabled` attribute can be used to set the component to a disabled state.

```jsx
import { Search } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value] = React.useState('');

  return <Search
    value={value}
    disabled
    placeholder="Please enter the search keyword"
  />
}
```

### Custom background color

The `background` property sets the background color outside the search box, and the `shape` property sets the shape of the search box. The optional value is `round`.

```jsx
import { Search } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value] = React.useState('');

  return <Search
    value={value}
    shape="round"
    background="#4fc08d"
    placeholder="Please enter the search keyword"
  />
}
```

### Custom button

`Search` supports custom right-side cancel buttons. Use the slot named 'action' and set 'useActionSlot' to true.

```jsx
import { showToast, View } from '@ray-js/ray';
import { Search } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [value, setValue] = useState('');

  const onSearch = (event) => {
    showToast({
      icon: 'none',
      title: `search:${event.detail}`
    })
  }

  const onClick = () => { }
  const onChange = event => {
    setValue(event.detail);
  };

  return <Search
    value={value}
    label="address"
    shape="round"
    useActionSlot
    placeholder="Please enter the search keyword"
    onSearch={onSearch}
    onChange={onChange}
  >
    <View slot="action" onClick={onClick} style={styles.searchAction}>
      search
    </View>
  </Search>
}

const styles = {
  searchAction: {
    marginLeft: '10px',
    marginRight: '10px'
  }
}
```

## API

### Props

| Parameters       | Description                                                                                                                                                                                         | Type               | Default value |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------- |
| actionText       | Cancel button text                                                                                                                                                                                  | _string_           | `取消`        |
| background       | Search box background color                                                                                                                                                                         | _string_           | `#f2f2f2`     |
| clearIcon        | Clear [Icon Name](#/icon) or image link                                                                                                                                                             | _string_           | `clear`       |
| clearTrigger     | The timing of displaying the clear icon: `always` means the clear icon is shown when the input box is not empty; `focus` means the clear icon is shown when the input box is focused and not empty. | _string_           | `focus`       |
| clearable        | Whether to use the removal control                                                                                                                                                                  | _boolean_          | `true`        |
| cursorSpacing    | The distance between the bottom and the keyboard when the input box focuses                                                                                                                         | _number_           | `0`           |
| disabled         | Whether to disable the input box                                                                                                                                                                    | _boolean_          | `false`       |
| error            | Whether the content will be marked with red                                                                                                                                                         | _boolean_          | `false`       |
| focus            | Focus                                                                                                                                                                                               | _boolean_          | `false`       |
| inputAlign       | Alignment of input box contents, available values are `center` `right`                                                                                                                              | _string_           | `left`        |
| label            | Search box left text                                                                                                                                                                                | _string_           | -             |
| leftIcon         | Enter the icon name or image link on the left side of the input box. Optional values can be seen in the Icon component (this property is invalid if use-left-icon-slot is set).                     | _string_           | `search`      |
| maxlength        | The maximum input length is not limited to the maximum length when set to -1                                                                                                                        | _number_           | `-1`          |
| name             | 在表单内提交时的标识符                                                                                                                                                                              | _string_           | -             |
| placeholder      | The input box is the place where time is empty                                                                                                                                                      | _string_           | -             |
| placeholderStyle | Specify the style of the placeholders                                                                                                                                                               | _object_           | -             |
| readonly         | Whether to read only                                                                                                                                                                                | _boolean_          | `false`       |
| rightIcon        | Enter the icon name or image link on the right side of the input box. Optional values can be found in the Icon component. (This property is invalid if use-right-icon-slot is set).                 | _string_           | -             |
| shape            | Shape, optional values include `round`                                                                                                                                                              | _string_           | `square`      |
| showAction       | Whether the cancellation button is displayed on the right side of the search box                                                                                                                    | _boolean_          | `false`       |
| useActionSlot    | Whether to use action slot                                                                                                                                                                          | _boolean_          | `false`       |
| useLeftIconSlot  | Whether to use the icon slot on the left side of the input box                                                                                                                                      | _boolean_          | `false`       |
| useRightIconSlot | Use the icon slot on the right side of the input box?                                                                                                                                               | _boolean_          | `false`       |
| value            | The value of the current input                                                                                                                                                                      | _string \| number_ | -             |

### Events

| Event Name   | Description                               | Parameters                        |
| ------------ | ----------------------------------------- | --------------------------------- |
| onBlur       | Triggered when the input box is lost      | -                                 |
| onCancel     | Cancel the search for search trigger      | -                                 |
| onChange     | Triggered when entering content changes   | event.detail: Current input value |
| onClear      | Triggered when clicking the empty control | -                                 |
| onClickInput | Trigger when clicking the search area     | -                                 |
| onFocus      | Triggered when the input box focuses      | -                                 |
| onSearch     | Determine when searching                  | event.detail: Current input value |

### Slot

| Name      | Description                                                                                                       |
| --------- | ----------------------------------------------------------------------------------------------------------------- |
| action    | The button on the right side of the custom search box will only be displayed when 'useActionSlot' is set to true. |
| label     | Custom search box on the left text of the search box                                                              |
| leftIcon  | The custom input box left icon will only be displayed when `useLeftIconSlot` is set to true.                      |
| rightIcon | The custom input box right-side icon will only be displayed when `useRightIconSlot` is set to true.               |

### External style

| Class Name  | Description         |
| ----------- | ------------------- |
| cancelClass | Cancel button style |
| customClass | Root node nodes     |
| fieldClass  | Search frame style  |
| inputClass  | Input box style     |
