import { SmartComponent } from '../base';

export interface SmartCircleProps {
  /**
   * 类名
   */
  className?: string;
  /**
   * 目标进度
   *
   * @default 0
   */
  percent?: number;

  /**
   * 圆环直径，默认单位为 `px`
   *
   * @default 100
   */
  size?: number;

  /**
   * 进度条颜色，传入对象格式可以定义渐变色
   * @deprecated use fillColor
   *
   * @default '#1989fa'
   */
  color?: string | Record<string, string>;

  /**
   * 轨道颜色
   *
   * @default '#fff'
   * @deprecated use trackColor
   */
  'layer-color'?: string;

  /**
   * 进度条宽度
   *
   * @deprecated use trackWidth
   * @default 10
   */
  'stroke-width'?: number;

  /**
   * 自定义样式
   */
  customStyle?: React.CSSProperties;
  /**
   * 自定义样式
   * @deprecated
   */
  style?: React.CSSProperties;
  /**
   * 样式风格
   * @default basic
   */
  mode?: 'basic' | 'angle' | 'angle2';
  /**
   * 是否圆角
   * @default true
   */
  round?: boolean;
  /**
   * 进度条颜色
   * @default #007AFF
   */
  fillColor?: string;
  /**
   * 进度条渐变颜色，例如 { '0%': '#2361DE', '50%': '#23DEB5' }
   */
  fillColorStops?: Record<string, string>;
  /**
   * 滑槽宽度
   * @default 10
   */
  trackWidth?: number;
  /**
   * 遮罩颜色
   * @default #ffffff
   */
  maskColor?: string;
  /**
   * 滑槽颜色
   * @default #d3d3d3
   */
  trackColor?: string;
}

export type SmartCircle = SmartComponent<SmartCircleProps>;
