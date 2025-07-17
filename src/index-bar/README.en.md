---
category: Navigation
---

# IndexBar

### Introduction

Index classification display and quick location for lists.

### Introduction

```jsx
import { IndexBar } from '@ray-js/smart-ui';
```

## Code demonstration

### Basic Usage

When the index tab is clicked, it will automatically scroll to the corresponding `IndexAnchor` position.

```jsx
import React from 'react';
import { View } from '@ray-js/ray';
import { Cell, IndexBar, IndexAnchor } from '@ray-js/smart-ui';

export default function Demo() {
  const indexList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <IndexBar>
      {indexList.map((item, index) => (
        <View key={`${index + 1}`}>
          <IndexAnchor index={item} />
          <Cell title="text" />
          <Cell title="text" />
          <Cell title="text" />
        </View>
      ))}
    </IndexBar>
  );
}
```

### Custom index list

You can customize the list of index characters to display via the `indexList` attribute.

```jsx
import { Cell, IndexBar, IndexAnchor } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray'
import React from 'react';

export default function Demo() {
  const customIndexList = [1, 2, 3, 4, 5, 6, 8, 9, 10];
  return (
    <IndexBar indexList={customIndexList}>
      {customIndexList.map((item, index) => (
        <View key={`${index + 1}`}>
          <IndexAnchor index={item} useSlot>
            title {item}
          </IndexAnchor>
          <Cell title="text" />
          <Cell title="text" />
          <Cell title="text" />
        </View>
      ))}
    </IndexBar>
  );
}
```

## API

### IndexBar Props

| Parameters      | Description                                                                    | Type                   | Default value | Version |
| --------------- | ------------------------------------------------------------------------------ | ---------------------- | ------------- | ------- |
| highlightColor  | Index character high bright color                                              | _string_               | `#07c160`     | -       |
| indexList       | Index character list                                                           | _string[] \| number[]_ | `A-Z`         | -       |
| sticky          | Whether to open the anchor point to automatically suck the top                 | _boolean_              | `true`        | -       |
| stickyOffsetTop | The distance from the top when the anchor point is automatically sucks the top | _number_               | `0`           | -       |
| zIndex          | z-index Level                                                                  | _number_               | `1`           | -       |

### IndexAnchor Props

| Parameters | Description                                   | Type               | Default value | Version |
| ---------- | --------------------------------------------- | ------------------ | ------------- | ------- |
| index      | Indexed character                             | _string \| number_ | -             | -       |
| useSlot    | Whether to use the slot of the custom content | _boolean_          | `false`       | -       |

### IndexBar Events

| Event Name | Description                       | Return parameters |
| ---------- | --------------------------------- | ----------------- |
| select     | Trigger when selecting characters | index: 索引字符   |

### IndexAnchor Slots

| Name | Description                                                             |
| ---- | ----------------------------------------------------------------------- |
| -    | Display content at the anchor point, the default is the index character |
