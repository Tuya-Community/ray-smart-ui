import { SmartBaseExternalClassName, SmartComponent } from '../base';

export interface SmartLoadingProps {
  /**
   * 颜色
   *
   * @default '#c9c9c9'
   */
  color?: string;

  /**
   * 类型
   *
   * @default 'circular'
   */
  type?: 'spinner' | 'circular';

  /**
   * 加载图标大小，默认单位为 `px`
   *
   * @default '30px'
   */
  size?: string | number;

  /**
   * 文字大小，默认单位为为 `px`
   *
   * @default '14px'
   */
  textSize?: string | number;

  /**
   * 是否垂直排列图标和文字内容
   *
   * @default false
   */
  vertical?: boolean;
}

export type SmartLoadingExternalClassName = SmartBaseExternalClassName;

export type SmartLoading = SmartComponent<SmartLoadingProps, {}, SmartLoadingExternalClassName>;
