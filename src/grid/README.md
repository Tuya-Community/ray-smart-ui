---
category: 布局
---

# Grid 宫格

### 介绍

宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航。

### 引入

```jsx
import { Grid, GridItem } from '@ray-js/smart-ui';
```

## 代码演示

### 基础用法

通过`icon`属性设置格子内的图标，`text`属性设置文字内容。

```jsx
import React from 'react';
import { Grid, GridItem } from '@ray-js/smart-ui';
import IconBubble from '@tuya-miniapp/icons/dist/svg/Bubble';

export default function Demo() {
  const array = [0, 1, 2, 3];
  return (
    <Grid>
      {array.map((item, index) => (
        <GridItem icon={IconBubble} text="文字" key={`${index + 1}`} />
      ))}
    </Grid>
  );
}
```

### 自定义列数

默认一行展示四个格子，可以通过`columnNum`自定义列数。

```jsx
import { Grid, GridItem } from '@ray-js/smart-ui';
import IconBubble from '@tuya-miniapp/icons/dist/svg/Bubble';
import React from 'react';

export default function Demo() {
  const array = [0, 1, 2, 3, 4, 5];
  return (
    <Grid columnNum={2}>
      {array.map((item, index) => (
        <GridItem icon={IconBubble} text="文字" key={`${index + 1}`} />
      ))}
    </Grid>
  );
}
```

### 自定义内容

通过插槽可以自定义格子展示的内容。

```jsx
import { Grid, GridItem, Image } from '@ray-js/smart-ui';
import IconBubble from '@tuya-miniapp/icons/dist/svg/Bubble';
import React from 'react';

export default function Demo() {
  const array = [0, 1, 2];
  return (
    <Grid columnNum={3} border={false}>
      {array.map((item, index) => (
        <GridItem useSlot icon={IconBubble} text="文字" key={`${index + 1}`}>
          <Image
            width="90px"
            height="90px"
            fit="contain"
            src="https://static1.tuyacn.com/static/tuya-miniapp-doc/_next/static/images/logo-small.png"
          />
        </GridItem>
      ))}
    </Grid>
  );
}
```

### 正方形格子

设置`square`属性后，格子的高度会和宽度保持一致。

```jsx
import { Grid, GridItem } from '@ray-js/smart-ui';
import IconBubble from '@tuya-miniapp/icons/dist/svg/Bubble';
import React from 'react';

export default function Demo() {
  const array = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <Grid square>
      {array.map((item, index) => (
        <GridItem icon={IconBubble} text="文字" key={`${index + 1}`} />
      ))}
    </Grid>
  );
}
```

### 格子间距

通过`gutter`属性设置格子之间的距离。

```jsx
import { Grid, GridItem } from '@ray-js/smart-ui';
import IconBubble from '@tuya-miniapp/icons/dist/svg/Bubble';
import React from 'react';

export default function Demo() {
  const array = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <Grid gutter="10px">
      {array.map((item, index) => (
        <GridItem icon={IconBubble} text="文字" key={`${index + 1}`} />
      ))}
    </Grid>
  );
}
```

### 内容横排

将`direction`属性设置为`horizontal`，可以让宫格的内容呈横向排列。

```jsx
import { Grid, GridItem } from '@ray-js/smart-ui';
import IconBubble from '@tuya-miniapp/icons/dist/svg/Bubble';
import React from 'react';

export default function Demo() {
  const array = [0, 1, 2];
  return (
    <Grid direction="horizontal" columnNum={3}>
      {array.map((item, index) => (
        <GridItem icon={IconBubble} text="文字" key={`${index + 1}`} />
      ))}
    </Grid>
  );
}
```

### 页面跳转

可以通过`url`属性进行页面跳转，通过`linkType`属性控制跳转类型。

```jsx
import { Grid, GridItem } from '@ray-js/smart-ui';
import IconBubble from '@tuya-miniapp/icons/dist/svg/Bubble';
import IconHandPoint from '@tuya-miniapp/icons/dist/svg/HandPoint';
import React from 'react';

export default function Demo() {
  return (
    <Grid direction="horizontal" columnNum="2">
      <GridItem
        icon={IconBubble}
        text="Navigate 跳转"
        linkType="navigateTo"
        url="/pages/home/index"
      />
      <GridItem
        icon={IconHandPoint}
        linkType="reLaunch"
        url="/pages/home/index"
        text="ReLaunch 跳转"
      />
    </Grid>
  );
}
```

### 徽标提示

设置`dot`属性后，会在图标右上角展示一个小红点。设置`badge`属性后，会在图标右上角展示相应的徽标。

```jsx
import { Grid, GridItem } from '@ray-js/smart-ui';
import IconBubble from '@tuya-miniapp/icons/dist/svg/Bubble';
import IconHandPoint from '@tuya-miniapp/icons/dist/svg/HandPoint';
import React from 'react';

export default function Demo() {
  return (
    <Grid columnNum="2">
      <GridItem icon={IconBubble} text="文字" dot />
      <GridItem icon={IconHandPoint} text="文字" badge="99+" />
    </Grid>
  );
}
```

## API

### Grid Props

| 参数               | 说明                                      | 类型               | 默认值     |
| ------------------ | ----------------------------------------- | ------------------ | ---------- |
| border | 是否显示边框 | _boolean_ | `true` |
| center | 是否将格子内容居中显示 | _boolean_ | `true` |
| clickable | 是否开启格子点击反馈 | _boolean_ | `false` |
| columnNum | 列数 | _number_ | `4` |
| direction | 格子内容排列的方向，可选值为 `horizontal` | _string_ | `vertical` |
| gutter | 格子之间的间距，默认单位为`px` | _string \| number_ | `0` |
| iconSize `v1.3.2` | 图标大小，默认单位为`px` | _string_ | `28px` |
| reverse `v1.7.0` | 是否调换图标和文本的位置 | _boolean_ | `false` |
| square | 是否将格子固定为正方形 | _boolean_ | `false` |
| useSlot | 是否使用自定义内容的插槽 | _boolean_ | `false` |

### Grid 外部样式类

| 类名         | 说明         |
| ------------ | ------------ |
| customClass | 根节点样式类 |

### GridItem Props

| 参数                 | 说明                                                                                                                                       | 类型               | 默认值       |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ | ------------ |
| badge | 图标右上角徽标的内容 | _string \| number_ | - |
| dot | 是否显示图标右上角小红点 | _boolean_ | `false` |
| icon | 图标 svg 值或图片链接，可选值见 [Icon 组件](/material/smartui?comId=icon) | _string_ | - |
| iconColor | 图标颜色 | _string_ | - |
| iconPrefix `v1.7.0` | 第三方图标前缀 | _string_ | `smart-icon` |
| linkType | 链接跳转类型，可选值为 `redirectTo` [`switchTab`](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.switchTab.html) `reLaunch` | _string_ | `navigateTo` |
| text | 文字 | _string_ | - |
| url | 点击后跳转的链接地址 | _string_ | - |

### GridItem Events

| 事件名     | 说明           | 回调参数 |
| ---------- | -------------- | -------- |
| onClick | 点击格子时触发 | - |

### GridItem Slots

| 名称 | 说明                                                   |
| ---- | ------------------------------------------------------ |
| -    | 自定义宫格的所有内容，需要设置`use-slot`属性           |
| icon | 自定义图标，如果设置了`use-slot`或者`icon`属性则不生效 |
| text | 自定义文字，如果设置了`use-slot`或者`text`属性则不生效 |

### GridItem 外部样式类

| 类名          | 说明         |
| ------------- | ------------ |
| contentClass | 内容样式类 |
| customClass | 根节点样式类 |
| iconClass | 图标样式类 |
| textClass | 文本样式类 |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/material/smartui?comId=config-provider)。

| 名称                                 | 默认值                                 | 描述         |
| ------------------------------------ | -------------------------------------- | ------------ |
| --grid-item-content-padding          | _@padding-md @padding-xs_              | 内容内边距   |
| --grid-item-content-background-color | _var(--app-B3, #ffffff)_               | 背景颜色     |
| --grid-item-content-active-color     | _#f2f3f5_                              | 激活时颜色   |
| --grid-item-icon-size                | _26px_                                 | 图标大小     |
| --grid-item-text-color               | _var(--app-B6-N2, rgba(0, 0, 0, 0.7))_ | 文本颜色     |
| --grid-item-text-font-size           | _12px_                                 | 文本字体大小 |