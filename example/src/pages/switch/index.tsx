import React from 'react';
import { CellGroup, Switch, Cell, DialogInstance, Dialog } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';
import { DemoBlock } from '@/components';
import Strings from '../../i18n';

export default function Demo() {
  const [value, onChange] = React.useState(true);
  const [valueAsync, setValueAsync] = React.useState(true);

  const onChange2 = ({ detail }) => {
    DialogInstance.confirm({
      context: this,
      title: Strings.getLang('prompt'),
      message: Strings.getLang('doYouWantToToggleTheSwitch'),
    }).then(() => {
      setValueAsync(detail);
    });
  };
  return (
    <View>
      <Dialog id="smart-dialog" />
      <DemoBlock padding title={Strings.getLang('basicUsage')}>
        <Switch
          checked={value}
          onChange={event => {
            onChange(event.detail);
          }}
        />
        <View style={{ marginLeft: 24, display: 'inline' }}>
          <Switch
            checked={!value}
            onChange={event => {
              onChange(event.detail);
            }}
          />
        </View>
      </DemoBlock>
      <DemoBlock padding title={Strings.getLang('disable')}>
        <Switch checked={value} disabled />
      </DemoBlock>
      <DemoBlock padding title={Strings.getLang('loading')}>
        <Switch checked={value} loading />
      </DemoBlock>
      <DemoBlock padding title={Strings.getLang('customSize')}>
        <Switch checked={value} size="24px" loading />
      </DemoBlock>
      <DemoBlock padding title={Strings.getLang('customColor')}>
        <Switch
          checked={value}
          size="24px"
          loading
          activeColor="#07c160"
          inactiveColor="#ee0a24"
          onChange={event => {
            onChange(event.detail);
          }}
        />
      </DemoBlock>
      <DemoBlock padding title={Strings.getLang('gradientColor')}>
        <Switch
          checked={value}
          size="24px"
          loading
          activeColor="linear-gradient(to right, #ff7e5f, #987AFF)"
          inactiveColor="linear-gradient(to right, #407e5f, #841AFF)"
          onChange={event => {
            onChange(event.detail);
          }}
        />
      </DemoBlock>
      <DemoBlock padding title={Strings.getLang('asyncControl')}>
        <Switch checked={valueAsync} onChange={onChange2} />
      </DemoBlock>
      <DemoBlock padding title={Strings.getLang('stopBubbling')}>
        <Switch
          checked={value}
          onChange={event => {
            onChange(event.detail);
          }}
          stopClickPropagation
        />
      </DemoBlock>
      <DemoBlock padding title={Strings.getLang('listUsage')}>
        <CellGroup>
          <Cell title={Strings.getLang('title')}>
            <Switch
              checked={value}
              onChange={event => {
                onChange(event.detail);
              }}
            />
          </Cell>
        </CellGroup>
      </DemoBlock>
    </View>
  );
}
