# 更新日志

# 更新日志

## v2.12.0 (2026-3-24)

### Features ✨

- nav-bar: home 模式支持右侧插入图标([4175796](https://github.com/Tuya-Community/miniapp-smart-ui/pull/163/commits/417579676d3088e066abba7ccca9e7010f68ee3d))
- index-bar: 新增拖动气泡提示功能([pull/166](https://github.com/Tuya-Community/miniapp-smart-ui/pull/166), [pull/178](https://github.com/Tuya-Community/miniapp-smart-ui/pull/178))
- toast: 调整背景色以对齐 UED，新增边框与阴影，调整默认最大/最小宽度([pull/171](https://github.com/Tuya-Community/miniapp-smart-ui/pull/171))
- overlay: 支持 iOS 毛玻璃效果([pull/171](https://github.com/Tuya-Community/miniapp-smart-ui/pull/171))
- field: 新增地区数字格式化能力，导出 `getNumberFormatConfig`、`parseFormattedNumber`、`formatNumber`([pull/162](https://github.com/Tuya-Community/miniapp-smart-ui/pull/162))
- config-provider: 新增 toast、overlay 相关全局 CSS 变量适配([572effd](https://github.com/Tuya-Community/miniapp-smart-ui/pull/176/commits/572effdee81ed77ea0699e0bb44fab40255e81ad))
- SmartUI 原生小程序接入 Ray 事件 `e.origin.stopPropagation` 阻止冒泡能力([9c6a4ae](https://github.com/Tuya-Community/miniapp-smart-ui/pull/174/commits/9c6a4ae1cd9acd6c0179f625eb9eccd8aec7f2cf))

### Bug Fixes 🐛

- tab: 修复切换时文字跳动问题([e24aff0](https://github.com/Tuya-Community/miniapp-smart-ui/pull/167/commits/e24aff0610a9432c4831235d21593e451678c50a))
- tabbar: 修复使用插槽插入图片时，偶现切换图片闪烁问题([93116bc](https://github.com/Tuya-Community/miniapp-smart-ui/pull/169/commits/93116bc6cd0b9d56747718e32b2ffae38acbbf5e))
- popup、action-sheet、bottom-sheet、dialog: 开启 `fullCoverView` 时，根节点 cover-view 继承组件 `zIndex` 属性([faff9eb](https://github.com/Tuya-Community/miniapp-smart-ui/pull/165/commits/faff9ebab1f504eed6381241c82c63c2c8dd0ff8))
- index-bar: 修复右侧栏拖动时定位不准、页面闪现分割线、fixed 导航闪现位移、右侧列表与内容不一致时定位错误等问题([pull/166](https://github.com/Tuya-Community/miniapp-smart-ui/pull/166), [pull/178](https://github.com/Tuya-Community/miniapp-smart-ui/pull/178))
- calendar: 修复文档中 `--calendar-header-title-save-color` CSS 变量书写错误
- dialog: 修复 `cancelButtonClass` 内部值拼写错误([0779e1b](https://github.com/Tuya-Community/miniapp-smart-ui/commit/0779e1b6d210f5bc57811ccff74820eecc0915e6))
- nav-bar: 补充 `leftIconColor`、`rightIconClass`、`leftTextClass` TypeScript 类型([33c58e5](https://github.com/Tuya-Community/ray-smart-ui/commit/33c58e572ce9ea0c1295d8705aa23f9e357e6bde))

## v2.11.1 (2026-3-3)

### Features ✨

- popup：新增 fullCoverView 属性，弹框打开时默认包裹全屏的 CoverView([pull/161](https://github.com/Tuya-Community/miniapp-smart-ui/pull/161))
- action-sheet：新增 fullCoverView 属性，弹框打开时默认包裹全屏的 CoverView([pull/161](https://github.com/Tuya-Community/miniapp-smart-ui/pull/161))
- bottom-sheet：新增 fullCoverView 属性，弹框打开时默认包裹全屏的 CoverView([pull/161](https://github.com/Tuya-Community/miniapp-smart-ui/pull/161))
- dialog: 新增 fullCoverView 属性，弹框打开时默认包裹全屏的 CoverView([pull/161](https://github.com/Tuya-Community/miniapp-smart-ui/pull/161))

### Bug Fixes 🐛

- 修复组件插槽 slot 插入非 JSX 类型时报错问题([1904e59](https://github.com/Tuya-Community/ray-smart-ui/commit/1904e59705c9161112d33af2ddf03fdbd4ec71cb))

## v2.11.0 (2026-2-5)

### Features ✨

- index-bar: 新增右侧索引栏样式自定义能力，新增 sidebarFontSize、sidebarLineHeight 属性([pull/150](https://github.com/Tuya-Community/miniapp-smart-ui/pull/150))

### Bug Fixes 🐛

- index-bar: 修复手指触摸滚动右侧索引栏时闪烁问题([90e290b](https://github.com/Tuya-Community/miniapp-smart-ui/pull/149/commits/90e290b1c807579b83bfdc2e1b460dc39c72bb1d))
- popup: 减少组件本身的默认渲染节点数量([fb6ab2f](https://github.com/Tuya-Community/miniapp-smart-ui/pull/151/commits/fb6ab2fddbe30694deb350bfdde60d7c5f35f48c));Ray 层接入懒加载，在弹框没有 show 过一次之前不渲染子节点，提升性能([96fc5fc](https://github.com/Tuya-Community/ray-smart-ui/pull/72/commits/96fc5fc1d644fb381983e535f87473e20e82500d))
- action-sheet: 减少组件本身的默认渲染节点数量([fb6ab2f](https://github.com/Tuya-Community/miniapp-smart-ui/pull/151/commits/fb6ab2fddbe30694deb350bfdde60d7c5f35f48c));Ray 层接入懒加载，在弹框没有 show 过一次之前不渲染子节点，提升性能([fb6ab2f](https://github.com/Tuya-Community/ray-smart-ui/pull/73/commits/ac0e65c472429c80b66f15ca8326ddfc2cce5049))
- bottom-sheet: 减少组件本身的默认渲染节点数量([fb6ab2f](https://github.com/Tuya-Community/miniapp-smart-ui/pull/151/commits/fb6ab2fddbe30694deb350bfdde60d7c5f35f48c));Ray 层接入懒加载，在弹框没有 show 过一次之前不渲染子节点，提升性能([fb6ab2f](https://github.com/Tuya-Community/ray-smart-ui/pull/73/commits/ac0e65c472429c80b66f15ca8326ddfc2cce5049))
- tab: 修复组件使用 important CSS 属性问题;修复 dot、info 功能显示问题([5de790d](https://github.com/Tuya-Community/miniapp-smart-ui/pull/158/commits/5de790da25e9a3867a0ddc10ce273b4b9fc4e5ef));修复初始化默认 active 不是第一个时，多余的定位动画问题([6649819](https://github.com/Tuya-Community/miniapp-smart-ui/pull/159/commits/66498199ecd0873de387fe8e826b9ffacf02ffb8))

## v2.10.0 (2026-1-13)

### Features ✨

- dialog: 新增 onInput 回调事件；修复调用 input 方式，value 为 undefined 无法显示输入框问题([pull/143](https://github.com/Tuya-Community/miniapp-smart-ui/pull/143))
- picker: 新增 unitGap 属性，用于设置单位和选择列之间的间隔([pull/144](https://github.com/Tuya-Community/miniapp-smart-ui/pull/144))
- battery: 对齐全新 UED 设计，重构样式布局，size 默认值修改为 24([pull/134](https://github.com/Tuya-Community/miniapp-smart-ui/pull/134), [pull/147](https://github.com/Tuya-Community/miniapp-smart-ui/pull/147))

### Bug Fixes 🐛

- dialog: 修复 emptyDisabled 默认值为 false，并且修改提交按钮禁用逻辑([5c88532](https://github.com/Tuya-Community/miniapp-smart-ui/pull/146/commits/5c885324f3f9e3c691f4d840e8fc4120a2088301))

## v2.9.2 (2025-12-31)

### Bug Fixes 🐛

- 修复 nativeDisabled 属性安卓失效问题([66adfce](https://github.com/Tuya-Community/miniapp-smart-ui/commit/66adfceebeb9d235c0299e4b5718dec6488e73e7))

## v2.9.1 (2025-12-30)

### Features ✨

- calendar: 新增 firstDayOfSelectWeek 属性，支持设置每周起始日期([pull/136](https://github.com/Tuya-Community/miniapp-smart-ui/pull/136))

### Bug Fixes 🐛

- calendar: 修复海外部分地区选择日期跳变问题([pull/63](https://github.com/Tuya-Community/ray-smart-ui/pull/63))

## v2.9.0 (2025-12-23)

### Features ✨

- bottom-sheet: 新增 lockScroll 属性禁止遮罩滚动([7eeec64](https://github.com/Tuya-Community/miniapp-smart-ui/pull/131/commits/7eeec64c305d0edfd413a3c34db4e3583a03b19c))；新增 lockMaxDrag 属性 禁止最大距离拖动([pull/128](https://github.com/Tuya-Community/miniapp-smart-ui/pull/128), [pull/129](https://github.com/Tuya-Community/miniapp-smart-ui/pull/129))
- search: IOS 接入震动反馈([pull/112](https://github.com/Tuya-Community/miniapp-smart-ui/pull/112))
- field: IOS 接入震动反馈([pull/112](https://github.com/Tuya-Community/miniapp-smart-ui/pull/112))
- tab: IOS 接入震动反馈([pull/112](https://github.com/Tuya-Community/miniapp-smart-ui/pull/112))
- tabbar: IOS 接入震动反馈([pull/112](https://github.com/Tuya-Community/miniapp-smart-ui/pull/112))
- stepper: IOS 接入震动反馈([pull/112](https://github.com/Tuya-Community/miniapp-smart-ui/pull/112))
- switch: IOS 接入震动反馈([pull/112](https://github.com/Tuya-Community/miniapp-smart-ui/pull/112))
- toast: IOS 接入震动反馈([pull/112](https://github.com/Tuya-Community/miniapp-smart-ui/pull/112))
- slider: IOS 接入震动反馈([7fb416f](https://github.com/Tuya-Community/miniapp-smart-ui/pull/124/commits/7fb416fd10fc267920509b45e27ad9c10841f003))
- index-bar: IOS 接入震动反馈([pull/110](https://github.com/Tuya-Community/miniapp-smart-ui/pull/110))
- calendar: IOS 接入震动反馈([pull/109](https://github.com/Tuya-Community/miniapp-smart-ui/pull/109))
- custom-keyboard: IOS 接入震动反馈([pull/111](https://github.com/Tuya-Community/miniapp-smart-ui/pull/111))

### Bug Fixes 🐛

- dialog: 修复组件未关闭，销毁页面后无法再次打开问题([b4f7472](https://github.com/Tuya-Community/miniapp-smart-ui/pull/131/commits/b4f74729ff5964597be13aa0b3e1f70a59d91b48))
- config-provider: 缩小主题文件体积([3d55091](https://github.com/Tuya-Community/miniapp-smart-ui/pull/131/commits/3d5509187dd3830449127b68718bdd95243c13cd))
- circle: 删除多余样式，防止导致圆环缺角([c4ae523](https://github.com/Tuya-Community/miniapp-smart-ui/pull/114/commits/c4ae5231522e85d09301bc24801066c6857b60b7))
- picker: 修复 loop 模式部分列无法拖动选中的问题([bed9b37](https://github.com/Tuya-Community/miniapp-smart-ui/pull/113/commits/bed9b37f9fc5a885c031de24c6c5c6f526d72fd9))
- nav-bar: 对齐涂鸦 UI 标准，sideWidth 默认值从 mid 调整为 max([64281c8](https://github.com/Tuya-Community/miniapp-smart-ui/pull/125/commits/64281c830cde83b908320085014f394058b257c1))
- calendar: 对齐涂鸦 UI 标准，删除 --calendar-day-disabled-color，采用 opacity 实现禁用样式，修复深色模式禁用样式问题([pull/126](https://github.com/Tuya-Community/miniapp-smart-ui/pull/126))
- slider: 修复 parcel 类型时按钮边框间距问题，修复 onChange 回调中 min max 不准确问题，修复按钮隐藏时初始状态异常问题([7fb416f](https://github.com/Tuya-Community/miniapp-smart-ui/pull/124/commits/7fb416fd10fc267920509b45e27ad9c10841f003))

## v2.8.0 (2025-12-11)

### Features ✨

- config-provider：新增 theme 属性 一键切换主题([pull/100](https://github.com/Tuya-Community/miniapp-smart-ui/pull/100))
- toast: 新增 textColor、iconColor 属性([pull/105](https://github.com/Tuya-Community/miniapp-smart-ui/pull/105))
- loading: 新增 iconColor 属性([pull/104](https://github.com/Tuya-Community/miniapp-smart-ui/pull/104))
- circle: 新增 angleOffset 属性，用于设置半圆类型（`angle`、`angle2`）的起始角度偏移；修改 maskColor 默认值从 `#ffffff` 为 `transparent`([pull/106](https://github.com/Tuya-Community/miniapp-smart-ui/pull/106))
- cascader: 新增 --cascader-active-background-color CSS 变量([43922ab](https://github.com/Tuya-Community/miniapp-smart-ui/commit/43922abceaedf1af448147e189517598151dd0a9))
- popover: 新增 --popover-overlay-color CSS 变量([43922ab](https://github.com/Tuya-Community/miniapp-smart-ui/commit/43922abceaedf1af448147e189517598151dd0a9))

### Bug Fixes 🐛

- loading: 修复 color 属性效果([pull/104](https://github.com/Tuya-Community/miniapp-smart-ui/pull/104))
- picker: 修复 loop 模式部分列无法拖动选中的问题([pull/113](https://github.com/Tuya-Community/miniapp-smart-ui/pull/113))
- datetime-picker: 修复部分情况下 1 月 无法拖动选中的问题([pull/113](https://github.com/Tuya-Community/miniapp-smart-ui/pull/113))
- circle: 修复外部盒子被挤压导致圆环部分被隐藏情况([pull/115](https://github.com/Tuya-Community/miniapp-smart-ui/pull/115))
- notice-bar: 修改 --notice-bar-text-color CSS 变量默认值为 rgba(0, 0, 0, 0.5) ([43922ab](https://github.com/Tuya-Community/miniapp-smart-ui/commit/43922abceaedf1af448147e189517598151dd0a9))
- switch: 修改 --switch-label-active-color、--switch-label-inactive-color CSS 变量默认值为 #FFFFFF ([43922ab](https://github.com/Tuya-Community/miniapp-smart-ui/commit/43922abceaedf1af448147e189517598151dd0a9))

## v2.7.3 (2025-11-20)

### Features ✨

- nav-bar: 对其全新 UI 标准，新增 sideWidth 属性；新增--nav-bar-side-width-min、--nav-bar-side-width-max CSS 变量，调整 --nav-bar-side-width、--nav-bar-text-font-size、--nav-bar-text-font-weight CSS 变量默认值([pull/96](https://github.com/Tuya-Community/miniapp-smart-ui/pull/96))

### Bug Fixes 🐛

- stepper: 修复小数情况输入框输入实时更新问题([e9cf7a9](https://github.com/Tuya-Community/miniapp-smart-ui/pull/97/commits/e9cf7a9edb6ea2fc93e3a38be54bdb03fd4e0294))

## v2.7.2(2025-11-13)

### Features ✨

- stepper: 接入 `manrope` 数字字体，App 7.0.5 版本开始支持([a9ac2ab](https://github.com/Tuya-Community/miniapp-smart-ui/pull/77/commits/a9ac2ab42943c837cda5dba3ddff02d56b00f025))
- count-down: 接入 `manrope` 数字字体，App 7.0.5 版本开始支持([a9ac2ab](https://github.com/Tuya-Community/miniapp-smart-ui/pull/77/commits/a9ac2ab42943c837cda5dba3ddff02d56b00f025))
- picker: 接入 `manrope` 数字字体，App 7.0.5 版本开始支持([a9ac2ab](https://github.com/Tuya-Community/miniapp-smart-ui/pull/77/commits/a9ac2ab42943c837cda5dba3ddff02d56b00f025))
- datetime-picker: 接入 `manrope` 数字字体，App 7.0.5 版本开始支持([a9ac2ab](https://github.com/Tuya-Community/miniapp-smart-ui/pull/77/commits/a9ac2ab42943c837cda5dba3ddff02d56b00f025))
- calendar: 接入 `manrope` 数字字体，App 7.0.5 版本开始支持([pull/79](https://github.com/Tuya-Community/miniapp-smart-ui/pull/79))
- custom-keyboard: 接入 `manrope` 数字字体，App 7.0.5 版本开始支持([e8f763d](https://github.com/Tuya-Community/miniapp-smart-ui/pull/77/commits/e8f763d526f635d702a87586535f8b4a854100b1))
- bottom-sheet: 支持拖拽能力, 新增 draggable、minDragHeight、maxDragHeight、midDragHeight、closeDragHeight 属性，新增 onDragPosition 事件([pull/78](https://github.com/Tuya-Community/miniapp-smart-ui/pull/78))
- nav-bar: 修改 --nav-bar-text-padding 默认值 为 16px([352954e](https://github.com/Tuya-Community/miniapp-smart-ui/commit/352954e16f05b0660369bfc860b7f895dc5f1774))
- icon: 新增静音图标、更新更多图标([1ba2ebf](https://github.com/Tuya-Community/miniapp-smart-ui/pull/77/commits/1ba2ebfc12e6af675940c01f2e229eed05cec4ff))

### Bug Fixes 🐛

- icon: 兼容鸿蒙图标显示([bc7310a](https://github.com/Tuya-Community/miniapp-smart-ui/pull/77/commits/bc7310a99c1bfa4dc5e90a7dad5fb338b0aff465))
- circle: 修复在 flex 布局下初始化宽度 100% 问题([8083de9](https://github.com/Tuya-Community/miniapp-smart-ui/pull/77/commits/8083de941d12b9e3158c170841079e76cbf3ecf3))
- stepper: 修复自动换行问题、无法输入小数问题、步长格式化不计入 min 问题，新增判断字符串逻辑([4054898](https://github.com/Tuya-Community/miniapp-smart-ui/pull/77/commits/405489889906c8424b76daceaf392c59cd24bf01))
- loading: 修复鸿蒙兼容问题([894d59d](https://github.com/Tuya-Community/miniapp-smart-ui/pull/77/commits/894d59d53f4ba1f5061febdcc61944da0d8e3f1a))
- picker: 修复单列时 onChange 事件返回格式问题问题([9800e64](https://github.com/Tuya-Community/miniapp-smart-ui/pull/77/commits/9800e649576136eb102cc61c5192e6a6ffd57ea3))
- slider: 修复 min 不为 0 时，拖动问题([f85fae8](https://github.com/Tuya-Community/miniapp-smart-ui/pull/77/commits/f85fae880c278ca89126e0555eca15497b7abf66))

## v2.7.1(2025-10-28)

### Bug Fixes 🐛

- field: 修复开启 extraEventParams 事件增强模式后， inputDetail 内的 callback 修改输入框的值无效问题([7fcb0c1](https://github.com/Tuya-Community/miniapp-smart-ui/pull/71/commits/7fcb0c18038f27aa2006e5a9102652eb817046ac))
- tabbar: 修复 border 属性 配置不生效问题([a8d90a5](https://github.com/Tuya-Community/miniapp-smart-ui/pull/59/commits/a8d90a56832a8254ccfb3763352489a300a3abbb))
- tab: 修复切换时底部滑动条动画和文字变色动画不一致问题([4becc32](https://github.com/Tuya-Community/miniapp-smart-ui/pull/60/commits/4becc32e4ecb2032b794301229097fce45e95205))
- dialog: 修改 roundButton 模式按钮样式，修复此模式存在取消按钮时的样式问题，修改 CSS 变量 --dialog--round-button-border-radius 的值 ([pull/69](https://github.com/Tuya-Community/miniapp-smart-ui/pull/69))
- picker: 修复 loop 模式 滚动值切换时，修改列表后滚动报错问题；修复 active 状态实时更新问题([pull/65](https://github.com/Tuya-Community/miniapp-smart-ui/pull/65))
- circle: 修复组件内部左右多余空隙问题([fbae95e](https://github.com/Tuya-Community/miniapp-smart-ui/pull/70/commits/fbae95ebbc80836cbacd9a0da7a84ec909498cab))
- nav-bar: 修复 onClickRight 事件不生效问题([d0e1f9f](https://github.com/Tuya-Community/miniapp-smart-ui/pull/62/commits/d0e1f9f9b1a7028517a334299b03a07fe5cf206f))
- popup: 调整组建默认 safeAreaInsetBottom 为 false([c3c79f2](https://github.com/Tuya-Community/miniapp-smart-ui/pull/61/commits/c3c79f2f0efef6595649b426fb5221cb6df83da9))；修复 --popup-background-color 无法设置渐变色问题([37a938a](https://github.com/Tuya-Community/miniapp-smart-ui/pull/68/commits/37a938a0780fe64d24a4e8c20810b1e1434e4ee6))

## v2.7.0(2025-10-21)

### Features ✨

- picker: 重构实现原理，增加 3D 视觉效果，新增 loop 循环滚动 和 fullHeight 属性，优化性能([pull/48](https://github.com/Tuya-Community/miniapp-smart-ui/pull/48))
- datetime-picker: 新增循环滚动能力([pull/48](https://github.com/Tuya-Community/miniapp-smart-ui/pull/48))
- nav-bar: 样式优化，新增 rightTextColor、rightIconColor、rightIconSize、leftIconColor、background、rightIconClass、leftTextClass 属性；新增 onClickRightIcon、onClickRightText 事件；新增和修改 --nav-bar-side-width、--nav-bar-text-padding、--nav-bar-icon-padding、--nav-bar-title-margin、--nav-bar-home-max-width、--nav-bar-left-title-padding、--nav-bar-title-max-width CSS 变量；删除--nav-bar-icon-size、--nav-bar-icon-margin CSS 变量；修改 border 属性默认为 false([pull/38](https://github.com/Tuya-Community/miniapp-smart-ui/pull/38))
- swipe-cell: 新增 onTabClose 事件 ([03483f1](https://github.com/Tuya-Community/miniapp-smart-ui/pull/50/commits/03483f198d6503f4f4b760891bc4e598773e337f))
- switch: 新增 activeText、inactiveText 属性；新增--switch-label-font-size、--switch-label-active-color、--switch-label-inactive-color、--switch-label-width CSS 变量([pull/47](https://github.com/Tuya-Community/miniapp-smart-ui/pull/47))
- dialog: 新增 emptyDisabled 属性，input 模式下 输入内容为空时禁用提交([9dbb29c](https://github.com/Tuya-Community/miniapp-smart-ui/pull/50/commits/9dbb29ca129202bac7622264a1d7f684d5da89ba))

### Bug Fixes 🐛

- image: 修改 showLoading 默认值为 false([6090b97](https://github.com/Tuya-Community/miniapp-smart-ui/pull/50/commits/6090b97baea6f1c75bf7be184a5ae8fcc33afa9b))
- loading: 修复 CSS 变量 --loading-spinner-color 无效问题([pull/47](https://github.com/Tuya-Community/miniapp-smart-ui/pull/47))
- popover: 修复连续点击无法弹出问题([pull/47](https://github.com/Tuya-Community/miniapp-smart-ui/pull/47))
- stepper: 修复键盘主动输入时，内部值不与 step 成比例问题([10e5753](https://github.com/Tuya-Community/miniapp-smart-ui/pull/50/commits/10e5753c8a5fe0ecfe0f463d3d6ab760b95aca67))
- switch: 修复内部垂直居中问题([a622a42](https://github.com/Tuya-Community/miniapp-smart-ui/pull/50/commits/a622a42504ae33022b91463ecbb93b1f218999df))
- tab: 修复 color 属性 在 card 模式下的问题([pull/42](https://github.com/Tuya-Community/miniapp-smart-ui/pull/42))
- notice-bar: 修复 onBtnClick 事件点击问题([4250d39](https://github.com/Tuya-Community/miniapp-smart-ui/pull/50/commits/4250d39ec89198f115803acaaf82266553bc9f9c))
- popup: 默认底部安全距离关闭([3da77ee](https://github.com/Tuya-Community/miniapp-smart-ui/pull/54/commits/3da77eecbc51b014fd06b4871d054ddda9d2a1c7))
- calendar: 默认底部安全距离关闭([4c91851](https://github.com/Tuya-Community/miniapp-smart-ui/pull/54/commits/4c91851fe674bcb64a19c830a3f1539da8700dd1))
- picker: 修复在 flex 布局下默认没有宽度的问题([f3f4772](https://github.com/Tuya-Community/miniapp-smart-ui/pull/55/commits/f3f47729fd4c1af0eb617cf56d957c2b389f2d4e));修复单位距离不受 fontStyle 属性控制问题([4eb02fc](https://github.com/Tuya-Community/miniapp-smart-ui/pull/55/commits/4eb02fca12cb6feab62e8fdfd7d82d27bc52159c))
- datetime-picker: 修复在 flex 布局下默认没有宽度的问题([f3f4772](https://github.com/Tuya-Community/miniapp-smart-ui/pull/55/commits/f3f47729fd4c1af0eb617cf56d957c2b389f2d4e))
- icon: 更新 right、left、down、up 图标,对齐 UI 标准([e1bd07e](https://github.com/Tuya-Community/miniapp-smart-ui/commit/e1bd07ebb2bd411fe82e714b11e603ed68271c9a))

## v2.6.3(2025-09-16)

### Features ✨

- dialog: 新增 autoClose 属性，修复组件自动关闭问题([36ba91e](https://github.com/Tuya-Community/miniapp-smart-ui/pull/37/commits/36ba91ee495b632aae9ede192364a65d8d999a75));
- icon 支持自定义图标，新增 iconColor 和 iconSize 属性([11328c5](https://github.com/Tuya-Community/miniapp-smart-ui/pull/37/commits/11328c50d0001f7ca40429c21c27ec796d02455d));

### Bug Fixes 🐛

- action-sheet: 修复 subname 无法撑开盒子高度问题([4df8c64](https://github.com/Tuya-Community/miniapp-smart-ui/pull/37/commits/4df8c64a0412a2c64bd706b72dd6f4f66e46e2d5));
- icon: 修复 click 事件丢失 event 参数问题([bad5231](https://github.com/Tuya-Community/miniapp-smart-ui/pull/37/commits/bad523192b1e3d02d37f267ec2c7c080115cfdd8));
- field: 修复 textarea 模式 autosize 设置最大高度滚动问题([40fe4bc](https://github.com/Tuya-Community/miniapp-smart-ui/pull/37/commits/40fe4bc1727523fa427c904c4e29d5ff7da032fb));
- cell: 修复 cell-group 下 最后一个 cell 的分割线未隐藏问题([bea6309](https://github.com/Tuya-Community/miniapp-smart-ui/pull/37/commits/bea6309bdcec3d5495c91f9ed1cc325319523320));

## v2.6.2(2025-08-28)

### Features ✨

- battery: 新增 color 属性可以直接修改颜色([ff99655](https://github.com/Tuya-Community/miniapp-smart-ui/pull/28/commits/ff996558becf5ebe24b711904bc1ae9e0faecedc));
- cell: 新增 insetBorderRadius 属性([09c60be](https://github.com/Tuya-Community/miniapp-smart-ui/pull/29/commits/09c60bef61e8f353bcab90728c2ca509aaf0b94f))

### Bug Fixes 🐛

- picker: 修复单位对齐问题([fc12155](https://github.com/Tuya-Community/miniapp-smart-ui/pull/28/commits/fc12155f3883d0147cb328c2123442f147fef330));
- calendar: 修复 CSS 变量 --calendar-day-height、--calendar-selected-day-size 不生效问题([a08cebe](https://github.com/Tuya-Community/miniapp-smart-ui/pull/31/commits/a08cebe8ff8a62c8d544214cfbd5c05b3cce8347), [bfebfa3](https://github.com/Tuya-Community/miniapp-smart-ui/pull/31/commits/bfebfa3a26ec28e9a4a485f9ea1fd73189ed0624))
- button: 修复 hoverClass 参数类型缺失问题([2789e24](https://github.com/Tuya-Community/ray-smart-ui/pull/18/commits/2789e2494985a10aeb6a440eba07306c07f54ee9))
- 修改 @tuya-miniapp/icons 资源引入方式([d4921f1](https://github.com/Tuya-Community/miniapp-smart-ui/pull/28/commits/d4921f1763211cb631bcd11a51f8ac0296691b77))

## v2.6.1(2025-08-12)

### Features ✨

- bottom-sheet: 新增 showClose 属性 和 title 插槽([fef37bf](https://github.com/Tuya-Community/miniapp-smart-ui/pull/16/commits/fef37bf51650810a486ca1e0863ffd421d4711f9))

### Bug Fixes 🐛

- nav-bar: 修复 leftTextType 为 home 或者 title 时，文案超长不省略问题([97f91f5](https://github.com/Tuya-Community/miniapp-smart-ui/pull/16/commits/97f91f5869860d4cbf8994e11f5a0cffa8ac987e))
- picker: 修复单位换行问题([b8075bd](https://github.com/Tuya-Community/miniapp-smart-ui/pull/16/commits/b8075bd2b48b369db549554bd80c23e5305e9426))
- stepper: 修复组件到达 max 或者 min 时，禁用样式不生效问题([58ce5af](https://github.com/Tuya-Community/miniapp-smart-ui/pull/16/commits/58ce5af24c715c9534026fd07121426973578dce))；修改--stepper-button-disabled-color 默认值为 _var(--app-B6, #ffffff)_ ([e0e55fa](https://github.com/Tuya-Community/miniapp-smart-ui/pull/16/commits/e0e55fa18f517fafc603a6b9c3035276d6ccaa16))；修复设置 min 或 decimalLength 导致输入框无法删除问题([7cf1cfe](https://github.com/Tuya-Community/miniapp-smart-ui/pull/16/commits/7cf1cfe9d0e7ac77db1007d902960b83dde45d9e))
- image: 修复组件上下多余空隙问题([a42f0ad](https://github.com/Tuya-Community/miniapp-smart-ui/pull/16/commits/a42f0ad7e964b0d63de2b5e1dde7aed2efd99b17))

## v2.6.0(2025-07-31)

### Features ✨

- nav-bar: 新增 --nav-bar-title-max-width CSS 变量，调整默认值从 `60%` 为 `calc(100% - 360rpx)`([af0d83a](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/af0d83ac571e70d9d7b5f934287866c9e37e7f6c))
- bottom-sheet: 新增 max-height 属性([0ed0ea9](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/0ed0ea9d1f32342f8e87a29c6b5927da4026d3fc))
- datetime-picker: 重构组件 12 小时制 时展示逻辑，修复时间展示错误问题([019d181](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/019d1813a18c89af733c43526dbe690e69568f75), [822df05](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/822df0555738199533bbaa44073fda93aefbe01b));修改组件分割线 新增 --hairline-border-image-color CSS 变量([6381e6f](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/6381e6ffdf61ae21a1ff3943c69a543ecbc1e03c))
- picker: 新增 --picker-option-selected-font-weight-bold CSS 变量([7b38c33](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/7b38c33437f96f57757cc6c9e014938cd4ba6671));新增 hairline-class 分割线样式类([55ed888](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/55ed8885045f34c95b8076c985b64350f0b43c13))
- action-sheet: 新增 useTitleSlot 属性， title 插槽，支持自定义双列选择器功能，调整组件分割线以及边距，安全距离样式([8eea246](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/8eea24657985252ef9dfc023fa9ba4eb33feefda));
- calendar: 调整样式，新增 headerIconColor 属性，--calendar-header-icon-bg-color、--calendar-header-icon-color、--calendar-header-title-weight CSS 变量([944b728](https://github.com/Tuya-Community/miniapp-smart-ui/pull/9/commits/944b7281a04c150539ed5da6537db649fe40808c), [0907238](https://github.com/Tuya-Community/miniapp-smart-ui/pull/9/commits/0907238bce8863ae58435ac6767e5eda3c464bb0), [52989f4](https://github.com/Tuya-Community/miniapp-smart-ui/pull/9/commits/52989f4800a28ef354dc3cee14ac2300fc344ffe))
- toast: 调整样式，新增 --toast-min-width CSS 变量，弃用 --toast-text-min-width CSS 变量([13a4f93](https://github.com/Tuya-Community/miniapp-smart-ui/pull/9/commits/13a4f93e4bf9f2fb3dfb17e64f85d82430d22706), [f99c3a3](https://github.com/Tuya-Community/miniapp-smart-ui/pull/9/commits/f99c3a30b5d78f655513756ce494b1ec6e259a1f))

### Bug Fixes 🐛

- bottom-sheet: 修复设置 contentHeight 属性后组件意外滚动问题([175f145](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/175f1455b55ff6018f1586f3ea613ecba230ac3f))
- cascader: 修复 组件 option 列表滚动问题([1ff96ed](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/1ff96ed1ca4d45f3a9a63a90e6239d8ddec76ff6))
- dialog: 修复垂直居中问题([b591451](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/b591451e8a9b9c842ed721f454f20a190188666b));修改弹框背景颜色([eae43fb](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/eae43fb54a23fa669636e166b149cd9f393fb8ef))
- icon: 修复 info 信息位置问题，调整样式([d556d4d](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/d556d4d648594c73d575aadae3ac859b546fbe05), [1fcd058](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/1fcd05883ef7ea69e533a9bef9a6a26ebfa5e603))
- stepper: 调整加减符合大小([2d37826](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/2d37826977b0977b369b4b5bb7f549f263e10134))
- overlay: 调整样式([319761a](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/319761a88793c178d3f6c0089adb4a6079df29ec))
- picker: 修改 animationTime 默认值为 300([302919a](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/302919ab414ac70cc2174541c97127bc8e2f5bdc), [f7a4f28](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/f7a4f28b60d31afc7b699100f7cc1e992f621319), [afe87f2](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/afe87f262a69d6733c8ee7eb38cf129220ae333f));修复单位间距受外部盒子挤压问题，并修改 --picker-option-unit-mid-size 默认值为 4px ([1619172](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/16191721222fe7658d87b0eaf0d8c28d5ecc29a6), [d82a6cf](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/d82a6cff525d26f9094046be27874a0a80f883de));修复列表错乱以及部分动画时间不受 animationTime 控制问题([af64c11](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/af64c1182055c9a264cd71058a1c708f93801e73))
- datetime-picker: 修复长时间频繁拖拽后一直跳闪停不下来的问题([3f3578c](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/3f3578cc215aef657c02feba2c4f214595db7e49));修复组件初始化列表抖动问题([e1fe931](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/e1fe9313bf5a56841d52db6c62009f6025968194), [c233ac4](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/c233ac47a288d8a648da0db6021ac4929523c1e3));
- circle: 修复 round 属性不生效问题([e862099](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/e8620991d6ad255f461740974db11af99d58a767))
- tab: 修改选择中值类型为 string([e22f999](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/e22f999e6c54a0572f6080cd7744ba1afadc6b6c))

## v2.5.1(2025-07-17)

### Features ✨

- dialog: 新增 --dialog-confirm-font-weight、--dialog-cancel-font-weight CSS 变量
- nav-bar: 新增 --nav-bar-right-text-color CSS 变量
- tabbar: 新增 upsideDown 属性 实现文案和图标上下颠倒

### Bug Fixes 🐛

- config-provider: 修复组件缺失的 dialog CSS 变量类型
- datetime-picker: 修复 onInput 回调类型错误问题

## v2.5.0(2025-06-26)

### Features ✨

- action-sheet: 新增 nativeDisabled 属性
- bottom-sheet: 新增 nativeDisabled、contentHeight 属性；新增 CSS 变量 --bottom-sheet-header-padding
- toast: 新增 nativeDisabled 属性
- calendar: 新增 CSS 变量 --calendar-popup-height；支持 custom-class 属性
- dropdown-menu: 新增 scrollStyle 属性，增加下拉列表超出屏幕后滚动能力
- popover: 新增 trigger 属性
- skeleton: 优化动画效果
- switch: 改动组件布局， `active-color` 和 `inactive-color` 支持传入渐变色，删除 `--switch-border` CSS 变量属性，用新增的 `--switch-padding` CSS 变量替代

### Bug Fixes 🐛

- bottom-sheet: 修复内容触发最大高度后无法滚动问题；修复内容绝对定位底部时无法包含底部安全距离问题；修复 round 模式 边框圆角问题
- circle: 修复 mode="angle2" 时 percent 定位异常问题
- dialog: 修复 round-button 模式残留分割线样式问题
- popup: 修复 round 模式 边框圆角问题
- toast: 修复 icon 模式 文字居中问题；以及纯文本时 text 无 class 问题

## v2.4.0(2025-06-10)

### Features ✨

- 新增动态引入插件 SmartUIAutoImport 修改导出目录结构，配合 ray cli 实现按需引入组件资源
- picker: 新增 --picker-option-unit-mid-size CSS 变量
- slider: 支持 thumb、bar 插槽
- switch: 新增 --switch-node-on-background-color CSS 变量

### Bug Fixes 🐛

- circle：修复 customStyle 属性无效、优化绘制模糊问题
- toast: 修复宽度自定义无法撑开问题
- empty: 修复 imageStyle、titleStyle、 descriptionStyle 属性类型提示错误问题
- notice-bar: 修复 customStyle、rightIconStyle、leftIconStyle 属性类型提示错误问题

## v2.3.9(2025-05-15)

### Features ✨

- circle: 重构逻辑，采用 rjs 重写(不再支持微信)
- calendar: 新增 maxRange、rangePrompt、showRangePrompt、allowSameDay 属性

### Bug Fixes 🐛

- circle: 修复模糊问题
- nav-bar: 修复高度机型适配问题，默认取 css 变量 --app-device-navbar-height
- picker: 修复开始动画卡顿问题，默认初始化动画 changeAnimation 为 false，修复控制台 disabled 报错提示

## v2.3.8(2025-05-06)

### Features ✨

- popup: 新增 nativeDisabled 属性，开启弹框期间是否禁用本地手势
- dialog: 新增 nativeDisabled 属性，开启弹框期间是否禁用本地手势
- radio: 新增 preventDefault 属性，可以阻止组件内部默认的 UI 更新
- datetime-picker: 新增 12 小时模式时修改时区文案样式能力；新增 onChange 回调内的 value 数据

### Bug Fixes 🐛

- field: 修复 errorMessage 过长时换行的样式
- picker: 修复无 disabled 样式问题
- datetime-picker: 修复小时是 0 或 24 时，和最大最小限制值冲突显示错误问题

## v2.3.7(2025-04-15)

### Features ✨

- switch: 对齐组件 UI 设计稿，调整尺寸样式
- datetime-picker: 新增 activeStyle 选中样式、columnStyles 任意列样式、fontStyles 任意列字体样式、animationTime 滚动动画事件属性
- picker: 新增 animationTime 滚动动画事件属性

### Bug Fixes 🐛

- action-sheet: 修复组件关闭动画卡顿问题
- checkbox: 修复结合 cell 使用时，点击按钮会导致两次修改事件从而选中无效问题
- icon: 修复 Svg path 方式使用时，颜色传 rgba 解析无效问题
- field: 修复 placeholderStyle 属性和 CSS 变量 --field-placeholder-text-color 设置问题

## v2.3.5(2025-03-27)

### Features ✨

- dialog： 新增 --dialog-header-padding,--dialog--round-button-border-radius CSS 变量
- picker: 新增 disabled 属性可以禁用列;新增 columns.fontStyle 属性可以修改字体样式
- tab: 新增 subtitle, subtitleStyle 属性，新增 --tabs-sub-line-height CSS 变量
- tabbar: 新增 tabbar-item disabled 属性

### Bug Fixes 🐛

- popover: 修复定时关闭问题；修复箭头背景色不随组件被色改变问题
- tabbar: 修复 activeColor 属性默认值取优先取 --tabbar-item-active-color
- tab: 修复 onBeforeChange 取消时控制台报错问题；修复 wrapClass 类型缺失问题
- toast: 修复 toast bottom 和 top 位置时中间存在遮挡问题

## v2.3.3(2025-03-18)

### Features ✨

- icon: name 属性支持 Svg Path 方式
- image: 新增属性 tintColor，支持图片改色

### Bug Fixes 🐛

- image: 修复底部多余空隙样式问题
- switch: 修复底部多余空隙样式问题
- circle: 修复渲染尺寸问题
- tab: 修复 card 模式内容有弹框时遮罩无法遮住滑块问题

## v2.3.2(2025-03-07)

### Features ✨

- datetime-picker： 继承 picker 的 onAnimationStart、onAnimationEnd 事件

### Bug Fixes 🐛

- picker: 修复 activeIndex 定位问题
- dropdown-menu: 文档增加

## v2.3.0(2025-02-28)

### New Components 🎉

- popover: 新增气泡弹框组

### Features ✨

- circle: 使用 canvas 重构组件，增加了 mode、round 属性可设置不同的圆弧样式
- picker: 新增 onAnimationStart、onAnimationEnd 属性

### Bug Fixes 🐛

- datetime-picker: 修复 12 小时模式受控使用问题
- slider: 用法说明文档补充 & 修复双向滑块 Rangeslider inActiveColor 无效问题
- transition: 修复组件频繁调用动画问题
- dialog、toast: 修复组件无法打开问题，增加全局 Id 唯一校验

## v2.2.1 (2025-2-21)

### Bug Fixes 🐛

- dialog: 修复无法获取到组件实例问题
- toast: 修复无法获取到组件实例问题
- calendar：修复 type 属性动态切换时显示问题；优化年选择的范围控制

## v2.2.0 (2025-2-13)

### Bug Fixes 🐛

- icon: 修复异常 repeat 现象
- picker: 修复滚动丝滑问题
- nav-bar: 修复初始化顶部安全距离位移问题
- slider: 修复垂直方向值计算
- stepper: 修复内部图标显示问题
- dialog: 修复重复调用时，无法打开弹窗问题
- 修复单元测试 ESM 问题

### Features ✨

- datetime-picker: 新增 is12HourClock, amText, pmText 属性，支持 12 小时选择
- datetime-picker: 新增 columnsOrder 属性支持自定义时间列顺序；新增 formatterMap 属性支持自定义时间文案；新增 changeAnimation 属性支持关闭改动动画
- stepper: 新增滚动震动反馈
- picker: 增加滚动震动反馈；新增 changeAnimation 属性支持关闭改动动画；新增 order 属性支持修改 flex order 样式
- action-sheet: 新增 --action-sheet-active-icon-color css 变量
- slider: 新增 useParcelPadding 属性
- tabbar: 新增 left 和 right 插槽
- stepper: 新增 css 变量 --stepper-button-border, --stepper-button-icon-font-size

## v2.1.10 (2025-1-13)

### Bug Fixes 🐛

- config-provider: 修复 TS 类型缺失问题
- notice-bar: 修复背景色有透明度问题，修改的 CSS 变量：--notice-bar-info-color、--notice-bar-warning-color、--notice-bar-error-color;

## v2.1.8 (2024-01-06)

### Bug Fixes 🐛

- toast: 修复 API 方式调用时获取 context 错误导致无法获取组件实例问题
- dialog: 修复 API 方式调用时获取 context 错误导致无法获取组件实例问题

## v2.1.7 (2024-12-27)

### Bug Fixes 🐛

- dialog: 1. 修复快速调用 DialogInstance 导致渲染异常无效销毁;2. 修复方法调用缺失 confirmButtonColor & cancelButtonColor 类型;3. 删除 dialog 组件方式使用的 beforeClose 类型;
- circle：1. 修复 size 无法传 string 类型问题; 2. style 属性警告修复
- config-provider: 修复内部对 Dialog 缺失的主题变量
- progress： 暂无相关业务场景，隐藏此组件
- notice-bar: 修复 CSS 变量无法覆盖问题
- custom-keyboard: 修复 CSS 变量无法覆盖问题
- tree-select: 修复 CSS 变量无法覆盖问题

### Features ✨

- 组件实现 ESM 方式打包，支持 tree-shaking
- @tuya-miniapp/icons 实现 ESM 方式打包，支持 tree-shaking
- index-bar: 新增 scrollable 属性默认禁止 Sidebar 滚动触发索引变更
- dialog: 新增 --dialog-cancel-color & --dialog-confirm-color CSS 变量支持
- notice-bar：新增 --notice-bar-right-icon-color CSS 变量
- stepper：新增 --stepper-container-background-color CSS 变量
- circle：新增 customStyle 属性，提示废弃 style 属性

## v2.1.6 (2024-12-19)

### Bug Fixes 🐛

- toast: 修复宽度默认值以及屏幕居中问题
- slider: 修复滑动时屏幕滚动问题；
- circle: 修复组件 TS 类型；

## v2.1.5 (2024-12-10)

### Bug Fixes 🐛

- 修复 icon 组件按需引入问题，涉及修改内部引入逻辑的组件有：field、steps

禁止 ❌ 使用： import { Sun } from '@tuya-miniapp/icons' 方式引入图标;  
推荐 ✅ 使用：import Sun from '@tuya-miniapp/icons/dist/svg/Sun'

## v2.1.4（2024-11-29）

### Bug Fixes 🐛

- dropdown-menu: 修复组件 向上展开时展开框的位置问题
- tab: 修复组件 card 模式时滑块样式问题，多层嵌套切换控制台错误提示问题

### Features ✨

- hairline: 增加 hairline 类样式变量 --hairline-top-width,--hairline-left-width,--hairline-right-width,--hairline-bottom-width,--hairline-surround-width,--hairline-top-bottom-width,--hairline-color
- cell: 修改 Cell 分割线样式变量 --cell-border-color,--cell-border-left-position,--cell-border-right-position

## v2.1.0（2024-11-21）

### Bug Fixes

- tab: 修复切换闪烁问题
- action-sheet: 修复滚动问题
- calendar: 修复循环渲染未绑定 key、初始化展示 NaN 问题

### Features

- tab: 新增 inactiveDestroy 属性，重构样式
- nav-bar: 新增 round 属性，rightTextClass 外部样式类
- field: 新增 interError、subLabel、cardMode、hiddenLabel 属性，重构样式
- calendar: 新增 dayClassMap 属性
- icon: 新增 Delete、DeleteLine 图标

## v2.0.0（2024-11-12）

### New Components 🎉

- calendar: 日历组件
- tag: 标签组件
- bottom-sheet: 底部弹框组件
- notice-bar: 通知栏组件

### Features ✨

- field: UI 对齐设计稿&重构
- tab: UI 对齐设计稿&重构
- search: UI 对齐设计稿&重构
- nav-bar: UI 对齐设计稿&重构
- switch: UI 对齐设计稿&重构
- toast: UI 对齐设计稿&重构
- dropdown-menu: UI 对齐设计稿&重构
- button: UI 对齐设计稿&重构
- action-sheet: UI 对齐设计稿&重构
- checkbox: UI 对齐设计稿&重构
- radio: UI 对齐设计稿&重构
- empty: UI 对齐设计稿&重构
- picker: 功能优化&重构
- tabbar: 功能优化&重构

## v1.2.6（2024-10-29）

### Bug Fixes 🐛

- grid: 修复 GridItem 组件问题
- radio: 修复 组件问题
- cell: 修复 组件问题

## v1.2.6（2024-9-12）

### Bug Fixes 🐛

- picker: 修复 pickerColumn 了滚动到极端时未触发`change`事件的问题。
