---
category: 反馈
---

# Popup 弹出层

### 介绍

弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。

### 引入

```jsx
import { Popup } from '@ray-js/smart-ui';
```

## 代码演示

### 基础用法

通过`show`属性控制弹出层是否展示。

```jsx
import { View } from '@ray-js/ray';
import { Popup, Cell } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [show, setShow] = React.useState(false);
  const showPopup = () => setShow(true);
  const onClose = () => setShow(false);

  return (
    <View>
      <Cell title="展示弹出层" isLink onClick={showPopup} />
      <Popup show={show} onClose={onClose}>
        内容
      </Popup>
    </View>
  );
}
```

### 弹出位置

通过`position`属性设置弹出位置，默认居中弹出，可以设置为`top`、`bottom`、`left`、`right`。

```jsx
import { View } from '@ray-js/ray';
import { Popup, Cell } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [show, setShow] = React.useState(false);
  const showPopup = () => setShow(true);
  const onClose = () => setShow(false);

  return (
    <View>
      <Cell title="展示弹出层" isLink onClick={showPopup} />
      <Popup show={show} position="top" customStyle={{ height: '20%' }} onClose={onClose} />
    </View>
  );
}
```

### 关闭图标

设置`closeable`属性后，会在弹出层的右上角显示关闭图标，并且可以通过`closeIcon`属性自定义图标，使用`closeIconPosition`属性可以自定义图标位置。

```jsx
import { View } from '@ray-js/ray';
import { Popup, Cell } from '@ray-js/smart-ui';
import Close from '@tuya-miniapp/icons/dist/svg/Close';
import React from 'react';

export default function Demo() {
  const [show, setShow] = React.useState(false);
  const showPopup = () => setShow(true);
  const onClose = () => setShow(false);

    const [show1, setShow1] = React.useState(false);
  const showPopup1 = () => setShow1(true);
  const onClose1 = () => setShow1(false);

    const [show2, setShow2] = React.useState(false);
  const showPopup2 = () => setShow2(true);
  const onClose2 = () => setShow2(false);
  

  return (
    <View>
      <Cell title="显示关闭图标" isLink onClick={showPopup} />
      <Cell title="自定义图标" isLink onClick={showPopup1} />
      <Cell title="图标位置" isLink onClick={showPopup2} />
      <Popup
        show={show}
        closeable
        position="bottom"
        customStyle={{ height: '20%' }}
        onClose={onClose}
      />
      <Popup
        show={show1}
        closeable
        closeIcon={Close}
        position="bottom"
        customStyle={{ height: '20%' }}
        onClose={onClose1}
      />
      <Popup
        show={show2}
        closeable
        closeIconPosition="top-left"
        position="bottom"
        customStyle={{ height: '20%' }}
        onClose={onClose2}
      />
    </View>
  );
}
```

### 圆角弹窗

设置`round`属性后，弹窗会根据弹出位置添加不同的圆角样式。

```jsx
import { View } from '@ray-js/ray';
import { Popup, Cell } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [show, setShow] = React.useState(false);
  const showPopup = () => setShow(true);
  const onClose = () => setShow(false);

  return (
    <View>
      <Cell title="显示圆角弹窗" isLink onClick={showPopup} />
      <Popup show={show} round position="bottom" customStyle={{ height: '20%' }} onClose={onClose} />
    </View>
  );
}
```

## API

### Props

| 参数                               | 说明                                                                                                                 | 类型               | 默认值      |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------ | ----------- |
| closeIcon | 关闭图标名称或图片链接 | _string_ | `cross` | safeAreaInsetBottomMin |
| closeIconPosition | 关闭图标位置，可选值为 `top-left`<br>`bottom-left` `bottom-right` | _string_ | `top-right` |
| closeOnClickOverlay | 是否在点击遮罩层后关闭 | _boolean_ | `true` |
| closeable | 是否显示关闭图标 | _boolean_ | `false` |
| customStyle | 自定义弹出层样式 | _React.CSSProperties_ | - |
| duration | 动画时长，单位为毫秒 | _number \| object_ | `300` |
| lockScroll | 是否锁定背景滚动 | _boolean_ | `true` |
| overlay | 是否显示遮罩层 | _boolean_ | `true` |
| overlayStyle | 自定义遮罩层样式 | _React.CSSProperties_ | - |
| position | 弹出位置，可选值为 `top` `bottom` `right` `left` | _string_ | `center` |
| round | 是否显示圆角 | _boolean_ | `false` |
| safeAreaInsetBottom | 是否留出底部安全距离，v2.7.1 开始默认关闭 | _boolean_ | `false` |
| safeAreaInsetBottomMin `v1.1.0` | 是否需要预留出一个最小的底部安全距离，用于在 safeArea 底部为 0 时进行追加，需要在 safeAreaInsetBottom 为 true 时生效 | _number_ | `0` |
| safeAreaInsetTop | 是否留出顶部安全距离（状态栏高度） | _boolean_ | `false` |
| safeAreaTabBar | 是否留出底部 tabbar 安全距离（在使用 tabbar 组件 & 小程序自定义 tabbar 时，popup 组件层级无法盖住 tabbar） | _boolean_ | `false` |
| show | 是否显示弹出层 | _boolean_ | `false` |
| zIndex | z-index 层级 | _number_ | `100` |
| nativeDisabled `v2.3.8` | 开启弹框期间是否禁用本地手势; 会在弹框开始进入动画时调用 `ty.nativeDisabled(true)`, 在弹框关闭动画结束时调用 `ty.nativeDisabled(false)` 恢复异层组件的点击能力；由于`ty.nativeDisabled` 是全局生效的，所以多个弹框组件同时打开时注意是否传 `native-disabled`属性和关闭的时机，防止 `native-disabled` 属性失效 | _boolean_ | `false` |

### Events

| 事件名             | 说明             | 参数 |
| ------------------ | ---------------- | ---- |
| onAfterEnter | 进入后触发 | - |
| onAfterLeave | 离开后触发 | - |
| onBeforeEnter | 进入前触发 | - |
| onBeforeLeave | 离开前触发 | - |
| onClickOverlay | 点击遮罩层时触发 | - |
| onClose | 关闭弹出层时触发 | - |
| onEnter | 进入中触发 | - |
| onLeave | 离开中触发 | - |

### 外部样式类

| 类名         | 说明         |
| ------------ | ------------ |
| customClass | 根节点样式类 |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/material/smartui?comId=config-provider)。

| 名称                          | 默认值                                 | 描述 |
| ----------------------------- | -------------------------------------- | ---- |
| --popup-background-color | _var(--app-B4, #ffffff)_ | 弹窗背景颜色 |
| --popup-round-border-radius | _16px_ | 圆形边框半径 |
| --popup-close-icon-size | _24px_ | 关闭图标大小 |
| --popup-close-icon-color | _#969799_ | 关闭图标颜色 |
| --popup-close-icon-margin | _12px_ | 关闭图标边距 |
| --popup-close-icon-z-index | _1_ | 关闭图标层级 |

## 常见问题

### Popup 嵌套涉及布局定位的组件时渲染异常，该如何处理？

由于一些组件，如 `Slider` 组件、`Textarea` 组件使用到 `auto-height` 属性时，在 `Popup` 打开时可能尚未完全渲染，因此我们无法获取其 DOM，从而导致定位出现问题。解决方案是在 `Popup` 的 `onAfterEnter` 事件回调之后再开始渲染此类组件。这样，我们可以确保此类组件能够在获取 DOM 时被正常渲染。请参考以下示例：

```jsx
import React from 'react';
import { Cell, Popup } from '@ray-js/smart-ui';
import { DemoBlock } from '@/components';
import { View, Slider } from '@ray-js/ray';

function Demo() {
  const [show, setShow] = React.useState(false);
  const [isReady, setIsReady] = React.useState(false);
  const showBasic = () => setShow(true);
  const handleChange = e => setValue(e.detail.value);

  return (
    <DemoBlock title="基础用法">
      <Cell title="展示弹出层" isLink onClick={showBasic} />
      <Popup
        show={show}
        position="bottom"
        onClose={hideBasic}
        onAfterEnter={() => setIsReady(true)}
      >
        <View style={{ padding: '32px', position: 'relative' }}>
          {isReady && <Slider value={value} max={100} min={0} onChange={handleChange} />}
        </View>
      </Popup>
    </DemoBlock>
  );
}
```

### Popup 在IDE上内部元素过高时可以滚动为什么到手机上就不行了？

`Popup`内部本身没有`ScrollView`能力，所以本身不具备滚动的功能，可以滚动是因为IDE和真实手机的不一致性导致的，所以希望可以滚动需要使用`ScrollView` 包裹内部元素。

```jsx
import React from 'react';
import { Popup } from '@ray-js/smart-ui';
import { DemoBlock } from '@/components';
import { View, ScrollView } from '@ray-js/ray';

function Demo() {
  return (
    <DemoBlock title="基础用法">
      <Popup
        show
        position="bottom"
      >
        <ScrollView scrollY style={{ height: '400px' }}>
          <View style={{ height: '1000px' }}>
            test
          </View>
        </ScrollView>
      </Popup>
    </DemoBlock>
  );
}
```

### Popup 弹出框在真机上底部有空隙怎么回事？

`Popup`内置的底部安全距离是会距离底部有一个外边距，会有一种弹框不通底的效果，如果希望弹框和底部是链接在一起的，安全距离是通过内边距的形式请使用 `BottomSheet` 组件。