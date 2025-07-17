---
category: Layout
---


# DropdownMenu

### Introduce

The menu listed down.

### Introduction

```jsx
import { DropdownMenu, DropdownItem } from '@ray-js/smart-ui';
```

## Code demonstration

### Basic usage

```jsx
import React from 'react';
import { DropdownItem, DropdownMenu } from '@ray-js/smart-ui';

const option1 = [
  { text: 'All products', value: 0 },
  { text: 'New product', value: 1 },
  { text: 'Active product', value: 2 },
];
const option2 = [
  { text: 'Default sorting', value: 'a' },
  { text: 'Praise sorting', value: 'b' },
  { text: 'Sorting of sales', value: 'c' },
];

export default function Demo() {
  return (
    <DropdownMenu>
      <DropdownItem value={0} options={option1} />
      <DropdownItem value={'a'} options={option2} />
    </DropdownMenu>
  );
}
```

### Custom menu content

```jsx
import React, { useState, useCallback } from 'react';
import { DropdownItem, DropdownMenu, Cell, Switch, Button } from '@ray-js/smart-ui';
import { View, showModal } from '@ray-js/ray';

const option1 = [
  { text: 'All products', value: 0 },
  { text: 'New product', value: 1 },
  { text: 'Active product', value: 2 },
];
const option2 = [
  { text: 'Default sorting', value: 'a' },
  { text: 'Praise sorting', value: 'b' },
  { text: 'Sorting of sales', value: 'c' },
];

export default function Demo() {
  const [switch1, setSwitch1] = useState(true);
  const [switch2, setSwitch2] = useState(false);
  const onSwitch1Change = useCallback(({ detail }) => {
    setSwitch1(detail);
  }, []);
  const onSwitch2Change = useCallback(({ detail }) => {
    setSwitch2(detail);
  }, []);

  const onConfirm = useCallback(() => {
    const pages = getCurrentPages();
    const curPage = pages[pages.length - 1];
    curPage.selectComponent('#item').toggle();
  }, []);
  return (
    <DropdownMenu>
      <DropdownItem value={0} options={option1} />
      <DropdownItem id="item" title="filter">
        <Cell title="Free shipping">
          <Switch
            size="24px"
            style={{ height: '26px' }}
            checked={switch1}
            activeColor="#ee0a24"
            onChange={onSwitch1Change}
          />
        </Cell>
        <Cell title="Group purchase">
          <Switch
            size="24px"
            style={{ height: '26px' }}
            checked={switch2}
            activeColor="#ee0a24"
            onChange={onSwitch2Change}
          />
        </Cell>
        <View style={{ padding: '5px 16px' }}>
          <Button type="danger" block round onClick={onConfirm}>
            confirm
          </Button>
        </View>
      </DropdownItem>
    </DropdownMenu>
  );
}
```

### Customized selected status color

```jsx
import React from 'react';
import { DropdownItem, DropdownMenu } from '@ray-js/smart-ui';

const option1 = [
  { text: 'All products', value: 0 },
  { text: 'New product', value: 1 },
  { text: 'Active product', value: 2 },
];
const option2 = [
  { text: 'Default sorting', value: 'a' },
  { text: 'Praise sorting', value: 'b' },
  { text: 'Sorting of sales', value: 'c' },
];

export default function Demo() {
  return (
    <DropdownMenu activeColor="#1989fa">
      <DropdownItem value={0} options={option1} />
      <DropdownItem value={'a'} options={option2} />
    </DropdownMenu>
  );
}
```

### Upward

```jsx
import React from 'react';
import { DropdownItem, DropdownMenu } from '@ray-js/smart-ui';

const option1 = [
  { text: 'All products', value: 0 },
  { text: 'New product', value: 1 },
  { text: 'Active product', value: 2 },
];
const option2 = [
  { text: 'Default sorting', value: 'a' },
  { text: 'Praise sorting', value: 'b' },
  { text: 'Sorting of sales', value: 'c' },
];

export default function Demo() {
  return (
    <DropdownMenu direction="up">
      <DropdownItem value={0} options={option1} />
      <DropdownItem value={'a'} options={option2} />
    </DropdownMenu>
  );
}
```

### Disabled menu

```jsx
import React from 'react';
import { DropdownItem, DropdownMenu } from '@ray-js/smart-ui';

const option1 = [
  { text: 'All products', value: 0 },
  { text: 'New product', value: 1 },
  { text: 'Active product', value: 2 },
];
const option2 = [
  { text: 'Default sorting', value: 'a' },
  { text: 'Praise sorting', value: 'b' },
  { text: 'Sorting of sales', value: 'c' },
];

export default function Demo() {
  return (
    <DropdownMenu>
      <DropdownItem value={0} disabled options={option1} />
      <DropdownItem value={'a'} disabled options={option2} />
    </DropdownMenu>
  );
}
```

### Open/close asynchronous

Through the `Beforetoggle` event, perform specific logic before opening or closing the drop -down menu to achieve the purpose of the pre -checking and asynchronous opening/closing of the state

```jsx
import React, { useCallback } from 'react';
import { DropdownItem, DropdownMenu } from '@ray-js/smart-ui';
import { showModal } from '@ray-js/ray';

const option1 = [
  { text: 'All products', value: 0 },
  { text: 'New product', value: 1 },
  { text: 'Active product', value: 2 },
];

export default function Demo() {
  const onBeforeChange = useCallback(({ detail: { status, callback } }) => {
    showModal({
      title: 'Open/close asynchronous',
      content: `Are you sure you want to ${status ? 'open' : 'close'} the dropdown menu?`,
      success: res => {
        if (res.confirm) {
          callback(true);
        } else if (res.cancel) {
          callback(false);
        }
      },
    });
  }, []);
  return (
    <DropdownMenu>
      <DropdownItem value={0} options={option1} useBeforeToggle onBeforeToggle={onBeforeChange} />
    </DropdownMenu>
  );
}
```

## API

### DropdownMenu Props

| Parameters          | Description                                                | Type      | Default value |
| ------------------- | ---------------------------------------------------------- | --------- | ------------- |
| activeColor         | The selected color of the menu title and option            | _string_  | `#ee0a24`     |
| closeOnClickOutside | Whether to close the menu after clicking the external MENU | _boolean_ | `true`        |
| closeOnClickOverlay | Turn off the menu after clicking the mask layer            | _boolean_ | `true`        |
| direction           | The menu is expanded, the optional value is UP             | _string_  | `down`        |
| duration            | Animation time, unit milliseconds                          | _number_  | `200`         |
| overlay             | Whether to display the mask layer                          | _boolean_ | `true`        |
| safeAreaTabBar      | Whether to leave the bottom tabbar safety distance         | _boolean_ | `false`       |
| zIndex              | Menu Bar Z-IDEX level                                      | _number_  | `10`          |

### DropdownItem Props

| 参数            | 说明                                                                                       | 类型               | 默认值         |
| --------------- | ------------------------------------------------------------------------------------------ | ------------------ | -------------- |
| disabled        | Whether to disable the menu                                                                | _boolean_          | `false`        |
| options         | Options                                                                                    | _Option[]_         | `[]`           |
| popupStyle      | Custom pop -up layer style                                                                 | _object_           | -              |
| title           | Menu item title                                                                            | _string_           | 当前选中项文字 |
| titleClass      | In the title of the title, it is recommended to use the custom style itmTitleClass instead | _string_           | -              |
| useBeforeToggle | Whether to open the drop -down menu to open or turn off the preparation verification       | _boolean_          | `false`        |
| value           | Value corresponding to the current selected item                                           | _number \| string_ | -              |

### DropdownItem Events

| Event Name   | Description                                                                                                   | Return parameters                                                                                                                                                                                           |
| ------------ | ------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| beforeToggle | Triggered before the dropdown menu opens or closes, you need to set the `useBeforeToggle` property to `true`. | `event.detail.status`: `true` opens the dropdown menu, `false` closes the dropdown menu <br>`event.detail.callback`: callback function, calling `callback(false)` terminates the dropdown menu state change |
| change       | Triggered when clicking an option causes the value to change                                                  | value                                                                                                                                                                                                       |
| close        | Trigger when turning off the menu bar                                                                         | -                                                                                                                                                                                                           |
| closed       | Turn off the menu bar and trigger after the animation is over                                                 | -                                                                                                                                                                                                           |
| open         | Triggered when opening the menu bar                                                                           | -                                                                                                                                                                                                           |
| opened       | Open the menu bar and trigger after the animation is over                                                     | -                                                                                                                                                                                                           |

### DropdownItem method

Access through selectComponent (ID).

| Method Name | Description                                                                              | Parameters     | Return Value |
| ----------- | ---------------------------------------------------------------------------------------- | -------------- | ------------ |
| toggle      | Toggle menu display state: pass `true` to show, `false` to hide, no parameter to invert. | show?: boolean | -            |

### Option Data structure

| Key Name | Description                                 | Type               |
| -------- | ------------------------------------------- | ------------------ |
| icon     | Left side [icon name](#/icon) or image link | _string_           |
| text     | Text                                        | _string_           |
| value    | Identifier                                  | _number \| string_ |

### DropdownMenu External style

| Class Name  | Description             |
| ----------- | ----------------------- |
| customClass | Root node nodes         |
| titleClass  | Choose a model category |

### DropdownItem External style

| Class Name     | Description     |
| -------------- | --------------- |
| customClass    | Root node nodes |
| itemTitleClass | Optional        |
