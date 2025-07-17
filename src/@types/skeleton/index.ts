import { SmartComponent } from '../base';

export interface SmartSkeletonProps {
  /**
   * 段落占位图行数
   *
   * @default 0
   */
  row?: number;

  /**
   * 段落占位图宽度，可传数组来设置每一行的宽度
   *
   * @default '100%'
   */
  rowWidth?: string | string[];

  /**
   * 是否显示标题占位图
   *
   * @default false
   */
  title?: boolean;

  /**
   * 标题占位图宽度
   *
   * @default '40%'
   */
  titleWidth?: string | number;

  /**
   * 是否显示头像占位图
   *
   * @default false
   */
  avatar?: boolean;

  /**
   * 头像占位图大小
   *
   * @default '32px'
   */
  avatarSize?: string | number;

  /**
   * 头像占位图形状
   */
  avatarShape?: 'square' | 'round';

  /**
   * 是否显示占位图，传`false`时会展示子组件内容
   *
   * @default true
   */
  loading?: boolean;

  /**
   * 是否开启动画
   *
   * @default true
   */
  animate?: boolean;
}

export interface SmartSkeletonExternalClassName {
  /**
   * 根节点样式类
   */
  customClass?: string;

  /**
   * 段落占位样式类
   */
  rowClass?: string;

  /**
   * 头像占位样式类
   */
  avatarClass?: string;

  /**
   * 	标题占位样式类
   */
  titleClass?: string;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type SmartSkeleton = SmartComponent<SmartSkeletonProps, {}, SmartSkeletonExternalClassName>;
