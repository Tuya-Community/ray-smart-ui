import React from 'react';
import { GridItem, Grid, SidebarItem, Sidebar, Toast, ToastInstance } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';
import './index.less';
import Strings from '../../i18n';

export default function Demo() {
  const onChange = React.useCallback(event => {
    ToastInstance({
      context: this,
      message: `${Strings.getLang('switchTo')}${event.detail}${Strings.getLang('item')}`,
    });
  }, []);
  return (
    <>
      <Grid columnNum={2} border={false}>
        <GridItem useSlot>
          <View className="demo-sidebar-title">{Strings.getLang('basicUsage')}</View>
          <Sidebar customClass="custom-sidebar">
            <SidebarItem title={Strings.getLang('labelName')} />
            <SidebarItem title={Strings.getLang('labelName')} />
            <SidebarItem title={Strings.getLang('labelName')} />
          </Sidebar>
        </GridItem>

        <GridItem useSlot>
          <View className="demo-sidebar-title">{Strings.getLang('logoPrompt')}</View>
          <Sidebar customClass="custom-sidebar">
            <SidebarItem title={Strings.getLang('labelName')} dot />
            <SidebarItem title={Strings.getLang('labelName')} badge="5" />
            <SidebarItem title={Strings.getLang('labelName')} badge="99+" />
          </Sidebar>
        </GridItem>

        <GridItem useSlot>
          <View className="demo-sidebar-title">{Strings.getLang('disableOption')}</View>
          <Sidebar customClass="custom-sidebar">
            <SidebarItem title={Strings.getLang('labelName')} />
            <SidebarItem title={Strings.getLang('labelName')} disabled />
            <SidebarItem title={Strings.getLang('labelName')} />
          </Sidebar>
        </GridItem>

        <GridItem useSlot>
          <View className="demo-sidebar-title">{Strings.getLang('listenToSwitchEvents')}</View>
          <Sidebar customClass="custom-sidebar" onChange={onChange}>
            <SidebarItem title={`${Strings.getLang('labelName')} 1`} />
            <SidebarItem title={`${Strings.getLang('labelName')} 2`} />
            <SidebarItem title={`${Strings.getLang('labelName')} 3`} />
          </Sidebar>
        </GridItem>
      </Grid>

      <Toast id="smart-toast" />
    </>
  );
}
