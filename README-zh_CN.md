[English](./README.md) | 简体中文

# @ray-js/smart-ui

[![npm](https://img.shields.io/npm/v/@ray-js/smart-ui)![down](https://img.shields.io/npm/dt/@ray-js/smart-ui)![ray-js](https://img.shields.io/badge/maintained%20with-Ray-cc00ff.svg)](https://lerna.js.org/)![lodash](https://img.shields.io/badge/-lodash-f16728?style=flat-square&logo=lodash&labelColor=ffffff&color=f16728)![TS](https://img.shields.io/badge/TS-TypeScript-1C6FBB)

## 介绍

`@ray-js/smart-ui` 是一个基于 `Ray` 框架和 `@tuya-miniapp/smart-ui` 的 React 组件库，旨在提供符合智能小程序移动端设计规范的轻量、可靠的 UI 组件。通过结合 `Ray` 的规范适配中间层和内置的完善 TS 类型，我们提供了一整套适用于智能小程序的 React 组件，让开发者能够快速构建符合设计规范的移动端应用。

## 预览

扫描下方智能小程序二维码，体验组件库示例。

<img src="https://images.tuyacn.com/content-platform/hestia/1716260412b7f2ae02271.png" width="200" height="200">

## 使用之前

使用 Smart UI 前，请确保你已经学习过智能小程序官方的 [Ray 开发概述](https://developer.tuya.com/cn/miniapp/develop/ray/guide/overview)和 [Ray 组件介绍](https://developer.tuya.com/cn/miniapp/develop/ray/framework/component)。

## 安装

```bash
# 通过 yarn 安装（推荐）
yarn add @ray-js/smart-ui

# 通过 npm 安装
npm i @ray-js/smart-ui
```

## 使用组件

以按钮组件为例

```jsx
import { Button } from '@ray-js/smart-ui';

export default function Demo() {
  return <Button type="info">信息按钮</Button>;
}
```

## 动态按需引入（推荐）
考虑到项目的按需引入以及整体体积问题，上面的引入方式会导致部分组件样式文件残留影响打包产物体积，所以我们推荐使用按需引入插件，其会自动将 `import { Button } from '@ray-js/smart-ui';` 引入方式解析成 `import { Button } from '@ray-js/smart-ui/es/button';`。

1. 环境要求
   * >= @ray-js/cli@1.7.4
   * esbuild 构建模式（不支持 webpack 模式）
   * 使用 ESModule import 语法的导入
   * **SmartUI 版本 2.4.0 及以上**

2. 在项目文件 `ray.config.ts` 内引入 `SmartUIAutoImport` 即可：
```ts
import { RayConfig } from '@ray-js/types';
import SmartUIAutoImport from '@ray-js/smart-ui/lib/auto-import';

const config: RayConfig = {
  ...
  importTransformer: [SmartUIAutoImport],
};
module.exports = config;
```

```!warning:注意
按需引入插件不会解析 node_modules 内的内容，所以如果引用了或者开发 SmartUI 二次封装 npm 包内部需要按需引入资源，否则会导致 SmartUI 组件库全量引入！  
可以使用 Ray 1.8.0-beta.12 版本，新增 Ray doctor 命令用于检测项目依赖健康度！
```

## 在开发者工具中预览

```bash
# 安装项目依赖
$ yarn
```

打开 [Tuya MiniApp Tools](https://developer.tuya.com/cn/miniapp/devtools/tools)，把 `example` 目录添加进去就可以预览示例了。

## 基础库版本

@ray-js/smart-ui 从智能小程序基础库 `2.19.0` 版本、`@ray-js/ray@^1.5.1` 及 IDE `0.6.5` 开始提供稳定的支持。


## 相关链接

[SmartUI 组件库官网](https://developer.tuya.com/material/smartui?comId=help-getting-started)  
[SmartUI GitHub](https://github.com/Tuya-Community/ray-smart-ui)
[MiniApp SmartUI GitHub](https://github.com/Tuya-Community/miniapp-smart-ui)
[小程序社区论坛](https://www.tuyaos.com/viewforum.php?f=10)
[Ray 官网](https://developer.tuya.com/cn/miniapp)  
[Ray 物料市场](https://developer.tuya.com/material/library_oHEKLjj0/) 
[物料和模板对外源码集](https://github.com/Tuya-Community/tuya-ray-materials) 


## 更新日志

> 本项目遵从 [Angular Style Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)，更新日志请查阅 [Release](https://github.com/Tuya-Community/ray-smart-ui/releases)（从 2.5.1 版本开始） 

[官网更新日志](https://developer.tuya.com/material/smartui?comId=help-changelog)  


## 开源协议

本项目基于 [MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89) 协议，请自由地享受和参与开源。
