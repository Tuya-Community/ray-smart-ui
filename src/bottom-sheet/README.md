---
category: 反馈
---

# BottomSheet 底部弹窗

### 介绍

通底的底部弹窗面板；与 `Popup` 和 `ActionSheet` 的区别在于，安全区通过内边距覆盖，适用于需要和底部无缝粘合的场景，v2.0.0 开始加入。

### 引入

```jsx
import { BottomSheet } from '@ray-js/smart-ui';
```

## 代码演示

### 基础用法

传入一个 `title` 文本，将会往上弹出现一个带标题的底部弹窗。

```jsx
import React from 'react';
import { BottomSheet, Button } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  const [show, setShow] = React.useState(false);
  const toggleBottomSheet = React.useCallback(() => setShow(!show), [show]);

  return (
    <View>
      <Button type="primary" onClick={toggleBottomSheet}>
        弹出菜单
      </Button>
      <BottomSheet title="Title" show={show} onClose={toggleBottomSheet} />
    </View>
  );
}
```

### 自定义

通过传入子元素节点来自定义面板

```jsx
import React from 'react';
import { BottomSheet, Button } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  const [show, setShow] = React.useState(false);
  const toggleBottomSheet = React.useCallback(() => setShow(!show), [show]);

  return (
    <View>
      <Button type="primary" onClick={toggleBottomSheet}>
        弹出菜单
      </Button>
      <BottomSheet show={show} title="Title" onClose={toggleBottomSheet}>
        <View className="content" />
        <View className="footer">
          <Button type="info" block>完成</Button>
        </View>
      </BottomSheet>
    </View>
  );
}
```

```css
.content {
  display: flex;
  justify-content: center;
  font-size: 20px;
  background: var(--app-B1, #f6f7fb);
  color: var(--app-B4-N1, #3d3d3d);
}

.footer {
  margin: 16px 0;
}
```

### 最大高度限制

底部弹窗默认最大高度不允许超过屏幕的 50%，但可以通过 `--bottom-sheet-max-height` 自定义最大高度，在 v2.5.0 版本及之后内容触发最大高度组件内部会自动滚动！

```jsx
import React from 'react';
import { BottomSheet, Button } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  const [show, setShow] = React.useState(false);
  const toggleBottomSheet = React.useCallback(() => setShow(!show), [show]);

  return (
    <View>
      <Button type="primary" onClick={toggleBottomSheet}>
        弹出菜单
      </Button>
      <BottomSheet show={show} title="Title" onClose={toggleBottomSheet}>
        <View style={{ backgroundColor: 'red', height: '100px' }} />
        <View style={{ backgroundColor: 'blue', height: '100px' }} />
        <View style={{ backgroundColor: 'black', height: '100px' }} />
        <View style={{ backgroundColor: 'yellow', height: '100px' }} />
        <View style={{ backgroundColor: 'pink', height: '100px' }} />
      </BottomSheet>
    </View>
  );
}
```

### 固定高度 `v2.5.0`

`contentHeight` 可以设置内容区域的高度；当设置了 `contentHeight` 后, 组件的最大高度就会失效，可以自定义在内部书写内容。

```jsx
import React from 'react';
import { BottomSheet, Button } from '@ray-js/smart-ui';
import { View, ScrollView } from '@ray-js/ray';

export default function Demo() {
  const [show, setShow] = React.useState(false);
  const toggleBottomSheet = React.useCallback(() => setShow(!show), [show]);

  return (
    <View>
      <Button type="primary" onClick={toggleBottomSheet}>
        弹出菜单
      </Button>
      <BottomSheet 
        show={show} 
        title="Title" 
        content-height="500px" 
        onClose={toggleBottomSheet}
      >
        <ScrollView scroll-y style={{ height: '300px' }}>
          <View style={{ backgroundColor: 'red', height: '100px' }} />
          <View style={{ backgroundColor: 'blue', height: '100px' }} />
          <View style={{ backgroundColor: 'black', height: '100px' }} />
          <View style={{ backgroundColor: 'yellow', height: '100px' }} />
          <View style={{ backgroundColor: 'pink', height: '100px' }} />
        </ScrollView>
        <View style={{ backgroundColor: 'white', height: '100px' }} />
        <View style={{ backgroundColor: 'orange', height: '100px' }} />
      </BottomSheet>
    </View>
  );
}
```


### 使用插槽插入标题 `v2.6.1`

```jsx
import React from 'react';
import { BottomSheet, Button } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  const [show, setShow] = React.useState(false);
  const toggleBottomSheet = React.useCallback(() => setShow(!show), [show]);

  return (
    <View>
      <Button type="primary" onClick={toggleBottomSheet}>
        弹出菜单
      </Button>
      <BottomSheet 
        show={show} 
        slot={{
          title: <View>Slot Title</View>
        }}
        onClose={toggleBottomSheet}
      >
        <View style={{ backgroundColor: 'orange', height: '100px' }} />
      </BottomSheet>
    </View>
  );
}
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 是否显示底部弹窗 | _boolean_ | `false` |
| title | 标题 | _string_ | - |
| iconSize | 标题中关闭按钮的大小 | _string \| number_ | `24` |
| iconColor | 标题中关闭按钮的颜色 | _string_ | `--app-B4-N3` \|\| `rgba(0, 0, 0, 0.5)` |
| round | 是否显示圆角 | _boolean_ | `true` |
| zIndex | z-index 层级 | _number_ | `100` |
| overlay | 是否显示遮罩层 | _boolean_ | `true` |
| closeOnClickOverlay | 点击遮罩是否关闭菜单 | _boolean_ | `true` |
| nativeDisabled `v2.5.0` | 开启弹框期间是否禁用本地手势; 会在弹框开始进入动画时调用 `ty.nativeDisabled(true)`, 在弹框关闭动画结束时调用 `ty.nativeDisabled(false)` 恢复异层组件的点击能力；由于`ty.nativeDisabled` 是全局生效的，所以多个弹框组件同时打开时注意是否传 `native-disabled`属性和关闭的时机，防止 `native-disabled` 属性失效 | _boolean_ | `false` |
| contentHeight `v2.5.0` | 内容区域高度，当设置此值时，组件的 max-height 将会失效。当设置 draggable 时此值无效。 | _number \| string_ | `false` |
| maxHeight `v2.6.0` | 整个组件的最大高度 | _number \| string_ | - |
| showClose `v2.6.1` | 是否展示关闭图标。当设置 draggable 时此值无效。 | _boolean_ | `true` |
| draggable `v2.7.2` | 是否支持拖拽，可用于实现拖拽调整面板高度 | _boolean_ | `false` |
| minDragHeight `v2.7.2` | 拖拽时允许的最小高度 | _number_ | `windowHeight * 0.8` |
| maxDragHeight `v2.7.2` | 拖拽时允许的最大高度 | _number_ | `windowHeight * 0.5` |
| midDragHeight `v2.7.2` | 拖拽时中间态高度 | _number_ | `windowHeight * 0.1` |
| closeDragHeight `v2.7.2` | 拖拽关闭时的临界高度，低于该高度将自动关闭 | _number_ | `windowHeight * 0.4` |

### Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| onClose | 点击关闭按钮时触发 | - |
| onBeforeEnter | 遮罩进入前触发 | - |
| onEnter | 遮罩进入中触发 | - |
| onAfterEnter | 遮罩进入后触发 | - |
| onBeforeLeave | 遮罩离开前触发 | - |
| onLeave | 遮罩离开中触发 | - |
| onAfterLeave | 遮罩离开后触发 | - |
| onClickOverlay | 点击遮罩层时触发 | - |
| onDragPosition `v2.7.2` | 拖拽结束时触发，返回当前面板位置 | _event.detail_: `'max'` \| `'mid'` \| `'min'` |

### Slot

| 名称          | 说明           |
| ------------- | -------------- |
| - | 内容 |
| title `v2.6.1` | 标题插槽 |

### 外部样式类

| 类名                   | 说明                |
| ---------------------- | ------------------- |
| customClass | 根节点样式类 |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/material/smartui?comId=config-provider)。

| 名称                          | 默认值                                 | 描述 |
| ----------------------------- | -------------------------------------- | ---- |
| --bottom-sheet-width        | _100%_                           | 底部弹窗的宽度    |
| --bottom-sheet-min-height        | _auto_                         | 底部弹窗的最小高度    |
| --bottom-sheet-max-height  | _50%_    | 底部弹窗的最大高度    |
| --bottom-sheet-padding  | _0 16px_    | 底部弹窗内容区域的内边距    |
| --bottom-sheet-icon-margin  | _16px 16px 0 0_    | 底部弹窗的关闭 icon 外边距    |
| --bottom-sheet-header-height  | _56px_    | 底部弹窗的头部高度    |
| --bottom-sheet-header-color  | _var(--app-B4-N1, rgba(0, 0, 0, 1))_  | 底部弹窗的头部文字颜色   |
| --bottom-sheet-header-font-size  | _17px_    | 底部弹窗的头部文字大小    |
| --bottom-sheet-header-font-weight  | _600_    | 底部弹窗的头部字重    |
| --bottom-sheet-font-color  | _var(--app-B4-N1, rgba(0, 0, 0, 1))_    | 底部弹窗的文字颜色    |
| --bottom-sheet-header-padding `v2.5.0`  | _0 16px_    | 底部弹窗头部的内边距    |
| --bottom-sheet-dragger-padding `v2.7.2` | _8px 0_ | 拖拽手柄区域的内边距 |
| --bottom-sheet-dragger-node-width `v2.7.2` | _30px_ | 拖拽手柄的宽度 |
| --bottom-sheet-dragger-node-height `v2.7.2` | _4px_ | 拖拽手柄的高度 |
| --bottom-sheet-dragger-node-border-radius `v2.7.2` | _2px_ | 拖拽手柄的圆角 |
| --bottom-sheet-dragger-node-background `v2.7.2` | _rgba(0, 0, 0, 0.3)_ | 拖拽手柄的背景色 |

## 常见问题

### 组件内容高度到一定程度无法增加

BottomSheet 组件内部有 max-height 限制组件的最大高度需要覆盖组件的样式才可以实现例如：
```css
.my-bottom-sheet {
  --bottom-sheet-max-height: 100%;
}
```
在 v2.5.0 及之后版本可以设置 `contentHeight` 设置内容区域的高度，此时 max-height 将会失效

### 组件内容过高后在真机上无法滚动问题

1. 可以升级到最新的 v2.5.0 修复了此问题, 过高后会自动滚动
2. 或者在内容区域套一个 ScrollView 组件，下面为 max-height 为 50% 为例，其中 `env(safe-area-inset-bottom)` 为底部安全距离

```jsx
<BottomSheet show>
  <ScrollView style={{ height: 'calc(50vh - 56px - env(safe-area-inset-bottom))'}} scrollY>
    <View style={{ height: 2000 }}><View>
  <ScrollView>
</BottomSheet>
```

### 组件内容中绝对定位在底部的内容在真机上会被遮挡

升级到最新的 v2.5.0 后，可以参考 固定高度 例子，将需要绝对定位的内容放置在底部，将其余内容用 ScrollView 包裹