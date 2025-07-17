import { SmartComponent, SmartEventHandler } from '../base';

export interface SmartDropdownItemOption {
  /**
   * 文字
   */
  text?: string;

  /**
   * 标识符
   */
  value?: string | number;

  /**
   * 左侧图标名称或图片链接
   */
  icon?: string;
}

export interface SmartDropdownItemProps {
  /**
   * 当前选中项对应的 `value`
   */
  value?: number | string;

  /**
   * 菜单项标题
   *
   * @default 当前选中项文字
   */
  title?: string;

  /**
   * 选项数组
   *
   * @default []
   */
  options?: SmartDropdownItemOption[];

  /**
   * 是否禁用菜单
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * 标题额外类名
   */
  titleClass?: string;

  /**
   * 自定义弹出层样式
   */
  popupStyle?: React.CSSProperties;

  /**
   * 是否开启下拉菜单打开或者关闭前校验
   * @default false
   */
  useBeforeToggle?: boolean;
}

/**
 * @deprecated
 */
export interface SmartDropdownItemChangeEvent extends WechatMiniprogram.BaseEvent {
  /**
   * 当前选中的 value
   */
  detail: number | string;
}

export interface SmartDropdownItemEvents {
  /**
   * 点击选项导致 `value` 变化时触发
   */
  onChange?: SmartEventHandler<number | string>;

  /**
   * 打开菜单栏时触发
   */
  opOpen?: SmartEventHandler;

  /**
   * 关闭菜单栏时触发
   */
  onClose?: SmartEventHandler;

  /**
   * 打开菜单栏且动画结束后触发
   */
  opOpened?: SmartEventHandler;

  /**
   * 关闭菜单栏且动画结束后触发
   */
  onClosed?: SmartEventHandler;

  /**
   * 下拉菜单打开或者关闭前触发，需要将use-before-toggle属性设置为true
   */
  onBeforeToggle?: SmartEventHandler<{
    status: boolean;
    callback: (value: boolean) => Promise<boolean>;
  }>;
}

export type SmartDropdownItem = SmartComponent<SmartDropdownItemProps, SmartDropdownItemEvents>;
