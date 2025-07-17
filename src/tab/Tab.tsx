// @ts-ignore
import Tab from '@tuya-miniapp/smart-ui/dist/tab/index';
import { withReactProps } from '../common/withReactProps';

const TabComp = withReactProps(Tab as React.ElementType);

export default ({ children, isActive, ...rest }) => {
  return <TabComp {...rest}>{isActive && children}</TabComp>;
};
