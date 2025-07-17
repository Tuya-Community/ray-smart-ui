import _SidebarItem from './SidebarItem';
import type { SmartSidebarItem } from './PropTypes';

const SidebarItem = _SidebarItem as React.FC<SmartSidebarItem>;

export { SidebarItem };

export {
  SmartSidebarItem,
  SmartSidebarItemEvents,
  SmartSidebarItemExternalClassName,
  SmartSidebarItemProps,
  SmartSidebarItemClickEvent,
} from './PropTypes';
