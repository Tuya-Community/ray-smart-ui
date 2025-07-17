import React from 'react';
import { Circle } from '@ray-js/smart-ui';
import { DemoBlock } from '@/components';
import Strings from '../../i18n';

export default function Demo() {
  return (
    <>
      <DemoBlock padding title={Strings.getLang('circularProgressBar')}>
        <Circle percent={20} />
      </DemoBlock>
    </>
  );
}
