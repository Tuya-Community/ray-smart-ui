---
category: 导航
---

# Sidebar 侧边导航

### 介绍

垂直展示的导航栏，用于在不同的内容区域之间进行切换。

### 引入

```jsx
import { Sidebar, SidebarItem } from '@ray-js/smart-ui';
```

## 代码演示

### 基础用法

通过在`Sidebar`上设置`activeKey`属性来控制选中项。

```jsx
import { Sidebar, SidebarItem } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const activeKey = 0;

  return (
    <Sidebar activeKey={activeKey}>
      <SidebarItem title="标签名" />
      <SidebarItem title="标签名" />
      <SidebarItem title="标签名" />
    </Sidebar>
  );
}
```

### 徽标提示

设置`dot`属性后，会在右上角展示一个小红点。设置`badge`属性后，会在右上角展示相应的徽标。

```jsx
import { Sidebar, SidebarItem } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const activeKey = 0;

  return (
    <Sidebar activeKey={activeKey}>
      <SidebarItem title="标签名" dot />
      <SidebarItem title="标签名" badge="5" />
      <SidebarItem title="标签名" badge="99+" />
    </Sidebar>
  );
}
```

### 禁用选项

通过`disabled`属性禁用选项。

```jsx
import { Sidebar, SidebarItem } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const activeKey = 0;

  return (
    <Sidebar activeKey={activeKey}>
      <SidebarItem title="标签名" />
      <SidebarItem title="标签名" disabled />
      <SidebarItem title="标签名" />
    </Sidebar>
  );
}
```

### 监听切换事件

设置`change`方法来监听切换导航项时的事件。

```jsx
const activeKey = 0;
const onChange = React.useCallback(event => {
  NotifyInstance({
    type: 'primary',
    message: `切换至第${event.detail}项`,
  });
}, []);

<Sidebar activeKey={activeKey} onChange={onChange}>
  <SidebarItem title="标签名 1" />
  <SidebarItem title="标签名 2" />
  <SidebarItem title="标签名 3" />
</Sidebar>

<Notify id="smart-notify" />
```

## API

### Sidebar Props

| 参数      | 说明         | 类型               | 默认值 |
| --------- | ------------ | ------------------ | ------ |
| activeKey | 选中项的索引 | _string \| number_ | `0`    |

### Sidebar Event

| 事件名   | 说明           | 参数               |
| -------- | -------------- | ------------------ |
| onChange | 切换徽章时触发 | 当前选中徽章的索引 |

### Sidebar 外部样式类

| 类名        | 说明         |
| ----------- | ------------ |
| customClass | 根节点样式类 |

### SidebarItem Props

| 参数     | 说明                 | 类型               | 默认值  |
| -------- | -------------------- | ------------------ | ------- |
| badge    | 图标右上角徽标的内容 | _string \| number_ | `''`    |
| disabled | 是否禁用该项         | _boolean_          | `false` |
| dot      | 是否显示右上角小红点 | _boolean_          | `false` |
| title    | 内容                 | _string_           | `''`    |

### SidebarItem Slot

| 名称  | 说明                                        |
| ----- | ------------------------------------------- |
| title | 自定义标题栏，如果设置了`title`属性则不生效 |

### SidebarItem Event

| 事件名  | 说明           | 参数                            |
| ------- | -------------- | ------------------------------- |
| onClick | 点击徽章时触发 | `event.detail` 为当前徽章的索引 |

### SidebarItem 外部样式类

| 类名        | 说明         |
| ----------- | ------------ |
| customClass | 根节点样式类 |
