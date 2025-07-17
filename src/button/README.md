---
category: 通用
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
      <Button loading type="primary" />
      <Button loading type="primary" loadingType="spinner" />
      <Button loading type="info" loadingText="加载中..." />
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

```js
import PlusCircleIcon from '@tuya-miniapp/icons/dist/svg/PlusCircle';
import RightIcon from '@tuya-miniapp/icons/dist/svg/Right';
```

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

| 参数        | 说明                                                     | 类型      | 默认值       |
| ----------- | -------------------------------------------------------- | --------- | ------------ |
| block       | 是否为块级元素                                           | _boolean_ | `false`      |
| buttonId    | 标识符，作为原生 button 组件的 id 值                     | _string_  | -            |
| classPrefix | 图标类名前缀，同 Icon 组件的 [class-prefix 属性](#/icon) | _string_  | `smart-icon` |
| color       | 按钮颜色，支持传入`linearGradient`渐变色                 | _string_  | -            |
| customStyle | 自定义样式                                               | _object_  | -            |
| disabled    | 是否禁用按钮                                             | _boolean_ | `false`      |
| hairline    | 是否使用 0.5px 边框                                      | _boolean_ | `false`      |
| icon        | 左侧图标名称或图片链接，可选值见 [Icon 组件](#/icon)     | _string_  | -            |
| id          | 标识符                                                   | _string_  | -            |
| loading     | 是否显示为加载状态                                       | _boolean_ | `false`      |
| loadingSize | 加载图标大小                                             | _string_  | `20px`       |
| loadingText | 加载状态提示文字                                         | _string_  | -            |
| loadingType | 加载状态图标类型，可选值为 `spinner`                     | _string_  | `circular`   |
| plain       | 是否为朴素按钮                                           | _boolean_ | `false`      |
| rightIcon   | 右侧图标或图片链接，可选值见 [Icon 组件](#/icon)         | _string_  | -            |
| round       | 是否为圆形按钮                                           | _boolean_ | `false`      |
| size        | 按钮尺寸，可选值为 `normal` `large` `small` `mini`       | _string_  | `normal`     |
| square      | 是否为方形按钮                                           | _boolean_ | `false`      |
| type        | 按钮类型，可选值为 `default` `primary` `info` `warning` `danger`   | _string_  | `default`    |

### Events

| 事件名  | 说明                                     | 参数 |
| ------- | ---------------------------------------- | ---- |
| onClick | 点击按钮，且按钮状态不为加载或禁用时触发 | -    |

> Button 提供的是 click 事件而不是原生 tap 事件，按钮禁用时，click 事件不会触发，tap 事件依然会触发。

### 外部样式类

| 类名         | 说明           |
| ------------ | -------------- |
| customClass  | 根节点样式类   |
| loadingClass | 加载图标样式类 |
