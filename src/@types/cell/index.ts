import {
  TouchPositionDetail,
  SmartBaseExternalClassName,
  SmartComponent,
  SmartEventHandler,
} from '../base';

export interface SmartCellProps {
  /**
   * 左侧图标名称或图片链接，可选值见 Icon 组件
   */
  icon?: string;

  /**
   * 左侧标题
   */
  title?: string | number;

  /**
   * 标题宽度，须包含单位
   */
  titleWidth?: string;

  /**
   * 右侧内容
   */
  value?: string | number;

  /**
   * 标题下方的描述信息
   */
  label?: string;

  /**
   * 单元格大小
   */
  // size?: 'large';

  /**
   * 是否显示下边框
   *
   * @default true
   */
  border?: boolean;

  /**
   * 是否使内容垂直居中
   *
   * @default false
   */
  // center?: boolean;

  /**
   * 点击后跳转的链接地址
   */
  url?: string;

  /**
   * 链接跳转类型
   *
   * @default 'navigateTo'
   */
  linkType?: 'redirectTo' | 'switchTab' | 'reLaunch';

  /**
   * 是否开启点击反馈
   *
   * @default false
   */
  clickable?: boolean;

  /**
   * 是否展示右侧箭头并开启点击反馈
   *
   * @default false
   */
  isLink?: boolean;

  /**
   * 是否显示表单必填星号
   *
   * @default false
   */
  required?: boolean;

  /**
   * 箭头方向
   */
  arrowDirection?: 'left' | 'up' | 'down';

  /**
   * 是否使用`label slot`
   *
   * @default false
   */
  useLabelSlot?: boolean;

  /**
   * 标题样式
   */
  titleStyle?: React.CSSProperties;
}

export interface SmartCellEvents {
  /**
   * 点击单元格时触发
   */
  onClick?: SmartEventHandler<TouchPositionDetail>;
}

export interface SmartCellExternalClassName extends SmartBaseExternalClassName {
  /**
   * 标题样式类
   */
  titleClass?: string;

  /**
   * 描述信息样式类
   */
  labelClass?: string;

  /**
   * 右侧内容样式类
   */
  valueClass?: string;
}

export interface SmartCellSlot {
  /**
   * 自定义 value 显示内容，如果设置了 value 属性则不生效
   */
  children?: React.ReactNode;
  /**
   * Cell Slot
   */
  slot?: {
    /**
     * 自定义 title 显示内容，如果设置了 title 属性则不生效
     */
    title?: React.ReactNode;
    /**
     * 	自定义 label 显示内容，需要设置 use-label-slot 属性
     */
    label?: React.ReactNode;
    /**
     * 自定义 icon 显示内容，如果设置了 icon 属性则不生效
     */
    icon?: React.ReactNode;
    /**
     * 自定义右侧按钮，默认是 arrow，如果设置了 is-link 属性则不生效
     */
    rightIcon?: React.ReactNode;
  };
}

export type SmartCell = SmartComponent<
  SmartCellProps,
  SmartCellEvents,
  SmartCellExternalClassName,
  SmartCellSlot
>;
