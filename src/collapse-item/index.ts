import { withReactProps } from '../common/withReactProps';
import _CollapseItem from './CollapseItem';
import type { SmartCollapseItem } from './PropTypes';

const CollapseItem = withReactProps(
  _CollapseItem as React.ElementType
) as React.FC<SmartCollapseItem>;

export { CollapseItem };

export * from './PropTypes';
