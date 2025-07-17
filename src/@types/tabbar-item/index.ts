import { SmartComponent } from '../base';

export interface SmartTabbarItemProps {
  /**
   * 标签名称，作为匹配的标识符
   *
   * @default 当前标签的索引值
   */
  name?: string | number;

  /**
   * 图标名称或图片链接，可选值见 `Icon` 组件
   */
  icon?: string;

  /**
   * 图标类名前缀，同 `Icon` 组件的 `classPrefix` 属性
   *
   * @default 'smart-icon'
   */
  iconPrefix?: string;

  /**
   * 是否显示小红点
   */
  dot?: boolean;

  /**
   * 图标右上角提示信息
   */
  info?: string | number;

  /**
   * 点击后跳转的链接地址, 需要以 / 开头
   */
  url?: string;

  /**
   * 链接跳转类型，可选值为 redirectTo、switchTab、reLaunch
   */
  linkType?: string;
  /**
   * @description 是否禁用
   * @version 2.3.5
   */
  disabled?: boolean;
}

export interface SmartTabbarItemSlot {
  /**
   * TabbarItem Slot
   */
  slot?: {
    /**
     * 未选中时的图标
     */
    icon?: React.ReactNode;
    /**
     * 选中时的图标
     */
    iconActive?: React.ReactNode;
  };
}

export interface SmartTabbarItemEvent {
  onClick?: () => void;
}

export type SmartTabbarItem = SmartComponent<
  SmartTabbarItemProps,
  SmartTabbarItemEvent,
  // eslint-disable-next-line @typescript-eslint/ban-types
  {},
  SmartTabbarItemSlot
>;
