import { SmartBaseExternalClassName, SmartComponent, SmartEventHandler } from '../base';

export type SmartPickerSingleColumn = string | Record<string, unknown>;

export interface SmartPickerMultipleColumn {
  /**
   * 列中对应的备选值
   */
  values: SmartPickerSingleColumn[];

  /**
   * 初始选中项的索引，默认为 `0`
   *
   * @default 0
   */
  defaultIndex?: number;

  /**
   * 当前选中项的索引，默认为 `-1`
   *
   * @default -1
   */
  activeIndex?: number;

  /**
   * 列数据的单位
   */
  unit?: string;

  [key: string]: unknown;
}

export interface SmartPickerProps {
  /**
   * 对象数组，配置每一列显示的数据
   *
   * @default []
   */
  columns?: SmartPickerSingleColumn[] | SmartPickerMultipleColumn[];

  /**
   * 是否显示顶部栏
   *
   * @default false
   */
  showToolbar?: boolean;

  /**
   * 顶部栏位置
   *
   * @default 'top'
   */
  toolbarPosition?: 'bottom' | 'top';

  /**
   * 顶部栏标题
   *
   * @default ''
   */
  title?: string;

  /**
   * 是否显示加载状态
   *
   * @default false
   */
  loading?: boolean;

  /**
   * 选项对象中，文字对应的 `key`
   *
   * @default 'text'
   */
  valueKey?: string;

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
   * 单列选择器的默认选中项索引
   *
   * @default 0
   */
  defaultIndex?: number;
  /**
   * 单列选择器的当前选中项索引
   *
   * @default 0
   */
  activeIndex?: number;
  /**
   * 单列选择器的单位
   *
   * @default 0
   */
  unit?: string;
}

export interface SmartPickerBaseEventDetail {
  index: number | number[];
  picker: Record<string, any>;
  value: string[];
}

export interface SmartPickerChangeEventDetail extends Omit<SmartPickerBaseEventDetail, 'index'> {
  index: number;
}

export interface SmartPickerEvents {
  /**
   * 点击完成按钮时触发
   *
   * 单列：选中值，选中值对应的索引
   *
   * 多列：所有列选中值，所有列选中值对应的索引
   */
  onConfirm?: SmartEventHandler<SmartPickerBaseEventDetail>;

  /**
   * 点击取消按钮时触发
   *
   * 单列：选中值，选中值对应的索引
   *
   * 多列：所有列选中值，所有列选中值对应的索引
   */
  onCancel?: SmartEventHandler<SmartPickerChangeEventDetail>;

  /**
   * 选项改变时触发
   *
   * 单列：`Picker` 实例，选中值，选中值对应的索引
   *
   * 多列：`Picker` 实例，所有列选中值，当前列对应的索引
   */
  onChange?: SmartEventHandler<SmartPickerBaseEventDetail>;
}

export interface SmartPickerExternalClassName extends SmartBaseExternalClassName {
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

export type SmartPicker = SmartComponent<
  SmartPickerProps,
  SmartPickerEvents,
  SmartPickerExternalClassName
>;
