/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Col, Icon, Tab, Tabs } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';
import * as icons from '@tuya-miniapp/icons';
import iconsConfig from '@tuya-miniapp/icons/dist/config';
import { DemoBlock } from '@/components';
import styles from './index.module.less';
import Strings from '../../i18n';

function kebabCase(name: string) {
  const currName = name.replace(/[A-Z]/g, word => `-${word.toLocaleLowerCase()}`);
  return currName.slice(1);
}

const iconsArr = iconsConfig.map(name => ({
  name: kebabCase(name),
  value: icons[name],
}));

export default function Demo() {
  const [active, setActive] = React.useState(0);
  const onSwitch = React.useCallback(event => {
    setActive(event.detail.index);
  }, []);

  return (
    <Tabs active={active} color="#1989fa" onChange={onSwitch}>
      <Tab title={Strings.getLang('svgIcon')} customClass={styles['demo-tab-pane']}>
        <DemoBlock title={Strings.getLang('basicUsage')}>
          <Col customClass={styles.col} span="6">
            <Icon name={icons.Warning} size="36px" customClass={styles.icon} />
          </Col>
        </DemoBlock>
        <DemoBlock title={Strings.getLang('promptMessage')}>
          <Col customClass={styles.col} span="6">
            <Icon name={icons.Warning} size="36px" customClass={styles.icon} dot />
          </Col>
          <Col customClass={styles.col} span="6">
            <Icon name={icons.Warning} size="36px" customClass={styles.icon} info="9" />
          </Col>
          <Col customClass={styles.col} span="6">
            <Icon name={icons.Warning} size="36px" customClass={styles.icon} info="99+" />
          </Col>
        </DemoBlock>
        <DemoBlock title={Strings.getLang('iconColor')}>
          <Col customClass={styles.col} span="6">
            <Icon name={icons.Alarm} size="36px" customClass={styles.icon} color="#1989fa" />
          </Col>
          <Col customClass={styles.col} span="6">
            <Icon name={icons.Warning} size="36px" customClass={styles.icon} color="#07c160" />
          </Col>
        </DemoBlock>
        <DemoBlock title={Strings.getLang('iconSize')}>
          <Col customClass={styles.col} span="6">
            <Icon name={icons.Warning} size="36" customClass={styles.icon} color="#1989fa" />
          </Col>
          <Col customClass={styles.col} span="6">
            <Icon name={icons.Warning} size="48" customClass={styles.icon} color="#1989fa" />
          </Col>
        </DemoBlock>
      </Tab>
      <Tab title={Strings.getLang('allIcons')} customClass={styles['demo-tab-pane']}>
        <DemoBlock title={Strings.getLang('basicUsage')}>
          {iconsArr.map((icon, index) => {
            return (
              <Col key={index} customClass={styles.col} span="6">
                <Icon name={icon.value} size="36px" customClass={styles.icon} />
                <View className={styles.text}>{icon.name}</View>
              </Col>
            );
          })}
        </DemoBlock>
      </Tab>
    </Tabs>
  );
}
