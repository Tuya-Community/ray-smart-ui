# Changelog

## v2.11.0 (2026-2-5)

### Features ✨

- index-bar: Added custom styling for the right sidebar index, new sidebarFontSize and sidebarLineHeight props ([pull/150](https://github.com/Tuya-Community/miniapp-smart-ui/pull/150))

### Bug Fixes 🐛

- index-bar: Fixed flickering when touching and scrolling the right sidebar ([90e290b](https://github.com/Tuya-Community/miniapp-smart-ui/pull/149/commits/90e290b1c807579b83bfdc2e1b460dc39c72bb1d))
- popup: Reduced default render nodes; Ray layer lazy-loads children until popup has been shown once for better performance ([fb6ab2f](https://github.com/Tuya-Community/miniapp-smart-ui/pull/151/commits/fb6ab2fddbe30694deb350bfdde60d7c5f35f48c), [96fc5fc](https://github.com/Tuya-Community/ray-smart-ui/pull/72/commits/96fc5fc1d644fb381983e535f87473e20e82500d))
- action-sheet: Reduced default render nodes; Ray layer lazy-loads children until shown once ([fb6ab2f](https://github.com/Tuya-Community/miniapp-smart-ui/pull/151/commits/fb6ab2fddbe30694deb350bfdde60d7c5f35f48c), [fb6ab2f](https://github.com/Tuya-Community/ray-smart-ui/pull/73/commits/ac0e65c472429c80b66f15ca8326ddfc2cce5049))
- bottom-sheet: Reduced default render nodes; Ray layer lazy-loads children until shown once ([fb6ab2f](https://github.com/Tuya-Community/miniapp-smart-ui/pull/151/commits/fb6ab2fddbe30694deb350bfdde60d7c5f35f48c), [fb6ab2f](https://github.com/Tuya-Community/ray-smart-ui/pull/73/commits/ac0e65c472429c80b66f15ca8326ddfc2cce5049))
- tab: Fixed use of important CSS; fixed dot and info display; fixed unnecessary positioning animation when initial active is not the first ([5de790d](https://github.com/Tuya-Community/miniapp-smart-ui/pull/158/commits/5de790da25e9a3867a0ddc10ce273b4b9fc4e5ef), [6649819](https://github.com/Tuya-Community/miniapp-smart-ui/pull/159/commits/66498199ecd0873de387fe8e826b9ffacf02ffb8))


## v2.10.0 (2026-1-13)

### Features ✨
- dialog: Added onInput callback; fixed input mode so value undefined no longer hides the input ([pull/143](https://github.com/Tuya-Community/miniapp-smart-ui/pull/143))
- picker: Added unitGap prop for spacing between unit and selection column ([pull/144](https://github.com/Tuya-Community/miniapp-smart-ui/pull/144))
- battery: Aligned with new UED design, refactored layout; default size changed to 24 ([pull/134](https://github.com/Tuya-Community/miniapp-smart-ui/pull/134), [pull/147](https://github.com/Tuya-Community/miniapp-smart-ui/pull/147))

### Bug Fixes 🐛
- dialog: Set emptyDisabled default to false and adjusted submit button disable logic ([5c88532](https://github.com/Tuya-Community/miniapp-smart-ui/pull/146/commits/5c885324f3f9e3c691f4d840e8fc4120a2088301))

## v2.9.2 (2025-12-31)

### Bug Fixes 🐛
- Fixed nativeDisabled not working on Android ([66adfce](https://github.com/Tuya-Community/miniapp-smart-ui/commit/66adfceebeb9d235c0299e4b5718dec6488e73e7))

## v2.9.1 (2025-12-30)

### Features ✨
- calendar: Added firstDayOfSelectWeek prop to set the first day of the week ([pull/136](https://github.com/Tuya-Community/miniapp-smart-ui/pull/136))

### Bug Fixes 🐛
- calendar: Fixed date jump when selecting in some regions ([pull/63](https://github.com/Tuya-Community/ray-smart-ui/pull/63))

## v2.9.0 (2025-12-23)

### Features ✨
- bottom-sheet: Added lockScroll to disable overlay scroll; added lockMaxDrag to disable max-distance drag ([7eeec64](https://github.com/Tuya-Community/miniapp-smart-ui/pull/131/commits/7eeec64c305d0edfd413a3c34db4e3583a03b19c), [pull/128](https://github.com/Tuya-Community/miniapp-smart-ui/pull/128), [pull/129](https://github.com/Tuya-Community/miniapp-smart-ui/pull/129))
- search: iOS haptic feedback ([pull/112](https://github.com/Tuya-Community/miniapp-smart-ui/pull/112))
- field: iOS haptic feedback ([pull/112](https://github.com/Tuya-Community/miniapp-smart-ui/pull/112))
- tab: iOS haptic feedback ([pull/112](https://github.com/Tuya-Community/miniapp-smart-ui/pull/112))
- tabbar: iOS haptic feedback ([pull/112](https://github.com/Tuya-Community/miniapp-smart-ui/pull/112))
- stepper: iOS haptic feedback ([pull/112](https://github.com/Tuya-Community/miniapp-smart-ui/pull/112))
- switch: iOS haptic feedback ([pull/112](https://github.com/Tuya-Community/miniapp-smart-ui/pull/112))
- toast: iOS haptic feedback ([pull/112](https://github.com/Tuya-Community/miniapp-smart-ui/pull/112))
- slider: iOS haptic feedback ([7fb416f](https://github.com/Tuya-Community/miniapp-smart-ui/pull/124/commits/7fb416fd10fc267920509b45e27ad9c10841f003))
- index-bar: iOS haptic feedback ([pull/110](https://github.com/Tuya-Community/miniapp-smart-ui/pull/110))
- calendar: iOS haptic feedback ([pull/109](https://github.com/Tuya-Community/miniapp-smart-ui/pull/109))
- custom-keyboard: iOS haptic feedback ([pull/111](https://github.com/Tuya-Community/miniapp-smart-ui/pull/111))

### Bug Fixes 🐛

- dialog: Fixed unable to open again after page destroy without closing ([b4f7472](https://github.com/Tuya-Community/miniapp-smart-ui/pull/131/commits/b4f74729ff5964597be13aa0b3e1f70a59d91b48))
- config-provider: Reduced theme file size ([3d55091](https://github.com/Tuya-Community/miniapp-smart-ui/pull/131/commits/3d5509187dd3830449127b68718bdd95243c13cd))
- circle: Removed redundant styles that could cause ring gaps ([c4ae523](https://github.com/Tuya-Community/miniapp-smart-ui/pull/114/commits/c4ae5231522e85d09301bc24801066c6857b60b7))
- picker: Fixed some columns not selectable by drag in loop mode ([bed9b37](https://github.com/Tuya-Community/miniapp-smart-ui/pull/113/commits/bed9b37f9fc5a885c031de24c6c5c6f526d72fd9))
- nav-bar: Aligned with Tuya UI; sideWidth default changed from mid to max ([64281c8](https://github.com/Tuya-Community/miniapp-smart-ui/pull/125/commits/64281c830cde83b908320085014f394058b257c1))
- calendar: Aligned with Tuya UI; removed --calendar-day-disabled-color, use opacity for disabled; fixed dark mode disabled style ([pull/126](https://github.com/Tuya-Community/miniapp-smart-ui/pull/126))
- slider: Fixed parcel type button border spacing; fixed inaccurate min/max in onChange; fixed initial state when button hidden ([7fb416f](https://github.com/Tuya-Community/miniapp-smart-ui/pull/124/commits/7fb416fd10fc267920509b45e27ad9c10841f003))

## v2.8.0 (2025-12-11)

### Features ✨

- config-provider: Added theme prop for one-click theme switch ([pull/100](https://github.com/Tuya-Community/miniapp-smart-ui/pull/100))
- toast: Added textColor and iconColor props ([pull/105](https://github.com/Tuya-Community/miniapp-smart-ui/pull/105))
- loading: Added iconColor prop ([pull/104](https://github.com/Tuya-Community/miniapp-smart-ui/pull/104))
- circle: Added angleOffset for semi-circle types (angle, angle2); maskColor default changed from #ffffff to transparent ([pull/106](https://github.com/Tuya-Community/miniapp-smart-ui/pull/106))
- cascader: Added --cascader-active-background-color CSS variable ([43922ab](https://github.com/Tuya-Community/miniapp-smart-ui/commit/43922abceaedf1af448147e189517598151dd0a9))
- popover: Added --popover-overlay-color CSS variable ([43922ab](https://github.com/Tuya-Community/miniapp-smart-ui/commit/43922abceaedf1af448147e189517598151dd0a9))

### Bug Fixes 🐛

- loading: Fixed color prop effect ([pull/104](https://github.com/Tuya-Community/miniapp-smart-ui/pull/104))
- picker: Fixed some columns not selectable by drag in loop mode ([pull/113](https://github.com/Tuya-Community/miniapp-smart-ui/pull/113))
- datetime-picker: Fixed January not selectable by drag in some cases ([pull/113](https://github.com/Tuya-Community/miniapp-smart-ui/pull/113))
- circle: Fixed ring partially hidden when outer container is squeezed ([pull/115](https://github.com/Tuya-Community/miniapp-smart-ui/pull/115))
- notice-bar: Set --notice-bar-text-color default to rgba(0, 0, 0, 0.5) ([43922ab](https://github.com/Tuya-Community/miniapp-smart-ui/commit/43922abceaedf1af448147e189517598151dd0a9))
- switch: Set --switch-label-active-color and --switch-label-inactive-color defaults to #FFFFFF ([43922ab](https://github.com/Tuya-Community/miniapp-smart-ui/commit/43922abceaedf1af448147e189517598151dd0a9))

## v2.7.3 (2025-11-20)

### Features ✨

- nav-bar: Aligned with new UI; added sideWidth; added --nav-bar-side-width-min, --nav-bar-side-width-max; adjusted defaults for --nav-bar-side-width, --nav-bar-text-font-size, --nav-bar-text-font-weight ([pull/96](https://github.com/Tuya-Community/miniapp-smart-ui/pull/96))

### Bug Fixes 🐛
- stepper: Fixed real-time input update for decimal values ([e9cf7a9](https://github.com/Tuya-Community/miniapp-smart-ui/pull/97/commits/e9cf7a9edb6ea2fc93e3a38be54bdb03fd4e0294))

## v2.7.2 (2025-11-13)

### Features ✨

- stepper: Integrated manrope number font (App 7.0.5+) ([a9ac2ab](https://github.com/Tuya-Community/miniapp-smart-ui/pull/77/commits/a9ac2ab42943c837cda5dba3ddff02d56b00f025))
- count-down: Integrated manrope number font (App 7.0.5+) ([a9ac2ab](https://github.com/Tuya-Community/miniapp-smart-ui/pull/77/commits/a9ac2ab42943c837cda5dba3ddff02d56b00f025))
- picker: Integrated manrope number font (App 7.0.5+) ([a9ac2ab](https://github.com/Tuya-Community/miniapp-smart-ui/pull/77/commits/a9ac2ab42943c837cda5dba3ddff02d56b00f025))
- datetime-picker: Integrated manrope number font (App 7.0.5+) ([a9ac2ab](https://github.com/Tuya-Community/miniapp-smart-ui/pull/77/commits/a9ac2ab42943c837cda5dba3ddff02d56b00f025))
- calendar: Integrated manrope number font (App 7.0.5+) ([pull/79](https://github.com/Tuya-Community/miniapp-smart-ui/pull/79))
- custom-keyboard: Integrated manrope number font (App 7.0.5+) ([e8f763d](https://github.com/Tuya-Community/miniapp-smart-ui/pull/77/commits/e8f763d526f635d702a87586535f8b4a854100b1))
- bottom-sheet: Drag support; added draggable, minDragHeight, maxDragHeight, midDragHeight, closeDragHeight; added onDragPosition ([pull/78](https://github.com/Tuya-Community/miniapp-smart-ui/pull/78))
- nav-bar: --nav-bar-text-padding default set to 16px ([352954e](https://github.com/Tuya-Community/miniapp-smart-ui/commit/352954e16f05b0660369bfc860b7f895dc5f1774))
- icon: Added mute icon and more icons ([1ba2ebf](https://github.com/Tuya-Community/miniapp-smart-ui/pull/77/commits/1ba2ebfc12e6af675940c01f2e229eed05cec4ff))

### Bug Fixes 🐛

- icon: HarmonyOS icon display compatibility ([bc7310a](https://github.com/Tuya-Community/miniapp-smart-ui/pull/77/commits/bc7310a99c1bfa4dc5e90a7dad5fb338b0aff465))
- circle: Fixed initial width 100% under flex layout ([8083de9](https://github.com/Tuya-Community/miniapp-smart-ui/pull/77/commits/8083de941d12b9e3158c170841079e76cbf3ecf3))
- stepper: Fixed auto wrap, decimal input, step formatting excluding min; added string handling ([4054898](https://github.com/Tuya-Community/miniapp-smart-ui/pull/77/commits/405489889906c8424b76daceaf392c59cd24bf01))
- loading: HarmonyOS compatibility ([894d59d](https://github.com/Tuya-Community/miniapp-smart-ui/pull/77/commits/894d59d53f4ba1f5061febdcc61944da0d8e3f1a))
- picker: Fixed single-column onChange return format ([9800e64](https://github.com/Tuya-Community/miniapp-smart-ui/pull/77/commits/9800e649576136eb102cc61c5192e6a6ffd57ea3))
- slider: Fixed drag when min is not 0 ([f85fae8](https://github.com/Tuya-Community/miniapp-smart-ui/pull/77/commits/f85fae880c278ca89126e0555eca15497b7abf66))


## v2.7.1 (2025-10-28)

### Bug Fixes 🐛

- field: Fixed inputDetail callback not updating input value when extraEventParams is enabled ([7fcb0c1](https://github.com/Tuya-Community/miniapp-smart-ui/pull/71/commits/7fcb0c18038f27aa2006e5a9102652eb817046ac))
- tabbar: Fixed border prop not taking effect ([a8d90a5](https://github.com/Tuya-Community/miniapp-smart-ui/pull/59/commits/a8d90a56832a8254ccfb3763352489a300a3abbb))
- tab: Fixed misaligned bottom bar animation and text color animation on switch ([4becc32](https://github.com/Tuya-Community/miniapp-smart-ui/pull/60/commits/4becc32e4ecb2032b794301229097fce45e95205))
- dialog: Adjusted roundButton style; fixed cancel button style; updated --dialog--round-button-border-radius ([pull/69](https://github.com/Tuya-Community/miniapp-smart-ui/pull/69))
- picker: Fixed scroll error when list changes during loop scroll; fixed active state real-time update ([pull/65](https://github.com/Tuya-Community/miniapp-smart-ui/pull/65))
- circle: Fixed extra horizontal spacing ([fbae95e](https://github.com/Tuya-Community/miniapp-smart-ui/pull/70/commits/fbae95ebbc80836cbacd9a0da7a84ec909498cab))
- nav-bar: Fixed onClickRight not firing ([d0e1f9f](https://github.com/Tuya-Community/miniapp-smart-ui/pull/62/commits/d0e1f9f9b1a7028517a334299b03a07fe5cf206f))
- popup: Default safeAreaInsetBottom set to false ([c3c79f2](https://github.com/Tuya-Community/miniapp-smart-ui/pull/61/commits/c3c79f2f0efef6595649b426fb5221cb6df83da9)); fixed --popup-background-color not supporting gradient ([37a938a](https://github.com/Tuya-Community/miniapp-smart-ui/pull/68/commits/37a938a0780fe64d24a4e8c20810b1e1434e4ee6))


## v2.7.0 (2025-10-21)

### Features ✨

- picker: Refactored with 3D effect; added loop and fullHeight; performance improvements ([pull/48](https://github.com/Tuya-Community/miniapp-smart-ui/pull/48))
- datetime-picker: Added loop scroll ([pull/48](https://github.com/Tuya-Community/miniapp-smart-ui/pull/48))
- nav-bar: Style updates; added rightTextColor, rightIconColor, rightIconSize, leftIconColor, background, rightIconClass, leftTextClass; onClickRightIcon, onClickRightText; CSS var updates; border default false ([pull/38](https://github.com/Tuya-Community/miniapp-smart-ui/pull/38))
- swipe-cell: Added onTabClose ([03483f1](https://github.com/Tuya-Community/miniapp-smart-ui/pull/50/commits/03483f198d6503f4f4b760891bc4e598773e337f))
- switch: Added activeText, inactiveText; --switch-label-* CSS variables ([pull/47](https://github.com/Tuya-Community/miniapp-smart-ui/pull/47))
- dialog: Added emptyDisabled; in input mode submit disabled when empty ([9dbb29c](https://github.com/Tuya-Community/miniapp-smart-ui/pull/50/commits/9dbb29ca129202bac7622264a1d7f684d5da89ba))

### Bug Fixes 🐛

- image: showLoading default set to false ([6090b97](https://github.com/Tuya-Community/miniapp-smart-ui/pull/50/commits/6090b97baea6f1c75bf7be184a5ae8fcc33afa9b))
- loading: Fixed --loading-spinner-color ([pull/47](https://github.com/Tuya-Community/miniapp-smart-ui/pull/47))
- popover: Fixed consecutive clicks not opening ([pull/47](https://github.com/Tuya-Community/miniapp-smart-ui/pull/47))
- stepper: Fixed value not proportional to step when typing ([10e5753](https://github.com/Tuya-Community/miniapp-smart-ui/pull/50/commits/10e5753c8a5fe0ecfe0f463d3d6ab760b95aca67))
- switch: Fixed vertical alignment ([a622a42](https://github.com/Tuya-Community/miniapp-smart-ui/pull/50/commits/a622a42504ae33022b91463ecbb93b1f218999df))
- tab: Fixed color in card mode ([pull/42](https://github.com/Tuya-Community/miniapp-smart-ui/pull/42))
- notice-bar: Fixed onBtnClick ([4250d39](https://github.com/Tuya-Community/miniapp-smart-ui/pull/50/commits/4250d39ec89198f115803acaaf82266553bc9f9c))
- popup: Default bottom safe area off ([3da77ee](https://github.com/Tuya-Community/miniapp-smart-ui/pull/54/commits/3da77eecbc51b014fd06b4871d054ddda9d2a1c7))
- calendar: Default bottom safe area off ([4c91851](https://github.com/Tuya-Community/miniapp-smart-ui/pull/54/commits/4c91851fe674bcb64a19c830a3f1539da8700dd1))
- picker: Fixed default width in flex layout; fixed unit distance not controlled by fontStyle ([f3f4772](https://github.com/Tuya-Community/miniapp-smart-ui/pull/55/commits/f3f47729fd4c1af0eb617cf56d957c2b389f2d4e), [4eb02fc](https://github.com/Tuya-Community/miniapp-smart-ui/pull/55/commits/4eb02fca12cb6feab62e8fdfd7d82d27bc52159c))
- datetime-picker: Fixed default width in flex layout ([f3f4772](https://github.com/Tuya-Community/miniapp-smart-ui/pull/55/commits/f3f47729fd4c1af0eb617cf56d957c2b389f2d4e))
- icon: Updated right, left, down, up icons to match UI ([e1bd07e](https://github.com/Tuya-Community/miniapp-smart-ui/commit/e1bd07ebb2bd411fe82e714b11e603ed68271c9a))


## v2.6.3 (2025-09-16)
### Features ✨
- dialog: Added autoClose; fixed auto-close behavior ([36ba91e](https://github.com/Tuya-Community/miniapp-smart-ui/pull/37/commits/36ba91ee495b632aae9ede192364a65d8d999a75))
- icon: Custom icon support; added iconColor and iconSize ([11328c5](https://github.com/Tuya-Community/miniapp-smart-ui/pull/37/commits/11328c50d0001f7ca40429c21c27ec796d02455d))

### Bug Fixes 🐛
- action-sheet: Fixed subname not expanding box height ([4df8c64](https://github.com/Tuya-Community/miniapp-smart-ui/pull/37/commits/4df8c64a0412a2c64bd706b72dd6f4f66e46e2d5))
- icon: Fixed click event missing event param ([bad5231](https://github.com/Tuya-Community/miniapp-smart-ui/pull/37/commits/bad523192b1e3d02d37f267ec2c7c080115cfdd8))
- field: Fixed textarea autosize max height scroll ([40fe4bc](https://github.com/Tuya-Community/miniapp-smart-ui/pull/37/commits/40fe4bc1727523fa427c904c4e29d5ff7da032fb))
- cell: Fixed last cell divider not hidden in cell-group ([bea6309](https://github.com/Tuya-Community/miniapp-smart-ui/pull/37/commits/bea6309bdcec3d5495c91f9ed1cc325319523320))


## v2.6.2 (2025-08-28)
### Features ✨
- battery: Added color prop ([ff99655](https://github.com/Tuya-Community/miniapp-smart-ui/pull/28/commits/ff996558becf5ebe24b711904bc1ae9e0faecedc))
- cell: Added insetBorderRadius ([09c60be](https://github.com/Tuya-Community/miniapp-smart-ui/pull/29/commits/09c60bef61e8f353bcab90728c2ca509aaf0b94f))

### Bug Fixes 🐛
- picker: Fixed unit alignment ([fc12155](https://github.com/Tuya-Community/miniapp-smart-ui/pull/28/commits/fc12155f3883d0147cb328c2123442f147fef330))
- calendar: Fixed --calendar-day-height, --calendar-selected-day-size not applying ([a08cebe](https://github.com/Tuya-Community/miniapp-smart-ui/pull/31/commits/a08cebe8ff8a62c8d544214cfbd5c05b3cce8347), [bfebfa3](https://github.com/Tuya-Community/miniapp-smart-ui/pull/31/commits/bfebfa3a26ec28e9a4a485f9ea1fd73189ed0624))
- button: Fixed hoverClass param type ([2789e24](https://github.com/Tuya-Community/ray-smart-ui/pull/18/commits/2789e2494985a10aeb6a440eba07306c07f54ee9))
- Updated @tuya-miniapp/icons import method ([d4921f1](https://github.com/Tuya-Community/miniapp-smart-ui/pull/28/commits/d4921f1763211cb631bcd11a51f8ac0296691b77))


## v2.6.1 (2025-08-12)
### Features ✨
- bottom-sheet: Added showClose and title slot ([fef37bf](https://github.com/Tuya-Community/miniapp-smart-ui/pull/16/commits/fef37bf51650810a486ca1e0863ffd421d4711f9))
### Bug Fixes 🐛
- nav-bar: Fixed long text not ellipsis when leftTextType is home or title ([97f91f5](https://github.com/Tuya-Community/miniapp-smart-ui/pull/16/commits/97f91f5869860d4cbf8994e11f5a0cffa8ac987e))
- picker: Fixed unit line break ([b8075bd](https://github.com/Tuya-Community/miniapp-smart-ui/pull/16/commits/b8075bd2b48b369db549554bd80c23e5305e9426))
- stepper: Fixed disabled style at max/min; --stepper-button-disabled-color default to var(--app-B6, #ffffff); fixed input not deletable with min/decimalLength ([58ce5af](https://github.com/Tuya-Community/miniapp-smart-ui/pull/16/commits/58ce5af24c715c9534026fd07121426973578dce), [e0e55fa](https://github.com/Tuya-Community/miniapp-smart-ui/pull/16/commits/e0e55fa18f517fafc603a6b9c3035276d6ccaa16), [7cf1cfe](https://github.com/Tuya-Community/miniapp-smart-ui/pull/16/commits/7cf1cfe9d0e7ac77db1007d902960b83dde45d9e))
- image: Fixed extra vertical spacing ([a42f0ad](https://github.com/Tuya-Community/miniapp-smart-ui/pull/16/commits/a42f0ad7e964b0d63de2b5e1dde7aed2efd99b17))

## v2.6.0 (2025-07-31)
### Features ✨
- nav-bar: Added --nav-bar-title-max-width; default changed from 60% to calc(100% - 360rpx) ([af0d83a](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/af0d83ac571e70d9d7b5f934287866c9e37e7f6c))
- bottom-sheet: Added max-height ([0ed0ea9](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/0ed0ea9d1f32342f8e87a29c6b5927da4026d3fc))
- datetime-picker: Refactored 12-hour display logic; fixed time display; added --hairline-border-image-color ([019d181](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/019d1813a18c89af733c43526dbe690e69568f75), [822df05](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/822df0555738199533bbaa44073fda93aefbe01b), [6381e6f](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/6381e6ffdf61ae21a1ff3943c69a543ecbc1e03c))
- picker: Added --picker-option-selected-font-weight-bold; added hairline-class ([7b38c33](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/7b38c33437f96f57757cc6c9e014938cd4ba6671), [55ed888](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/55ed8885045f34c95b8076c985b64350f0b43c13))
- action-sheet: Added useTitleSlot, title slot, dual-column picker; adjusted dividers, padding, safe area ([8eea246](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/8eea24657985252ef9dfc023fa9ba4eb33feefda))
- calendar: Style updates; headerIconColor; --calendar-header-* CSS vars ([944b728](https://github.com/Tuya-Community/miniapp-smart-ui/pull/9/commits/944b7281a04c150539ed5da6537db649fe40808c), [0907238](https://github.com/Tuya-Community/miniapp-smart-ui/pull/9/commits/0907238bce8863ae58435ac6767e5eda3c464bb0), [52989f4](https://github.com/Tuya-Community/miniapp-smart-ui/pull/9/commits/52989f4800a28ef354dc3cee14ac2300fc344ffe))
- toast: Style updates; --toast-min-width; deprecated --toast-text-min-width ([13a4f93](https://github.com/Tuya-Community/miniapp-smart-ui/pull/9/commits/13a4f93e4bf9f2fb3dfb17e64f85d82430d22706), [f99c3a3](https://github.com/Tuya-Community/miniapp-smart-ui/pull/9/commits/f99c3a30b5d78f655513756ce494b1ec6e259a1f))

### Bug Fixes 🐛
- bottom-sheet: Fixed unexpected scroll when contentHeight set ([175f145](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/175f1455b55ff6018f1586f3ea613ecba230ac3f))
- cascader: Fixed option list scroll ([1ff96ed](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/1ff96ed1ca4d45f3a9a63a90e6239d8ddec76ff6))
- dialog: Fixed vertical alignment; updated background color ([b591451](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/b591451e8a9b9c842ed721f454f20a190188666b), [eae43fb](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/eae43fb54a23fa669636e166b149cd9f393fb8ef))
- icon: Fixed info position and style ([d556d4d](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/d556d4d648594c73d575aadae3ac859b546fbe05), [1fcd058](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/1fcd05883ef7ea69e533a9bef9a6a26ebfa5e603))
- stepper: Adjusted plus/minus symbol size ([2d37826](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/2d37826977b0977b369b4b5bb7f549f263e10134))
- overlay: Style adjustments ([319761a](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/319761a88793c178d3f6c0089adb4a6079df29ec))
- picker: animationTime default 300; fixed unit spacing when squeezed; --picker-option-unit-mid-size default 4px; fixed list order and animationTime ([302919a](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/302919ab414ac70cc2174541c97127bc8e2f5bdc), [f7a4f28](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/f7a4f28b60d31afc7b699100f7cc1e992f621319), [afe87f2](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/afe87f262a69d6733c8ee7eb38cf129220ae333f), [1619172](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/16191721222fe7658d87b0eaf0d8c28d5ecc29a6), [d82a6cf](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/d82a6cff525d26f9094046be27874a0a80f883de), [af64c11](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/af64c1182055c9a264cd71058a1c708f93801e73))
- datetime-picker: Fixed continuous flicker after long drag; fixed initial list jitter ([3f3578c](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/3f3578cc215aef657c02feba2c4f214595db7e49), [e1fe931](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/e1fe9313bf5a56841d52db6c62009f6025968194), [c233ac4](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/c233ac47a288d8a648da0db6021ac4929523c1e3))
- circle: Fixed round prop not working ([e862099](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/e8620991d6ad255f461740974db11af99d58a767))
- tab: Selected value type changed to string ([e22f999](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/e22f999e6c54a0572f6080cd7744ba1afadc6b6c))

## v2.5.1 (2025-07-17)
### Features ✨
- dialog: Added --dialog-confirm-font-weight, --dialog-cancel-font-weight CSS variables
- nav-bar: Added --nav-bar-right-text-color CSS variable
- tabbar: Added upsideDown to flip icon and text vertically

### Bug Fixes 🐛
- config-provider: Fixed missing dialog CSS variable types
- datetime-picker: Fixed onInput callback type

## v2.5.0 (2025-06-26)
### Features ✨
- action-sheet: Added nativeDisabled
- bottom-sheet: Added nativeDisabled, contentHeight; --bottom-sheet-header-padding
- toast: Added nativeDisabled
- calendar: --calendar-popup-height; custom-class support
- dropdown-menu: Added scrollStyle for scroll when list overflows
- popover: Added trigger
- skeleton: Animation improvements
- switch: Layout change; active-color and inactive-color support gradient; removed --switch-border; added --switch-padding

### Bug Fixes 🐛
- bottom-sheet: Fixed scroll at max height; fixed bottom safe area when content absolutely positioned; fixed round border radius
- circle: Fixed percent position when mode="angle2"
- dialog: Fixed round-button divider remnant
- popup: Fixed round border radius
- toast: Fixed icon mode text alignment; fixed text without class in text-only mode


## v2.4.0 (2025-06-10)
### Features ✨
- SmartUIAutoImport plugin and export structure for ray cli tree-shaking / on-demand import
- picker: Added --picker-option-unit-mid-size
- slider: thumb and bar slots
- switch: Added --switch-node-on-background-color

### Bug Fixes 🐛
- circle: Fixed customStyle; reduced blur
- toast: Fixed custom width not expanding
- empty: Fixed imageStyle, titleStyle, descriptionStyle type hints
- notice-bar: Fixed customStyle, rightIconStyle, leftIconStyle type hints

## v2.3.9 (2025-05-15)
### Features ✨
- circle: Refactored with rjs (WeChat no longer supported)
- calendar: Added maxRange, rangePrompt, showRangePrompt, allowSameDay

### Bug Fixes 🐛
- circle: Fixed blur
- nav-bar: Fixed height adaptation; default --app-device-navbar-height
- picker: Fixed start animation stutter; changeAnimation default false; fixed disabled console error

## v2.3.8 (2025-05-06)
### Features ✨
- popup: Added nativeDisabled to disable native gestures while open
- dialog: Added nativeDisabled to disable native gestures while open
- radio: Added preventDefault to block default UI update
- datetime-picker: 12h mode timezone text styling; value in onChange callback

### Bug Fixes 🐛
- field: Fixed errorMessage long text wrap style
- picker: Fixed missing disabled style
- datetime-picker: Fixed hour 0/24 vs min/max display

## v2.3.7 (2025-04-15)
### Features ✨
- switch: Aligned UI; size adjustments
- datetime-picker: activeStyle, columnStyles, fontStyles, animationTime
- picker: animationTime

### Bug Fixes 🐛
- action-sheet: Fixed close animation stutter
- checkbox: Fixed double change when used with cell (selection invalid)
- icon: Fixed rgba when using SVG path
- field: Fixed placeholderStyle and --field-placeholder-text-color

## v2.3.5 (2025-03-27)
### Features ✨
- dialog: --dialog-header-padding, --dialog--round-button-border-radius
- picker: disabled per column; columns.fontStyle
- tab: subtitle, subtitleStyle; --tabs-sub-line-height
- tabbar: tabbar-item disabled

### Bug Fixes 🐛
- popover: Fixed timed close; fixed arrow background with component background
- tabbar: activeColor default --tabbar-item-active-color
- tab: Fixed onBeforeChange cancel console error; fixed wrapClass type
- toast: Fixed middle area blocked at bottom/top position

## v2.3.3 (2025-03-18)
### Features ✨
- icon: name supports SVG path
- image: tintColor for image tinting

### Bug Fixes 🐛
- image: Fixed extra bottom spacing
- switch: Fixed extra bottom spacing
- circle: Fixed render size
- tab: Fixed card mode mask not covering slider when content has popup

## v2.3.2 (2025-03-07)
### Features ✨
- datetime-picker: Inherits picker onAnimationStart, onAnimationEnd

### Bug Fixes 🐛
- picker: Fixed activeIndex positioning
- dropdown-menu: Docs added

## v2.3.0 (2025-02-28)
### New Components 🎉
- popover: Bubble popover component

### Features ✨
- circle: Canvas refactor; mode, round for arc styles
- picker: onAnimationStart, onAnimationEnd

### Bug Fixes 🐛
- datetime-picker: Fixed 12h controlled usage
- slider: Docs; fixed range slider inActiveColor
- transition: Fixed frequent animation calls
- dialog, toast: Fixed unable to open; global unique ID check

## v2.2.1 (2025-2-21)
### Bug Fixes 🐛
- dialog: Fixed unable to get component instance
- toast: Fixed unable to get component instance
- calendar: Fixed type dynamic switch display; improved year range

## v2.2.0 (2025-2-13)

### Bug Fixes 🐛
- icon: Fixed repeat glitch
- picker: Fixed scroll smoothness
- nav-bar: Fixed initial top safe area offset
- slider: Fixed vertical value calculation
- stepper: Fixed internal icon display
- dialog: Fixed not opening on repeated calls
- Fixed unit test ESM

### Features ✨
- datetime-picker: is12HourClock, amText, pmText for 12h selection
- datetime-picker: columnsOrder, formatterMap, changeAnimation
- stepper: Scroll haptic feedback
- picker: Scroll haptic; changeAnimation; order for flex order
- action-sheet: --action-sheet-active-icon-color
- slider: useParcelPadding
- tabbar: left and right slots
- stepper: --stepper-button-border, --stepper-button-icon-font-size

## v2.1.10 (2025-1-13)
### Bug Fixes 🐛
- config-provider: Fixed missing TS types
- notice-bar: Fixed transparent background; --notice-bar-info-color, --notice-bar-warning-color, --notice-bar-error-color

## v2.1.8 (2024-01-06)
### Bug Fixes 🐛
- toast: Fixed API call context error (instance not available)
- dialog: Fixed API call context error (instance not available)

## v2.1.7 (2024-12-27)
### Bug Fixes 🐛
- dialog: Fixed rapid DialogInstance calls (render/destroy); added confirmButtonColor & cancelButtonColor types; removed beforeClose type for component usage
- circle: Fixed size string type; style prop warning
- config-provider: Fixed missing Dialog theme vars
- progress: No use case; component hidden
- notice-bar, custom-keyboard, tree-select: Fixed CSS variable override

### Features ✨
- ESM build and tree-shaking
- @tuya-miniapp/icons ESM and tree-shaking
- index-bar: scrollable defaults to disable Sidebar scroll triggering index change
- dialog: --dialog-cancel-color, --dialog-confirm-color
- notice-bar: --notice-bar-right-icon-color
- stepper: --stepper-container-background-color
- circle: customStyle; style deprecated

## v2.1.6 (2024-12-19)
### Bug Fixes 🐛
- toast: Fixed default width and center
- slider: Fixed page scroll while sliding
- circle: Fixed TS types

## v2.1.5 (2024-12-10)

### Bug Fixes 🐛
- Fixed icon on-demand import (field, steps)

Do not use: `import { Sun } from '@tuya-miniapp/icons'`  
Use: `import Sun from '@tuya-miniapp/icons/dist/svg/Sun'`

## v2.1.4 (2024-11-29)

### Bug Fixes 🐛
- dropdown-menu: Fixed position when expanding upward
- tab: Fixed card mode slider style; nested switch console errors

### Features ✨
- hairline: --hairline-* width/color variables
- cell: --cell-border-color, --cell-border-left-position, --cell-border-right-position

## v2.1.0 (2024-11-21)
### Bug Fixes
- tab: Fixed switch flicker
- action-sheet: Fixed scroll
- calendar: Fixed loop render key; initial NaN

### Features
- tab: inactiveDestroy; style refactor
- nav-bar: round; rightTextClass
- field: interError, subLabel, cardMode, hiddenLabel; refactor
- calendar: dayClassMap
- icon: Delete, DeleteLine

## v2.0.0 (2024-11-12)
### New Components 🎉
- calendar
- tag
- bottom-sheet
- notice-bar

### Features ✨
- field, tab, search, nav-bar, switch, toast, dropdown-menu, button, action-sheet, checkbox, radio, empty: UI aligned & refactor
- picker, tabbar: Optimization & refactor

## v1.2.6 (2024-10-29)
### Bug Fixes 🐛
- grid: Fixed GridItem
- radio: Fixed component
- cell: Fixed component

## v1.2.6 (2024-9-12)
### Bug Fixes 🐛
- picker: Fixed `change` not firing when pickerColumn scrolls to extreme.
