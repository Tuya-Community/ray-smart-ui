---
category: 通用
---

# ConfigProvider 全局配置

## 介绍

用于配置 Smart UI 组件的主题样式。


### 引入

```jsx
import { ConfigProvider } from '@ray-js/smart-ui';
```

### 定制主题

```!info
Smart UI 组件通过丰富的 [CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties) 来组织样式，通过覆盖这些 CSS 变量，可以实现**定制主题、动态切换主题**等效果。
```


## 示例

以 Button 组件为例，查看组件的样式，可以看到 `.smart-button--primary` 类名上存在以下变量：

```css
.smart-button--primary {
  color: var(--button-primary-color, #fff);
  background: var(--button-primary-background-color, #07c160);
  border: var(--button-border-width, 1px) solid var(
      --button-primary-border-color,
      #07c160
    );
}
```


### 自定义 CSS 变量

#### 通过 CSS 覆盖

你可以直接在app.less中覆盖这些 CSS 变量，Button 组件的样式会随之发生改变：

```css
/* 添加这段样式后，Primary Button 会变成红色 */
page {
  --button-primary-background-color: red;
}
```
或者在index.module.less内局部的覆盖

```css
.custom-box {
  --button-primary-background-color: red;
}

```

#### 通过 ConfigProvider 覆盖

只需要将希望修改的组件的CSS变量写成驼峰形式即可，组件有全量的CSS 变量类型提示。

```jsx
import { ConfigProvider, Button } from '@ray-js/smart-ui';
import React, { useState } from 'react';
import { View } from '@ray-js/ray';

export default function Demo() {
  const [color, setColor] = useState('#07c160');

  return (
    <>
      <View style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
        <Button type="primary" color="red" onClick={() => setColor('red')}>
          设置颜色
        </Button>
        <Button type="primary" color="green" onClick={() => setColor('green')}>
          设置颜色
        </Button>
        <Button type="primary" color="blue" onClick={() => setColor('blue')}>
          设置颜色
        </Button>
      </View>
      <ConfigProvider
        themeVars={{
          buttonPrimaryBorderColor: color,
          buttonPrimaryBackgroundColor: color,
        }}
      >
        <Button type="primary">主要按钮</Button>
      </ConfigProvider>
    </>
  );
}
```

## API

### Props

| 参数       | 说明           | 类型     | 默认值 |
| ---------- | -------------- | -------- | ------ |
| themeVars | 自定义主题变量 | _object_ | - |