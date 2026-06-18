import { ComponentBase, SmartComponent } from '../base';
import { ThemeVars } from './theme-vars';

export interface SmartConfigProviderProps extends ComponentBase {
  /**
   * 自定义主题变量
   */
  themeVars?: Partial<ThemeVars>;
  /**
   * 主题模式
   * @version 2.8.0
   */
  theme?: 'light' | 'dark';
  /**
   * 内部根节点样式类
   */
  customClass?: string;
}

export type SmartConfigProvider = SmartComponent<SmartConfigProviderProps>;
