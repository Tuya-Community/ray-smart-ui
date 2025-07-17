import { useState } from 'react';
import { Radio, RadioGroup, CellGroup, Cell, Image } from '@ray-js/smart-ui';
import { DemoBlock } from '@/components';
import { showModal } from '@ray-js/ray';
import Strings from '../../i18n';
import './index.less';

const icon = {
  normal: 'https://images.tuyacn.com/content-platform/hestia/1729664215ebd89f13e54.png',
  active: 'https://images.tuyacn.com/content-platform/hestia/1730877912e76cbdb7563.png',
};

export default function Demo() {
  const [radioBasic, setRadioBasic] = useState('1');
  const [radioDisabled, setRadioDisabled] = useState('1');
  const [radioShape, setRadioShape] = useState('1');
  const [radioColor, setRadioColor] = useState('1');
  const [radioSize, setRadioSize] = useState('1');
  const [radioText, setRadioText] = useState('1');
  const [radioHoriz, setRadioHoriz] = useState('1');
  const [radioIcon, setRadioIcon] = useState('1');
  const [radioCell, setRadioCell] = useState('1');
  const [radioLabel, setRadioLabel] = useState('1');
  const [radioPreventDefault, setRadioPreventDefault] = useState('1');

  const setRadioState = {
    radioBasic: setRadioBasic,
    radioDisabled: setRadioDisabled,
    radioShape: setRadioShape,
    radioColor: setRadioColor,
    radioSize: setRadioSize,
    radioText: setRadioText,
    radioHoriz: setRadioHoriz,
    radioIcon: setRadioIcon,
    radioCell: setRadioCell,
    radioLabel: setRadioLabel,
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
    setRadioCell(name);
  };

  const onPreventDefaultChange = event => {
    const value = event.detail;
    showModal({
      content: `onChange name: ${value}`,
      showCancel: true,
      success: res => {
        if (res.confirm) {
          setRadioPreventDefault(value);
        }
      },
    });
  };

  return (
    <>
      <DemoBlock title={Strings.getLang('basicUsage')}>
        <RadioGroup value={radioBasic} data-key="radioBasic" onChange={onChange}>
          <Radio name="1" customClass="demo-radio-inline" />
          <Radio name="2" customClass="demo-radio-inline" />
        </RadioGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('disabledStatus')}>
        <RadioGroup disabled value={radioDisabled} data-key="radioDisabled" onChange={onChange}>
          <Radio name="1" customClass="demo-radio-inline" />
          <Radio name="2" customClass="demo-radio-inline" />
        </RadioGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('customShape')}>
        <RadioGroup value={radioShape} data-key="radioShape" onChange={onChange}>
          <Radio name="1" shape="square" customClass="demo-radio-inline" />
          <Radio name="2" shape="square" customClass="demo-radio-inline" />
        </RadioGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('customColor')}>
        <RadioGroup value={radioColor} data-key="radioColor" onChange={onChange}>
          <Radio name="1" customClass="demo-radio-inline" checkedColor="#10D0D0" />
          <Radio name="2" customClass="demo-radio-inline" checkedColor="#10D0D0" />
        </RadioGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('customSize')}>
        <RadioGroup value={radioSize} data-key={radioSize} onChange={onChange}>
          <Radio name="1" iconSize="28px" customClass="demo-radio-inline" />
          <Radio name="2" iconSize="28px" customClass="demo-radio-inline" />
        </RadioGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('customText')}>
        <RadioGroup value={radioText} data-key="radioText" onChange={onChange}>
          <Radio name="1" customClass="demo-radio">{`${Strings.getLang('radioButton')} 1`}</Radio>
          <Radio name="2" customClass="demo-radio">{`${Strings.getLang('radioButton')} 2`}</Radio>
        </RadioGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('horizontalArrangement')}>
        <RadioGroup
          value={radioHoriz}
          data-key="radioHoriz"
          onChange={onChange}
          direction="horizontal"
        >
          <Radio name="1" customClass="demo-radio">{`${Strings.getLang('radioButton')} 1`}</Radio>
          <Radio name="2" customClass="demo-radio">{`${Strings.getLang('radioButton')} 2`}</Radio>
        </RadioGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('customIcon')}>
        <RadioGroup value={radioIcon} data-key="radioIcon" onChange={onChange}>
          <Radio
            name="1"
            customClass="demo-radio"
            useIconSlot
            slot={{
              icon: (
                <Image
                  src={radioIcon === '1' ? icon.active : icon.normal}
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
            customClass="demo-radio"
            useIconSlot
            slot={{
              icon: (
                <Image
                  src={radioIcon === '2' ? icon.active : icon.normal}
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

      <DemoBlock title={Strings.getLang('disableTextClick')}>
        <RadioGroup value={radioLabel} data-key="radioLabel" onChange={onChange}>
          <Radio labelDisabled name="1" customClass="demo-radio">
            {Strings.getLang('radioButton')} 1
          </Radio>
          <Radio labelDisabled name="2" customClass="demo-radio">
            {Strings.getLang('radioButton')} 2
          </Radio>
        </RadioGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('usedWithCellComponent')}>
        <RadioGroup value={radioCell}>
          <CellGroup>
            <Cell
              title={`${Strings.getLang('radioButton')} 1`}
              clickable
              data-name="1"
              slot={{ rightIcon: <Radio name="1" /> }}
              onClick={onClick}
            />
            <Cell
              title={`${Strings.getLang('radioButton')} 2`}
              clickable
              data-name="2"
              slot={{ rightIcon: <Radio name="2" /> }}
              onClick={onClick}
            />
          </CellGroup>
        </RadioGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('preventDefaultUIUpdate')}>
        <RadioGroup preventDefault onChange={onPreventDefaultChange} value={radioPreventDefault}>
          <Radio name="1" customClass="demo-radio">{`${Strings.getLang('radioButton')} 1`}</Radio>
          <Radio name="2" customClass="demo-radio">{`${Strings.getLang('radioButton')} 2`}</Radio>
        </RadioGroup>
      </DemoBlock>
    </>
  );
}
