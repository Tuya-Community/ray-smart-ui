/* eslint-disable @typescript-eslint/ban-types */
import { SmartBaseExternalClassName, SmartComponent } from '../base';

export interface SmartDropdownMenuProps {
  /**
   * 菜单标题和选项的选中态颜色
   *
   * @default '#ee0a24'
   */
  activeColor?: string;

  /**
   * 菜单栏 `z-index` 层级
   *
   * @default 10
   */
  zIndex?: number;

  /**
   * 动画时长，单位毫秒
   *
   * @default 200
   */
  duration?: number;

  /**
   * 菜单展开方向
   */
  direction?: 'up' | 'down';

  /**
   * 是否显示遮罩层
   *
   * @default true
   */
  overlay?: boolean;

  /**
   * 是否在点击遮罩层后关闭菜单
   *
   * @default true
   */
  closeOnClickOverlay?: boolean;

  /**
   * 是否在点击外部 `menu` 后关闭菜单
   *
   * @default true
   */
  closeOnClickOutside?: boolean;
}

export type SmartDropdownMenu = SmartComponent<
  SmartDropdownMenuProps,
  {},
  SmartBaseExternalClassName
>;
