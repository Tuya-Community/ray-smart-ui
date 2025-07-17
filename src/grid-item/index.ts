import _GridItem from './GridItem';
import type { SmartGridItem } from './PropTypes';

const GridItem = _GridItem as React.FC<SmartGridItem>;

export { GridItem };

export {
  SmartGridItem,
  SmartGridItemEvents,
  SmartGridItemExternalClassName,
  SmartGridItemProps,
} from './PropTypes';
