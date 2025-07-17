import _SwipeCell from './SwipeCell';
import type { SmartSwipeCell } from './PropTypes';

const SwipeCell = _SwipeCell as React.FC<SmartSwipeCell>;

export { SwipeCell };

export {
  SmartSwipeCell,
  SmartSwipeCellEvents,
  SmartSwipeCellProps,
  SmartSwipeCellBaseEventDetail,
  SmartSwipeCellPosition,
  SmartSwipeCellClickEvent,
  SmartSwipeCellClickPosition,
  SmartSwipeCellCloseEventDetail,
} from './PropTypes';
