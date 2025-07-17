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
   * 进度条颜色，传入对象格式可以定义渐变色
   *
   * @default '#1989fa'
   */
  color?: string | Record<string, string>;

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
   * 电量颜色计算规则回调函数，返回计算后的颜色值即可
   *
   * @default null
   */
  onCalcColor?: () => string;
}

export type SmartBattery = SmartComponent<SmartBatteryProps>;
