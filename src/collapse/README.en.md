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

### Collapse

| Parameter | Description                                                                                                           | Type    | Default Value |
| --------- | --------------------------------------------------------------------------------------------------------------------- | ------- | ------------- |
| border    | Whether to display the inner border                                                                                   | boolean | true          |
| clickable | Do you turn on a click feedback                                                                                       | boolean | false         |
| disabled  | Whether to disable the panel                                                                                          | boolean | false         |
| icon      | Name of the icon or image link on the left side of the title bar, optional values can be found in the Icon component. | string  | -             |
| isLink    | Whether to display the arrow on the right side of the title bar and enable click feedback                             | boolean | true          |
| label     | Title Bar Description Information                                                                                     | string  | -             |
| name      | Unique identifier, defaults to index value                                                                            | string  | number        | index |
| size      | Title bar size, optional value is large                                                                               | string  | -             |
| title     | Content on the left side of the title bar                                                                             | string  | number        | - |
| value     | Content on the right side of the title bar                                                                            | string  | number        | - |
