---
category: Guide
---

# Theme specification

Introduction to the theme specifications of the MiniApp, here is a standard CSS variable and component correspondence in the SmartUI component library. When using the SmartUI component library, if you want to modify the global CSS variable, please refer to the following description document.

### Builtin theme variable

CSS variables of the underlying applet component, such as CSS variables such as `<picker/>`, `checkbox/>`.

1. Bright color theme

```css
:root {
  /* Global text color, input text color */
  --app-native-text-color: rgba(0, 0, 0, 0.9); 
  /* Input, Textarea component Placeholder text color */
  --app-native-gray-text-color: rgba(0, 0, 0, 0.3);
  /* progress Component background color */
  --app-native-progress-bar-bg-color: rgba(0, 0, 0, 0.04);
  /* slider Component background color */
  --app-native-slider-bg-color: rgba(0, 0, 0, 0.2);
  /* slider Slip shadow style */
  --app-native-slider-shadow-color: rgba(0, 0, 0, 0.2);
  /* Button, Progress components text color, Progress internal sliding background color */
  --app-native-btn-color: #007aff;
  /* button Component background color */
  --app-native-btn-bg-color: #ffffff;
  /* button Background color when disabled */
  --app-native-btn-default-border-color: rgba(0, 0, 0, 0.2);
  /* The color of the button default text */
  --app-native-btn-default-color: rgba(0, 0, 0, 0.5);
  /* switch Component background color */
  --app-native-switch-bg: rgba(120, 120, 128, 0.16);
  /* Checkbox, Radio's Icon border color */
  --app-native-checkbox-border: rgba(0, 0, 0, 0.2);
  /* Checkbox, Radio, Switch's background and frame color when disabled */
  --app-native-checkbox-bg: rgba(0, 0, 0, 0.12);
  /* slider Slide background color */
  --app-native-slider-handle-color: #ffffff;
  /* slider Slid */
  --app-native-slider-handle-size: 28px;
  /* slider The distance between the slider distance is generally -slider width/2 */
  --app-native-slider-half-handle-size: -14px;
  /* picker Cancel down and determine the area background color */
  --app-native-picker-bg: #ffffff;
  /* picker The start color of the gradient of the mask background */
  --app-native-picker-linear-start: rgba(255, 255, 255, 0.95);
  /* picker The end of the mask background at the end of the gradient */
  --app-native-picker-linear-end: rgba(255, 255, 255, 0.6);
  /* picker Text color */
  --app-native-picker-text: rgba(0, 0, 0, 0.9);
  /* picker Color of the segmentation line */
  --app-native-picker-border: rgba(0, 0, 0, 0.12);
  /* The main background color, most components are applicable */
  --app-native-primary-color: #007aff;
  /* Type = warn color of the component */
  --app-native-warn-color: #ff4444;
}
```

2. Dark theme

```css
:root[theme='dark'] {
  /* Global text color, input text color */
  --app-native-text-color: rgba(255, 255, 255, 0.9);
  /* Input, Textarea component Placeholder text color */
  --app-native-gray-text-color: rgba(255, 255, 255, 0.3);
  /* progress Component background color */
  --app-native-progress-bar-bg-color: rgba(255, 255, 255, 0.2);
  /* slider Component background color */
  --app-native-slider-bg-color: rgba(255, 255, 255, 0.2);
  /* slider Slip shadow style */
  --app-native-slider-shadow-color: rgba(255, 255, 255, 0.2);
  /* Button, Progress components text color, Progress internal sliding background color */
  --app-native-btn-color: #007aff;
  /* button Component background color */
  --app-native-btn-bg-color: rgba(255, 255, 255, 0.12);
  /* button Background color when disabled */
  --app-native-btn-default-border-color: rgba(255, 255, 255, 0.2);
  /* The color of the button default text */
  --app-native-btn-default-color: rgba(255, 255, 255, 0.5);
  /* switch Component background color */
  --app-native-switch-bg: rgba(120, 120, 128, 0.32);
  /* Checkbox, Radio's Icon border color */
  --app-native-checkbox-border: rgba(255, 255, 255, 0.2);
  /* Checkbox, Radio, Switch's background and frame color when disabled */
  --app-native-checkbox-bg: rgba(0, 0, 0, 0.12);
  /* slider Slide background color */
  --app-native-slider-handle-color: #ffffff;
  /* slider Slid */
  --app-native-slider-handle-size: 28px;
  /* slider The distance between the slider distance is generally -slider width/2 */
  --app-native-slider-half-handle-size: -14px;
  /* picker Cancel down and determine the area background color */
  --app-native-picker-bg: #1f1f1f;
  /* picker The start color of the gradient of the mask background */
  --app-native-picker-linear-start: rgba(31, 31, 31, 0.95);
  /* picker The end of the mask background at the end of the gradient */
  --app-native-picker-linear-end: rgba(31, 31, 31, 0.6);
  /* picker Text color */
  --app-native-picker-text: rgba(255, 255, 255, 0.9);
  /* picker Color of the segmentation line */
  --app-native-picker-border: rgba(255, 255, 255, 0.12);
  /* The main background color, most components are applicable */
  --app-native-primary-color: #007aff;
  /* Type = warn color of the component */
  --app-native-warn-color: #ff4444;
}
```

### Smartui Theme variable

Public variable

```css
// Theme Palette
@M1: var(--app-M1, #3678e3); // Used for buttons, brands reveal
@M2: var(--app-M2, #f04c4c); // Used for strong warning and prompt information
@M3: var(--app-M3, #2dda86); // Used for success, switch, recommendation, etc.
@M4: var(--app-M4, #1989fa); // Used for positive guidance, button text, links, etc.
@M5: var(--app-M5, #ffa000); // Used for light warning, prompt information
@B1: var(--app-B1, #f6f7fb); // Background
@B2: var(--app-B2, #ffffff); // Top navigation bar
@B3: var(--app-B3, #ffffff); // card
@B4: var(--app-B4, #ffffff); // Pop -up
@B5: var(--app-B5, #ffffff); // Bottom navigation bar
@B6: var(--app-B6, #ffffff); // List
@B4-N1: var(--app-B4-N1, rgba(0, 0, 0, 1)); // Popping window N1 font color
@B4-N2: var(--app-B4-N2, rgba(0, 0, 0, 0.7)); // Popping window N2 font color
@B4-N3: var(--app-B4-N3, rgba(0, 0, 0, 0.5)); // Popping window N3 font color
@B4-N4: var(--app-B4-N4, rgba(0, 0, 0, 0.4)); // Popping window N4 font color
@B4-N5: var(--app-B4-N5, rgba(0, 0, 0, 0.3)); // Popp window N5 font color
@B4-N6: var(--app-B4-N6, rgba(0, 0, 0, 0.2)); // Popping window N6 font color
@B4-N7: var(--app-B4-N7, rgba(0, 0, 0, 0.1)); // Popping window N7 font color
@B4-N8: var(--app-B4-N8, rgba(0, 0, 0, 0.4)); // Popp window N8 font color
@B4-N9: var(--app-B4-N9, rgba(0, 0, 0, 0.05)); // Popping window N9 font color
@B5: var(--app-B5, #f6f7fb); // Bottom navigation bar
@B6: var(--app-B6, #fff); // List color
@B6-N1: var(--app-B6-N1, rgba(0, 0, 0, 1)); // List n1 font color
@B6-N2: var(--app-B6-N2, rgba(0, 0, 0, 0.7)); // List N2 font color
@B6-N3: var(--app-B6-N3, rgba(0, 0, 0, 0.5)); // List N3 font color
@B6-N4: var(--app-B6-N4, rgba(0, 0, 0, 0.4)); // List N4 font color
@B6-N5: var(--app-B6-N5, rgba(0, 0, 0, 0.3)); // List N5 font color
@B6-N6: var(--app-B6-N6, rgba(0, 0, 0, 0.2)); // List n6 font color
@B6-N7: var(--app-B6-N7, rgba(0, 0, 0, 0.1)); // List n7 font color
@B6-N8: var(--app-B6-N8, rgba(0, 0, 0, 0.4)); // List N8 font color
@B6-N9: var(--app-B6-N9, rgba(0, 0, 0, 0.05)); // List N9 font color

// Color Palette
@black: #000;
@white: #fff;
@gray-1: #f7f8fa;
@gray-2: #f2f3f5;
@gray-3: #ebedf0;
@gray-4: #dcdee0;
@gray-5: #c8c9cc;
@gray-6: #969799;
@gray-7: #646566;
@gray-8: #323233;
@red: #ee0a24;
@blue: #1989fa;
@orange: #ff976a;
@orange-dark: #ed6a0c;
@orange-light: #fffbe8;
@green: #07c160;

// Gradient Colors
@gradient-red: linear-gradient(to right, #ff6034, #ee0a24);
@gradient-orange: linear-gradient(to right, #ffd01e, #ff8917);

// Component Colors
@text-color: @gray-8;
@icon-color: @B4-N2;
@active-color: @gray-2;
@active-opacity: 0.7;
@disabled-opacity: 0.3;
@background-color: @gray-1;
@background-color-light: #fafafa;
@text-link-color: #576b95;

// Padding
@padding-base: 4px;
@padding-xs: @padding-base * 2;
@padding-sm: @padding-base * 3;
@padding-md: @padding-base * 4;
@padding-lg: @padding-base * 6;
@padding-xl: @padding-base * 8;

// Font
@font-size-xs: 10px;
@font-size-sm: 12px;
@font-size-md: 14px;
@font-size-lg: 16px;
@font-weight-bold: 500;
@font-weight-bolder: 700;
@line-height-xs: 14px;
@line-height-sm: 18px;
@line-height-md: 20px;
@line-height-lg: 22px;
@base-font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
  Helvetica, Segoe UI, Arial, Roboto, 'PingFang SC', 'miui', 'Hiragino Sans GB',
  'Microsoft Yahei', sans-serif;
@price-integer-font-family: Avenir-Heavy, PingFang SC, Helvetica Neue, Arial,
  sans-serif;
```

Component variable attribute

```css

// Animation
@animation-duration-base: 0.3s;
@animation-duration-fast: 0.2s;

// Border
@border-color: @B6-N7;
@border-width-base: 1px;
@border-radius-sm: 2px;
@border-radius-md: 4px;
@border-radius-lg: 10px;
@border-radius-max: 999px;

// ActionSheet
@action-sheet-width: calc(100% - 32px);
@action-sheet-left: 16px; // Generally, it is necessary to cooperate with Action-sheet-width
@action-sheet-max-height: 90%;
@action-sheet-margin: 0 0 16px;
@action-sheet-active-color: @B1;
@action-sheet-item-disabled-opacity: @disabled-opacity;
@action-sheet-header-border-color: @B4-N7;
@action-sheet-header-height: 56px;
@action-sheet-header-color: @B4-N3;
@action-sheet-header-font-size: @font-size-lg;
@action-sheet-header-font-weight: normal;
@action-sheet-description-color: @B4-N3;
@action-sheet-description-font-size: @font-size-md;
@action-sheet-description-line-height: 20px;
@action-sheet-item-background: @B4;
@action-sheet-item-icon-margin: 16px 16px 0 0;
@action-sheet-item-icon-color: @M1;
@action-sheet-item-icon-size: 28px;
@action-sheet-item-font-size: @font-size-lg;
@action-sheet-item-font-weight: normal;
@action-sheet-item-line-height: 24px;
@action-sheet-item-text-color: @B4-N1;
@action-sheet-subname-color: @B4-N3;
@action-sheet-subname-font-size: @font-size-sm;
@action-sheet-subname-line-height: 20px;
@action-sheet-confirm-text-color: @B4-N1;
@action-sheet-confirm-font-weight: @font-weight-bold;
@action-sheet-cancel-text-color: @B4-N3;
@action-sheet-footer-padding-top: @padding-xs;
@action-sheet-footer-padding-color: @B4-N9;

// Button
@button-mini-height: 22px;
@button-mini-min-width: 50px;
@button-mini-font-size: @font-size-xs;
@button-small-height: 30px;
@button-small-font-size: @font-size-sm;
@button-small-min-width: 60px;
@button-normal-font-size: @font-size-md;
@button-large-height: 48px;
@button-default-color: @text-color;
@button-default-height: 48px;
@button-default-font-size: @font-size-lg;
@button-default-background-color: @B3;
@button-default-border-color: @border-color;
@button-primary-color: @white;
@button-primary-background-color: @M3;
@button-primary-border-color: @M3;
@button-info-color: @white;
@button-info-background-color: @M4;
@button-info-border-color: @M4;
@button-danger-color: @white;
@button-danger-background-color: @M2;
@button-danger-border-color: @M2;
@button-warning-color: @white;
@button-warning-background-color: @M5;
@button-warning-border-color: @M5;
@button-line-height: 20px;
@button-border-width: 1px;
@button-border-radius: @border-radius-lg;
@button-round-border-radius: @border-radius-max;
@button-plain-background-color: @white;
@button-disabled-opacity: @disabled-opacity;
@button-font-weight: normal;
@button-primary-font-weight: 600;

// Calendar
@calendar-height: 100%;
@calendar-background-color: @B6;
@calendar-popup-height: 90%;
@calendar-header-box-shadow: 0 2px 10px rgba(125, 126, 128, 0.16);
@calendar-header-title-height: 44px;
@calendar-header-title-font-size: @font-size-lg;
@calendar-header-subtitle-font-size: @font-size-md;
@calendar-weekdays-height: 30px;
@calendar-weekdays-font-size: @font-size-sm;
@calendar-month-title-font-size: @font-size-md;
@calendar-month-mark-color: fade(@gray-4, 60%);
@calendar-month-mark-font-size: 160px;
@calendar-day-height: 64px;
@calendar-day-font-size: @font-size-lg;
@calendar-range-edge-color: @white;
@calendar-range-edge-background-color: @red;
@calendar-range-middle-color: @red;
@calendar-range-middle-background-opacity: 0.1;
@calendar-selected-day-size: 54px;
@calendar-selected-day-color: @white;
@calendar-info-font-size: @font-size-xs;
@calendar-info-line-height: 14px;
@calendar-selected-day-background-color: @red;
@calendar-day-disabled-color: @gray-5;
@calendar-confirm-button-height: 36px;
@calendar-confirm-button-margin: 7px 0;
@calendar-confirm-button-line-height: 34px;

// Cell
@cell-font-size: @font-size-lg;
@cell-line-height: 24px;
@cell-vertical-padding: 16px;
@cell-horizontal-padding: @padding-md;
@cell-text-color: @B6-N1;
@cell-background-color: @B6;
@cell-border-color: @border-color;
@cell-active-color: @B1;
@cell-required-color: @M2;
@cell-label-color: @B6-N3;
@cell-label-font-size: @font-size-md;
@cell-label-line-height: 18px;
@cell-label-margin-top: 3px;
@cell-value-color: @B6-N3;
@cell-icon-size: 24px;
@cell-right-icon-color: @B6-N6;

// CellGroup
@cell-group-background-color: @B6;
@cell-group-title-color: @B6-N3;
@cell-group-title-padding: @padding-md @padding-md @padding-xs;
@cell-group-title-font-size: @font-size-lg;
@cell-group-title-line-height: 16px;
@cell-group-inset-padding: 0 @padding-md;
@cell-group-inset-border-radius: 16px;
@cell-group-inset-title-padding: @padding-md @padding-md @padding-xs @padding-xl;

// Checkbox
@checkbox-size: 20px;
@checkbox-border-color: @gray-5;
@checkbox-transition-duration: 0.2s;
@checkbox-label-margin: 10px;
@checkbox-label-color: @B6-N3;
@checkbox-checked-icon-color: @blue;
@checkbox-disabled-icon-color: @B6-N7;
@checkbox-disabled-label-color: @B6-N7;
@checkbox-disabled-background-color: @border-color;

// Circle
@circle-text-color: @text-color;

// Collapse
@collapse-item-transition-duration: 0.3s;
@collapse-item-content-padding: 15px;
@collapse-item-content-font-size: 13px;
@collapse-item-content-line-height: 1.5;
@collapse-item-content-text-color: @gray-6;
@collapse-item-content-background-color: @B6;
@collapse-item-title-disabled-color: @gray-5;

// CountDown
@count-down-text-color: @B6-N2;
@count-down-font-size: @font-size-md;
@count-down-line-height: 20px;

// Dialog
@dialog-width: 311px;
@dialog-small-screen-width: 90%;
@dialog-font-size: @font-size-lg;
@dialog-border-radius: 16px;
@dialog-background-color: @B4;
@dialog-header-font-color: @B4-N1;
@dialog-header-font-weight: 400;
@dialog-header-line-height: 24px;
@dialog-header-padding-top: @padding-lg;
@dialog-header-isolated-padding: @padding-lg 0;
@dialog-message-padding: @padding-lg;
@dialog-message-font-size: @font-size-lg;
@dialog-message-line-height: 20px;
@dialog-message-max-height: 60vh;
@dialog-message-text-color: @B4-N1;
@dialog-has-title-message-font-size: @font-size-md;
@dialog-has-title-message-text-color: @B4-N3;
@dialog-has-title-message-padding-top: @padding-xs;
// @dialog-header-icon-color: @M2;
@dialog-header-icon-size: 39px;
@dialog-input-height: 40px;
@dialog-input-background-color: @B4-N9;
@dialog-input-margin: 0 16px 24px;
@dialog-input-padding: 0 10px;
@dialog-input-border-radius: 10px;
@dialog-input-font-size: 14px;

// Field
@field-label-color: @gray-7;
@field-input-text-color: @text-color;
@field-input-error-text-color: @red;
@field-input-disabled-text-color: @gray-5;
@field-placeholder-text-color: @gray-5;
@field-icon-size: 16px;
@field-clear-icon-size: 16px;
@field-clear-icon-color: @gray-5;
@field-icon-container-color: @gray-6;
@field-error-message-color: @red;
@field-error-message-text-font-size: @font-size-sm;
@field-text-area-min-height: 18px;
@field-word-limit-color: @gray-7;
@field-word-limit-font-size: @font-size-sm;
@field-word-limit-line-height: 16px;
@field-word-num-full-color: @red;
@field-disabled-text-color: @gray-5;

// GoodsAction
@goods-action-background-color: @white;
@goods-action-height: 50px;
@goods-action-icon-width: 48px;
@goods-action-icon-height: @goods-action-height;
@goods-action-icon-color: @text-color;
@goods-action-icon-size: 18px;
@goods-action-icon-font-size: @font-size-xs;
@goods-action-icon-text-color: @gray-7;
@goods-action-button-height: 40px;
@goods-action-button-line-height: @button-line-height;
@goods-action-button-border-radius: @border-radius-max;
@goods-action-button-warning-color: @gradient-orange;
@goods-action-button-danger-color: @gradient-red;
@goods-action-button-plain-color: @white;

// Image
@image-placeholder-text-color: @gray-6;
@image-placeholder-font-size: @font-size-md;
@image-placeholder-background-color: @background-color;
@image-loading-icon-size: 32px;
@image-loading-icon-color: @gray-4;
@image-error-icon-size: 32px;
@image-error-icon-color: @gray-4;

// Info
@info-size: 12px;
@info-color: @white;
@info-padding: 0 4px;
@info-font-size: 11px;
@info-font-weight: 600;
@info-border-width: 0;
@info-background-color: @M2;
@info-dot-color: @M2;
@info-dot-size: 8px;
@info-font-family: -apple-system-font, PingFang SC, Helvetica Neue, Arial,
  sans-serif;

// Loading
@loading-text-color: @gray-6;
@loading-text-font-size: @font-size-md;
@loading-text-line-height: 20px;
@loading-spinner-color: @gray-5;
@loading-spinner-size: 30px;
@loading-spinner-animation-duration: 0.8s;

// NavBar
@nav-bar-height: 46px;
@nav-bar-background-color: @B2;
@nav-bar-arrow-size: 16px;
@nav-bar-icon-color: @B6-N1;
@nav-bar-text-color: @B6-N1;
@nav-bar-title-font-size: @font-size-lg;
@nav-bar-title-text-color: @B6-N1;

// NoticeBar
@notice-bar-height: 40px;
@notice-bar-padding: 0 @padding-md;
@notice-bar-wrapable-padding: @padding-xs @padding-md;
@notice-bar-font-size: @font-size-md;
@notice-bar-text-color: @B6-N3;
@notice-bar-line-height: 24px;
@notice-bar-background-color: @orange-light;
@notice-bar-icon-size: 16px;
@notice-bar-icon-min-width: 22px;

// Notify
@notify-padding: 6px 15px;
@notify-font-size: 14px;
@notify-line-height: 20px;
@notify-primary-background-color: @blue;
@notify-success-background-color: @green;
@notify-danger-background-color: @red;
@notify-warning-background-color: @orange;

// Overlay
@overlay-background-color: rgba(0, 0, 0, 0.7);

// Picker
@picker-background-color: @B4;
@picker-padding: @padding-md;
@picker-toolbar-height: 44px;
@picker-title-font-size: @font-size-lg;
@picker-action-padding: 0 @padding-md;
@picker-action-font-size: @font-size-md;
@picker-confirm-action-color: @text-link-color;
@picker-cancel-action-color: @gray-6;
@picker-option-font-size: @font-size-lg;
@picker-option-unit-font-size: @font-size-sm;
@picker-option-text-color: @B6-N3;
@picker-option-unit-text-color: @B6-N4;
@picker-loading-icon-color: @blue;
@picker-loading-mask-color: @picker-background-color;
@picker-option-disabled-opacity: 0.3;
@picker-option-selected-text-color: @B6-N1;

// Popup
@popup-background-color: @B4;
@popup-round-border-radius: 16px;
@popup-close-icon-size: 24px;
@popup-close-icon-color: @gray-6;
@popup-close-icon-margin: 12px;
@popup-close-icon-z-index: 1;

// Progress
@progress-height: 4px;
@progress-background-color: @gray-3;
@progress-pivot-padding: 0 5px;
@progress-color: @blue;
@progress-pivot-font-size: @font-size-xs;
@progress-pivot-line-height: 1.6;
@progress-pivot-background-color: @blue;
@progress-pivot-text-color: @white;

// Radio
@radio-size: 20px;
@radio-border-color: @gray-5;
@radio-transition-duration: 0.2s;
@radio-label-margin: 10px;
@radio-label-color: @B6-N1;
@radio-checked-icon-color: @M4;
@radio-disabled-icon-color: @B6-N5;
@radio-disabled-label-color: @B6-N5;
@radio-disabled-background-color: @B6-N6;

// Rate
@rate-horizontal-padding: 2px;
@rate-icon-size: 20px;
@rate-icon-void-color: @gray-5;
@rate-icon-full-color: @red;
@rate-icon-disabled-color: @gray-5;
@rate-icon-gutter: @padding-base;

// Switch width height必须使用em单位，不能用px，switch内部宽高为计算得出
@switch-width: 1.667em;
@switch-height: 1em;
@switch-node-size: 1em;
@switch-node-z-index: 1;
@switch-node-background-color: @white;
@switch-node-box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 0.05),
  0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 3px 3px 0 rgba(0, 0, 0, 0.05);
@switch-background-color: @B4-N6;
@switch-on-background-color: @blue;
@switch-transition-duration: 0.3s;
@switch-disabled-opacity: 0.4;
@switch-border: 1px solid rgba(0, 0, 0, 0.1);

// Search
@search-background-color: @gray-1;
@search-padding: 10px @padding-sm;
@search-input-height: 34px;
@search-label-padding: 0 5px;
@search-label-color: @text-color;
@search-label-font-size: @font-size-md;
@search-left-icon-color: @gray-6;
@search-action-padding: 0 @padding-xs;
@search-action-text-color: @text-color;
@search-action-font-size: @font-size-md;

// Sidebar
@sidebar-width: 80px;

// SidebarItem
@sidebar-font-size: @font-size-md;
@sidebar-line-height: 20px;
@sidebar-text-color: @B6-N1;
@sidebar-disabled-text-color: @B6-N5;
@sidebar-padding: 20px @padding-sm 20px @padding-xs;
@sidebar-active-color: @B6;
@sidebar-background-color: @B1;
@sidebar-selected-font-weight: @font-weight-bold;
@sidebar-selected-text-color: @B6-N1;
@sidebar-selected-border-color: @red;
@sidebar-selected-background-color: @B6;

// Slider
@slider-active-background-color: @blue;
@slider-inactive-background-color: @gray-3;
@slider-disabled-opacity: @disabled-opacity;
@slider-bar-height: 2px;
@slider-button-width: 24px;
@slider-button-height: 24px;
@slider-button-border-radius: 50%;
@slider-button-background-color: @white;
@slider-button-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
@slider-thumb-color: @B3;

// Step
@step-text-color: @gray-6;
@step-process-text-color: @text-color;
@step-font-size: @font-size-md;
@step-line-color: @border-color;
@step-finish-line-color: @green;
@step-finish-text-color: @text-color;
@step-icon-size: 12px;
@step-circle-size: 5px;
@step-circle-color: @gray-6;
@step-horizontal-title-font-size: @font-size-sm;

// Steps
@steps-background-color: @B3;

// Stepper
@stepper-background-border-radius: @border-radius-lg;
@stepper-padding: 2px;
@stepper-active-color: #e8e8e8;
@stepper-background-color: @B6;
@stepper-button-icon-color: @B6-N3;
@stepper-button-disabled-color: none;
@stepper-button-disabled-icon-color: @B6-N7;
@stepper-button-round-theme-color: @red;
@stepper-btn-width: 44px;
@stepper-btn-height: 28px;
@stepper-input-width: 50px;
@stepper-input-height: 28px;
@stepper-input-font-size: @font-size-lg;
@stepper-input-line-height: normal;
@stepper-input-text-color: @B6-N3;
@stepper-input-disabled-text-color: @B6-N7;
// @stepper-input-disabled-background-color: @active-color;
@stepper-border-radius: 8px;

// Tabbar
@tabbar-height: 55px;
@tabbar-background-color: @B5;
@tabbar-border-color: @B6-N7;

// TabbarItem
@tabbar-item-font-size: @font-size-sm;
@tabbar-item-text-color: @B6-N5;
@tabbar-item-active-color: @M1;
@tabbar-item-line-height: 1;
@tabbar-item-icon-size: 22px;
@tabbar-item-margin-bottom: 4px;

// Tab
@tab-text-color: @B6-N3;
@tab-active-text-color: @B6-N1;
@tab-disabled-text-color: @B6-N7;
@tab-font-size: 13px;

// Tabs
@tabs-background-color: @B3;
@tabs-card-text-color: @B6-N3;
@tabs-card-text-active-color: @B6-N1;
@tabs-card-border-radius: 8px;
@tabs-card-active-background-color: @B3;
@tabs-default-color: @M4;
@tabs-line-height: 32px;
@tabs-card-height: 30px;
@tabs-nav-background-color: @white;
@tabs-bottom-bar-height: 3px;
@tabs-bottom-bar-color: @tabs-default-color;

// Tag
@tag-padding: 0 @padding-base;
@tag-text-color: @white;
@tag-font-size: @font-size-sm;
@tag-border-radius: 2px;
@tag-line-height: 16px;
@tag-medium-padding: 2px 6px;
@tag-large-padding: @padding-base @padding-xs;
@tag-large-border-radius: @border-radius-md;
@tag-large-font-size: @font-size-md;
@tag-round-border-radius: @border-radius-max;
@tag-danger-color: @red;
@tag-primary-color: @blue;
@tag-success-color: @green;
@tag-warning-color: @orange;
@tag-default-color: @gray-6;
@tag-plain-background-color: @white;

// Toast
@toast-max-width: 70%;
@toast-font-size: 14px;
@toast-text-color: @white;
@toast-line-height: 20px;
@toast-border-radius: @border-radius-lg;
@toast-background-color: fade(@black, 70%);
@toast-icon-size: 36px;
@toast-text-min-width: 96px;
@toast-text-padding: @padding-xs @padding-sm;
@toast-default-padding: @padding-md;
@toast-default-width: 88px;
@toast-default-min-height: 88px;

// GridItem
@grid-item-content-padding: @padding-md @padding-xs;
@grid-item-content-background-color: @B3;
@grid-item-content-active-color: @active-color;
@grid-item-icon-size: 26px;
@grid-item-text-color: @B6-N2;
@grid-item-text-font-size: @font-size-sm;

// Divider
@divider-margin: @padding-md 0;
@divider-text-color: @gray-6;
@divider-font-size: @font-size-md;
@divider-line-height: 24px;
@divider-border-color: @border-color;
@divider-content-padding: @padding-md;
@divider-content-left-width: 10%;
@divider-content-right-width: 10%;

// Empty
@empty-padding: @padding-xl 0;
@empty-image-size: 160px;
@empty-description-margin-top: @padding-md;
@empty-description-padding: 0 60px;
@empty-description-color: @gray-6;
@empty-description-font-size: 14px;
@empty-description-line-height: 20px;
@empty-bottom-margin-top: 24px;

// TreeSelect
@tree-select-font-color: @B6-N1;
@tree-select-font-size: @font-size-md;
@tree-select-nav-background-color: @B3;
@tree-select-content-background-color: @B3;
@tree-select-nav-item-padding: @padding-sm @padding-xs @padding-sm @padding-sm;
@tree-select-item-height: 44px;
@tree-select-item-active-color: @red;
@tree-select-item-disabled-color: @B6-N4;

// DropdownMenu
@dropdown-menu-height: 50px;
@dropdown-menu-background-color: @B3;
@dropdown-menu-title-font-size: 15px;
@dropdown-menu-title-text-color: @B6-N1;
@dropdown-menu-title-active-text-color: @M1;
@dropdown-menu-title-disabled-text-color: @B6-N4;
@dropdown-menu-title-padding: 0 @padding-lg 0 @padding-xs;
@dropdown-menu-title-line-height: 18px;
@dropdown-menu-option-active-color: @M1;
@dropdown-menu-box-shadow: 0 2px 12px @B6-N6;

// IndexAnchor
@index-anchor-padding: 0 @padding-md;
@index-anchor-text-color: @B6-N1;
@index-anchor-font-weight: 500;
@index-anchor-font-size: @font-size-md;
@index-anchor-line-height: 32px;
@index-anchor-background-color: transparent;
@index-anchor-active-background-color: @B3;
@index-anchor-active-text-color: @M1;

// IndexBar
@index-bar-index-font-size: @font-size-xs;
@index-bar-index-line-height: 14px;

// skeleton
@skeleton-padding: 0 @padding-md;
@skeleton-row-height: 16px;
@skeleton-row-background-color: @B3;
@skeleton-row-margin-top: @padding-sm;
@skeleton-avatar-background-color: @B3;
@skeleton-animation-duration: 1.2s;

// Cascader
@cascader-header-height: 48px;
@cascader-header-padding: 0 16px;
@cascader-title-font-size: 16px;
@cascader-title-line-height: 20px;
@cascader-close-icon-size: 22px;
@cascader-close-icon-color: #c8c9cc;
@cascader-selected-icon-size: 18px;
@cascader-tabs-height: 48px;
@cascader-active-color: @blue;
@cascader-options-height: 384px;
@cascader-option-disabled-color: #c8c9cc;
@cascader-tab-color: #323233;
@cascader-unselected-tab-color: #969799;

// CustomKeyboard
@custom-keyboard-bg-color: @B6;
@custom-keyboard-text-color: @B6-N2;
@custom-keyboard-border-color: @B6-N7;
@custom-keyboard-placeholder-color: @B6-N6;
@custom-keyboard-popup-bg-color: @B6-N6;
@custom-keyboard-popup-item-color: @B6;
@custom-keyboard-popup-confirm-color: @M3;
@custom-keyboard-popup-text-color: @B6-N2;
@custom-keyboard-popup-hover-color: @B6-N7;
```