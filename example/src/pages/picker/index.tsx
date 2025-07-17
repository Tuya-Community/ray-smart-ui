import React, { useCallback } from 'react';
import { Picker } from '@ray-js/smart-ui';
import { showToast } from '@ray-js/ray';
import { DemoBlock } from '@/components';
import styles from './index.module.less';
import Strings from '../../i18n';

const data = {
  column1: [Strings.getLang('hangzhou'), Strings.getLang('ningbo'), Strings.getLang('wenzhou'), Strings.getLang('jiaxing'), Strings.getLang('huzhou')],
  column2: [{ text: Strings.getLang('hangzhou'), disabled: true }, { text: Strings.getLang('ningbo') }, { text: Strings.getLang('wenzhou') }],
  column3: {
    [Strings.getLang('zhejiang')]: [Strings.getLang('hangzhou'), Strings.getLang('ningbo'), Strings.getLang('wenzhou'), Strings.getLang('jiaxing'), Strings.getLang('huzhou')],
    [Strings.getLang('fujian')]: [Strings.getLang('fuzhou'), Strings.getLang('xiamen'), Strings.getLang('putian'), Strings.getLang('sanming'), Strings.getLang('quanzhou')],
  },
  column4: [
    {
      values: [Strings.getLang('zhejiang'), Strings.getLang('fujian')],
      className: 'column1',
      unit: Strings.getLang('province'),
    },
    {
      values: [Strings.getLang('hangzhou'), Strings.getLang('ningbo'), Strings.getLang('wenzhou'), Strings.getLang('jiaxing'), Strings.getLang('huzhou')],
      className: 'column2',
      defaultIndex: 2,
      unit: Strings.getLang('city'),
    },
  ],
  column5: [
    {
      values: new Array(100).fill(1).map((x, i) => i),
    },
    {
      values: ['.'],
    },
    {
      values: new Array(10).fill(1).map((x, i) => i),
      unit: 'Kg',
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

  return (
    <>
      <DemoBlock title={Strings.getLang('basicUsage')}>
        <Picker columns={data.column1} onChange={onChange} />
      </DemoBlock>
      <DemoBlock title={Strings.getLang('multiColumnUsage')}>
        <Picker columns={data.column5} onChange={onChangeNum} customClass={styles.picker5} />
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
    </>
  );
}
