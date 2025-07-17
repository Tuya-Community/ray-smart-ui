import { SmartComponent, SmartEventHandler } from '../base';

export interface SmartStickyProps {
  /**
   * 吸顶时与顶部的距离，单位`px`
   *
   * @default 0
   */
  offsetTop?: number;

  /**
   * 吸顶时的`zIndex`
   *
   * @default 99
   */
  zIndex?: number;

  /**
   * 一个函数，返回容器对应的 `NodesRef` 节点
   */
  container?: Function;

  /**
   * 当前滚动区域的滚动位置，非 `null` 时会禁用页面滚动事件的监听
   */
  scrollTop?: number;
}

export interface SmartStickyScrollEventDetail {
  /** 距离顶部位置 */
  scrollTop: number;
  /** 是否吸顶 */
  isFixed: boolean;
}

export interface SmartStickyEvents {
  /**
   * 滚动时触发
   */
  onScroll?: SmartEventHandler<SmartStickyScrollEventDetail>;
}

export type SmartSticky = SmartComponent<SmartStickyProps, SmartStickyEvents>;
