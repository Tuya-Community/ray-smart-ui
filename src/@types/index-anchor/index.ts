import { SmartComponent } from '../base';

export interface SmartIndexAnchorProps {
  /**
   * 是否使用自定义内容的插槽
   *
   * @default false
   */
  useSlot?: boolean;

  /**
   * 索引字符
   */
  index?: string | number;
}

export type SmartIndexAnchor = SmartComponent<SmartIndexAnchorProps>;
