import { SmartBaseExternalClassName, SmartComponent } from '../base';

export interface SmartCellGroupProps {
  /**
   * 分组标题
   */
  title?: string;

  /**
   * 是否展示为圆角卡片风格
   *
   * @default false
   */
  inset?: boolean;

  /**
   * 是否显示外边框
   *
   * @default true
   */
  border?: boolean;

  /**
   * @description 圆角卡片风格时的圆角值
   * @version 2.6.2
   * @default
   */
  insetBorderRadius?: number | string;
}

export type SmartCellGroupExternalClassName = SmartBaseExternalClassName;

export type SmartCellGroup = SmartComponent<
  SmartCellGroupProps,
  // eslint-disable-next-line @typescript-eslint/ban-types
  {},
  SmartCellGroupExternalClassName
>;
