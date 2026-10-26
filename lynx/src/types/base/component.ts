/* eslint-disable @typescript-eslint/ban-types */
export interface ComponentBase {
  /**
   * 标识符
   */
  id?: string;
  /**
   * css 类名
   */
  className?: string;
  /**
   * 样式
   */
  style?: React.CSSProperties;
}

export type SmartComponent<Props = {}, Events = {}, EC = {}, Slot = {}> = ComponentBase &
  Props &
  Events &
  EC &
  Slot;
