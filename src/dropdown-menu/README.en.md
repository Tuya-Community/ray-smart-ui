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

Through the `Beforetoggle` event, perform specific logic before opening or closing the drop -down menu to achieve the purpose of the pre -checking and asynchronous opening/closing of the state.  
`scrollStyle` `v2.5.0` When a popup needs to scroll, you can set this attribute and provide a height.  

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
      <DropdownItem scrollStyle={{ height: '120px' }} value={0} options={option1} useBeforeToggle onBeforeToggle={onBeforeChange} />
    </DropdownMenu>
  );
}
```

## API

### DropdownMenu Props

| Parameter              | Description                                         | Type      | Default  |
| ---------------------- | --------------------------------------------------- | --------- | -------- |
| activeColor | The selected state color of the menu title and options | _string_ | `#3678E3` |
| triangleColor `v2.0.0` | The color of the arrow when unselected | _string_ | `#CCCCCC` |
| closeOnClickOutside | Whether to close the menu when clicking outside | _boolean_ | `true` |
| closeOnClickOverlay | Whether to close the menu when clicking on the overlay | _boolean_ | `true` |
| direction | The direction the menu expands, optional value is up | _string_ | `down` |
| duration | The duration of the animation, in milliseconds | _number_ | `200` |
| overlay | Whether to show the overlay | _boolean_ | `true` |
| safeAreaTabBar | Whether to leave safe distance for the bottom tabbar | _boolean_ | `false` |
| zIndex | The z-index level of the menu bar | _number_ | `10` |

### DropdownItem Props

| Parameter          | Description                                             | Type               | Default          |
| ----------------- | ------------------------------------------------------- | ------------------ | ---------------- |
| disabled | Whether to disable the menu | _boolean_ | `false` |
| options | Array of options | _Option[]_ | `[]` |
| popupStyle | Custom popup layer style | _React.CSSProperties_ | - |
| title | The title of the menu item | _string_ | Selected item text |
| titleClass | Extra class name for the title, it is recommended to use custom style item-title-class instead | _string_ | - |
| useBeforeToggle | Whether to enable pre-verification before opening or closing the dropdown menu | _boolean_ | `false` |
| value | The value corresponding to the selected item | _number \| string_ | - |
| scrollStyle `v2.5.0` | When the dropdown menu needs to be scrolled, this attribute sets the style of the scrolling area, such as its height. | _string_ | - |

### DropdownItem Events

| Event Name     | Description                                                                  | Callback Parameters                                                                                                                             |
| ------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| beforeToggle | Triggered before opening or closing the dropdown menu; you need to set the `use-before-toggle` property to `true` | `event.detail.status`: `true` for opening the dropdown menu, `false` for closing it <br> `event.detail.callback`: Callback function, calling `callback(false)` will terminate the status change of the dropdown menu |
| change | Triggered when clicking an option causes a value change | value |
| close | Triggered when the menu is closed | - |
| closed | Triggered after the menu is closed and the animation ends | - |
| open | Triggered when the menu is opened | - |
| opened | Triggered after the menu is opened and the animation ends | - |

### DropdownItem Methods

Accessible via [selectComponent](/material/smartui?comId=faq)

| Method Name | Description                           | Parameters     | Return Value |
| ----------- | ------------------------------------- | -------------- | ------------ |
| toggle | Toggle menu display state; pass `true` to show, `false` to hide, no parameter to invert | show?: boolean | - |

### Option Data Structure

| Key   | Description                             | Type               |
| ----- | --------------------------------------- | ------------------ |
| icon | Left [icon svg value](/material/smartui?comId=icon) or image link | _string_ |
| text | Text | _string_ |
| value | Identifier | _number \| string_ |

### DropdownMenu External Style Classes

| Class Name    | Description      |
| ------------- | ---------------- |
| customClass | Root node style class |
| titleClass | Selected item style class |

### DropdownItem External Style Classes

| Class Name      | Description       |
| --------------- | ----------------- |
| customClass | Root node style class |
| itemTitleClass | Option style class |

### Style Variables

The component offers the following CSS variables for customization. Refer to the [ConfigProvider Component](/material/smartui?comId=config-provider) for usage.

| Name                                | Default                                | Description    |
| ----------------------------------- | -------------------------------------- | -------------- |
| --dropdown-menu-height              | _46px_                           | Height of the menu    |
| --dropdown-menu-background-color    | _var(--app-B3, #ffffff)_                         | Background color of the menu    |
| --dropdown-menu-title-font-size     | _14px_    | Font size of the title    |
| --dropdown-menu-title-line-height   | _18px_    | Font height of the title    |
| --dropdown-menu-title-text-color    | _var(--app-B6-N1, rgba(0, 0, 0, 1))_    | Title text color    |
| --dropdown-menu-title-active-text-color | _var(--app-M1, #3678e3)_    | Title active color    |
| --dropdown-menu-title-disabled-text-color | _var(--app-B6-N4, rgba(0, 0, 0, 0.4))_    | Title disabled color    |
| --dropdown-menu-title-padding       | _0 24px 0 8px_    | Padding of the menu    |
| --dropdown-menu-title-triangle-size `v2.0.0` | _12px_    | Triangle icon font size    |
| --dropdown-menu-title-triangle-margin-left `v2.0.0` | _4px_    | Left margin for the triangle icon    |
| --dropdown-menu-item-title-font-size `v2.0.0` | _14px_    | Font size of dropdown item    |
| --dropdown-menu-item-title-font-weight `v2.0.0` | _normal_  | Font weight of dropdown item    |
| --dropdown-menu-option-active-color | _var(--app-M1, #3678e3)_  |  Active color of dropdown option  |
| --dropdown-menu-item-title-line-height `v2.0.0` | _rgba(0,0,0,.05)_    | Color of the dropdown item separator    |
| --dropdown-menu-item-first-line-color `v2.0.0` | _rgba(0,0,0,.08)_    | Color of the first separator line in the dropdown    |
| --dropdown-menu-item-line-width `v2.0.0`    | _1px_    | Height of the first separator line in the dropdown    |
| --dropdown-menu-item-icon-font-size `v2.0.0` | _28px_    | Font size of the right icon in dropdown    |
| --dropdown-menu-item-title-active-font-weight `v2.0.0` | _500_    | Font weight of active dropdown item    |

## FAQ

### Why does the Dropdown component have positioning issues when used inside a Popup?

The Dropdown is located within a Popup node, and the Popup's position is set to center. The center style includes `top: 50%` and `transform: translate3d(-50%, -50%, 0)`, which causes the node's position calculation to be offset, affecting the Dropdown's positioning. The solution is to set the Popup's position to bottom or top.