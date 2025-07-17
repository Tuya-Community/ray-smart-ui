import { SmartComponent, SmartEventHandler } from '../base';

export interface SmartTreeSelectItem {
  /**
   * 作为匹配选中状态的标识
   */
  id?: number | string;

  /**
   * 导航名称
   */
  text?: string;

  /**
   * 导航名称右上角徽标，
   */
  badge?: number;

  /**
   * 是否在导航名称右上角显示小红点
   */
  dot?: boolean;

  /**
   * 禁用选项
   */
  disabled?: boolean;

  /**
   * 该导航下所有的可选项
   */
  options?: SmartTreeSelectItem[];
}

export interface SmartTreeSelectProps {
  /**
   * 分类显示所需的数据
   *
   * @default []
   */
  items?: SmartTreeSelectItem[];

  /**
   * 高度，默认单位为`px`
   *
   * @default 300
   */
  height?: number | string;

  /**
   * 左侧选中项的索引
   *
   * @default 0
   */
  mainActiveIndex?: number;

  /**
   * 右侧选中项的 id，支持传入数组
   *
   * @default 0
   */
  activeId?: string | number | (string | number)[];

  /**
   * 右侧项最大选中个数
   *
   * @default Infinity
   */
  max?: number;

  /**
   * 自定义右侧栏选中状态的图标
   *
   * @default 'success'
   */
  selectedIcon?: string;
}

/**
 * 左侧导航点击时，触发的事件详情
 */
export interface SmartTreeSelectClickNavDetail {
  /**
   * 被点击的导航的索引
   */
  index: number;
}

export interface SmartTreeSelectEvents {
  /**
   * 左侧导航点击时，触发的事件
   */
  onClickNav?: SmartEventHandler<SmartTreeSelectClickNavDetail>;

  /**
   * 右侧选择项被点击时，会触发的事件
   */
  onClickItem?: SmartEventHandler<SmartTreeSelectItem>;
}

export interface SmartTreeSelectExternalClassName {
  /**
   * 左侧选项样式类
   */
  mainItemClass?: string;

  /**
   * 右侧选项样式类
   */
  contentItemClass?: string;

  /**
   * 左侧选项选中样式类
   */
  mainActiveClass?: string;

  /**
   * 右侧选项选中样式类
   */
  contentActiveClass?: string;

  /**
   * 左侧选项禁用样式类
   */
  mainDisabledClass?: string;

  /**
   * 右侧选项禁用样式类
   */
  contentDisabledClass?: string;
}

export interface SmartTreeSelectSlot {
  slot?: {
    /**
     * 自定义右侧区域内容，如果存在 items，则插入在顶部
     */
    content?: React.ReactNode;
  };
}

export type SmartTreeSelect = SmartComponent<
  SmartTreeSelectProps,
  SmartTreeSelectEvents,
  SmartTreeSelectExternalClassName,
  SmartTreeSelectSlot
>;
