# SmartUI Lynx for Ray（Beta）

`@ray-js/smart-ui-lynx` 是涂鸦 Lynx 原生小程序页面使用的 Ray 包装层，底层固定依赖 `@tuya/miniapp-smart-ui-lynx@0.1.0-beta.0`。与原 WebView 组件包分别维护。

## 安装与接入

项目需先接入公司 Ray / Lynx 底座及支持 Native 小程序组件的构建链；本包不负责安装或切换底座。React 使用 17.x。

```bash
yarn add @ray-js/smart-ui-lynx@0.1.0-beta.0
```

无需另外安装底层 SmartUI Lynx 包，也无需手写 `usingComponents`。推荐从 `/native` 入口按需导入，由 Ray 将原生小程序组件引用转换为页面依赖。

页面配置 `index.config.ts`：

```ts
export default {
  renderer: 'native',
};
```

页面 `index.tsx`：

```tsx
import React, { useState } from 'react';
import { Switch, Slider } from '@ray-js/smart-ui-lynx/native';

export default function Home() {
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState(30);

  return (
    <>
      <Switch checked={checked} onChange={event => setChecked(event.detail)} />
      <Slider value={value} onChange={setValue} />
    </>
  );
}
```

Switch 回调保留 SmartUI 事件结构（`event.detail` 为布尔值）；Slider 包装保留原 Ray Slider 常用写法（回调参数为数值）。受控值由业务更新。WebView 页面继续引用 `@ray-js/smart-ui`，不要在 WebView 页面中使用 `/native`。

`/native` 导出 Icon、Image、Loading、Switch、Grid、GridItem、Popup、Overlay、ActionSheet、Toast、Picker、DateTimePicker（另有 DatetimePicker 别名）、Calendar、Dialog、Slider。Calendar 的内部子组件和 PickerColumn 不作为独立公共入口。

## API 范围与限制

这是迁移验证用 Beta，不代表原 SmartUI 全量 API 与跨平台验收完成。

- Slider 当前支持常用数值、禁用、方向、轨道/滑块样式与回调；刻度、反向、formatter、forceStep 等高级 API 尚未完整映射。已导出的兼容类型不表示全部属性已实现。
- `/native` 也导出 `ToastInstance`、`DialogInstance`。调用必须匹配当前页面已挂载的 Toast/Dialog 宿主及 selector；实例调用、队列与页面切换仍需业务场景验收。
- 主题、远程 SVG、原生地图/视频层级、Android 和真机全量交互仍有待验证项。逐组件状态见[底层迁移记录](https://github.com/Tuya-Community/miniapp-smart-ui/blob/codex/lynx/lynx/README.md)。
- 本包的原生组件引用需要 Ray 编译转换，不作为普通浏览器 React 组件或 Node.js 运行时使用。`components-ty-slider` 依赖用于兼容公开 Slider 属性类型，`/native` 运行时不导入该包的旧 RJS 实现。

## 实验性统一入口

根入口允许 `SmartUIRendererContext` 或 `renderMode="lynx"` 选择渲染器，默认 WebView。使用它时需自行安装 `@ray-js/smart-ui`（2.x）。

```tsx
import { SmartUIRendererContext, Grid, GridItem } from '@ray-js/smart-ui-lynx';

<SmartUIRendererContext.Provider value="lynx">
  <Grid><GridItem text="示例" /></Grid>
</SmartUIRendererContext.Provider>
```

Context 只作用于当前 React 树，不跨独立路由；实例函数 `getToastInstance('lynx')`、`getDialogInstance('lynx')` 需要显式指定渲染器。根入口仍会静态引用 WebView 包；已有混合入口探针在旧 WebView Slider RJS 的 MiniPack 编译处出现 `schemaUrl` 错误。当前业务接入请使用 `/native`。

## 本仓库构建与包检查

在 `lynx/` 内独立安装开发依赖，无需更改根仓库的依赖配置：

```bash
cd lynx
npm ci --ignore-scripts --registry=https://registry.npmjs.org
npm test
npm run typecheck
npm run build
npm pack
```

构建同时生成 `es/`、`lib/` 及对应声明文件，`verify:package` 检查实际 npm 文件清单、相对依赖闭包、依赖声明以及 `/native` 不引入旧 WebView/RJS 运行时代码。底层 Native 组件自身的执行与业务构建仍由 Ray / MiniPack 完成。

## 发布 Beta

提交并推送 `codex/lynx` 分支后，通过已有手动发布入口触发：

```bash
gh workflow run publish-manual.yml --ref codex/lynx -f version=0.1.0-beta.0
```

该分支委托独立的 `publish-lynx-beta.yml`，构建和发布 `lynx/` 子包，使用 npm `beta` 标签。无需填写 `mr_id` 或 `branch`，原有组件同步任务在该分支跳过。后续发布请填写新的 Beta 版本号；已发版本不会覆盖。
