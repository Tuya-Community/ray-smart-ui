import _Icon from './Icon';
import type { SmartIcon } from './PropTypes';

const Icon = _Icon as React.FC<SmartIcon>;

export { Icon };

export {
  SmartIcon,
  SmartIconEvents,
  SmartIconExternalClassName,
  SmartIconProps,
} from './PropTypes';
