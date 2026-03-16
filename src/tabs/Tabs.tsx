// @ts-ignore
import TabsMini from '@tuya-miniapp/smart-ui/dist/tabs/index';
import { cloneElement, Children } from 'react';
import { withReactProps } from '../common/withReactProps';

const TabsComp = withReactProps(TabsMini as React.ElementType);

export default function Tabs({ children, inactiveDestroy = false, active, ...rest }) {
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
}
