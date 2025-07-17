import _SidebarItem from './SidebarItem';
import type { SmartSidebarItem } from './PropTypes';

const SidebarItem = _SidebarItem as React.FC<SmartSidebarItem>;

export { SidebarItem };

export * from './PropTypes';
