import { SmartBaseExternalClassName, SmartComponent } from '../base';

export interface SmartGridProps {
  /**
   * 列数
   *
   * @default 4
   */
  columnNum?: number;

  /**
   * 图标大小，默认单位为`px`
   *
   * @default '28px'
   */
  iconSize?: string;

  /**
   * 格子之间的间距，默认单位为`px`
   *
   * @default 0
   */
  gutter?: string | number;

  /**
   * 是否显示边框
   *
   * @default true
   */
  border?: boolean;

  /**
   * 是否将格子内容居中显示
   *
   * @default true
   */
  center?: boolean;

  /**
   * 是否将格子固定为正方形
   *
   * @default false
   */
  square?: boolean;

  /**
   * 是否开启格子点击反馈
   *
   * @default false
   */
  clickable?: boolean;

  /**
   * 格子内容排列的方向
   */
  direction?: 'horizontal' | 'vertical';

  /**
   * 是否调换图标和文本的位置
   *
   * @default false
   */
  reverse?: boolean;

  /**
   * 是否使用自定义内容的插槽
   *
   * @default false
   */
  useSlot?: boolean;
}

export type SmartGridExternalClassName = SmartBaseExternalClassName;

export type SmartGrid = SmartComponent<SmartGridProps, {}, SmartGridExternalClassName>;
