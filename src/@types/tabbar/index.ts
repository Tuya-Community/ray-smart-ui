import { SmartBaseExternalClassName, SmartComponent, SmartEventHandler } from '../base';

export interface SmartTabbarProps {
  /**
   * 当前选中标签的索引
   */
  active?: number | string;

  /**
   * 是否固定在底部
   *
   * @default true
   */
  fixed?: boolean;

  /**
   * 固定在底部时，是否在标签位置生成一个等高的占位元素
   *
   * @default false
   */
  placeholder?: boolean;

  /**
   * 是否展示外边框
   *
   * @default true
   */
  border?: boolean;

  /**
   * 元素 `zIndex`
   *
   * @default 1
   */
  zIndex?: number;

  /**
   * 选中标签的颜色
   *
   * @default '#1989fa'
   */
  activeColor?: string;

  /**
   * 未选中标签的颜色
   *
   * @default '#7d7e80'
   */
  inactiveColor?: string;

  /**
   * 是否为 iPhoneX 留出底部安全距离
   *
   * @default true
   */
  safeAreaInsetBottom?: boolean;

  /**
   * 标题和图标上下颠倒
   *
   * @default false
   * @version 2.5.1
   */
  upsideDown?: boolean;
}

/**
 * 切换标签时触发事件
 *
 * @deprecated
 */
export interface SmartTabbarChangeEvent extends WechatMiniprogram.BaseEvent {
  /**
   * 当前选中标签的名称或索引值
   */
  detail: number | string;
}

export interface SmartTabbarEvents {
  /**
   * 切换标签时触发
   */
  onChange?: SmartEventHandler<number | string>;
}

export interface SmartTabbarSlot {
  /**
   * NavBar Slot
   */
  slot?: {
    /**
     * 默认插槽
     */
    default?: React.ReactNode;
    /**
     *  自定义左侧区域内容
     */
    left?: React.ReactNode;
    /**
     * 自定义右侧区域内容
     */
    right?: React.ReactNode;
  };
}

export type SmartTabbar = SmartComponent<
  SmartTabbarProps,
  SmartTabbarEvents,
  SmartBaseExternalClassName,
  SmartTabbarSlot
>;
