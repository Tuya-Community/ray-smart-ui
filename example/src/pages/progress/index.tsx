import React from 'react';
import { Progress } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';
import { DemoBlock } from '@/components';
import Strings from '../../i18n';

export default function Demo() {
  return (
    <View>
      <DemoBlock padding title={Strings.getLang('progressBar')}>
        <Progress percent={20} />
      </DemoBlock>
      <DemoBlock padding title={Strings.getLang('circularProgressBar')}>
        <Progress.Circle percent={20} />
      </DemoBlock>
    </View>
  );
}
