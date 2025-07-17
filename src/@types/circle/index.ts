import { SmartComponent } from '../base';

import { ReactNode, CSSProperties } from 'react';

export interface SmartCircleProps {
  /**
   * canvasId，可选，默认会随机生成一个
   */
  canvasId?: string;
  /**
   * 子元素
   * 默认值：undefined
   */
  children?: ReactNode;

  /**
   * 类名
   * 默认值：undefined
   */
  className?: string;

  /**
   * 样式 (v2.1.7)
   * 默认值：undefined
   */
  customStyle?: CSSProperties;

  /**
   * 填充颜色
   * 默认值：'#007AFF'
   */
  fillColor?: string; // 默认值为 '#007AFF'

  /**
   * 遮罩颜色
   * 默认值：'#ffffff'
   */
  maskColor?: string; // 默认值为 '#ffffff'

  /**
   * 样式风格
   * 可选值：`basic`、`angle`、`angle2`
   */
  mode?: 'basic' | 'angle' | 'angle2'; // 默认值为 'basic'

  /**
   * 百分比
   * 默认值：0
   */
  percent?: number; // 默认值为 0

  /**
   * 是否圆形
   * 默认值：true
   */
  round?: boolean; // 默认值为 true

  /**
   * 尺寸
   * 默认值：'100px'
   */
  size?: string; // 默认值为 '100px'

  /**
   * 样式 (已废弃 v2.1.7)
   * 默认值：undefined
   */
  style?: CSSProperties;

  /**
   * 滑槽颜色
   * 默认值：'#d3d3d3'
   */
  trackColor?: string; // 默认值为 '#d3d3d3'

  /**
   * 滑槽宽度
   * 默认值：'10px'
   */
  trackWidth?: string; // 默认值为 '10px'

  /**
   * 渐变色
   */
  fillColorStops?: Record<string, string>;
}

export type SmartCircle = SmartComponent<SmartCircleProps>;
