import _TreeSelect from './TreeSelect';
import type { SmartTreeSelect } from './PropTypes';

const TreeSelect = _TreeSelect as React.FC<SmartTreeSelect>;

export { TreeSelect };

export {
  SmartTreeSelect,
  SmartTreeSelectEvents,
  SmartTreeSelectExternalClassName,
  SmartTreeSelectItem,
  SmartTreeSelectProps,
  SmartTreeSelectClickNavDetail,
} from './PropTypes';
