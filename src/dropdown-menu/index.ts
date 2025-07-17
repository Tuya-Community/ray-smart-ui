import _DropdownMenu from './DropdownMenu';
import type { SmartDropdownMenu } from './PropTypes';

const DropdownMenu = _DropdownMenu as React.FC<SmartDropdownMenu>;

export { DropdownMenu };

export { SmartDropdownMenu, SmartDropdownMenuProps } from './PropTypes';
