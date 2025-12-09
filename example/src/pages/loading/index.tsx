import React from 'react';
import { Loading } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';
import { DemoBlock } from '@/components';
import styles from './index.module.less';
import Strings from '../../i18n';

export default function Demo() {
  return (
    <>
      <DemoBlock title={Strings.getLang('loadingType')} padding>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Loading />
          <View style={{ width: '20px' }} />
          <Loading type="spinner" />
        </View>
      </DemoBlock>
      <DemoBlock title={Strings.getLang('customColor')} padding>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Loading color="red" />
          <View style={{ width: '20px' }} />
          <Loading type="spinner" color="green" />
        </View>
      </DemoBlock>
      <DemoBlock title={Strings.getLang('loadingCopy')} padding>
        <Loading size="24px">{Strings.getLang('inloading')}</Loading>
        <Loading color="var(--app-B1-N1)" iconColor="#1989FA" size="24px">
          {Strings.getLang('inloading')}
        </Loading>
      </DemoBlock>
      <DemoBlock title={Strings.getLang('verticalArrangement')} padding>
        <Loading size="24px" vertical>
          {Strings.getLang('inloading')}
        </Loading>
      </DemoBlock>
    </>
  );
}

// dist/loading/demo/index
