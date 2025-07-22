English | [简体中文](./README-zh_CN.md)

# @ray-js/smart-ui

[![npm](https://img.shields.io/npm/v/@ray-js/smart-ui)![down](https://img.shields.io/npm/dt/@ray-js/smart-ui)![ray-js](https://img.shields.io/badge/maintained%20with-Ray-cc00ff.svg)](https://lerna.js.org/)![lodash](https://img.shields.io/badge/-lodash-f16728?style=flat-square&logo=lodash&labelColor=ffffff&color=f16728)![TS](https://img.shields.io/badge/TS-TypeScript-1C6FBB)


## Introduction

`@ray-js/smart-ui` is a React component library based on the `Ray` framework and `@tuya-miniapp/smart-ui`, designed to provide lightweight and reliable UI components that meet the mobile design specifications of Smart MiniApp. By combining `Ray's` specification adaptation middleware and built-in complete TS types, we offer a full set of React components suitable for Smart MiniApp, enabling developers to quickly build mobile applications that comply with design specifications.

## Preview

Scan the QR code below to experience the component library examples.

<img src="https://images.tuyacn.com/content-platform/hestia/1716260412b7f2ae02271.png" width="200" height="200">

## Before Using

Before using Smart UI, make sure you have studied the official Smart MiniApp [Ray Development Overview](https://developer.tuya.com/cn/miniapp/develop/ray/guide/overview) and [Ray Component Introduction](https://developer.tuya.com/cn/miniapp/develop/ray/framework/component).

## Installation

```bash
# Install via yarn (recommended)
yarn add @ray-js/smart-ui

# Install via npm
npm i @ray-js/smart-ui
```

## Using Components

Take the Button component as an example

```jsx
import { Button } from '@ray-js/smart-ui';

export default function Demo() {
  return <Button type="info">Info Button</Button>;
}
```

## Dynamic On-Demand Import (Recommended)
Considering the project's on-demand introduction and overall size issues, the above import method will lead to some component style file residuals affecting the package size. Therefore, we recommend using the on-demand import plugin, which will automatically parse `import { Button } from '@ray-js/smart-ui';` into `import { Button } from '@ray-js/smart-ui/es/button';`.

1. Environment Requirements
   * \>= @ray-js/cli@1.7.4
   * esbuild build mode (does not support webpack mode)
   * Use ESModule import syntax for import
   * **SmartUI version 2.4.0 and above**

2. Simply introduce `SmartUIAutoImport` in the project file `ray.config.ts`:
```ts
import { RayConfig } from '@ray-js/types';
import SmartUIAutoImport from '@ray-js/smart-ui/lib/auto-import';

const config: RayConfig = {
  ...
  importTransformer: [SmartUIAutoImport],
};
module.exports = config;
```

```!warning: 注意
The on-demand import plugin will not parse content inside node_modules, so if you reference or develop SmartUI secondary encapsulation npm packages, you need on-demand import resources internally; otherwise, it will cause a full import of the SmartUI component library!
You can use Ray version 1.8.0-beta.12, which adds the Ray doctor command to check the health of project dependencies!
```

## Preview in Developer Tools

```bash
# Install project dependencies
$ yarn
```

Open [Tuya MiniApp Tools](https://developer.tuya.com/cn/miniapp/devtools/tools) and add the `example` directory to preview the examples.

## Basic Library Version

@ray-js/smart-ui provides stable support starting from Smart MiniApp basic library version `2.19.0`, `@ray-js/ray@^1.5.1`, and IDE `0.6.5`.

## Related Links

[SmartUI Component Library Official Website](https://developer.tuya.com/material/smartui?comId=help-getting-started&lang=en)  
[SmartUI GitHub](https://github.com/Tuya-Community/ray-smart-ui)  
[MiniApp SmartUI GitHub](https://github.com/Tuya-Community/miniapp-smart-ui)  
[MiniApp Community Forum](https://www.tuyaos.com/viewforum.php?f=37)   
[Ray Official Website](https://developer.tuya.com/en/miniapp)  
[Ray Material Market](https://developer.tuya.com/material/library_oHEKLjj0?lang=en) 
[Public Source Collection of Materials and Templates](https://github.com/Tuya-Community/tuya-ray-materials) 

## Changelog

> This project follows the [Angular Style Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153). For the update log, please refer to [Release](https://github.com/Tuya-Community/ray-smart-ui/releases) (starting from version 2.5.1)

[Official Website Changelog](https://developer.tuya.com/material/smartui?comId=help-changelog)


## License

This project is licensed under the [MIT](https://en.wikipedia.org/wiki/MIT_License) license. Please feel free to enjoy and participate in open-source.
