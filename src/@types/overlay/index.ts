import { SmartBaseExternalClassName, SmartComponent, SmartEventHandler } from '../base';

export interface SmartOverlayProps {
  /**
   * 是否展示遮罩层
   *
   * @default false
   */
  show?: boolean;

  /**
   * `z-index` 层级
   *
   * @default 1
   */
  zIndex?: string | number;

  /**
   * 动画时长，单位秒
   *
   * @default 0.3
   */
  duration?: string | number;

  /**
   * 自定义类名
   */
  className?: string;

  /**
   * 自定义样式
   */
  customStyle?: React.CSSProperties;

  /**
   * 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动
   *
   * @default true
   */
  lockScroll?: boolean;
}

export interface SmartOverlayEvents {
  /**
   * 点击时触发
   */
  onClick?: SmartEventHandler;
}

export interface SmartOverlaySlot {
  /**
   * 默认插槽，用于在遮罩层上方嵌入内容
   */
  children?: React.ReactNode;
}

export type SmartOverlay = SmartComponent<
  SmartOverlayProps,
  SmartOverlayEvents,
  SmartBaseExternalClassName,
  SmartOverlaySlot
>;
