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
    <>
      <Switch
        checked={value}
        onChange={event => {
          onChange(event.detail);
        }}
      />
      <Switch
        checked={!value}
        onChange={event => {
          onChange(event.detail);
        }}
      />
    </>
  );
}
```

### 禁用

```jsx
import { Switch } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value, onChange] = React.useState(true);

  return (
    <Switch
      checked={value}
      disabled
    />
  );
}
```

### 加载

```jsx
import { Switch } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value, onChange] = React.useState(true);

  return (
    <Switch
      checked={value}
      loading
    />
  );
}
```

### 自定义大小

`size` 属性可以设置组件的大小。

```jsx
import { Switch } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value, onChange] = React.useState(true);

  return (
    <Switch
      checked={value}
      size="24px"
    />
  );
}
```

### 自定义颜色

设置 `activeColor` 可以设置选择后的颜色，`inactiveColor` 可以设置非选择后的颜色

```jsx
import { Switch } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value, onChange] = React.useState(true);

  return (
    <Switch
      checked={value}
      activeColor="#07c160"
      inactiveColor="#ee0a24"
    />
  );
}
```

### 渐变色 `v2.5.0`

所有 CSS background 可以实现的属性， `activeColor` 和 `inactiveColor` 都可以实现

```jsx
import { Switch } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value, onChange] = React.useState(true);

  return (
    <Switch
      checked={value}
      activeColor="linear-gradient(to right, #ff7e5f, #987AFF)"
      inactiveColor="linear-gradient(to right, #407e5f, #841AFF)"
    />
  );
}
```

### 异步控制

```jsx
import { Switch, DialogInstance, Dialog } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value, setValue] = React.useState(true);

  const onChange = ({ detail }) => {
    DialogInstance.confirm({
      context: this,
      title: '提示',
      message: '是否切换开关？',
    }).then(() => {
      setValue(detail);
    });
  };

  return (
    <>
      <Switch
        checked={value}
        onChange={onChange}
      />
      <Dialog id="smart-dialog" />
    </>
  );
}
```

### 阻止冒泡

`stopClickPropagation` 属性可以阻止冒泡。

```jsx
import { Switch } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value, onChange] = React.useState(true);

  return (
    <Switch
      checked={value}
      stopClickPropagation
      onChange={event => {
        onChange(event.detail);
      }}
    />
  );
}
```

### 列表用法

```jsx
import { Switch, Cell, CellGroup } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value, onChange] = React.useState(true);

  return (
    <CellGroup>
      <Cell title="标题">
        <Switch
          checked={value}
          onChange={event => {
            onChange(event.detail);
          }}
        />
      </Cell>
    </CellGroup>
  );
}
```

## API

### Props

| 参数                            | 说明                   | 类型      | 默认值    |
| ------------------------------- | ---------------------- | --------- | --------- |
| activeColor | 打开时的背景色 | _string_ | `#1989fa` |
| activeValue | 打开时的值 | _any_ | `true` |
| checked | 开关选中状态 | _any_ | `false` |
| disabled | 是否为禁用状态 | _boolean_ | `false` |
| inactiveColor | 关闭时的背景色 | _string_ | `#fff` |
| inactiveValue | 关闭时的值 | _any_ | `false` |
| loading | 是否为加载状态 | _boolean_ | `false` |
| name | 在表单内提交时的标识符 | _string_ | - |
| size | 开关尺寸 | _string_ | `30px` |
| stopClickPropagation `v1.0.2` | 是否阻止冒泡 | _boolean_ | `false` |

### Events

| 事件名      | 说明             | 参数                       |
| ----------- | ---------------- | -------------------------- |
| onChange | 开关状态切换回调 | event.detail: 是否选中开关 |

### 外部样式类

| 类名         | 说明         |
| ------------ | ------------ |
| customClass | 根节点样式类 |
| nodeClass | 圆点样式类 |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/material/smartui?comId=config-provider)。

| 名称                          | 默认值                                 | 描述 |
| ----------------------------- | -------------------------------------- | ---- |
| --switch-width | _1.5338em_ | 开关宽度 |
| --switch-height | _0.867em_ | 开关高度 |
| --switch-node-size | _0.867em_ | 开关节点大小 |
| --switch-node-z-index | _1_ | 开关节点层级 |
| --switch-node-background-color | _#fff_ | - |
| --switch-node-box-shadow | _0 3px 1px 0 rgba(0, 0, 0, 0.05),_ | 开关节点阴影 |
| --switch-background-color | _var(--app-B4-N6, rgba(0, 0, 0, 0.2))_ | 开关背景颜色 |
| --switch-on-background-color | _#1989fa_ | 开关开启时背景颜色 |
| --switch-transition-duration | _0.3s_ | 开关过渡持续时间 |
| --switch-disabled-opacity | _0.4_ | 开关禁用时不透明度 |
| --switch-border `@deprecated v2.5.0` | _0.08em solid rgba(0, 0, 0, 0.1)_ | 开关边框 |
| --switch-node-on-background-color `v2.4.0` | _var(--switch-node-background-color, #fff)_ | 开启时圆球的背景色 |
| --switch-padding `v2.5.0` | _0.08em_ | 内部边距 |