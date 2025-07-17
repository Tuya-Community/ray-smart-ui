import _Popover from './Popover';
import type { SmartPopover } from './PropTypes';

const Popover = _Popover as React.FC<SmartPopover>;

export { Popover };

export {
  SmartPopover,
  SmartPopoverEvents,
  SmartPopoverExternalClassName,
  SmartPopoverProps,
} from './PropTypes';
