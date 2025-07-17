import _Rate from './Rate';
import type { SmartRate } from './PropTypes';

const Rate = _Rate as React.FC<SmartRate>;

export { Rate };

export {
  SmartRate,
  SmartRateEvents,
  SmartRateExternalClassName,
  SmartRateProps,
  SmartRateChangeEvent,
} from './PropTypes';
