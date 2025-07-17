import _Battery from './Battery';
import type { SmartBattery } from './PropTypes';

const Battery = _Battery as React.FC<SmartBattery>;

export { Battery };

export * from './PropTypes';
