import { SmartComponent } from '../base';
import { ThemeVars } from './theme-vars';

export interface SmartConfigProviderProps {
  /**
   * 自定义主题变量
   */
  themeVars?: Partial<ThemeVars>;
  /**
   * 主题模式
   * @version 2.7.4
   */
  theme?: 'light' | 'dark';
}

export type SmartConfigProvider = SmartComponent<SmartConfigProviderProps>;
