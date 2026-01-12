import { SmartBaseExternalClassName, SmartComponent, SmartEventHandler } from '../base';
import { SmartTransitionEvents } from '../transition';

export interface SmartPopoverProps {
  /**
   * 弹出层的位置
   */
  placement?:
    | 'top'
    | 'topLeft'
    | 'topRight'
    | 'bottom'
    | 'bottomLeft'
    | 'bottomRight'
    | 'left'
    | 'leftTop'
    | 'leftBottom'
    | 'right'
    | 'rightTop'
    | 'rightBottom';
  /**
   * 控制弹出层是否显示，并监听状态变化，值变更时更新
   */
  show?: boolean;
  /**
   * 自定义弹出层样式
   */
  customStyle?: React.CSSProperties;
  zIndex?: number;
  /**
   * 延迟关闭的时间
   * @default 3000
   */
  duration?: number;
  /**
   * 控制弹出层触发方式，支持 `tap`、`longpress`
   *
   * @default 'tap'
   */
  trigger?: 'tap' | 'longpress';
}

export interface SmartPopoverSlot {
  slot?: {
    overlay?: React.ReactNode;
  };
}

export interface SmartPopoverEvents extends SmartTransitionEvents {
  onClose?: SmartEventHandler;
  onShowChange?: SmartEventHandler;
}

export type SmartPopoverExternalClassName = SmartBaseExternalClassName;

export type SmartPopover = SmartComponent<
  SmartPopoverProps,
  SmartPopoverEvents,
  SmartPopoverExternalClassName,
  SmartPopoverSlot
>;
