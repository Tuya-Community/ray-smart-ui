import React, { useState } from 'react';
import { Empty, Button, Tabs, Tab } from '@ray-js/smart-ui';
import { Text } from '@ray-js/ray';
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
        <Empty title={Strings.getLang('title')} description={Strings.getLang('explanatoryText')} />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('customImage')} padding>
        <Empty image="https://images.tuyacn.com/rms-static/ae2ff530-976e-11ef-9ccb-47cdb7db279b-1730368709635.png?tyName=img_custom_empty.png" />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('bottomContent')} padding>
        <Empty title={Strings.getLang('title')} description={Strings.getLang('explanatoryText')}>
          <Button round type="primary" customClass={styles.customButton}>
            {Strings.getLang('button')}
          </Button>
        </Empty>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('useSlot')} padding>
        <Empty
          slot={{
            title: <Text style={{ fontWeight: 'normal' }}>{Strings.getLang('useTitleSlot')}</Text>,
            description: (
              <Text style={{ fontWeight: 'normal' }}>{Strings.getLang('useDescriptionSlot')}</Text>
            ),
          }}
        />
      </DemoBlock>
    </>
  );
}
