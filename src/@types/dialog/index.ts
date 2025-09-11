import {
  SmartComponent,
  SmartEventHandler,
  // SmartOpenTypeEvents,
  SmartOpenTypeProps,
  // WechatOpenType,
} from '../base';

export interface SmartDialogProps extends SmartOpenTypeProps {
  /**
   * 是否显示弹窗
   */
  show?: boolean;

  /**
   * 标题
   */
  title?: string;

  /**
   * 是否显示警告图标 或 图标name属性
   * @version 2.6.3 版本支持 string
   */
  icon?: boolean | string;
  /**
   * 图标颜色
   * @version 2.6.3
   */
  iconColor?: string;
  /**
   * 图标大小
   * @version 2.6.3
   */
  iconSize?: string;
  /**
   * 输入框的值
   */
  value?: string;
  /**
   * 输入框的类型
   */
  type?: string;
  /**
   * 是否是密码类型
   */
  password?: boolean;
  /**
   * 输入框为空时的占位符
   */
  placeholder?: string;
  /**
   * 输入框的最大输入长度
   */
  maxlength?: number;

  /**
   * 弹窗宽度，默认单位为`px`
   *
   * @default '320px'
   */
  width?: string | number;

  /**
   * 文本内容，支持通过`\n`换行
   */
  message?: string;

  /**
   * 样式风格
   *
   * @default 'default'
   */
  theme?: 'default' | 'round-button';

  /**
   * 内容对齐方式
   *
   * @default 'center'
   */
  messageAlign?: 'left' | 'center' | 'right' | 'justify';

  /**
   * `z-index`层级
   *
   * @default 100
   */
  zIndex?: number;

  /**
   * 自定义类名，`dialog` 在自定义组件内时无效
   *
   * @default ''
   */
  className?: string;

  /**
   * 自定义样式
   *
   * @default ''
   */
  customStyle?: React.CSSProperties;

  /**
   * 根节点样式类
   */
  customClass?: string;

  /**
   * 	取消按钮样式类
   */
  cancelButtonClass?: string;

  /**
   * 确认按钮样式类
   */
  confirmButtonClass?: string;

  /**
   * 是否展示确认按钮
   *
   * @default true
   */
  showConfirmButton?: boolean;

  /**
   * 是否展示取消按钮
   *
   * @default false
   */
  showCancelButton?: boolean;

  /**
   * 确认按钮的文案
   *
   * @default 'Confirm'
   */
  confirmButtonText?: string;

  /**
   * 取消按钮的文案
   *
   * @default 'Cancel'
   */
  cancelButtonText?: string;

  /**
   * 确认按钮的字体颜色
   *
   * @default '#ee0a24'
   */
  confirmButtonColor?: string;

  /**
   * 取消按钮的字体颜色
   *
   * @default '#333'
   */
  cancelButtonColor?: string;

  /**
   * 是否展示遮罩层
   *
   * @default true
   */
  overlay?: boolean;

  /**
   * 自定义遮罩层样式
   */
  overlayStyle?: Partial<CSSStyleDeclaration>;

  /**
   * 点击遮罩层时是否关闭弹窗
   *
   * @default false
   */
  closeOnClickOverlay?: boolean;

  /**
   * 是否使用自定义内容的插槽
   *
   * @default false
   */
  useSlot?: boolean;

  /**
   * 是否使用自定义标题的插槽
   *
   * @default false
   */
  useTitleSlot?: boolean;

  /**
   * 关闭前的回调函数，返回 `false` 可阻止关闭，支持返回 `Promise`
   */
  beforeClose?: (
    action: 'confirm' | 'cancel' | 'overlay',
    value?: string
  ) => boolean | Promise<boolean>;

  /**
   * 动画名称
   *
   * @default 'scale'
   */
  transition?: 'fade' | 'scale' | 'none';

  /**
   * 开启弹框期间是否禁用本地手势
   *
   * @default false
   * @version 2.3.8
   */
  nativeDisabled?: boolean;

  /**
   * @description 回调自动关闭弹框
   * @default false
   * @version 2.6.3
   */
  autoClose?: boolean;

  // /**
  //  * 确认按钮的微信开放能力，具体支持可参考 微信官方文档
  //  */
  // confirmButtonOpenType?: WechatOpenType;
}

export interface SmartDialogEvents {
  /**
   * 弹窗关闭时触发
   */
  onClose?: SmartEventHandler;

  /**
   * 点击确认按钮时触发
   */
  onConfirm?: SmartEventHandler;

  /**
   * 点击取消按钮时触发
   */
  onCancel?: SmartEventHandler;
}

export type SmartDialog = SmartComponent<Omit<SmartDialogProps, 'beforeClose'>, SmartDialogEvents>;
