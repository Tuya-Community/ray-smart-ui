import { SmartBaseExternalClassName, SmartComponent, SmartEventHandler } from '../base';
import { SmartTransitionEvents } from '../transition';

export interface SmartPopupProps {
  /**
   * 是否显示弹出层
   *
   * @default false
   */
  show?: boolean;

  /**
   * `z-index`层级
   *
   * @default 100
   */
  zIndex?: number;

  /**
   * 是否显示遮罩层
   *
   * @default true
   */
  overlay?: boolean;

  /**
   * 弹出位置
   *
   * @default 'center'
   */
  position?: 'top' | 'bottom' | 'center' | 'right' | 'left';

  /**
   * 动画时长，单位为毫秒
   *
   * @default 300
   */
  duration?: number | Record<string, unknown>;

  /**
   * 是否显示圆角
   *
   * @default false
   */
  round?: boolean;

  /**
   * 自定义弹出层样式
   *
   * @default ''
   */
  customStyle?: React.CSSProperties;
  /**
   * 自定义遮罩层样式
   *
   * @default ''
   */
  overlayStyle?: React.CSSProperties;

  /**
   * 是否在点击遮罩层后关闭
   *
   * @default true
   */
  closeOnClickOverlay?: boolean;

  /**
   * 是否显示关闭图标
   *
   * @default false
   */
  closeable?: boolean;

  /**
   * 关闭图标名称或图片链接
   *
   * @default 'cross'
   */
  closeIcon?: string;

  /**
   * 关闭图标位置，可选值为 top-right、top-left、bottom-left bottom-right
   *
   * @default 'top-right''
   */
  closeIconPosition?: 'top-right' | 'top-left' | 'bottom-left' | 'bottom-right';

  /**
   * 是否为`iPhoneX`留出底部安全距离
   *
   * @default true
   */
  safeAreaInsetBottom?: boolean;

  /**
   * 是否需要预留出一个最小的底部安全距离，用于在 safeArea 底部为 0 时进行追加，需要在 safeAreaInsetBottom 为 true 时生效
   *
   * @default 0
   * @version `1.1.0`
   */
  safeAreaInsetBottomMin?: number;

  /**
   * 是否留出顶部安全距离（状态栏高度）
   *
   * @default false
   */
  safeAreaInsetTop?: boolean;

  /**
   * 是否锁定背景滚动
   *
   * @default true
   */
  lockScroll?: boolean;

  /**
   * 开启弹框期间是否禁用本地手势
   *
   * @default false
   * @version 2.3.8
   */
  nativeDisabled?: boolean;
}

export interface SmartPopupEvents extends SmartTransitionEvents {
  /**
   * 关闭弹出层时触发
   */
  onClose?: SmartEventHandler;

  /**
   * 点击遮罩层时触发
   */
  onClickOverlay?: SmartEventHandler;
}

export type SmartPopupExternalClassName = SmartBaseExternalClassName;

export type SmartPopup = SmartComponent<
  SmartPopupProps,
  SmartPopupEvents,
  SmartPopupExternalClassName
>;
