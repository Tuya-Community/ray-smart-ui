import { SmartBaseExternalClassName, SmartComponent, SmartEventHandler } from '../base';

export interface SmartIconProps {
  /**
   * 图标名称或图片链接
   */
  name?: string;

  /**
   * 是否显示图标右上角小红点
   *
   * @default false
   */
  dot?: boolean;

  /**
   * 图标右上角文字提示
   */
  info?: string | number;

  /**
   * 图标颜色
   *
   * @default 'inherit'
   */
  color?: string;

  /**
   * 图标大小，如 20px，2em，默认单位为px
   *
   * @default 'inherit'
   */
  size?: string | number;
  /**
   * 自定义样式
   */
  customStyle?: React.CSSProperties;

  /**
   * 类名前缀
   *
   * @default 'smart-icon'
   */
  classPrefix?: string;
}

export interface SmartIconEvents {
  /**
   * 点击图标时触发
   */
  onClick?: SmartEventHandler;
}

export type SmartIconExternalClassName = SmartBaseExternalClassName;

export type SmartIcon = SmartComponent<SmartIconProps, SmartIconEvents, SmartIconExternalClassName>;
