import _Tabs from './Tabs';
import type { SmartTabs } from './PropTypes';

const Tabs = _Tabs as React.FC<SmartTabs>;

export { Tabs };

export {
  SmartTabs,
  SmartTabsEvents,
  SmartTabsExternalClassName,
  SmartTabsProps,
  SmartTabsScrollEventDetail,
  SmartTabsBaseEventDetail,
} from './PropTypes';
