# 开发计划

## v2.5.1（已发布）

- [x] dialog: 新增 --dialog-confirm-font-weight、--dialog-cancel-font-weight CSS 变量
- [x] nav-bar: 新增 --nav-bar-right-text-color CSS 变量
- [x] tabbar: 新增 upsideDown 属性 实现文案和图标上下颠倒
- [x] config-provider: 修复组件缺失的 dialog CSS 变量类型
- [x] datetime-picker: 修复 onInput 回调类型错误问题


## v2.6.0（已发布）

- [x] nav-bar: 新增 --nav-bar-title-max-width CSS 变量，调整默认值从 60% 为 calc(100% - 360rpx)
- [x] bottom-sheet: 新增 maxHeight 属性
- [x] datetime-picker: 重构组件 12小时制 时展示逻辑，修复时间展示错误问题;修改组件分割线 新增 --hairline-border-image-color CSS 变量
- [x] picker: 新增 --picker-option-selected-font-weight-bold CSS 变量;新增 hairline-class 分割线样式类
- [x] action-sheet: 新增 useTitleSlot 属性， title 插槽，支持自定义双列选择器功能，调整组件分割线以及边距，安全距离样式
- [x] calendar: 调整样式，新增 headerIconColor 属性，--calendar-header-icon-bg-color、--calendar-header-icon-color、--calendar-header-title-weight CSS 变量
- [x] toast: 调整样式，新增 --toast-min-width CSS 变量，弃用 --toast-text-min-width CSS 变量
- [x] bottom-sheet: 修复设置 contentHeight 属性后组件意外滚动问题
- [x] cascader: 修复 组件 option 列表滚动问题
- [x] dialog: 修复垂直居中问题;修改弹框背景颜色
- [x] icon: 修复 info 信息位置问题，调整样式
- [x] stepper: 调整加减符号大小
- [x] overlay: 调整样式
- [x] picker: 修改 animationTime 默认值为 300;修复单位间距受外部盒子挤压问题，并修改 --picker-option-unit-mid-size 默认值为 4px;修复列表错乱以及部分动画时间不受 animationTime 控制问题
- [x] datetime-picker: 修复长时间频繁拖拽后一直跳闪停不下来的问题;修复组件初始化列表抖动问题
- [x] circle: 修复 round 属性不生效问题
- [x] tab: 修改选择中值类型为 string


## v2.6.1（开发中）

- [ ] stepper 设置最小值时影响删除功能
