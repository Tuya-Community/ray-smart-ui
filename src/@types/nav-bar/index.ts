import { SmartBaseExternalClassName, SmartComponent, SmartEventHandler } from '../base';

export interface SmartNavBarProps {
  /**
   * 标题
   *
   * @default ''
   */
  title?: string;

  /**
   * 是否显示圆角
   *
   * @version 2.1.0
   * @default false
   */
  round?: boolean;

  /**
   * 左侧文案
   *
   * @default ''
   */
  leftText?: string;

  /**
   * 左侧文案样式类型，默认为 back
   *
   * @version v2.0.0
   * @default 'back'
   */
  leftTextType?: 'home' | 'title' | 'back';

  /**
   * 左侧 Icon
   *
   * @version v2.0.0
   * @default ''
   */
  leftIcon?: string;

  /**
   * 左侧 Icon 大小，默认为 32
   *
   * @version v2.0.0
   * @default 32
   */
  leftIconSize?: string | number;

  /**
   * 右侧文案
   *
   * @default ''
   */
  rightText?: string;

  /**
   * 右侧文案颜色
   *
   * @version v2.7.0
   * @default ''
   */
  rightTextColor?: string;

  /**
   * 是否显示左侧箭头
   *
   * @default false
   */
  leftArrow?: boolean;

  /**
   * 右侧 Icon
   *
   * @version v2.7.0
   * @default ''
   */
  rightIcon?: string;

  /**
   * 右侧 Icon 大小，默认为 32
   *
   * @version v2.7.0
   * @default 32
   */
  rightIconSize?: string | number;

  /**
   * 右侧 Icon 颜色
   *
   * @version v2.7.0
   * @default ''
   */
  rightIconColor?: string;

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
   * @default false
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

  /**
   * @description 背景色
   * @version v2.7.0
   */
  background?: string;
  /**
   * @description 侧边栏宽度
   * @version v2.7.3
   */
  sideWidth?: string | number | 'min' | 'max' | 'mid';
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

  /**
   * 点击中央标题时触发
   *
   * @version v2.0.0
   */
  onClickTitle?: SmartEventHandler;

  /**
   * 点击左侧 icon 时触发
   *
   * @version v2.0.0
   */
  onClickLeftIcon?: SmartEventHandler;

  /**
   * 点击左侧文本时触发
   *
   * @version v2.0.0
   */
  onClickLeftText?: SmartEventHandler;

  /**
   * 点击右侧文本时触发
   *
   * @version v2.7.0
   */
  onClickRightText?: SmartEventHandler;

  /**
   * 点击右侧 icon 时触发
   *
   * @version v2.7.0
   */
  onClickRightIcon?: SmartEventHandler;
}

export interface SmartNavBarExternalClassName extends SmartBaseExternalClassName {
  /**
   * 标题样式类
   */
  titleClass?: string;

  /**
   * 左侧 Icon 样式类
   *
   * @version v2.0.0
   */
  leftIconClass?: string;

  /**
   * 右侧文字样式类
   *
   * @version 2.1.0
   */
  rightTextClass?: string;
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
