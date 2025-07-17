import React from 'react';
import { Cell, Popup } from '@ray-js/smart-ui';
import { DemoBlock } from '@/components';
import Close from '@tuya-miniapp/icons/dist/svg/Close';
import Strings from '../../i18n';

export default function Demo() {
  const [show, setShow] = React.useState({
    basic: false,
    top: false,
    bottom: false,
    left: false,
    right: false,
    closeIcon: false,
    customIconPosition: false,
    customCloseIcon: false,
    round: false,
  });
  const showBasic = () => setShow({ ...show, basic: true });
  const hideBasic = () => setShow({ ...show, basic: false });
  const showTop = () => setShow({ ...show, top: true });
  const hideTop = () => setShow({ ...show, top: false });
  const showBottom = () => setShow({ ...show, bottom: true });
  const hideBottom = () => setShow({ ...show, bottom: false });
  const showLeft = () => setShow({ ...show, left: true });
  const hideLeft = () => setShow({ ...show, left: false });
  const showRight = () => setShow({ ...show, right: true });
  const hideRight = () => setShow({ ...show, right: false });
  const showCloseIcon = () => setShow({ ...show, closeIcon: true });
  const hideCloseIcon = () => setShow({ ...show, closeIcon: false });
  const showCustomIconPosition = () => setShow({ ...show, customIconPosition: true });
  const hideCustomIconPosition = () => setShow({ ...show, customIconPosition: false });
  const showCustomCloseIcon = () => setShow({ ...show, customCloseIcon: true });
  const hideCustomCloseIcon = () => setShow({ ...show, customCloseIcon: false });
  const showRound = () => setShow({ ...show, round: true });
  const hideRound = () => setShow({ ...show, round: false });
  const onEnter = () => console.log('onEnter');
  const onAfterEnter = () => console.log('onAfterEnter');
  const onAfterLeave = () => console.log('onAfterLeave');
  const onBeforeEnter = () => console.log('onBeforeEnter');
  const onLeave = () => console.log('onLeave');
  const onBeforeLeave = () => console.log('onBeforeLeave');
  return (
    <>
      <DemoBlock title={Strings.getLang('basicUsage')}>
        <Cell title={Strings.getLang('showPopup')} isLink onClick={showBasic} />
        <Popup
          show={show.basic}
          customStyle={{ padding: '30px 50px', color: 'var(--app-B6-N1)' }}
          onClose={hideBasic}
          onAfterEnter={onAfterEnter}
          onEnter={onEnter}
          onBeforeEnter={onBeforeEnter}
          onLeave={onLeave}
          onBeforeLeave={onBeforeLeave}
          onAfterLeave={onAfterLeave}
        >
          {Strings.getLang('content')}
        </Popup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('popupPosition')}>
        <Cell title={Strings.getLang('topPopUp')} isLink onClick={showTop} />
        <Cell title={Strings.getLang('bottomPopUp')} isLink onClick={showBottom} />
        <Cell title={Strings.getLang('popUpFromTheLeftSide')} isLink onClick={showLeft} />
        <Cell title={Strings.getLang('slideOutFromTheRight')} isLink onClick={showRight} />

        <Popup show={show.top} position="top" customStyle={{ height: '20%' }} onClose={hideTop} />
        <Popup
          show={show.bottom}
          position="bottom"
          customStyle={{ height: '20%' }}
          onClose={hideBottom}
        />
        <Popup
          show={show.left}
          position="left"
          customStyle={{ width: '20%', height: '100%' }}
          onClose={hideLeft}
        />
        <Popup
          show={show.right}
          position="right"
          customStyle={{ width: '20%', height: '100%' }}
          onClose={hideRight}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('closeIcon')}>
        <Cell title={Strings.getLang('closeIcon')} isLink onClick={showCloseIcon} />
        <Cell title={Strings.getLang('customIcon')} isLink onClick={showCustomCloseIcon} />
        <Cell title={Strings.getLang('iconPosition')} isLink onClick={showCustomIconPosition} />

        <Popup
          show={show.closeIcon}
          closeable
          position="bottom"
          customStyle={{ height: '20%' }}
          onClose={hideCloseIcon}
        />

        <Popup
          show={show.customCloseIcon}
          closeable
          closeIcon={Close}
          position="bottom"
          customStyle={{ height: '20%' }}
          onClose={hideCustomCloseIcon}
        />

        <Popup
          show={show.customIconPosition}
          closeable
          closeIconPosition="bottom-left"
          position="bottom"
          customStyle={{ height: '20%' }}
          onClose={hideCustomIconPosition}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('roundedCornerPopup')}>
        <Cell title={Strings.getLang('roundedCornerPopup')} isLink onClick={showRound} />

        <Popup
          show={show.round}
          round
          position="bottom"
          customStyle={{ height: '20%' }}
          onClose={hideRound}
        />
      </DemoBlock>
    </>
  );
}
