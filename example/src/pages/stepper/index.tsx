import React, { useState } from 'react';
import { Stepper } from '@ray-js/smart-ui';
import { showLoading, hideLoading } from '@ray-js/ray';
import { DemoBlock } from '@/components';
import Strings from '../../i18n';

export default function Demo() {
  const [value, setValue] = useState(1);
  const onChange = event => {
    showLoading({ title: '', mask: true });

    setTimeout(() => {
      hideLoading();
      setValue(event.detail);
    }, 500);
  };

  return (
    <>
      <DemoBlock title={Strings.getLang('basicUsage')} padding>
        <Stepper value={1} />
      </DemoBlock>
      <DemoBlock title={Strings.getLang('stepSizeSetting')} padding>
        <Stepper value={1} step={2} />
      </DemoBlock>
      <DemoBlock title={Strings.getLang('limitInputRange')} padding>
        <Stepper value={1} min={5} max={8} />
      </DemoBlock>
      <DemoBlock title={Strings.getLang('restrictInputToIntegers')} padding>
        <Stepper value={1} integer />
      </DemoBlock>
      <DemoBlock title={Strings.getLang('disabledState')} padding>
        <Stepper value={1} disabled />
      </DemoBlock>
      <DemoBlock title={Strings.getLang('disableLongPress')} padding>
        <Stepper value={1} longPress={false} />
      </DemoBlock>
      <DemoBlock title={Strings.getLang('fixedDecimalPlaces')} padding>
        <Stepper value={1} step={0.2} decimalLength={1} />
      </DemoBlock>
      <DemoBlock title={Strings.getLang('asynchronousChange')} padding>
        <Stepper value={value} asyncChange onChange={onChange} />
      </DemoBlock>
      <DemoBlock title={Strings.getLang('customSize')} padding>
        <Stepper value={1} inputWidth="40px" buttonSize="32px" />
      </DemoBlock>
      <DemoBlock title={Strings.getLang('roundedCornerStyle')} padding>
        <Stepper value={1} theme="round" buttonSize="22px" />
      </DemoBlock>
    </>
  );
}
