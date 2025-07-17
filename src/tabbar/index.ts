import _Tabbar from './Tabbar';
import type { SmartTabbar } from './PropTypes';

const Tabbar = _Tabbar as React.FC<SmartTabbar>;

export { Tabbar };

export {
  SmartTabbar,
  SmartTabbarEvents,
  SmartTabbarProps,
  SmartTabbarChangeEvent,
} from './PropTypes';
