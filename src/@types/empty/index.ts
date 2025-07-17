import React from 'react';
import { SmartBaseExternalClassName, SmartComponent } from '../base';

export interface SmartEmptyProps {
  /**
   * 图片，支持传入图片 URL
   *
   * @default 'default'
   */
  image?: 'default' | string;

  /**
   * 图片下方的标题
   *
   * @default ''
   * @since `v2.0.0`
   */
  title?: string;

  /**
   * 图片下方的描述文字
   *
   * @default ''
   */
  description?: string;

  /**
   * 图片的样式
   *
   * @default ''
   * @since `v2.0.0`
   */
  imageStyle?: React.CSSProperties;

  /**
   * 标题的样式
   *
   * @default ''
   * @since `v2.0.0`
   */
  titleStyle?: React.CSSProperties;

  /**
   * 描述文字的样式
   *
   * @default ''
   * @since `v2.0.0`
   */
  descriptionStyle?: React.CSSProperties;
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
     * @since `v2.0.0`
     */
    title?: React.ReactNode;
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
