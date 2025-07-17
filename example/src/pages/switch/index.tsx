import React from 'react';
import { Switch } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';
import { DemoBlock } from '@/components';
import Strings from '../../i18n';

export default function Demo() {
  const [value, onChange] = React.useState(true);
  return (
    <View>
      <DemoBlock padding title={Strings.getLang('basicUsage')}>
        <Switch
          checked={value}
          onChange={event => {
            onChange(event.detail);
          }}
        />
      </DemoBlock>
      <DemoBlock padding title={Strings.getLang('disable')}>
        <Switch disabled />
      </DemoBlock>
    </View>
  );
}
