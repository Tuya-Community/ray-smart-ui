# Change Log

## v2.11.0 (2026-2-5)

### Features ✨

- index-bar: Added the ability to customize the style of the right-side index bar, added sidebarFontSize and sidebarLineHeight properties ([pull/150](https://github.com/Tuya-Community/miniapp-smart-ui/pull/150))

### Bug Fixes 🐛

- index-bar: Fixed the flickering issue when touching and scrolling the right-side index bar ([90e290b](https://github.com/Tuya-Community/miniapp-smart-ui/pull/149/commits/90e290b1c807579b83bfdc2e1b460dc39c72bb1d))
- popup: Reduced the default number of render nodes for the component itself ([fb6ab2f](https://github.com/Tuya-Community/miniapp-smart-ui/pull/151/commits/fb6ab2fddbe30694deb350bfdde60d7c5f35f48c)); integrated lazy loading in the Ray layer to prevent rendering child nodes until the popup has been shown at least once, improving performance ([96fc5fc](https://github.com/Tuya-Community/ray-smart-ui/pull/72/commits/96fc5fc1d644fb381983e535f87473e20e82500d))
- action-sheet: Reduced the default number of render nodes for the component itself ([fb6ab2f](https://github.com/Tuya-Community/miniapp-smart-ui/pull/151/commits/fb6ab2fddbe30694deb350bfdde60d7c5f35f48c)); integrated lazy loading in the Ray layer to prevent rendering child nodes until the popup has been shown at least once, improving performance ([fb6ab2f](https://github.com/Tuya-Community/ray-smart-ui/pull/73/commits/ac0e65c472429c80b66f15ca8326ddfc2cce5049))
- bottom-sheet: Reduced the default number of render nodes for the component itself ([fb6ab2f](https://github.com/Tuya-Community/miniapp-smart-ui/pull/151/commits/fb6ab2fddbe30694deb350bfdde60d7c5f35f48c)); integrated lazy loading in the Ray layer to prevent rendering child nodes until the popup has been shown at least once, improving performance ([fb6ab2f](https://github.com/Tuya-Community/ray-smart-ui/pull/73/commits/ac0e65c472429c80b66f15ca8326ddfc2cce5049))
- tab: Fixed the issue with using the important CSS property in the component; fixed display issues for dot and info features ([5de790d](https://github.com/Tuya-Community/miniapp-smart-ui/pull/158/commits/5de790da25e9a3867a0ddc10ce273b4b9fc4e5ef)); fixed the unnecessary positioning animation issue when the initialized default active is not the first one ([6649819](https://github.com/Tuya-Community/miniapp-smart-ui/pull/159/commits/66498199ecd0873de387fe8e826b9ffacf02ffb8))


## v2.10.0 (2026-1-13)

### Features ✨
- dialog: Added onInput callback event; fixed the issue where the input box could not display when value was undefined in input mode ([pull/143](https://github.com/Tuya-Community/miniapp-smart-ui/pull/143))
- picker: Added unitGap property to set the gap between the unit and selection columns ([pull/144](https://github.com/Tuya-Community/miniapp-smart-ui/pull/144))
- battery: Aligned with the new UED design, restructured style layout, changed default size value to 24 ([pull/134](https://github.com/Tuya-Community/miniapp-smart-ui/pull/134), [pull/147](https://github.com/Tuya-Community/miniapp-smart-ui/pull/147))

### Bug Fixes  🐛
- dialog: Fixed the default value of emptyDisabled to false, modified the logic for disabling the submit button ([5c88532](https://github.com/Tuya-Community/miniapp-smart-ui/pull/146/commits/5c885324f3f9e3c691f4d840e8fc4120a2088301))

## v2.9.2 (2025-12-31)

### Bug Fixes  🐛
- Fixed the issue where nativeDisabled property was ineffective on Android ([66adfce](https://github.com/Tuya-Community/miniapp-smart-ui/commit/66adfceebeb9d235c0299e4b5718dec6488e73e7))

## v2.9.1 (2025-12-30)

### Features ✨
- calendar: Added firstDayOfSelectWeek property to support setting the starting date of the week ([pull/136](https://github.com/Tuya-Community/miniapp-smart-ui/pull/136))

### Bug Fixes  🐛
- calendar: Fixed the issue of date jumping in some overseas regions ([pull/63](https://github.com/Tuya-Community/ray-smart-ui/pull/63))

## v2.9.0 (2025-12-23)

### Features ✨
- bottom-sheet: Added lockScroll property to prevent background scrolling ([7eeec64](https://github.com/Tuya-Community/miniapp-smart-ui/pull/131/commits/7eeec64c305d0edfd413a3c34db4e3583a03b19c)); added lockMaxDrag property to prevent maximum distance dragging ([pull/128](https://github.com/Tuya-Community/miniapp-smart-ui/pull/128), [pull/129](https://github.com/Tuya-Community/miniapp-smart-ui/pull/129))
- search: Integrated vibration feedback for iOS ([pull/112](https://github.com/Tuya-Community/miniapp-smart-ui/pull/112))
- field: Integrated vibration feedback for iOS ([pull/112](https://github.com/Tuya-Community/miniapp-smart-ui/pull/112))
- tab: Integrated vibration feedback for iOS ([pull/112](https://github.com/Tuya-Community/miniapp-smart-ui/pull/112))
- tabbar: Integrated vibration feedback for iOS ([pull/112](https://github.com/Tuya-Community/miniapp-smart-ui/pull/112))
- stepper: Integrated vibration feedback for iOS ([pull/112](https://github.com/Tuya-Community/miniapp-smart-ui/pull/112))
- switch: Integrated vibration feedback for iOS ([pull/112](https://github.com/Tuya-Community/miniapp-smart-ui/pull/112))
- toast: Integrated vibration feedback for iOS ([pull/112](https://github.com/Tuya-Community/miniapp-smart-ui/pull/112))
- slider: Integrated vibration feedback for iOS ([7fb416f](https://github.com/Tuya-Community/miniapp-smart-ui/pull/124/commits/7fb416fd10fc267920509b45e27ad9c10841f003))
- index-bar: Integrated vibration feedback for iOS ([pull/110](https://github.com/Tuya-Community/miniapp-smart-ui/pull/110))
- calendar: Integrated vibration feedback for iOS ([pull/109](https://github.com/Tuya-Community/miniapp-smart-ui/pull/109))
- custom-keyboard: Integrated vibration feedback for iOS ([pull/111](https://github.com/Tuya-Community/miniapp-smart-ui/pull/111))

### Bug Fixes  🐛

- dialog: Fixed the issue where the component could not be opened again after the page was destroyed when it was not closed ([b4f7472](https://github.com/Tuya-Community/miniapp-smart-ui/pull/131/commits/b4f74729ff5964597be13aa0b3e1f70a59d91b48))
- config-provider: Reduced the theme file size ([3d55091](https://github.com/Tuya-Community/miniapp-smart-ui/pull/131/commits/3d5509187dd3830449127b68718bdd95243c13cd))
- circle: Removed redundant styles to prevent the circular arc from being incomplete ([c4ae523](https://github.com/Tuya-Community/miniapp-smart-ui/pull/114/commits/c4ae5231522e85d09301bc24801066c6857b60b7))
- picker: Fixed the issue where some columns could not be dragged when in loop mode ([bed9b37](https://github.com/Tuya-Community/miniapp-smart-ui/pull/113/commits/bed9b37f9fc5a885c031de24c6c5c6f526d72fd9))
- nav-bar: Aligned with graffiti UI standards, changed the default sideWidth value from mid to max ([64281c8](https://github.com/Tuya-Community/miniapp-smart-ui/pull/125/commits/64281c830cde83b908320085014f394058b257c1))
- calendar: Aligned with graffiti UI standards, removed --calendar-day-disabled-color, used opacity to implement disabled styles, and fixed the disabled style issue in dark mode ([pull/126](https://github.com/Tuya-Community/miniapp-smart-ui/pull/126))
- slider: Fixed the button border spacing issue when parcel type, fixed inaccuracies in min and max in onChange callback, and fixed the abnormal initial state when the button is hidden ([7fb416f](https://github.com/Tuya-Community/miniapp-smart-ui/pull/124/commits/7fb416fd10fc267920509b45e27ad9c10841f003))

## v2.8.0 (2025-12-11)

### Features ✨

- config-provider: Added theme property to switch themes with one click ([pull/100](https://github.com/Tuya-Community/miniapp-smart-ui/pull/100))
- toast: Added textColor and iconColor properties ([pull/105](https://github.com/Tuya-Community/miniapp-smart-ui/pull/105))
- loading: Added iconColor property ([pull/104](https://github.com/Tuya-Community/miniapp-smart-ui/pull/104))
- circle: Added angleOffset property to set the starting angle offset for half-circle types (`angle` and `angle2`); changed maskColor default value from `#ffffff` to `transparent` ([pull/106](https://github.com/Tuya-Community/miniapp-smart-ui/pull/106))
- cascader: Added --cascader-active-background-color CSS variable ([43922ab](https://github.com/Tuya-Community/miniapp-smart-ui/commit/43922abceaedf1af448147e189517598151dd0a9))
- popover: Added --popover-overlay-color CSS variable ([43922ab](https://github.com/Tuya-Community/miniapp-smart-ui/commit/43922abceaedf1af448147e189517598151dd0a9))

### Bug Fixes  🐛

- loading: Fixed the effect of the color property ([pull/104](https://github.com/Tuya-Community/miniapp-smart-ui/pull/104))
- picker: Fixed the issue where some columns could not be dragged in loop mode ([pull/113](https://github.com/Tuya-Community/miniapp-smart-ui/pull/113))
- datetime-picker: Fixed the issue where January could not be dragged in some cases ([pull/113](https://github.com/Tuya-Community/miniapp-smart-ui/pull/113))
- circle: Fixed the issue where the circular arc was partially hidden due to external box compression ([pull/115](https://github.com/Tuya-Community/miniapp-smart-ui/pull/115))
- notice-bar: Changed the default value of --notice-bar-text-color CSS variable to rgba(0, 0, 0, 0.5) ([43922ab](https://github.com/Tuya-Community/miniapp-smart-ui/commit/43922abceaedf1af448147e189517598151dd0a9))
- switch: Changed the default values of --switch-label-active-color and --switch-label-inactive-color CSS variable to #FFFFFF ([43922ab](https://github.com/Tuya-Community/miniapp-smart-ui/commit/43922abceaedf1af448147e189517598151dd0a9))

## v2.7.3 (2025-11-20)

### Features  ✨

- nav-bar: Aligned with the new UI standards, added sideWidth property; added --nav-bar-side-width-min, --nav-bar-side-width-max CSS variables, and adjusted the default values of --nav-bar-side-width, --nav-bar-text-font-size, and --nav-bar-text-font-weight CSS variables ([pull/96](https://github.com/Tuya-Community/miniapp-smart-ui/pull/96))

### Bug Fixes  🐛
- stepper: Fixed the issue of real-time update when inputting decimals in the input box ([e9cf7a9](https://github.com/Tuya-Community/miniapp-smart-ui/pull/97/commits/e9cf7a9edb6ea2fc93e3a38be54bdb03fd4e0294))

## v2.7.2(2025-11-13)

### Features  ✨

- stepper: Integrated `manrope` numeric font, supported from App version 7.0.5 ([a9ac2ab](https://github.com/Tuya-Community/miniapp-smart-ui/pull/77/commits/a9ac2ab42943c837cda5dba3ddff02d56b00f025))
- count-down: Integrated `manrope` numeric font, supported from App version 7.0.5 ([a9ac2ab](https://github.com/Tuya-Community/miniapp-smart-ui/pull/77/commits/a9ac2ab42943c837cda5dba3ddff02d56b00f025))
- picker: Integrated `manrope` numeric font, supported from App version 7.0.5 ([a9ac2ab](https://github.com/Tuya-Community/miniapp-smart-ui/pull/77/commits/a9ac2ab42943c837cda5dba3ddff02d56b00f025))
- datetime-picker: Integrated `manrope` numeric font, supported from App version 7.0.5 ([a9ac2ab](https://github.com/Tuya-Community/miniapp-smart-ui/pull/77/commits/a9ac2ab42943c837cda5dba3ddff02d56b00f025))
- calendar: Integrated `manrope` numeric font, supported from App version 7.0.5 ([pull/79](https://github.com/Tuya-Community/miniapp-smart-ui/pull/79))
- custom-keyboard: Integrated `manrope` numeric font, supported from App version 7.0.5 ([e8f763d](https://github.com/Tuya-Community/miniapp-smart-ui/pull/77/commits/e8f763d526f635d702a87586535f8b4a854100b1))
- bottom-sheet: Supported drag capability, added draggable, minDragHeight, maxDragHeight, midDragHeight, closeDragHeight properties, and new onDragPosition event ([pull/78](https://github.com/Tuya-Community/miniapp-smart-ui/pull/78))
- nav-bar: Changed --nav-bar-text-padding default value to 16px ([352954e](https://github.com/Tuya-Community/miniapp-smart-ui/commit/352954e16f05b0660369bfc860b7f895dc5f1774))
- icon: Added mute icon, updated more icons ([1ba2ebf](https://github.com/Tuya-Community/miniapp-smart-ui/pull/77/commits/1ba2ebfc12e6af675940c01f2e229eed05cec4ff))

### Bug Fixes  🐛

- icon: Compatibility fix for HarmonyOS icons ([bc7310a](https://github.com/Tuya-Community/miniapp-smart-ui/pull/77/commits/bc7310a99c1bfa4dc5e90a7dad5fb338b0aff465))
- circle: Fixed the issue of initializing width at 100% under flex layout ([8083de9](https://github.com/Tuya-Community/miniapp-smart-ui/pull/77/commits/8083de941d12b9e3158c170841079e76cbf3ecf3))
- stepper: Fixed the issue of automatic line breaks and inability to input decimals, added string checking logic ([4054898](https://github.com/Tuya-Community/miniapp-smart-ui/pull/77/commits/405489889906c8424b76daceaf392c59cd24bf01))
- loading: Fixed the compatibility issue for HarmonyOS ([894d59d](https://github.com/Tuya-Community/miniapp-smart-ui/pull/77/commits/894d59d53f4ba1f5061febdcc61944da0d8e3f1a))
- picker: Fixed the format issue for the onChange event when using a single column ([9800e64](https://github.com/Tuya-Community/miniapp-smart-ui/pull/77/commits/9800e649576136eb102cc61c5192e6a6ffd57ea3))
- slider: Fixed the dragging issue when min is not 0 ([f85fae8](https://github.com/Tuya-Community/miniapp-smart-ui/pull/77/commits/f85fae880c278ca89126e0555eca15497b7abf66))


## v2.7.1(2025-10-28)

### Bug Fixes 🐛

- field: Fixed the issue where modifying input values using the callback inside inputDetail was ineffective after enabling the extraEventParams event enhancement mode ([7fcb0c1](https://github.com/Tuya-Community/miniapp-smart-ui/pull/71/commits/7fcb0c18038f27aa2006e5a9102652eb817046ac))
- tabbar: Fixed the issue where the border property configuration was ineffective ([a8d90a5](https://github.com/Tuya-Community/miniapp-smart-ui/pull/59/commits/a8d90a56832a8254ccfb3763352489a300a3abbb))
- tab: Fixed the issue of inconsistency in the bottom sliding bar animation and text color animation during switching ([4becc32](https://github.com/Tuya-Community/miniapp-smart-ui/pull/60/commits/4becc32e4ecb2032b794301229097fce45e95205))
- dialog: Modified the button style in roundButton mode, fixed the style issue when there is a cancel button, modified the value of CSS variable --dialog--round-button-border-radius ([pull/69](https://github.com/Tuya-Community/miniapp-smart-ui/pull/69))
- picker: Fixed the issue of error when scrolling the list after modifying values during loop mode; fixed the issue of real-time updates for active status ([pull/65](https://github.com/Tuya-Community/miniapp-smart-ui/pull/65))
- circle: Fixed the issue of excessive space on the left and right inside the component ([fbae95e](https://github.com/Tuya-Community/miniapp-smart-ui/pull/70/commits/fbae95ebbc80836cbacd9a0da7a84ec909498cab))
- nav-bar: Fixed the issue where the onClickRight event was ineffective ([d0e1f9f](https://github.com/Tuya-Community/miniapp-smart-ui/pull/62/commits/d0e1f9f9b1a7028517a334299b03a07fe5cf206f))
- popup: Adjusted the default safeAreaInsetBottom of the component to false ([c3c79f2](https://github.com/Tuya-Community/miniapp-smart-ui/pull/61/commits/c3c79f2f0efef6595649b426fb5221cb6df83da9)); fixed the issue where --popup-background-color could not set gradient color ([37a938a](https://github.com/Tuya-Community/miniapp-smart-ui/pull/68/commits/37a938a0780fe64d24a4e8c20810b1e1434e4ee6))


## v2.7.0(2025-10-21)

### Features ✨

- picker: Refactored the picker implementation, increased the 3D visual effect, added loop and fullHeight properties, optimized performance ([pull/48](https://github.com/Tuya-Community/miniapp-smart-ui/pull/48))
- datetime-picker: Added loop scrolling capability ([pull/48](https://github.com/Tuya-Community/miniapp-smart-ui/pull/48))
- nav-bar: Optimized styles, added rightTextColor, rightIconColor, rightIconSize, leftIconColor, background, rightIconClass, leftTextClass properties; added onClickRightIcon and onClickRightText events; added and modified --nav-bar-side-width, --nav-bar-text-padding, --nav-bar-icon-padding, --nav-bar-title-margin, --nav-bar-home-max-width, --nav-bar-left-title-padding, --nav-bar-title-max-width CSS variables; deleted --nav-bar-icon-size, --nav-bar-icon-margin CSS variables; changed the default value of border property to false ([pull/38](https://github.com/Tuya-Community/miniapp-smart-ui/pull/38))
- swipe-cell: Added onTabClose event ([03483f1](https://github.com/Tuya-Community/miniapp-smart-ui/pull/50/commits/03483f198d6503f4f4b760891bc4e598773e337f))
- switch: Added activeText and inactiveText properties; added --switch-label-font-size, --switch-label-active-color, --switch-label-inactive-color, --switch-label-width CSS variables ([pull/47](https://github.com/Tuya-Community/miniapp-smart-ui/pull/47))
- dialog: Added emptyDisabled property to disable submission when input content is empty in input mode ([9dbb29c](https://github.com/Tuya-Community/miniapp-smart-ui/pull/50/commits/9dbb29ca129202bac7622264a1d7f684d5da89ba))

### Bug Fixes 🐛

- image: Changed the default value of showLoading to false ([6090b97](https://github.com/Tuya-Community/miniapp-smart-ui/pull/50/commits/6090b97baea6f1c75bf7be184a5ae8fcc33afa9b))
- loading: Fixed the issue of CSS variable --loading-spinner-color being ineffective ([pull/47](https://github.com/Tuya-Community/miniapp-smart-ui/pull/47))
- popover: Fixed the issue of inability to pop up when clicked continuously ([pull/47](https://github.com/Tuya-Community/miniapp-smart-ui/pull/47))
- stepper: Fixed the issue where the internal value did not match the step when actively inputting from the keyboard ([10e5753](https://github.com/Tuya-Community/miniapp-smart-ui/pull/50/commits/10e5753c8a5fe0ecfe0f463d3d6ab760b95aca67))
- switch: Fixed the issue of vertical centering inside ([a622a42](https://github.com/Tuya-Community/miniapp-smart-ui/pull/50/commits/a622a42504ae33022b91463ecbb93b1f218999df))
- tab: Fixed the issue of color property in card mode ([pull/42](https://github.com/Tuya-Community/miniapp-smart-ui/pull/42))
- notice-bar: Fixed the issue of click in the onBtnClick event ([4250d39](https://github.com/Tuya-Community/miniapp-smart-ui/pull/50/commits/4250d39ec89198f115803acaaf82266553bc9f9c))
- popup: Closed the bottom safe area by default ([3da77ee](https://github.com/Tuya-Community/miniapp-smart-ui/pull/54/commits/3da77eecbc51b014fd06b4871d054ddda9d2a1c7))
- calendar: Closed the bottom safe area by default ([4c91851](https://github.com/Tuya-Community/miniapp-smart-ui/pull/54/commits/4c91851fe674bcb64a19c830a3f1539da8700dd1))
- picker: Fixed the issue of default width not being set in flex layout ([f3f4772](https://github.com/Tuya-Community/miniapp-smart-ui/pull/55/commits/f3f47729fd4c1af0eb617cf56d957c2b389f2d4e)); fixed the issue where unit distance was not controlled by fontStyle property ([4eb02fc](https://github.com/Tuya-Community/miniapp-smart-ui/pull/55/commits/4eb02fca12cb6feab62e8fdfd7d82d27bc52159c))
- datetime-picker: Fixed the issue of default width not being set in flex layout ([f3f4772](https://github.com/Tuya-Community/miniapp-smart-ui/pull/55/commits/f3f47729fd4c1af0eb617cf56d957c2b389f2d4e))
- icon: Updated right, left, down, up icons to align with UI standards ([e1bd07e](https://github.com/Tuya-Community/miniapp-smart-ui/commit/e1bd07ebb2bd411fe82e714b11e603ed68271c9a))


## v2.6.3(2025-09-16)
### Features ✨
- dialog: Added autoClose property, fixed the automatic closing problem of the component ([36ba91e](https://github.com/Tuya-Community/miniapp-smart-ui/pull/37/commits/36ba91ee495b632aae9ede192364a65d8d999a75));
- icon: Supported custom icons, added iconColor and iconSize properties ([11328c5](https://github.com/Tuya-Community/miniapp-smart-ui/pull/37/commits/11328c50d0001f7ca40429c21c27ec796d02455d));

### Bug Fixes 🐛
- action-sheet: Fixed the issue where subname could not stretch the box height ([4df8c64](https://github.com/Tuya-Community/miniapp-smart-ui/pull/37/commits/4df8c64a0412a2c64bd706b72dd6f4f66e46e2d5));
- icon: Fixed the issue where the click event lost the event parameter ([bad5231](https://github.com/Tuya-Community/miniapp-smart-ui/pull/37/commits/bad523192b1e3d02d37f267ec2c7c080115cfdd8));
- field: Fixed the issue of autosizing maximum height scroll in textarea mode ([40fe4bc](https://github.com/Tuya-Community/miniapp-smart-ui/pull/37/commits/40fe4bc1727523fa427c904c4e29d5ff7da032fb));
- cell: Fixed the issue where the last cell's dividing line under cell-group was not hidden ([bea6309](https://github.com/Tuya-Community/miniapp-smart-ui/pull/37/commits/bea6309bdcec3d5495c91f9ed1cc325319523320));


## v2.6.2(2025-08-28)
### Features ✨
- battery: Added color property to directly modify the color ([ff99655](https://github.com/Tuya-Community/miniapp-smart-ui/pull/28/commits/ff996558becf5ebe24b711904bc1ae9e0faecedc));
- cell: Added insetBorderRadius property ([09c60be](https://github.com/Tuya-Community/miniapp-smart-ui/pull/29/commits/09c60bef61e8f353bcab90728c2ca509aaf0b94f))

### Bug Fixes 🐛
- picker: Fixed the issue of unit alignment ([fc12155](https://github.com/Tuya-Community/miniapp-smart-ui/pull/28/commits/fc12155f3883d0147cb328c2123442f147fef330));
- calendar: Fixed the issue where CSS variables --calendar-day-height and --calendar-selected-day-size were ineffective ([a08cebe](https://github.com/Tuya-Community/miniapp-smart-ui/pull/31/commits/a08cebe8ff8a62c8d544214cfbd5c05b3cce8347), [bfebfa3](https://github.com/Tuya-Community/miniapp-smart-ui/pull/31/commits/bfebfa3a26ec28e9a4a485f9ea1fd73189ed0624))
- button: Fixed the issue of missing type for hoverClass parameter ([2789e24](https://github.com/Tuya-Community/ray-smart-ui/pull/18/commits/2789e2494985a10aeb6a440eba07306c07f54ee9))
- Modified the import method for @tuya-miniapp/icons resource ([d4921f1](https://github.com/Tuya-Community/miniapp-smart-ui/pull/28/commits/d4921f1763211cb631bcd11a51f8ac0296691b77))


## v2.6.1(2025-08-12)
### Features ✨
- bottom-sheet: Added showClose property and title slot ([fef37bf](https://github.com/Tuya-Community/miniapp-smart-ui/pull/16/commits/fef37bf51650810a486ca1e0863ffd421d4711f9))
### Bug Fixes 🐛
- nav-bar: Fixed the issue where the text would be too long and not ellipsized when leftTextType was home or title ([97f91f5](https://github.com/Tuya-Community/miniapp-smart-ui/pull/16/commits/97f91f5869860d4cbf8994e11f5a0cffa8ac987e))
- picker: Fixed the issue of unit line breaks ([b8075bd](https://github.com/Tuya-Community/miniapp-smart-ui/pull/16/commits/b8075bd2b48b369db549554bd80c23e5305e9426))
- stepper: Fixed the issue where the component would not display the disabled style when reaching max or min ([58ce5af](https://github.com/Tuya-Community/miniapp-smart-ui/pull/16/commits/58ce5af24c715c9534026fd07121426973578dce)); changed the default value of --stepper-button-disabled-color to _var(--app-B6, #ffffff)_ ([e0e55fa](https://github.com/Tuya-Community/miniapp-smart-ui/pull/16/commits/e0e55fa18f517fafc603a6b9c3035276d6ccaa16)); fixed the issue where setting min or decimalLength would cause the input box to be unable to delete ([7cf1cfe](https://github.com/Tuya-Community/miniapp-smart-ui/pull/16/commits/7cf1cfe9d0e7ac77db1007d902960b83dde45d9e))
- image: Fixed the issue of excessive space above and below the component ([a42f0ad](https://github.com/Tuya-Community/miniapp-smart-ui/pull/16/commits/a42f0ad7e964b0d63de2b5e1dde7aed2efd99b17))

## v2.6.0(2025-07-31)
### Features ✨
- nav-bar: Added --nav-bar-title-max-width CSS variable, changed the default value from `60%` to `calc(100% - 360rpx)` ([af0d83a](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/af0d83ac571e70d9d7b5f934287866c9e37e7f6c))
- bottom-sheet: Added max-height property ([0ed0ea9](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/0ed0ea9d1f32342f8e87a29c6b5927da4026d3fc))
- datetime-picker: Refactored the component to display logic for the 12-hour system, fixed the issue of incorrect time display ([019d181](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/019d1813a18c89af733c43526dbe690e69568f75), [822df05](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/822df0555738199533bbaa44073fda93aefbe01b)); modified the component's dividing line and added --hairline-border-image-color CSS variable ([6381e6f](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/6381e6ffdf61ae21a1ff3943c69a543ecbc1e03c))
- picker: Added --picker-option-selected-font-weight-bold CSS variable ([7b38c33](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/7b38c33437f96f57757cc6c9e014938cd4ba6671)); added hairline-class dividing line style class ([55ed888](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/55ed8885045f34c95b8076c985b64350f0b43c13))
- action-sheet: Added useTitleSlot property, title slot, supports custom double-column selector feature, adjusted component dividing line and margins, safe distance style ([8eea246](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/8eea24657985252ef9dfc023fa9ba4eb33feefda));
- calendar: Adjusted styles, added headerIconColor property, --calendar-header-icon-bg-color, --calendar-header-icon-color, and --calendar-header-title-weight CSS variables ([944b728](https://github.com/Tuya-Community/miniapp-smart-ui/pull/9/commits/944b7281a04c150539ed5da6537db649fe40808c), [0907238](https://github.com/Tuya-Community/miniapp-smart-ui/pull/9/commits/0907238bce8863ae58435ac6767e5eda3c464bb0), [52989f4](https://github.com/Tuya-Community/miniapp-smart-ui/pull/9/commits/52989f4800a28ef354dc3cee14ac2300fc344ffe))
- toast: Adjusted styles, added --toast-min-width CSS variable, deprecated --toast-text-min-width CSS variable ([13a4f93](https://github.com/Tuya-Community/miniapp-smart-ui/pull/9/commits/13a4f93e4bf9f2fb3dfb17e64f85d82430d22706), [f99c3a3](https://github.com/Tuya-Community/miniapp-smart-ui/pull/9/commits/f99c3a30b5d78f655513756ce494b1ec6e259a1f))

### Bug Fixes 🐛
- bottom-sheet: Fixed the issue where the component would scroll unexpectedly after setting the contentHeight property ([175f145](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/175f1455b55ff6018f1586f3ea613ecba230ac3f))
- cascader: Fixed the issue with the option list scrolling ([1ff96ed](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/1ff96ed1ca4d45f3a9a63a90e6239d8ddec76ff6))
- dialog: Fixed the vertical centering issue ([b591451](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/b591451e8a9b9c842ed721f454f20a190188666b)); changed the background color of the popup ([eae43fb](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/eae43fb54a23fa669636e166b149cd9f393fb8ef))
- icon: Fixed the position issue for info messages, adjusted styles ([d556d4d](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/d556d4d648594c73d575aadae3ac859b546fbe05), [1fcd058](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/1fcd05883ef7ea69e533a9bef9a6a26ebfa5e603))
- stepper: Adjusted the size for increment and decrement ([2d37826](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/2d37826977b0977b369b4b5bb7f549f263e10134))
- overlay: Adjusted styles ([319761a](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/319761a88793c178d3f6c0089adb4a6079df29ec))
- picker: Changed the default value of animationTime to 300 ([302919a](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/302919ab414ac70cc2174541c97127bc8e2f5bdc), [f7a4f28](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/f7a4f28b60d31afc7b699100f7cc1e992f621319), [afe87f2](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/afe87f262a69d6733c8ee7eb38cf129220ae333f)); fixed the issue where unit spacing was compressed by external boxes and changed --picker-option-unit-mid-size default value to 4px ([1619172](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/16191721222fe7658d87b0eaf0d8c28d5ecc29a6), [d82a6cf](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/d82a6cff525d26f9094046be27874a0a80f883de)); fixed the issue of list disorder and that some animation times were not controlled by animationTime ([af64c11](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/af64c1182055c9a264cd71058a1c708f93801e73))
- datetime-picker: Fixed the issue where continuous dragging would cause the component to jump and stop ([3f3578c](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/3f3578cc215aef657c02feba2c4f214595db7e49)); fixed the issue of the component's initialization list jiggling ([e1fe931](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/e1fe9313bf5a56841d52db6c62009f6025968194), [c233ac4](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/c233ac47a288d8a648da0db6021ac4929523c1e3));
- circle: Fixed the issue where the round property was not effective ([e862099](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/e8620991d6ad255f461740974db11af99d58a767))
- tab: Changed the selected value type to string ([e22f999](https://github.com/Tuya-Community/miniapp-smart-ui/pull/3/commits/e22f999e6c54a0572f6080cd7744ba1afadc6b6c))

## v2.5.1(2025-07-17)
### Features ✨
- dialog: Added --dialog-confirm-font-weight and --dialog-cancel-font-weight CSS variables
- nav-bar: Added --nav-bar-right-text-color CSS variable
- tabbar: Added upsideDown property to achieve the top-and-bottom reversal of text and icon

### Bug Fixes 🐛
- config-provider: Fixed the missing dialog CSS variable type in components
- datetime-picker: Fixed the incorrect callback type issue in onInput

## v2.5.0(2025-06-26)
### Features ✨
- action-sheet: Added nativeDisabled property
- bottom-sheet: Added nativeDisabled and contentHeight properties; added CSS variable --bottom-sheet-header-padding
- toast: Added nativeDisabled property
- calendar: Added CSS variable --calendar-popup-height; supports custom-class property
- dropdown-menu: Added scrollStyle property to enable scrolling when the dropdown list exceeds the screen
- popover: Added trigger property
- skeleton: Optimized animation effects
- switch: Changed component layout; `active-color` and `inactive-color` now support passing gradient colors, the `--switch-border` CSS variable property has been removed and replaced with the new `--switch-padding` CSS variable

### Bug Fixes 🐛
- bottom-sheet: Fixed the issue where content could not scroll when reaching maximum height; fixed the issue where absolute positioned content at the bottom could not contain the bottom safe distance; fixed the corner issue in round mode borders
- circle: Fixed the issue of abnormal positioning for percent when mode="angle2"
- dialog: Fixed the issue of residual dividing line styles in round-button mode
- popup: Fixed the corner roundness issue in round mode
- toast: Fixed the issue of text not being centered in icon mode; fixed the missing class for text in pure text cases


## v2.4.0(2025-06-10)
### Features ✨
- New dynamic import plugin SmartUIAutoImport modifies the export directory structure, works with ray cli to achieve on-demand import of component resources
- picker: Added --picker-option-unit-mid-size CSS variable
- slider: Supports thumb and bar slots
- switch: Added --switch-node-on-background-color CSS variable

### Bug Fixes 🐛
- circle: Fixed the invalid customStyle property, optimized the drawing blur issue
- toast: Fixed the issue of width custom not stretching
- empty: Fixed the type hint error for imageStyle, titleStyle, and descriptionStyle properties
- notice-bar: Fixed the type hint error for customStyle, rightIconStyle, and leftIconStyle properties

## v2.3.9(2025-05-15)
### Features ✨
- circle: Refactored logic, rewritten in rjs (no longer supports WeChat)
- calendar: Added maxRange, rangePrompt, showRangePrompt, allowSameDay properties

### Bug Fixes 🐛
- circle: Fixed the blur issue
- nav-bar: Fixed the height adaptation issue for different model types, defaulting to the CSS variable --app-device-navbar-height
- picker: Fixed the initial animation stuttering issue, defaulting the initial animation changeAnimation to false, fixed the console disabled error message 

## v2.3.8(2025-05-06)
### Features ✨
- popup: Added nativeDisabled property to disable local gestures during popup display
- dialog: Added nativeDisabled property to disable local gestures during dialog display
- radio: Added preventDefault property to prevent the component's internal UI from updating by default
- datetime-picker: Added the capability to modify the timezone text style when in 12-hour mode; added value data inside onChange callback

### Bug Fixes 🐛
- field: Fixed the style issue when errorMessage is too long
- picker: Fixed the issue where there was no disabled style
- datetime-picker: Fixed the issue of conflicting display errors when the hour was 0 or 24 with maximum and minimum limits


## v2.3.7(2025-04-15)
### Features ✨
- switch: Aligned with the component UI design draft, adjusted the size style
- datetime-picker: Added activeStyle selected style, columnStyles for arbitrary column styles, fontStyles for arbitrary column font styles, animationTime for scroll animation event properties
- picker: Added animationTime for scroll animation event properties

### Bug Fixes 🐛
- action-sheet: Fixed the issue of stuttering during component closing animation
- checkbox: Fixed the issue where clicking the button would cause two modification events when used together with the cell, leading to ineffective selection
- icon: Fixed the issue where color parsing was ineffective when using SVG path mode
- field: Fixed the issue of placeholderStyle property and CSS variable --field-placeholder-text-color settings


## v2.3.5(2025-03-27)
### Features ✨
- dialog: Added --dialog-header-padding and --dialog--round-button-border-radius CSS variables
- picker: Added disabled property to disable columns; added columns.fontStyle property to modify font styles
- tab: Added subtitle and subtitleStyle properties; added --tabs-sub-line-height CSS variable
- tabbar: Added tabbar-item disabled property

### Bug Fixes 🐛
- popover: Fixed the timed close issue; fixed the issue where the arrow background color did not change with the component’s color
- tabbar: Fixed the issue where the activeColor property’s default value would prioritize --tabbar-item-active-color
- tab: Fixed the console error message when onBeforeChange was canceled; fixed the issue of missing wrapClass type
- toast: Fixed the issue where there would be obstructions in the middle when toast was at the bottom and top positions


## v2.3.3(2025-03-18)
### Features ✨
- icon: The name property supports SVG Path mode
- image: Added tintColor property to support image color change

### Bug Fixes 🐛
- image: Fixed the issue of excessive space at the bottom
- switch: Fixed the issue of excessive space at the bottom
- circle: Fixed the rendering size issue
- tab: Fixed the issue where the mask could not cover the sliding block when there were popups in card mode


## v2.3.2(2025-03-07)
### Features ✨
- datetime-picker: Inherits onAnimationStart and onAnimationEnd events from picker

### Bug Fixes 🐛
- picker: Fixed the activeIndex positioning issue
- dropdown-menu: Increased documentation


## v2.3.0(2025-02-28)
### New Components 🎉
- popover: Added bubble prompt group

### Features ✨
- circle: Reconstructed the component using canvas, added mode and round properties to set different arc styles
- picker: Added onAnimationStart and onAnimationEnd properties

### Bug Fixes 🐛
- datetime-picker: Fixed controlled usage issue in 12-hour mode
- slider: Added usage instructions and fixed the issue of ineffective rangeSlider in inActiveColor 
- transition: Fixed the issue of components calling animations frequently
- dialog, toast: Fixed the issue where the components could not be opened, added global unique ID verification

## v2.2.1 (2025-2-21)
### Bug Fixes 🐛
- dialog: Fixed the issue of not being able to get component instances
- toast: Fixed the issue of not being able to get component instances
- calendar: Fixed the display issue when the type property dynamically switches; optimized the range control for year selection


### v2.2.0 (2025-2-13)

### Bug Fixes 🐛
- icon: Fixed the unusual repeat phenomenon
- picker: Fixed the issue of smooth scrolling
- nav-bar: Fixed the issue of the initial top safe distance displacement
- slider: Fixed the vertical value calculation
- stepper: Fixed the issue of internal icon display
- dialog: Fixed the issue of not being able to open the popup when called repeatedly
- Fixed issues with unit testing for ESM