import React, { useState } from 'react';
import { Icon, Tabbar, TabbarItem } from '@ray-js/smart-ui';
import { Image, showToast } from '@ray-js/ray';
import Tornado from '@tuya-miniapp/icons/dist/svg/Tornado';
import Timer from '@tuya-miniapp/icons/dist/svg/Timer';
import Snow from '@tuya-miniapp/icons/dist/svg/Snow';
import Airplane from '@tuya-miniapp/icons/dist/svg/Airplane';
import { DemoBlock } from '@/components';
import styles from './index.module.less';
import Strings from '../../i18n';

const icon = {
  normal: 'https://static1.tuyacn.com/static/tuya-miniapp-doc/_next/static/images/logo-small.png',
  active: 'https://static1.tuyacn.com/static/tuya-miniapp-doc/_next/static/images/logo-small.png',
};

export default function Demo() {
  const [active, setActive] = useState(0);
  const [active2, setActive2] = useState('home');
  const [active3, setActive3] = useState(0);
  const [active4, setActive4] = useState(0);
  const [active5, setActive5] = useState(0);
  const [active6, setActive6] = useState(0);

  const defaultIcon1 = Tornado;
  const defaultIcon2 = Timer;
  const defaultIcon3 = Snow;
  const defaultIcon4 = Airplane;

  const onChange = e => {
    setActive(e.detail);
  };
  const onChange2 = e => {
    setActive2(e.detail);
  };
  const onChange3 = e => {
    setActive3(e.detail);
  };
  const onChange4 = e => {
    setActive4(e.detail);
  };
  const onChange5 = e => {
    setActive5(e.detail);
  };
  const handleChange = e => {
    setActive6(e.detail);
    showToast({ title: `${Strings.getLang('clickTheTag')} ${e.detail + 1}`, icon: 'none' });
  };

  return (
    <>
      <DemoBlock title={Strings.getLang('basicUsage')} padding>
        <Tabbar
          active={active}
          customClass={styles['tabbar-position']}
          safeAreaInsetBottom={false}
          onChange={onChange}
        >
          <TabbarItem icon={defaultIcon1}>{Strings.getLang('label')}</TabbarItem>
          <TabbarItem icon={defaultIcon2}>{Strings.getLang('label')}</TabbarItem>
          <TabbarItem icon={defaultIcon3}>{Strings.getLang('label')}</TabbarItem>
          <TabbarItem icon={defaultIcon4}>{Strings.getLang('label')}</TabbarItem>
        </Tabbar>
      </DemoBlock>
      <DemoBlock title={Strings.getLang('matchByName')} padding>
        <Tabbar
          active={active2}
          customClass={styles['tabbar-position']}
          safeAreaInsetBottom={false}
          onChange={onChange2}
        >
          <TabbarItem name="home" icon={defaultIcon1}>
            {Strings.getLang('label')}
          </TabbarItem>
          <TabbarItem name="search" icon={defaultIcon2}>
            {Strings.getLang('label')}
          </TabbarItem>
          <TabbarItem name="friends" icon={defaultIcon3}>
            {Strings.getLang('label')}
          </TabbarItem>
          <TabbarItem name="setting" icon={defaultIcon4}>
            {Strings.getLang('label')}
          </TabbarItem>
        </Tabbar>
      </DemoBlock>
      <DemoBlock title={Strings.getLang('showLogo')} padding>
        <Tabbar
          active={active3}
          customClass={styles['tabbar-position']}
          safeAreaInsetBottom={false}
          onChange={onChange3}
        >
          <TabbarItem icon={defaultIcon1}>{Strings.getLang('label')}</TabbarItem>
          <TabbarItem icon={defaultIcon2} dot>
            {Strings.getLang('label')}
          </TabbarItem>
          <TabbarItem icon={defaultIcon3} info="5">
            {Strings.getLang('label')}
          </TabbarItem>
          <TabbarItem icon={defaultIcon4} info="20">
            {Strings.getLang('label')}
          </TabbarItem>
        </Tabbar>
      </DemoBlock>
      <DemoBlock title={Strings.getLang('customIcon')} padding>
        <Tabbar
          active={active4}
          customClass={styles['tabbar-position']}
          safeAreaInsetBottom={false}
          onChange={onChange4}
        >
          <TabbarItem
            info="3"
            slot={{
              icon: <Image src={icon.normal} mode="aspectFit" className={styles.img} />,
              iconActive: <Image src={icon.active} mode="aspectFit" className={styles.img} />,
            }}
          >
            {Strings.getLang('custom')}
          </TabbarItem>
          <TabbarItem icon={defaultIcon2}>{Strings.getLang('label')}</TabbarItem>
          <TabbarItem icon={defaultIcon4}>{Strings.getLang('label')}</TabbarItem>
        </Tabbar>
      </DemoBlock>
      <DemoBlock title={Strings.getLang('customColor')} padding>
        <Tabbar
          active={active5}
          customClass={styles['tabbar-position']}
          safeAreaInsetBottom={false}
          activeColor="#07c160"
          inactiveColor="@tabbar-item-text-color"
          onChange={onChange5}
        >
          <TabbarItem icon={defaultIcon1}>{Strings.getLang('label')}</TabbarItem>
          <TabbarItem icon={defaultIcon2}>{Strings.getLang('label')}</TabbarItem>
          <TabbarItem icon={defaultIcon3}>{Strings.getLang('label')}</TabbarItem>
          <TabbarItem icon={defaultIcon4}>{Strings.getLang('label')}</TabbarItem>
        </Tabbar>
      </DemoBlock>
      <DemoBlock title={Strings.getLang('tabSwitchEvent')} padding>
        <Tabbar
          active={active6}
          customClass={styles['tabbar-position']}
          safeAreaInsetBottom={false}
          onChange={handleChange}
        >
          <TabbarItem icon={defaultIcon1}>{Strings.getLang('label')}1</TabbarItem>
          <TabbarItem icon={defaultIcon2}>{Strings.getLang('label')}2</TabbarItem>
          <TabbarItem icon={defaultIcon3}>{Strings.getLang('label')}3</TabbarItem>
          <TabbarItem icon={defaultIcon4}>{Strings.getLang('label')}4</TabbarItem>
        </Tabbar>
      </DemoBlock>
      <DemoBlock title={Strings.getLang('useSlots')} padding>
        <Tabbar
          active={active6}
          customClass={styles['tabbar-position']}
          safeAreaInsetBottom={false}
          slot={{
            left: (
              <Image
                src={icon.normal}
                style={{
                  height: '40px',
                  width: '40px',
                  margin: '6px 10px',
                }}
              />
            ),
          }}
          onChange={handleChange}
        >
          <TabbarItem
            slot={{
              icon: <Icon name={defaultIcon1} />,
              iconActive: <Icon name={defaultIcon1} color="red" />,
            }}
          >
            {Strings.getLang('label')}1
          </TabbarItem>
          <TabbarItem
            slot={{
              icon: <Icon name={defaultIcon2} />,
              iconActive: <Icon name={defaultIcon2} color="red" />,
            }}
          >
            {Strings.getLang('label')}2
          </TabbarItem>
          <TabbarItem
            slot={{
              icon: <Icon name={defaultIcon3} />,
              iconActive: <Icon name={defaultIcon3} color="red" />,
            }}
          >
            {Strings.getLang('label')}3
          </TabbarItem>
          <TabbarItem
            slot={{
              icon: <Icon name={defaultIcon4} />,
              iconActive: <Icon name={defaultIcon4} color="red" />,
            }}
          >
            {Strings.getLang('label')}4
          </TabbarItem>
        </Tabbar>
      </DemoBlock>
      <DemoBlock title={Strings.getLang('upsideDown')} padding>
        <Tabbar
          active={active}
          upsideDown
          customClass={styles['tabbar-position']}
          safeAreaInsetBottom={false}
          onChange={onChange}
        >
          <TabbarItem icon={defaultIcon1}>{Strings.getLang('label')}</TabbarItem>
          <TabbarItem icon={defaultIcon2}>{Strings.getLang('label')}</TabbarItem>
          <TabbarItem icon={defaultIcon3}>{Strings.getLang('label')}</TabbarItem>
          <TabbarItem icon={defaultIcon4}>{Strings.getLang('label')}</TabbarItem>
        </Tabbar>
      </DemoBlock>
    </>
  );
}
