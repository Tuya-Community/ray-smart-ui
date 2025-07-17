---
category: 数据录入
---

# Rate 评分

### 介绍

用于对事物进行评级操作。

### 引入

```jsx
import { Rate } from '@ray-js/smart-ui';
```

## 代码演示

### 基础用法

```jsx
import { showToast } from '@ray-js/ray';
import { Rate } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value, setValue] = React.useState(3);
  const onChange = event => {
    setValue(event.detail);
    showToast({
      icon: 'none',
      title: `当前值：${event.detail}`,
    });
  };

  return <Rate value={value} onChange={onChange} />;
}
```

### 自定义图标

```jsx
import { showToast } from '@ray-js/ray';
import { Rate } from '@ray-js/smart-ui';
import React, { useState } from 'react';

import IcloudIcon from '@tuya-miniapp/icons/dist/svg/Icloud';
import XmarkIcloudIcon from '@tuya-miniapp/icons/dist/svg/XmarkIcloud';

const icon = IcloudIcon;
const voidIcon = XmarkIcloudIcon;

export default function Demo() {
  const [value, setValue] = useState(3);
  const onChange = event => {
    setValue(event.detail);
    showToast({
      icon: 'none',
      title: `当前值：${event.detail}`,
    });
  };

  return <Rate value={value} icon={icon} voidIcon={voidIcon} onChange={onChange} />;
}
```

### 自定义样式

```jsx
import { showToast } from '@ray-js/ray';
import { Rate } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value, setValue] = React.useState(3);
  const onChange = event => {
    setValue(event.detail);
    showToast({
      icon: 'none',
      title: `当前值：${event.detail}`,
    });
  };

  return <Rate value={value} size={25} color="#ffd21e" voidColor="#eee" onChange={onChange} />
}
```

### 半星

```jsx
import { showToast } from '@ray-js/ray';
import { Rate } from '@ray-js/smart-ui';
import React, { useState } from 'react';

import IcloudIcon from '@tuya-miniapp/icons/dist/svg/Icloud';
import XmarkIcloudIcon from '@tuya-miniapp/icons/dist/svg/XmarkIcloud';

const icon = IcloudIcon;
const voidIcon = XmarkIcloudIcon;

export default function Demo() {
  const [value, setValue] = useState(2.5);

  const onChange = event => {
    setValue(event.detail);
    showToast({
      icon: 'none',
      title: `当前值：${event.detail}`,
    });
  };

  return <Rate value={value} allowHalf voidIcon={voidIcon} voidColor="#eee" onChange={onChange} />;
}
```

### 自定义数量

```jsx
import { showToast } from '@ray-js/ray';
import { Rate } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value, setValue] = React.useState(3);
  const onChange = event => {
    setValue(event.detail);
    showToast({
      icon: 'none',
      title: `当前值：${event.detail}`,
    });
  };

  return <Rate value={value} count={6} onChange={onChange} />
}
```

### 禁用状态

```jsx
import { showToast } from '@ray-js/ray';
import { Rate } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value, setValue] = React.useState(3);
  const onChange = event => {
    setValue(event.detail);
    showToast({
      icon: 'none',
      title: `当前值：${event.detail}`,
    });
  };

  return <Rate disabled value={value} onChange={onChange} />
}
```

### 只读状态

```jsx
import { showToast } from '@ray-js/ray';
import { Rate } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value, setValue] = React.useState(3);
  const onChange = event => {
    setValue(event.detail);
    showToast({
      icon: 'none',
      title: `当前值：${event.detail}`,
    });
  };

  return <Rate readonly value={value} onChange={onChange} />
}
```

### 监听 change 事件

评分变化时，会触发 `change` 事件。

```jsx
import { showToast } from '@ray-js/ray';
import { Rate } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [value, setValue] = useState(2);

  const onChange = event => {
    setValue(event.detail);
    showToast({
      icon: 'none',
      title: `当前值：${event.detail}`,
    });
  };

  return <Rate value={value} onChange={onChange} />;
}
```

## API

### Props

| 参数          | 说明                                                       | 类型               | 默认值    |
| ------------- | ---------------------------------------------------------- | ------------------ | --------- |
| name          | 在表单内提交时的标识符                                     | _string_           | -         |
| value         | 当前分值                                                   | _number_           | -         |
| count         | 图标总数                                                   | _number_           | `5`       |
| size          | 图标大小，默认单位为 `px`                                  | _string \| number_ | `20px`    |
| gutter        | 图标间距，默认单位为 `px`                                  | _string \| number_ | `4px`     |
| color         | 选中时的颜色                                               | _string_           | `#ffd21e` |
| voidColor     | 未选中时的颜色                                             | _string_           | `#c7c7c7` |
| icon          | 选中时的图标名称或图片链接，可选值见 [Icon 组件](#/icon)   | _string_           | `star`    |
| voidIcon      | 未选中时的图标名称或图片链接，可选值见 [Icon 组件](#/icon) | _string_           | `star-o`  |
| allowHalf     | 是否允许半选                                               | _boolean_          | `false`   |
| readonly      | 是否为只读状态                                             | _boolean_          | `false`   |
| disabled      | 是否禁用评分                                               | _boolean_          | `false`   |
| disabledColor | 禁用时的颜色                                               | _string_           | `#bdbdbd` |
| touchable     | 是否可以通过滑动手势选择评分                               | _boolean_          | `true`    |

### Events

| 事件名称 | 说明                     | 回调参数              |
| -------- | ------------------------ | --------------------- |
| onChange | 当前分值变化时触发的事件 | event.detail:当前分值 |

### 外部样式类

| 类名        | 说明         |
| ----------- | ------------ |
| customClass | 根节点样式类 |
| iconClass   | 图标样式类   |
