import { SmartBaseExternalClassName, SmartComponent, SmartEventHandler } from '../base';

export interface SmartNavBarProps {
  /**
   * 标题
   *
   * @default ''
   */
  title?: string;

  /**
   * 左侧文案
   *
   * @default ''
   */
  leftText?: string;

  /**
   * 右侧文案
   *
   * @default ''
   */
  rightText?: string;

  /**
   * 是否显示左侧箭头
   *
   * @default false
   */
  leftArrow?: boolean;

  /**
   * 是否固定在顶部
   *
   * @default false
   */
  fixed?: boolean;

  /**
   * 固定在顶部时是否开启占位
   *
   * @default false
   */
  placeholder?: boolean;

  /**
   * 是否显示下边框
   *
   * @default true
   */
  border?: boolean;

  /**
   * 元素 `z-index`
   *
   * @default 1
   */
  zIndex?: number;

  /**
   * 根节点自定义样式
   */
  customStyle?: React.CSSProperties;

  /**
   * 是否留出顶部安全距离（状态栏高度）
   *
   * @default true
   */
  safeAreaInsetTop?: boolean;
}

export interface SmartNavBarEvents {
  /**
   * 点击左侧按钮时触发
   */
  onClickLeft?: SmartEventHandler;

  /**
   * 点击右侧按钮时触发
   */
  onClickRight?: SmartEventHandler;
}

export interface SmartNavBarExternalClassName extends SmartBaseExternalClassName {
  /**
   * 标题样式类
   */
  titleClass?: string;
}

export interface SmartNavBarSlot {
  /**
   * NavBar Slot
   */
  slot?: {
    /**
     * 自定义 title 显示内容，如果设置了 title 属性则不生效
     */
    title?: React.ReactNode;
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

export type SmartNavBar = SmartComponent<
  SmartNavBarProps,
  SmartNavBarEvents,
  SmartNavBarExternalClassName,
  SmartNavBarSlot
>;
