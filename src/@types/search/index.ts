import { SmartBaseExternalClassName, SmartComponent, SmartEventHandler } from '../base';
import { SmartFieldEvents } from '../field';

export interface SmartSearchProps {
  /**
   * 在表单内提交时的标识符
   */
  name?: string;

  /**
   * 搜索框左侧文本
   */
  label?: string;

  /**
   * 形状
   *
   * @default 'square'
   */
  shape?: 'round' | 'square';

  /**
   * 当前输入的值
   */
  value?: string | number;

  /**
   * 搜索框背景色
   *
   */
  background?: string;

  /**
   * 是否在搜索框右侧显示取消按钮
   *
   * @default false
   */
  showAction?: boolean;

  /**
   * 取取消按钮文本
   * @default 'cancel'
   */
  actionText?: string;

  /**
   * 获取焦点
   *
   * @default false
   */
  focus?: boolean;

  /**
   * 是否将输入内容标红
   *
   * @default false
   */
  error?: boolean;

  /**
   * 是否禁用输入框
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * 是否只读
   *
   * @default false
   */
  readonly?: boolean;

  /**
   * 是否启用清除控件
   *
   * @default true
   */
  clearable?: boolean;

  /**
   * 显示清除图标的时机，`always`表示输入框不为空时展示，
   * `focus`表示输入框聚焦且不为空时展示
   *
   * @default 'focus'
   */
  clearTrigger?: 'always' | 'focus';

  /**
   * 清除图标svg字符串或图片链接
   *
   * @default 'clear'
   */
  clearIcon?: string;

  /**
   * 最大输入长度，设置为`-1`的时候不限制最大长度
   *
   * @default -1
   */
  maxlength?: number;

  /**
   * 是否使用 `action slot`
   *
   * @default false
   */
  useActionSlot?: boolean;

  /**
   * 输入框为空时占位符
   */
  placeholder?: string;

  /**
   * 指定占位符的样式
   */
  placeholderStyle?: React.CSSProperties;

  /**
   * 输入框内容对齐方式
   *
   * @default 'left'
   */
  inputAlign?: 'left' | 'center' | 'right';

  /**
   * 是否使用输入框左侧图标 `slot`
   *
   * @default false
   */
  useLeftIconSlot?: boolean;

  /**
   * 是否使用输入框右侧图标`slot`
   *
   * @default false
   */
  useRightIconSlot?: boolean;

  /**
   * 输入框左侧图标名称或图片链接，可选值见`Icon`组件（如果设置了`use-left-icon-slot`，则该属性无效）
   *
   * @default 'search'
   */
  leftIcon?: string;

  /**
   * 输入框右侧图标名称或图片链接，可选值见`Icon`组件（如果设置了`use-right-icon-slot`，则该属性无效）
   */
  rightIcon?: string;

  /**
   * 搜索按钮文本
   * @default 'Search'
   * @version v2.0.0
   */
  searchText?: string;
}

export interface SmartSearchSlot {
  /**
   * Field Slot
   */
  slot?: {
    /**
     * 自定义搜索框右侧按钮
     * 需要在`useActionSlot`为 true 时才会启效
     */
    action?: React.ReactNode;
    /**
     * 自定义搜索框左侧文本，如果设置了label属性则不生效
     */
    label?: React.ReactNode;
    /**
     * 自定义搜索框左侧文本
     * 需要在`useLeftIconSlot`为 true 时才会启效
     */
    leftIcon?: React.ReactNode;
    /**
     * 自定义输入框尾部图标
     * 需要在`useRightIconSlot`为 true 时才会启效
     */
    rightIcon?: React.ReactNode;
    /**
     * 自定义搜索按钮
     */
    searchButton?: React.ReactNode;
  };
}

/**
 * @deprecated
 */
export interface SmartSearchBaseEvent extends WechatMiniprogram.BaseEvent {
  detail: string;
}

export interface SmartSearchEvents
  extends Pick<SmartFieldEvents, 'onChange' | 'onFocus' | 'onBlur' | 'onClear' | 'onClickInput'> {
  /**
   * 确定搜索时触发
   */
  onSearch?: SmartEventHandler<string>;

  /**
   * 取消搜索搜索时触发
   */
  onCancel?: SmartEventHandler;
}

export interface SmartSearchExternalClassName extends SmartBaseExternalClassName {
  /**
   * 搜索框样式类
   */
  fieldClass?: string;

  /**
   * 输入框样式类
   */
  inputClass?: string;

  /**
   * 取消按钮样式类
   */
  cancelClass?: string;
}

export type SmartSearch = SmartComponent<
  SmartSearchProps,
  SmartSearchEvents,
  SmartSearchExternalClassName,
  SmartSearchSlot
>;
