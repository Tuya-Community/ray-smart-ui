---
category: 反馈
---

# Toast 轻提示

### 介绍

在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。

### 引入

```js
import { Toast, ToastInstance } from '@ray-js/smart-ui';
```

## 代码演示

```warning:⚠️注意
通过 ToastInstance 方式调用组件时，页面上需要存在对应 Id 的 Toast 组件，且 Id 全局不能重复哦！
```

### 文字提示

使用 `ToastInstance` 方法必须要在页面上挂载一个 `<Toast id="smart-toast" />` 节点才可以动态生成提示弹框。

```jsx
import { Toast, ToastInstance, Button } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const open = () => {
    ToastInstance('我是提示文案，建议不超过十五字~');
  }
  return (
    <>
      <Toast id="smart-toast" />
      <Button onClick={open}>点击展示</Button>
    </>
  )
}
```

### 加载中提示

使用 `ToastInstance.loading` 方法展示加载提示，通过 `forbidClick` 属性可以禁用背景点击，通过 `loadingType` 属性可以自定义加载图标类型。

```jsx
import { Toast, ToastInstance, Button } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const open = () => {
    ToastInstance.loading({
      message: '加载中...',
      forbidClick: true,
    });
  }

  const openIcon = () => {
    ToastInstance.loading({
      message: '加载中...',
      forbidClick: true,
      loadingType: 'spinner',
    });
  }
  return (
    <>
      <Toast id="smart-toast" />
      <Button onClick={open}>点击展示</Button>
      <Button onClick={openIcon}>自定义加载图标</Button>
    </>
  )
}
```

### 成功/失败提示

```jsx
import { Toast, ToastInstance, Button } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const openSuccess = () => {
    ToastInstance.success('成功文案');
  }

  const openFail = () => {
    ToastInstance.fail('失败文案');
  }
  return (
    <>
      <Toast id="smart-toast" />
      <Button onClick={openSuccess}>成功</Button>
      <Button onClick={openFail}>失败</Button>
    </>
  )
}
```

### 动态更新提示

```jsx
import { Toast, ToastInstance, Button } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const open = () => {
    const toast = ToastInstance.loading({
      duration: 0, // 持续展示 toast
      forbidClick: true,
      message: '倒计时 3 秒',
      selector: '#custom-selector',
      width: 120,
    });

    let second = 3;
    const timer = setInterval(() => {
      second--;
      if (second) {
        toast.setData({
          message: `倒计时 ${second} 秒`,
        });
      } else {
        clearInterval(timer);
        Toast.clear();
      }
    }, 1000);
  }

  return (
    <>
      <Toast id="custom-selector" />
      <Button onClick={open}>弹出提示</Button>
    </>
  )
}
```

### OnClose 回调函数


```jsx
import { Toast, ToastInstance, Button } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const open = () => {
    ToastInstance({
      type: 'success',
      message: '提交成功',
      onClose: () => {
        console.log('执行OnClose函数');
      },
    });
  }

  return (
    <>
      <Toast id="smart-toast" />
      <Button onClick={open}>弹出提示</Button>
    </>
  )
}
```

### 不同位置

```jsx
import { Toast, ToastInstance, Button } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const showBottomToast = () => {
    ToastInstance({
      message: Strings.getLang('promptContent'),
      position: 'bottom',
    });
  };

  const showTopToast = () => {
    ToastInstance({
      message: Strings.getLang('promptContent'),
      position: 'top',
    });
  };

  return (
    <>
      <Button onClick={showBottomToast}>底部</Button>
      <Button onClick={showTopToast}>顶部</Button>
      <Toast id="smart-toast" />
    </>
  )
}
```

### 自定义颜色 `v2.8.0`

通过 `textColor` 属性可以自定义文字颜色，通过 `iconColor` 属性可以自定义图标颜色。

```jsx
import { Toast, ToastInstance, Button } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const openText = () => {
    ToastInstance({
      message: '我是提示文案，建议不超过十五字~'
      textColor: '#1989FA',
    });
  }

  const openSuccess = () => {
    ToastInstance.success({
      message: '成功文案',
      textColor: '#1989FA',
      iconColor: '#1989FA',
    });
  }
  return (
    <>
      <Toast id="smart-toast" />
      <Button onClick={openText}>文案</Button>
      <Button onClick={openSuccess}>成功</Button>
    </>
  )
}
```

## API

### 方法

| 方法名    | 参数   | 返回值     | 介绍   |
| ---------- | ------------ | ---------- | --------- |
| ToastInstance | `options \| message` | toast 实例 | 展示提示 |
| ToastInstance.clear | `clearAll` | `void` | 关闭提示 |
| ToastInstance.fail | `options \| message` | toast 实例 | 展示失败提示 |
| ToastInstance.loading | `options \| message` | toast 实例 | 展示加载提示 |
| ToastInstance.resetDefaultOptions | - | `void` | 重置默认配置，对所有 Toast 生效 |
| ToastInstance.setDefaultOptions | `options` | `void` | 修改默认配置，对所有 Toast 生效 |
| ToastInstance.success | `options \| message` | toast 实例 | 展示成功提示 |

### Options

| 参数        | 说明               | 类型       | 默认值        |
| ----------- | ------------------------ | ---------- | ------------- |
| context | 选择器的选择范围，可以传入自定义组件的 this 作为上下文 | _object_ | 当前页面 |
| duration | 展示时长(ms)，值为 0 时，toast 不会消失 | _number_ | `2000` |
| forbidClick | 是否禁止背景点击 | _boolean_ | `false` |
| loadingType | 加载图标类型, 可选值为 `spinner` | _string_ | `circular` |
| mask | 是否显示遮罩层 | _boolean_ | `false` |
| message | 内容 | _string_ | `''` |
| textColor `v2.8.0` | 文字颜色 | _string_ | - |
| iconColor `v2.8.0` | 图标颜色 | _string_ | `white` |
| onClose | 关闭时的回调函数 | _Function_ | - |
| position | 位置，可选值为 `top` `middle` `bottom` | _string_ | `middle` |
| selector | 自定义选择器 | _string_ | `#smart-toast` |
| type | 提示类型，可选值为 `loading` `success` `fail` `warn` `html` (`^v2.0.0`支持`warn`) | _string_ | `text` |
| zIndex | z-index 层级 | _number_ | `1000` |
| width `v2.1.7` | 自定义弹窗宽度 | _number_ | `''` |
| nativeDisabled `v2.5.0` | 开启弹框期间是否禁用本地手势 | _boolean_ | `false` |

### Slot

| 名称 | 说明       |
| ---- | ---------- |
| -    | 自定义内容 |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/material/smartui?comId=config-provider)。

| 名称                          | 默认值                                 | 描述 |
| ----------------------------- | -------------------------------------- | ---- |
| --toast-text-min-width `v2.12.0` | _96px_ | 文字提示最小宽度 |
| --toast-text-max-width `v2.12.0` | _280px_ | 文字提示最大宽度 |
| --toast-min-width `v2.6.0` | _56px_ `v2.6.0` _82px_ `v2.12.0` | 图标提示最小宽度 |
| --toast-max-width | _calc(100vw - 48px)_ `v2.0.0` _280px_ `v2.12.0` | 图标提示最大宽度 |
| --toast-font-size | _14px_ | 提示字体大小 |
| --toast-text-color | _#fff_ | 提示文本颜色 |
| --toast-line-height | _20px_ `v2.0.0` _16px_ `v2.12.0` | 提示行高 |
| --toast-background-color | _rgba(0,0,0,.7)_  `v2.0.0` _#5C5C5C_ `v2.12.0` | 提示背景颜色 |
| --toast-border-radius | _12px_ | 提示圆角半径 |
| --toast-border `v2.12.0` | _1px solid rgba(255, 255, 255, 0.05)_ | 提示边框 |
| --toast-box-shadow `v2.12.0` | _0 4px 12px rgba(0, 0, 0, 0.1), 0 16px 32px rgba(0, 0, 0, 0.12)_ | 提示阴影 |
| --toast-icon-size | _36px_ | 图标提示图标大小 |
| --toast-text-padding | _14px 16px_ | 文字提示内边距 |
| --toast-default-padding | _22px 14px 14px_ `v2.0.0` _19px 15px_ `v2.12.0` | 图标提示内边距 |
| --toast-default-width `@deprecated v2.12.0` | _56px_ | 提示默认宽度（已废弃，请使用 --toast-min-width） |
| --toast-default-min-height | _56px_ | 图标提示默认最小高度 |
| --toast-icon-text-padding-top `v2.12.0` | _8px_ | 图标提示文字上间距 |