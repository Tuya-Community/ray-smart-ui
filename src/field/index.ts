import { withReactProps } from '../common/withReactProps';
import _Field from './Field';
import type { SmartField } from './PropTypes';

const Field = withReactProps(_Field as React.ElementType) as React.FC<SmartField>;

export { Field };

export {
  SmartField,
  SmartFieldEvents,
  SmartFieldExternalClassName,
  SmartFieldProps,
  SmartFieldInputEvent,
  SmartFieldBlurEventDetail,
  SmartFieldFocusEventDetail,
  SmartFieldKeyboardHeightChangeEventDetail,
  SmartFieldLineChangeEventDetail,
} from './PropTypes';
