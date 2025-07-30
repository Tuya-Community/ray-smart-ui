import React, { useCallback } from 'react';
import { Picker } from '@ray-js/smart-ui';
import { showToast } from '@ray-js/ray';
import { DemoBlock } from '@/components';
import styles from './index.module.less';
import Strings from '../../i18n';

const data = {
  column1: [
    Strings.getLang('hangzhou'),
    Strings.getLang('ningbo'),
    Strings.getLang('wenzhou'),
    Strings.getLang('jiaxing'),
    Strings.getLang('huzhou'),
  ],
  column2: [
    { text: Strings.getLang('hangzhou'), disabled: true },
    { text: Strings.getLang('ningbo') },
    { text: Strings.getLang('wenzhou') },
  ],
  column3: {
    [Strings.getLang('zhejiang')]: [
      Strings.getLang('hangzhou'),
      Strings.getLang('ningbo'),
      Strings.getLang('wenzhou'),
      Strings.getLang('jiaxing'),
      Strings.getLang('huzhou'),
    ],
    [Strings.getLang('fujian')]: [
      Strings.getLang('fuzhou'),
      Strings.getLang('xiamen'),
      Strings.getLang('putian'),
      Strings.getLang('sanming'),
      Strings.getLang('quanzhou'),
    ],
  },
  column4: [
    {
      values: [Strings.getLang('zhejiang'), Strings.getLang('fujian')],
      className: 'column1',
      unit: Strings.getLang('province'),
    },
    {
      values: [
        Strings.getLang('hangzhou'),
        Strings.getLang('ningbo'),
        Strings.getLang('wenzhou'),
        Strings.getLang('jiaxing'),
        Strings.getLang('huzhou'),
      ],
      className: 'column2',
      defaultIndex: 2,
      unit: Strings.getLang('city'),
    },
  ],
  column5: [
    {
      values: new Array(100).fill(1).map((x, i) => i),
      style: { flex: 'none', width: 'auto', minWidth: '61px' },
      fontStyle: { fontSize: '16px' },
    },
    {
      values: ['.'],
      disabled: true,
      style: { flex: 'none', width: '8px', display: 'flex', justifyContent: 'center' },
    },
    {
      values: new Array(20).fill(1).map((x, i) => i),
      style: { flex: 'none', width: 'auto', minWidth: '61px' },
      unit: 'Kg',
    },
  ],
  column6: [
    {
      values: [Strings.getLang('zhejiang'), Strings.getLang('fujian')],
      order: 2,
    },
    {
      values: [
        Strings.getLang('hangzhou'),
        Strings.getLang('ningbo'),
        Strings.getLang('wenzhou'),
        Strings.getLang('jiaxing'),
        Strings.getLang('huzhou'),
      ],
      order: 1,
    },
  ],
};

export default function Demo() {
  const onChange = useCallback(event => {
    const { value, index } = event.detail;
    showToast({
      icon: 'none',
      title: `Value: ${value}, Index：${index}`,
    });
  }, []);

  const onChangeNum = useCallback(event => {
    const { value, index } = event.detail;
    showToast({
      icon: 'none',
      title: `Value: ${value.join('')}, Index：${index}`,
    });
  }, []);

  const onChange2 = useCallback(event => {
    const { picker, value } = event.detail;
    picker.setColumnValues(1, data.column3[value[0]]);
    getApp().picker = picker;
  }, []);

  const onAnimationStart = () => {
    console.log('onAnimationStart');
  };

  const onAnimationEnd = () => {
    console.log('onAnimationEnd');
  };

  return (
    <>
      <DemoBlock title={Strings.getLang('basicUsage')}>
        <Picker columns={data.column1} onChange={onChange} />
      </DemoBlock>
      <DemoBlock title={Strings.getLang('multiColumnUsage')}>
        <Picker
          columns={data.column5}
          activeStyle={{
            color: 'rgb(135, 180, 244)',
          }}
          customClass={styles.picker5}
          onChange={onChangeNum}
          onAnimationEnd={onAnimationEnd}
          onAnimationStart={onAnimationStart}
        />
      </DemoBlock>
      <DemoBlock title={Strings.getLang('defaultSelection')}>
        <Picker defaultIndex={2} columns={data.column1} onChange={onChange} />
      </DemoBlock>
      <DemoBlock title={Strings.getLang('showTopBar')}>
        <Picker
          showToolbar
          title={Strings.getLang('title')}
          defaultIndex={2}
          columns={data.column1}
          onChange={onChange}
        />
      </DemoBlock>
      <DemoBlock title={Strings.getLang('multiColumnLinkage')}>
        <Picker columns={data.column4} onChange={onChange2} />
      </DemoBlock>
      <DemoBlock title={Strings.getLang('disableOptions')}>
        <Picker columns={data.column2} />
      </DemoBlock>
      <DemoBlock title={Strings.getLang('loadingState')}>
        <Picker loading columns={data.column4} />
      </DemoBlock>
      <DemoBlock title={Strings.getLang('setTheOrderOfColumnStyles')}>
        <Picker columns={data.column6} />
      </DemoBlock>
    </>
  );
}
