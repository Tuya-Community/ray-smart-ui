import { SmartBaseExternalClassName, SmartComponent, SmartEventHandler } from '../base';

export interface SmartRadioProps {
  /**
   * 标识符
   */
  name?: string;

  /**
   * 形状
   */
  shape?: 'square' | 'round';

  /**
   * 是否为禁用状态
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * 是否禁用文本内容点击
   *
   * @default false
   */
  labelDisabled?: boolean;

  /**
   * 文本位置
   */
  labelPosition?: 'left' | 'right';

  /**
   * 图标大小，默认单位为`px`
   *
   * @default '20px'
   */
  iconSize?: string | number;

  /**
   * 选中状态颜色
   *
   * @default '#1989fa'
   */
  checkedColor?: string;

  /**
   * 是否使用`icon`插槽
   *
   * @default false
   */
  useIconSlot?: boolean;
}

/**
 * @deprecated
 */
export interface SmartRadioChangeEvent extends WechatMiniprogram.BaseEvent {
  detail: string;
}

export interface SmartRadioEvents {
  /**
   * 当绑定值变化时触发的事件
   */
  onchange?: SmartEventHandler<string>;
}

export interface SmartRadioExternalClassName extends SmartBaseExternalClassName {
  /**
   * 图标样式类
   */
  iconClass?: string;

  /**
   * 描述信息样式类
   */
  labelClass?: string;
}

export interface SmartRadioSlot {
  children?: React.ReactNode;
  /**
   * Cell Slot
   */
  slot?: {
    /**
     * 自定义 icon 显示内容
     */
    icon?: React.ReactNode;
  };
}

export type SmartRadio = SmartComponent<
  SmartRadioProps,
  SmartRadioEvents,
  SmartRadioExternalClassName,
  SmartRadioSlot
>;
