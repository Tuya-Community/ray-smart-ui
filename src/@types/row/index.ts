import { SmartBaseExternalClassName, SmartComponent } from '../base';

export interface SmartRowProps {
  /**
   * 列元素之间的间距（单位为 px）
   */
  gutter?: string | number;
}

export type SmartRowExternalClassName = SmartBaseExternalClassName;

export type SmartRow = SmartComponent<SmartRowProps, {}, SmartRowExternalClassName>;
