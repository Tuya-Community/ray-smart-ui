---
category: 展示
---

# Loading 加载

### 介绍

加载图标，用于表示加载中的过渡状态。

### 引入

```js
import { Loading } from '@ray-js/smart-ui';
```

## 代码演示

### 加载类型

```jsx
import { Loading } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';
import React from 'react';

export default function Demo() {
  return (
    <View>
      <Loading />
      <Loading type="spinner" />
    </View>
  );
}
```

### 自定义颜色

```jsx
import { Loading } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';
import React from 'react';

export default function Demo() {
  return (
    <View>
      <Loading color="#1989fa" />
      <Loading type="spinner" color="#1989fa" />
    </View>
  );
}
```

### 加载文案

```jsx
import { Loading } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <Loading size="24px">加载中...</Loading>
  );
}
```

### 垂直排列

```jsx
import { Loading } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <Loading size="24px" vertical>
      加载中...
    </Loading>
  );
}
```

## API

### Props

| 参数     | 说明                          | 类型               | 默认值     |
| -------- | ----------------------------- | ------------------ | ---------- |
| color    | 颜色                          | _string_           | `#c9c9c9`  |
| type     | 类型，可选值为 `spinner`      | _string_           | `circular` |
| size     | 加载图标大小，默认单位为 `px` | _string \| number_ | `30px`     |
| textSize | 文字大小，默认单位为为 `px`   | _string \| number_ | `14px`     |
| vertical | 是否垂直排列图标和文字内容    | _boolean_          | `false`    |

### Slots

| 名称 | 说明     |
| ---- | -------- |
| -    | 加载文案 |

### 外部样式类

| 类名        | 说明         |
| ----------- | ------------ |
| customClass | 根节点样式类 |
