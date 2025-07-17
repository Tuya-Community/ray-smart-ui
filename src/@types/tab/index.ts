import { SmartBaseExternalClassName, SmartComponent } from '../base';

export interface SmartTabProps {
  /**
   * 标签名称，作为匹配的标识符
   *
   * @default 标签的索引值
   */
  name?: string | number;

  /**
   * 标题
   */
  title?: string;

  /**
   * 是否禁用标签
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * 是否显示小红点
   */
  dot?: boolean;

  /**
   * 图标右上角提示信息
   */
  info?: string | number;

  /**
   * 自定义标题样式
   */
  titleStyle?: React.CSSProperties;
  /**
   * @description 二级标题
   * @version 2.3.5
   */
  subtitle?: string;
  /**
   * @description 二级标题样式
   * @version 2.3.5
   */
  subtitleStyle?: React.CSSProperties;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type SmartTabEvents = {};

export type SmartTabExternalClassName = SmartBaseExternalClassName;

export interface SmartTabSlot {
  /**
   * 自定义标签页内容
   */
  children?: React.ReactNode;
}

export type SmartTab = SmartComponent<
  SmartTabProps,
  SmartTabEvents,
  SmartTabExternalClassName,
  SmartTabSlot
>;
