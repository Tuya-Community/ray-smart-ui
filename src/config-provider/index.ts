import { withReactProps } from '../common/withReactProps';
import _ConfigProvider from './ConfigProvider';
import type { SmartConfigProvider } from './PropTypes';

const ConfigProvider = withReactProps(
  _ConfigProvider as React.ElementType
) as React.FC<SmartConfigProvider>;

export { ConfigProvider };

export { SmartConfigProvider, SmartConfigProviderProps } from './PropTypes';
