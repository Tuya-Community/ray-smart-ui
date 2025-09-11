import React from 'react';
import { Image, Text, View } from '@ray-js/ray';
import { Cell, Dialog, DialogInstance, SmartEventHandler } from '@ray-js/smart-ui';
import { DemoBlock } from '@/components';
import styles from './index.module.less';
import Strings from '../../i18n';

const message = 'Body';

export default function Demo() {
  const [show, setShow] = React.useState(false);
  const showCustomDialog = () => setShow(true);

  const onClickThemeAlert = () => {
    DialogInstance.alert({
      context: this,
      title: 'Title',
      theme: 'round-button',
      message,
    });
  };

  const onClickThemeAlert2 = () => {
    DialogInstance.alert({
      context: this,
      theme: 'round-button',
      message,
    });
  };

  const onClickAlert = () => {
    DialogInstance.alert({
      context: this,
      title: 'Title',
      message,
    });
  };

  const onClickAlert2 = () => {
    DialogInstance.alert({
      context: this,
      message: 'Title',
    });
  };

  const onClickConfirm = () => {
    DialogInstance.confirm({
      context: this,
      title: 'Title',
      icon: false,
      message,
      cancelButtonText: 'Sub Action',
    });
  };

  const onClickConfirmIcon = () => {
    DialogInstance.confirm({
      context: this,
      title: 'Title',
      icon: true,
      message,
      cancelButtonText: 'Sub Action',
    });
  };

  const onClickInput = () => {
    const beforeClose = (action: any, value?: string): Promise<boolean> =>
      new Promise(resolve => {
        setTimeout(() => {
          if (action === 'confirm') {
            // 如果不存在文本则拦截确定操作
            resolve(!!value);
          } else {
            resolve(true);
          }
        }, 1000);
      });
    DialogInstance.input({
      context: this,
      title: 'Title',
      value: '',
      cancelButtonText: 'Sub Action',
      beforeClose,
    })
      .then(res => {
        const curInputValue = res?.data?.inputValue;
        console.log('=== confirm', curInputValue);
      })
      .catch(() => {
        console.log('=== cancel');
      });
  };

  const onClickAsyncClose = () => {
    const beforeClose = (action): Promise<boolean> =>
      new Promise(resolve => {
        setTimeout(() => {
          if (action === 'confirm') {
            resolve(true);
          } else {
            // 拦截取消操作
            resolve(false);
          }
        }, 1000);
      });

    DialogInstance.confirm({
      context: this,
      title: 'Title',
      icon: false,
      message,
      beforeClose,
    });
  };

  const onClose: SmartEventHandler = event => {
    const { detail } = event;
    if (detail === 'confirm') {
      setShow(false);
    }
  };

  return (
    <>
      <DemoBlock card title={Strings.getLang('popupNotification')} padding>
        <Cell title={Strings.getLang('promptPopup')} onClick={onClickAlert} isLink />
        <Cell title={Strings.getLang('notificationPopupNoTitle')} onClick={onClickAlert2} isLink />
        <Cell title={Strings.getLang('confirmationPopup')} onClick={onClickConfirm} isLink />
        <Cell
          title={Strings.getLang('warningConfirmationPopup')}
          onClick={onClickConfirmIcon}
          isLink
        />
      </DemoBlock>

      <DemoBlock card title={Strings.getLang('roundedButtonStyle')} padding>
        <Cell title={Strings.getLang('promptWindow')} onClick={onClickThemeAlert} isLink />
        <Cell title={Strings.getLang('promptPopupNoTitle')} onClick={onClickThemeAlert2} isLink />
      </DemoBlock>

      <DemoBlock card title={Strings.getLang('asynchronousClose')} padding>
        <Cell title={Strings.getLang('asynchronousClose')} onClick={onClickAsyncClose} />
        <Cell title={Strings.getLang('inputConfirmationPopup')} onClick={onClickInput} />
      </DemoBlock>

      <DemoBlock card title={Strings.getLang('componentInvocation')} padding>
        <Cell title={Strings.getLang('imageHintPopup')} onClick={showCustomDialog} />
      </DemoBlock>

      <Dialog useSlot title="Title" show={show} showCancelButton onClose={onClose}>
        <View className={styles['demo-imageWrapper']}>
          <Image
            className={styles['demo-image']}
            src="https://static1.tuyacn.com/static/tuya-miniapp-doc/_next/static/images/logo-small.png"
          />
        </View>
        <View className={styles['demo-text']}>
          <Text>Body</Text>
        </View>
      </Dialog>

      <Dialog id="smart-dialog" />
    </>
  );
}
