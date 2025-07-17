import { SmartComponent } from '../base';
import { ThemeVars } from './theme-vars';

export interface SmartConfigProviderProps {
  /**
   * 自定义主题变量
   */
  themeVars?: Partial<ThemeVars>;
}

export type SmartConfigProvider = SmartComponent<SmartConfigProviderProps>;
