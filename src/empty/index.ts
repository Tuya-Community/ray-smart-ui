import _Empty from './Empty';
import type { SmartEmpty } from './PropTypes';

const Empty = _Empty as React.FC<SmartEmpty>;

export { Empty };

export { SmartEmpty, SmartEmptyProps } from './PropTypes';
