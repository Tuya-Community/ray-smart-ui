import _Transition from './Transition';
import type { SmartTransition } from './PropTypes';

const Transition = _Transition as React.FC<SmartTransition>;

export { Transition };

export * from './PropTypes';
