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
      <DemoBlock title={Strings.getLang('withPercent')}>
        <View className={styles.line}>
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
      <DemoBlock title={Strings.getLang('customSize')}>
        <View className={`${styles.line} w-180`}>
          <Battery type="horizontal" size={28} value={100} />
          <Battery showText type="horizontal" size={28} value={100} />
        </View>
        <View className={`${styles.line} w-180`}>
          <Battery size={28} value={100} />
          <Battery showText size={28} value={100} />
        </View>
      </DemoBlock>
    </>
  );
}
