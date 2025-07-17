// import { SmartOpenTypeProps } from '..';
import { SmartDialogProps } from './index';

type SmartDialogCommonProps = Pick<
  SmartDialogProps,
  'title' | 'width' | 'message' | 'theme' | 'overlay' | 'transition' | 'icon'
>;

// eslint-disable-next-line @typescript-eslint/ban-types
type AnyObject = {};

export type SmartDialogOptions = {
  /**
   * 内容对齐方式
   *
   * @default 'center'
   */
  messageAlign?: SmartDialogProps['messageAlign'];

  /**
   * `z-index`层级
   *
   * @default 100
   */
  zIndex?: SmartDialogProps['zIndex'];

  /**
   * 自定义类名，`dialog` 在自定义组件内时无效
   *
   * @default ''
   */
  className?: SmartDialogProps['className'];

  /**
   * 自定义样式
   *
   * @default ''
   */
  customStyle?: SmartDialogProps['customStyle'];

  /**
   * 自定义选择器
   *
   * @default 'smart-dialog'
   */
  selector?: string;

  /**
   * 是否展示确认按钮
   *
   * @default true
   */
  showConfirmButton?: SmartDialogProps['showConfirmButton'];

  /**
   * 是否展示取消按钮
   *
   * @default false
   */
  showCancelButton?: SmartDialogProps['showCancelButton'];

  /**
   * 确认按钮的文案
   *
   * @default '确认'
   */
  confirmButtonText?: SmartDialogProps['confirmButtonText'];

  /**
   * 取消按钮的文案
   *
   * @default '取消'
   */
  cancelButtonText?: SmartDialogProps['cancelButtonText'];

  /**
   * 自定义遮罩层样式
   */
  overlayStyle?: SmartDialogProps['overlayStyle'];

  /**
   * 点击遮罩层时是否关闭弹窗
   *
   * @default false
   */
  closeOnClickOverlay?: SmartDialogProps['closeOnClickOverlay'];

  /**
   * 关闭前的回调函数，返回 `false` 可阻止关闭，支持返回 `Promise`
   */
  beforeClose?: SmartDialogProps['beforeClose'];

  /**
   * 选择器的选择范围，可以传入自定义组件的 `this` 作为上下文
   *
   * @default 当前页面
   */
  context?: WechatMiniprogram.Page.TrivialInstance | WechatMiniprogram.Component.TrivialInstance;
} & SmartDialogCommonProps;

export interface SmartDialogInputOptions extends SmartDialogOptions {
  /**
   * 输入框的值
   */
  value: string;
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
}

export interface SmartDialogInstance {
  /**
   * 展示弹窗
   */
  (options: SmartDialogOptions): Promise<WechatMiniprogram.Component.TrivialInstance>;

  /**
   * 展示消息提示弹窗
   */
  alert(options: SmartDialogOptions): Promise<WechatMiniprogram.Component.TrivialInstance>;

  /**
   * 展示消息确认弹窗
   */
  confirm(options: SmartDialogOptions): Promise<WechatMiniprogram.Component.TrivialInstance>;

  /**
   * 展示输入确认弹窗
   */
  input(options: SmartDialogInputOptions): Promise<
    WechatMiniprogram.Component.Instance<
      {
        /**
         * 输入框的当前值
         */
        inputValue: string;
      },
      AnyObject,
      AnyObject
    >
  >;

  /**
   * 修改默认配置，对所有 `Dialog` 生效
   */
  setDefaultOptions(options: SmartDialogOptions): void;

  /**
   * 重置默认配置，对所有 `Dialog` 生效
   */
  resetDefaultOptions(): void;

  /**
   * 关闭弹窗
   */
  close(): void;

  /**
   * 停止按钮的加载状态
   */
  stopLoading(): void;
}
