import React from 'react';
import { View, createSelectorQuery } from '@ray-js/ray';
import { Sticky, Button } from '@ray-js/smart-ui';
import { DemoBlock } from '@/components';
import styles from './index.module.less';
import Strings from '../../i18n';

export default function Demo() {
  const container = () => createSelectorQuery().select('#container');

  return (
    <View className={styles.page}>
      <DemoBlock title={Strings.getLang('basicUsage')}>
        <Sticky>
          <Button type="primary">{Strings.getLang('basicUsage')}</Button>
        </Sticky>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('ceilingDistance')}>
        <Sticky offsetTop={50}>
          <Button customStyle={{ marginLeft: '115px' }} type="info">
            {Strings.getLang('ceilingDistance')}
          </Button>
        </Sticky>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('specifiedContainer')}>
        <View id="container" className={styles.container}>
          <Sticky container={container}>
            <Button customStyle={{ marginLeft: '215px' }} type="warning">
              {Strings.getLang('specifiedContainer')}
            </Button>
          </Sticky>
        </View>
      </DemoBlock>
    </View>
  );
}
