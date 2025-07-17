import React, { useState } from 'react';
import { showToast } from '@ray-js/ray';
import IcloudIcon from '@tuya-miniapp/icons/dist/svg/Icloud';
import XmarkIcloudIcon from '@tuya-miniapp/icons/dist/svg/XmarkIcloud';
import { Rate } from '@ray-js/smart-ui';
import { DemoBlock } from '@/components';
import styles from './index.module.less';
import Strings from '../../i18n';

export default function Demo() {
  const [value1, setValue1] = useState(3);
  const [value2, setValue2] = useState(3);
  const [value3, setValue3] = useState(3);
  const [value4, setValue4] = useState(2.5);
  const [value5, setValue5] = useState(4);
  const [value6] = useState(3);
  const [value8, setValue8] = useState(2);
  const icon = IcloudIcon;
  const voidIcon = XmarkIcloudIcon;

  const onChange = event => {
    setValue8(event.detail);
    showToast({
      icon: 'none',
      title: `${Strings.getLang('currentValue')}：${event.detail}`,
    });
  };

  return (
    <>
      <DemoBlock title={Strings.getLang('basicUsage')}>
        <Rate
          customClass={styles['rate-position']}
          value={value1}
          onChange={event => {
            setValue1(event.detail);
          }}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('customIcon')}>
        <Rate
          customClass={styles['rate-position']}
          icon={icon}
          voidIcon={voidIcon}
          value={value2}
          onChange={event => {
            setValue2(event.detail);
          }}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('customStyle')}>
        <Rate
          customClass={styles['rate-position']}
          value={value3}
          size={25}
          color="#ffd21e"
          voidColor="#eee"
          onChange={event => {
            setValue3(event.detail);
          }}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('halfStar')}>
        <Rate
          customClass={styles['rate-position']}
          value={value4}
          allowHalf
          voidColor="#eee"
          onChange={event => {
            setValue4(event.detail);
          }}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('customQuantity')}>
        <Rate
          customClass={styles['rate-position']}
          value={value5}
          count={6}
          onChange={event => {
            setValue5(event.detail);
          }}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('disabled')}>
        <Rate customClass={styles['rate-position']} value={value6} disabled />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('readOnlyStatus')}>
        <Rate customClass={styles['rate-position']} value={value6} readonly />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('listenToChangeEvent')}>
        <Rate customClass={styles['rate-position']} value={value8} onChange={onChange} />
      </DemoBlock>
    </>
  );
}
