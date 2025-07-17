import _NavBar from './NavBar';
import type { SmartNavBar } from './PropTypes';

const NavBar = _NavBar as React.FC<SmartNavBar>;

export { NavBar };

export * from './PropTypes';
