import React, { useState, useCallback } from 'react';
import { Cascader, Popup, Field, BottomSheet } from '@ray-js/smart-ui';
import { DemoBlock } from '@/components';
import Strings from '../../i18n';
import styles from './index.module.less';

const options = [
  {
    text: Strings.getLang('zhejiangProvince'),
    value: '330000',
    className: 'test',
    options: [
      {
        text: Strings.getLang('hangzhou'),
        value: '330100',
        options: [
          {
            text: Strings.getLang('shangchengDistrict'),
            value: '330102',
          },
          {
            text: Strings.getLang('downtownDistrict'),
            value: '330103',
          },
          {
            text: Strings.getLang('jiangganDistrict'),
            value: '330104',
          },
        ],
      },
      {
        text: Strings.getLang('ningboCity'),
        value: '330200',
        options: [
          {
            text: Strings.getLang('haishuDistrict'),
            value: '330203',
          },
          {
            text: Strings.getLang('jiangbeiDistrict'),
            value: '330205',
          },
          {
            text: Strings.getLang('beilunDistrict'),
            value: '330206',
          },
        ],
      },
      {
        text: Strings.getLang('wenzhou'),
        value: '330300',
        options: [
          {
            text: Strings.getLang('luchengDistrict'),
            value: '330302',
          },
          {
            text: Strings.getLang('longwanDistrict'),
            value: '330303',
          },
          {
            text: Strings.getLang('ouhaiDistrict'),
            value: '330304',
          },
        ],
      },
    ],
  },
  {
    text: Strings.getLang('jiangsuProvince'),
    value: '320000',
    options: [
      {
        text: Strings.getLang('nanjingCity'),
        value: '320100',
        options: [
          {
            text: Strings.getLang('xuanwuDistrict'),
            value: '320102',
          },
          {
            text: Strings.getLang('qinhuaiDistrict'),
            value: '320104',
          },
          {
            text: Strings.getLang('jianyeDistrict'),
            value: '320105',
          },
        ],
      },
      {
        text: Strings.getLang('wuxiCity'),
        value: '320200',
        options: [
          {
            text: Strings.getLang('xishanDistrict'),
            value: '320205',
          },
          {
            text: Strings.getLang('huishanDistrict'),
            value: '320206',
          },
          {
            text: Strings.getLang('binhuDistrict'),
            value: '320211',
          },
        ],
      },
      {
        text: Strings.getLang('xuzhouCity'),
        value: '320300',
        options: [
          {
            text: Strings.getLang('gulouDistrict'),
            value: '320302',
          },
          {
            text: Strings.getLang('yunlongDistrict'),
            value: '320303',
          },
          {
            text: Strings.getLang('jiawangDistrict'),
            value: '320305',
          },
        ],
      },
    ],
  },
];

const asyncOptions1 = [
  {
    text: Strings.getLang('zhejiangProvince'),
    value: '330000',
    options: [],
  },
];
const asyncOptions2 = [
  { text: Strings.getLang('hangzhou'), value: '330100' },
  { text: Strings.getLang('ningboCity'), value: '330200' },
];

const useData = (initOptions: any[] = []) => {
  const [state, setState] = useState({
    show: false,
    value: '',
    result: '',
    options: initOptions,
  });

  const show = useCallback(() => {
    setState(d => ({ ...d, show: true }));
  }, []);
  const close = useCallback(() => {
    setState(d => ({ ...d, show: false }));
  }, []);
  const finish = useCallback(e => {
    const { selectedOptions, value } = e.detail;
    const result = selectedOptions.map(option => option.text).join('/');

    setState(d => ({ ...d, value, result, show: false }));
  }, []);

  const update = useCallback(data => {
    setState(d => ({ ...d, ...data }));
  }, []);

  return {
    state,
    show,
    close,
    finish,
    update,
  };
};

export default function Demo() {
  const { state: baseState, show: showArea, close: onClose, finish: onFinish } = useData();
  const {
    state: customColorState,
    show: showCustomArea,
    close: onCustomClose,
    finish: onCustomFinish,
  } = useData();
  const {
    state: asynceState,
    show: showAsyncArea,
    close: onAsyncClose,
    finish: onAsyncFinish,
    update: updateAsyncOptions,
  } = useData(asyncOptions1);

  const loadDynamicOptions = useCallback(e => {
    const { value } = e.detail;
    if (value === '330000') {
      const data = [...asyncOptions1];
      data[0].options = asyncOptions2;
      setTimeout(() => {
        updateAsyncOptions({
          options: data,
        });
      }, 500);
    }
  }, []);

  return (
    <>
      <DemoBlock title={Strings.getLang('basicUsage')} className={styles['cascader-demo']}>
        <Field
          value={baseState.result}
          isLink
          readonly
          label={Strings.getLang('region')}
          placeholder={Strings.getLang('pleaseSelectARegion')}
          onTap={showArea}
        />
        <BottomSheet show={baseState.show} maxHeight="100%">
          {baseState.show && (
            <Cascader
              value={baseState.value}
              title={Strings.getLang('pleaseSelectARegion')}
              options={options}
              onClose={onClose}
              onFinish={onFinish}
            />
          )}
        </BottomSheet>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('customColor')} className={styles['cascader-demo']}>
        <Field
          value={customColorState.result}
          isLink
          readonly
          label={Strings.getLang('region')}
          placeholder={Strings.getLang('pleaseSelectARegion')}
          onTap={showCustomArea}
        />
        <BottomSheet show={customColorState.show} maxHeight="100%">
          {customColorState.show && (
            <Cascader
              value={customColorState.value}
              title={Strings.getLang('pleaseSelectARegion')}
              options={options}
              activeColor="#ee0a24"
              onClose={onCustomClose}
              onFinish={onCustomFinish}
            />
          )}
        </BottomSheet>
      </DemoBlock>

      <DemoBlock
        title={Strings.getLang('asynchronousLoadingOptions')}
        className={styles['cascader-demo']}
      >
        <Field
          value={asynceState.result}
          isLink
          readonly
          label={Strings.getLang('region')}
          placeholder={Strings.getLang('pleaseSelectARegion')}
          onTap={showAsyncArea}
        />
        <BottomSheet show={asynceState.show} maxHeight="100%">
          {asynceState.show && (
            <Cascader
              value={asynceState.value}
              title={Strings.getLang('pleaseSelectARegion')}
              options={asynceState.options}
              onClose={onAsyncClose}
              onFinish={onAsyncFinish}
              onChange={loadDynamicOptions}
            />
          )}
        </BottomSheet>
      </DemoBlock>
    </>
  );
}
