import { SmartComponent } from '../base';

export interface SmartBatteryProps {
  /**
   * 横向展示还是竖向展示
   *
   * @default 'vertical'
   */
  type?: 'horizontal' | 'vertical';

  /**
   * 大小
   *
   * @default 10
   */
  size?: number;

  /**
   * 值
   *
   * @default 70
   */
  value?: number;

  /**
   * 电量的颜色
   *
   * @version v2.6.2
   */
  color?: string;

  /**
   * 电量高的颜色
   *
   * @default '#70CF98'
   */
  highColor?: string;

  /**
   * 电量中的颜色
   *
   * @default '#F5A623'
   */
  middleColor?: string;

  /**
   * 电量低的颜色
   *
   * @default '#FF4444'
   */
  lowColor?: string;

  /**
   * 电量背景色
   *
   * @default 'rgba(0, 0, 0, .5)'
   */
  backgroundColor?: string;

  /**
   * 是否处于充电状态
   *
   * @default false
   * @version 2.10.0
   */
  inCharging?: boolean;

  /**
   * 是否显示电量文本
   *
   * @default false
   * @version 2.10.0
   */
  showText?: boolean;

  /**
   * 电量颜色计算规则回调函数，返回计算后的颜色值即可
   *
   * @default null
   */
  onCalcColor?: () => string;
}

export type SmartBattery = SmartComponent<SmartBatteryProps>;
