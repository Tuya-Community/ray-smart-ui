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
    showToast({ title: Strings.getLang('clickToRight'), icon: 'none' });
  }, []);

  const onClickRightText = React.useCallback(event => {
    showToast({ title: Strings.getLang('clickToRightText'), icon: 'none' });
  }, []);

  const onClickRightIcon = React.useCallback(event => {
    showToast({ title: Strings.getLang('clickToRightIcon'), icon: 'none' });
  }, []);

  return (
    <>
      <DemoBlock title={Strings.getLang('homePage')}>
        <NavBar leftText="Home" leftTextType="home" onClickLeftText={onClickLeftText} />
        <NavBar
          background="#E4EDFF"
          customClass="demo-nav-bar"
          leftText="HomeHomeHomeHomeHome"
          leftTextType="home"
          onClickLeftText={onClickLeftText}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('secondPageSingleIcon')}>
        <NavBar
          title="ScheduleScheduleScheduleSchedule"
          leftArrow
          rightIcon={iconMore}
          sideWidth="min"
          rightIconSize="24px"
          onClickRight={onClickRight}
          onClickLeft={onClickLeft}
          onClickTitle={onClickTitle}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('secondPageCommonCases')}>
        <NavBar
          title="ScheduleScheduleScheduleSchedule"
          leftArrow
          rightIcon={iconMore}
          sideWidth="mid"
          rightIconSize="24px"
          onClickRight={onClickRight}
          onClickLeft={onClickLeft}
          onClickTitle={onClickTitle}
          slot={{
            right: <Icon size="24px" customStyle={{ marginRight: '16px' }} name={iconHouse} />,
          }}
        />
        <NavBar
          title="ScheduleScheduleScheduleSchedule"
          rightText="Confirm"
          leftText="Cancel"
          sideWidth="mid"
          customClass="demo-nav-bar"
          rightTextColor="#F04C4C"
          onClickRightText={onClickRightText}
          onClickLeftText={onClickLeftText}
          onClickTitle={onClickTitle}
        />
        <NavBar
          title="ScheduleScheduleScheduleSchedule"
          leftArrow
          rightText="Confirm"
          sideWidth="mid"
          customClass="demo-nav-bar"
          rightTextColor="#F04C4C"
          onClickRightText={onClickRightText}
          onClickLeft={onClickLeft}
          onClickTitle={onClickTitle}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('secondPageShortTitle')}>
        <NavBar
          title="ScheduleSchedule"
          leftArrow
          sideWidth="max"
          onClickLeft={onClickLeft}
          onClickTitle={onClickTitle}
        />
        <NavBar
          title="ScheduleSchedule"
          leftText="Abbrechen"
          rightText="Speichern"
          customClass="demo-nav-bar"
          rightTextColor="#F04C4C"
          sideWidth="max"
          onClickLeftText={onClickLeftText}
          onClickTitle={onClickTitle}
          onClickRightText={onClickRightText}
        />
        <NavBar
          title="ScheduleSchedule"
          leftArrow
          rightText="Speichern"
          rightTextColor="#F04C4C"
          sideWidth="max"
          customClass="demo-nav-bar"
          onClickLeft={onClickLeft}
          onClickTitle={onClickTitle}
          onClickRightText={onClickRightText}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('customWidth')}>
        <NavBar
          title="ScheduleScheduleScheduleSchedule"
          leftArrow
          sideWidth="100px"
          rightIcon={iconMore}
          rightIconSize="24px"
          onClickRight={onClickRight}
          onClickLeft={onClickLeft}
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
