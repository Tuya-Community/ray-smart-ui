---
category: 导航
---

# IndexBar 索引栏

### 介绍

用于列表的索引分类显示和快速定位。

### 引入

```jsx
import { IndexBar } from '@ray-js/smart-ui';
```

## 代码演示

### 基础用法

点击索引栏时，会自动跳转到对应的`IndexAnchor`锚点位置。

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
import { View } from '@ray-js/ray'
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

## API

### IndexBar Props

| 参数            | 说明                       | 类型                   | 默认值    | 版本 |
| --------------- | -------------------------- | ---------------------- | --------- | ---- |
| indexList       | 索引字符列表               | _string[] \| number[]_ | `A-Z`     | -    |
| zIndex          | z-index 层级               | _number_               | `1`       | -    |
| sticky          | 是否开启锚点自动吸顶       | _boolean_              | `true`    | -    |
| stickyOffsetTop | 锚点自动吸顶时与顶部的距离 | _number_               | `0`       | -    |
| highlightColor  | 索引字符高亮颜色           | _string_               | `#07c160` | -    |

### IndexAnchor Props

| 参数    | 说明                     | 类型               | 默认值  | 版本 |
| ------- | ------------------------ | ------------------ | ------- | ---- |
| useSlot | 是否使用自定义内容的插槽 | _boolean_          | `false` | -    |
| index   | 索引字符                 | _string \| number_ | -       | -    |

### IndexBar Events

| 事件名 | 说明           | 回调参数        |
| ------ | -------------- | --------------- |
| select | 选中字符时触发 | index: 索引字符 |

### IndexAnchor Slots

| 名称 | 说明                             |
| ---- | -------------------------------- |
| -    | 锚点位置显示内容，默认为索引字符 |
