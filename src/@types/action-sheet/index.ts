import { SmartBaseExternalClassName, SmartComponent, SmartEventHandler } from '../base';
import { SmartTransitionEvents } from '../transition';

export interface SmartAction {
  /**
   * 标题
   */
  name?: string;

  /**
   * 二级标题
   */
  subname?: string;

  /**
   * 选项文字颜色
   */
  color?: string;

  /**
   * 是否为加载状态
   */
  loading?: boolean;

  /**
   * 是否为选中状态
   */
  checked?: boolean;

  /**
   * 是否为禁用状态
   */
  disabled?: boolean;

  /**
   * 为对应列添加额外的 `class` 类名
   */
  className?: string;

  /**
   * 业务自定义的 Action 属性
   */
  [key: string]: any;
}

export interface SmartActionSheetProps {
  /**
   * 是否显示动作面板
   */
  show?: boolean;

  /**
   * 菜单选项
   *
   * @default []
   */
  actions?: SmartAction[];

  /**
   * 标题
   */
  title?: string;

  /**
   * 选项上方的描述信息
   */
  description?: string;

  /**
   * `z-index` 层级
   *
   * @default 100
   */
  zIndex?: number;

  /**
   * 列表选项中 icon 的选中态颜色, 默认跟随 App 主题色 `--app-M1`
   */
  activeColor?: string;

  /**
   * 取消按钮文字
   */
  cancelText?: string;

  /**
   * 确认按钮文字
   */
  confirmText?: string;

  /**
   * 是否显示遮罩层
   */
  overlay?: boolean;

  /**
   * 是否显示圆角
   *
   * @default true
   */
  round?: boolean;

  /**
   * 是否在点击选项后关闭
   *
   * @default true
   */
  closeOnClickAction?: boolean;

  /**
   * 点击遮罩是否关闭菜单
   */
  closeOnClickOverlay?: boolean;

  /**
   * 是否为 `iPhoneX` 留出底部安全距离
   *
   * @default true
   */
  safeAreaInsetBottom?: boolean;

  /**
   * 是否需要预留出一个最小的底部安全距离，用于在 safeArea 底部为 0 时进行追加，需要在 safeAreaInsetBottom 为 true 时生效
   *
   * @default 16
   * @version `1.1.0`
   */
  safeAreaInsetBottomMin?: number;
  /**
   * 开启弹框期间是否禁用本地手势
   *
   * @default false
   * @version v2.5.0
   */
  nativeDisabled?: boolean;
  /**
   * @description 是否启用标题 Slot
   * @default false
   * @version v2.6.0
   */
  useTitleSlot?: boolean;

  /**
   * 是否使用 cover-view 包裹弹层，用于覆盖原生组件（如 map、video）时使用
   *
   * @default false
   * @version 2.11.1
   */
  fullCoverView?: boolean;
}

export interface SmartActionSheetEvents extends SmartTransitionEvents {
  /**
   * 选中选项时触发，禁用或加载状态下不会触发
   */
  onSelect?: SmartEventHandler<SmartAction>;

  /**
   * 关闭时触发
   */
  onClose?: SmartEventHandler;

  /**
   * 取消按钮点击时触发
   */
  onCancel?: SmartEventHandler;

  /**
   * 确认按钮点击时触发
   */
  onConfirm?: SmartEventHandler;

  /**
   * 点击遮罩层时触发
   */
  onClickOverlay?: SmartEventHandler;
}

export interface SmartActionSheetExternalClassName extends SmartBaseExternalClassName {
  /**
   * @description 每一列的样式
   */
  listClass?: string;
}

export interface SmartActionSheetSlots {
  slot?: {
    /**
     * @description 标题插槽 需要设置 useTitleSlot
     * @version v2.6.0
     */
    title?: React.ReactNode;
  };
}

export type SmartActionSheet = SmartComponent<
  SmartActionSheetProps,
  SmartActionSheetEvents,
  SmartActionSheetExternalClassName,
  SmartActionSheetSlots
>;
