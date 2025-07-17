import React, { useState } from 'react';
import { View } from '@ray-js/ray';
import { CustomKeyboard } from '@ray-js/smart-ui';
import { DemoBlock } from '@/components';
import styles from './index.module.less';
import Strings from '../../i18n';

export default function Demo() {
  const [value, setValue] = useState('234');

  const onChange = v => {
    console.log(v.detail);
  };
  const onConfirm = v => {
    console.log(v.detail);
  };

  const handleBtn = () => {
    setValue('888');
  };
  return (
    <>
      <DemoBlock title={Strings.getLang('regularUsageClickTheInputBoxToPopUpTheKeyboard')}>
        <CustomKeyboard
          input-container-style={{ marginLeft: '56rpx', marginTop: '16rpx', marginBottom: '56rpx' }}
          onChange={onChange}
          onConfirm={onConfirm}
        />
      </DemoBlock>
      <DemoBlock title={Strings.getLang('customizeInputStyle')}>
        <CustomKeyboard
          inputContainerStyle={{
            marginLeft: '56rpx',
            marginTop: '16rpx',
            marginBottom: '56rpx',
            width: '560rpx',
            height: '120rpx',
          }}
          placeholder={Strings.getLang('pleaseEnter')}
          confirmText={Strings.getLang('confirm')}
          value={value}
          confirmColor="#123321"
          onChange={onChange}
          onConfirm={onConfirm}
          slot={{
            customButton: (
              <View
                onClick={handleBtn}
                style={{ border: '1px solid blue', borderRadius: '4px', marginRight: '4px' }}
              >
                {Strings.getLang('click')}
              </View>
            ),
          }}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('hideZeroAndBaseIs6')}>
        <CustomKeyboard
          inputContainerStyle={{ marginLeft: '56rpx', marginTop: '16rpx', marginBottom: '56rpx' }}
          isHideZero
          digitalBase={6}
        />
      </DemoBlock>
      <DemoBlock title={Strings.getLang('doNotHideZerosAndTheBaseIs6')}>
        <CustomKeyboard
          inputContainerStyle={{ marginLeft: '56rpx', marginTop: '16rpx', marginBottom: '56rpx' }}
          digitalBase={6}
        />
      </DemoBlock>
    </>
  );
}
