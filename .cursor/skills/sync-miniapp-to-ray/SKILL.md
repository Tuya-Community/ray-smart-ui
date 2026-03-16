---
name: sync-miniapp-to-ray
description: 同步 miniapp-smart-ui 的组件变更到 ray-smart-ui。处理 Props 转 TypeScript Interface、WXML 转 React TSX 以及 README 同步。
---

# Miniapp to Ray 同步指南

本 Skill 用于指导 AI 如何精准地将微信小程序组件代码转换为 Ray (React) 风格的代码。

## 核心转换规则

### 1. 属性转换 (Props -> TS Interface)

- **目标文件**: `ray-smart-ui/src/@types/<组件名>/index.ts`
- **规则**:
  - 将小程序 `SmartComponent` 的 `props` 定义改动的内容转换为 TypeScript 接口。
  - 接口命名规范：`Smart<ComponentName>Props`。
  - 保持原有的 JSDoc 注释。
  - 包含事件定义：`Smart<ComponentName>Events`，使用 `SmartEventHandler<any>`。

### 2. Demo 转换 (WXML -> TSX)

- **目标文件**: `ray-smart-ui/example/src/pages/<组件名>/index.tsx`
- **规则**:
  - **多语言**: 使用 `Strings.getLang('key')` 替换 `I18n.t('key')`。
  - **组件名**: 转换为大写驼峰（如 `<smart-button>` -> `<Button>`）。
  - **属性名**:
    - `custom-class` -> `customClass` 或 `className`。
    - 其他连字符属性转为小驼峰（如 `loading-text` -> `loadingText`）。
  - **事件**: `bind:click="onClick"` -> `onClick={onClick}`。
  - **结构**: 使用 `<DemoBlock>` 包裹示例。

### 3. 文档同步 (README)

- **目标文件**: `ray-smart-ui/src/<组件名>/README.md`、`ray-smart-ui/src/<组件名>/README.en.md`
- **规则**:
  - **API 同步**: 保持 API 表格内容同步，确保描述准确;
  - **Demo 同步**:
    - Demo 同步将修改的 TSX demo 内容同步到 README 内；
    - demo 标题必须是 key 所对应 strings.ts 内的中英文实际文案，不可以写 `Strings.getLang('key')`；
    - 每一个 demo 都必须要有一段描述信息

## 执行指令

当收到 `git diff` 时，请：

1. 仅针对 Diff 中涉及的行进行修改。
2. 保持 `ray-smart-ui` 现有的代码风格（如缩进、单引号等）。
3. 确保导入路径正确（如从 `@ray-js/smart-ui` 导入组件）。
