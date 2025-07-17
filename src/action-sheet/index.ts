import _ActionSheet from './ActionSheet';
import type { SmartActionSheet } from './PropTypes';

const ActionSheet = _ActionSheet as React.FC<SmartActionSheet>;

export { ActionSheet };

export {
  SmartActionSheet,
  SmartActionSheetProps,
  SmartActionSheetEvents,
  SmartAction,
} from './PropTypes';
