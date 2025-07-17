import _Sticky from './Sticky';
import type { SmartSticky } from './PropTypes';

const Sticky = _Sticky as React.FC<SmartSticky>;

export { Sticky };

export {
  SmartSticky,
  SmartStickyEvents,
  SmartStickyProps,
  SmartStickyScrollEventDetail,
} from './PropTypes';
