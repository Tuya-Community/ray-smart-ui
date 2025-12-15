---
category: 导航
---

# NavBar 导航栏

### 介绍

为页面提供导航功能，常用于页面顶部。

### 引入

```jsx
import { NavBar } from '@ray-js/smart-ui';
```

## 代码演示

### 首页

首页的文本样式默认左对齐并加粗，点击左侧文本时触发事件；background `v2.7.0` 属性可以设置nav-bar的背景色。

```jsx
import { showToast } from '@ray-js/ray';
import { NavBar } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const onClickLeftText = React.useCallback(event => {
    showToast({ title: "点击左侧文本", icon: 'none' });
  }, []);

  return (
    <>
      <NavBar 
        leftText="Home" 
        leftTextType="home"
        onClickLeftText={onClickLeftText} 
      />
      <NavBar
        background="#E4EDFF"
        customClass="demo-nav-bar"
        leftText="HomeHomeHomeHomeHome"
        leftTextType="home"
        onClickLeftText={onClickLeftText}
      />
    </>
  );
}
```

### 二级页面-单图标

当中间标题内容比较长，且两侧内容较少时可以设置 `v2.7.3` `sideWidth` 为 `min`。

```jsx
import { showToast } from '@ray-js/ray';
import { NavBar } from '@ray-js/smart-ui';
import React from 'react';
import iconMore from '@tuya-miniapp/icons/dist/svg/More';

export default function Demo() {
  const onClickLeft = React.useCallback(event => {
    showToast({ title: "点击返回", icon: 'none' });
  }, []);

  const onClickTitle = React.useCallback(event => {
    showToast({ title: "点击中央文本", icon: 'none' });
  }, []);

  const onClickRight = React.useCallback(event => {
    showToast({ title: "点击右侧", icon: 'none' });
  }, []);

  return (
    <NavBar
      title="ScheduleScheduleScheduleSchedule"
      leftArrow
      rightIcon={iconMore}
      sideWidth="min"
      rightIconSize="24px"
      onClickRight={onClickRight}
      onClickLeft={onClickLeft}
      onClickTitle={onClickTitle}
    />
  );
}
```

### 二级页面-常见场景

展示二级页面的常见使用场景，包括使用插槽自定义右侧内容、左右文本按钮等。

```jsx
import { showToast } from '@ray-js/ray';
import { Icon, NavBar } from '@ray-js/smart-ui';
import React from 'react';
import iconMore from '@tuya-miniapp/icons/dist/svg/More';
import iconHouse from '@tuya-miniapp/icons/dist/svg/House';

export default function Demo() {
  const onClickLeft = React.useCallback(event => {
    showToast({ title: "点击返回", icon: 'none' });
  }, []);

  const onClickTitle = React.useCallback(event => {
    showToast({ title: "点击中央文本", icon: 'none' });
  }, []);

  const onClickRight = React.useCallback(event => {
    showToast({ title: "点击右侧", icon: 'none' });
  }, []);

  const onClickRightText = React.useCallback(event => {
    showToast({ title: "点击右侧文本", icon: 'none' });
  }, []);

  const onClickLeftText = React.useCallback(event => {
    showToast({ title: "点击左侧文本", icon: 'none' });
  }, []);

  return (
    <>
      <NavBar
        title="ScheduleScheduleScheduleSchedule"
        leftArrow
        rightIcon={iconMore}
        rightIconSize="24px"
        onClickRight={onClickRight}
        onClickLeft={onClickLeft}
        onClickTitle={onClickTitle}
        slot={{
          right: <Icon size="24px" customStyle={{ marginRight: '16px' }} name={iconHouse} />,
        }}
      />
      <NavBar
        title="ScheduleScheduleScheduleSchedule"
        rightText="Confirm"
        leftText="Cancel"
        customClass="demo-nav-bar"
        rightTextColor="#F04C4C"
        onClickRightText={onClickRightText}
        onClickLeftText={onClickLeftText}
        onClickTitle={onClickTitle}
      />
      <NavBar
        title="ScheduleScheduleScheduleSchedule"
        leftArrow
        rightText="Confirm"
        customClass="demo-nav-bar"
        rightTextColor="#F04C4C"
        onClickRightText={onClickRightText}
        onClickLeft={onClickLeft}
        onClickTitle={onClickTitle}
      />
    </>
  );
}
```

### 二级页面-短标题

当两侧操作内容较多时可以设置 `v2.7.3` `sideWidth` 为 `max`，减小中间标题区域的大小。

```jsx
import { showToast } from '@ray-js/ray';
import { NavBar } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const onClickLeft = React.useCallback(event => {
    showToast({ title: "点击返回", icon: 'none' });
  }, []);

  const onClickTitle = React.useCallback(event => {
    showToast({ title: "点击中央文本", icon: 'none' });
  }, []);

  const onClickRightText = React.useCallback(event => {
    showToast({ title: "点击右侧文本", icon: 'none' });
  }, []);

  const onClickLeftText = React.useCallback(event => {
    showToast({ title: "点击左侧文本", icon: 'none' });
  }, []);

  return (
    <>
      <NavBar
        title="ScheduleSchedule"
        leftArrow
        sideWidth="max"
        onClickLeft={onClickLeft}
        onClickTitle={onClickTitle}
      />
      <NavBar
        title="ScheduleSchedule"
        leftText="Abbrechen"
        rightText="Speichern"
        customClass="demo-nav-bar"
        rightTextColor="#F04C4C"
        sideWidth="max"
        onClickLeftText={onClickLeftText}
        onClickTitle={onClickTitle}
        onClickRightText={onClickRightText}
      />
      <NavBar
        title="ScheduleSchedule"
        leftArrow
        rightText="Speichern"
        rightTextColor="#F04C4C"
        sideWidth="max"
        customClass="demo-nav-bar"
        onClickLeft={onClickLeft}
        onClickTitle={onClickTitle}
        onClickRightText={onClickRightText}
      />
    </>
  );
}
```

### 自定义宽度

`sideWidth` 也支持传如 `100`、`'100px'`、`'100rpx'` 去自定义两边的宽度。

```jsx
import { showToast } from '@ray-js/ray';
import { NavBar } from '@ray-js/smart-ui';
import React from 'react';
import iconMore from '@tuya-miniapp/icons/dist/svg/More';

export default function Demo() {
  const onClickLeft = React.useCallback(event => {
    showToast({ title: "点击返回", icon: 'none' });
  }, []);

  const onClickTitle = React.useCallback(event => {
    showToast({ title: "点击中央文本", icon: 'none' });
  }, []);

  const onClickRight = React.useCallback(event => {
    showToast({ title: "点击右侧", icon: 'none' });
  }, []);

  return (
    <NavBar
      title="ScheduleScheduleScheduleSchedule"
      leftArrow
      sideWidth="100px"
      rightIcon={iconMore}
      rightIconSize="24px"
      onClickRight={onClickRight}
      onClickLeft={onClickLeft}
      onClickTitle={onClickTitle}
    />
  );
}
```


### 左标题

部分二级页面标题位于左侧，或同时附带 icon。

```jsx
import { showToast } from '@ray-js/ray';
import { NavBar } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const onClickLeft = React.useCallback(event => {
    showToast({ title: "点击返回", icon: 'none' });
  }, []);

  const onClickLeftIcon = React.useCallback(event => {
    showToast({ title: "点击左侧图标", icon: 'none' });
  }, []);

  const onClickLeftText = React.useCallback(event => {
    showToast({ title: "点击左侧文本", icon: 'none' });
  }, []);

  const onClickRight = React.useCallback(event => {
    showToast({ title: "点击右侧", icon: 'none' });
  }, []);

  return (
    <NavBar
      leftText="Home"
      leftTextType="title"
      leftIcon="https://images.tuyacn.com/content-platform/hestia/1729664215ebd89f13e54.png"
      onClickLeft={onClickLeft}
      onClickLeftIcon={onClickLeftIcon}
      onClickLeftText={onClickLeftText}
      onClickRight={onClickRight}
    />
  );
}
```

## API

### Props

| 参数                | 说明                               | 类型      | 默认值  |
| ------------------- | ---------------------------------- | --------- | ------- |
| border | 是否显示下边框 | _boolean_ | `true` `v2.0.0` `false` `v2.7.0` |
| customStyle | 根节点自定义样式 | _React.CSSProperties_ | - |
| fixed | 是否固定在顶部 | _boolean_ | `false` |
| leftArrow | 是否显示左侧箭头 | _boolean_ | `false` |
| leftText | 左侧文案 | _string_ | `''` |
| leftTextType `v2.0.0` | 左侧文本的样式类型，范围为 `home`、`title`、`back` | _string_ | `back` |
| leftIcon `v2.0.0` | 左侧 Icon | _string_ | `''` |
| leftIconSize `v2.0.0` | 左侧 Icon 大小，默认为 32 | _string \| number_ | `32` |
| round `v2.1.0` | 是否显示圆角 | _boolean_ | `false` |
| placeholder | 固定在顶部时是否开启占位 | _boolean_ | `false` |
| rightText | 右侧文案 | _string_ | `''` |
| safeAreaInsetTop | 是否留出顶部安全距离（状态栏高度） | _boolean_ | `true` |
| title | 标题 | _string_ | `''` |
| zIndex | 元素 z-index | _number_ | `1` |
| rightTextColor `v2.7.0` | 右侧文案的颜色 | _string_ | - |
| rightIcon `v2.7.0` | 右侧图标 | _string_ | - |
| rightIconColor `v2.7.0` | 右侧图标颜色 | _string_ | - |
| rightIconSize `v2.7.0` | 右侧图标大小 | _number_ | `32px` |
| leftIconColor `v2.7.0` | 左侧图标颜色 | _string_ | - |
| background `v2.7.0` | 整体背景色 | _string_ | - |
| sideWidth `v2.7.3` | 两边控制栏的宽度, 提供 `min`、`mid`、`max`三档内置值；也可以传具体宽度值 | _string\/number\/`min`\/`mid`\/`max`_ | `mid` `v2.7.3` `max` `v2.8.1` |

### Slot

| 名称  | 说明               |
| ----- | ------------------ |
| left | 自定义左侧区域内容 |
| right | 自定义右侧区域内容 |
| title | 自定义标题 |

### Events

| 事件名           | 说明               | 参数 |
| ---------------- | ------------------ | ---- |
| onClickLeft | 点击左侧返回 icon 时触发 | - |
| onClickRight | 点击右侧按钮时触发 | - |
| onClickTitle `v2.0.0` | 点击中央标题时触发 | - |
| onClickLeftIcon `v2.0.0` | 点击左侧 icon 时触发 | - |
| onClickLeftText `v2.0.0` | 点击左侧文本时触发 | - |
| onClickRightIcon `v2.7.0` | 点击右侧图标时触发 | - |
| onClickRightText `v2.7.0` | 点击右侧文本时触发 | - |

### 外部样式类

| 类名         | 说明         |
| ------------ | ------------ |
| customClass | 根节点样式类 |
| titleClass | 标题样式类 |
| leftIconClass `v2.0.0` | 左侧图标样式类 |
| rightTextClass `v2.1.0` | 右侧文字样式类 |
| rightIconClass `v2.7.0` | 右侧图标样式类 |
| leftTextClass `v2.7.0` | 左侧文字样式类 |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/material/smartui?comId=config-provider)。

| 名称                          | 默认值                                 | 描述 |
| ----------------------------- | -------------------------------------- | ---- |
| --nav-bar-height    | _var(--app-device-navbar-height, 46px)_     | 导航栏高度 |
| --nav-bar-round-min-height `v2.1.0`    | _56px_        | 导航栏圆角存在时的最小高度 |
| --nav-bar-round-border-radius `v2.1.0`   | _16px 16px 0px 0px_     | 是否显示导航栏圆角 |
| --nav-bar-background-color    | _var(--app-B2, #ffffff)_               | 导航栏背景色 |
| --nav-bar-arrow-color         | _var(--app-B2-N1, rgba(0, 0, 0, 1))_   | 导航栏箭头颜色 |
| --nav-bar-icon-size `@deprecated v2.7.0`   | _32px_     | 导航栏图标大小 |
| --nav-bar-icon-color          | _var(--app-B2-N1, rgba(0, 0, 0, 1))_   | 导航栏图标颜色 |
| --nav-bar-icon-margin `@deprecated v2.7.0`    | _0_      | 导航栏图标外边距 |
| --nav-bar-text-font-size `v2.1.0`         | _16px_ `v2.1.0` _17px_ `v2.7.3`   | 导航栏侧边文字大小 |
| --nav-bar-text-font-weight `v2.7.0`         | _600_ `v2.7.0` _normal_ `v2.7.3`   | 导航栏侧边文字字体字重 |
| --nav-bar-text-color          | _var(--app-B2-N2, rgba(0, 0, 0, 1))_   | 导航栏文字颜色 |
| --nav-bar-title-font-size     | _17px_                  | 导航栏标题文字大小 |
| --nav-bar-title-font-weight   | _600_                                  | 导航栏标题字重 |
| --nav-bar-title-text-color    | _var(--app-B2-N1, rgba(0, 0, 0, 1))_   | 导航栏标题文字颜色 |
| --nav-bar-home-font-size      | _22px_                                 | 导航栏首页文字大小 |
| --nav-bar-home-font-weight    | _600_                                  | 导航栏首页字重 |
| --nav-bar-home-text-color     | _var(--app-B2-N1, rgba(0, 0, 0, 1))_   | 导航栏首页文字颜色 |
| --nav-bar-right-text-color `v2.5.1`  | _var(--app-B2-N1, rgba(0, 0, 0, 1))_  | 导航栏右侧文字颜色 |
| --nav-bar-title-max-width `v2.6.0`    | _56%_ `v2.6.0` _calc(100% - 98px - 16px)_ `v2.7.0`   | 导航栏标题的宽度 |
| --nav-bar-side-width `v2.7.0`    | _98px_ `v2.7.0` _80px_ `v2.7.3`  | 两边默认宽度 |
| --nav-bar-text-padding `v2.7.0`    | _20px_ `v2.7.0` _16px_ `v2.7.3`    | 两边文字内边距 |
| --nav-bar-icon-padding `v2.7.0`    | _16px_   | 两边图标内边距 |
| --nav-bar-title-margin `v2.7.0`    | _16px_   | 标题外边距 |
| --nav-bar-home-max-width `v2.7.0`    | _calc(100% - 98px - 16px)_   | 小程序首页时左侧标题最大宽度 |
| --nav-bar-side-width-min `v2.7.3`    | _40px_   | 侧边min时宽度 |
| --nav-bar-side-width-max `v2.7.3`    | _105px_   | 侧边max时宽度 |