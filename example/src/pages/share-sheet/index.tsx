import React, { useState } from 'react';
import { Cell, ShareSheet, Toast, ToastInstance } from '@ray-js/smart-ui';
import { DemoBlock } from '@/components';
import Strings from '../../i18n';

export default function Demo() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const onShowShareSheet = () => {
    setShow(true);
  };

  const options = [
    { name: Strings.getLang('weChat'), icon: 'wechat', openType: 'share' },
    { name: Strings.getLang('moments'), icon: 'wechat-moments' },
    { name: 'QQ', icon: 'qq' },
    { name: Strings.getLang('weibo'), icon: 'weibo' },
    { name: Strings.getLang('copyLink'), icon: 'link' },
    { name: Strings.getLang('sharePoster'), icon: 'poster' },
    { name: Strings.getLang('qrCode'), icon: 'qrcode' },
    { name: Strings.getLang('miniProgramCode'), icon: 'weapp-qrcode' },
  ];

  const onClose = () => {
    setShow(false);
    setShow1(false);
    setShow2(false);
  };

  const onSelect = event => {
    ToastInstance({ context: this, message: event.detail.name });
    onClose();
  };

  const multiLineOptions = [
    [
      { name: Strings.getLang('weChat'), icon: 'wechat' },
      { name: Strings.getLang('weibo'), icon: 'weibo' },
      { name: 'QQ', icon: 'qq' },
    ],
    [
      { name: Strings.getLang('copyLink'), icon: 'link' },
      { name: Strings.getLang('sharePoster'), icon: 'poster' },
      { name: Strings.getLang('qrCode'), icon: 'qrcode' },
    ],
  ];

  const customIconOptions = [
    {
      name: Strings.getLang('name'),
      icon: 'https://static1.tuyacn.com/static/tuya-miniapp-doc/_next/static/images/logo-small.png',
    },
    {
      name: Strings.getLang('name'),
      icon: 'https://static1.tuyacn.com/static/tuya-miniapp-doc/_next/static/images/logo-small.png',
    },
    {
      name: Strings.getLang('name'),
      icon: 'https://static1.tuyacn.com/static/tuya-miniapp-doc/_next/static/images/logo-small.png',
    },
  ];

  return (
    <>
      <DemoBlock title={Strings.getLang('basicUsage')}>
        <Toast id="smart-toast" />
        <Cell title={Strings.getLang('displaySharePanel')} onClick={onShowShareSheet} isLink />
        <ShareSheet
          show={show}
          title={Strings.getLang('shareWithFriendsImmediately')}
          options={options}
          onClose={onClose}
          onSelect={onSelect}
        />
      </DemoBlock>
      <DemoBlock title={Strings.getLang('displayMultipleLineOptions')}>
        <Cell
          title={Strings.getLang('showSharingPanel')}
          onClick={() => {
            setShow1(true);
          }}
          isLink
        />
        <ShareSheet
          show={show1}
          title={Strings.getLang('shareWithFriendsNow')}
          options={multiLineOptions}
          onClose={onClose}
          onSelect={onSelect}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('customIcon')}>
        <Cell
          title={Strings.getLang('showSharePanel')}
          onClick={() => {
            setShow2(true);
          }}
          isLink
        />
        <ShareSheet
          show={show2}
          title={Strings.getLang('shareWithFriendsImmediately')}
          options={customIconOptions}
          onClose={onClose}
          onSelect={onSelect}
        />
      </DemoBlock>
    </>
  );
}
