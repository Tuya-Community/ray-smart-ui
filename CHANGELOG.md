# 更新日志

## v2.7.0(2025-10-21)

### Features ✨

- picker: 重构picker实现原理，增加3D视觉效果，新增 loop 循环滚动 和 fullHeight 属性，优化性能([pull/48](https://github.com/Tuya-Community/miniapp-smart-ui/pull/48))
- datetime-picker: 新增循环滚动能力([pull/48](https://github.com/Tuya-Community/miniapp-smart-ui/pull/48))
- nav-bar: 样式优化，新增 rightTextColor、rightIconColor、rightIconSize、leftIconColor、background、rightIconClass、leftTextClass属性；新增 onClickRightIcon、onClickRightText事件；新增和修改 --nav-bar-side-width、--nav-bar-text-padding、--nav-bar-icon-padding、--nav-bar-title-margin、--nav-bar-home-max-width、--nav-bar-left-title-padding、--nav-bar-title-max-width CSS 变量；删除--nav-bar-icon-size、--nav-bar-icon-margin CSS 变量；修改border属性默认为 false([pull/38](https://github.com/Tuya-Community/miniapp-smart-ui/pull/38))
- swipe-cell: 新增 onTabClose 事件 ([03483f1](https://github.com/Tuya-Community/miniapp-smart-ui/pull/50/commits/03483f198d6503f4f4b760891bc4e598773e337f))
- switch: 新增 activeText、inactiveText 属性；新增--switch-label-font-size、--switch-label-active-color、--switch-label-inactive-color、--switch-label-width CSS 变量([pull/47](https://github.com/Tuya-Community/miniapp-smart-ui/pull/47))
- dialog: 新增 emptyDisabled 属性，input 模式下 输入内容为空时禁用提交([9dbb29c](https://github.com/Tuya-Community/miniapp-smart-ui/pull/50/commits/9dbb29ca129202bac7622264a1d7f684d5da89ba))

### Bug Fixes 🐛

- image: 修改 showLoading 默认值为false([6090b97](https://github.com/Tuya-Community/miniapp-smart-ui/pull/50/commits/6090b97baea6f1c75bf7be184a5ae8fcc33afa9b))
- loading: 修复CSS 变量 --loading-spinner-color 无效问题([pull/47](https://github.com/Tuya-Community/miniapp-smart-ui/pull/47))
- popover: 修复连续点击无法弹出问题([pull/47](https://github.com/Tuya-Community/miniapp-smart-ui/pull/47))
- stepper: 修复键盘主动输入时，内部值不与 step 成比例问题([10e5753](https://github.com/Tuya-Community/miniapp-smart-ui/pull/50/commits/10e5753c8a5fe0ecfe0f463d3d6ab760b95aca67))
- switch: 修复内部垂直居中问题([a622a42](https://github.com/Tuya-Community/miniapp-smart-ui/pull/50/commits/a622a42504ae33022b91463ecbb93b1f218999df))
- tab: 修复 color 属性 在 card 模式下的问题([pull/42](https://github.com/Tuya-Community/miniapp-smart-ui/pull/42))
- notice-bar: 修复 onBtnClick 事件点击问题([4250d39](https://github.com/Tuya-Community/miniapp-smart-ui/pull/50/commits/4250d39ec89198f115803acaaf82266553bc9f9c))
- popup: 默认底部安全距离关闭([3da77ee](https://github.com/Tuya-Community/miniapp-smart-ui/pull/54/commits/3da77eecbc51b014fd06b4871d054ddda9d2a1c7))
- calender: 默认底部安全距离关闭([4c91851](https://github.com/Tuya-Community/miniapp-smart-ui/pull/54/commits/4c91851fe674bcb64a19c830a3f1539da8700dd1))
- picker: 修复在 flex 布局下默认没有宽度的问题([f3f4772](https://github.com/Tuya-Community/miniapp-smart-ui/pull/55/commits/f3f47729fd4c1af0eb617cf56d957c2b389f2d4e));修复单位距离不受 fontStyle 属性控制问题([4eb02fc](https://github.com/Tuya-Community/miniapp-smart-ui/pull/55/commits/4eb02fca12cb6feab62e8fdfd7d82d27bc52159c))
- datetime-picker: 修复在 flex 布局下默认没有宽度的问题([f3f4772](https://github.com/Tuya-Community/miniapp-smart-ui/pull/55/commits/f3f47729fd4c1af0eb617cf56d957c2b389f2d4e))


## v2.6.3(2025-09-16)
### Features ✨
- dialog: 新增 autoClose 属性，修复组件自动关闭问题([36ba91e](https://github.com/Tuya-Community/miniapp-smart-ui/pull/37/commits/36ba91ee495b632aae9ede192364a65d8d999a75));
- icon 支持自定义图标，新增 iconColor 和 iconSize属性([11328c5](https://github.com/Tuya-Community/miniapp-smart-ui/pull/37/commits/11328c50d0001f7ca40429c21c27ec796d02455d));

### Bug Fixes 🐛
- action-sheet: 修复 subname 无法撑开盒子高度问题([4df8c64](https://github.com/Tuya-Community/miniapp-smart-ui/pull/37/commits/4df8c64a0412a2c64bd706b72dd6f4f66e46e2d5));
- icon: 修复 click 事件丢失event 参数问题([bad5231](https://github.com/Tuya-Community/miniapp-smart-ui/pull/37/commits/bad523192b1e3d02d37f267ec2c7c080115cfdd8));
- field: 修复 textarea 模式 autosize 设置最大高度滚动问题([40fe4bc](https://github.com/Tuya-Community/miniapp-smart-ui/pull/37/commits/40fe4bc1727523fa427c904c4e29d5ff7da032fb));
- cell: 修复 cell-group 下 最后一个cell的分割线未隐藏问题([bea6309](https://github.com/Tuya-Community/miniapp-smart-ui/pull/37/commits/bea6309bdcec3d5495c91f9ed1cc325319523320));


## v2.6.2(2025-08-28)
### Features ✨
- battery: 新增 color 属性可以直接修改颜色([ff99655](https://github.com/Tuya-Community/miniapp-smart-ui/pull/28/commits/ff996558becf5ebe24b711904bc1ae9e0faecedc));
- cell: 新增 insetBorderRadius 属性([09c60be](https://github.com/Tuya-Community/miniapp-smart-ui/pull/29/commits/09c60bef61e8f353bcab90728c2ca509aaf0b94f))

### Bug Fixes 🐛
- picker: 修复单位对齐问题([fc12155](https://github.com/Tuya-Community/miniapp-smart-ui/pull/28/commits/fc12155f3883d0147cb328c2123442f147fef330));
- calender: 修复 CSS 变量 --calendar-day-height、--calendar-selected-day-size不生效问题([a08cebe](https://github.com/Tuya-Community/miniapp-smart-ui/pull/31/commits/a08cebe8ff8a62c8d544214cfbd5c05b3cce8347), [bfebfa3](https://github.com/Tuya-Community/miniapp-smart-ui/pull/31/commits/bfebfa3a26ec28e9a4a485f9ea1fd73189ed0624))
- button: 修复 hoverClass 参数类型缺失问题([2789e24](https://github.com/Tuya-Community/ray-smart-ui/pull/18/commits/2789e2494985a10aeb6a440eba07306c07f54ee9))
- 修改 @tuya-miniapp/icons 资源引入方式([d4921f1](https://github.com/Tuya-Community/miniapp-smart-ui/pull/28/commits/d4921f1763211cb631bcd11a51f8ac0296691b77))


## v2.6.1(2025-08-12)
### Features ✨
- bottom-sheet: 新增 showClose 属性 和 title 插槽([fef37bf](https://github.com/Tuya-Community/miniapp-smart-ui/pull/16/commits/fef37bf51650810a486ca1e0863ffd421d4711f9))
### Bug Fixes 🐛
- nav-bar: 修复 leftTextType 为 home 或者 title时，文案超长不省略问题([97f91f5](https://github.com/Tuya-Community/miniapp-smart-ui/pull/16/commits/97f91f5869860d4cbf8994e11f5a0cffa8ac987e))
- picker: 修复单位换行问题([b8075bd](https://github.com/Tuya-Community/miniapp-smart-ui/pull/16/commits/b8075bd2b48b369db549554bd80c23e5305e9426))
- stepper: 修复组件到达max或者min时，禁用样式不生效问题([58ce5af](https://github.com/Tuya-Community/miniapp-smart-ui/pull/16/commits/58ce5af24c715c9534026fd07121426973578dce))；修改--stepper-button-disabled-color 默认值为 _var(--app-B6, #ffffff)_ ([e0e55fa](https://github.com/Tuya-Community/miniapp-smart-ui/pull/16/commits/e0e55fa18f517fafc603a6b9c3035276d6ccaa16))；修复设置 min 或 decimalLength 导致输入框无法删除问题([7cf1cfe](https://github.com/Tuya-Community/miniapp-smart-ui/pull/16/commits/7cf1cfe9d0e7ac77db1007d902960b83dde45d9e))
- image: 修复组件上下多余空隙问题([a42f0ad](https://github.com/Tuya-Community/miniapp-smart-ui/pull/16/commits/a42f0ad7e964b0d63de2b5e1dde7aed2efd99b17))

## v2.6.0(2025-07-31)
### Features ✨
- nav-bar: 新增 --nav-bar-title-max-width CSS 变量，调整默认值从 `60%` 为 `calc(100% - 360rpx)`([af0d83a](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/af0d83ac571e70d9d7b5f934287866c9e37e7f6c))
- bottom-sheet: 新增 max-height 属性([0ed0ea9](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/0ed0ea9d1f32342f8e87a29c6b5927da4026d3fc))
- datetime-picker: 重构组件 12小时制 时展示逻辑，修复时间展示错误问题([019d181](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/019d1813a18c89af733c43526dbe690e69568f75), [822df05](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/822df0555738199533bbaa44073fda93aefbe01b));修改组件分割线 新增 --hairline-border-image-color CSS 变量([6381e6f](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/6381e6ffdf61ae21a1ff3943c69a543ecbc1e03c))
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