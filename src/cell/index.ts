import _Cell from './Cell';
import type { SmartCell } from './PropTypes';

const Cell = _Cell as React.FC<SmartCell>;

export { Cell };

export * from './PropTypes';
