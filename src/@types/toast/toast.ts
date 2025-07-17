/* eslint-disable @typescript-eslint/ban-types */
export interface SmartToastOptions {
  show?: boolean;
  /**
   * 组件id
   *
   */
  id?: string;
  /**
   * 提示类型
   *
   * @default 'text'
   */
  type?: 'loading' | 'success' | 'fail' | 'html' | 'text';
  /**
   * 位置
   *
   * @default 'middle'
   */
  position?: 'top' | 'middle' | 'bottom';
  /**
   * 内容
   *
   * @default ''
   */
  message?: string;
  /**
   * 是否显示遮罩层
   *
   * @default false
   */
  mask?: boolean;
  /**
   * 是否禁止背景点击
   *
   * @default false
   */
  forbidClick?: boolean;
  /**
   * 加载图标类型
   *
   * @default 'circular'
   */
  loadingType?: 'spinner' | 'circular';
  /**
   * `z-index` 层级
   *
   * @default 1000
   */
  zIndex?: number;
  /**
   * 展示时长(ms)，值为 `0` 时，`toast` 不会消失
   *
   * @default 2000
   */
  duration?: number;
  /**
   * 自定义选择器
   *
   * @default 'smart-toast'
   */
  selector?: string;
  /**
   * 选择器的选择范围，可以传入自定义组件的 `this` 作为上下文
   *
   * @default 当前页面
   */
  context?: object | (() => any);
  /**
   * 关闭时的回调函数
   */
  onClose?: Function;
  /**
   * 自定义 toast 宽度
   * @version `2.1.7`
   */
  width?: number;
  /**
   * 开启弹框期间是否禁用本地手势
   *
   * @default false
   * @version v2.5.0
   */
  nativeDisabled?: boolean;
}

export declare interface ToastInstance extends SmartToast {
  setData(options: SmartToastOptions): void;
}

export declare interface SmartToast {
  /**
   * 展示提示
   */
  (options: string): ToastInstance;
  (options: SmartToastOptions): ToastInstance;

  /**
   * 展示加载提示
   */
  loading(options: string): ToastInstance;
  loading(options: SmartToastOptions): ToastInstance;

  /**
   * 展示成功提示
   */
  success(options: string): ToastInstance;
  success(options: SmartToastOptions): ToastInstance;

  /**
   * 展示失败提示
   */
  fail(options: string): ToastInstance;
  fail(options: SmartToastOptions): ToastInstance;

  /**
   * 关闭提示
   */
  clear(): void;

  /**
   * 修改默认配置，对所有 Toast 生效
   */
  setDefaultOptions(options: SmartToastOptions): void;

  /**
   * 重置默认配置，对所有 Toast 生效
   */
  resetDefaultOptions(): void;
}

type Toast = SmartToast;

/**
 * @deprecated
 */
declare const Toast: Toast;
export default Toast;
