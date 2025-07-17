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

通过 `beforeToggle` 事件可以在下拉菜单打开或者关闭前执行特定的逻辑，实现状态变更前校验、异步打开/关闭的目的。  
`scrollStyle` `v2.5.0` 当弹框需要滚动时，可以设置此属性，给定一个高度即可。

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
      <DropdownItem scrollStyle={{ height: '120px' }} value={0} options={option1} useBeforeToggle onBeforeToggle={onBeforeChange} />
    </DropdownMenu>
  );
}
```

## API

### DropdownMenu Props

| 参数                   | 说明                           | 类型      | 默认值    |
| ---------------------- | ------------------------------ | --------- | --------- |
| activeColor | 菜单标题和选项的选中态颜色 | _string_ | `#3678E3` |
| triangleColor `v2.0.0` | 箭头未选中状态下的颜色 | _string_ | `#CCCCCC` |
| closeOnClickOutside | 是否在点击外部 menu 后关闭菜单 | _boolean_ | `true` |
| closeOnClickOverlay | 是否在点击遮罩层后关闭菜单 | _boolean_ | `true` |
| direction | 菜单展开方向，可选值为 up | _string_ | `down` |
| duration | 动画时长，单位毫秒 | _number_ | `200` |
| overlay | 是否显示遮罩层 | _boolean_ | `true` |
| safeAreaTabBar | 是否留出底部 tabbar 安全距离 | _boolean_ | `false` |
| zIndex | 菜单栏 z-index 层级 | _number_ | `10` |

### DropdownItem Props

| 参数              | 说明                                                   | 类型               | 默认值         |
| ----------------- | ------------------------------------------------------ | ------------------ | -------------- |
| disabled | 是否禁用菜单 | _boolean_ | `false` |
| options | 选项数组 | _Option[]_ | `[]` |
| popupStyle | 自定义弹出层样式 | _React.CSSProperties_ | - |
| title | 菜单项标题 | _string_ | 当前选中项文字 |
| titleClass | 标题额外类名，建议使用自定义样式 item-title-class 代替 | _string_ | - |
| useBeforeToggle | 是否开启下拉菜单打开或者关闭前校验 | _boolean_ | `false` |
| value | 当前选中项对应的 value | _number \| string_ | - |
| scrollStyle `v2.5.0` | 当需要下拉菜单滚动时，此属性设置滚动区域的样式，比如高度 | _string_ | - |

### DropdownItem Events

| 事件名        | 说明                                                                  | 回调参数                                                                                                                                          |
| ------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| beforeToggle | 下拉菜单打开或者关闭前触发，需要将`use-before-toggle`属性设置为`true` | `event.detail.status`: `true` 打开下拉菜单，`false` 关闭下拉菜单 <br>`event.detail.callback`: 回调函数，调用`callback(false)`终止下拉菜单状态变更 |
| change | 点击选项导致 value 变化时触发 | value |
| close | 关闭菜单栏时触发 | - |
| closed | 关闭菜单栏且动画结束后触发 | - |
| open | 打开菜单栏时触发 | - |
| opened | 打开菜单栏且动画结束后触发 | - |

### DropdownItem 方法

通过 selectComponent(id) 可访问。

| 方法名 | 说明                                                          | 参数           | 返回值 |
| ------ | ------------------------------------------------------------- | -------------- | ------ |
| toggle | 切换菜单展示状态，传`true`为显示，`false`为隐藏，不传参为取反 | show?: boolean | - |

### Option 数据结构

| 键名  | 说明                             | 类型               |
| ----- | -------------------------------- | ------------------ |
| icon | 左侧[图标svg字符串](/material/smartui?comId=icon)或图片链接 | _string_ |
| text | 文字 | _string_ |
| value | 标识符 | _number \| string_ |

### DropdownMenu 外部样式类

| 类名         | 说明         |
| ------------ | ------------ |
| customClass | 根节点样式类 |
| titleClass | 选中项样式类 |

### DropdownItem 外部样式类

| 类名             | 说明         |
| ---------------- | ------------ |
| customClass | 根节点样式类 |
| itemTitleClass | 选项样式类 |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/material/smartui?comId=config-provider)。

| 名称                          | 默认值                                 | 描述 |
| ----------------------------- | -------------------------------------- | ---- |
| --dropdown-menu-height        | _46px_                           | 菜单的高度    |
| --dropdown-menu-background-color        | _var(--app-B3, #ffffff)_                         | 菜单的背景色    |
| --dropdown-menu-title-font-size  | _14px_    | 菜单的标题字体大小    |
| --dropdown-menu-title-line-height  | _18px_    | 菜单的标题字体高度    |
| --dropdown-menu-title-text-color  | _var(--app-B6-N1, rgba(0, 0, 0, 1))_    | 菜单的标题颜色    |
| --dropdown-menu-title-active-text-color  | _var(--app-M1, #3678e3)_    | 菜单的标题选中颜色    |
| --dropdown-menu-title-disabled-text-color  | _var(--app-B6-N4, rgba(0, 0, 0, 0.4))_    | 菜单的标题禁用颜色    |
| --dropdown-menu-title-padding  | _0 24px 0 8px_    | 菜单的padding    |
| --dropdown-menu-title-triangle-size `v2.0.0`  | _12px_    | 箭头图标字体大小    |
| --dropdown-menu-title-triangle-margin-left `v2.0.0`  | _4px_    | 箭头图标左间距    |
| --dropdown-menu-item-title-font-size `v2.0.0`  | _14px_    | 下拉菜单字体大小    |
| --dropdown-menu-item-title-font-weight `v2.0.0`  | _normal_  | 下拉菜单字体粗细   |
| --dropdown-menu-option-active-color  | _var(--app-M1, #3678e3)_  |  下拉菜单选中颜色  |
| --dropdown-menu-item-title-line-height `v2.0.0`  | _rgba(0,0,0,.05)_    | 下拉菜单分割线颜色    |
| --dropdown-menu-item-first-line-color `v2.0.0`  | _rgba(0,0,0,.08)_    | 下拉菜单第一个分割线颜色    |
| --dropdown-menu-item-line-width `v2.0.0`  | _1px_    | 下拉菜单第一个分割线高度    |
| --dropdown-menu-item-icon-font-size `v2.0.0`  | _28px_    | 下拉菜单右侧图标字体大小    |
| --dropdown-menu-item-title-active-font-weight `v2.0.0`  | _500_    | 下拉菜单选中字体粗细    |

## 常见问题

### Dropdown 组件在 Popup 中使用，为什么点击打开下拉选项时，定位出现异常？

DropDown 位于 Popup 节点内，并且 Popup 的 position 设置为 center。由于 center 样式包含 `top: 50% ` 和 `transform: translate3d(-50%,-50%,0)`，导致节点位置计算偏移，从而影响 DropDown 的定位，解决方案是将 Popup 的 position 设置为 bottom 或 top。