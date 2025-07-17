import React, { useState } from 'react';
import IconRight from '@tuya-miniapp/icons/dist/svg/Right';
import { Radio, RadioGroup, CellGroup, Cell, Image, Icon } from '@ray-js/smart-ui';
import { DemoBlock } from '@/components';
import styles from './index.module.less';
import Strings from '../../i18n';

export default function Demo() {
  const [radio1, setRadio1] = useState('1');
  const [radio2, setRadio2] = useState('2');
  const [radio3, setRadio3] = useState('1');
  const [radio4, setRadio4] = useState('1');
  const [radio5, setRadio5] = useState('1');
  const [radioSize, setRadioSize] = useState('1');
  const [radioLabel, setRadioLabel] = useState('1');
  const [radioShape, setRadioShape] = useState('1');
  const icon = {
    normal: 'https://static1.tuyacn.com/static/tuya-miniapp-doc/_next/static/images/logo-small.png',
    active: 'https://static1.tuyacn.com/static/tuya-miniapp-doc/_next/static/images/logo-small.png',
  };

  const setRadioState = {
    radio1: setRadio1,
    radio2: setRadio2,
    radio3: setRadio3,
    radio4: setRadio4,
    radio5: setRadio5,
    radioSize: setRadioSize,
    radioLabel: setRadioLabel,
    radioShape: setRadioShape,
  };

  const onChange = event => {
    const { key } = event.currentTarget.dataset;
    const setValue = setRadioState[key];
    if (setValue) {
      setValue(event.detail);
    }
  };

  const onClick = event => {
    const { name } = event.currentTarget.dataset;
    setRadio5(name);
  };

  return (
    <>
      <DemoBlock title={Strings.getLang('basicUsage')} padding>
        <RadioGroup value={radio1} data-key="radio1" onChange={onChange}>
          <Radio name="1" customClass={styles.demoRadio}>
            {Strings.getLang('radioButton')} 1
          </Radio>
          <Radio name="2">{Strings.getLang('radioButton')} 2</Radio>
        </RadioGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('horizontalAlignment')} padding>
        <RadioGroup value={radio1} data-key="radio1" onChange={onChange} direction="horizontal">
          <Radio name="1">{Strings.getLang('radioButton')} 1</Radio>
          <Radio name="2">{Strings.getLang('radioButton')} 2</Radio>
        </RadioGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('disabledState')} padding>
        <RadioGroup disabled value={radio2} data-key="radio2" onChange={onChange}>
          <Radio name="1" custom-class={styles.demoRadio}>
            {Strings.getLang('radioButton')} 1
          </Radio>
          <Radio name="2">{Strings.getLang('radioButton')} 2</Radio>
        </RadioGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('customShape')} padding>
        <RadioGroup value={radioShape} data-key="radioShape" onChange={onChange}>
          <Radio name="1" shape="square" customClass={styles.demoRadio}>
            {Strings.getLang('radioButton')} 1
          </Radio>
          <Radio name="2" shape="square">
            {Strings.getLang('radioButton')} 2
          </Radio>
        </RadioGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('customColor')} padding>
        <RadioGroup value={radio3} data-key="radio3" onChange={onChange}>
          <Radio name="1" customClass={styles.demoRadio} checkedColor="#07c160">
            {Strings.getLang('radioButton')} 1
          </Radio>
          <Radio name="2" checkedColor="#07c160">
            {Strings.getLang('radioButton')} 2
          </Radio>
        </RadioGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('customSize')} padding>
        <RadioGroup value={radioSize} data-key="radioSize" onChange={onChange}>
          <Radio name="1" iconSize="24px" customClass={styles.demoRadio}>
            {Strings.getLang('radioButton')} 1
          </Radio>
          <Radio name="2">{Strings.getLang('radioButton')} 2</Radio>
        </RadioGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('customIcon')} padding>
        <RadioGroup value={radio4} data-key="radio4" onChange={onChange}>
          <Radio
            name="1"
            useIconSlot
            slot={{
              icon: (
                <Image
                  src={radio4 === '1' ? icon.active : icon.normal}
                  width="20px"
                  height="20px"
                  fit="cover"
                />
              ),
            }}
          >
            {Strings.getLang('customIcon')}
          </Radio>
          <Radio
            name="2"
            useIconSlot
            slot={{
              icon: (
                <Image
                  src={radio4 === '2' ? icon.active : icon.normal}
                  width="20px"
                  height="20px"
                  fit="cover"
                />
              ),
            }}
          >
            {Strings.getLang('customIcon')}
          </Radio>
        </RadioGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('disableTextClick')} padding>
        <RadioGroup value={radioLabel} data-key="radioLabel" onChange={onChange}>
          <Radio labelDisabled name="1" customClass={styles.demoRadio}>
            {Strings.getLang('radioButton')} 1
          </Radio>
          <Radio labelDisabled name="2">
            {Strings.getLang('radioButton')} 2
          </Radio>
        </RadioGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('usedWithCellComponent')} padding>
        <RadioGroup value={radio5}>
          <CellGroup>
            <Cell
              title={`${Strings.getLang('radioButton')} 1`}
              clickable
              data-name="1"
              onClick={onClick}
            >
              <Radio useIconSlot slot={{ icon: <Icon name={IconRight} /> }} name="1" />
            </Cell>
            <Cell
              title={`${Strings.getLang('radioButton')} 2`}
              clickable
              data-name="2"
              onClick={onClick}
            >
              <Radio useIconSlot slot={{ icon: <Icon name={IconRight} /> }} name="2" />
            </Cell>
          </CellGroup>
        </RadioGroup>
      </DemoBlock>
    </>
  );
}
