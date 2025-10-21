---
category: 开发指南
---

# 常见问题

一些开发的常见问题

## 打包报错 json-loader 错误

smart-ui 组件库需要使用 esbuild 打包器进行打包构建，如果出现此错误可能是你的构建命令使用了 webpack 打包。例如 package.json 如下

```json
{
  "scripts": {
    "start": "ray start --target tuya",
    "build": "ray build --target tuya --bundler=webpack",
    "lint": "eslint src --ext .js,.jsx,.ts,.tsx --fix"
  }
}
```

打包会使用 build 命令进行打包，可以看到 build 命令指定了 bundler 为 webpack。将 bundler 参数去除即可:

```json
{
  "scripts": {
    "start": "ray start --target tuya",
    "build": "ray build --target tuya",
    "lint": "eslint src --ext .js,.jsx,.ts,.tsx --fix"
  }
}
```

## 获取组件实例

```javascript
import { Picker } from '@ray-js/smart-ui';
import { getCurrentPages } from '@ray-js/ray';
import React, { useEffect } from 'react';

export default function Demo() {
  useEffect(() => {
    const pages = getCurrentPages();
    const currPage = pages[pages.length - 1];
    const pickerInstance = page.selectComponent("#myPicker");
    console.log(pickerInstance, '----picker');
  }, [])
  return <Picker id="myPicker" columns={[]} />;
}
```