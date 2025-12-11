type CommonThemeVars =
  | 'M1'
  | 'M2'
  | 'M3'
  | 'M4'
  | 'M5'
  | 'B1'
  | 'B2'
  | 'B3'
  | 'B4'
  | 'B5'
  | 'B6'
  | 'B1N1'
  | 'B1N2'
  | 'B1N3'
  | 'B1N4'
  | 'B1N5'
  | 'B1N6'
  | 'B1N7'
  | 'B1N8'
  | 'B1N9'
  | 'B2N1'
  | 'B2N2'
  | 'B2N3'
  | 'B2N4'
  | 'B2N5'
  | 'B2N6'
  | 'B2N7'
  | 'B2N8'
  | 'B2N9'
  | 'B4N1'
  | 'B4N2'
  | 'B4N3'
  | 'B4N4'
  | 'B4N5'
  | 'B4N6'
  | 'B4N7'
  | 'B4N8'
  | 'B4N9'
  | 'B6N1'
  | 'B6N2'
  | 'B6N3'
  | 'B6N4'
  | 'B6N5'
  | 'B6N6'
  | 'B6N7'
  | 'B6N8'
  | 'B6N9'
  | 'borderImage'
  | 'black'
  | 'white'
  | 'gray1'
  | 'gray2'
  | 'gray3'
  | 'gray4'
  | 'gray5'
  | 'gray6'
  | 'gray7'
  | 'gray8'
  | 'red'
  | 'blue'
  | 'orange'
  | 'orangeDark'
  | 'orangeLight'
  | 'green'
  | 'gradientRed'
  | 'gradientOrange'
  | 'textColor'
  | 'activeColor'
  | 'activeOpacity'
  | 'disabledOpacity'
  | 'backgroundColor'
  | 'backgroundColorLight'
  | 'textLinkColor'
  | 'paddingBase'
  | 'paddingMb'
  | 'paddingXs'
  | 'paddingSm'
  | 'paddingMd'
  | 'paddingLg'
  | 'paddingXl'
  | 'fontSizeXs'
  | 'fontSizeSm'
  | 'fontSizeMd'
  | 'fontSizeLg'
  | 'fontTitleLg'
  | 'fontWeightBold'
  | 'fontWeightBolder'
  | 'lineHeightXs'
  | 'lineHeightSm'
  | 'lineHeightMd'
  | 'lineHeightLg'
  | 'baseFontFamily'
  | 'priceIntegerFontFamily'
  | 'animationDurationBase'
  | 'animationDurationFast'
  | 'borderColor'
  | 'borderWidthBase'
  | 'borderRadiusSm'
  | 'borderRadiusMd'
  | 'borderRadiusLg'
  | 'borderRadiusMax'
  | 'goodsActionBackgroundColor'
  | 'goodsActionHeight'
  | 'goodsActionIconWidth'
  | 'goodsActionIconHeight'
  | 'goodsActionIconColor'
  | 'goodsActionIconSize'
  | 'goodsActionIconFontSize'
  | 'goodsActionIconTextColor'
  | 'goodsActionButtonHeight'
  | 'goodsActionButtonLineHeight'
  | 'goodsActionButtonBorderRadius'
  | 'goodsActionButtonWarningColor'
  | 'goodsActionButtonDangerColor'
  | 'goodsActionButtonPlainColor'
  | 'infoSize'
  | 'infoColor'
  | 'infoPadding'
  | 'infoFontSize'
  | 'infoFontWeight'
  | 'infoBorderWidth'
  | 'infoBackgroundColor'
  | 'infoDotColor'
  | 'infoDotSize'
  | 'infoFontFamily'
  | 'stepTextColor'
  | 'stepProcessTextColor'
  | 'stepFontSize'
  | 'stepLineColor'
  | 'stepFinishLineColor'
  | 'stepFinishTextColor'
  | 'stepIconSize'
  | 'stepCircleSize'
  | 'stepCircleColor'
  | 'stepHorizontalTitleFontSize'
  | 'stepsBackgroundColor'
  | 'hairlineTopWidth'
  | 'hairlineLeftWidth'
  | 'hairlineRightWidth'
  | 'hairlineBottomWidth'
  | 'hairlineSurroundWidth'
  | 'hairlineTopBottomWidth'
  | 'hairlineColor'
  | 'hairlineBorderImageColor';

type OverlayThemeVars = 'overlay' | 'overlayBackgroundColor';

type DialogThemeVars =
  | 'dialogBg'
  | 'dialogWidth'
  | 'dialogSmallScreenWidth'
  | 'dialogFontSize'
  | 'dialogBorderRadius'
  | 'dialogBackgroundColor'
  | 'dialogHeaderFontColor'
  | 'dialogHeaderFontWeight'
  | 'dialogHeaderLineHeight'
  | 'dialogHeaderPaddingTop'
  | 'dialogHeaderPadding'
  | 'dialogHeaderIsolatedPadding'
  | 'dialogMessagePadding'
  | 'dialogMessageFontSize'
  | 'dialogMessageLineHeight'
  | 'dialogConfirmColor'
  | 'dialogCancelColor'
  | 'dialogConfirmFontWeight'
  | 'dialogCancelFontWeight'
  | 'dialogMessageMaxHeight'
  | 'dialogMessageTextColor'
  | 'dialogHasTitleMessageFontSize'
  | 'dialogHasTitleMessageTextColor'
  | 'dialogHasTitleMessagePaddingTop'
  | 'dialogHeaderIconSize'
  | 'dialogInputHeight'
  | 'dialogInputBackgroundColor'
  | 'dialogInputMargin'
  | 'dialogInputPadding'
  | 'dialogInputBorderRadius'
  | 'dialogInputFontSize'
  | 'dialogRoundButtonBorderRadius';

type IconThemeVars = 'iconColor';

type ActionSheetThemeVars =
  | 'actionSheetWidth'
  | 'actionSheetLeft'
  | 'actionSheetMaxHeight'
  | 'actionSheetMargin'
  | 'actionSheetActiveColor'
  | 'actionSheetActiveIconColor'
  | 'actionSheetItemDisabledOpacity'
  | 'actionSheetHeaderBorderColor'
  | 'actionSheetHeaderHeight'
  | 'actionSheetHeaderColor'
  | 'actionSheetHeaderFontSize'
  | 'actionSheetHeaderFontWeight'
  | 'actionSheetDescriptionColor'
  | 'actionSheetDescriptionFontSize'
  | 'actionSheetDescriptionLineHeight'
  | 'actionSheetItemBackground'
  | 'actionSheetItemBorderRadius'
  | 'actionSheetItemIconMargin'
  | 'actionSheetItemIconColor'
  | 'actionSheetItemIconSize'
  | 'actionSheetItemFontSize'
  | 'actionSheetItemFontWeight'
  | 'actionSheetItemLineHeight'
  | 'actionSheetItemTextColor'
  | 'actionSheetSubnameColor'
  | 'actionSheetSubnameFontSize'
  | 'actionSheetSubnameLineHeight'
  | 'actionSheetConfirmTextColor'
  | 'actionSheetConfirmFontWeight'
  | 'actionSheetCancelTextColor'
  | 'actionSheetFooterPaddingTop'
  | 'actionSheetFooterPaddingColor';

type BottomSheetThemeVars =
  | 'bottomSheetWidth'
  | 'bottomSheetMinHeight'
  | 'bottomSheetMaxHeight'
  | 'bottomSheetPadding'
  | 'bottomSheetHeaderPadding'
  | 'bottomSheetIconMargin'
  | 'bottomSheetHeaderHeight'
  | 'bottomSheetHeaderColor'
  | 'bottomSheetHeaderFontSize'
  | 'bottomSheetHeaderFontWeight'
  | 'bottomSheetFontColor'
  | 'bottomSheetDraggerPadding'
  | 'bottomSheetDraggerNodeWidth'
  | 'bottomSheetDraggerNodeHeight'
  | 'bottomSheetDraggerNodeBorderRadius'
  | 'bottomSheetDraggerNodeBackground';

type ButtonThemeVars =
  | 'buttonMiniHeight'
  | 'buttonMiniMinWidth'
  | 'buttonMiniFontSize'
  | 'buttonSmallHeight'
  | 'buttonSmallFontSize'
  | 'buttonSmallMinWidth'
  | 'buttonNormalFontSize'
  | 'buttonLargeHeight'
  | 'buttonDefaultColor'
  | 'buttonDefaultHeight'
  | 'buttonDefaultFontSize'
  | 'buttonDefaultBackgroundColor'
  | 'buttonDefaultBorderColor'
  | 'buttonPrimaryColor'
  | 'buttonPrimaryBackgroundColor'
  | 'buttonPrimaryBorderColor'
  | 'buttonInfoColor'
  | 'buttonInfoBackgroundColor'
  | 'buttonInfoBorderColor'
  | 'buttonDangerColor'
  | 'buttonDangerBackgroundColor'
  | 'buttonDangerBorderColor'
  | 'buttonWarningColor'
  | 'buttonWarningBackgroundColor'
  | 'buttonWarningBorderColor'
  | 'buttonLineHeight'
  | 'buttonBorderWidth'
  | 'buttonBorderRadius'
  | 'buttonRoundBorderRadius'
  | 'buttonPlainBackgroundColor'
  | 'buttonDisabledOpacity'
  | 'buttonFontWeight'
  | 'buttonPrimaryFontWeight';

type CalendarThemeVars =
  | 'calendarBackgroundColor'
  | 'calendarHeaderBoxShadow'
  | 'calendarHeaderTitleHeight'
  | 'calendarHeaderTitleFontSize'
  | 'calendarHeaderTitleWeight'
  | 'calendarHeaderTitleFontColor'
  | 'calendarHeaderSubtitleFontSize'
  | 'calendarWeekdaysHeight'
  | 'calendarWeekdaysFontSize'
  | 'calendarWeekdaysFontColor'
  | 'calendarMonthTitleFontSize'
  | 'calendarMonthMarkColor'
  | 'calendarMonthMarkFontSize'
  | 'calendarDayHeight'
  | 'calendarCellItemFontSize'
  | 'calendarCellItemWidth'
  | 'calendarCellItemHeight'
  | 'calendarCellItemMargin'
  | 'calendarCellItemFontColor'
  | 'calendarCellItemBorderRadius'
  | 'calendarDayFontWeight'
  | 'calendarDaySelectBorderRadius'
  | 'calendarRangeEdgeColor'
  | 'calendarRangeEdgeBackgroundColor'
  | 'calendarRangeMiddleColor'
  | 'calendarRangeMiddleBackgroundOpacity'
  | 'calendarSelectedDaySize'
  | 'calendarSelectedDayColor'
  | 'calendarInfoFontSize'
  | 'calendarInfoLineHeight'
  | 'calendarSelectedDayBackgroundColor'
  | 'calendarDayDisabledColor'
  | 'calendarConfirmButtonHeight'
  | 'calendarConfirmButtonMargin'
  | 'calendarConfirmButtonLineHeight'
  | 'calendarTextColor'
  | 'calendarPopupHeight'
  | 'calendarHeaderSaveColor'
  | 'calendarHeaderIconBgColor'
  | 'calendarHeaderIconColor';

type CellThemeVars =
  | 'cellFontSize'
  | 'cellLineHeight'
  | 'cellVerticalPadding'
  | 'cellHorizontalPadding'
  | 'cellTextColor'
  | 'cellBackgroundColor'
  | 'cellActiveColor'
  | 'cellRequiredColor'
  | 'cellLabelColor'
  | 'cellLabelFontSize'
  | 'cellLabelLineHeight'
  | 'cellLabelMarginTop'
  | 'cellValueColor'
  | 'cellIconSize'
  | 'cellRightIconColor'
  | 'cellBorderColor'
  | 'cellBorderLeftPosition'
  | 'cellBorderRightPosition'
  | 'cellGroupBackgroundColor'
  | 'cellGroupTitleColor'
  | 'cellGroupTitlePadding'
  | 'cellGroupTitleFontSize'
  | 'cellGroupTitleLineHeight'
  | 'cellGroupInsetPadding'
  | 'cellGroupInsetBorderRadius'
  | 'cellGroupInsetTitlePadding';

type CheckboxThemeVars =
  | 'checkboxSize'
  | 'checkboxBorderColor'
  | 'checkboxBorderRadius'
  | 'checkboxTransitionDuration'
  | 'checkboxLabelSize'
  | 'checkboxLabelMargin'
  | 'checkboxLabelColor'
  | 'checkboxCheckedIconColor'
  | 'checkboxDisabledLabelColor'
  | 'checkboxDisabledOpacity';

type CircleThemeVars = 'circleTextColor';

type CollapseThemeVars =
  | 'collapseItemTransitionDuration'
  | 'collapseItemContentPadding'
  | 'collapseItemContentFontSize'
  | 'collapseItemContentLineHeight'
  | 'collapseItemContentTextColor'
  | 'collapseItemContentBackgroundColor'
  | 'collapseItemTitleDisabledColor';

type CountDownThemeVars = 'countDownTextColor' | 'countDownFontSize' | 'countDownLineHeight';

type FieldThemeVars =
  | 'fieldLabelColor'
  | 'fieldInputTextColor'
  | 'fieldInputErrorTextColor'
  | 'fieldPlaceholderTextColor'
  | 'fieldIconSize'
  | 'fieldClearIconSize'
  | 'fieldClearIconColor'
  | 'fieldIconContainerColor'
  | 'fieldErrorMessageColor'
  | 'fieldErrorMessageTextFontSize'
  | 'fieldDisabledOpacity'
  | 'fieldInputTextFontSize'
  | 'fieldLabelFontSize'
  | 'fieldLabelLineHeight'
  | 'fieldSubLabelFontSize'
  | 'fieldSubLabelLineHeight'
  | 'fieldErrorMessageTextLineHeight'
  | 'fieldSubtitleTextColor'
  | 'fieldLeftIconMarginRight'
  | 'fieldLeftBodyPaddingRight'
  | 'fieldCardBorderRadius'
  | 'fieldCardBackground'
  | 'fieldCardWidth'
  | 'fieldCardHeight'
  | 'fieldCardPadding'
  | 'fieldTextareaBackground'
  | 'fieldTextareaBorderRadius'
  | 'fieldTextareaPadding'
  | 'fieldTextareaLimitPaddingBottom'
  | 'fieldTextareaMinHeight'
  | 'fieldWordLimitColor'
  | 'fieldWordLimitFontSize'
  | 'fieldWordLimitLineHeight'
  | 'fieldWordNumFullColor';

type ImageThemeVars =
  | 'imagePlaceholderTextColor'
  | 'imagePlaceholderFontSize'
  | 'imagePlaceholderBackgroundColor'
  | 'imageLoadingIconSize'
  | 'imageLoadingIconColor'
  | 'imageErrorSize';

type LoadingThemeVars =
  | 'loadingTextColor'
  | 'loadingTextFontSize'
  | 'loadingTextLineHeight'
  | 'loadingSpinnerColor'
  | 'loadingSpinnerSize'
  | 'loadingSpinnerAnimationDuration';

type NavBarThemeVars =
  | 'navBarHomeMaxWidth'
  | 'navBarTitleMaxWidth'
  | 'navBarHeight'
  | 'navBarRoundBorderRadius'
  | 'navBarRoundMinHeight'
  | 'navBarBackgroundColor'
  | 'navBarArrowColor'
  | 'navBarIconColor'
  | 'navBarTextColor'
  | 'navBarTextFontSize'
  | 'navBarTitleFontSize'
  | 'navBarTitleFontWeight'
  | 'navBarTitleTextColor'
  | 'navBarRightTextColor'
  | 'navBarHomeFontSize'
  | 'navBarHomeFontWeight'
  | 'navBarHomeTextColor'
  | 'navBarTextFontWeight'
  | 'navBarSideWidth'
  | 'navBarTextPadding'
  | 'navBarIconPadding'
  | 'navBarTitleMargin'
  | 'navBarLeftTitlePadding'
  | 'navBarSideWidthMin'
  | 'navBarSideWidthMax';

type NoticeBarThemeVars =
  | 'noticeBarHeight'
  | 'noticeBarPadding'
  | 'noticeBarWrapablePadding'
  | 'noticeBarFontSize'
  | 'noticeBarTextColor'
  | 'noticeBarLineHeight'
  | 'noticeBarBackgroundColor'
  | 'noticeBarBackgroundWarningColor'
  | 'noticeBarBackgroundErrorColor'
  | 'noticeBarRightIconColor'
  | 'noticeBarInfoColor'
  | 'noticeBarWarningColor'
  | 'noticeBarErrorColor'
  | 'noticeBarIconSize'
  | 'noticeBarBtnColor'
  | 'noticeBarLeftIconMarginRight'
  | 'noticeBarRightIconMarginLeft';

type NotifyThemeVars =
  | 'notifyPadding'
  | 'notifyFontSize'
  | 'notifyLineHeight'
  | 'notifyPrimaryBackgroundColor'
  | 'notifySuccessBackgroundColor'
  | 'notifyDangerBackgroundColor'
  | 'notifyWarningBackgroundColor';

type PickerThemeVars =
  | 'pickerBackgroundColor'
  | 'pickerPadding'
  | 'pickerToolbarHeight'
  | 'pickerTitleFontSize'
  | 'pickerActionPadding'
  | 'pickerActionFontSize'
  | 'pickerConfirmActionColor'
  | 'pickerCancelActionColor'
  | 'pickerOptionFontSize'
  | 'pickerOptionUnitFontSize'
  | 'pickerOptionTextColor'
  | 'pickerOptionUnitTextColor'
  | 'pickerOptionUnitMidSize'
  | 'pickerLoadingIconColor'
  | 'pickerOptionSelectedFontWeightBold'
  | 'pickerLoadingMaskColor'
  | 'pickerOptionDisabledOpacity'
  | 'pickerOptionSelectedTextColor';

type PopupThemeVars =
  | 'popupBackgroundColor'
  | 'popupRoundBorderRadius'
  | 'popupCloseIconSize'
  | 'popupCloseIconColor'
  | 'popupCloseIconMargin'
  | 'popupCloseIconZIndex';

type ProgressThemeVars =
  | 'progressHeight'
  | 'progressBackgroundColor'
  | 'progressPivotPadding'
  | 'progressColor'
  | 'progressPivotFontSize'
  | 'progressPivotLineHeight'
  | 'progressPivotBackgroundColor'
  | 'progressPivotTextColor';

type RadioThemeVars =
  | 'radioSize'
  | 'radioBorderColor'
  | 'radioBorderRadius'
  | 'radioTransitionDuration'
  | 'radioLabelSize'
  | 'radioLabelMargin'
  | 'radioLabelColor'
  | 'radioCheckedIconColor'
  | 'radioDisabledLabelColor'
  | 'radioDisabledOpacity';

type RateThemeVars =
  | 'rateHorizontalPadding'
  | 'rateIconSize'
  | 'rateIconVoidColor'
  | 'rateIconFullColor'
  | 'rateIconDisabledColor'
  | 'rateIconGutter';

type SwitchThemeVars =
  | 'switchWidth'
  | 'switchLabelWidth'
  | 'switchHeight'
  | 'switchNodeSize'
  | 'switchNodeZIndex'
  | 'switchNodeBackgroundColor'
  | 'switchNodeOnBackgroundColor'
  | 'switchNodeBoxShadow'
  | 'switchBackgroundColor'
  | 'switchOnBackgroundColor'
  | 'switchTransitionDuration'
  | 'switchLabelFontSize'
  | 'switchLabelActiveColor'
  | 'switchLabelInactiveColor'
  | 'switchDisabledOpacity'
  | 'switchPadding'
  | 'switchBorder';

type SearchThemeVars =
  | 'searchBackgroundColor'
  | 'searchBodyBackgroundColor'
  | 'searchPadding'
  | 'searchInputHeight'
  | 'searchLabelPadding'
  | 'searchLabelColor'
  | 'searchLabelFontSize'
  | 'searchValueFontSize'
  | 'searchLeftIconColor'
  | 'searchActionPadding'
  | 'searchActionTextColor'
  | 'searchActionFontSize'
  | 'searchSubmitFontSize'
  | 'searchSubmitColor'
  | 'searchBtnHoverColor'
  | 'searchSubmitLineWidth'
  | 'searchSubmitLineHeight'
  | 'searchBtnHoverOpacity';

type SidebarThemeVars =
  | 'sidebarWidth'
  | 'sidebarFontSize'
  | 'sidebarLineHeight'
  | 'sidebarTextColor'
  | 'sidebarDisabledTextColor'
  | 'sidebarPadding'
  | 'sidebarActiveColor'
  | 'sidebarBackgroundColor'
  | 'sidebarSelectedFontWeight'
  | 'sidebarSelectedTextColor'
  | 'sidebarSelectedBorderColor'
  | 'sidebarSelectedBackgroundColor';

type SliderThemeVars =
  | 'sliderActiveBackgroundColor'
  | 'sliderInactiveBackgroundColor'
  | 'sliderDisabledOpacity'
  | 'sliderBarHeight'
  | 'sliderButtonWidth'
  | 'sliderButtonHeight'
  | 'sliderButtonBorderRadius'
  | 'sliderButtonBackgroundColor'
  | 'sliderButtonBoxShadow'
  | 'sliderThumbColor';

type StepperThemeVars =
  | 'stepperContainerBackgroundColor'
  | 'stepperBackgroundBorderRadius'
  | 'stepperPadding'
  | 'stepperActiveColor'
  | 'stepperBackgroundColor'
  | 'stepperButtonIconColor'
  | 'stepperButtonBorder'
  | 'stepperButtonDisabledColor'
  | 'stepperButtonDisabledIconColor'
  | 'stepperButtonRoundThemeColor'
  | 'stepperBtnWidth'
  | 'stepperBtnHeight'
  | 'stepperInputWidth'
  | 'stepperInputHeight'
  | 'stepperInputFontSize'
  | 'stepperInputLineHeight'
  | 'stepperInputTextColor'
  | 'stepperInputDisabledTextColor'
  | 'stepperBorderRadius'
  | 'stepperButtonIconFontSize';

type TabbarThemeVars =
  | 'tabbarHeight'
  | 'tabbarBackgroundColor'
  | 'tabbarBorderColor'
  | 'tabbarItemFontSize'
  | 'tabbarItemDisabledOpacity'
  | 'tabbarItemTextColor'
  | 'tabbarItemActiveColor'
  | 'tabbarItemLineHeight'
  | 'tabbarItemIconSize'
  | 'tabbarItemMarginBottom'
  | 'tabbarItemInfoMarginTop';

type TabThemeVars =
  | 'tabPanelBackgroundColor'
  | 'tabPanelTextColor'
  | 'tabTextColor'
  | 'tabActiveTextColor'
  | 'tabDisabledTextColor'
  | 'tabFontSize'
  | 'tabsCardBackgroundColor'
  | 'tabsBackgroundColor'
  | 'tabsDefaultColor'
  | 'tabsLineHeight'
  | 'tabsSubLineHeight'
  | 'tabsBottomBarHeight'
  | 'tabsBottomBarColor'
  | 'tabsCardTextColor'
  | 'tabsCardTextActiveColor'
  | 'tabsCardHeight'
  | 'tabsCardBorderRadius'
  | 'tabsCardActiveBorderRadius'
  | 'tabsCardActiveBackgroundColor'
  | 'tabsCardActiveTop'
  | 'tabsCardActiveLeft'
  | 'tabsCardPadding';

type TagThemeVars =
  | 'tagPadding'
  | 'tagTextColor'
  | 'tagBorderRadius'
  | 'tagLineHeight'
  | 'tagMediumLineHeight'
  | 'tagLargeLineHeight'
  | 'tagFontSize'
  | 'tagMediumFontSize'
  | 'tagLargeFontSize'
  | 'tagRoundBorderRadius'
  | 'tagDangerColor'
  | 'tagPrimaryColor'
  | 'tagSuccessColor'
  | 'tagWarningColor'
  | 'tagDefaultColor'
  | 'tagPlainBackgroundColor';

type ToastThemeVars =
  | 'toastMinWidth'
  | 'toastMaxWidth'
  | 'toastFontSize'
  | 'toastTextColor'
  | 'toastLineHeight'
  | 'toastBorderRadius'
  | 'toastBackgroundColor'
  | 'toastIconSize'
  | 'toastTextMinWidth'
  | 'toastTextPadding'
  | 'toastDefaultPadding'
  | 'toastDefaultWidth'
  | 'toastDefaultMinHeight';

type GridThemeVars =
  | 'gridItemContentPadding'
  | 'gridItemContentBackgroundColor'
  | 'gridItemContentActiveColor'
  | 'gridItemIconSize'
  | 'gridItemTextColor'
  | 'gridItemTextFontSize';

type DividerThemeVars =
  | 'dividerMargin'
  | 'dividerTextColor'
  | 'dividerFontSize'
  | 'dividerLineHeight'
  | 'dividerBorderColor'
  | 'dividerContentPadding'
  | 'dividerContentLeftWidth'
  | 'dividerContentRightWidth';

type EmptyThemeVars =
  | 'emptyImageHeight'
  | 'emptyImageWidth'
  | 'emptyTitleColor'
  | 'emptyTitleFontWeight'
  | 'emptyTitleFontSize'
  | 'emptyTitleLineHeight'
  | 'emptyTitleMarginTop'
  | 'emptyDescriptionColor'
  | 'emptyDescriptionFontSize'
  | 'emptyDescriptionFontWeight'
  | 'emptyDescriptionLineHeight'
  | 'emptyDescriptionMarginTop'
  | 'emptyBottomMarginTop';

type TreeSelectThemeVars =
  | 'treeSelectFontColor'
  | 'treeSelectFontSize'
  | 'treeSelectNavBackgroundColor'
  | 'treeSelectContentBackgroundColor'
  | 'treeSelectNavItemPadding'
  | 'treeSelectItemHeight'
  | 'treeSelectItemActiveColor'
  | 'treeSelectItemDisabledColor';

type DropdownMenuThemeVars =
  | 'dropdownMenuHeight'
  | 'dropdownMenuBackgroundColor'
  | 'dropdownMenuTitleFontSize'
  | 'dropdownMenuTitleTriangleSize'
  | 'dropdownMenuTitleTriangleMarginLeft'
  | 'dropdownMenuItemTitleFontSize'
  | 'dropdownMenuItemTitleFontWeight'
  | 'dropdownMenuItemTitleLineHeight'
  | 'dropdownMenuItemLineColor'
  | 'dropdownMenuItemFirstLineColor'
  | 'dropdownMenuItemLineWidth'
  | 'dropdownMenuItemIconFontSize'
  | 'dropdownMenuItemTitleActiveFontWeight'
  | 'dropdownMenuTitleTextColor'
  | 'dropdownMenuTitleActiveTextColor'
  | 'dropdownMenuTitleDisabledTextColor'
  | 'dropdownMenuTitlePadding'
  | 'dropdownMenuTitleLineHeight'
  | 'dropdownMenuOptionActiveColor';

type IndexAnchorThemeVars =
  | 'indexAnchorPadding'
  | 'indexAnchorTextColor'
  | 'indexAnchorFontWeight'
  | 'indexAnchorFontSize'
  | 'indexAnchorLineHeight'
  | 'indexAnchorBackgroundColor'
  | 'indexAnchorActiveBackgroundColor'
  | 'indexAnchorActiveTextColor';

type IndexBarThemeVars = 'indexBarIndexFontSize' | 'indexBarIndexLineHeight';

type SkeletonThemeVars =
  | 'skeletonPadding'
  | 'skeletonRowHeight'
  | 'skeletonRowBackgroundColor'
  | 'skeletonRowMarginTop'
  | 'skeletonAvatarBackgroundColor'
  | 'skeletonAnimationDuration';

type CascaderThemeVars =
  | 'cascaderHeaderHeight'
  | 'cascaderHeaderPadding'
  | 'cascaderTitleFontSize'
  | 'cascaderTitleLineHeight'
  | 'cascaderCloseIconSize'
  | 'cascaderCloseIconColor'
  | 'cascaderSelectedIconSize'
  | 'cascaderTabsHeight'
  | 'cascaderActiveColor'
  | 'cascaderActiveBackgroundColor'
  | 'cascaderOptionsHeight'
  | 'cascaderOptionDisabledColor'
  | 'cascaderTabColor'
  | 'cascaderUnselectedTabColor'
  | 'cascaderTabInactiveColor'
  | 'cascaderTextColor';

type CustomKeyboardThemeVars =
  | 'customKeyboardBgColor'
  | 'customKeyboardTextColor'
  | 'customKeyboardBorderColor'
  | 'customKeyboardPlaceholderColor'
  | 'customKeyboardPopupBgColor'
  | 'customKeyboardPopupItemColor'
  | 'customKeyboardPopupConfirmColor'
  | 'customKeyboardPopupTextColor'
  | 'customKeyboardPopupHoverColor';

type PopoverThemeVars =
  | 'popoverBackgroundColor'
  | 'popoverBoxShadow'
  | 'popoverPadding'
  | 'popoverBorderRadius'
  | 'popoverOverlayColor';

/**
 * 主题变量
 */
export type ThemeVars = Record<
  | CommonThemeVars
  | OverlayThemeVars
  | DialogThemeVars
  | IconThemeVars
  | ActionSheetThemeVars
  | BottomSheetThemeVars
  | ButtonThemeVars
  | CalendarThemeVars
  | CellThemeVars
  | CheckboxThemeVars
  | CircleThemeVars
  | CollapseThemeVars
  | CountDownThemeVars
  | FieldThemeVars
  | ImageThemeVars
  | LoadingThemeVars
  | NavBarThemeVars
  | NoticeBarThemeVars
  | NotifyThemeVars
  | PickerThemeVars
  | PopupThemeVars
  | ProgressThemeVars
  | RadioThemeVars
  | RateThemeVars
  | SwitchThemeVars
  | SearchThemeVars
  | SidebarThemeVars
  | SliderThemeVars
  | StepperThemeVars
  | TabbarThemeVars
  | TabThemeVars
  | TagThemeVars
  | ToastThemeVars
  | GridThemeVars
  | DividerThemeVars
  | EmptyThemeVars
  | TreeSelectThemeVars
  | DropdownMenuThemeVars
  | IndexAnchorThemeVars
  | IndexBarThemeVars
  | SkeletonThemeVars
  | CascaderThemeVars
  | CustomKeyboardThemeVars
  | PopoverThemeVars,
  string
>;
