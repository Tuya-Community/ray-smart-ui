# 页面级 WebView 与 Lynx 接入实现

负责人：田坤；AI：Codex；日期：2026-11-23。需求来源：用户在 IPC 业务对话授权通用适配迁入包装层源码。

## 变更

- 按用户要求删除旧工作目录，从 XiaooSe/ray-smart-ui 的 main（0f3976a）重新克隆并创建 codex/lynx-page-integration；迁入已备份实现，PR 目标为 Tuya-Community/ray-smart-ui 的 codex/lynx-dev（同一基线 0f3976a）。旧工作目录保存在临时备份，不将旧 Canary 分支历史带入 PR。
- 构建从本包自有源码生成默认分流入口与 webview/lynx 独立包装，保留原 props 类型和事件/插槽转换，底层精确依赖 3e16f7b；Slider 固定 beta.4。
- 新增 SmartUIPage、useSmartUIRenderer、withSmartUI、宿主产物检查；实例按页面对象与路由匹配，owner 清理隔离；保持默认 WebView。
- 根具名导入插件覆盖间接 SDK，保留现有配置 hook；纯 WebView 不引入 native 包装图。补齐 NotifyInstance / SmartUIPage / hook 的自动导入入口。
- 更新引入文档，业务不再携带 bridge 生成器。默认混合模式未实现逐页面组件资产剔除，不宣称包体积自动下降。

## 验证

构建、14 项源码测试、npm 实际归档及 IPC 本地集成验证通过。补齐 prepack / prepublishOnly 的产物和依赖校验，缺少 Lynx Switch 入口时反向验证明确失败。业务 110 套 / 879 项 Jest、7 项包/宿主合同、配置、矩阵、类型及修改文件 ESLint 门禁通过；最终候选运行时/类型文件与已构建版本逐字节一致。源码候选版本 2.13.7-lynx.2 未发布 npm，业务使用随仓库保存的本地 tgz 可复现安装。源码构建临时只读复用 IPC 已安装的锁定依赖；独立开发依赖安装受 registry 访问限制，需继续检查 lockfile。


## 发布与运行边界

- WebView 正式构建通过。Lynx 正式主包约 2.02 MB，旧接法同条件对照也超限；未放宽门禁。显式诊断构建的双渲染、宿主、字体及分包产物合同通过，不算正式发布通过。
- 默认 mixed 仍包含双端组件资产；本次共享 native 包装层生成助手，尚不承诺逐页面资产裁剪。
- 组件库锁文件由原源码锁与业务已安装权威锁解析得到完整声明依赖闭包；开发环境全量重装受 registry / 缓存问题影响，未记为独立安装通过。业务候选 tgz 的 frozen/offline 安装通过。
- 源码经 XiaooSe fork 的 codex/lynx-page-integration 分支提交到上游 codex/lynx-dev 审批；尚未发布 npm、未推设备，真机交互仍待验收。配套源码补丁随业务 vendor 目录交付。
