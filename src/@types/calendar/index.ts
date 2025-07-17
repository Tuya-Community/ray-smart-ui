import { SmartComponent, SmartEventHandler } from '../base';

export interface Day {
  /**
   * 日期对应的 Date 对象
   */
  date?: Date;

  /**
   * 日期类型
   */
  type?: 'selected' | 'start' | 'middle' | 'end' | 'disabled';

  /**
   * 中间显示的文字
   */
  text?: string;

  /**
   * 上方的提示信息
   */
  topInfo?: string;

  /**
   * 下方的提示信息
   */
  bottomInfo?: string;

  /**
   * 自定义 `className`
   */
  className?: string;

  slot?: {
    /**
     * 自定义 title 显示内容，如果设置了 title 属性则不生效
     */
    title?: React.ReactNode;
    /**
     * 自定义底部区域内容
     */
    footer?: React.ReactNode;
  };
}

export interface SmartCalendarPoppableProps {
  /**
   * 当`Canlendar`的`poppable`为`true`时有效
   *
   * 是否显示日历弹窗
   *
   * @default false
   */
  show?: boolean;

  /**
   * 当`Calendar`的`poppable`为`true`时有效
   *
   * 弹出位置
   *
   * @default 'bottom'
   */
  position?: 'top' | 'right' | 'left' | 'bottom';

  /**
   * 当`Calendar`的`poppable`为`true`时有效
   *
   * 是否显示圆角弹窗
   *
   * @default true
   */
  round?: boolean;
  /**
   * 当`Calendar`的`poppable`为`true`时有效
   *
   * 是否在点击遮罩层后关闭
   *
   * @default true
   */
  closeOnClickOverlay?: boolean;
  /**
   * `Calendar`的`poppable`为`true`时有效
   *
   * 是否开启底部安全区适配
   *
   * @default true
   */
  safeAreaInsetBottom?: boolean;
}

export interface SmartCalendarRangeProps {
  /**
   * `Calendar`的`type`为`range`时有效
   *
   * 日期区间最多可选天数，默认无限制
   */
  maxRange?: string | number;

  /**
   * `Calendar`的`type`为`range`时有效
   *
   * 范围选择超过最多可选天数时的提示文案
   *
   * @default '选择天数不能超过 xx 天'
   */
  rangePrompt?: string | null;

  /**
   * `Calendar`的`type`为`range`时有效
   *
   * 范围选择超过最多可选天数时，是否展示提示文案
   *
   * @default true
   */
  showRangePrompt?: boolean;

  /**
   * `Calendar`的`type`为`range`时有效
   *
   * 是否允许日期范围的起止时间为同一天
   *
   * @default false
   */
  allowSameDay?: boolean;
}

export interface SmartCalendarProps extends SmartCalendarRangeProps, SmartCalendarPoppableProps {
  /**
   * 选择类型
   *
   * `single` 表示选择单个日期
   *
   * `multiple` 表示选择多个日期
   *
   * `range` 表示选择日期区间
   *
   * @default 'single'
   */
  type?: 'single' | 'multiple' | 'range';

  /**
   * 日历标题
   *
   * @default '日期选择'
   */
  title?: string;

  /**
   * 主题色，对底部按钮和选中日期生效
   *
   * @default '#ee0a24'
   */
  color?: string;
  /**
   * 可选择的最小日期
   *
   * @default 当前日期的`timestamp`
   */
  minDate?: number;
  /**
   * 可选择的最大日期
   *
   * @default 当前日期的六个月后的`timestamp`
   */
  maxDate?: number;

  /**
   * 默认选中的日期，`type`为`multiple`或`range`时为数组
   *
   * @default 今天的`timestamp`
   */
  defaultDate?: number | number[];

  /**
   * 日期行高
   *
   * @default 64
   */
  rowHeight?: number | string;

  /**
   * 日期格式化函数
   */
  formatter?: (day: Day) => Day;

  /**
   * 语言包, 具体字段如下
   * @param {string} subFormatter - 副标题的日期格式
   * @param {string[]} shortWeekDays - 周的名称
   * @param {string} rangeStart - 范围选择的起始文字
   * @param {string} rangeEnd - 范围选择的结束文字
   * @version 1.2.0
   * @example {
        shortWeekDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        subFormatter: 'YYYY-MM',
        rangeStart: 'Start',
        rangeEnd: 'End',
      }
   * @default {}
   */
  locale?: {
    subFormatter?: string;
    shortWeekDays?: string[];
    rangeStart?: string;
    rangeEnd?: string;
  };

  /**
   * 是否以弹层的形式展示日历
   *
   * @default true
   */
  poppable?: boolean;

  /**
   * 是否显示月份背景水印
   *
   * @default true
   */
  showMark?: boolean;

  /**
   * 是否展示日历标题
   *
   * @default true
   */
  showTitle?: boolean;

  /**
   * 是否展示日历副标题（年月）
   *
   * @default true
   */
  showSubtitle?: boolean;

  /**
   * 是否展示确认按钮
   *
   * @default true
   */
  showConfirm?: boolean;

  /**
   * 确认按钮的文字
   *
   * @default '确定'
   */
  confirmText?: string;

  /**
   * 确认按钮处于禁用状态时的文字
   *
   * @default '确定'
   */

  confirmDisabledText?: string;

  /**
   * 设置周起始日
   *
   * 范围为`[0, 6]`
   *
   * @default 0
   */
  firstDayOfWeek?: number;

  /**
   * 是否为只读状态，只读状态下不能选择日期
   *
   * @default false
   */
  readonly?: boolean;
}

export interface SmartCalendarEvents {
  /**
   * 点击任意日期时触发
   */
  onSelect?: SmartEventHandler<Date | Date[]>;

  /**
   * 当`Calendar`的`type`为`multiple`时,点击已选中的日期时触发
   */
  onUnselect?: SmartEventHandler<Date>;

  /**
   * 日期选择完成后触发，若`show-confirm`为`true`，则点击确认按钮后触发
   */
  onConfirm?: SmartEventHandler<Date | Date[]>;

  /**
   * 打开弹出层时触发
   */
  onOpen?: SmartEventHandler;

  /**
   * 关闭弹出层时触发
   */
  onClose?: SmartEventHandler;

  /**
   * 打开弹出层且动画结束后触发
   */
  onOpened?: SmartEventHandler;

  /**
   * 关闭弹出层且动画结束后触发
   */
  onClosed?: SmartEventHandler;

  /**
   * 范围选择超过最多可选天数时触发
   */
  onOverRange?: SmartEventHandler;

  /**
   * 点击日历副标题时触发
   */
  onClickSubtitle?: (e: WechatMiniprogram.CustomEvent<WechatMiniprogram.TouchEvent>) => void;
}

export type SmartCalendar = SmartComponent<SmartCalendarProps, SmartCalendarEvents>;
