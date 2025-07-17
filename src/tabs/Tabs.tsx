// @ts-ignore
import Tabs from '@tuya-miniapp/smart-ui/dist/tabs/index';
import { cloneElement, Children } from 'react';
import { withReactProps } from '../common/withReactProps';

const TabsComp = withReactProps(Tabs as React.ElementType);

export default ({ children, inactiveDestroy = false, active, ...rest }) => {
  return (
    <TabsComp {...rest} inactiveDestroy={inactiveDestroy} active={active}>
      {children &&
        Children.map(children, (child, index) => {
          return cloneElement(child, {
            isActive: inactiveDestroy ? active === (child.props?.name ?? index) : true,
          });
        })}
    </TabsComp>
  );
};
