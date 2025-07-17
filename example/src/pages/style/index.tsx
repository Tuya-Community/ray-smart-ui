import React from 'react';
import { View } from '@ray-js/ray';
import { DemoBlock } from '@/components';
import './index.less';
import Strings from '../../i18n';

export default function Demo() {
  return (
    <>
      <DemoBlock title={Strings.getLang('textOmitted')} padding>
        <View className="smart-ellipsis">{Strings.getLang('styleTip1')}</View>
        <View className="smart-multi-ellipsis--l2">{Strings.getLang('styleTip2')}</View>
      </DemoBlock>
    </>
  );
}
