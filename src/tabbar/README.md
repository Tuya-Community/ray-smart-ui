---
category: 导航
---

# Tabbar 标签栏

### 介绍

底部导航栏，用于在不同页面之间进行切换。

### 引入

```jsx
import { Tabbar, TabbarItem } from '@ray-js/smart-ui';
```

## 代码演示

### 基础用法

```jsx
import Tornado from '@tuya-miniapp/icons/dist/svg/Tornado';
import Timer from '@tuya-miniapp/icons/dist/svg/Timer';
import Snow from '@tuya-miniapp/icons/dist/svg/Snow';
import Airplane from '@tuya-miniapp/icons/dist/svg/Airplane';
import React from 'react';
import { Tabbar, TabbarItem } from '@ray-js/smart-ui';

export default function Demo() {
  const [active, setActive] = React.useState(0);
  const onChange = e => {
    setActive(e.detail);
  };

  return (
    <Tabbar active={active} safeAreaInsetBottom={false} onChange={onChange}>
      <TabbarItem icon={Tornado}>标签</TabbarItem>
      <TabbarItem icon={Timer}>标签</TabbarItem>
      <TabbarItem icon={Snow}>标签</TabbarItem>
      <TabbarItem icon={Airplane}>标签</TabbarItem>
    </Tabbar>
  );
}
```

### 通过名称匹配

在标签指定`name`属性的情况下，`active`的值为当前标签的`name`。

```jsx
import Tornado from '@tuya-miniapp/icons/dist/svg/Tornado';
import Timer from '@tuya-miniapp/icons/dist/svg/Timer';
import Snow from '@tuya-miniapp/icons/dist/svg/Snow';
import Airplane from '@tuya-miniapp/icons/dist/svg/Airplane';
import React, { useState } from 'react';
import { Tabbar, TabbarItem } from '@ray-js/smart-ui';

export default function Demo() {
  const [active, setActive] = useState('home');
  const onChange = e => {
    setActive(e.detail);
  };
  return (
    <Tabbar active={active} safeAreaInsetBottom={false} onChange={onChange}>
      <TabbarItem name="home" icon={Tornado}>
        标签
      </TabbarItem>
      <TabbarItem name="search" icon={Timer}>
        标签
      </TabbarItem>
      <TabbarItem name="friends" icon={Snow}>
        标签
      </TabbarItem>
      <TabbarItem name="setting" icon={Airplane}>
        标签
      </TabbarItem>
    </Tabbar>
  );
}
```

### 显示徽标

```jsx
import Tornado from '@tuya-miniapp/icons/dist/svg/Tornado';
import Timer from '@tuya-miniapp/icons/dist/svg/Timer';
import Snow from '@tuya-miniapp/icons/dist/svg/Snow';
import Airplane from '@tuya-miniapp/icons/dist/svg/Airplane';
import React, { useState } from 'react';
import { Tabbar, TabbarItem } from '@ray-js/smart-ui';

export default function Demo() {
  const [active, setActive] = useState(0);
  const onChange = e => {
    setActive(e.detail);
  };
  return (
    <Tabbar active={active} safeAreaInsetBottom={false} onChange={onChange}>
      <TabbarItem icon={Tornado}>标签</TabbarItem>
      <TabbarItem icon={Timer} dot>
        标签
      </TabbarItem>
      <TabbarItem icon={Snow} info="5">
        标签
      </TabbarItem>
      <TabbarItem icon={Airplane} info="20">
        标签
      </TabbarItem>
    </Tabbar>
  );
}
```

### 自定义图标

可以通过 slot 自定义图标，其中 icon slot 代表未选中状态下的图标，icon-active slot 代表选中状态下的图标。

```jsx
import Snow from '@tuya-miniapp/icons/dist/svg/Snow';
import Airplane from '@tuya-miniapp/icons/dist/svg/Airplane';

import React, { useState } from 'react';
import { Tabbar, TabbarItem } from '@ray-js/smart-ui';
import { Image } from '@ray-js/ray'

export default function Demo() {
  const [active, setActive] = useState(0);
  const onChange = e => {
    setActive(e.detail);
  };
  const icon = {
    normal: '',
    active: 'https://static1.tuyacn.com/static/tuya-miniapp-doc/_next/static/images/logo-small.png',
  };
  return (
    <Tabbar active={active} safeAreaInsetBottom={false} onChange={onChange}>
      <TabbarItem info="3">
        <Image slot="icon" src={icon.normal} mode="aspectFit" style={{ width: 30, height: 18 }} />
        <Image
          slot="icon-active"
          src={icon.active}
          mode="aspectFit"
          style={{ width: 30, height: 18 }}
        />
        自定义
      </TabbarItem>
      <TabbarItem icon={Snow}>标签</TabbarItem>
      <TabbarItem icon={Airplane}>标签</TabbarItem>
    </Tabbar>
  );
}
```

### 自定义颜色

```jsx
import Tornado from '@tuya-miniapp/icons/dist/svg/Tornado';
import Timer from '@tuya-miniapp/icons/dist/svg/Timer';
import Snow from '@tuya-miniapp/icons/dist/svg/Snow';
import Airplane from '@tuya-miniapp/icons/dist/svg/Airplane';

import React, { useState } from 'react';
import { Tabbar, TabbarItem } from '@ray-js/smart-ui';

export default function Demo() {
  const [active, setActive] = useState(0);
  const onChange = e => {
    setActive(e.detail);
  };

  return (
    <Tabbar
      active={active}
      safeAreaInsetBottom={false}
      activeColor="#07c160"
      inactiveColor="rgba(0, 0, 0, 0.3)"
      onChange={onChange}
    >
      <TabbarItem icon={Tornado}>标签</TabbarItem>
      <TabbarItem icon={Timer}>标签</TabbarItem>
      <TabbarItem icon={Snow}>标签</TabbarItem>
      <TabbarItem icon={Airplane}>标签</TabbarItem>
    </Tabbar>
  );
}
```

### 切换标签事件

```jsx
import Tornado from '@tuya-miniapp/icons/dist/svg/Tornado';
import Timer from '@tuya-miniapp/icons/dist/svg/Timer';
import Snow from '@tuya-miniapp/icons/dist/svg/Snow';
import Airplane from '@tuya-miniapp/icons/dist/svg/Airplane';

import React, { useState } from 'react';
import { Tabbar, TabbarItem } from '@ray-js/smart-ui';
import { showToast } from '@ray-js/ray';

export default function Demo() {
  const [active, setActive] = useState(0);
  const handleChange = e => {
    setActive(e.detail);
    showToast({ title: `点击标签 ${e.detail + 1}`, icon: 'none' });
  };

  return (
    <Tabbar active={active} safeAreaInsetBottom={false} onChange={handleChange}>
      <TabbarItem icon={Tornado}>标签1</TabbarItem>
      <TabbarItem icon={Timer}>标签2</TabbarItem>
      <TabbarItem icon={Snow}>标签3</TabbarItem>
      <TabbarItem icon={Airplane}>标签4</TabbarItem>
    </Tabbar>
  );
}
```

### 结合自定义 tabBar

请参考 [智能小程序官方文档](https://developer.tuya.com/cn/miniapp/develop/miniapp/framework/app/app-json#tabbar)

## API

### Tabbar Props

| 参数                | 说明                                               | 类型      | 默认值    |
| ------------------- | -------------------------------------------------- | --------- | --------- |
| active              | 当前选中标签的索引                                 | _number_  | -         |
| activeColor         | 选中标签的颜色                                     | _string_  | `#1989fa` |
| border              | 是否展示外边框                                     | _boolean_ | `true`    |
| fixed               | 是否固定在底部                                     | _boolean_ | `true`    |
| inactiveColor       | 未选中标签的颜色                                   | _string_  | `#7d7e80` |
| placeholder         | 固定在底部时，是否在标签位置生成一个等高的占位元素 | _boolean_ | `false`   |
| safeAreaInsetBottom | 是否为 iPhoneX 留出底部安全距离                    | _boolean_ | `true`    |
| zIndex              | 元素 z-index                                       | _number_  | `1`       |

### Tabbar Event

| 事件名   | 说明           | 参数                                     |
| -------- | -------------- | ---------------------------------------- |
| onChange | 切换标签时触发 | event.detail: 当前选中标签的名称或索引值 |

### TabbarItem Props

| 参数       | 说明                                                                                 | 类型               | 默认值           |
| ---------- | ------------------------------------------------------------------------------------ | ------------------ | ---------------- |
| dot        | 是否显示小红点                                                                       | _boolean_          | -                |
| icon       | 图标名称或图片链接，可选值见 [Icon 组件](/material/smartui?comId=icon)               | _string_           | -                |
| iconPrefix | 图标类名前缀，同 Icon 组件的 [class-prefix 属性](/material/smartui?comId=icon#Props) | _string_           | `smart-icon`     |
| info       | 图标右上角提示信息                                                                   | _string \| number_ | -                |
| linkType   | 链接跳转类型，可选值为 `redirectTo`、`switchTab`、`reLaunch`                         | _string_           | `redirectTo`     |
| name       | 标签名称，作为匹配的标识符                                                           | _string \| number_ | 当前标签的索引值 |
| url        | 点击后跳转的链接地址, 需要以 `/` 开头                                                | _string_           | -                |

### TabbarItem Slot

| 名称       | 说明           |
| ---------- | -------------- |
| icon       | 未选中时的图标 |
| iconActive | 选中时的图标   |
