import { SmartComponent, SmartEventHandler } from '../base';

export interface SmartSwipeCellProps {
  /**
   * 标识符，可以在 `close` 事件的参数中获取到
   */
  name?: string | number;

  /**
   * 左侧滑动区域宽度
   *
   * @default 0
   */
  leftWidth?: number;

  /**
   * 右侧滑动区域宽度
   *
   * @default 0
   */
  rightWidth?: number;

  /**
   * 是否异步关闭
   *
   * @default false
   */
  asyncClose?: boolean;

  /**
   * 是否禁用滑动
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * 左右侧的按钮
   */
  slot: {
    left?: React.ReactNode;
    right?: React.ReactNode;
  };
}

export type SmartSwipeCellPosition = 'left' | 'right';

export type SmartSwipeCellClickPosition = SmartSwipeCellPosition | 'cell' | 'outside';

/**
 * @deprecated
 */
export interface SmartSwipeCellClickEvent extends WechatMiniprogram.BaseEvent {
  detail: SmartSwipeCellClickPosition;
}

export interface SmartSwipeCellBaseEventDetail {
  name: string | number;
  position: SmartSwipeCellPosition;
}

export interface SmartSwipeCellCloseEventDetail extends SmartSwipeCellBaseEventDetail {
  /**
   * SwipeCell 实例
   */
  instance: Record<string, any>;
}

export interface SmartSwipeCellEvents {
  /**
   * 点击时触发
   */
  onClick?: SmartEventHandler<SmartSwipeCellClickPosition>;

  /**
   * 侧边栏关闭时触发
   */
  onTabClose?: SmartEventHandler<SmartSwipeCellPosition>;

  /**
   * 关闭时触发
   */
  onClose?: SmartEventHandler<SmartSwipeCellCloseEventDetail>;

  /**
   * 打开时触发
   */
  onOpen?: SmartEventHandler<SmartSwipeCellBaseEventDetail>;
}

export type SmartSwipeCell = SmartComponent<SmartSwipeCellProps, SmartSwipeCellEvents>;
