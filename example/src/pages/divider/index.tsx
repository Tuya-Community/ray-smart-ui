import React from 'react';
import { Divider } from '@ray-js/smart-ui';
import { DemoBlock } from '@/components';
import Strings from '../../i18n';

export default function Demo() {
  return (
    <>
      <DemoBlock title={Strings.getLang('basicUsage')}>
        <Divider />
      </DemoBlock>
      <DemoBlock title={Strings.getLang('contentLocation')}>
        <Divider contentPosition="center">{Strings.getLang('text')}</Divider>
        <Divider contentPosition="left">{Strings.getLang('text')}</Divider>
        <Divider contentPosition="right">{Strings.getLang('text')}</Divider>
      </DemoBlock>
      <DemoBlock title={Strings.getLang('dashedLine')}>
        <Divider dashed />
      </DemoBlock>
      <DemoBlock title={Strings.getLang('customStyle')}>
        <Divider
          contentPosition="center"
          custom-style="color: #1989fa;border-color: #1989fa;font-size: 18px;"
        >
          {Strings.getLang('text')}
        </Divider>
      </DemoBlock>
    </>
  );
}
