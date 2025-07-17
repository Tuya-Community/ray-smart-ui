import React from 'react';
import { Button, Overlay } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';
import { DemoBlock } from '@/components';
import styles from './index.module.less';
import Strings from '../../i18n';

export default function Demo() {
  const [show, setShow] = React.useState(false);
  const [showEmbedded, setShowEmbedded] = React.useState(false);

  const onClickShow = React.useCallback(() => setShow(true), []);
  const onClickHide = React.useCallback(() => setShow(false), []);
  const onClickShowEmbedded = React.useCallback(() => setShowEmbedded(true), []);
  const onClickHideEmbedded = React.useCallback(() => setShowEmbedded(false), []);
  const onWrapperClick = React.useCallback(() => {
    console.log('onWrapperClick');
  }, []);
  const onBlockClick = React.useCallback(evt => {
    console.log('onBlockClick');
    evt?.origin?.stopPropagation();
  }, []);

  return (
    <>
      <DemoBlock title={Strings.getLang('basicUsage')} padding>
        <Button type="primary" onClick={onClickShow}>
          {Strings.getLang('showMaskLayer')}
        </Button>
        <Overlay show={show} onClick={onClickHide} />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('embeddedContent')} padding>
        <Button type="primary" onClick={onClickShowEmbedded}>
          {Strings.getLang('embeddedContent')}
        </Button>
        <Overlay show={showEmbedded} onClick={onClickHideEmbedded}>
          <View className={styles.wrapper} onClick={onWrapperClick}>
            <View className={styles.block} onClick={onBlockClick} />
          </View>
        </Overlay>
      </DemoBlock>
    </>
  );
}
