import React, { useState } from 'react';
import { View } from '@ray-js/ray';
import { Skeleton, Switch, Image } from '@ray-js/smart-ui';
import { DemoBlock } from '@/components';
import styles from './index.module.less';
import Strings from '../../i18n';

export default function Demo() {
  const [show, setShow] = useState(false);

  const onChange = event => {
    setShow(event.detail);
  };

  return (
    <>
      <DemoBlock title={Strings.getLang('basicUsage')} padding>
        <Skeleton title row="3" rowWidth={['100%', '100%', '80%']} />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('showAvatar')} padding>
        <Skeleton title avatar row="3" />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('showSubComponent')} padding>
        <Switch checked={show} size="24px" onChange={onChange} />
        <Skeleton title avatar row="3" loading={!show}>
          <View className={styles.demoPreview}>
            <Image
              className={styles.demoPreviewImg}
              src="https://static1.tuyacn.com/static/tuya-miniapp-doc/_next/static/images/logo-small.png"
            />
            <View className={styles.demoContent}>
              <View className={styles.demoContentH3}>{Strings.getLang('about')} Tuya Mini App</View>
              <View className="demo-content-p">
                {Strings.getLang('skeletonTip')}
              </View>
            </View>
          </View>
        </Skeleton>
      </DemoBlock>
    </>
  );
}
