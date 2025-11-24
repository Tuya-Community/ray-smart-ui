import React, { useState } from 'react';
import { View, Text } from '@ray-js/ray';
import { Button, ConfigProvider, Cell, CellGroup } from '@ray-js/smart-ui';
import { DemoBlock } from '@/components';
import Strings from '../../i18n';

export default function Demo() {
  const [color, setColor] = useState('#07c160');
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

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

      <DemoBlock title={Strings.getLang('themeSwitch')} padding>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '24px',
            alignItems: 'center',
          }}
        >
          <Button type="primary" onClick={() => setCurrentTheme('light')}>
            {Strings.getLang('lightTheme')}
          </Button>
          <Text>
            {Strings.getLang('currentTheme')}: {currentTheme}
          </Text>
          <Button type="primary" onClick={() => setCurrentTheme('dark')}>
            {Strings.getLang('darkTheme')}
          </Button>
        </View>
        <ConfigProvider theme={currentTheme}>
          <CellGroup>
            <Cell title={Strings.getLang('title')} value={Strings.getLang('content')} />
            <Cell
              title={Strings.getLang('title')}
              value={Strings.getLang('content')}
              label={Strings.getLang('descriptionInformation')}
              isLink
            />
          </CellGroup>
        </ConfigProvider>
      </DemoBlock>
    </>
  );
}
