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
- switch: 对齐组件UI设计稿，调整尺寸样式([7cd11c6e](/tuyarn-kit/miniapp-smart-ui/-/commit/7cd11c6eb52780f66f23f6429805eba023ff45d4))
- datetime-picker: 新增 activeStyle 选中样式、columnStyles 任意列样式、fontStyles 任意列字体样式、animationTime 滚动动画事件属性([86ef39ea](/tuyarn-kit/miniapp-smart-ui/-/commit/86ef39ea21a23ee34696a6bc868f4302c764c450), [fbec106d](/tuyarn-kit/miniapp-smart-ui/-/commit/fbec106dd2aabe7033b3f305aac1fdb07da050a1))
- picker: 新增 animationTime 滚动动画事件属性([07b5b873](/tuyarn-kit/miniapp-smart-ui/-/commit/07b5b87344c0e174bb6e90c1f3f6407e49cb4d0e))

### Bug Fixes 🐛
- action-sheet: 修复组件关闭动画卡顿问题([438a1db5](/tuyarn-kit/miniapp-smart-ui/-/commit/438a1db57047979ec3956810d818ba6b0e06aa55))
- checkbox: 修复结合 cell 使用时，点击按钮会导致两次修改事件从而选中无效问题([9359943c](/tuyarn-kit/miniapp-smart-ui/-/commit/9359943c6b94017b6ba8f07392f004d43170e810))
- icon: 修复Svg path 方式使用时，颜色传rgba 解析无效问题([99c1228c](/tuyarn-kit/miniapp-smart-ui/-/commit/99c1228cf7c939ecbf4afe12cbddbdef82a1bdcf))
- field: 修复 placeholderStyle 属性和 CSS变量 --field-placeholder-text-color 设置问题([785ee7a6](/tuyarn-kit/miniapp-smart-ui/-/commit/785ee7a6734ccfcc8b89f87b8363d16dc10e89a6))


## v2.3.5(2025-03-27)
### Features ✨
- dialog： 新增 --dialog-header-padding,--dialog--round-button-border-radius CSS 变量([c290fedd](/tuyarn-kit/miniapp-smart-ui/-/commit/c290feddde5d7699abc103037d06f9d51b274dd9),[21a8e495](/tuyarn-kit/miniapp-smart-ui/-/commit/21a8e4954f968bf15703333ca06f7b6d0789cbc9))
- picker: 新增 disabled 属性可以禁用列([75d3df83](/tuyarn-kit/miniapp-smart-ui/-/commit/75d3df83edcc4f75de7b0c4cb184e0dac91aecb6))；新增 columns.fontStyle 属性可以修改字体样式([e73010e5](/tuyarn-kit/miniapp-smart-ui/-/commit/e73010e511bf9aee39a6e63f0792043127e1bc96))
- tab: 新增 subtitle, subtitleStyle属性，新增 --tabs-sub-line-height CSS 变量([ce7a292f](/tuyarn-kit/miniapp-smart-ui/-/commit/ce7a292f64db3675ccda4dd9016c1c64e03ae421))
- tabbar: 新增 tabbar-item disabled 属性([924b2587](/tuyarn-kit/miniapp-smart-ui/-/commit/924b2587ed87136fa6ec47a77deb49f05c26c422))

### Bug Fixes 🐛
- popover: 修复定时关闭问题([dae62c46](/tuyarn-kit/miniapp-smart-ui/-/commit/dae62c46293ed34a407ac6791bb7c2876127c64f),[566861d5](/tuyarn-kit/miniapp-smart-ui/-/commit/566861d516b3fc1d2c7287d66e1ea9606391b1db))；修复箭头背景色不随组件被色改变问题([b475796e](/tuyarn-kit/miniapp-smart-ui/-/commit/b475796e6d0f12ddc35d8e59271769946ff61cc1))
- tabbar: 修复 activeColor 属性默认值取优先取 --tabbar-item-active-color([c823e125](/tuyarn-kit/miniapp-smart-ui/-/commit/c823e125a66284fd3f46429f5699e9d2707bf426))
- tab: 修复 onBeforeChange 取消时控制台报错问题([61cc1d43](/tuyarn-kit/miniapp-smart-ui/-/commit/61cc1d43b08070521d7c916ddf68e8a9d6ab633f))；修复wrapClass类型缺失问题([ae1b45d5](/tuyarn-kit/ray-smart-ui/-/commit/ae1b45d567458f040656bab465dac47bb45e2438))
- toast: 修复 toast bottom和top位置时中间存在遮挡问题([d9627b0f](/tuyarn-kit/miniapp-smart-ui/-/commit/d9627b0f4b22896a14b90306062b256949980521))


## v2.3.3(2025-03-18)
### Features ✨
- icon: name属性支持 Svg Path方式([0930780a](/tuyarn-kit/miniapp-smart-ui/-/commit/0930780af7227e4d0287d7675fa2a0836cada24a))
- image: 新增属性tintColor，支持图片改色([14ce321a](/tuyarn-kit/miniapp-smart-ui/-/commit/14ce321a980e97f41c96b4cee190fb01e775a89e))

### Bug Fixes 🐛
- image:  修复底部多余空隙样式问题([81b39937](/tuyarn-kit/miniapp-smart-ui/-/commit/81b39937f48c94a585d60b6dfc9f8bf70da575b3))
- switch: 修复底部多余空隙样式问题([33f4cb48](/tuyarn-kit/miniapp-smart-ui/-/commit/33f4cb485fc21ad35414d5571c13affb0ed2769f))
- circle: 修复渲染尺寸问题([62b5c57e](/tuyarn-kit/miniapp-smart-ui/-/commit/62b5c57e853a8ec1b763b56732a74db3d79c6d22))
- tab: 修复card模式内容有弹框时遮罩无法遮住滑块问题([e9809df5](/tuyarn-kit/miniapp-smart-ui/-/commit/e9809df56f0ea095693733097806428d79be9451))


## v2.3.2(2025-03-07)
### Features ✨
- datetime-picker： 继承picker 的 onAnimationStart、onAnimationEnd事件([8f372dc1](/tuyarn-kit/miniapp-smart-ui/-/commit/8f372dc158bb1831bb61d02c29ec7d1a52ad702a))

### Bug Fixes 🐛
- picker:  修复 activeIndex 定位问题([a3213871](/tuyarn-kit/miniapp-smart-ui/-/commit/a32138711eda0a6f004509ff042344a6c88825d7))
- dropdown-menu: 文档增加[定位问题](https://developer.tuya.com/material/smartui?comId=dropdown-menu#%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98)说明,[社区链接](https://www.tuyaos.com/viewtopic.php?t=4236)


## v2.3.0(2025-02-28)
### New Components 🎉
- popover: 新增气泡弹框组件([mr](/tuyarn-kit/miniapp-smart-ui/-/merge_requests/46)), [#28](/tuyarn-kit/base/ray-smart-ui/-/issues/28)

### Features ✨
- circle: 使用canvas重构组件，增加了mode、round属性可设置不同的圆弧样式([mr](/tuyarn-kit/miniapp-smart-ui/-/merge_requests/46))
- picker: 新增 onAnimationStart、onAnimationEnd 属性([e583fe9d](/tuyarn-kit/miniapp-smart-ui/-/commit/e583fe9d36ae980599292214b07a9dabc769a4cd)), [社区需求](https://www.tuyaos.com/viewtopic.php?t=4246)

### Bug Fixes 🐛
- datetime-picker: 修复12小时模式受控使用问题([592a3622](/tuyarn-kit/miniapp-smart-ui/-/commit/592a3622d6624b145dec4095e99ff26afa3c9ccd))
- slider: 用法说明文档补充 & 修复双向滑块RangeSlider inActiveColor 无效问题([d6b987a5](/tuyarn-kit/miniapp-smart-ui/-/commit/d6b987a57bce5d831a7584721edd032aacd4025a)),[#1](/tuyarn-kit/ray-smart-ui/-/issues/1)
- transition: 修复组件频繁调用动画问题([ed6bf6fa](/tuyarn-kit/miniapp-smart-ui/-/commit/ed6bf6faf2b198de653d8bc49d6d2b9699424400), [b7655462](/tuyarn-kit/miniapp-smart-ui/-/commit/b76554625e2250f0afa2e0f083de28154907a9dd))
- dialog、toast: 修复组件无法打开问题，增加全局 Id 唯一校验([f270c3ca](/tuyarn-kit/miniapp-smart-ui/-/commit/f270c3ca160328e647b25f5486fdc668b26c425d))

## v2.2.1 (2025-2-21)
### Bug Fixes 🐛
- dialog: 修复无法获取到组件实例问题([21340573](/tuyarn-kit/miniapp-smart-ui/-/commit/21340573e6cc77dc33c193d69a61e300c237ae1e))
- toast: 修复无法获取到组件实例问题([21340573](/tuyarn-kit/miniapp-smart-ui/-/commit/21340573e6cc77dc33c193d69a61e300c237ae1e))
- calendar：修复 type 属性动态切换时显示问题；优化年选择的范围控制；([62d6ce6d](/tuyarn-kit/miniapp-smart-ui/-/commit/62d6ce6d1a176b06d2c0fb7d9620cf6b977e2180), [afb53973](/tuyarn-kit/miniapp-smart-ui/-/commit/afb539732f49062092140f6aac09c364e0e9642f))


### v2.2.0 (2025-2-13)

### Bug Fixes 🐛
- Icon: 修复异常repeat现象([3bf8fcfe](/tuyarn-kit/miniapp-smart-ui/-/commit/3bf8fcfe9160f3660e37cb1c7fd68a6bb3965b95)), [#29](/tuyarn-kit/base/ray-smart-ui/-/issues/29)
- Picker: 修复滚动丝滑问题([8ae79839](/tuyarn-kit/miniapp-smart-ui/-/commit/8ae7983901001ea404615a046071d9e10d455eb4)), [#p15566](https://www.tuyaos.com/viewtopic.php?p=15566#p15566)
- NavBar: 修复初始化顶部安全距离位移问题([48eca48d](/tuyarn-kit/miniapp-smart-ui/-/commit/48eca48d0f7201bbe19e300313caeab102f15470))
- Slider: 修复垂直方向值计算([8287ad84](/tuyarn-kit/miniapp-smart-ui/-/commit/8287ad843ec28da3897c1f185f948f887f751fb5)), [#13](/tuyarn-kit/base/ray-smart-ui/-/issues/13)
- Stepper: 修复内部图标显示问题([78bb6b77](/tuyarn-kit/miniapp-smart-ui/-/commit/78bb6b779c77032c0084c6da2b97be052d6235c3))
- Dialog: 修复重复调用时，无法打开弹窗问题([8e0f9301](/tuyarn-kit/miniapp-smart-ui/-/commit/8e0f9301bd6c5039f4bcf1729c4b425d36a5d2af))
- 修复单元测试ESM问题([989e725a](/tuyarn-kit/miniapp-smart-ui/-/commit/989e725a2cc2770cc6001d6bdd3756e9d8afdc83))
 
### Features ✨
- DateTimePicker: 新增 is12HourClock, amText, pmText 属性，支持12小时选择([e25398d5](/tuyarn-kit/miniapp-smart-ui/-/commit/e25398d5c376f2d832dd665b3e5673095000ab26)), [#30](/tuyarn-kit/base/ray-smart-ui/-/issues/30)；
- DateTimePicker: 新增 columnsOrder 属性支持自定义时间列顺序([e25398d5](/tuyarn-kit/miniapp-smart-ui/-/commit/e25398d5c376f2d832dd665b3e5673095000ab26))；新增 formatterMap 属性支持自定义时间文案([847564f8](/tuyarn-kit/miniapp-smart-ui/-/commit/847564f8a5545c26650f0484f11988c92389c62d))；新增 changeAnimation 属性支持关闭改动动画([aa91cd0a](/tuyarn-kit/miniapp-smart-ui/-/commit/aa91cd0a4eb2dfff537d371a657e2ee707295b03), [a5dcf8c9](/tuyarn-kit/miniapp-smart-ui/-/commit/a5dcf8c9cfa86991aa85bce6408508174eff691c)); [#2](/tuyarn-kit/miniapp-smart-ui/-/issues/2)
- Stepper: 新增滚动震动反馈([8beaed12](/tuyarn-kit/miniapp-smart-ui/-/commit/8beaed12c72af9fb7946902fa761529b8b8df1c9))
- Picker: 增加滚动震动反馈；新增 changeAnimation 属性支持关闭改动动画；新增 order 属性支持修改flex order样式([e25398d5](/tuyarn-kit/miniapp-smart-ui/-/commit/e25398d5c376f2d832dd665b3e5673095000ab26)), [#2](/tuyarn-kit/miniapp-smart-ui/-/issues/2), [#p15566](https://www.tuyaos.com/viewtopic.php?p=15566#p15566)
- ActionSheet: 新增 --action-sheet-active-icon-color css 变量([cbf86752](/tuyarn-kit/miniapp-smart-ui/-/commit/cbf86752e811188dea8b618c17fd5a7c4d7d6a1a))
- Slider: 新增 useParcelPadding 属性([8287ad84](/tuyarn-kit/miniapp-smart-ui/-/commit/8287ad843ec28da3897c1f185f948f887f751fb5))
- Tabbar: 新增 left 和 right 插槽([950fe9c4](/tuyarn-kit/miniapp-smart-ui/-/commit/950fe9c4ce6b14558ac134acafd31fd21b53c45d))
- Stepper: 新增 css 变量 --stepper-button-border, --stepper-button-icon-font-size ([3195bf77](/tuyarn-kit/miniapp-smart-ui/-/commit/3195bf7702abcbed9e1ec5ba3c2b2ad77019587d), [78bb6b77](/tuyarn-kit/miniapp-smart-ui/-/commit/78bb6b779c77032c0084c6da2b97be052d6235c3))

## v2.1.10 (2025-1-13)
### Bug Fixes 🐛
 - 修复 config-provider ts类型缺失问题([50d9e5c2](/tuyarn-kit/base/ray-smart-ui/-/commit/50d9e5c290fde6fe8b2acabf43fe88d8ae0ab26c))
 - 修复 notice-bar 背景色有透明度问题，修改的CSS变量：--notice-bar-info-color、--notice-bar-warning-color、--notice-bar-error-color;([f3199d37](/tuyarn-kit/miniapp-smart-ui/-/commit/f3199d379b7c1a9371d1e8fa27fba249e3f40747))

## v2.1.8 (2024-01-06)
### Bug Fixes 🐛
 - 修复toast、dialog api方式调用时获取context错误导致无法获取组件实例问题([cf29b599](/tuyarn-kit/miniapp-smart-ui/-/commit/cf29b5995c60bcb70ec8cd8a8b3be3aa256863b5), [85e758a6](/tuyarn-kit/miniapp-smart-ui/-/commit/85e758a638ac2ba758a907aa95516097d8e97240)), [#1](/tuyarn-kit/base/miniapp-smart-ui/-/issues/1)

## v2.1.7 (2024-12-27)
### Bug Fixes 🐛
 - Dialog: 
   1. 修复快速调用 DialogInstance 导致渲染异常无效销毁 ([2ea1fa1f](/tuyarn-kit/miniapp-smart-ui/-/commit/2ea1fa1fe10e464420e9f17146afd96e56002f58)), #26; 
   2. 修复方法调用缺失 confirmButtonColor & cancelButtonColor 类型([dcfb16db](/tuyarn-kit/base/ray-smart-ui/-/commit/dcfb16dbcbb592f9b853adb4b13d8270aa24ac80)), #26; 
   3. 删除dialog组件方式使用的beforeClose类型([e306f4a1](/tuyarn-kit/base/ray-smart-ui/-/commit/e306f4a1a328f04a880f6b1d5bbe66b5924606b3)), #27;
 - Circle：
   1. 修复size无法传string类型问题([f839d542](/tuyarn-kit/miniapp-smart-ui/-/commit/f839d542e2864d46a5dbf7eb9f6f6f48421b4b3d))
   2. style属性警告修复([3e763e29](/tuyarn-kit/miniapp-smart-ui/-/commit/3e763e29fda31352ea8e54bd23b16b3ab8b94c7a))
 - ConfigProvider: 修复内部对 Dialog 缺失的主题变量([5c38934c](/tuyarn-kit/base/ray-smart-ui/-/commit/5c38934c28874932c3e5d5ea5002065e11d84b48))
 - Progress： 暂无相关业务场景，隐藏此组件([94504686](/tuyarn-kit/miniapp-smart-ui/-/commit/94504686625291c860588005f5e03362d6766c65))
 - NoticeBar: 修复CSS变量无法覆盖问题([2d9b2071](/tuyarn-kit/miniapp-smart-ui/-/commit/2d9b2071557ccd8cb2617d52f5c45c955e78bb40))
 - CustomKeyboard: 修复CSS变量无法覆盖问题([2d9b2071](/tuyarn-kit/miniapp-smart-ui/-/commit/2d9b2071557ccd8cb2617d52f5c45c955e78bb40))
 - TreeSelect: 修复CSS变量无法覆盖问题([2d9b2071](/tuyarn-kit/miniapp-smart-ui/-/commit/2d9b2071557ccd8cb2617d52f5c45c955e78bb40))

### Features ✨
 - 组件实现ESM方式打包，支持tree-shaking([9f5381e8](/tuyarn-kit/base/ray-smart-ui/-/commit/9f5381e83a2458b103423481fcd2c65c7e322e6c), [4182bc65](/tuyarn-kit/base/ray-smart-ui/-/commit/4182bc6550b6fd751e3480cd6a500ddf1d168fd5))
 - @tuya-miniapp/icons 实现ESM方式打包，支持tree-shaking([8d21a8c9](/tuyarn-kit/base/miniapp-icons/-/commit/8d21a8c959010b8e6a1fd8bd1f7300328837b64e))
 - IndexBar: 新增 scrollable 属性默认禁止 Sidebar 滚动触发索引变更([dde24287](/tuyarn-kit/miniapp-smart-ui/-/commit/dde24287b70a826ae2c88ffe457bf94b2b5d75fb))
 - Dialog: 新增 --dialog-cancel-color & --dialog-confirm-color CSS 变量支持([eb96cbd5](/tuyarn-kit/miniapp-smart-ui/-/commit/eb96cbd50c146100c575bd5e42906868c095332e))
 - NoticeBar：新增 --notice-bar-right-icon-color CSS变量([09ce7d34](/tuyarn-kit/miniapp-smart-ui/-/commit/09ce7d343d746d49f26e039dbaa669488f3b2e64))
 - Stepper：新增 --stepper-container-background-color CSS变量([09ce7d34](/tuyarn-kit/miniapp-smart-ui/-/commit/09ce7d343d746d49f26e039dbaa669488f3b2e64))
 - Circle：新增 customStyle 属性，提示废弃style属性([d005829c](/tuyarn-kit/miniapp-smart-ui/-/commit/d005829cc30a37d98f64d39714caf62909c5cdb1))

## v2.1.6 (2024-12-19)
### Bug Fixes 🐛
 - 修复 toast 宽度默认值以及屏幕居中问题([d8c1170](/tuyarn-kit/miniapp-smart-ui/-/commit/d8c1170ca1c4b59d0541b7776d2eef667ab90d68))；
 - 修复 slider 滑动时屏幕滚动问题；([7d989d8](/tuyarn-kit/miniapp-smart-ui/-/commit/7d989d8a6bc2cb20e63c5c5325a9eb286d56c02c))；
 - 修复 circle 组件 TS类型；([2133637](/tuyarn-kiray-smart-ui/-/commit/2133637e32d06084b8030019c0d5cc4ef0548d2d))

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