import { SmartBaseExternalClassName, SmartComponent, SmartEventHandler } from '../base';

/**
 * 步骤配置项
 */
export interface SmartStepsOption {
  /**
   * 当前步骤名称
   */
  text?: string;
  /**
   * 当前步骤描述信息
   */
  desc?: string;
  /**
   * 当前步骤激活状态底部图标
   */
  inactiveIcon?: string;
  /**
   * 当前步骤未激活状态底部图标
   */
  activeIcon?: string;
}

export interface SmartStepsProps {
  /**
   * 当前步骤
   *
   * @default 0
   */
  active?: number;

  /**
   * 当前步骤配置
   */
  steps?: SmartStepsOption[];

  /**
   * 显示方向
   */
  direction?: 'horizontal' | 'vertical';

  /**
   * 激活状态颜色
   *
   * @default '#07c160'
   */
  activeColor?: string;

  /**
   * 未激活状态颜色
   *
   * @default '#969799'
   */
  inactiveColor?: string;

  /**
   * 激活状态底部图标，可选值见 `Icon` 组件
   *
   * @default 'checked'
   */
  activeIcon?: string;

  /**
   * 未激活状态底部图标，可选值见 `Icon` 组件
   */
  inactiveIcon?: string;
}

/**
 * @deprecated
 */
export interface SmartStepsClickStepEvent extends WechatMiniprogram.BaseEvent {
  /**
   * 当前选中步骤索引
   */
  detail: number;
}

export interface SmartStepsEvents {
  /**
   * 点击步骤时触发的事件
   */
  onClickStep?: SmartEventHandler<number>;
}

export interface SmartStepsExternalClassName extends SmartBaseExternalClassName {
  /**
   * 描述信息样式类
   */
  descClass?: string;
}

export type SmartSteps = SmartComponent<
  SmartStepsProps,
  SmartStepsEvents,
  SmartStepsExternalClassName
>;
