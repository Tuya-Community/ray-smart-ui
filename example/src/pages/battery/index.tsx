import React from 'react';
import { View } from '@ray-js/ray';
import { Battery } from '@ray-js/smart-ui';
import { DemoBlock } from '@/components';
import styles from './index.module.less';
import Strings from '../../i18n';

export default function Demo() {
  return (
    <>
      <DemoBlock title={Strings.getLang('basicUsage')}>
        <View className={styles.line}>
          <Battery size={20} value={100} />
          <Battery value={80} />
          <Battery value={50} />
          <Battery value={20} />
          <Battery value={0} />
          <Battery inCharging value={80} />
        </View>
      </DemoBlock>
      <DemoBlock title={Strings.getLang('horizontal')}>
        <View className={styles.line}>
          <Battery type="horizontal" value={100} />
          <Battery type="horizontal" />
          <Battery type="horizontal" value={10} />
          <Battery type="horizontal" value={3} />
          <Battery type="horizontal" value={0} />
        </View>
      </DemoBlock>
      <DemoBlock title={`${Strings.getLang('basicUsage')}(${Strings.getLang('withPercent')})`}>
        <View className={styles.line}>
          <Battery showText size={20} value={100} />
          <Battery showText value={80} />
          <Battery showText value={50} />
          <Battery showText value={20} />
          <Battery showText value={0} />
          <Battery showText inCharging value={80} />
        </View>
      </DemoBlock>
      <DemoBlock title={`${Strings.getLang('horizontal')}(${Strings.getLang('withPercent')})`}>
        <View className={styles.line}>
          <Battery showText type="horizontal" value={100} />
          <Battery showText type="horizontal" />
          <Battery showText type="horizontal" value={10} />
          <Battery showText type="horizontal" value={3} />
          <Battery showText type="horizontal" value={0} />
        </View>
      </DemoBlock>
    </>
  );
}
