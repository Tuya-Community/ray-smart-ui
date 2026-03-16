---
category: 导航
assets: BrandList
---

# IndexBar 索引栏

### 介绍

用于列表的索引分类显示和快速定位。

### 引入

```jsx
import { IndexBar } from '@ray-js/smart-ui';
```

```warning:⚠️注意
组件是监听整个page 滚动事件来做动态的 fixed 标题元素，所以渲染此组件的页面必须配置 页面可滚动。

index.config.ts:

export default {
  navigationBarTitleText: 'Home',
  disableScroll: false,
};
```

## 代码演示

### 基础用法

点击索引栏时，会自动跳转到对应的`IndexAnchor`锚点位置。设置 `scrollable` 后可滑动定位；设置 `showMoveTip`（`v2.12.0`）可在拖动侧边栏时显示跟随手指的提示气泡。

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
          <Cell title="文本" />
          <Cell title="文本" />
          <Cell title="文本" />
        </View>
      ))}
    </IndexBar>
  );
}
```

### 自定义索引列表

可以通过`indexList`属性自定义展示的索引字符列表。

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
            标题 {item}
          </IndexAnchor>
          <Cell title="文本" />
          <Cell title="文本" />
          <Cell title="文本" />
        </View>
      ))}
    </IndexBar>
  );
}
```

### 自定义侧边栏样式 `v2.11.0`

`sidebarFontSize` 和 `sidebarLineHeight` 属性可以设置侧边栏的字体样式

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
          <Cell title="文本" />
          <Cell title="文本" />
          <Cell title="文本" />
        </View>
      ))}
    </IndexBar>
  );
}
```

## API

### IndexBar Props

| 参数                          | 说明                       | 类型                   | 默认值    |
| ----------------------------- | -------------------------- | ---------------------- | --------- |
| highlightColor | 索引字符高亮颜色 | _string_ | `#07c160` |
| indexList | 索引字符列表 | _string[] \| number[]_ | `A-Z` |
| sticky | 是否开启锚点自动吸顶 | _boolean_ | `true` |
| stickyOffsetTop | 锚点自动吸顶时与顶部的距离 | _number_ | `0` |
| zIndex | z-index 层级 | _number_ | `1` |
| scrollable `v2.1.7` | SideBar 是否可滚动定位 | _boolean_ | `false` |
| showMoveTip `v2.12.0` | 是否在拖动侧边栏时显示跟随手指的提示气泡 | _boolean_ | `false` |
| sidebarFontSize `v2.11.0` | SideBar 字体大小 | _string_ | - |
| sidebarLineHeight `v2.11.0` | SideBar 字体行高 | _string_ | - |

### IndexAnchor Props

| 参数     | 说明                     | 类型               | 默认值  |
| -------- | ------------------------ | ------------------ | ------- |
| index | 索引字符 | _string \| number_ | - |
| useSlot | 是否使用自定义内容的插槽 | _boolean_ | `false` |

### IndexBar Events

| 事件名 | 说明           | 回调参数        |
| ------ | -------------- | --------------- |
| select | 选中字符时触发 | index: 索引字符 |

### IndexAnchor Slots

| 名称 | 说明                             |
| ---- | -------------------------------- |
| -    | 锚点位置显示内容，默认为索引字符 |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/material/smartui?comId=config-provider)。

**IndexBar**

| 名称                                      | 默认值       | 描述                   |
| ----------------------------------------- | ------------ | ---------------------- |
| --index-bar-index-font-size               | _10px_        | 侧边栏索引字体大小     |
| --index-bar-index-line-height             | _14px_ `v2.0.0` _16px_ `v2.12.0` | 侧边栏索引行高     |
| --index-bar-move-tip-text-padding `v2.12.0` | _0 10px 0 0_ | 拖动提示文字内边距     |
| --index-bar-move-tip-text-font-size `v2.12.0`     | _24px_   | 拖动提示文字字体大小   |
| --index-bar-move-tip-text-line-height `v2.12.0`   | _32px_   | 拖动提示文字行高       |
| --index-bar-move-tip-text-color `v2.12.0`        | _#fff_   | 拖动提示文字颜色       |

**IndexAnchor**

| 名称 | 默认值 | 描述 |
| --------------------------------------- | ------------- | ------------------ |
| --index-anchor-padding                  | _0 16px_      | 锚点内边距         |
| --index-anchor-text-color               | _rgba(0,0,0,1)_ | 锚点文字颜色     |
| --index-anchor-font-weight              | _500_         | 锚点字重           |
| --index-anchor-font-size                | _14px_        | 锚点字体大小       |
| --index-anchor-line-height              | _32px_        | 锚点行高           |
| --index-anchor-background-color         | _transparent_ | 锚点背景色         |
| --index-anchor-active-background-color  | _#ffffff_     | 锚点吸顶时背景色   |
| --index-anchor-active-text-color        | _#3678e3_     | 锚点吸顶时文字颜色 |
| --index-anchor-index-padding            | _0 4px 0 20px_ | 锚点右侧索引内边距 |

## 常见问题

### 嵌套在滚动元素中 IndexAnchor 失效？

由于 `<IndexBar />` 内部使用 ty.pageScrollTo 滚动到指定位置，因此只支持页面级滚动，无法在滚动元素中嵌套使用，例如：`view` 使用 `overflow: scroll;` 或者 `scroll-view`，具体可查看[微信小程序文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/scroll/ty.pageScrollTo.html)。