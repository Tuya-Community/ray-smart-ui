---
category: 展示
---

# Collapse 折叠面板

### 介绍

将一组内容放置在多个折叠面板中，点击面板的标题可以展开或收缩其内容。

### 引入

```jsx
import { Collapse } from '@ray-js/smart-ui';
```

## 代码演示

### 基础用法

```jsx
import { Collapse, CollapseItem } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [state, setState] = React.useState({
    active1: [0],
    active2: 0,
    active3: [],
    active4: [],
    title1: '标题1',
    title2: '标题2',
    title3: '标题3',
    content1: '代码是写出来给人看的，附带能在机器上运行',
    content2: '代码是写出来给人看的，附带能在机器上运行',
    content3: '代码是写出来给人看的，附带能在机器上运行',
  });

  const onChange = event => {
    const { key } = event.currentTarget.dataset;
    setState(v => ({
      ...v,
      [key]: event.detail,
    }));
  };

  return (
    <Collapse value={state.active1} data-key="active1" onChange={onChange}>
      <CollapseItem title={state.title1}>{state.content1}</CollapseItem>
      <CollapseItem title={state.title2}>{state.content2}</CollapseItem>
      <CollapseItem title={state.title3} disabled>
        {state.content3}
      </CollapseItem>
    </Collapse>
  );
}
```

## API

### Collapse

| 参数      | 说明                                             | 类型    | 默认值 |
| --------- | ------------------------------------------------ | ------- | ------ |
| border    | 是否显示内边框                                   | boolean | true   |
| clickable | 是否开启点击反馈                                 | boolean | false  |
| disabled  | 是否禁用面板                                     | boolean | false  |
| icon      | 标题栏左侧图标名称或图片链接，可选值见 Icon 组件 | string  | -      |
| isLink    | 是否展示标题栏右侧箭头并开启点击反馈             | boolean | true   |
| label     | 标题栏描述信息                                   | string  | -      |
| name      | 唯一标识符，默认为索引值                         | string  | number | index |
| size      | 标题栏大小，可选值为 large                       | string  | -      |
| title     | 标题栏左侧内容                                   | string  | number | - |
| value     | 标题栏右侧内容                                   | string  | number | - |
