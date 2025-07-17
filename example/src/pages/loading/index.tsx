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
          <Loading color="#1989fa" />
          <View style={{ width: '20px' }} />

          <Loading type="spinner" color="#1989fa" />
        </View>
      </DemoBlock>
      <DemoBlock title={Strings.getLang('loadingCopy')} padding>
        <Loading size="24px">{Strings.getLang('loading')}</Loading>
      </DemoBlock>
      <DemoBlock title="垂直排列" padding>
        <Loading size="24px" vertical>
          {Strings.getLang('loading')}
        </Loading>
      </DemoBlock>
    </>
  );
}

// dist/loading/demo/index
