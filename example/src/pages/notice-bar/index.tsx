import React from 'react';
import { Icon, NoticeBar } from '@ray-js/smart-ui';
import { DemoBlock } from '@/components';
import Warning from '@tuya-miniapp/icons/dist/svg/Warning';
import SpeakerWaveLoud from '@tuya-miniapp/icons/dist/svg/SpeakerWaveLoud';
import { Text, View } from '@ray-js/ray';
import Strings from '../../i18n';

export default function Demo() {
  return (
    <View>
      <DemoBlock padding title={Strings.getLang('basicUsage')}>
        <NoticeBar
          wrapable
          type="info"
          leftIcon={Warning}
          customStyle={{
            marginBottom: '10px',
          }}
          onBtnClick={() => {
            console.log('onBtnClick');
          }}
          text={Strings.getLang('noticeBarTip1')}
          btnText={Strings.getLang('familySettings')}
        />
        <NoticeBar
          wrapable
          type="warning"
          leftIcon={Warning}
          customStyle={{
            marginBottom: '10px',
          }}
          text={Strings.getLang('noticeBarTip1')}
          btnText={Strings.getLang('familySettings')}
        />
        <NoticeBar
          wrapable
          type="error"
          leftIcon={Warning}
          customStyle={{
            marginBottom: '10px',
          }}
          text={Strings.getLang('noticeBarTip1')}
          btnText={Strings.getLang('familySettings')}
        />
      </DemoBlock>

      <DemoBlock padding title={Strings.getLang('close')}>
        <NoticeBar
          wrapable
          leftIcon={Warning}
          text={Strings.getLang('noticeBarTip1')}
          btnText={Strings.getLang('familySettings')}
          mode="closeable"
        />
      </DemoBlock>

      <DemoBlock padding title={Strings.getLang('overflowScroll')}>
        <NoticeBar
          speed={100}
          customStyle={{
            marginBottom: '10px',
          }}
          text={Strings.getLang('noticeBarTip1')}
        />
        <NoticeBar scrollable={false} text={Strings.getLang('noticeBarTip1')} />
      </DemoBlock>

      <DemoBlock padding title={Strings.getLang('customStyle')}>
        <NoticeBar
          wrapable
          leftIcon={Warning}
          text={Strings.getLang('noticeBarTip1')}
          btnText={Strings.getLang('familySettings')}
          mode="closeable"
          background="rgba(25, 137, 250, 0.1)"
          color="#1989FA"
          leftIconColor="#0009FA"
          btnTextColor="#0009FA"
        />
      </DemoBlock>

      <DemoBlock padding title={Strings.getLang('linkMode')}>
        <NoticeBar
          leftIcon={Warning}
          text={Strings.getLang('noticeBarTip1')}
          scrollable={false}
          mode="link"
          openType="navigateTo"
          url="/pages/cell/index"
        />
      </DemoBlock>

      <DemoBlock padding title={Strings.getLang('useSlot')}>
        <NoticeBar
          wrapable
          slot={{
            leftIcon: (
              <Icon
                size="16"
                color="#1989FA"
                customStyle={{
                  marginRight: '8px',
                }}
                name={SpeakerWaveLoud}
              />
            ),
            rightIcon: (
              <Icon
                size="16"
                color="#1989FA"
                customStyle={{
                  marginLeft: '8px',
                }}
                name={Warning}
              />
            ),
          }}
        >
          <Text>{Strings.getLang('noticeBarTip1')}</Text>
          <Text style={{ color: '#1989FA' }}>{Strings.getLang('familySettings')}</Text>
        </NoticeBar>
      </DemoBlock>
    </View>
  );
}
