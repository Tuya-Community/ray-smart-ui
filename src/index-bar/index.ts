import _IndexBar from './IndexBar';
import type { SmartIndexBar } from './PropTypes';

const IndexBar = _IndexBar as React.FC<SmartIndexBar>;

export { IndexBar };

export {
  SmartIndexBar,
  SmartIndexBarEvents,
  SmartIndexBarProps,
  SmartIndexBarSelectEvent,
} from './PropTypes';
