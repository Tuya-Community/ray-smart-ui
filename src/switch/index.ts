import _Switch from './Switch';
import type { SmartSwitch } from './PropTypes';
import { withReactProps } from '../common/withReactProps';

const Switch = withReactProps(_Switch as React.ElementType) as React.FC<SmartSwitch>;

export { Switch };

export * from './PropTypes';
