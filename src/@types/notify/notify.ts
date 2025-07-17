export interface SmartNotifyProps {
  /**
   * 在页面内添加自定义节点的标识符
   */
  id: string;

  /**
   * 是否使用自定义样式插槽
   *
   * @default false
   */
  useSlot?: boolean;

  /**
   * 动画类型
   *
   * `fade` 淡入
   *
   * `fade-up` 上滑淡入
   *
   * `fade-down` 下滑淡入
   *
   * `fade-left` 左滑淡入
   *
   * `fade-right` 右滑淡入
   *
   * `slide-up` 上滑进入
   *
   * `slide-down`	下滑进入
   *
   * `slide-left`	左滑进入
   *
   * `slide-right` 右滑进入
   *
   * `` 空字符串用于自定义
   *
   * @default 'slide-down'
   */
  transition?:
    | 'fade'
    | 'fade-up'
    | 'fade-down'
    | 'fade-left'
    | 'fade-right'
    | 'slide-up'
    | 'slide-down'
    | 'slide-left'
    | 'slide-right'
    | '';
}

export interface SmartNotifyOptions {
  /**
   * 类型
   *
   * @default 'danger'
   */
  type?: 'primary' | 'success' | 'warning' | 'danger';

  /**
   * 展示文案，支持通过`\n`换行
   *
   * @default ''
   */
  message?: string;

  /**
   * 展示时长(ms)，值为 `0` 时，`notify` 不会消失
   *
   * @default 3000
   */
  duration?: number;

  /**
   * 自定义节点选择器
   *
   * @default 'smart-notify'
   */
  selector?: string;

  /**
   * 字体颜色
   *
   * @default '#fff'
   */
  color?: string;

  /**
   * 顶部距离
   *
   * @default 0
   */
  top?: number;

  /**
   * 背景颜色
   */
  background?: string;

  /**
   * 选择器的选择范围，可以传入自定义组件的 `this` 作为上下文
   *
   * @default 当前页面
   */
  context?: WechatMiniprogram.Page.GetCurrentPages;

  /**
   * 点击时的回调函数
   */
  onClick?: Function;

  /**
   * 完全展示后的回调函数
   */
  onOpened?: Function;

  /**
   * 关闭时的回调函数
   */
  onClose?: Function;

  /**
   * 是否留出顶部安全距离（状态栏高度）
   *
   * @default false
   */
  safeAreaInsetTop?: boolean;
}

export interface SmartNotify {
  /**
   * 展示提示
   */
  (): (message: string) => void;
  (): (options: SmartNotifyOptions) => void;

  /**
   * 关闭提示
   */
  clear: () => void;
}
