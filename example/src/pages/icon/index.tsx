/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Col, Icon, Tab, Tabs, Toast, ToastInstance } from '@ray-js/smart-ui';
import { View, setClipboardData } from '@ray-js/ray';
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
  originalName: name,
  value: icons[name],
}));

const svgPath =
  'M192 448C192 624.736 335.264 768 512 768s320-143.264 320-320a319.872 319.872 0 0 0-160-277.184V160a64 64 0 0 0-64-64h-192a64 64 0 0 0-64 64v10.816A319.872 319.872 0 0 0 192 448z m224-384h192a32 32 0 0 0 0-64h-192a32 32 0 0 0 0 64z';

export default function Demo() {
  const [active, setActive] = React.useState(0);
  const onSwitch = React.useCallback(event => {
    setActive(event.detail.index);
  }, []);

  const handleCopy = React.useCallback((data: string) => {
    setClipboardData({
      data,
      success: () => {
        ToastInstance.success({
          selector: '#smart-toast-icon',
          message: Strings.getLang('successfulCopy'),
        });
      },
      fail: () => {
        ToastInstance.fail({
          selector: '#smart-toast-icon',
          message: Strings.getLang('copyFailed'),
        });
      },
    });
  }, []);

  const handleIconClick = React.useCallback((iconName: string) => {
    const importStatement = `import ${iconName}Icon from '@tuya-miniapp/icons/dist/svg/${iconName}';`;
    handleCopy(importStatement);
  }, []);

  return (
    <Tabs active={active} color="#1989fa" onChange={onSwitch}>
      <Tab title={Strings.getLang('svgIcon')} customClass={styles.demoTabPane}>
        <DemoBlock title={Strings.getLang('basicUsage')}>
          <Col customClass={styles.col} span="6">
            <Icon name={icons.Warning} size="36px" customClass={styles.icon} />
          </Col>
          <Col customClass={styles.col} span="6">
            <Icon
              name="https://static1.tuyacn.com/static/tuya-miniapp-doc/_next/static/images/logo-small.png"
              size="36px"
              customClass={styles.icon}
            />
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
        <DemoBlock title={Strings.getLang('svgPath')}>
          <Col customClass={styles.col} span="6">
            <Icon name={svgPath} size="42" customClass={styles.icon} color="#1989fa" />
          </Col>
        </DemoBlock>
      </Tab>
      <Tab title={Strings.getLang('allIcons')} customClass={styles.demoTabPane}>
        <View className={styles.copyTip}>{Strings.getLang('clickToCopy')}</View>
        <DemoBlock title={Strings.getLang('basicUsage')}>
          {iconsArr.map((icon, index) => {
            return (
              <View key={index} onClick={() => handleIconClick(icon.originalName)}>
                <Col customClass={styles.col} span="6">
                  <Icon name={icon.value} size="36px" customClass={styles.icon} />
                  <View className={styles.text}>{icon.name}</View>
                </Col>
              </View>
            );
          })}
        </DemoBlock>
      </Tab>
      <Toast id="smart-toast-icon" />
    </Tabs>
  );
}
