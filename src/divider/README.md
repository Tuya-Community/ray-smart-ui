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

### 内容位置

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

| 参数             | 说明                              | 类型      | 默认值 |
| ---------------- | --------------------------------- | --------- | ------ |
| contentPosition | 文本位置，`left` `center` `right` | _string_ | - |
| customStyle | 自定义样式 | _React.CSSProperties_ | - |
| dashed | 虚线 | _boolean_ | false |
| hairline | 细线 | _boolean_ | false |

### Slot

| 名称 | 说明           |
| ---- | -------------- |
| 默认 | 自定义文本内容 |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/material/smartui?comId=config-provider)。

| 名称                          | 默认值                                 | 描述 |
| ----------------------------- | -------------------------------------- | ---- |
| --divider-margin | _@padding-md 0_ | 上下边距 |
| --divider-text-color | _#969799_ | 文本颜色 |
| --divider-font-size | _14px_ | 字体大小 |
| --divider-line-height | _24px_ | 行高 |
| --divider-border-color | _var(--app-B6-N7, rgba(0, 0, 0, 0.1))_ | 边框颜色 |
| --divider-content-padding | _16px_ | 内容内边距 |
| --divider-content-left-width | _10%_ | 左侧内容宽度 |
| --divider-content-right-width | _10%_ | 右侧内容宽度 |