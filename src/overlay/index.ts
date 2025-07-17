import _Overlay from './Overlay';
import type { SmartOverlay } from './PropTypes';

const Overlay = _Overlay as React.FC<SmartOverlay>;

export { Overlay };

export { SmartOverlay, SmartOverlayEvents, SmartOverlayProps, SmartOverlaySlot } from './PropTypes';
