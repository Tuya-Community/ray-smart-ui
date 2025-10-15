import React from 'react';
import { SmartBaseExternalClassName, SmartComponent, SmartEventHandler } from '../base';

export interface SmartSwitchProps {
  /**
   * 在表单内提交时的标识符
   */
  name?: string;

  /**
   * 开关选中状态
   *
   * @default false
   */
  checked?: any;

  /**
   * 是否为加载状态
   *
   * @default false
   */
  loading?: boolean;
  /**
   * 是否为禁用状态
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * 开关尺寸
   *
   * @default '30px'
   */
  size?: string;

  /**
   * 样式
   *
   */
  style?: React.CSSProperties;

  /**
   * 打开时的背景色
   *
   * @default '#1989fa'
   */
  activeColor?: string;

  /**
   * 关闭时的背景色
   *
   * @default '#fff'
   */
  inactiveColor?: string;

  /**
   * 打开时的值
   *
   * @default true
   */
  activeValue?: any;

  /**
   * 关闭时的值
   *
   * @default false
   */
  inactiveValue?: any;

  /**
   * 是否阻止冒泡
   *
   * @default false
   * @version 1.0.4
   */
  stopClickPropagation?: boolean;

  /**
   * 打开时的文字
   */
  activeText?: string;

  /**
   * 关闭时的文字
   */
  inactiveText?: string;
}

/**
 * @deprecated
 */
export interface SmartSwitchChangeEvent extends WechatMiniprogram.BaseEvent {
  detail: boolean;
}

export interface SmartSwitchEvents {
  /**
   * 开关状态切换回调
   */
  onChange?: SmartEventHandler<boolean>;
}

export interface SmartSwitchExternalClassName extends SmartBaseExternalClassName {
  /**
   * 圆点样式类
   */
  nodeClass?: string;
}

export type SmartSwitch = SmartComponent<
  SmartSwitchProps,
  SmartSwitchEvents,
  SmartSwitchExternalClassName
>;
