import _Radio from './Radio';
import type { SmartRadio } from './PropTypes';

const Radio = _Radio as React.FC<SmartRadio>;

export { Radio };

export {
  SmartRadio,
  SmartRadioEvents,
  SmartRadioExternalClassName,
  SmartRadioProps,
  SmartRadioChangeEvent,
  SmartRadioSlot,
} from './PropTypes';
