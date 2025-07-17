---
category: 布局
---

# Sticky 粘性布局

### 介绍

Sticky 组件与 CSS 中`position: sticky`属性实现的效果一致，当组件在屏幕范围内时，会按照正常的布局排列，当组件滚出屏幕范围时，始终会固定在屏幕顶部。

### 引入

```jsx
import { Sticky } from '@ray-js/smart-ui';
```

## 代码演示

### 基础用法

将内容包裹在`Sticky`组件内即可。

```jsx
import { Sticky, Button } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <Sticky>
      <Button type="primary">基础用法</Button>
    </Sticky>
  );
}
```

### 吸顶距离

通过`offsetTop`属性可以设置组件在吸顶时与顶部的距离。

```jsx
<Sticky offsetTop={50}>
  <Button type="info">吸顶距离</Button>
</Sticky>
```

### 指定容器

通过`container`属性可以指定组件的容器，页面滚动时，组件会始终保持在容器范围内，当组件即将超出容器底部时，会返回原位置。

```jsx
import { View, createSelectorQuery } from '@ray-js/ray';

const container = createSelectorQuery().select('#container')

<view id="container" style={{ height: 150 }}>
  <Sticky container={container}>
    <Button type="warning">指定容器</Button>
  </Sticky>
</view>
```

## API

### Props

| 参数      | 说明                                                         | 类型       | 默认值 |
| --------- | ------------------------------------------------------------ | ---------- | ------ |
| container | 一个函数，返回容器对应的 NodesRef 节点                       | _function_ | -      |
| offsetTop | 吸顶时与顶部的距离，单位`px`                                 | _number_   | `0`    |
| scrollTop | 当前滚动区域的滚动位置，非 `null` 时会禁用页面滚动事件的监听 | _number_   | -      |
| zIndex    | 吸顶时的 z-index                                             | _number_   | `99`   |

### Events

| 事件名   | 说明       | 回调参数                                       |
| -------- | ---------- | ---------------------------------------------- |
| onScroll | 滚动时触发 | { scrollTop: 距离顶部位置, isFixed: 是否吸顶 } |
