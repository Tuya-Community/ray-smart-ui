import React, { useState } from 'react';
import { Empty, Button, Tabs, Tab } from '@ray-js/smart-ui';
import { DemoBlock } from '@/components';
import styles from './index.module.less';
import Strings from '../../i18n';

export default function Demo() {
  const [activeTab, setActiveTab] = useState(0);

  const onChange = event => {
    setActiveTab(event.detail.name);
  };

  return (
    <>
      <DemoBlock title={Strings.getLang('basicUsage')} padding>
        <Empty description={Strings.getLang('descriptionText')} />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('imageType')} padding>
        <Tabs active={activeTab} onChange={onChange}>
          <Tab title={Strings.getLang('generalError')}>
            <Empty image="error" description={Strings.getLang('descriptionText')} />
          </Tab>
          <Tab title={Strings.getLang('netWorkErr')}>
            <Empty image="network" description={Strings.getLang('descriptionText')} />
          </Tab>
          <Tab title={Strings.getLang('searchTips')}>
            <Empty image="search" description={Strings.getLang('descriptionText')} />
          </Tab>
        </Tabs>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('customImage')} padding>
        <Empty
          customClass={styles.customImage}
          image="https://static1.tuyacn.com/static/tuya-miniapp-doc/_next/static/images/logo-small.png"
          description={Strings.getLang('descriptionText')}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('bottomContent')} padding>
        <Empty description={Strings.getLang('descriptionText')}>
          <Button round type="danger" customClass={styles.customButton}>
            {Strings.getLang('button')}
          </Button>
        </Empty>
      </DemoBlock>
    </>
  );
}
