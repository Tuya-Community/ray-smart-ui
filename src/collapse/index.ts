import { withReactProps } from '../common/withReactProps';
import _Collapse from './Collapse';
import type { SmartCollapse } from './PropTypes';

const Collapse = withReactProps(_Collapse as React.ElementType) as React.FC<SmartCollapse>;

export { Collapse };

export * from './PropTypes';
