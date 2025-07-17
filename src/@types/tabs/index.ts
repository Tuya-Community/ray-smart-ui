import { SmartBaseExternalClassName, SmartComponent, SmartEventHandler } from '../base';

export interface SmartTabsProps {
  /**
   * 样式风格
   */
  type?: 'card' | 'line';

  /**
   * 标签主题色
   *
   * @default '#ee0a24'
   */
  color?: string;

  /**
   * 当前选中标签的标识符
   *
   * @default 0
   */
  active?: string | number;

  /**
   * 动画时间，单位秒
   *
   * @default 0.3
   */
  duration?: number;

  /**
   * 底部条宽度，默认单位`px`
   *
   * @default '40px'
   */
  lineWidth?: string | number;

  /**
   * 底部条高度，默认单位`px`
   *
   * @default '3px'
   */
  lineHeight?: string | number;

  /**
   * 是否开启切换标签内容时的转场动画
   *
   * @default false
   */
  animated?: boolean;

  /**
   * 是否展示外边框，仅在 `line` 风格下生效
   *
   * @default false
   */
  border?: boolean;

  /**
   * 是否省略过长的标题文字
   *
   * @default true
   */
  ellipsis?: boolean;

  /**
   * 是否使用粘性定位布局
   *
   * @default false
   */
  sticky?: boolean;

  /**
   * 是否开启手势滑动切换
   *
   * @default false
   */
  swipeable?: boolean;

  /**
   * 是否开启标签页内容延迟渲染
   *
   * @default true
   */
  lazyRender?: boolean;

  /**
   * 粘性定位布局下与顶部的最小距离，单位`px`
   */
  offsetTop?: number;

  /**
   * 滚动阈值，标签数量超过阈值且总宽度超过标签栏宽度时开始横向滚动
   *
   * @default 5
   */
  swipeThreshold?: number;

  /**
   * 标题选中态颜色
   */
  titleActiveColor?: string;

  /**
   * 标题默认态颜色
   */
  titleInactiveColor?: string;

  /**
   * `zIndex`层级
   *
   * @default 1
   */
  zIndex?: number;
  /**
   * 是否开启切换前校验
   * @default false
   */
  useBeforeChange?: boolean;

  /**
   * 标签未被选择时是否销毁tab插槽内组件
   * @description 必须在受控模式下使用，否则子节点无法渲染
   * @since `v2.1.0`
   */
  inactiveDestroy?: boolean;
}

/**
 * @deprecated
 */
export interface SmartTabsEventDetail {
  /**
   * 标签标识符
   */
  name: string;
  /**
   * 标题
   */
  title: string;
  /**
   * tab的序号
   */
  index: number;
}

export type SmartTabsBaseEventDetail = SmartTabsEventDetail;

export interface SmartTabsScrollEventDetail {
  /**
   * 距离顶部位置
   */
  scrollTop: number;
  /**
   * 是否吸顶
   */
  isFixed: boolean;
}

export interface SmartTabsBeforeEventDetail {
  /**
   * 标题
   */
  title: string;
  /**
   * 索引
   */
  index: number;
  /**
   * 名称
   */
  name: string;
  /**
   * 是否吸顶
   */
  isFixed: boolean;
  /**
   * 继续执行回调
   */
  callback: (status?: boolean) => void;
}

export interface SmartTabsEvents {
  /**
   * 点击标签时触发
   */
  onClick?: SmartEventHandler<SmartTabsBaseEventDetail>;

  /**
   * 当前激活的标签改变时触发
   */
  onChange?: SmartEventHandler<SmartTabsBaseEventDetail>;

  /**
   * 点击被禁用的标签时触发
   */
  onDisabled?: SmartEventHandler<SmartTabsBaseEventDetail>;

  /**
   * 滚动时触发
   */
  onScroll?: SmartEventHandler<SmartTabsScrollEventDetail>;
  /**
   * 切换之前的回调
   */
  onBeforeChange?: SmartEventHandler<SmartTabsBeforeEventDetail>;
}

export interface SmartTabsExternalClassName extends SmartBaseExternalClassName {
  /**
   * 标签栏样式类
   */
  navClass?: string;

  /**
   * 标签栏根节点样式类
   */
  wrapClass?: string;

  /**
   * 标签样式类
   */
  tabClass?: string;

  /**
   * 标签激活态样式类
   */
  tabActiveClass?: string;
}

export interface SmartTabsSlot {
  /**
   * Tabs Slot
   */
  slot?: {
    /**
     * 自定义标题左侧内容
     */
    navLeft?: React.ReactNode;
    /**
     * 自定义标题右侧内容
     */
    navRight?: React.ReactNode;
  };
}

export type SmartTabs = SmartComponent<
  SmartTabsProps,
  SmartTabsEvents,
  SmartTabsExternalClassName,
  SmartTabsSlot
>;
