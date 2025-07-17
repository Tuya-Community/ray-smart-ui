import _DateTimePicker from './DateTimePicker';
import type { SmartDateTimePicker } from './PropTypes';

const DateTimePicker = _DateTimePicker as React.FC<SmartDateTimePicker>;
const DatetimePicker = DateTimePicker;
export { DateTimePicker, DatetimePicker };

export {
  SmartDateTimePicker,
  SmartDateTimePickerEvents,
  SmartDateTimePickerProps,
  SmartDateTimePickerExternalClassName,
  SmartDateTimePickerBaseEvent,
  SmartDateTimePicker as SmartDatetimePicker,
  SmartDateTimePickerEvents as SmartDatetimePickerEvents,
  SmartDateTimePickerProps as SmartDatetimePickerProps,
  SmartDateTimePickerExternalClassName as SmartDatetimePickerExternalClassName,
  SmartDateTimePickerBaseEvent as SmartDatetimePickerBaseEvent,
} from './PropTypes';
