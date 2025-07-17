export interface ComponentBase {
  /**
   * 标识符
   */
  id?: string;
  /**
   * css 类名
   */
  className?: string;
}

export type SmartComponent<Props = {}, Events = {}, EC = {}, Slot = {}> = ComponentBase &
  Props &
  Events &
  EC &
  Slot;
