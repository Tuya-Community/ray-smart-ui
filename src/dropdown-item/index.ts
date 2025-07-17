import _DropdownItem from './DropdownItem';
import type { SmartDropdownItem } from './PropTypes';

const DropdownItem = _DropdownItem as React.FC<SmartDropdownItem>;

export { DropdownItem };

export {
  SmartDropdownItem,
  SmartDropdownItemEvents,
  SmartDropdownItemOption,
  SmartDropdownItemProps,
  SmartDropdownItemChangeEvent,
} from './PropTypes';
