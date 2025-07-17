---
category: 展示
---

# Divider 分割线

### 介绍

用于将内容分隔为多个区域。

### 引入

```jsx
import { Divider } from '@ray-js/smart-ui';
```

## 代码演示

### 基础用法

```jsx
import { Divider } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Divider />;
}
```

### 使用 hairline

```jsx
import { Divider } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Divider hairline />
}
```

### 虚线

```jsx
import { Divider } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Divider dashed />
}
```

### 文本位置

```jsx
import { Divider } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <>
    <Divider contentPosition="center">文本</Divider>
    <Divider contentPosition="left">文本</Divider>
    <Divider contentPosition="right">文本</Divider>
  </>
}
```

### 自定义属性

```jsx
import { Divider } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <>
    <Divider contentPosition="center" textColor="#1989fa">文本颜色</Divider>
    <Divider contentPosition="center" borderColor="#1989fa"> border 颜色 </Divider>
    <Divider contentPosition="center" fontSize="18">字体大小</Divider>
  </>
}
```

### 自定义样式

```jsx
import { Divider } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Divider
    contentPosition="center"
    customStyle={{
      color: '#1989fa',
      borderColor: '#1989fa',
      fontSize: '18px'
    }}
  >
    文本
  </Divider>
}
```

## API

### Props

| 参数            | 说明                              | 类型      | 默认值 |
| --------------- | --------------------------------- | --------- | ------ |
| contentPosition | 文本位置，`left` `center` `right` | _string_  | -      |
| customStyle     | 自定义样式                        | _object_  | -      |
| dashed          | 虚线                              | _boolean_ | false  |
| hairline        | 细线                              | _boolean_ | false  |

### Slot

| 名称 | 说明           |
| ---- | -------------- |
| 默认 | 自定义文本内容 |
