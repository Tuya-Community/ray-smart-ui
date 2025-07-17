import { SmartBaseExternalClassName, SmartComponent, SmartEventHandler } from '../base';

export interface SmartSidebarItemProps {
  /**
   * 内容
   *
   * @default ''
   */
  title?: string;

  /**
   * 是否显示右上角小红点
   *
   * @default false
   */
  dot?: boolean;

  // /**
  //  * 图标右上角徽标的内容
  //  *
  //  * @deprecated 已废弃，请使用 `badge` 属性
  //  *
  //  * @default ''
  //  */
  // info?: string | number;

  /**
   * 图标右上角徽标的内容
   *
   * @default ''
   */
  badge?: string | number;

  /**
   * 是否禁用该项
   *
   * @default false
   */
  disabled?: boolean;
}

/**
 * @deprecated
 */
export interface SmartSidebarItemClickEvent extends WechatMiniprogram.BaseEvent {
  /**
   * 当前徽章的索引
   */
  detail: number;
}

export interface SmartSidebarItemEvents {
  /**
   * 点击徽章时触发
   */
  onClick?: SmartEventHandler<number>;
}

export interface SmartSidebarItemSlot {
  /**
   * 自定义标题栏，如果设置了 title 属性则不生效
   */
  title?: React.ReactNode;
}

export type SmartSidebarItemExternalClassName = SmartBaseExternalClassName;

export type SmartSidebarItem = SmartComponent<
  SmartSidebarItemProps,
  SmartSidebarItemEvents,
  SmartSidebarItemExternalClassName
>;
