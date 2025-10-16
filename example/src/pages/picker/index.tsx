import React, { useCallback, useState } from 'react';
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
      activeIndex: 2,
      unit: Strings.getLang('city'),
    },
  ],
  column5: [
    {
      values: new Array(100).fill(1).map((x, i) => i),
      style: { flex: 'none', width: 'auto', minWidth: '61px' },
      fontStyle: { fontSize: '16px' },
      activeIndex: 0,
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
      activeIndex: 1,
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
  column7: [
    {
      values: new Array(100).fill(1).map((x, i) => i),
    },
  ],
};

const cities = [
  [
    Strings.getLang('hangzhou'),
    Strings.getLang('ningbo'),
    Strings.getLang('wenzhou'),
    Strings.getLang('jiaxing'),
    Strings.getLang('huzhou'),
  ],
  [
    Strings.getLang('fuzhouCity'),
    Strings.getLang('xiamenCity'),
    Strings.getLang('putianCity'),
    Strings.getLang('sanmingCity'),
    Strings.getLang('quanzhouCity'),
  ],
];

export default function Demo() {
  const [column4, setColumn4] = useState(data.column4);
  const onChange = useCallback(event => {
    const { value, index } = event.detail;
    showToast({
      icon: 'none',
      title: `Value: ${value}, Index：${index}`,
    });
  }, []);

  const onChangeLink = useCallback(event => {
    const { value, index } = event.detail;
    const provinceIndex = column4[0].values.findIndex(item => item === value[0]);
    const cityList = cities[provinceIndex];
    const cityIndex = index ? cityList.findIndex(item => item === value[1]) : 0;
    setColumn4([
      {
        ...column4[0],
        activeIndex: provinceIndex,
      },
      {
        ...column4[1],
        activeIndex: cityIndex,
        values: cityList,
      },
    ]);
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
        <Picker changeAnimation columns={data.column1} activeIndex={3} onChange={onChange} />
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
        <Picker columns={column4} onChange={onChangeLink} />
      </DemoBlock>
      <DemoBlock title={Strings.getLang('disableOptions')}>
        <Picker columns={data.column2} onChange={onChange2} />
      </DemoBlock>
      <DemoBlock title={Strings.getLang('loadingState')}>
        <Picker loading columns={data.column4} />
      </DemoBlock>
      <DemoBlock title={Strings.getLang('setTheOrderOfColumnStyles')}>
        <Picker columns={data.column6} />
      </DemoBlock>
      <DemoBlock title={Strings.getLang('loop')}>
        <Picker loop columns={data.column7} onChange={onChange} />
      </DemoBlock>
      <DemoBlock title={Strings.getLang('more3d')}>
        <Picker loop fullHeight columns={data.column7} onChange={onChange} />
      </DemoBlock>
    </>
  );
}
