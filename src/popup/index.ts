import _Popup from './Popup';
import type { SmartPopup } from './PropTypes';

const Popup = _Popup as React.FC<SmartPopup>;

export { Popup };

export {
  SmartPopup,
  SmartPopupEvents,
  SmartPopupExternalClassName,
  SmartPopupProps,
} from './PropTypes';
