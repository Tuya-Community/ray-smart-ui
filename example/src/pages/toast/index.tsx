import React from 'react';
import { Toast, ToastInstance, Button } from '@ray-js/smart-ui';
import { DemoBlock } from '@/components';
import Strings from '../../i18n';

export default function Demo() {
  const showToast = () => {
    ToastInstance({ context: this, message: Strings.getLang('promptContent') });
  };

  const showLongToast = () => {
    ToastInstance({
      message: Strings.getLang('toastTip1'),
    });
  };

  const showLoadingToast = () => {
    ToastInstance.loading({
      message: Strings.getLang('loading'),
      forbidClick: true,
    });
  };

  const showCustomLoadingToast = () => {
    ToastInstance.loading({
      message: Strings.getLang('loading'),
      forbidClick: true,
      loadingType: 'spinner',
    });
  };

  const showSuccessToast = () => {
    ToastInstance.success({ context: this, message: Strings.getLang('successfulCopywriting') });
  };
  const showWarnToast = () => {
    ToastInstance.warn({ context: this, message: Strings.getLang('warningPrompt') });
  };

  const showFailToast = () => {
    ToastInstance.fail({ context: this, message: Strings.getLang('failurePrompt') });
  };

  const showCustomizedWidthToast = () => {
    ToastInstance.loading({
      message: Strings.getLang('loading'),
      forbidClick: true,
      width: 200,
    });
  };

  const showCustomizedToast = () => {
    const text = second => `${Strings.getLang('countdown')} ${second} ${Strings.getLang('second')}`;
    const toast = ToastInstance.loading({
      context: this,
      duration: 0,
      forbidClick: true,
      message: text(3),
    });

    let second = 3;
    const timer = setInterval(() => {
      second--;
      if (second) {
        toast?.setData({ message: text(second) });
      } else {
        clearInterval(timer);
        ToastInstance.clear();
      }
    }, 1000);
  };

  const showBottomToast = () => {
    ToastInstance({
      message: Strings.getLang('promptContent'),
      position: 'bottom',
    });
  };

  const showTopToast = () => {
    ToastInstance({
      message: Strings.getLang('promptContent'),
      position: 'top',
    });
  };
  return (
    <>
      <DemoBlock card title={Strings.getLang('textPrompt')} padding>
        <Button onClick={showToast} type="primary" className="demo-margin-right">
          {Strings.getLang('textPrompt')}
        </Button>
        <Button onClick={showLongToast} type="primary">
          {Strings.getLang('longTextPrompt')}
        </Button>
      </DemoBlock>
      <DemoBlock title={Strings.getLang('loadingPrompt')} padding>
        <Button onClick={showLoadingToast} type="primary" className="demo-margin-right">
          {Strings.getLang('loadingTip')}
        </Button>
        <Button onClick={showCustomLoadingToast} type="primary">
          {Strings.getLang('customLoadingIcon')}
        </Button>
      </DemoBlock>
      <DemoBlock title={Strings.getLang('successFailurePrompt')} padding>
        <Button onClick={showSuccessToast} type="info" className="demo-margin-right">
          {Strings.getLang('loadingPrompt')}
        </Button>
        <Button onClick={showFailToast} type="danger">
          {Strings.getLang('loadingPrompt')}
        </Button>
      </DemoBlock>
      <DemoBlock title={Strings.getLang('warningPrompt')} padding>
        <Button onClick={showWarnToast} type="info" className="demo-margin-right">
          {Strings.getLang('warningPrompt')}
        </Button>
      </DemoBlock>
      <DemoBlock title={Strings.getLang('dynamicUpdateNotification')} padding>
        <Button onClick={showCustomizedToast} type="primary">
          {Strings.getLang('loadingPrompt')}
        </Button>
      </DemoBlock>
      <DemoBlock title={Strings.getLang('customWidth')} padding>
        <Button onClick={showCustomizedWidthToast} type="primary">
          {Strings.getLang('loadingPrompt')}
        </Button>
      </DemoBlock>
      <DemoBlock title={Strings.getLang('position')} padding>
        <Button onClick={showBottomToast} className="demo-margin-right" type="primary">
          {Strings.getLang('bottom')}
        </Button>
        <Button onClick={showTopToast} type="primary">
          {Strings.getLang('top')}
        </Button>
      </DemoBlock>
      <Toast id="smart-toast" />
    </>
  );
}
