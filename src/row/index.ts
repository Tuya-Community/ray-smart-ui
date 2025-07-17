import _Row from './Row';
import type { SmartRow } from './PropTypes';

const Row = _Row as React.FC<SmartRow>;

export { Row };

export { SmartRow, SmartRowExternalClassName, SmartRowProps } from './PropTypes';
