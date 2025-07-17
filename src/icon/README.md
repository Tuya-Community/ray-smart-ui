---
category: 展示
---

# Icon 图标

### 介绍

基于字体的图标集，可以通过 Icon 组件使用，也可以在其他组件中通过 icon 属性引用。

### 引入

```jsx
import { Icon } from '@ray-js/smart-ui';
```

## 代码演示

### 基础用法

`Icon`的`name`属性支持传入图标名称或图片链接。

```jsx
import warningIcon from '@tuya-miniapp/icons/dist/svg/Warning';
import { View } from '@ray-js/ray';
import { Icon } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <View>
      <Icon name={warningIcon} />
      <Icon name="https://static1.tuyacn.com/static/tuya-miniapp-doc/_next/static/images/logo-small.png" />
    </View>
  );
}
```

### 提示信息

设置`dot`属性后，会在图标右上角展示一个小红点。设置`info`属性后，会在图标右上角展示相应的徽标。

```jsx
import warningIcon from '@tuya-miniapp/icons/dist/svg/Warning';
import { View } from '@ray-js/ray';
import { Icon } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <View style={{padding: 48}}>
      <Icon name={warningIcon} dot />
      <Icon name={warningIcon} info="9" />
      <Icon name={warningIcon} info="99+" />
    </View>
  );
}
```

### 图标颜色

设置`color`属性来控制图标颜色。

```jsx
import warningIcon from '@tuya-miniapp/icons/dist/svg/Warning';
import { Icon } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <Icon name={warningIcon} color="red" />
  );
}
```

### 图标大小

设置`size`属性来控制图标大小。

```jsx
import warningIcon from '@tuya-miniapp/icons/dist/svg/Warning';
import { Icon } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <Icon name={warningIcon} size="50px" />
  );
}
```

### 自定义图标

如果需要在现有 Icon 的基础上使用更多图标，可以引入第三方 iconfont 对应的字体文件和 CSS 文件，之后就可以在 Icon 组件中直接使用。例如，可以在 `app.wxss` 文件中引入。

```css
/* 引入第三方或自定义的字体图标样式 */
@font-face {
  font-family: 'my-icon';
  src: url('./my-icon.ttf') format('truetype');
}

.my-icon {
  font-family: 'my-icon';
}

.my-icon-extra::before {
  content: '\e626';
}
```

```jsx
// 通过 class-prefix 指定类名为 my-icon
<Icon class-prefix="my-icon" name="extra" />
```

## API

### Props

| 参数        | 说明                                       | 类型               | 默认值    |
| ----------- | ------------------------------------------ | ------------------ | --------- |
| name        | 图标名称或 Svg URL 或图片链接              | _string_           | -         |
| dot         | 是否显示图标右上角小红点                   | _boolean_          | `false`   |
| info        | 图标右上角文字提示                         | _string \| number_ | -         |
| color       | 图标颜色                                   | _string_           | `inherit` |
| size        | 图标大小，如 `20px`，`2em`，默认单位为`px` | _string \| number_ | `inherit` |
| customStyle | 自定义样式                                 | _object_           | -         |
| classPrefix | 类名前缀                                   | _string_           | `Icon`    |

### Events

| 事件名  | 说明           | 参数 |
| ------- | -------------- | ---- |
| onClick | 点击图标时触发 | -    |

### 外部样式类

| 类名        | 说明                 |
| ----------- | -------------------- |
| customClass | 根节点样式类         |
| infoClass   | 图标右上角文字样式类 |
