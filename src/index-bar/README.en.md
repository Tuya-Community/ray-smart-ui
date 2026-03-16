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

Clicking the index bar will automatically jump to the corresponding `IndexAnchor` anchor point. With `scrollable` you can scroll to position by sliding; with `showMoveTip` (`v2.12.0`) a tip follows your finger when dragging the sidebar.

```jsx
import React from 'react';
import { View } from '@ray-js/ray';
import { Cell, IndexBar, IndexAnchor } from '@ray-js/smart-ui';

export default function Demo() {
  const indexList = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode('A'.charCodeAt(0) + i)
  );

  return (
    <IndexBar scrollable showMoveTip>
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
import { View } from '@ray-js/ray';
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

### Custom sidebar style `v2.11.0`

The `sidebarFontSize` and `sidebarLineHeight` properties can set the font style of the sidebar

```jsx
import React from 'react';
import { View } from '@ray-js/ray';
import { Cell, IndexBar, IndexAnchor } from '@ray-js/smart-ui';

export default function Demo() {
  const indexList = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode('A'.charCodeAt(0) + i)
  );

  return (
    <IndexBar sidebarFontSize="16px" sidebarLineHeight="20px">
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
| showMoveTip `v2.12.0` | Whether to show a tip that follows the finger when dragging the sidebar | _boolean_ | `false` |
| sidebarFontSize `v2.11.0` | SideBar font size | _string_ | - |
| sidebarLineHeight `v2.11.0` | SideBar line height | _string_ | - |

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

**IndexBar**

| Name                                        | Default Value | Description                    |
| ------------------------------------------- | ------------- | ------------------------------ |
| --index-bar-index-font-size                 | _10px_        | Sidebar index font size        |
| --index-bar-index-line-height               | _14px_ `v2.0.0` _16px_ `v2.12.0`       | Sidebar index line height      |
| --index-bar-move-tip-text-padding `v2.12.0`       | _0 10px 0 0_  | Move tip text padding          |
| --index-bar-move-tip-text-font-size `v2.12.0`     | _24px_        | Move tip text font size        |
| --index-bar-move-tip-text-line-height `v2.12.0`   | _32px_        | Move tip text line height      |
| --index-bar-move-tip-text-color `v2.12.0`        | _#fff_        | Move tip text color            |

**IndexAnchor**

| Name | Default Value | Description |
| ----------------------------------------- | --------------- | ------------------------------ |
| --index-anchor-padding                    | _0 16px_         | Anchor padding                 |
| --index-anchor-text-color                 | _rgba(0,0,0,1)_ | Anchor text color              |
| --index-anchor-font-weight                | _500_            | Anchor font weight             |
| --index-anchor-font-size                  | _14px_           | Anchor font size               |
| --index-anchor-line-height                | _32px_           | Anchor line height             |
| --index-anchor-background-color           | _transparent_    | Anchor background color        |
| --index-anchor-active-background-color    | _#ffffff_        | Anchor background when sticky  |
| --index-anchor-active-text-color          | _#3678e3_        | Anchor text color when sticky  |
| --index-anchor-index-padding              | _0 4px 0 20px_  | Anchor index padding (right)  |

## FAQ

### IndexAnchor fails when nested in a scrollable element?

Since `<IndexBar />` internally uses ty.pageScrollTo to scroll to a specified position, it only supports page-level scrolling and cannot be nested in scrollable elements, such as: `view` with `overflow: scroll;` or `scroll-view`. For details, see [WeChat Mini Program Documentation](https://developers.weixin.qq.com/miniprogram/dev/api/ui/scroll/ty.pageScrollTo.html).