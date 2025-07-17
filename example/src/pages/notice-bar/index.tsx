import React from 'react';
import { NoticeBar } from '@ray-js/smart-ui';
import { DemoBlock } from '@/components';
import { Text, View } from '@ray-js/ray';
import Strings from '../../i18n';

export default function Demo() {
  return (
    <View>
      <DemoBlock padding title={Strings.getLang('tip')}>
        <NoticeBar background="rgba(25, 137, 250, 0.1)" wrapable scrollable={false}>
          <Text>{Strings.getLang('noticeBarTip1')}</Text>
          <Text style={{ color: '#1989FA' }}>{Strings.getLang('familySettings')}</Text>
        </NoticeBar>
      </DemoBlock>
      <DemoBlock padding title={Strings.getLang('hint')}>
        <NoticeBar
          background="rgba(25, 137, 250, 0.1)"
          color="#1989FA"
          wrapable
          scrollable={false}
          text={Strings.getLang('noticeBarTip1')}
        />
      </DemoBlock>
      <DemoBlock padding title={Strings.getLang('warning')}>
        <NoticeBar
          background="rgba(255, 160, 0, 0.1)"
          leftIcon="info"
          iconColor="#FFA000"
          wrapable
          scrollable={false}
        >
          <Text>{Strings.getLang('noticeBarTip1')}</Text>
          <Text style={{ color: '#1989FA' }}>{Strings.getLang('familySettings')}</Text>
        </NoticeBar>
      </DemoBlock>
      <DemoBlock padding title={Strings.getLang('warning')}>
        <NoticeBar
          background="rgba(255, 160, 0, 0.1)"
          color="#FFA000"
          wrapable
          scrollable={false}
          text={Strings.getLang('noticeBarTip1')}
        />
      </DemoBlock>
      <DemoBlock padding title={Strings.getLang('danger')}>
        <NoticeBar
          background="rgba(240, 76, 76, 0.1)"
          leftIcon="info"
          iconColor="#F04C4C"
          wrapable
          scrollable={false}
        >
          <Text>{Strings.getLang('noticeBarTip2')}</Text>
          <Text style={{ color: '#1989FA' }}>{Strings.getLang('familySettings')}</Text>
        </NoticeBar>
      </DemoBlock>
      <DemoBlock padding title={Strings.getLang('danger')}>
        <NoticeBar
          background="rgba(240, 76, 76, 0.1)"
          color="#F04C4C"
          wrapable
          scrollable={false}
          text={Strings.getLang('noticeBarTip3')}
        />
      </DemoBlock>
    </View>
  );
}
