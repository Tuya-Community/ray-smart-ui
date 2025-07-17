import { SmartComponent, SmartEventHandler } from '../base';

export interface SmartRadioGroupProps {
  /**
   * 在表单内提交时的标识符
   */
  name?: string;

  /**
   * 当前选中项的标识符
   */
  value?: any;

  /**
   * 是否禁用所有单选框
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * 排列方向
   */
  direction?: 'horizontal' | 'vertical';

  /**
   * 子元素节点
   */
  children?: React.ReactNode;

  /**
   * 是否阻止默认UI更新事件
   * @default false
   * @version 2.3.8
   */
  preventDefault?: boolean;
}

/**
 * @deprecated
 */
export interface SmartRadioGroupChangeEvent extends WechatMiniprogram.BaseEvent {
  detail: string;
}

export interface SmartRadioGroupEvents {
  /**
   * 当绑定值变化时触发的事件
   */
  onChange?: SmartEventHandler<string>;
}

export type SmartRadioGroup = SmartComponent<SmartRadioGroupProps, SmartRadioGroupEvents>;
