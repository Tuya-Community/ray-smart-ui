import { SmartComponent, SmartEventHandler } from '../base';

export interface SmartIndexBarProps {
  /**
   * 索引字符列表
   *
   * @default [A,B,...Z]
   */
  indexList?: string[] | number[];

  /**
   * `z-index`层级
   *
   * @default 1
   */
  zIndex?: number;

  /**
   * 是否开启锚点自动吸顶
   *
   * @default true
   */
  sticky?: boolean;

  /**
   * 锚点自动吸顶时与顶部的距离
   *
   * @default 0
   */
  stickyOffsetTop?: number;

  /**
   * 索引字符高亮颜色
   *
   * @default '#07c160'
   */
  highlightColor?: string;

  /**
   * SideBar 是否可滚动定位
   *
   * @version 2.1.7
   * @default false
   */
  scrollable?: boolean;

  /**
   * SideBar 字体大小
   *
   * @version 2.11.0
   * @default -
   */
  sidebarFontSize?: string;

  /**
   * SideBar 字体行高
   *
   * @version 2.11.0
   * @default -
   */
  sidebarLineHeight?: string;
}

/**
 * @deprecated
 */
export interface SmartIndexBarSelectEvent extends WechatMiniprogram.BaseEvent {
  /**
   * 索引字符
   */
  detail: string | number;
}

export interface SmartIndexBarEvents {
  /**
   * 选中字符时触发
   */
  onSelect?: SmartEventHandler<string | number>;
}

export type SmartIndexBar = SmartComponent<SmartIndexBarProps, SmartIndexBarEvents>;
