---
category: 通用
---

# ConfigProvider 全局配置

### 介绍

全局配置

### 引入

```jsx
import { ConfigProvider } from '@ray-js/smart-ui';
```

## 代码演示

### 基础用法

```jsx
import { ConfigProvider, Button } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <ConfigProvider
      themeVars={{
        buttonPrimaryBorderColor: '#FFF',
      }}
    >
      <Button type="primary">主要按钮</Button>
    </ConfigProvider>
  );
}
```

## API

### ConfigProvider

| 参数      | 说明           | 类型   | 默认值 |
| --------- | -------------- | ------ | ------ |
| themeVars | 自定义主题变量 | object |        |
