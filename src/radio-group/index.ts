import _RadioGroup from './RadioGroup';
import type { SmartRadioGroup } from './PropTypes';

const RadioGroup = _RadioGroup as React.FC<SmartRadioGroup>;

export { RadioGroup };

export {
  SmartRadioGroup,
  SmartRadioGroupEvents,
  SmartRadioGroupProps,
  SmartRadioGroupChangeEvent,
} from './PropTypes';
