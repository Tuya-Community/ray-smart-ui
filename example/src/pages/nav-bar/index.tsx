import React from 'react';
import { NavBar, Icon } from '@ray-js/smart-ui';
import { showToast } from '@ray-js/ray';
import iconHouse from '@tuya-miniapp/icons/dist/svg/House';
import iconMore from '@tuya-miniapp/icons/dist/svg/More';
import { DemoBlock } from '@/components';
import Strings from '../../i18n';
import './index.less';

export default function Demo() {
  const onClickLeft = React.useCallback(event => {
    showToast({ title: Strings.getLang('clickToReturn'), icon: 'none' });
  }, []);

  const onClickLeftIcon = React.useCallback(event => {
    showToast({ title: Strings.getLang('clickToLeftIcon'), icon: 'none' });
  }, []);

  const onClickLeftText = React.useCallback(event => {
    showToast({ title: Strings.getLang('clickToLeftText'), icon: 'none' });
  }, []);

  const onClickTitle = React.useCallback(event => {
    showToast({ title: Strings.getLang('clickToTitle'), icon: 'none' });
  }, []);

  const onClickRight = React.useCallback(event => {
    ty.showToast({ title: Strings.getLang('clickToRight'), icon: 'none' });
  }, []);

  const onClickRightText = React.useCallback(event => {
    ty.showToast({ title: Strings.getLang('clickToRightText'), icon: 'none' });
  }, []);

  const onClickRightIcon = React.useCallback(event => {
    ty.showToast({ title: Strings.getLang('clickToRightIcon'), icon: 'none' });
  }, []);

  return (
    <>
      <DemoBlock title={Strings.getLang('homePage')}>
        <NavBar
          leftText="HomeHomeHomeHomeHome"
          leftTextType="home"
          onClickLeftText={onClickLeftText}
        />
        <NavBar
          background="#E4EDFF"
          customClass="demo-nav-bar"
          leftText="HomeHomeHomeHomeHome"
          leftTextType="home"
          onClickLeftText={onClickLeftText}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('secondPage')}>
        <NavBar
          title="Home"
          leftArrow
          onClickLeft={onClickLeft}
          onClickRight={onClickRight}
          onClickTitle={onClickTitle}
        />
        <NavBar
          title="Home"
          customClass="demo-nav-bar"
          rightText={Strings.getLang('delete')}
          rightTextColor="#F04C4C"
          leftArrow
          onClickLeft={onClickLeft}
          onClickRightText={onClickRightText}
          onClickTitle={onClickTitle}
        />
        <NavBar
          title="Home"
          customClass="demo-nav-bar"
          rightText={Strings.getLang('delete')}
          rightTextColor="#F04C4C"
          leftText={Strings.getLang('cancel')}
          onClickLeftText={onClickLeftText}
          onClickRightText={onClickRightText}
          onClickTitle={onClickTitle}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('rightIcon')}>
        <NavBar
          title={Strings.getLang('setting')}
          leftArrow
          rightIcon={iconMore}
          rightIconSize="32px"
          rightIconColor="var(--app-B2-N1, rgba(0, 0, 0, 1))"
          onClickRightIcon={onClickRightIcon}
        />
        <NavBar
          title={Strings.getLang('setting')}
          leftArrow
          customClass="demo-nav-bar"
          rightIcon={iconMore}
          rightIconSize="32px"
          rightIconColor="var(--app-B2-N1, rgba(0, 0, 0, 1))"
          slot={{
            right: (
              <Icon
                size="32px"
                customStyle={{ marginRight: '16px' }}
                name={iconHouse}
                color="var(--app-B2-N1, rgba(0, 0, 0, 1))"
              />
            ),
          }}
          onClickRightIcon={onClickRightIcon}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('customIcon')}>
        <NavBar
          title="Home"
          leftArrow
          leftIcon={iconHouse}
          leftIconSize="32px"
          leftIconClass="nav-bar-icon-home"
          onClickLeft={onClickLeft}
          onClickLeftIcon={onClickLeftIcon}
          onClickTitle={onClickTitle}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('leftTitle')}>
        <NavBar
          leftText="Home"
          leftTextType="title"
          leftIcon="https://images.tuyacn.com/content-platform/hestia/1729664215ebd89f13e54.png"
          onClickLeft={onClickLeft}
          onClickLeftIcon={onClickLeftIcon}
          onClickLeftText={onClickLeftText}
          onClickRight={onClickRight}
        />
      </DemoBlock>
    </>
  );
}
