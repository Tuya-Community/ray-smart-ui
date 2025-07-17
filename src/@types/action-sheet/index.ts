import {
  // SmartOpenTypeCamelCaseProps,
  // SmartOpenTypeEvents,
  SmartComponent,
  // WechatOpenType,
  SmartEventHandler,
} from '../base';
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

export type SmartActionSheet = SmartComponent<SmartActionSheetProps, SmartActionSheetEvents>;
