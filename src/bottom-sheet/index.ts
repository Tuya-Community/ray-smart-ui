import _BottomSheet from './BottomSheet';
import type { SmartBottomSheet } from './PropTypes';

const BottomSheet = _BottomSheet as React.FC<SmartBottomSheet>;

export { BottomSheet };

export { SmartBottomSheet, SmartBottomSheetProps, SmartBottomSheetEvents } from './PropTypes';
