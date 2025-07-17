import _Grid from './Grid';
import type { SmartGrid } from './PropTypes';

const Grid = _Grid as React.FC<SmartGrid>;

export { Grid };

export { SmartGrid, SmartGridExternalClassName, SmartGridProps } from './PropTypes';
