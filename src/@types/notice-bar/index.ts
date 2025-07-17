import {
  TouchPositionDetail,
  SmartBaseExternalClassName,
  SmartComponent,
  SmartEventHandler,
  SmartTouchEventHandler,
  WechatOpenType,
} from '../base';

export interface SmartNoticeBarProps {
  /**
   * 通知栏模式
   *
   * @default ''
   */
  mode?: 'closeable' | 'link';

  /**
   * 通知文本内容
   *
   * @default ''
   */
  text?: string;

  /**
   * 通知文本颜色
   *
   * @default '#ed6a0c'
   */
  color?: string;

  /**
   * 滚动条背景
   *
   * @default '#fffbe8'
   */
  background?: string;

  /**
   * 左侧图标名称或图片链接
   */
  leftIcon?: string;

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
   * 关闭通知栏时触发
   */
  onClose?: SmartEventHandler<TouchPositionDetail>;
}

export type SmartNoticeBarExternalClassName = SmartBaseExternalClassName;

export type SmartNoticeBar = SmartComponent<
  SmartNoticeBarProps,
  SmartNoticeBarEvents,
  SmartNoticeBarExternalClassName
>;
