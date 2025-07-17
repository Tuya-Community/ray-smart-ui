import React from 'react';
import { View } from '@ray-js/ray';
import { Battery } from '@ray-js/smart-ui';
import { DemoBlock } from '@/components';
import styles from './index.module.less';
import Strings from '../../i18n'

export default function Demo() {
  return (
    <>
      <DemoBlock title={Strings.getLang('basicUsage')}>
        <View className={styles.line}>
          <Battery size={20} value={100} />
          <Battery />
          <Battery value={10} />
          <Battery value={3} />
          <Battery value={0} />
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
    </>
  );
}
