import { SmartComponent, SmartEventHandler } from '../base';

export interface CascaderOption {
  /**
   * 选项文字
   */
  text: string;
  /**
   * 选项对应的值
   */
  value: string | number;

  /**
   * 选项文字颜色
   */
  color?: string;

  /**
   * 子选项列表
   */
  options?: CascaderOption[];

  /**
   * 是否禁用
   */
  disabled?: boolean;

  /**
   * 为对应列添加额外的 class
   */
  className?: string;
}

export interface SmartCascaderProps {
  /**
   * 顶部标题
   */
  title?: string;

  /**
   * 选中项的值
   */
  value?: string | number;

  /**
   * 可选项数据源
   *
   * @default []
   */
  options?: CascaderOption[];

  /**
   * placeholder 提示
   *
   * @default 'Please select'
   */
  placeholder?: string;

  /**
   * 选中状态的高亮颜色
   *
   * @default '#1989fa'
   */
  activeColor?: string | number;

  /**
   * 是否开启手势左右滑动切换
   *
   * @default false
   */
  swipeable?: boolean;

  /**
   * 是否显示关闭图标
   *
   * @default true
   */
  closeable?: boolean;

  /**
   * 是否展示标题栏
   *
   * @default true
   */
  showHeader?: boolean;

  /**
   * 关闭图标名称或图片链接，等同于 Icon 组件的 name 属性
   *
   * @default 'cross'
   */
  closeIcon?: string;

  /**
   * 是否使用自定义标题的插槽
   *
   * @default false
   */
  useTitleSlot?: boolean;

  /**
   * 是否省略过长的标题文字
   *
   * @default true
   */
  ellipsis?: boolean;

  /**
   * 滚动阈值，标签数量超过阈值且总宽度超过标签栏宽度时开始横向滚动
   *
   * @default 5
   */
  swipeThreshold?: number;
}

export interface SmartCascaderData {
  /**
   * 当前操作选中的值
   *
   */
  value: string | number;
  /**
   * 当前选中的所有值
   */
  selectedOptions: CascaderOption[];

  /**
   * 当前选中标签的下标数值
   */
  tabIndex: number;
}

export interface SmartCascaderTabData {
  /**
   * 当前点击标签的文字
   *
   */
  title: string | number;
  /**
   * 当前点击标签的下标数值
   */
  tabIndex: number;
}

export interface SmartCascaderEvents {
  /**
   * 点击单元格时触发
   */
  onChange?: SmartEventHandler<SmartCascaderData>;
  /**
   * 全部选项选择完成后触发
   */
  onFinish?: SmartEventHandler<SmartCascaderData>;
  /**
   * 点击关闭图标时触发
   */
  onClose?: SmartEventHandler<null>;
  /**
   * 点击标签时触发
   */
  onClickTab?: SmartEventHandler<SmartCascaderTabData>;
}

export interface SmartCascaderSlot {
  slot?: {
    /**
     * 自定义标题，当 useTitleSlot 属性为 true 时生效
     */
    title?: React.ReactNode;
  };
}

export type SmartCascader = SmartComponent<
  SmartCascaderProps,
  SmartCascaderEvents,
  SmartCascaderSlot
>;
