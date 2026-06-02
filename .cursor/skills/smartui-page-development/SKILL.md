---
name: smartui-page-development
description: 在 ray-smart-ui 或 SmartUI 场景下开发页面、搭建页面结构、选择组件与查阅组件文档。用于用户要求“用 SmartUI 开发页面”“搭建 IoT 面板页面”“把页面改成 SmartUI 风格”“为页面选择合适的 SmartUI 组件”时。先读取 llms.txt 中的官方文档索引，再结合仓库示例、多语言和主题约定完成实现。
---

# SmartUI 页面开发指南

## 适用场景

- 用户要求使用 SmartUI 新建、改造或补全一个页面
- 用户只给了页面需求，需要你从 SmartUI 组件中做选型
- 需要为页面补齐导航、布局、展示、录入、反馈类组件
- 需要在本仓库 `example` 中新增或修改页面示例

## 开始前

1. 先读取 `llms.txt`，把它当作 SmartUI 官方文档导航入口。
2. 再结合仓库代码确认实现位置：
   - `src/<组件名>/`：组件封装与 README
   - `example/src/pages/`：示例页面
   - `example/src/i18n/strings.ts`：example 多语言文案
3. 如果用户已经点名组件，优先查对应文档和仓库示例；如果用户只描述页面需求，先完成组件选型再编码。

## 默认工作流

1. 读取 `llms.txt`，定位本次任务涉及的组件文档、主题文档、FAQ 或最佳实践。
2. 拆解页面需求，明确页面包含哪些区域：导航、内容区、表单区、反馈区、底部操作区。
3. 优先使用 SmartUI 现有组件组合页面，不要先写自定义基础控件。
4. 在仓库里查找相近示例，优先复用已有页面结构、交互模式和命名方式。
5. 完成实现后，检查多语言、主题、交互反馈和样式覆盖方式是否符合仓库约定。

## 组件选型原则

- 布局优先看：`Layout`、`Grid`、`Sticky`、`Tab`、`DropdownMenu`
- 导航优先看：`NavBar`、`Tabbar`、`Sidebar`、`IndexBar`
- 展示优先看：`Cell`、`Tag`、`Empty`、`NoticeBar`、`Divider`、`Image`、`Icon`
- 数据录入优先看：`Field`、`Search`、`Checkbox`、`Radio`、`Switch`、`Slider`、`Stepper`、`Calendar`
- 反馈优先看：`Toast`、`Dialog`、`Popup`、`BottomSheet`、`ActionSheet`、`Picker`

如果需求可以通过多个 SmartUI 组件组合完成，优先组合现有组件；只有在 SmartUI 明确没有对应能力时，才补充少量自定义结构或样式。

## 页面实现约定

- 这是一个 Ray 风格、接近 React 写法的 TypeScript + less 项目，页面实现要保持仓库现有风格。
- 能通过 SmartUI 属性、插槽能力、主题能力完成的效果，优先不要用大量自定义样式硬改。
- 涉及全局主题、统一样式、暗黑模式或品牌色时，优先查 `llms.txt` 里的 `ConfigProvider`、主题文档和相关 Wiki。
- 涉及组件样式定制时，先看 `llms.txt` 中的“如何去自定义修改SmartUI组件的样式”。

## 本仓库特殊规则

- 修改 `example/src/pages/` 下的页面时，文案使用 `Strings.getLang('key')`，并保持和 `example/src/i18n/strings.ts` 的 key 对齐。
- 修改 `src/*/README.md` 或 `README.en.md` 中的示例时，不要写 `Strings.getLang(...)`，直接写对应语言的实际文案。
- README 里的“代码演示”要和 `example` 下的对应 demo 对齐。

## 输出要求

当你完成页面开发类任务时，最终回复中应尽量说明：

- 本次页面用了哪些 SmartUI 组件
- 你参考了 `llms.txt` 中哪类文档或最佳实践
- 哪些需求是通过 SmartUI 直接实现的，哪些是必要的少量自定义补充

## 遇到信息不足时

- 先补读 `llms.txt` 中对应组件文档
- 再查仓库内 `src/<组件名>/README.md` 与 `example/src/pages/` 的相近示例
- 如果仍然没有匹配组件，明确告诉用户 SmartUI 中暂无直接对应组件，并给出最接近的组合方案
