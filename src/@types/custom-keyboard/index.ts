import { SmartComponent, SmartEventHandler } from '../base';

export interface SmartCustomKeyboardProps {
  /**
   * 当前值
   *
   * @default ''
   */
  value?: string;

  /**
   * 占位符文案
   *
   * @default 'please input'
   */
  placeholder?: string;

  /**
   * 用于适配进制功能（取值范围1-10）
   *
   * @default 10
   */
  digitalBase?: number;

  /**
   * 是否隐藏零
   *
   * @default true
   */
  isHideZero?: boolean;

  /**
   * 电量高的颜色
   *
   * @default '#70CF98'
   */
  highColor?: string;

  /**
   * 数字键盘的确认按钮背景色
   *
   * @default '#239C8E'
   */
  confirmColor?: string;

  /**
   * 确认按钮文案
   *
   * @default 'Confirm'
   */
  confirmText?: string;

  /**
   * 输入框容器样式
   *
   * @default null
   */
  inputContainerStyle?: React.CSSProperties;

  /**
   * 当前值的样式（适用于placeholder样式）
   *
   * @default null
   */
  valueTextStyle?: React.CSSProperties;

  /**
   * 确认按钮的样式
   *
   * @default null
   */
  confirmTextStyle?: React.CSSProperties;
}

export interface SmartCustomKeyboardData {
  /**
   * 当前操作选中的值
   *
   */
  value: string | number;
}

export interface SmartCustomKeyboardEvents {
  /**
   * 点击具体数值的回调
   */
  onChange?: SmartEventHandler<SmartCustomKeyboardData>;
  /**
   * 确认按钮的回调函数
   */
  onConfirm?: SmartEventHandler<SmartCustomKeyboardData>;
}

export interface SmartCustomKeyboardSlot {
  /**
   * 自定义 value 显示内容，如果设置了 value 属性则不生效
   */
  children?: React.ReactNode;
  /**
   * Cell Slot
   */
  slot?: {
    /**
     * 自定义 title 显示内容，如果设置了 title 属性则不生效
     */
    customButton?: React.ReactNode;
  };
}

export type SmartCustomKeyboard = SmartComponent<
  SmartCustomKeyboardProps,
  SmartCustomKeyboardEvents,
  SmartCustomKeyboardSlot
>;
