---
category: 展示
assets: Skeleton
---

# Skeleton 骨架屏

### 介绍

用于在内容加载过程中展示一组占位图形。

### 引入

```jsx
import { Skeleton } from '@ray-js/smart-ui';
```

## 代码演示

### 基础用法

通过`title`属性显示标题占位图，通过`row`属性配置占位段落行数。

```jsx
import { Skeleton } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Skeleton title row={3} rowWidth={['100%', '100%', '80%']} />;
}
```

### 显示头像

通过`avatar`属性显示头像占位图。

```jsx
import { Skeleton } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Skeleton title avatar row={3} />
}
```

### 展示子组件

将`loading`属性设置成`false`表示内容加载完成，此时会隐藏占位图，并显示`Skeleton`的子组件。

```jsx
import { View } from '@ray-js/ray';
import { Skeleton, Switch, Image } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [show, setShow] = useState(false);
  const onChange = event => {
    setShow(event.detail);
  };

  return <View>
    <Switch checked={show} size="24px" onChange={onChange} />
    <Skeleton title avatar row={3} loading={!show}>
      <View>
        <Image
          width="32px" height="32px"
          style={styles.demoPreviewImg}
          src="https://static1.tuyacn.com/static/tuya-miniapp-doc/_next/static/images/logo-small.png"
        />
        <View style={styles.demoContent}>
          <View style={styles.demoContentH3}>关于 Tuya Weapp</View>
          <View style={styles.demoContentP}>
            Tuya Weapp 是移动端 React 组件库的小程序版本，两者基于相同的视觉规范，提供一致的 API
            接口，助力开发者快速搭建小程序应用。
          </View>
        </View>
      </View>
    </Skeleton>
  </View>
}

const styles = {
  demoContent: {
    paddingTop: '6px',
  },
  demoContentH3: {
    margin: '0',
    fontSize: '18px',
    lineHeight: '20px',
  },
  demoContentP: {
    margin: '13px 0 0',
    fontSize: '14px',
    lineHeight: '20px',
  },
  demoPreviewImg: {
    flexShrink: 0,
    width: '32px',
    height: '32px',
    marginRight: '16px',
  },
};
```

## API

### Props

| 参数         | 说明                                        | 类型                 | 默认值  |
| ------------ | ------------------------------------------- | -------------------- | ------- |
| animate | 是否开启动画 | _boolean_ | `true` |
| avatar | 是否显示头像占位图 | _boolean_ | `false` |
| avatarShape | 头像占位图形状，可选值为`square` | _string_ | `round` |
| avatarSize | 头像占位图大小 | _string \| number_ | `32px` |
| loading | 是否显示占位图，传`false`时会展示子组件内容 | _boolean_ | `true` |
| row | 段落占位图行数 | _number_ | `0` |
| rowWidth | 段落占位图宽度，可传数组来设置每一行的宽度 | _string \| string[]_ | `100%` |
| title | 是否显示标题占位图 | _boolean_ | `false` |
| titleWidth | 标题占位图宽度 | _string \| number_ | `40%` |

### 外部样式类

| 类名         | 说明           |
| ------------ | -------------- |
| avatarClass | 头像占位样式类 |
| customClass | 根节点样式类 |
| rowClass | 段落占位样式类 |
| titleClass | 标题占位样式类 |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/material/smartui?comId=config-provider)。

| 名称                          | 默认值                                 | 描述 |
| ----------------------------- | -------------------------------------- | ---- |
| --skeleton-padding            | _0 @padding-md_                        | 骨架屏内边距         |
| --skeleton-row-height         | _16px_                                 | 骨架屏行高           |
| --skeleton-row-background-color | _var(--app-B3, #ffffff)_             | 骨架屏行背景颜色     |
| --skeleton-row-margin-top     | _12px_                                 | 骨架屏行上边距       |
| --skeleton-avatar-background-color | _var(--app-B3, #ffffff)_          | 骨架屏头像背景颜色   |
| --skeleton-animation-duration | _1.2s_                                 | 动画持续时间         |