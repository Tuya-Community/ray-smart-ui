# 更新日志

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
- bottom-sheet: 新增 nativeDisabled、contentHeight 属性；新增CSS 变量 --bottom-sheet-header-padding
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
- toast: 修复 icon 模式 文字居中问题；以及纯文本时 text 无 class问题


## v2.4.0(2025-06-10)
### Features ✨
- 新增动态引入插件 SmartUIAutoImport 修改导出目录结构，配合 ray cli 实现按需引入组件资源
- picker: 新增 --picker-option-unit-mid-size CSS 变量
- slider: 支持 thumb、bar插槽
- switch: 新增 --switch-node-on-background-color CSS 变量

### Bug Fixes 🐛
- circle：修复 customStyle属性无效、优化绘制模糊问题
- toast: 修复宽度自定义无法撑开问题
- empty: 修复 imageStyle、titleStyle、 descriptionStyle 属性类型提示错误问题
- notice-bar: 修复 customStyle、rightIconStyle、leftIconStyle 属性类型提示错误问题

## v2.3.9(2025-05-15)
### Features ✨
- circle: 重构逻辑，采用rjs重写(不再支持微信)
- calendar: 新增 maxRange、rangePrompt、showRangePrompt、allowSameDay 属性

### Bug Fixes 🐛
- circle: 修复模糊问题
- nav-bar: 修复高度机型适配问题，默认取css变量 --app-device-navbar-height
- picker: 修复开始动画卡顿问题，默认初始化动画 changeAnimation 为 false，修复控制台disabled报错提示

## v2.3.8(2025-05-06)
### Features ✨
- popup: 新增 nativeDisabled 属性，开启弹框期间是否禁用本地手势
- dialog: 新增 nativeDisabled 属性，开启弹框期间是否禁用本地手势
- radio: 新增 preventDefault 属性，可以阻止组件内部默认的UI更新
- datetime-picker: 新增12小时模式时修改时区文案样式能力；新增onChange回调内的value数据

### Bug Fixes 🐛
- field: 修复 errorMessage 过长时换行的样式
- picker: 修复无 disabled 样式问题
- datetime-picker: 修复小时是0或24时，和最大最小限制值冲突显示错误问题


## v2.3.7(2025-04-15)
### Features ✨
- switch: 对齐组件UI设计稿，调整尺寸样式
- datetime-picker: 新增 activeStyle 选中样式、columnStyles 任意列样式、fontStyles 任意列字体样式、animationTime 滚动动画事件属性
- picker: 新增 animationTime 滚动动画事件属性

### Bug Fixes 🐛
- action-sheet: 修复组件关闭动画卡顿问题
- checkbox: 修复结合 cell 使用时，点击按钮会导致两次修改事件从而选中无效问题
- icon: 修复Svg path 方式使用时，颜色传rgba 解析无效问题
- field: 修复 placeholderStyle 属性和 CSS变量 --field-placeholder-text-color 设置问题


## v2.3.5(2025-03-27)
### Features ✨
- dialog： 新增 --dialog-header-padding,--dialog--round-button-border-radius CSS 变量
- picker: 新增 disabled 属性可以禁用列;新增 columns.fontStyle 属性可以修改字体样式
- tab: 新增 subtitle, subtitleStyle属性，新增 --tabs-sub-line-height CSS 变量
- tabbar: 新增 tabbar-item disabled 属性

### Bug Fixes 🐛
- popover: 修复定时关闭问题；修复箭头背景色不随组件被色改变问题
- tabbar: 修复 activeColor 属性默认值取优先取 --tabbar-item-active-color
- tab: 修复 onBeforeChange 取消时控制台报错问题；修复wrapClass类型缺失问题
- toast: 修复 toast bottom和top位置时中间存在遮挡问题


## v2.3.3(2025-03-18)
### Features ✨
- icon: name属性支持 Svg Path方式
- image: 新增属性tintColor，支持图片改色

### Bug Fixes 🐛
- image:  修复底部多余空隙样式问题
- switch: 修复底部多余空隙样式问题
- circle: 修复渲染尺寸问题
- tab: 修复card模式内容有弹框时遮罩无法遮住滑块问题


## v2.3.2(2025-03-07)
### Features ✨
- datetime-picker： 继承picker 的 onAnimationStart、onAnimationEnd事件

### Bug Fixes 🐛
- picker:  修复 activeIndex 定位问题
- dropdown-menu: 文档增加


## v2.3.0(2025-02-28)
### New Components 🎉
- popover: 新增气泡弹框组

### Features ✨
- circle: 使用canvas重构组件，增加了mode、round属性可设置不同的圆弧样式
- picker: 新增 onAnimationStart、onAnimationEnd 属性

### Bug Fixes 🐛
- datetime-picker: 修复12小时模式受控使用问题
- slider: 用法说明文档补充 & 修复双向滑块RangeSlider inActiveColor 无效问题
- transition: 修复组件频繁调用动画问题
- dialog、toast: 修复组件无法打开问题，增加全局 Id 唯一校验

## v2.2.1 (2025-2-21)
### Bug Fixes 🐛
- dialog: 修复无法获取到组件实例问题
- toast: 修复无法获取到组件实例问题
- calendar：修复 type 属性动态切换时显示问题；优化年选择的范围控制


### v2.2.0 (2025-2-13)

### Bug Fixes 🐛
- Icon: 修复异常repeat现象
- Picker: 修复滚动丝滑问题
- NavBar: 修复初始化顶部安全距离位移问题
- Slider: 修复垂直方向值计算
- Stepper: 修复内部图标显示问题
- Dialog: 修复重复调用时，无法打开弹窗问题
- 修复单元测试ESM问题
 
### Features ✨
- DateTimePicker: 新增 is12HourClock, amText, pmText 属性，支持12小时选择
- DateTimePicker: 新增 columnsOrder 属性支持自定义时间列顺序；新增 formatterMap 属性支持自定义时间文案；新增 changeAnimation 属性支持关闭改动动画
- Stepper: 新增滚动震动反馈
- Picker: 增加滚动震动反馈；新增 changeAnimation 属性支持关闭改动动画；新增 order 属性支持修改flex order样式
- ActionSheet: 新增 --action-sheet-active-icon-color css 变量
- Slider: 新增 useParcelPadding 属性
- Tabbar: 新增 left 和 right 插槽
- Stepper: 新增 css 变量 --stepper-button-border, --stepper-button-icon-font-size 

## v2.1.10 (2025-1-13)
### Bug Fixes 🐛
 - 修复 config-provider ts类型缺失问题
 - 修复 notice-bar 背景色有透明度问题，修改的CSS变量：--notice-bar-info-color、--notice-bar-warning-color、--notice-bar-error-color;

## v2.1.8 (2024-01-06)
### Bug Fixes 🐛
 - 修复toast、dialog api方式调用时获取context错误导致无法获取组件实例问题

## v2.1.7 (2024-12-27)
### Bug Fixes 🐛
 - Dialog: 
   1. 修复快速调用 DialogInstance 导致渲染异常无效销毁
   2. 修复方法调用缺失 confirmButtonColor & cancelButtonColor 类型
   3. 删除dialog组件方式使用的beforeClose类型;
 - Circle：
   1. 修复size无法传string类型问题
   2. style属性警告修复
 - ConfigProvider: 修复内部对 Dialog 缺失的主题变量
 - Progress： 暂无相关业务场景，隐藏此组件
 - NoticeBar: 修复CSS变量无法覆盖问题
 - CustomKeyboard: 修复CSS变量无法覆盖问题
 - TreeSelect: 修复CSS变量无法覆盖问题

### Features ✨
 - 组件实现ESM方式打包，支持tree-shaking
 - @tuya-miniapp/icons 实现ESM方式打包，支持tree-shaking
 - IndexBar: 新增 scrollable 属性默认禁止 Sidebar 滚动触发索引变更
 - Dialog: 新增 --dialog-cancel-color & --dialog-confirm-color CSS 变量支持
 - NoticeBar：新增 --notice-bar-right-icon-color CSS变量
 - Stepper：新增 --stepper-container-background-color CSS变量
 - Circle：新增 customStyle 属性，提示废弃style属性

## v2.1.6 (2024-12-19)
### Bug Fixes 🐛
 - 修复 toast 宽度默认值以及屏幕居中问题
 - 修复 slider 滑动时屏幕滚动问题；
 - 修复 circle 组件 TS类型；

## v2.1.5 (2024-12-10)
## 变更内容: 

### Bug Fixes 🐛
- 修复 icon 组件按需引入问题，涉及修改内部引入逻辑的组件有：field、steps

禁止❌使用： import { Sun } from '@tuya-miniapp/icons' 方式引入图标;  
推荐✅使用：import Sun from '@tuya-miniapp/icons/dist/svg/Sun'  


## v2.1.4（2024-11-29）
## 变更内容: 

### Bug Fixes 🐛
- 修复 DropDown 组件 向上展开时展开框的位置问题
- 修复 Tab 组件card模式时滑块样式问题，多层嵌套切换控制台错误提示问题

### Features ✨
- hairline: 增加 hairline 类样式变量 --hairline-top-width,--hairline-left-width,--hairline-right-width,--hairline-bottom-width,--hairline-surround-width,--hairline-top-bottom-width,--hairline-color
- cell: 修改 Cell 分割线样式变量 --cell-border-color,--cell-border-left-position,--cell-border-right-position

## v2.1.0（2024-11-21）
### Bug Fixes
- tab: 修复切换闪烁问题
- action-sheet: 修复滚动问题
- calendar: 修复循环渲染未绑定key、初始化展示NaN问题

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

### Features  ✨
- field: UI对齐设计稿&重构
- tab: UI对齐设计稿&重构
- search: UI对齐设计稿&重构
- top-nar: UI对齐设计稿&重构
- switch: UI对齐设计稿&重构
- toast: UI对齐设计稿&重构
- dropdown-menu: UI对齐设计稿&重构
- button: UI对齐设计稿&重构
- action-sheet: UI对齐设计稿&重构
- checkbox: UI对齐设计稿&重构
- radio: UI对齐设计稿&重构
- empty: UI对齐设计稿&重构
- picker: 功能优化&重构
- tabbar: 功能优化&重构


## v1.2.6（2024-10-29）
### Bug Fixes 🐛
- grid: 修复 GridItem 组件问题
- radio: 修复 组件问题
- cell: 修复 组件问题

## v1.2.6（2024-9-12）
### Bug Fixes 🐛
- picker: 修复 PickerColumn 了滚动到极端时未触发`change`事件的问题。