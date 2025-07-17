---
category: 反馈
---

# Switch 开关

### 介绍

简单易用的开关组件

### 引入

```jsx
import { Switch } from '@ray-js/smart-ui';
```

## 代码演示

### 基础用法

```jsx
import { Switch } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value, onChange] = React.useState(true);

  return (
    <Switch
      checked={value}
      onChange={event => {
        onChange(event.detail);
      }}
    />
  );
}
```

## API

### Props

| 参数                          | 说明                   | 类型      | 默认值    |
| ----------------------------- | ---------------------- | --------- | --------- |
| activeColor                   | 打开时的背景色         | _string_  | `#1989fa` |
| activeValue                   | 打开时的值             | _any_     | `true`    |
| checked                       | 开关选中状态           | _any_     | `false`   |
| disabled                      | 是否为禁用状态         | _boolean_ | `false`   |
| inactiveColor                 | 关闭时的背景色         | _string_  | `#fff`    |
| inactiveValue                 | 关闭时的值             | _any_     | `false`   |
| loading                       | 是否为加载状态         | _boolean_ | `false`   |
| name                          | 在表单内提交时的标识符 | _string_  | -         |
| size                          | 开关尺寸               | _string_  | `30px`    |
| stopClickPropagation `v1.0.4` | 是否阻止冒泡           | _boolean_ | `false`   |

### Events

| 事件名   | 说明             | 参数                       |
| -------- | ---------------- | -------------------------- |
| onChange | 开关状态切换回调 | event.detail: 是否选中开关 |

### 外部样式类

| 类名        | 说明         |
| ----------- | ------------ |
| customClass | 根节点样式类 |
| nodeClass   | 圆点样式类   |

