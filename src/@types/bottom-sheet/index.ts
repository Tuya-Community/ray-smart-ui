import { SmartBaseExternalClassName, SmartComponent, SmartEventHandler } from '../base';
import { SmartTransitionEvents } from '../transition';
export interface SmartBottomSheetProps {
  /**
   * 是否显示动作面板
   */
  show?: boolean;

  /**
   * 标题
   */
  title?: string;

  /**
   * 标题中关闭按钮的颜色
   * @default --app-B4-N3 || rgba(0, 0, 0, 0.5)
   */
  iconColor?: string;

  /**
   * 标题中关闭按钮的大小
   * @default 24
   */
  iconSize?: string;

  /**
   * 是否显示圆角
   * @default true
   */
  round?: boolean;

  /**
   * `z-index` 层级
   *
   * @default 100
   */
  zIndex?: number;

  /**
   * 是否显示遮罩层
   */
  overlay?: boolean;

  /**
   * 点击遮罩是否关闭菜单
   */
  closeOnClickOverlay?: boolean;
  /**
   * 开启弹框期间是否禁用本地手势
   *
   * @default false
   * @version v2.5.0
   */
  nativeDisabled?: boolean;
  /**
   * 内容区域高度，当设置此值时，组件的 max-height 将会失效
   * @version 2.5.0
   */
  contentHeight?: number | string;
  /**
   * 组件整体最大高度 用于自动撑开高度情况
   * @version 2.6.0
   * @default 50%
   */
  maxHeight?: number | string;
}

export interface SmartBottomSheetEvents extends SmartTransitionEvents {
  /**
   * 关闭时触发
   */
  onClose?: SmartEventHandler;

  /**
   * 遮罩进入前触发
   */
  onBeforeEnter?: SmartEventHandler;

  /**
   * 遮罩进入中触发
   */
  onEnter?: SmartEventHandler;

  /**
   * 遮罩进入后触发
   */
  onAfterEnter?: SmartEventHandler;

  /**
   * 遮罩离开前触发
   */
  onBeforeLeave?: SmartEventHandler;

  /**
   * 遮罩离开中触发
   */
  onLeave?: SmartEventHandler;

  /**
   * 遮罩离开后触发
   */
  onAfterLeave?: SmartEventHandler;

  /**
   * 点击遮罩层时触发
   */
  onClickOverlay?: SmartEventHandler;
}

/**
 * Since v2.0.0
 */
export type SmartBottomSheet = SmartComponent<
  SmartBottomSheetProps,
  SmartBottomSheetEvents,
  SmartBaseExternalClassName
>;
