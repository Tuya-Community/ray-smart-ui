---
category: Data Entry
assets: TreeSelection
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

| Parameter        | Description                                  | Type                        | Default     |
| ---------------- | -------------------------------------------- | --------------------------- | ----------- |
| activeId | ID of the selected item on the right, supports array | _string \| number \| Array_ | `0` |
| height | Height, default unit is `px` | _number \| string_ | `300` |
| items | Data required for category display | _Array_ | `[]` |
| mainActiveIndex | Index of the selected item on the left | _number_ | `0` |
| max | Max number of selected items on the right | _number_ | _Infinity_ |
| selectedIcon | Custom icon for the selected state on the right | _string_ | `Checkmark` |

### Events

| Event Name       | Description                                        | Callback Parameter                     |
| ---------------  | -------------------------------------------------- | -------------------------------------- |
| onClickItem | Event triggered when the right selection item is clicked | event.detail: Data of the clicked item |
| onClickNav | Event triggered when the left navigation is clicked | event.detail.index：Index of the clicked navigation |

### Slots

| Name      | Description                                          |
| -------   | ---------------------------------------------------- |
| content | Custom content for the right area, if there are items, it will be inserted at the top |

### items Data Structure

`items` are overall an array, containing a series of objects describing the categories. In each category, text indicates the name of the current category. options represent the selectable items within the category, with an array structure, and id is used to uniquely identify each option.

```javascript
[
  {
    // Navigation Name
    text: 'All Cities',
    // Badge at the top right of the navigation name
    badge: 3,
    // Display a small red dot at the top right of the navigation name
    dot: true,
    // Disable option
    disabled: false,
    // All selectable items under this navigation
    options: [
      {
        // Name
        text: 'Wenzhou',
        // id, used as an identifier for matching the selected state
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

### External Style Classes

| Class Name               | Description           |
| ------------------------ | --------------------- |
| contentActiveClass | Selected style class for right items |
| contentDisabledClass | Disabled style class for right items |
| contentItemClass | Style class for right items |
| mainActiveClass | Selected style class for left items |
| mainDisabledClass | Disabled style class for left items |
| mainItemClass | Style class for left items |

### Style Variables

The component provides the following CSS variables that can be used for custom styles. For usage, refer to the [ConfigProvider Component](/material/smartui?comId=config-provider).

| Name                          | Default Value                           | Description              |
| ----------------------------- | ---------------------------------------- | ------------------------ |
| --tree-select-font-color      | _var(--app-B6-N1, rgba(0, 0, 0, 1))_    | Tree select font color   |
| --tree-select-font-size       | _14px_                                   | Tree select font size    |
| --tree-select-nav-background-color | _var(--app-B3, #ffffff)_             | Tree select navigation background color |
| --tree-select-content-background-color | _var(--app-B3, #ffffff)_         | Tree select content background color    |
| --tree-select-nav-item-padding | _@padding-sm @padding-xs @padding-sm @padding-sm_ | Tree select navigation item padding    |
| --tree-select-item-height     | _44px_                                   | Tree select item height  |
| --tree-select-item-active-color | _#ee0a24_                              | Active item color        |
| --tree-select-item-disabled-color | _var(--app-B6-N4, rgba(0, 0, 0, 0.4))_ | Disabled item color     |