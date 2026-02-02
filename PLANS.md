# v2.8.0

发布计划（发布正式时间：2025.12.11 周四）

- [x] config-provider：新增 theme 属性 一键切换主题 测试版本 2.8.0-beta-0
- [x] toast: 新增 textColor、iconColor 属性 测试版本 2.8.0-beta-0
- [x] loading: 修复 color 属性效果，新增 iconColor 属性 测试版本 2.8.0-beta-0
- [x] circle：新增 angle-offset 属性，可以自定义缺口圆环角度；修改 mask-color 属性默认值为 transparent 测试版本 2.8.0-beta-0
- [x] picker: 修复 loop 模式部分列无法拖动选中的问题 测试版本 2.8.0-beta-0
- [x] datetime-picker: 修复部分情况下 1 月 无法拖动选中的问题 测试版本 2.8.0-beta-0
- [x] circle: 修复外部盒子被挤压导致圆环部分被隐藏情况 测试版本 2.8.0-beta-0
- [x] 增加 icon 组件文档复制代码能力
- [x] 修复 cascader、popover、notice-bar、switch 组件黑白主题对齐 UI 设计稿
- [x] slider 组件官网关联物料增加 CircleProgress

# v2.9.0

发布计划（发布正式时间：2025.12.23 周二）

- [x] 修复 dialog 组件未关闭，销毁页面后无法再次打开问题 测试版本 2.8.1-beta-0
- [x] bottom-sheet 组件支持 lockScroll 属性 禁止遮罩滚动 测试版本 2.8.1-beta-1
- [x] bottom-sheet 组件支持 lockMaxDrag 属性 禁止最大距离拖动 测试版本 2.8.1-beta-16
- [x] 简化 config-provider 主题文件体积 测试版本 2.8.1-beta-3
- [x] 组件 search、field、tab、tabbar、stepper、switch、toast、slider、index-bar、calendar、custom-keyboard 接入震动反馈 API 测试版本 2.8.1-beta-3
- [x] nav-bar sideWidth 默认值从 mid 调整为 max 测试版本 2.8.1-beta-11
- [x] calendar 组件 删除 --calendar-day-disabled-color，采用 opacity 实现禁用样式，修复深色模式禁用样式问题 测试版本 2.8.1-beta-13
- [x] 整理版本升级注意事项，官网透出 [跳转链接](https://developer.tuya.com/material/smartui?comId=help-changelog&tab=block)
- [x] circle 删除多余样式，防止导致圆环缺角 测试版本 2.8.1-beta-16
- [x] 修复 picker loop 模式部分列无法拖动选中的问题 测试版本 2.8.1-beta-16

# v2.10.0

发布计划（发布正式时间：2025.1.13 周二）

- [x] dialog input 支持 onInput 回调；增加 then 返回实例内取 input 值 Demo;修复调用 input 方式，value 为 undefined 无法显示输入框问题；测试版本 2.9.3-beta-0
- [x] picker 新增单位和选择列之间的间隔的设置参数 unitGap；测试版本 2.9.3-beta-1
- [x] 修复 dialog emptyDisabled 默认值为 false，并且修改提交按钮禁用逻辑 测试版本 2.9.3-beta-2
- [x] 电池组件对齐全新 UED 设计 测试版本 2.10.0-beta-0

# v2.10.1

发布计划（发布正式时间：2025.2.10 周二）

- [x] 修复 index-bar 手指触摸滚动右侧索引栏时闪烁问题 测试版本：`2.10.1-beta-0`
- [x] 新增 index-bar 右侧索引栏样式自定义能力新增 sidebarFontSize、sidebarLineHeight 属性 测试版本：`2.10.1-beta-1`
- [x] 补充文档中 switchTab 相关属性说明
- [x] 修复 Popup、ActionSheet、BottomSheet 组件内部挂载较多 children 节点导致进入页面白屏时间增加问题；从 Ray 层接入懒加载功能，减少 Popup 组件本身的默认渲染节点数量 测试版本：`2.10.1-beta-3`
- [x] 修复 tab 组件使用 important CSS 属性问题;修复 dot、info 功能显示问题 测试版本：`2.10.1-beta-5`
- [ ] 修复 Tab 初始化默认 active 不是第一个时，导致的定位动画问题

- [ ] 新增 index-bar 右侧索引栏手指拖动后放大提示功能（待定）
- [ ] popover: 修复 show 为 false 时，trigger 设置为 longpress 时还是会点击触发问题；新增受控模式（待定）
- [ ] toast 对齐 UI 标准 修改背景色，增加受控动画关闭能力（待定）
- [ ] tab 组新增等间距排布功能适配全新 UI 设计（待定）
