import { SmartBaseExternalClassName, SmartComponent } from '../base';

export interface SmartEmptyProps {
  /**
   * 图片类型，支持传入图片 URL
   *
   * @default 'default'
   */
  image?: 'default' | 'error' | 'network' | 'search' | string;

  /**
   * 图片下方的描述文字
   */
  description?: string;
}

export interface SmartEmptySlot {
  /**
   * 自定义底部内容
   */
  children?: React.ReactNode;
  /**
   * Empty Slot
   */
  slot?: {
    /**
     * 自定义图标
     */
    image?: React.ReactNode;
    /**
     * 自定义描述文字
     */
    description?: React.ReactNode;
  };
}

export type SmartEmpty = SmartComponent<
  SmartEmptyProps,
  // eslint-disable-next-line @typescript-eslint/ban-types
  {},
  SmartBaseExternalClassName,
  SmartEmptySlot
>;
