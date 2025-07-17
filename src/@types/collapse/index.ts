import { SmartBaseExternalClassName, SmartComponent, SmartEventHandler } from '../base';

export interface SmartCollapseProps {
  /**
   * 当前展开面板的 `name`
   *
   * 非手风琴模式：`(string | number)[]`
   *
   * 手风琴模式：`string | number`
   */
  value?: string | number | (string | number)[];

  /**
   * 是否开启手风琴模式
   *
   * @default false
   */
  accordion?: boolean;

  /**
   * 是否显示外边框
   *
   * @default true
   */
  border?: boolean;
}

/**
 * @deprecated
 */
export interface SmartCollapseBaseEvent extends WechatMiniprogram.BaseEvent {
  /**
   * 当前打开的面板 name
   */
  detail: string;
}

/**
 * @deprecated
 */
export interface SmartCollapseChangeEvent extends WechatMiniprogram.BaseEvent {
  /**
   * 手风琴模式时，为 name
   *
   * 非手风琴模式时，为打开的折叠面板的 name 数组
   */
  detail: string | string[];
}

export interface SmartCollapseEvents {
  /**
   * 切换面板时触发
   */
  onChange?: SmartEventHandler<string | string[]>;

  /**
   * 展开面板时触发
   */
  onOpen?: SmartEventHandler<string>;

  /**
   * 关闭面板时触发
   */
  onClose?: SmartEventHandler<string>;
}

export type SmartCollapseExternalClassName = SmartBaseExternalClassName;

export type SmartCollapse = SmartComponent<
  SmartCollapseProps,
  SmartCollapseEvents,
  SmartCollapseExternalClassName
>;
