import { SmartComponent, SmartEventHandler } from '../base';

export interface SmartCountDownProps {
  /**
   * 倒计时时长，单位毫秒
   */
  time?: number;

  /**
   * 时间格式
   *
   * `DD-日`
   *
   * `HH-时`
   *
   * `mm-分`
   *
   * `ss-秒`
   *
   * `SSS-毫秒`
   *
   * @default 'HH:mm:ss'
   */
  format?: string;

  /**
   * 是否自动开始倒计时
   *
   * @default true
   */
  autoStart?: boolean;

  /**
   * 是否开启毫秒级渲染
   *
   * @default false
   */
  millisecond?: boolean;

  /**
   * 是否使用自定义样式插槽
   *
   * @default false
   */
  useSlot?: boolean;
}

export interface SmartCountDownTimeData {
  /**
   * 剩余天数
   */
  days: number;

  /**
   * 剩余小时
   */
  hours: number;

  /**
   * 剩余分钟
   */
  minutes: number;

  /**
   * 剩余秒数
   */
  seconds: number;

  /**
   * 剩余毫秒
   */
  milliseconds: number;
}

export interface SmartCountDownEvents {
  /**
   * 倒计时结束时触发
   */
  onFinish?: SmartEventHandler;

  /**
   * 时间变化时触发，仅在开启`use-slot`后才会触发
   */
  onChange?: SmartEventHandler<SmartCountDownTimeData>;
}

export interface SmartCountDownSlot {
  /**
   * 自定义倒计时显示内容，设置了 useSlot 属性为 true 才生效
   */
  children?: React.ReactNode;
}

export type SmartCountDown = SmartComponent<
  SmartCountDownProps,
  SmartCountDownEvents,
  SmartCountDownSlot
>;
