---
category: 布局
---


# DropdownMenu 下拉菜单

### 介绍

向下弹出的菜单列表。

### 引入

```jsx
import { DropdownMenu, DropdownItem } from '@ray-js/smart-ui';
```

## 代码演示

### 基础用法

```jsx
import React from 'react';
import { DropdownItem, DropdownMenu } from '@ray-js/smart-ui';

const option1 = [
  { text: '全部商品', value: 0 },
  { text: '新款商品', value: 1 },
  { text: '活动商品', value: 2 },
];
const option2 = [
  { text: '默认排序', value: 'a' },
  { text: '好评排序', value: 'b' },
  { text: '销量排序', value: 'c' },
];

export default function Demo() {
  return (
    <DropdownMenu>
      <DropdownItem value={0} options={option1} />
      <DropdownItem value={'a'} options={option2} />
    </DropdownMenu>
  );
}
```

### 自定义菜单内容

```jsx
import React, { useState, useCallback } from 'react';
import { DropdownItem, DropdownMenu, Cell, Switch, Button } from '@ray-js/smart-ui';
import { View, showModal } from '@ray-js/ray';

const option1 = [
  { text: '全部商品', value: 0 },
  { text: '新款商品', value: 1 },
  { text: '活动商品', value: 2 },
];
const option2 = [
  { text: '默认排序', value: 'a' },
  { text: '好评排序', value: 'b' },
  { text: '销量排序', value: 'c' },
];

export default function Demo() {
  const [switch1, setSwitch1] = useState(true);
  const [switch2, setSwitch2] = useState(false);
  const onSwitch1Change = useCallback(({ detail }) => {
    setSwitch1(detail);
  }, []);
  const onSwitch2Change = useCallback(({ detail }) => {
    setSwitch2(detail);
  }, []);

  const onConfirm = useCallback(() => {
    const pages = getCurrentPages();
    const curPage = pages[pages.length - 1];
    curPage.selectComponent('#item').toggle();
  }, []);
  return (
    <DropdownMenu>
      <DropdownItem value={0} options={option1} />
      <DropdownItem id="item" title="筛选">
        <Cell title="包邮">
          <Switch
            size="24px"
            style={{ height: '26px' }}
            checked={switch1}
            activeColor="#ee0a24"
            onChange={onSwitch1Change}
          />
        </Cell>
        <Cell title="团购">
          <Switch
            size="24px"
            style={{ height: '26px' }}
            checked={switch2}
            activeColor="#ee0a24"
            onChange={onSwitch2Change}
          />
        </Cell>
        <View style={{ padding: '5px 16px' }}>
          <Button type="danger" block round onClick={onConfirm}>
            确认
          </Button>
        </View>
      </DropdownItem>
    </DropdownMenu>
  );
}
```

### 自定义选中状态颜色

```jsx
import React from 'react';
import { DropdownItem, DropdownMenu } from '@ray-js/smart-ui';

const option1 = [
  { text: '全部商品', value: 0 },
  { text: '新款商品', value: 1 },
  { text: '活动商品', value: 2 },
];
const option2 = [
  { text: '默认排序', value: 'a' },
  { text: '好评排序', value: 'b' },
  { text: '销量排序', value: 'c' },
];

export default function Demo() {
  return (
    <DropdownMenu activeColor="#1989fa">
      <DropdownItem value={0} options={option1} />
      <DropdownItem value={'a'} options={option2} />
    </DropdownMenu>
  );
}
```

### 向上展开

```jsx
import React from 'react';
import { DropdownItem, DropdownMenu } from '@ray-js/smart-ui';

const option1 = [
  { text: '全部商品', value: 0 },
  { text: '新款商品', value: 1 },
  { text: '活动商品', value: 2 },
];
const option2 = [
  { text: '默认排序', value: 'a' },
  { text: '好评排序', value: 'b' },
  { text: '销量排序', value: 'c' },
];

export default function Demo() {
  return (
    <DropdownMenu direction="up">
      <DropdownItem value={0} options={option1} />
      <DropdownItem value={'a'} options={option2} />
    </DropdownMenu>
  );
}
```

### 禁用菜单

```jsx
import React from 'react';
import { DropdownItem, DropdownMenu } from '@ray-js/smart-ui';

const option1 = [
  { text: '全部商品', value: 0 },
  { text: '新款商品', value: 1 },
  { text: '活动商品', value: 2 },
];
const option2 = [
  { text: '默认排序', value: 'a' },
  { text: '好评排序', value: 'b' },
  { text: '销量排序', value: 'c' },
];

export default function Demo() {
  return (
    <DropdownMenu>
      <DropdownItem value={0} disabled options={option1} />
      <DropdownItem value={'a'} disabled options={option2} />
    </DropdownMenu>
  );
}
```

### 异步打开/关闭

通过 `beforeToggle` 事件可以在下拉菜单打开或者关闭前执行特定的逻辑，实现状态变更前校验、异步打开/关闭的目的

```jsx
import React, { useCallback } from 'react';
import { DropdownItem, DropdownMenu } from '@ray-js/smart-ui';
import { showModal } from '@ray-js/ray';

const option1 = [
  { text: '全部商品', value: 0 },
  { text: '新款商品', value: 1 },
  { text: '活动商品', value: 2 },
];

export default function Demo() {
  const onBeforeChange = useCallback(({ detail: { status, callback } }) => {
    showModal({
      title: '异步打开/关闭',
      content: `确定要${status ? '打开' : '关闭'}下拉菜单吗？`,
      success: res => {
        if (res.confirm) {
          callback(true);
        } else if (res.cancel) {
          callback(false);
        }
      },
    });
  }, []);
  return (
    <DropdownMenu>
      <DropdownItem value={0} options={option1} useBeforeToggle onBeforeToggle={onBeforeChange} />
    </DropdownMenu>
  );
}
```

## API

### DropdownMenu Props

| 参数                | 说明                           | 类型      | 默认值    |
| ------------------- | ------------------------------ | --------- | --------- |
| activeColor         | 菜单标题和选项的选中态颜色     | _string_  | `#ee0a24` |
| zIndex              | 菜单栏 z-index 层级            | _number_  | `10`      |
| duration            | 动画时长，单位毫秒             | _number_  | `200`     |
| direction           | 菜单展开方向，可选值为 up      | _string_  | `down`    |
| overlay             | 是否显示遮罩层                 | _boolean_ | `true`    |
| safeAreaTabBar      | 是否留出底部 tabbar 安全距离   | _boolean_ | `false`   |
| closeOnClickOverlay | 是否在点击遮罩层后关闭菜单     | _boolean_ | `true`    |
| closeOnClickOutside | 是否在点击外部 menu 后关闭菜单 | _boolean_ | `true`    |

### DropdownItem Props

| 参数            | 说明                                                 | 类型               | 默认值         |
| --------------- | ---------------------------------------------------- | ------------------ | -------------- |
| value           | 当前选中项对应的 value                               | _number \| string_ | -              |
| title           | 菜单项标题                                           | _string_           | 当前选中项文字 |
| options         | 选项数组                                             | _Option[]_         | `[]`           |
| disabled        | 是否禁用菜单                                         | _boolean_          | `false`        |
| titleClass      | 标题额外类名，建议使用自定义样式 itemTitleClass 代替 | _string_           | -              |
| popupStyle      | 自定义弹出层样式                                     | _object_           | -              |
| useBeforeToggle | 是否开启下拉菜单打开或者关闭前校验                   | _boolean_          | `false`        |

### DropdownItem Events

| 事件名        | 说明                                                                  | 回调参数                                                                                                                                          |
| ------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| change        | 点击选项导致 value 变化时触发                                         | value                                                                                                                                             |
| open          | 打开菜单栏时触发                                                      | -                                                                                                                                                 |
| close         | 关闭菜单栏时触发                                                      | -                                                                                                                                                 |
| opened        | 打开菜单栏且动画结束后触发                                            | -                                                                                                                                                 |
| closed        | 关闭菜单栏且动画结束后触发                                            | -                                                                                                                                                 |
| beforeToggle | 下拉菜单打开或者关闭前触发，需要将`useBeforeToggle`属性设置为`true` | `event.detail.status`: `true` 打开下拉菜单，`false` 关闭下拉菜单 <br>`event.detail.callback`: 回调函数，调用`callback(false)`终止下拉菜单状态变更 |

### DropdownItem 方法

通过 selectComponent(id) 可访问。

| 方法名 | 说明                                                          | 参数           | 返回值 |
| ------ | ------------------------------------------------------------- | -------------- | ------ |
| toggle | 切换菜单展示状态，传`true`为显示，`false`为隐藏，不传参为取反 | show?: boolean | -      |

### Option 数据结构

| 键名  | 说明                             | 类型               |
| ----- | -------------------------------- | ------------------ |
| text  | 文字                             | _string_           |
| value | 标识符                           | _number \| string_ |
| icon  | 左侧[图标名称](#/icon)或图片链接 | _string_           |

### DropdownMenu 外部样式类

| 类名         | 说明         |
| ------------ | ------------ |
| customClass | 根节点样式类 |
| titleClass  | 选中项样式类 |

### DropdownItem 外部样式类

| 类名             | 说明         |
| ---------------- | ------------ |
| customClass     | 根节点样式类 |
| itemTitleClass | 选项样式类   |
