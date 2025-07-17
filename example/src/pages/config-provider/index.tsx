import React, { useState } from 'react';
import { View } from '@ray-js/ray';
import { Button, ConfigProvider } from '@ray-js/smart-ui';
import { DemoBlock } from '@/components';
import Strings from '../../i18n';

export default function Demo() {
  const [color, setColor] = useState('#07c160');

  return (
    <>
      <DemoBlock title={Strings.getLang('globalConfigurationStyle')} padding>
        <View style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
          <Button type="primary" color="red" onClick={() => setColor('red')}>
            {Strings.getLang('setColor')}
          </Button>
          <Button type="primary" color="green" onClick={() => setColor('green')}>
            {Strings.getLang('setColor')}
          </Button>
          <Button type="primary" color="blue" onClick={() => setColor('blue')}>
            {Strings.getLang('setColor')}
          </Button>
        </View>
        <ConfigProvider
          themeVars={{
            buttonPrimaryBorderColor: color,
            buttonPrimaryBackgroundColor: color,
          }}
        >
          <Button type="primary">{Strings.getLang('mainButton')}</Button>
        </ConfigProvider>
      </DemoBlock>
    </>
  );
}
