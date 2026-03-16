---
category: 通用
assets: CircleHandle,PressKey,TyFinger,DoubleKey
---

# Button 按钮

### 介绍

按钮用于触发一个操作，如提交表单。

### 引入

```jsx
import { Button } from '@ray-js/smart-ui';
```

## 代码演示

### 按钮类型

支持`default`、`primary`、`info`、`warning`、`danger`五种类型，默认为`default`。

```jsx
import React from 'react';
import { Button } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  return (
    <View>
      <Button type="default">默认按钮</Button>
      <Button type="primary">主要按钮</Button>
      <Button type="info">信息按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="danger">危险按钮</Button>
    </View>
  );
}
```

### 朴素按钮

通过`plain`属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

```jsx
import React from 'react';
import { Button } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  return (
    <View>
      <Button plain type="primary">
        朴素按钮
      </Button>
      <Button plain type="info">
        朴素按钮
      </Button>
    </View>
  );
}
```

### 细边框

设置`hairline`属性可以开启 0.5px 边框，基于伪类实现。

```jsx
import React from 'react';
import { Button } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  return (
    <View>
      <Button plain hairline type="primary">
        细边框按钮
      </Button>
      <Button plain hairline type="info">
        细边框按钮
      </Button>
    </View>
  );
}
```

### 禁用状态

通过`disabled`属性来禁用按钮，此时按钮的`bind:click`事件不会触发。

```jsx
import React from 'react';
import { Button } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  return (
    <View>
      <Button disabled type="primary">
        禁用状态
      </Button>
      <Button disabled type="info">
        禁用状态
      </Button>
    </View>
  );
}
```

### 加载状态

```jsx
import React from 'react';
import { Button } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  return (
    <View>
      <Button loading type="warning" loadingText="加载中..." />
      <Button loading type="warning" />
      <Button loading type="primary" />
      <Button loading type="primary" loadingType="spinner" />
    </View>
  );
}
```

### 按钮形状

```jsx
import React from 'react';
import { Button } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  return (
    <View>
      <Button square type="primary">
        方形按钮
      </Button>
      <Button round type="info">
        圆形按钮
      </Button>
    </View>
  );
}
```

### 图标按钮

通过`icon`属性设置按钮图标，支持 Icon 组件里的所有图标，也可以传入图标 URL。

```jsx
import React from 'react';
import { Button } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';
import PlusCircleIcon from '@tuya-miniapp/icons/dist/svg/PlusCircle';
import RightIcon from '@tuya-miniapp/icons/dist/svg/Right';

export default function Demo() {
  return (
    <View>
      <Button icon={PlusCircleIcon} type="primary" />
      <Button icon={RightIcon} type="primary">
        按钮
      </Button>
      <Button
        icon="https://static1.tuyacn.com/static/tuya-miniapp-doc/_next/static/images/logo-small.png"
        type="info"
      >
        按钮
      </Button>
    </View>
  );
}
```

### 按钮尺寸

支持`large`、`normal`、`small`、`mini`四种尺寸，默认为`normal`。

```jsx
import React from 'react';
import { Button } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  return (
    <View>
      <Button type="primary" size="large">
        大号按钮
      </Button>
      <Button type="primary" size="normal">
        普通按钮
      </Button>
      <Button type="primary" size="small">
        小型按钮
      </Button>
      <Button type="primary" size="mini">
        迷你按钮
      </Button>
    </View>
  );
}
```

### 块级元素

通过`block`属性可以将按钮的元素类型设置为块级元素。

```jsx
import React from 'react';
import { Button } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  return (
    <View>
      <Button type="primary" block>
        块级元素
      </Button>
    </View>
  );
}
```

### 自定义颜色

通过`color`属性可以自定义按钮的颜色。

```jsx
import React from 'react';
import { Button } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  return (
    <View>
      <Button color="#7232dd">单色按钮</Button>
      <Button color="#7232dd" plain>
        单色按钮
      </Button>
      <Button color="linear-gradient(to right, #4bb0ff, #6149f6)">渐变色按钮</Button>{' '}
    </View>
  );
}
```

## API

### Props

| 参数         | 说明                                                     | 类型      | 默认值       |
| ------------ | -------------------------------------------------------- | --------- | ------------ |
| block | 是否为块级元素 | _boolean_ | `false` |
| buttonId | 标识符，作为原生 button 组件的 id 值 | _string_ | - |
| classPrefix | 图标类名前缀，同 Icon 组件的 [class-prefix 属性](/material/smartui?comId=icon) | _string_ | `smart-icon` |
| color | 按钮颜色，支持传入`linear-gradient`渐变色 | _string_ | - |
| customStyle | 自定义样式 | _React.CSSProperties_ | - |
| disabled | 是否禁用按钮 | _boolean_ | `false` |
| hairline | 是否使用 0.5px 边框 | _boolean_ | `false` |
| icon | 左侧图标或图片链接，可选值见 [Icon 组件](/material/smartui?comId=icon) | _string_ | - |
| id | 标识符 | _string_ | - |
| loading | 是否显示为加载状态 | _boolean_ | `false` |
| loadingSize | 加载图标大小 | _string_ | `20px` |
| loadingText | 加载状态提示文字 | _string_ | - |
| textStyle | 按钮文字样式 | _React.CSSProperties_ | - |
| loadingType | 加载状态图标类型，可选值为 `spinner` | _string_ | `circular` |
| plain | 是否为朴素按钮 | _boolean_ | `false` |
| rightIcon | 右侧图标或图片链接，可选值见 [Icon 组件](/material/smartui?comId=icon) | _string_ | - |
| round | 是否为圆形按钮 | _boolean_ | `false` |
| size | 按钮尺寸，可选值为 `normal` `large` `small` `mini` | _string_ | `normal` |
| square | 是否为方形按钮 | _boolean_ | `false` |
| type | 按钮类型，可选值为 `primary` `info` `warning` `danger` | _string_ | `default` |

### Events

| 事件名     | 说明                                     | 参数 |
| ---------- | ---------------------------------------- | ---- |
| onClick | 点击按钮，且按钮状态不为加载或禁用时触发 | - |
| onError | 当使用开放能力时，发生错误的回调 | - |

> Button 提供的是 click 事件而不是原生 tap 事件，按钮禁用时，click 事件不会触发，tap 事件依然会触发。

### 外部样式类

| 类名          | 说明           |
| ------------- | -------------- |
| customClass | 根节点样式类 |
| loadingClass | 加载图标样式类 |
| hoverClass | 按钮按下时的样式 |


### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/material/smartui?comId=config-provider)。
| 名称                                          | 默认值                                         | 描述                               |
| --------------------------------------------- | ---------------------------------------------- | ---------------------------------- |
| --button-mini-height                          | _22px_                                         | 迷你按钮高度                       |
| --button-mini-min-width                       | _50px_                                         | 迷你按钮最小宽度                   |
| --button-mini-font-size                       | _10px_                                         | 迷你按钮字体大小                   |
| --button-small-height                         | _30px_                                         | 小按钮高度                         |
| --button-small-font-size                      | _12px_                                         | 小按钮字体大小                     |
| --button-small-min-width                      | _60px_                                         | 小按钮最小宽度                     |
| --button-normal-font-size                     | _14px_                                         | 普通按钮字体大小                   |
| --button-large-height                         | _48px_                                         | 大按钮高度                         |
| --button-default-color                        | _var(--app-B1-N1, rgba(0, 0, 0, 1))_           | 默认按钮字体颜色                   |
| --button-default-height                       | _48px_                                         | 默认按钮高度                       |
| --button-default-font-size                    | _16px_                                         | 默认按钮字体大小                   |
| --button-default-background-color             | _var(--app-B3, #ffffff)_                       | 默认按钮背景颜色                   |
| --button-default-border-color                 | _var(--app-B6-N7, rgba(0, 0, 0, 0.1))_         | 默认按钮边框颜色                   |
| --button-primary-color                        | _#fff_                                         | 主按钮字体颜色                     |
| --button-primary-background-color             | _var(--app-M3, #2dda86)_                       | 主按钮背景颜色                     |
| --button-primary-border-color                 | _var(--app-M3, #2dda86)_                       | 主按钮边框颜色                     |
| --button-info-color                           | _#fff_                                         | 信息按钮字体颜色                   |
| --button-info-background-color                | _var(--app-M4, #1989fa)_                       | 信息按钮背景颜色                   |
| --button-info-border-color                    | _var(--app-M4, #1989fa)_                       | 信息按钮边框颜色                   |
| --button-danger-color                         | _#fff_                                         | 危险按钮字体颜色                   |
| --button-danger-background-color              | _var(--app-M2, #f04c4c)_                       | 危险按钮背景颜色                   |
| --button-danger-border-color                  | _var(--app-M2, #f04c4c)_                       | 危险按钮边框颜色                   |
| --button-warning-color                        | _#fff_                                         | 警告按钮字体颜色                   |
| --button-warning-background-color             | _var(--app-M5, #ffa000)_                       | 警告按钮背景颜色                   |
| --button-warning-border-color                 | _var(--app-M5, #ffa000)_                       | 警告按钮边框颜色                   |
| --button-line-height                          | _20px_                                         | 按钮行高                           |
| --button-border-width                         | _1px_                                          | 按钮边框宽度                       |
| --button-border-radius                        | _10px_                                         | 按钮边框圆角半径                   |
| --button-round-border-radius                  | _999px_                                        | 圆形按钮边框圆角半径               |
| --button-plain-background-color               | _#fff_                                         | 纯按钮背景颜色                     |
| --button-disabled-opacity                     | _0.3_                                          | 禁用按钮不透明度                   |
| --button-font-weight                          | _normal_                                       | 按钮字体粗细                       |
| --button-primary-font-weight                  | _600_                                          | 主按钮字体粗细                     |