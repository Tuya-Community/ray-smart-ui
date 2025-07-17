---
category: Data Entry
---


# TreeSelect

### Introduction

For selection from a set of data sets associated.

### Introduce

```jsx
import { TreeSelect } from '@ray-js/smart-ui';
```

## Code demonstration

### Single -choice mode

The TreeSelect component can be used anywhere. Simply pass the corresponding data. This component supports single or multiple selection. The specific behavior depends entirely on how the onClickItem event logic assigns a value to the activeId property. When activeId is an array, it is in multi-select mode.

```jsx
import { TreeSelect } from '@ray-js/smart-ui';
import React, { useState, useMemo, useCallback } from 'react';

const items = [
  {
    text: 'Zhejiang',
    options: [
      {
        text: 'Hangzhou',
        id: 1,
      },
      {
        text: 'Wenzhou',
        id: 2,
      },
      {
        text: 'Ningbo',
        id: 3,
        disabled: true,
      },
      {
        text: 'Yiwu',
        id: 4,
      },
    ],
  },
  {
    text: 'Jiangsu',
    options: [
      [
        {
          text: 'Nanjing',
          id: 5,
        },
        {
          text: 'Wuxi',
          id: 6,
        },
        {
          text: 'Xuzhou',
          id: 7,
        },
        {
          text: 'Suzhou',
          id: 8,
        },
      ],
    ],
  },
  {
    text: 'Fujian',
    disabled: true,
    options: [
      {
        text: 'Quanzhou',
        id: 9,
      },
    ],
  },
];

export default function Demo() {
  const [mainActiveIndex, setmainActiveIndex] = useState(0);
  const [activeId, setactiveId] = useState(0);
  const onClickNav = useCallback(({ detail }) => {
    setmainActiveIndex(detail.index || 0);
  }, []);

  const onClickItem = useCallback(
    ({ detail }) => {
      const id = activeId === detail.id ? null : detail.id;
      setactiveId(id);
    },
    [activeId]
  );
  return (
    <TreeSelect
      items={items}
      mainActiveIndex={mainActiveIndex}
      activeId={activeId}
      onClickItem={onClickItem}
      onClickNav={onClickNav}
    />
  );
}
```

### Multi -choice mode

```jsx
import { TreeSelect } from '@ray-js/smart-ui';
import React, { useState, useMemo, useCallback } from 'react';

const items = [
  {
    text: 'Zhejiang',
    options: [
      {
        text: 'Hangzhou',
        id: 1,
      },
      {
        text: 'Wenzhou',
        id: 2,
      },
      {
        text: 'Ningbo',
        id: 3,
        disabled: true,
      },
      {
        text: 'Yiwu',
        id: 4,
      },
    ],
  },
  {
    text: 'Jiangsu',
    options: [
      [
        {
          text: 'Nanjing',
          id: 5,
        },
        {
          text: 'Wuxi',
          id: 6,
        },
        {
          text: 'Xuzhou',
          id: 7,
        },
        {
          text: 'Suzhou',
          id: 8,
        },
      ],
    ],
  },
  {
    text: 'Fujian',
    disabled: true,
    options: [
      {
        text: 'Quanzhou',
        id: 9,
      },
    ],
  },
];

export default function Demo() {
  const [mainActiveIndex, setmainActiveIndex] = useState(0);
  const [activeId, setactiveId] = useState([]);
  const onClickNav = useCallback(({ detail }) => {
    setmainActiveIndex(detail.index || 0);
  }, []);

  const onClickItem = useCallback(
    ({ detail }) => {
      const result = [...activeIdMulti];
      const idx = result.indexOf(detail.id);
      if (idx > -1) {
        result.splice(idx, 1);
      } else {
        result.push(detail.id);
      }

      setactiveId(result);
    },
    [activeId]
  );
  return (
    <TreeSelect
      items={items}
      max={2}
      mainActiveIndex={mainActiveIndex}
      activeId={activeId}
      onClickItem={onClickItem}
      onClickNav={onClickNav}
    />
  );
}
```

### Custom content

```jsx
import { TreeSelect, Image } from '@ray-js/smart-ui';
import React, { useState, useMemo, useCallback } from 'react';

export default function Demo() {
  const [mainActiveIndex, setmainActiveIndex] = useState(0);
  const [activeId, setactiveId] = useState([]);
  const onClickNav = useCallback(({ detail }) => {
    setmainActiveIndex(detail.index || 0);
  }, []);

  const onClickItem = useCallback(
    ({ detail }) => {
      const result = [...activeIdMulti];
      const idx = result.indexOf(detail.id);
      if (idx > -1) {
        result.splice(idx, 1);
      } else {
        result.push(detail.id);
      }

      setactiveId(result);
    },
    [activeId]
  );
  return (
    <TreeSelect
      items={[{ text: 'Group 1' }, { text: 'Group 2' }]}
      height="55vw"
      mainActiveIndex={mainActiveIndex}
      activeId={activeId}
      onClickItem={onClickItem}
      onClickNav={onClickNav}
      slot={{
        content: (
          <Image
            src={
              mainActiveIndex === 0
                ? 'https://static1.tuyacn.com/static/tuya-miniapp-doc/_next/static/images/logo.png'
                : 'https://static1.tuyacn.com/static/tuya-miniapp-doc/_next/static/images/logo.png'
            }
            width="100%"
            height="100%"
          />
        ),
      }}
    />
  );
}
```

## API

### Props

| Parameters      | Description                                                          | Type                        | Default value |
| --------------- | -------------------------------------------------------------------- | --------------------------- | ------------- |
| activeId        | The selected id on the right side supports passing an array.         | _string \| number \| Array_ | `0`           |
| height          | Height, default unit is 'px'.                                        | _number \| string_          | `300`         |
| items           | Category displayed data required                                     | _Array_                     | `[]`          |
| mainActiveIndex | Select the index on the left                                         | _number_                    | `0`           |
| max             | The maximum selection of the right item                              | _number_                    | _Infinity_    |
| selectedIcon    | Custom icon of selecting the status of the state in the right column | _string_                    | `success`     |

### Events

| Event Name  | Description                                                             | Return parameters                                                         |
| ----------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| onClickItem | When the right selection item is clicked, events that will be triggered | event.detail: The data of the click item                                  |
| onClickNav  | When you click on the left navigation, the trigger event is triggered   | event.detail.index：The index of the navigation of the clicked navigation |

### Slots

| Name    | Description                                                                      |
| ------- | -------------------------------------------------------------------------------- |
| content | Customize the content of the right area, if there is ITEMS, insert it in the top |

### items Data structure

items is an array that contains a series of objects describing categories. In each category, text represents the name of the current category. options are the selectable items within the category, structured as an array, and id is used to uniquely identify each option.

```javascript
[
  {
    // Navigation name
    text: 'All cities',
    // Navigation name in the upper right corner logo
    badge: 3,
    // Whether the navigation name is displayed in the upper right corner of the navigation name
    dot: true,
    // Disable option
    disabled: false,
    // All options under this navigation
    options: [
      {
        // name
        text: 'Wenzhou',
        // ID, as a logo for matching selection status
        id: 1,
        // Disable option
        disabled: true,
      },
      {
        text: 'Hangzhou',
        id: 2,
      },
    ],
  },
];
```

### External style

| Class Name           | Description                                |
| -------------------- | ------------------------------------------ |
| contentActiveClass   | Select the style class on the right option |
| contentDisabledClass | Disable style class on the right option    |
| contentItemClass     | The right option style class               |
| mainActiveClass      | Select the style class on the left option  |
| mainDisabledClass    | Disable style class on the left option     |
| mainItemClass        | The left option style class                |
