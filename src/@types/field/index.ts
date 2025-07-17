import { TouchPositionDetail, SmartComponent, SmartEventHandler } from '../base';

export interface SmartFieldProps {
  /**
   * 在表单内提交时的标识符
   */
  name?: string;

  /**
   * 输入框左侧文本
   */
  label?: string;

  /**
   * 单元格大小
   */
  size?: 'large';

  /**
   * 当前输入的值
   */
  value?: string | number;

  /**
   * 可设置为任意原生类型
   *
   * @default 'text'
   */
  type?: 'number' | 'idcard' | 'textarea' | 'digit' | 'text' | 'safe-password' | 'nickname';

  /**
   * 如果`type`为`textarea`且在一个`position:fixed`的区域，需要显示指定属性`fixed`为`true`
   *
   * @default false
   */
  fixed?: boolean;

  /**
   * 获取焦点
   *
   * @default false
   */
  focus?: boolean;

  /**
   * 是否显示内边框
   *
   * @default true
   */
  border?: boolean;

  /**
   * 是否禁用输入框
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * 是否只读
   *
   * @default false
   */
  readonly?: boolean;

  /**
   * 是否启用清除控件
   *
   * @default false
   */
  clearable?: boolean;

  /**
   * 是否开启点击反馈
   *
   * @default false
   */
  clickable?: boolean;

  /**
   * 是否显示表单必填星号
   *
   * @default false
   */
  required?: boolean;

  /**
   * 是否使内容垂直居中
   *
   * @default false
   */
  center?: boolean;

  /**
   * 是否是密码类型
   *
   * @default false
   */
  password?: boolean;

  /**
   * 标题宽度
   *
   * @default '6.2em'
   */
  titleWidth?: string;

  /**
   * 最大输入长度，设置为`-1`的时候不限制最大长度
   *
   * @default -1
   */
  maxlength?: number;

  /**
   * 输入框为空时占位符
   */
  placeholder?: string;

  /**
   * 指定`placeholder`的样式
   */
  placeholderStyle?: React.CSSProperties;

  /**
   * 自定义样式
   */
  customStyle?: React.CSSProperties;

  /**
   * 是否展示右侧箭头并开启点击反馈
   *
   * @default false
   */
  isLink?: boolean;

  /**
   * 箭头方向
   */
  arrowDirection?: 'left' | 'up' | 'down';

  /**
   * 是否显示字数统计，需要设置`maxlength`属性
   *
   * @default false
   */
  showWordLimit?: boolean;

  /**
   * 是否将输入内容标红
   *
   * @default false
   */
  error?: boolean;

  /**
   * 底部错误提示文案，为空时不展示
   *
   * @default ''
   */
  errorMessage?: string;

  /**
   * 底部错误提示文案对齐方式
   *
   * @default ''
   */
  errorMessageAlign?: 'center' | 'right';

  /**
   * 输入框内容对齐方式
   *
   * @default 'left'
   */
  inputAlign?: 'center' | 'right' | 'left';

  /**
   * 是否自适应内容高度，只对`textarea`有效，可传入对象。
   *
   * 单位为`px`
   *
   * @default false
   */
  autosize?: boolean | { maxHeight?: number; minHeight?: number };

  /**
   * 左侧图标名称或图片链接，可选值见`Icon`组件
   */
  leftIcon?: string;

  /**
   * 右侧图标名称或图片链接，可选值见`Icon`组件
   */
  rightIcon?: string;

  /**
   * 设置键盘右下角按钮的文字，仅在`type='text'`时生效
   *
   * @default 'done'
   */
  confirmType?: string;

  /**
   * 点击键盘右下角按钮时是否保持键盘不收起，在`type='textarea'`时无效
   *
   * @default false
   */
  confirmHold?: boolean;

  /**
   * `focus`时，点击页面的时候不收起键盘
   *
   * @default false
   */
  holdKeyboard?: boolean;

  /**
   * 输入框聚焦时底部与键盘的距离
   *
   * @default 50
   */
  cursorSpacing?: number;

  /**
   * 键盘弹起时，是否自动上推页面
   *
   * @default true
   */
  adjustPosition?: boolean;

  /**
   * 是否显示键盘上方带有”完成“按钮那一栏，只对`textarea`有效
   *
   * @default true
   */
  showConfirmBar?: boolean;

  /**
   * 光标起始位置，自动聚集时有效，需与`selection-end`搭配使用
   *
   * @default -1
   */
  selectionStart?: number;

  /**
   * 光标结束位置，自动聚集时有效，需与`selection-start`搭配使用
   *
   * @default -1
   */
  selectionEnd?: number;

  /**
   * 自动聚焦，拉起键盘
   *
   * @default false
   */
  autoFocus?: boolean;

  /**
   * 是否去掉`iOS`下的默认内边距，只对`textarea`有效
   *
   * @default true
   */
  disableDefaultPadding?: boolean;

  /**
   * 指定 `focus` 时的光标位置
   *
   * @default -1
   */
  cursor?: number;

  /**
   * 显示清除图标的时机，`always` 表示输入框不为空时展示，
   * `focus` 表示输入框聚焦且不为空时展示
   *
   * @default 'focus'
   */
  clearTrigger?: 'always' | 'focus';

  /**
   * 强制 `input` 处于同层状态，默认 `focus` 时 `input` 会切到非同层状态 (仅在 `iOS` 下生效)
   *
   * @default false
   */
  alwaysEmbed?: boolean;
}

/**
 * @deprecated
 */
export interface SmartFieldInputEvent extends WechatMiniprogram.BaseEvent {
  detail: string;
}

export interface SmartFieldFocusEventDetail {
  value: string;
  height: number;
}

export interface SmartFieldBlurEventDetail {
  value: string;
  cursor: number;
}

export interface SmartFieldLineChangeEventDetail {
  height: number;
  heightRpx: number;
  lineCount: number;
}

export interface SmartFieldKeyboardHeightChangeEventDetail {
  height: number;
  duration: number;
}

export interface SmartFieldEvents {
  /**
   * 输入内容时触发
   */
  onInput?: SmartEventHandler<string>;

  /**
   * 输入内容时触发
   */
  onChange?: SmartEventHandler<string>;

  /**
   * 点击完成按钮时触发
   */
  onConfirm?: SmartEventHandler<string>;

  /**
   * 点击尾部图标时触发
   */
  onClickIcon?: SmartEventHandler;

  /**
   * 输入框聚焦时触发
   */
  onFocus?: SmartEventHandler<SmartFieldFocusEventDetail>;

  /**
   * 输入框失焦时触发1
   */
  onBlur?: SmartEventHandler<SmartFieldBlurEventDetail>;

  /**
   * 点击清空控件时触发
   */
  onClear?: SmartEventHandler;

  /**
   * 点击输入区域时触发
   */
  onClickInput?: SmartEventHandler<TouchPositionDetail>;

  /**
   * 输入框行数变化时调用，只对 `textarea` 有效
   */
  onLinechange?: SmartEventHandler<SmartFieldLineChangeEventDetail>;

  /**
   * 键盘高度发生变化的时候触发此事件
   */
  onKeyboardheightchange?: SmartEventHandler<SmartFieldKeyboardHeightChangeEventDetail>;
}

export interface SmartFieldExternalClassName {
  /**
   * 左侧文本样式类
   */
  labelClass?: string;

  /**
   * 输入框样式类
   */
  inputClass?: string;

  /**
   * 右侧图标样式类
   */
  rightIconClass?: string;
}

export interface SmartFieldSlot {
  /**
   * Field Slot
   */
  slot?: {
    /**
     * 自定义输入框标签，如果设置了label属性则不生效
     */
    label?: React.ReactNode;
    /**
     * 自定义输入框头部图标
     */
    leftIcon?: React.ReactNode;
    /**
     * 自定义输入框尾部图标
     */
    rightIcon?: React.ReactNode;
    /**
     * 自定义输入框尾部按钮
     */
    button?: React.ReactNode;
    /**
     * 自定义输入框，使用此插槽后，与输入框相关的属性和事件将失效
     */
    input?: React.ReactNode;
  };
}

export type SmartField = SmartComponent<
  SmartFieldProps,
  SmartFieldEvents,
  SmartFieldExternalClassName,
  SmartFieldSlot
>;
