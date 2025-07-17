---
category: 展示
new: true
---

# Empty 空状态

> v2.0.0 版本重构

### 介绍

空状态时的占位提示。

### 引入

```jsx
import { Empty } from '@ray-js/smart-ui';
```

## 代码演示

### 基础用法

```jsx
import { Empty } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Empty title="标题" description="说明文案" />;
}
```

### 自定义图片

需要自定义图片时，可以在 image 属性中传入任意图片 URL。

```jsx
import { Empty } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Empty
    image="https://images.tuyacn.com/rms-static/ae2ff530-976e-11ef-9ccb-47cdb7db279b-1730368709635.png?tyName=img_custom_empty.png"
  />;
}
```

### 底部内容

默认插槽是插入在组件底部的。

```jsx
import { Button, Empty } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Empty description="说明文案">
    <Button round type="primary" >
      Button
    </Button>
  </Empty>
}
```

### 使用插槽

自定义插槽`title`可以插入标题，`description`可以插入描述文案。  

```jsx
import { Empty } from '@ray-js/smart-ui';
import { Text } from '@ray-js/ray';
import React from 'react';

export default function Demo() {
  return <Empty>
    <Text slot="title">使用插槽插入标题</Text>
    <Text slot="description">使用插槽插入说明文案</Text>
  </Empty>
}
```

## API

### Props

| 参数        | 说明                                                            | 类型     | 默认值    |
| ----------- | --------------------------------------------------------------- | -------- | --------- |
| description | 图片下方的描述文字 | _string_ | - |
| image | 自定义传入图片 URL | _string_ | `default` |
| imageStyle | 图片的样式 | _React.CSSProperties_ | - |
| titleStyle | 标题的样式 | _React.CSSProperties_ | - |
| descriptionStyle | 描述的样式 | _React.CSSProperties_ | - |

### Slots

| 名称        | 说明           |
| ----------- | -------------- |
| -           | 自定义底部内容 |
| title | 自定义标题 |
| description | 自定义描述文字 |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/material/smartui?comId=config-provider)。

| 名称                          | 默认值                                 | 描述 |
| ----------------------------- | -------------------------------------- | ---- |
| --empty-image-width        | _180px_                           | 图片的宽度    |
| --empty-image-height        | _180px_                         | 图片的高度    |
| --empty-title-color  | _var(--app-B6-N1, rgba(0, 0, 0, 1))_    | 标题颜色    |
| --empty-title-font-size  | _16px_    | 标题字体大小    |
| --empty-title-font-weight  | _normal_    | 标题字重    |
| --empty-title-line-height  | _24px_    | 标题字体行高    |
| --empty-title-margin-top  | _7px_    | 标题向上外边距    |
| --empty-description-color  | _var(--app-B4-N3, rgba(0, 0, 0, 0.5))_  | 描述文字的字体颜色   |
| --empty-description-font-size  | _14px_    | 描述文字的字体大小    |
| --empty-description-font-weight  | _normal_    | 描述文字的字重    |
| --empty-description-line-height  | _20px_    | 描述文字的字体行高    |
| --empty-description-margin-top  | _4px_    | 描述文字向上外边距    |
| --empty-bottom-margin-top  | _24px_    | 底部内容的向上外边距    |