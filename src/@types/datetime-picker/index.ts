import React from 'react';
import { SmartComponent, SmartEventHandler } from '../base';

type TimeType = 'date' | 'time' | 'year-month' | 'datetime';

type TimeUnitType = 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second';
export interface SmartDateTimePickerProps {
  /**
   * 当前选中值，当 type 为 time时，请使用 HH:mm 格式传值
   */
  value?: string | number | Date;

  /**
   * 类型, 不建议动态修改
   *
   * @default 'datetime'
   */
  type?: TimeType;

  /**
   * 可选的最小时间，精确到分钟
   *
   * @default '十年前'
   */
  minDate?: number;

  /**
   * 可选的最大时间，精确到分钟
   *
   * @default 十年后
   */
  maxDate?: number;

  /**
   * 可选的最小小时，针对`time`类型
   *
   * @default 0
   */
  minHour?: number;

  /**
   * 可选的最大小时，针对`time`类型
   *
   * @default 23
   */
  maxHour?: number;

  /**
   * 可选的最小分钟，针对`time`类型
   *
   * @default 0
   */
  minMinute?: number;

  /**
   * 可选的最大分钟，针对`time`类型
   *
   * @default 59
   */
  maxMinute?: number;

  /**
   * 选项过滤函数
   * Ray组件不支持此属性
   */
  // filter?: (type?: string, values?: any) => any;

  /**
   * 选项格式化函数
   * Ray组件不支持此属性
   */
  // formatter?: (type?: string, value?: any) => any;

  /**
   * 顶部栏标题
   *
   * @default '''
   */
  title?: string;

  /**
   * 是否显示顶部栏
   *
   * @default true
   */
  showToolbar?: boolean;

  /**
   * 是否显示加载状态
   *
   * @default false
   */
  loading?: boolean;

  /**
   * 选项高度
   *
   * @default 44
   */
  itemHeight?: number;

  /**
   * 确认按钮文字
   *
   * @default 'Confirm'
   */
  confirmButtonText?: string;

  /**
   * 取消按钮文字
   *
   * @default 'Cancel'
   */
  cancelButtonText?: string;

  /**
   * 可见的选项个数
   *
   * @default 6
   */
  visibleItemCount?: number;

  /**
   * 年月日时分秒单位
   */
  locale?: {
    year?: string;
    month?: string;
    day?: string;
    hour?: string;
    minute?: string;
    second?: string;
  };
  /**
   * @description 组件选择值改变时是否需要动画过度效果
   * @version 2.2.0
   * @default true
   */
  changeAnimation?: boolean;
  /**
   * @description 字符串替换
   * @version 2.2.0
   */
  formatterMap?: Partial<Record<TimeUnitType, string | Record<string, string>>>;
  /**
   * @description 当设置 type: 'time' 时，此属性可开启12小时选择模式
   * @version 2.2.0
   * @default false
   */
  is12HourClock?: boolean;
  /**
   * @description 12小时选择模式时上午的文案
   * @version 2.2.0
   * @default 'AM'
   */
  amText?: string;
  /**
   * @description 12小时选择模式时下午的文案
   * @version 2.2.0
   * @default 'PM'
   */
  pmText?: string;
  /**
   * @description 设置列的顺序，同`flex order`属性，只是从样式角度修改列的顺序，逻辑还是不变
   * @version 2.2.0
   * @default []
   */
  columnsOrder?: number[];
  /**
   * @description 组件动画以及选择回调延迟时间
   * @version 2.3.7
   * @default 800 (ms)
   */
  animationTime?: number;
  /**
   * @description 选中项的样式
   * @version 2.3.7
   */
  activeStyle?: React.CSSProperties;
  /**
   * @description 设置任意列的样式
   * @version 2.3.7
   */
  columnStyles?: Partial<Record<TimeUnitType | '12HourClock', React.CSSProperties>>;
  /**
   * @description 设置任意列的文字样式
   * @version 2.3.7
   */
  fontStyles?: Partial<Record<TimeUnitType | '12HourClock', React.CSSProperties>>;
}

/**
 * @deprecated
 */
export interface SmartDateTimePickerBaseEvent extends WechatMiniprogram.BaseEvent {
  detail: number;
}

export interface SmartDateTimePickerEvents {
  /**
   * 当值变化时触发的事件
   */
  onInput?: SmartEventHandler<string | number>;

  /**
   * 当值变化时触发的事件
   */
  onChange?: SmartEventHandler<Record<string, any>>;

  /**
   * 点击完成按钮时触发的事件
   */
  onConfirm?: SmartEventHandler<number>;

  /**
   * 点击取消按钮时触发的事件
   */
  onCancel?: SmartEventHandler;

  /**
   * 继承picker动画开始事件
   */
  onAnimationStart?: () => void;

  /**
   * 继承picker动画结束事件
   */
  onAnimationEnd?: () => void;
}

export interface SmartDateTimePickerExternalClassName {
  /**
   * 选中项样式类
   */
  activeClass?: string;

  /**
   * 顶部栏样式类
   */
  toolbarClass?: string;

  /**
   * 列样式类
   */
  columnClass?: string;
}

export type SmartDateTimePicker = SmartComponent<
  SmartDateTimePickerProps,
  SmartDateTimePickerEvents,
  SmartDateTimePickerExternalClassName
>;
