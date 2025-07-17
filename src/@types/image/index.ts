import {
  TouchPositionDetail,
  SmartBaseExternalClassName,
  SmartBaseLoadingExternalClassName,
  SmartComponent,
  SmartEventHandler,
} from '../base';

export interface SmartImageProps {
  /**
   * 图片链接
   */
  src?: string;

  /**
   * 图片填充模式
   *
   * `contain` 保持宽高缩放图片，使图片的长边能完全显示出来
   *
   * `cover` 保持宽高缩放图片，使图片的短边能完全显示出来，裁剪长边
   *
   * `fill`拉伸图片，使图片填满元素
   *
   * `widthFix`缩放模式，宽度不变，高度自动变化，保持原图宽高比不变
   *
   * `heightFix` 缩放模式，高度不变，宽度自动变化，保持原图宽高比不变
   *
   * `none` 保持图片原有尺寸
   *
   * @default 'fill'
   */
  fit?: 'contain' | 'cover' | 'fill' | 'widthFix' | 'heightFix' | 'none';

  /**
   * 替代文本
   */
  alt?: string;

  /**
   * 宽度，默认单位为px
   */
  width?: string | number;

  /**
   * 高度，默认单位为px
   */
  height?: string | number;

  /**
   * 圆角大小，默认单位为px
   *
   * @default 0
   */
  radius?: string | number;

  /**
   * 是否显示为圆形
   *
   * @default false
   */
  round?: boolean;
  /**
   * 是否懒加载
   *
   * @default false
   */
  lazyLoad?: boolean;
  /**
   * 是否展示图片加载失败提示
   *
   * @default true
   */
  showError?: boolean;
  /**
   * 是否展示图片加载中提示
   *
   * @default true
   */
  showLoading?: boolean;

  /**
   * 是否使用`error`插槽
   *
   * @default false
   */
  useErrorSlot?: boolean;

  /**
   * 是否使用`loading`插槽
   *
   * @default false
   */
  useLoadingSlot?: boolean;

  /**
   * 是否开启长按图片显示识别小程序码菜单
   *
   * @default false
   */
  showMenuByLongpress?: boolean;
}

export interface SmartImageLoadEventDetail {
  width: number;
  height: number;
}

export interface SmartImageErrorEventDetail {
  errMsg: string;
}

export interface SmartImageEvents {
  /**
   * 点击图片时触发
   */
  onClick?: SmartEventHandler<TouchPositionDetail>;

  /**
   * 图片加载完毕时触发
   */
  onLoad?: SmartEventHandler<SmartImageLoadEventDetail>;

  /**
   * 图片加载失败时触发
   */
  onError?: SmartEventHandler<SmartImageErrorEventDetail>;
}

export interface SmartImageExternalClassName
  extends SmartBaseExternalClassName,
    SmartBaseLoadingExternalClassName {
  /**
   * 图片样式类
   */
  imageClass?: string;
  /**
   * `error` 样式类
   */
  errorClass?: string;
}

export type SmartImage = SmartComponent<SmartImageProps, SmartImageEvents, SmartImageExternalClassName>;
