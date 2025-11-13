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
基础用法与原生 [image](<(https://developers.weixin.qq.com/miniprogram/dev/component/image.html)>) 标签一致，可以设置`src`、`width`、`height`等原生属性。
```jsx
import { Image } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <Image width="100px" height="100px" src="https://images.tuyacn.com/rms-static/f350c8a0-0eb2-11ef-8f06-49ae7b2fadcf-1715334722090.jpeg?tyName=cat.jpeg" />
  );
}
```

### 填充模式

通过`fit`属性可以设置图片填充模式，可选值见下方表格。

```jsx
import { Image } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <Image 
      width="100px" 
      height="100px"
      fit="contain"
      src="https://images.tuyacn.com/rms-static/f350c8a0-0eb2-11ef-8f06-49ae7b2fadcf-1715334722090.jpeg?tyName=cat.jpeg" />
  );
}
```

### 圆形图片

通过`round`属性可以设置图片变圆，注意当图片宽高不相等且`fit`为`contain`或`scale-down`时，将无法填充一个完整的圆形。
```jsx
import { Image } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <Image 
      width="100px" 
      height="100px"
      round
      src="https://images.tuyacn.com/rms-static/f350c8a0-0eb2-11ef-8f06-49ae7b2fadcf-1715334722090.jpeg?tyName=cat.jpeg" />
  );
}
```

### 图片懒加载

图片懒加载，在即将进入一定范围（上下三屏）时才开始加载。

```jsx
import { Image } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <Image 
      width="100px" 
      height="100px"
      lazyLoad
      src="https://images.tuyacn.com/rms-static/f350c8a0-0eb2-11ef-8f06-49ae7b2fadcf-1715334722090.jpeg?tyName=cat.jpeg" />
  );
}
```


### 加载中提示

`Image`组件提供了默认的加载中提示，支持通过`loading`插槽自定义内容。

```jsx
import { Image, Loading } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <Image 
      width="100px"
      height="100px"
      showLoading
      useLoadingSlot 
      slot={{
        loading: <Loading type="spinner" size="20" vertical />
      }} 
    />
  );
}
```

### 加载失败提示

`Image`组件提供了默认的加载失败提示，支持通过`error`插槽自定义内容。

```jsx
import { Image } from '@ray-js/smart-ui';
import { Text } from '@ray-js/ray'
import React from 'react';

export default function Demo() {
  return (
    <Image 
      width="100px"
      height="100px"
      useErrorSlot
      src="error-test"
      slot={{
        error: <Text>加载失败</Text>
      }} 
    />
  );
}
```


### 修改图片颜色 `v2.3.3`

`tintColor`属性可以直接修改图片的颜色，类似RN的tintColor属性，原理是通过css mask实现的，所以使用之前要做好用户兼容性调查哦。

```jsx
import { Image } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <Image 
      src="https://static1.tuyacn.com/static/tuya-miniapp-doc/_next/static/images/logo-small.png" 
      width="100px" 
      height="100px"
      tintColor="rgba(255, 255, 25, 0.8)"
    />
  );
}
```

## API

### Props

| 参数                   | 说明                                 | 类型               | 默认值  |
| ---------------------- | ------------------------------------ | ------------------ | ------- |
| alt | 替代文本 | _string_ | - |
| fit | 图片填充模式 | _string_ | _fill_ |
| height | 高度，默认单位为`px` | _string \| number_ | - |
| lazyLoad | 是否懒加载 | _boolean_ | `false` |
| radius | 圆角大小，默认单位为`px` | _string \| number_ | `0` |
| round | 是否显示为圆形 | _boolean_ | `false` |
| showError | 是否展示图片加载失败提示 | _boolean_ | `true` |
| showLoading | 是否展示图片加载中提示 | _boolean_ | `true` `v2.0.0` `false` `v2.7.0` |
| showMenuByLongpress | 是否开启长按图片显示识别小程序码菜单 | _boolean_ | `false` |
| src | 图片链接 | _string_ | - |
| useErrorSlot | 是否使用 error 插槽 | _boolean_ | `false` |
| useLoadingSlot | 是否使用 loading 插槽 | _boolean_ | `false` |
| webp `v1.10.11` | 是否解析 webp 格式 | _boolean_ | `false` |
| width | 宽度，默认单位为`px` | _string \| number_ | - |
| tintColor `v2.3.3` | 修改图片颜色，类似RN的tintColor，采用css mask实现 | _string_ | - |

### 图片填充模式

| 名称      | 含义                                                   |
| --------- | ------------------------------------------------------ |
| contain | 保持宽高缩放图片，使图片的长边能完全显示出来 |
| cover | 保持宽高缩放图片，使图片的短边能完全显示出来，裁剪长边 |
| fill | 拉伸图片，使图片填满元素 |
| heightFix | 缩放模式，高度不变，宽度自动变化，保持原图宽高比不变 |
| none | 保持图片原有尺寸 |
| widthFix | 缩放模式，宽度不变，高度自动变化，保持原图宽高比不变 |

### Events

| 事件名     | 说明               | 回调参数     |
| ---------- | ------------------ | ------------ |
| onClick | 点击图片时触发 | event: Event |
| onError | 图片加载失败时触发 | event: Event |
| onLoad | 图片加载完毕时触发 | event: Event |

### Slots

| 名称    | 说明                       |
| ------- | -------------------------- |
| error | 自定义加载失败时的提示内容 |
| loading | 自定义加载中的提示内容 |

### 外部样式类

| 类名          | 说明           |
| ------------- | -------------- |
| customClass | 根节点样式类 |
| errorClass | error 样式类 |
| imageClass | 图片样式类 |
| loadingClass | loading 样式类 |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/material/smartui?comId=config-provider)。

| 名称                          | 默认值                                 | 描述 |
| ----------------------------- | -------------------------------------- | ---- |
| --image-placeholder-text-color    | _#969799_       | 加载描述文字    |
| --image-placeholder-font-size    | _14px_       | 加载文字字体    |
| --image-placeholder-background-color    | _#f7f8fa_       | 加载遮照背景色    |
| --image-loading-icon-size    | _32px_       | 加载图标体积    |
| --image-loading-icon-color    | _#dcdee0_       | 加载图标颜色    |
| --image-error-size `v2.0.0`   | _32px_       | 图片加载错误时默认图片    |