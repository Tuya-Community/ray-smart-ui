import _Button from './Button';
import type { SmartButton } from './PropTypes';

const Button = _Button as React.FC<SmartButton>;

export { Button };

export {
  SmartButton,
  SmartButtonEvents,
  SmartButtonExternalClassName,
  SmartButtonProps,
} from './PropTypes';
