import { SmartBaseExternalClassName, SmartComponent, SmartEventHandler } from '../base';

export interface SmartSidebarProps {
  /**
   * 选中项的索引
   *
   * @default 0
   */
  activeKey?: string | number;
}

/**
 * @deprecated
 */
export interface SmartSidebarChangeEvent extends WechatMiniprogram.BaseEvent {
  /**
   * 当前选中徽章的索引
   */
  detail: number;
}

export interface SmartSidebarEvents {
  /**
   * 切换徽章时触发
   */
  onChange?: SmartEventHandler<number>;
}

export type SmartSidebarExternalClassName = SmartBaseExternalClassName;

export type SmartSidebar = SmartComponent<
  SmartSidebarProps,
  SmartSidebarEvents,
  SmartSidebarExternalClassName
>;
