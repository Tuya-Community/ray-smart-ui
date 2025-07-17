import React from 'react';
import {
  TouchPositionDetail,
  SmartBaseExternalClassName,
  SmartComponent,
  SmartEventHandler,
  SmartTouchEventHandler,
} from '../base';

export interface SmartNoticeBarProps {
  /**
   * 通知栏模式
   *
   * @default ''
   */
  mode?: 'closeable' | 'link';

  /**
   * 通知栏类型
   *
   * @default 'info'
   *
   * @since `v2.0.0`
   */
  type?: 'info' | 'warning' | 'error';

  /**
   * 通知文本内容
   *
   * @default ''
   */
  text?: string;

  /**
   * 文本结尾处的按钮文本内容
   *
   * @default ''
   * @since `v2.0.0`
   */
  btnText?: string;

  /**
   * 按钮文本颜色
   *
   * @default ''
   * @since `v2.0.0`
   */
  btnTextColor?: string;

  /**
   * 通知文本颜色
   *
   * @default ''
   */
  color?: string;

  /**
   * 背景
   *
   * @default ''
   */
  background?: string;

  /**
   * 左侧图标链接，同icon组件name属性
   *
   * @default ''
   */
  leftIcon?: string;

  /**
   * link 模式时，点击组件的跳转路由地址
   *
   * @since `v2.0.0`
   */
  url?: string;

  /**
   * link 模式时，点击组件的跳转路由方法
   *
   * @default 'navigateTo'
   * @since `v2.0.0`
   */
  openType?: 'navigateTo' | 'navigateTo';

  /**
   * 右侧图标颜色
   *
   * @default 'rgba(0, 0, 0, 0.2)'
   * @since `v2.0.0`
   */
  rightIconColor?: string;

  /**
   * 左侧图标颜色，默认在不同的type类型下会有对应的初始颜色
   *
   * @default ''
   * @since `v2.0.0`
   */
  leftIconColor?: string;

  /**
   * 跟节点样式
   *
   * @default ''
   * @since `v2.0.0`
   */
  customStyle?: React.CSSProperties;

  /**
   * 跟节点点击时的样式类
   *
   * @default ''
   * @since `v2.0.0`
   */
  customHoverClass?: string;

  /**
   * 右侧图标样式
   *
   * @default ''
   * @since `v2.0.0`
   */
  rightIconStyle?: React.CSSProperties;

  /**
   * 左侧图标样式
   *
   * @default ''
   * @since `v2.0.0`
   */
  leftIconStyle?: React.CSSProperties;

  /**
   * 动画延迟时间 (s)
   *
   * @default 1
   */
  delay?: number;

  /**
   * 滚动速率 (px/s)
   *
   * @default 60
   */
  speed?: number;

  /**
   * 是否开启滚动播放，内容长度溢出时默认开启
   */
  scrollable?: boolean;

  /**
   * 是否开启文本换行，只在禁用滚动时生效
   *
   * @default false
   */
  wrapable?: boolean;
}

export interface SmartNoticeBarEvents {
  /**
   * 点击通知栏时触发
   */
  onClick?: SmartTouchEventHandler;

  /**
   * 点击文末按钮文本时的触发
   */
  btnClick?: SmartTouchEventHandler;

  /**
   * 关闭通知栏时触发
   */
  onClose?: SmartEventHandler<TouchPositionDetail>;
}

export interface SmartNoticeBarSlot {
  /**
   * 通知文本内容，仅在 `text` 属性为空时有效
   */
  children?: React.ReactNode;
  /**
   * NoticeBar Slot
   */
  slot?: {
    /**
     * 自定义左侧图标
     */
    leftIcon?: React.ReactNode;
    /**
     * 自定义右侧图标
     */
    rightIcon?: React.ReactNode;
  };
}

export type SmartNoticeBarExternalClassName = SmartBaseExternalClassName;

export type SmartNoticeBar = SmartComponent<
  SmartNoticeBarProps,
  SmartNoticeBarEvents,
  SmartNoticeBarExternalClassName,
  SmartNoticeBarSlot
>;
