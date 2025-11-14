import React from 'react';
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
  /**
   * @description 组件整体最大高度 用于自动撑开高度情况
   * @version 2.6.1
   * @default true
   */
  showClose?: boolean;
  /**
   * 是否支持拖拽，可用于实现拖拽调整面板高度
   * @version 2.7.2
   * @default false
   */
  draggable?: boolean;
  /**
   * 拖拽时允许的最小高度
   * @version 2.7.2
   * @default windowHeight * 0.8
   */
  minDragHeight?: number;
  /**
   * 拖拽时允许的最大高度
   * @version 2.7.2
   * @default windowHeight * 0.5
   */
  maxDragHeight?: number;
  /**
   * 拖拽时中间态高度
   * @version 2.7.2
   * @default windowHeight * 0.1
   */
  midDragHeight?: number;
  /**
   * 拖拽关闭时的临界高度，低于该高度将自动关闭
   * @version 2.7.2
   * @default windowHeight * 0.4
   */
  closeDragHeight?: number;
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
  /**
   * 拖拽结束时触发，返回当前面板位置
   * @version 2.7.2
   */
  onDragPosition?: SmartEventHandler<'max' | 'mid' | 'min'>;
}

interface SmartBottomSheetSlot {
  /**
   * 内容
   */
  children?: React.ReactNode;

  slot?: {
    /**
     * @description 自定义 title 显示内容，需要不设置 title 属性
     * @version 2.6.1
     */
    title: React.ReactNode;
  };
}
/**
 * Since v2.0.0
 */
export type SmartBottomSheet = SmartComponent<
  SmartBottomSheetProps,
  SmartBottomSheetEvents,
  SmartBaseExternalClassName,
  SmartBottomSheetSlot
>;
