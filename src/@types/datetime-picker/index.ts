import { SmartComponent, SmartEventHandler } from '../base';

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
  type?: 'date' | 'time' | 'year-month' | 'datetime';

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
  onInput?: SmartEventHandler<number>;

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
