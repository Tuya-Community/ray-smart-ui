import _Col from './Col';
import type { SmartCol } from './PropTypes';

const Col = _Col as React.FC<SmartCol>;

export { Col };

export { SmartCol, SmartColProps, SmartColExternalClassName } from './PropTypes';
