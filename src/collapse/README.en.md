---
category: Display
---

# Collapse

### Introduction

Place a set of content in multiple accordion panels. Click the panel's header to expand or collapse its content.

### Introduce

```jsx
import { Collapse } from '@ray-js/smart-ui';
```

## Code Demo

### Basic Usage

```jsx
import { Collapse, CollapseItem } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [state, setState] = React.useState({
    active1: [0],
    active2: 0,
    active3: [],
    active4: [],
    title1: 'title1',
    title2: 'title2',
    title3: 'title3',
    content1: 'The code is written for people, and the attachment can run on the machine',
    content2: 'The code is written for people, and the attachment can run on the machine',
    content3: 'The code is written for people, and the attachment can run on the machine',
  });

  const onChange = event => {
    const { key } = event.currentTarget.dataset;
    setState(v => ({
      ...v,
      [key]: event.detail,
    }));
  };

  return (
    <Collapse value={state.active1} data-key="active1" onChange={onChange}>
      <CollapseItem title={state.title1}>{state.content1}</CollapseItem>
      <CollapseItem title={state.title2}>{state.content2}</CollapseItem>
      <CollapseItem title={state.title3} disabled>
        {state.content3}
      </CollapseItem>
    </Collapse>
  );
}
```

## API

### Collapse Props

| Parameter | Description             | Type                                                                    | Default |
| --------- | ----------------------- | ----------------------------------------------------------------------- | ------- |
| accordion | Enable accordion mode | _boolean_ | `false` |
| border | Display outer border | _boolean_ | `true` |
| value | Names of active panels | Non-accordion mode: _(string \| number)[]_<br>Accordion mode: _string \| number_ | - |

### Collapse Event

| Event Name | Description               | Parameter                          |
| ---------- | ------------------------- | ---------------------------------- |
| change | Triggered when panels switch | activeNames: _string \| Array_ |
| close | Triggered when a panel closes | currentName: _string \| number_ |
| open | Triggered when a panel opens | currentName: _string \| number_ |

### CollapseItem Props

| Parameter  | Description                                                | Type              | Default |
| ---------- | ---------------------------------------------------------- | ----------------- | ------- |
| border | Display inner border | _boolean_ | `true` |
| clickable | Enable click feedback | _boolean_ | `false` |
| disabled | Disable the panel | _boolean_ | `false` |
| icon | Name or image link for the left icon in the title bar | _string_ | - |
| isLink | Show arrow on the right of the title bar and enable click feedback | _boolean_ | `true` |
| label | Description in the title bar | _string_ | - |
| name | Unique identifier, defaults to index value | _string \| number_ | `index` |
| size | Size of the title bar, with `large` as an optional value | _string_ | - |
| title | Content on the left side of the title bar | _string \| number_ | - |
| value | Content on the right side of the title bar | _string \| number_ | - |

### CollapseItem Slot

| Name        | Description                                                           |
| ----------- | --------------------------------------------------------------------- |
| -           | Panel content                                                         |
| icon | Custom `icon` |
| rightIcon | Custom right button, default is `arrow`. Requires `is-link` to be `false` to be effective |
| title | Custom `title` |
| value | Custom display content |

### Collapse External Style Classes

| Class Name     | Description       |
| -------------- | ----------------- |
| customClass | Root node style class |

### CollapseItem External Style Classes

| Class Name      | Description       |
| --------------- | ----------------- |
| contentClass | Content style class |
| customClass | Root node style class |

### Style Variables

The component provides the following CSS variables that can be used for custom styles. For usage, refer to the [ConfigProvider Component](/material/smartui?comId=config-provider).

| Name                                          | Default Value                                 | Description                                |
| --------------------------------------------- | --------------------------------------------- | ------------------------------------------ |
| --collapse-item-transition-duration           | _0.3s_                                        | Duration of the collapse item transition   |
| --collapse-item-content-padding               | _15px_                                        | Padding for the collapse item content      |
| --collapse-item-content-font-size             | _13px_                                        | Font size of the collapse item content     |
| --collapse-item-content-line-height           | _1.5_                                         | Line height of the collapse item content   |
| --collapse-item-content-text-color            | _#969799_                                     | Text color of the collapse item content    |
| --collapse-item-content-background-color      | _var(--app-B6, #fff)_                         | Background color of the collapse item content |
| --collapse-item-title-disabled-color          | _#c8c9cc_                                     | Color of the disabled collapse item title  |