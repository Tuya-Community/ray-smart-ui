import React from 'react';
import { Cell, Transition, SmartTransition } from '@ray-js/smart-ui';
import { DemoBlock } from '@/components';
import './index.less';
import Strings from '../../i18n';

type TransitionName = SmartTransition['name'];

export default function Demo() {
  const [name, setName] = React.useState<TransitionName>('fade');
  const [show, setShow] = React.useState(false);
  const [showCustom, setShowCustom] = React.useState(false);

  const trigger = React.useCallback((name: TransitionName) => {
    setName(name);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 500);
  }, []);

  const onClickCustom = React.useCallback(() => {
    setShowCustom(true);
    setTimeout(() => {
      setShowCustom(false);
    }, 1000);
  }, []);

  const onClickFade = React.useCallback(() => trigger('fade'), []);
  const onClickFadeUp = React.useCallback(() => trigger('fade-up'), []);
  const onClickFadeDown = React.useCallback(() => trigger('fade-down'), []);
  const onClickFadeLeft = React.useCallback(() => trigger('fade-left'), []);
  const onClickFadeRight = React.useCallback(() => trigger('fade-right'), []);
  const onClickSlideUp = React.useCallback(() => trigger('fade-up'), []);
  const onClickSlideDown = React.useCallback(() => trigger('fade-down'), []);
  const onClickSlideLeft = React.useCallback(() => trigger('fade-left'), []);
  const onClickSlideRight = React.useCallback(() => trigger('fade-right'), []);
  const onBeforeEnter = React.useCallback(() => {
    console.log('onBeforeEnter');
  }, []);
  const onEnter = React.useCallback(() => {
    console.log('onEnter');
  }, []);
  const onAfterEnter = React.useCallback(() => {
    console.log('onAfterEnter');
  }, []);
  const onBeforeLeave = React.useCallback(() => {
    console.log('onBeforeLeave');
  }, []);
  const onLeave = React.useCallback(() => {
    console.log('onLeave');
  }, []);
  const onAfterLeave = React.useCallback(() => {
    console.log('onAfterLeave');
  }, []);
  return (
    <>
      <DemoBlock title={Strings.getLang('basicUsage')} padding>
        <Cell title="Fade" onClick={onClickFade} isLink />
        <Cell title="Fade Up" onClick={onClickFadeUp} isLink />
        <Cell title="Fade Down" onClick={onClickFadeDown} isLink />
        <Cell title="Fade Left" onClick={onClickFadeLeft} isLink />
        <Cell title="Fade Right" onClick={onClickFadeRight} isLink />
        <Cell title="Slide Up" onClick={onClickSlideUp} isLink />
        <Cell title="Slide Down" onClick={onClickSlideDown} isLink />
        <Cell title="Slide Left" onClick={onClickSlideLeft} isLink />
        <Cell title="Slide Right" onClick={onClickSlideRight} isLink />
        <Cell title="Custom" onClick={onClickCustom} isLink />

        <Transition show={show} name={name} customClass="block" />

        <Transition
          show={showCustom}
          name=""
          duration={{ enter: 300, leave: 1000 }}
          customClass="block"
          enterClass="smart-enter-class"
          enterActiveClass="smart-enter-active-class"
          leaveActiveClass="smart-leave-active-class"
          leaveToClass="smart-leave-to-class"
          onBeforeEnter={onBeforeEnter}
          onEnter={onEnter}
          onAfterEnter={onAfterEnter}
          onBeforeLeave={onBeforeLeave}
          onLeave={onLeave}
          onAfterLeave={onAfterLeave}
        />
      </DemoBlock>
    </>
  );
}
