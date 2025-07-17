import _CustomKeyboard from './CustomKeyboard';
import type { SmartCustomKeyboard } from './PropTypes';

const CustomKeyboard = _CustomKeyboard as React.FC<SmartCustomKeyboard>;

export { CustomKeyboard };

export * from './PropTypes';
