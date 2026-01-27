---
category: Navigation
assets: BrandList
---

# IndexBar

### Introduction

Index classification display and quick location for lists.

### Introduction

```jsx
import { IndexBar } from '@ray-js/smart-ui';
```

```warning:⚠️Note
The component listens for the scroll event of the entire page to create a dynamic fixed header element, so the page rendering this component must be configured to allow scrolling.

index.config.ts:

export default {
  navigationBarTitleText: 'Home',
  disableScroll: false,
};
```

## Code demonstration

### Basic Usage

When the index tab is clicked, it will automatically scroll to the corresponding `IndexAnchor` position.

```jsx
import React from 'react';
import { View } from '@ray-js/ray';
import { Cell, IndexBar, IndexAnchor } from '@ray-js/smart-ui';

export default function Demo() {
  const indexList = Array.from({ length: 26 }, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i));

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

| Parameter           | Description                               | Type                   | Default   |
| ------------------- | ----------------------------------------- | ---------------------- | --------- |
| highlightColor | Index character highlight color | _string_ | `#07c160` |
| indexList | List of index characters | _string[] \| number[]_ | `A-Z` |
| sticky | Whether to enable anchor auto-sticky | _boolean_ | `true` |
| stickyOffsetTop | Distance from top when anchor auto-sticky | _number_ | `0` |
| zIndex | z-index level | _number_ | `1` |
| scrollable `v2.1.7` | Whether the SideBar can scroll | _boolean_ | `false` |

### IndexAnchor Props

| Parameter | Description                        | Type               | Default |
| --------- | ---------------------------------- | ------------------ | ------- |
| index | Index character | _string \| number_ | - |
| useSlot | Whether to use custom content slot | _boolean_ | `false` |

### IndexBar Events

| Event Name | Description                        | Callback Parameters    |
| ---------- | ---------------------------------- | ---------------------- |
| select | Fires when a character is selected | index: Index character |

### IndexAnchor Slots

| Name | Description                                                  |
| ---- | ------------------------------------------------------------ |
| -    | Anchor position display content, defaults to index character |

### Style Variables

The component provides the following CSS variables that can be used for custom styles. For usage, refer to the [ConfigProvider Component](/material/smartui?comId=config-provider).

| Name                          | Default Value | Description       |
| ----------------------------- | ------------- | ----------------- |
| --index-bar-index-font-size   | _10px_        | Index font size   |
| --index-bar-index-line-height | _14px_        | Index line height |