import React from 'react';
import { SmartBaseExternalClassName, SmartComponent, SmartEventHandler } from '../base';

// 其他属性的接口
interface OtherProps {
  /**
   * 形状
   *
   * @default 'round'
   */
  shape?: 'round' | 'square';

  /**
   * 是否为选中状态
   *
   * @default false
   */
  value?: boolean;

  /**
   * 是否禁用单选框
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * 是否禁用单选框内容点击
   *
   * @default false
   */
  labelDisabled?: boolean;

  /**
   * 文本位置
   *
   * @default 'right'
   */
  labelPosition?: 'left' | 'right';

  /**
   * 是否使用`icon slot`
   *
   * @default false
   */
  useIconSlot?: boolean;

  /**
   * 选中状态颜色
   *
   * @default '#1989fa'
   */
  checkedColor?: string;

  /**
   * `icon`大小
   *
   * @default 20px
   */
  iconSize?: string | number;
}

// 当 `name` 被提供时，`dataName` 也必须被提供的接口
interface SmartCheckboxPropsWithName extends OtherProps {
  name: string;
  dataName: string;
}

// 当 `name` 没有被提供时，`dataName` 是可选的接口
interface SmartCheckboxPropsWithoutName extends OtherProps {
  name?: never;
  dataName?: string;
}

export type SmartCheckboxProps = SmartCheckboxPropsWithName | SmartCheckboxPropsWithoutName;

/**
 * @deprecated
 */
export interface SmartCheckboxChangeEvent extends WechatMiniprogram.BaseEvent {
  detail: boolean;
}

export interface SmartCheckboxEvents {
  /**
   * 当绑定值变化时触发的事件
   */
  onChange?: SmartEventHandler<boolean>;
}

export interface SmartCheckboxExternalClassName extends SmartBaseExternalClassName {
  /**
   * 图标样式类
   */
  iconClass?: string;

  /**
   * 描述信息样式类
   */
  labelClass?: string;
}

export interface SmartCheckboxSlot {
  /**
   * 	自定义文本
   */
  children?: React.ReactNode;
  /**
   * Checkbox Slot
   */
  slot?: {
    /**
     * 自定义图标
     */
    icon?: React.ReactNode;
  };
}

export type SmartCheckbox = SmartComponent<
  SmartCheckboxProps,
  SmartCheckboxEvents,
  SmartCheckboxExternalClassName,
  SmartCheckboxSlot
>;
