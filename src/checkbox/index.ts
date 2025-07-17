import _Checkbox from './Checkbox';
import type { SmartCheckbox } from './PropTypes';

const Checkbox = _Checkbox as React.FC<SmartCheckbox>;

export { Checkbox };

export {
  SmartCheckbox,
  SmartCheckboxEvents,
  SmartCheckboxProps,
  SmartCheckboxExternalClassName,
  SmartCheckboxChangeEvent,
} from './PropTypes';
