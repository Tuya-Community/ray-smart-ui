import { SmartBaseExternalClassName, SmartComponent, SmartEventHandler } from '../base';

export interface SmartStepperProps {
  /**
   * 在表单内提交时的标识符
   */
  name?: string;

  /**
   * 输入值
   *
   * @default 最小值
   */
  value?: string | number;

  /**
   * 最小值
   *
   * @default 1
   */
  min?: string | number;

  /**
   * 最大值
   */
  max?: string | number;

  /**
   * 步长
   *
   * @default 1
   */
  step?: string | number;

  /**
   * 是否只允许输入整数
   *
   * @default false
   */
  integer?: boolean;

  /**
   * 是否禁用
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * 是否禁用输入框
   *
   * @default false
   */
  disableInput?: boolean;

  /**
   * 是否开启异步变更，开启后需要手动控制输入值
   *
   * @default false
   */
  asyncChange?: boolean;

  /**
   * 输入框宽度，默认单位为`px`
   *
   * @default '32px'
   */
  inputWidth?: string | number;

  /**
   * 按钮大小，默认单位为 px，输入框高度会和按钮大小保持一致
   *
   * @default	'28px'
   */
  buttonSize?: string | number;

  /**
   * 是否显示增加按钮
   *
   * @default true
   */
  showPlus?: boolean;

  /**
   * 是否显示减少按钮
   *
   * @default true
   */
  showMinus?: boolean;

  /**
   * 固定显示的小数位数
   */
  decimalLength?: number;

  /**
   * 样式风格
   */
  theme?: 'round';

  /**
   * 是否禁用增加按钮
   */
  disablePlus?: boolean;

  /**
   * 是否禁用减少按钮
   */
  disableMinus?: boolean;

  /**
   * 是否开启长按手势
   *
   * @default true
   */
  longPress?: boolean;

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
export interface SmartStepperChangeEvent extends WechatMiniprogram.BaseEvent {
  detail: number;
}

/**
 * @deprecated
 */
export interface SmartStepperOverLimitEvent extends WechatMiniprogram.BaseEvent {
  detail: 'plus' | 'minus';
}

export interface SmartStepperFocusEventDetail {
  value: string;
  height: number;
}

export interface SmartStepperBlurEventDetail {
  value: number;
  cursor: number;
}

export interface SmartStepperEvents {
  /**
   * 当绑定值变化时触发的事件
   */
  onChange?: SmartEventHandler<number>;

  /**
   * 点击不可用的按钮时触发
   */
  onOverlimit?: SmartEventHandler<'plus' | 'minus'>;

  /**
   * 点击增加按钮时触发
   */
  onPlus?: SmartEventHandler;

  /**
   * 点击减少按钮时触发
   */
  onMinus?: SmartEventHandler;
  /**
   * 输入框聚焦时触发
   */
  onFocus?: SmartEventHandler<SmartStepperFocusEventDetail>;

  /**
   * 输入框失焦时触发
   */
  onBlur?: SmartEventHandler<SmartStepperBlurEventDetail>;
}

export interface SmartStepperExternalClassName extends SmartBaseExternalClassName {
  /**
   * 输入框样式类
   */
  inputClass?: string;

  /**
   * 加号按钮样式类
   */
  plusClass?: string;

  /**
   * 减号按钮样式类
   */
  minusClass?: string;
}

export type SmartStepper = SmartComponent<
  SmartStepperProps,
  SmartStepperEvents,
  SmartStepperExternalClassName
>;
