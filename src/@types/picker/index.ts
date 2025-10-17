import React from 'react';
import { SmartBaseExternalClassName, SmartComponent, SmartEventHandler } from '../base';

export type SmartPickerSingleColumn = string | Record<string, unknown>;

export interface SmartPickerMultipleColumn {
  /**
   * 列中对应的备选值
   */
  values: SmartPickerSingleColumn[];

  /**
   * 列的样式
   * @version 2.0.0
   */
  style?: React.CSSProperties;
  /**
   * @description 列的字体样式
   * @version 2.3.5
   */
  fontStyle?: React.CSSProperties;
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

  /**
   * @description 组件选择值改变时是否需要动画过度效果
   * @version 2.2.0
   * @default true
   */
  changeAnimation?: boolean;

  /**
   * @description 设置列的顺序，同`flex order`属性，只是从样式角度修改列的顺序，逻辑还是不变
   * @version 2.2.0
   */
  order?: number;

  /**
   * @description 禁用此列的滚动
   * @version 2.3.5
   */
  disabled?: boolean;

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
  /**
   * 选中状态的样式
   * @version 2.0.0
   * @default ''
   */
  activeStyle?: React.CSSProperties;
  /**
   * @description 组件选择值改变时是否需要动画过度效果
   * @version 2.2.0
   * @default false (原为true 2.3.9版本调整为false)
   */
  changeAnimation?: boolean;
  /**
   * @description 组件动画以及选择回调延迟时间
   * @version 2.3.7
   * @default 800 (ms)
   */
  animationTime?: number;
  /**
   * @description 循环滚动
   * @version 2.7.0
   * @default false
   */
  loop?: boolean;
  /**
   * @description 是否高度直接等于 `visibleItemCount * itemHeight`, 组件默认会再 `* 0.9` 缩小最外层可视的高度
   * @version 2.7.0
   * @default false
   */
  fullHeight?: boolean;
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

  /**
   * 滚动动画开始的回调
   * @version 2.3.0
   */
  onAnimationStart?: () => void;

  /**
   * 滚动动画结束的回调
   * @version 2.3.0
   */
  onAnimationEnd?: () => void;
}

export interface SmartPickerExternalClassName extends SmartBaseExternalClassName {
  /**
   * 选中项样式类
   * @deprecated
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

  /**
   * @description 分割线样式
   * @version 2.6.0
   */
  hairlineClass?: string;
}

export type SmartPicker = SmartComponent<
  SmartPickerProps,
  SmartPickerEvents,
  SmartPickerExternalClassName
>;
