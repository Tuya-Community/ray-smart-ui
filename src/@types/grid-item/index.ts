import { SmartBaseExternalClassName, SmartComponent, SmartEventHandler } from '../base';

export interface SmartGridItemProps {
  /**
   * 文字
   */
  text?: string;

  /**
   * 图标名称或图片链接，可选值见 `Icon` 组件
   */
  icon?: string;

  /**
   * 图标颜色
   */
  iconColor?: string;

  /**
   * 第三方图标前缀
   *
   * @default 'smart-icon'
   */
  iconPrefix?: string;

  /**
   * 是否显示图标右上角小红点
   *
   * @default false
   */
  dot?: boolean;

  /**
   * 图标右上角徽标的内容
   */
  badge?: string | number;

  /**
   * 点击后跳转的链接地址
   */
  url?: string;

  /**
   * 链接跳转类型
   *
   * @default 'navigateTo'
   */
  linkyType?: 'redirectTo' | 'switchTab' | 'reLaunch';
}

export interface SmartGridItemEvents {
  /**
   * 点击格子时触发
   */
  onClick?: SmartEventHandler;
}

export interface SmartGridItemExternalClassName extends SmartBaseExternalClassName {
  /**
   * 内容样式类
   */
  contentClass?: string;

  /**
   * 图标样式类
   */
  iconClass?: string;

  /**
   * 文本样式类
   */
  textClass?: string;
}

export interface SmartGridItemSlot {
  /**
   * 是否使用自定义内容的插槽
   *
   * @default false
   */
  useSlot?: boolean;
  /**
   * 自定义宫格的所有内容，需要设置 useSlot 属性
   */
  children?: React.ReactNode;
  /**
   * GridItem Slot
   */
  slot?: {
    /**
     * 自定义图标，如果设置了 useSlot 或者 icon 属性则不生效
     */
    icon?: React.ReactNode;
    /**
     * 自定义文字，如果设置了 useSlot 或者 text 属性则不生效
     */
    text?: React.ReactNode;
  };
}

export type SmartGridItem = SmartComponent<
  SmartGridItemProps,
  SmartGridItemEvents,
  SmartGridItemExternalClassName,
  SmartGridItemSlot
>;
