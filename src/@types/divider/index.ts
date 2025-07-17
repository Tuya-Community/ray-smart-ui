import { SmartBaseExternalClassName, SmartComponent } from '../base';

export interface SmartDividerProps {
  /**
   * 虚线
   *
   * @default false
   */
  dashed?: boolean;

  /**
   * 细线
   *
   * @default false
   */
  hairline?: boolean;

  /**
   * 文本位置
   */
  contentPosition?: 'left' | 'center' | 'right';

  /**
   * 自定义样式
   */
  customStyle?: React.CSSProperties;
}

export interface SmartDividerSlot {
  /**
   * 自定义文本内容
   */
  children?: React.ReactNode;
}

export type SmartDivider = SmartComponent<
  SmartDividerProps,
  // eslint-disable-next-line @typescript-eslint/ban-types
  {},
  SmartBaseExternalClassName,
  SmartDividerSlot
>;
