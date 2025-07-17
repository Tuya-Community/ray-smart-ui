---
category: 展示
---

# Image 图片

### 介绍

图片

### 引入

```jsx
import { Image } from '@ray-js/smart-ui';
```

## 代码演示

### 基础用法

```jsx
import { Image } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <Image width="100px" height="100px" src="https://images.tuyacn.com/rms-static/f350c8a0-0eb2-11ef-8f06-49ae7b2fadcf-1715334722090.jpeg?tyName=cat.jpeg" />
  );
}
```

## API

### Image

| 参数                | 说明                                 | 类型    | 默认值 |
| ------------------- | ------------------------------------ | ------- | ------ |
| alt                 | 替代文本                             | string  | -      |
| fit                 | 图片填充模式                         | string  | fill   |
| height              | 高度，默认单位为 px                  | string  | number | - |
| lazyLoad            | 是否懒加载                           | boolean | false  |
| radius              | 圆角大小，默认单位为 px              | string  | number | 0 |
| round               | 是否显示为圆形                       | boolean | false  |
| showError           | 是否展示图片加载失败提示             | boolean | true   |
| showLoading         | 是否展示图片加载中提示               | boolean | true   |
| showMenuByLongpress | 是否开启长按图片显示识别小程序码菜单 | boolean | false  |
| src                 | 图片链接                             | string  | -      |
| useErrorSlot        | 是否使用 error 插槽                  | boolean | false  |
| useLoadingSlot      | 是否使用 loading 插槽                | boolean | false  |
| width               | 宽度，默认单位为 px                  | string  | number | - |
