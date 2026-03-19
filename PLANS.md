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

发布计划（发布正式时间：2026.1.13 周二）

- [x] dialog input 支持 onInput 回调；增加 then 返回实例内取 input 值 Demo;修复调用 input 方式，value 为 undefined 无法显示输入框问题；测试版本 2.9.3-beta-0
- [x] picker 新增单位和选择列之间的间隔的设置参数 unitGap；测试版本 2.9.3-beta-1
- [x] 修复 dialog emptyDisabled 默认值为 false，并且修改提交按钮禁用逻辑 测试版本 2.9.3-beta-2
- [x] 电池组件对齐全新 UED 设计 测试版本 2.10.0-beta-0

# v2.11.0

发布计划（发布正式时间：2026.2.5 周四）

- [x] 修复 index-bar 手指触摸滚动右侧索引栏时闪烁问题 测试版本：`2.10.1-beta-0`
- [x] 新增 index-bar 右侧索引栏样式自定义能力新增 sidebarFontSize、sidebarLineHeight 属性 测试版本：`2.10.1-beta-1`
- [x] 补充文档中 switchTab 相关属性说明
- [x] 修复 Popup、ActionSheet、BottomSheet 组件内部挂载较多 children 节点导致进入页面白屏时间增加问题；从 Ray 层接入懒加载功能，减少 Popup 组件本身的默认渲染节点数量 测试版本：`2.10.1-beta-3`
- [x] 修复 tab 组件使用 important CSS 属性问题;修复 dot、info 功能显示问题 测试版本：`2.10.1-beta-5`
- [x] 修复 tab 初始化默认 active 不是第一个时，多余的定位动画问题 测试版本：`2.10.1-beta-6`

- [ ] popover: 修复 show 为 false 时，trigger 设置为 longpress 时还是会点击触发问题；新增受控模式（待定）

# v2.11.1

发布计划（发布正式时间：2026.3.3 周二）

- [x] popup、action-sheet、bottom-sheet、dialog 组件新增 fullCoverView 属性，弹框打开时默认包裹全屏的 CoverView, [pull/161](https://github.com/Tuya-Community/miniapp-smart-ui/pull/161) 测试版本：`2.11.1-beta-0`
- [x] 修复组件插槽 slot 插入非 JSX 类型时报错问题, [1904e59](https://github.com/Tuya-Community/ray-smart-ui/commit/1904e59705c9161112d33af2ddf03fdbd4ec71cb) 测试版本：`2.11.1-beta-0`

# v2.12.0

发布计划（发布正式时间：2026.3.26 周四）

- [x] tab: 修复切换时文字跳动问题([e24aff0](https://github.com/Tuya-Community/miniapp-smart-ui/pull/167/commits/e24aff0610a9432c4831235d21593e451678c50a)), 测试版本：`2.11.2-beta-0`
- [x] tabbar: 修复使用插槽插入图片，偶现切换时图片闪烁问题([93116bc](https://github.com/Tuya-Community/miniapp-smart-ui/pull/169/commits/93116bc6cd0b9d56747718e32b2ffae38acbbf5e)), 测试版本：`2.11.2-beta-2`
- [x] popup、action-sheet、bottom-sheet、dialog 组件开启 fullCoverView 时，根节点cover-view 继承组件 zIndex 属性([faff9eb](https://github.com/Tuya-Community/miniapp-smart-ui/pull/165/commits/faff9ebab1f504eed6381241c82c63c2c8dd0ff8)), 测试版本：`2.11.2-beta-3`
- [x] nav-bar: 新增 home 模式右侧插入图标能力([4175796](https://github.com/Tuya-Community/miniapp-smart-ui/pull/163/commits/417579676d3088e066abba7ccca9e7010f68ee3d)), 测试版本：`2.11.2-beta-4`
- [x] index-bar: 新增拖动气泡提示功能；修复右侧栏拖动时定位不准，页面闪现分割线问题，fixed导航闪现位移问题；([pull/166](https://github.com/Tuya-Community/miniapp-smart-ui/pull/166)), 测试版本：`2.11.2-beta-5`
- [x] toast: 修改背景色，对齐 UED，新增边框和阴影，修改默认最大最小宽度 ([pull/171](https://github.com/Tuya-Community/miniapp-smart-ui/pull/171))，测试版本: `2.12.0-beta-2`
- [x] overlay: 支持 iOS 毛玻璃效果 ([pull/171](https://github.com/Tuya-Community/miniapp-smart-ui/pull/171))，测试版本：`2.12.0-beta-2`
- [x] calendar: 修改文档 CSS --calendar-header-title-save-color 变量书写错误问题
- [x] SmartUI 原生小程序接入 ray e.origin.stopPropagation 阻止冒泡能力 ([9c6a4ae](https://github.com/Tuya-Community/miniapp-smart-ui/pull/174/commits/9c6a4ae1cd9acd6c0179f625eb9eccd8aec7f2cf))，测试版本: `2.12.0-beta-3`
- [x] dialog: 修复 cancelButtonClass 内部值拼写错误问题 ([0779e1b](https://github.com/Tuya-Community/miniapp-smart-ui/commit/0779e1b6d210f5bc57811ccff74820eecc0915e6))，测试版本：`2.12.0-beta-4`
- [x] nav-bar: 补充 leftIconColor, rightIconClass, leftTextClass TS 类型 ([33c58e5](https://github.com/Tuya-Community/ray-smart-ui/commit/33c58e572ce9ea0c1295d8705aa23f9e357e6bde))，测试版本：`2.12.0-beta-5`
- [x] field: 新增地区数字格式化能力 ([pull/162](https://github.com/Tuya-Community/miniapp-smart-ui/pull/162))，测试版本：`2.12.0-beta-5`
- [ ] popover: 修复 show 为 false 时，trigger 设置为 longpress 时还是会点击触发问题；新增受控模式（待定）
