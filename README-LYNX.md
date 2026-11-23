# Smart UI WebView 与 Lynx 接入

本版本由 `@ray-js/smart-ui` 统一提供 React 接口、WebView/Lynx 分流、页面宿主和构建配置。底层 `@tuya/miniapp-smart-ui` 与 Slider 由包装层精确依赖，业务只安装包装层。

## 安装

```bash
yarn add --exact @ray-js/smart-ui@<已发布且包含本文接口的版本>
```

`2.13.7-canary.bcodex-pr-240-ray-canary.s6a37075.44710305558.1` 尚不包含这些接口，不可用它代替本次新包。当前源码候选版本是 `2.13.7-lynx.2`，未发布 npm；本地可先 `yarn build`、`npm pack --ignore-scripts`，将生成的 tgz 放入业务仓库，再 `yarn add --exact file:vendor/<实际文件名>.tgz`。安装后的包自带所有产物，业务构建无需访问组件库源码。

依赖的 Slider `0.3.10-beta.4` 当前使用涂鸦 npm 镜像；目标环境需要能访问对应 registry。底层 Smart UI Canary 在公开 npm。已有企业 registry 配置的项目沿用现有配置；不要用旧 Slider 替代而声称已验收。

已有第三方 SDK 间接依赖包装层时，可在业务 resolutions 里统一包装层版本，防止出现第二份 React Context。业务不用再声明底层 SDK 的直接依赖或额外版本覆盖。若暂存旧 Slider resolution，核对它与本包锁定版本相同。

## 一次构建配置

```ts
import { withSmartUI } from '@ray-js/smart-ui/config';

export default withSmartUI(existingRayConfig);
```

`withSmartUI` 保留现有配置、别名和 esbuild hook，接入官方按需导入、间接 SDK 根具名导入收窄，以及新旧底层包名的统一解析。默认混合模式保留两种实现。纯 WebView 对照构建可用：

```ts
export default withSmartUI(existingRayConfig, { renderer: 'webview' });
```

此选项只决定组件实现图，不能替代页面自身 renderer 配置。不要手动 alias 整个底层包到 `/lynx`；不要添加 generated 类型路径、复制 bridge 脚本或修改 node_modules。默认模式会收集两种组件实现，不承诺每个页面只保留一端的组件资产；正式构建仍须检查包体积。

## 每页一个静态边界

页面 renderer 使用 Ray 已有的 `native / webview`。页面入口直接复用同一配置：

```tsx
import { SmartUIPage } from '@ray-js/smart-ui';
import pageConfig from './index.config';

export default function Page() {
  return (
    <SmartUIPage renderer={pageConfig.renderer}>
      <Home />
    </SmartUIPage>
  );
}
```

配置没有 renderer 字段时，可省略边界的 renderer（默认 WebView），或在配置中显式声明 `renderer: 'webview' as const`。包装已有 HOC 时保留其 props、ref 与初始化。所有需要命令式提示的主包/分包页面都使用静态边界；不要只靠 App 运行时插件注入。边界不创建布局 View，只提供 Context，挂载 `smart-dialog`、`smart-toast` 并登记当前页模式；卸载只清理自己的登记，隐藏页面保留登记以支持显式 context 调用。

可选 `route` 应为无前导 `/` 的真实路由；通常无需传入，边界首次挂载捕获当前页面。特殊宿主初始化阶段尚取不到页面时，应传 `route` 或真实页面 `context`，避免实例找不到归属。不要在同一页面重复挂载边界或保留同 id 的 App 宿主。

## 组件和实例沿用原 API

```tsx
import { Popup, Picker, Slider, ToastInstance, DialogInstance } from '@ray-js/smart-ui';
```

组件从页面 Context 自动选择实现，保持原 props、插槽、事件及 ref 转发；普通 Slider 与 RangeSlider 一起分流。业务无需逐组件传 renderMode，也无需导入 `/lynx/dist`。

ToastInstance / DialogInstance / NotifyInstance 自动选择当前页实现。异步任务绑定原页面时，继续传原 API 支持的 `context`。同名路由重复入栈优先按页面对象定位；clear/close 等清理操作处理两端队列，避免页面切换遗留提示。

Notify 宿主按实际使用静态挂载在边界内：

```tsx
<SmartUIPage renderer={pageConfig.renderer}>
  <Home />
  <Notify id="smart-notify" />
</SmartUIPage>
```

只调用 NotifyInstance 而不挂载同页面宿主不会显示。业务可通过 `useSmartUIRenderer()` 获取当前 Context 的 `native / webview`，用于业务自己的渲染分支。

## 验证

组件库：`yarn build` → `yarn test` → `yarn verify:package` → `npm pack --ignore-scripts --dry-run`。prepack / prepublishOnly 会拦截缺失构建产物，发布前不会静默补编译。归档必须带 `es`、`lib`、`webview`、`lynx`、`config.cjs`、类型及清单。

业务 Ray 编译完成后，检查页面宿主注册：

```bash
node -e "const { checkSmartUIHosts } = require('@ray-js/smart-ui/config'); console.log(checkSmartUIHosts('dist/tuya'))"
```

检查默认 Dialog/Toast 的主包、分包注册、渲染分支和组件文件。自定义 selector 和 Notify 按实际场景另外核验。分别构建纯 WebView 与混合模式，检查最终页面 renderer、组件路径及包体积；通过业务已有类型、配置和 ESLint 门禁。

真机覆盖 Popup/Picker、Switch、Slider 拖动取消、Toast/Dialog 回调、跨页面实例归属、隐藏返回/卸载重进、目标平台和主题、大屏，以及播放器/地图上的遮挡和触摸恢复。源码测试与构建不替代真机验收。
