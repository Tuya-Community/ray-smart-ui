import React from 'react';
import { NavBar, Icon } from '@ray-js/smart-ui';
import { showToast, View } from '@ray-js/ray';
import iconRight from '@tuya-miniapp/icons/dist/svg/Right';
import iconHouse from '@tuya-miniapp/icons/dist/svg/House';
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

  return (
    <>
      <DemoBlock title={Strings.getLang('homePage')}>
        <NavBar
          leftText="HomeHomeHomeHomeHome"
          leftTextType="home"
          onClickLeftText={onClickLeftText}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('secondPage')}>
        <NavBar title="Home" leftArrow onClickLeft={onClickLeft} onClickTitle={onClickTitle} />
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
          onClickLeftText={onClickLeftText}
          onClickTitle={onClickTitle}
          onClickRight={onClickRight}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('leftTitle')}>
        <NavBar
          leftArrow
          leftText="Home"
          leftTextType="title"
          onClickLeft={onClickLeft}
          onClickLeftText={onClickLeftText}
          onClickRight={onClickRight}
        />

        <NavBar
          customClass="demo-nav-bar"
          leftArrow
          leftText="Home"
          leftTextType="title"
          leftIcon="https://images.tuyacn.com/content-platform/hestia/1729664215ebd89f13e54.png"
          onClickLeft={onClickLeft}
          onClickLeftIcon={onClickLeftIcon}
          onClickLeftText={onClickLeftText}
          onClickRight={onClickRight}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('leftRightText')}>
        <NavBar
          title="Home"
          leftText={Strings.getLang('return')}
          rightText={Strings.getLang('button')}
          leftArrow
          onClickLeft={onClickLeft}
          onClickLeftText={onClickLeftText}
          onClickTitle={onClickTitle}
          onClickRight={onClickRight}
        />

        <NavBar
          custom-class="demo-nav-bar"
          title={Strings.getLang('timerSetting')}
          round
          safeAreaInsetTop={false}
          leftText={Strings.getLang('cancel')}
          rightText={Strings.getLang('save')}
          rightTextClass="demo-nav-bar__right"
          onClickLeft={onClickLeft}
          onClickLeftText={onClickLeftText}
          onClickRight={onClickRight}
          onClickTitle={onClickTitle}
        />

        <NavBar
          custom-class="demo-nav-bar"
          title={Strings.getLang('setting')}
          round
          safeAreaInsetTop={false}
          leftArrow
          rightText={Strings.getLang('reset')}
          rightTextClass="demo-nav-bar__right"
          onClickLeft={onClickLeft}
          onClickLeftText={onClickLeftText}
          onClickRight={onClickRight}
          onClickTitle={onClickTitle}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('useSlot')}>
        <NavBar
          title="Home"
          leftText={Strings.getLang('return')}
          leftArrow
          onClickLeft={onClickLeft}
          onClickLeftText={onClickLeftText}
          onClickTitle={onClickTitle}
          onClickRight={onClickRight}
          slot={{
            right: (
              <View>
                <Icon name={iconRight} size="16px" />
              </View>
            ),
          }}
        />
      </DemoBlock>
    </>
  );
}
