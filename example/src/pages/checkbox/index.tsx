import React from 'react';
import { Image } from '@ray-js/ray';
import { Checkbox, CheckboxGroup, CellGroup, Cell } from '@ray-js/smart-ui';
import { DemoBlock } from '@/components';
import Strings from '../../i18n';
import './index.less';

const activeIcon = 'https://images.tuyacn.com/content-platform/hestia/1730877912e76cbdb7563.png';
const inactiveIcon = '';
const list = ['a', 'b', 'c'];

export default function Demo() {
  const [result, setResult] = React.useState(['a', 'b']);
  const [result2, setResult2] = React.useState([]);
  const [result3, setResult3] = React.useState([]);
  const [result4, setResult4] = React.useState([]);

  const [checkboxState, setCheckboxState] = React.useState({
    checkbox1: true,
    checkbox2: true,
    checkbox3: true,
    checkboxLabel: true,
    checkboxSize: true,
    checkboxShape: true,
  });

  const toggle = index => {
    const pages = getCurrentPages();
    const pageInstall = pages[pages.length - 1];
    const checkbox = pageInstall.selectComponent(`#checkboxes-${index}`);
    checkbox.toggle();
  };

  const onChange = event => {
    const { key } = event.currentTarget.dataset;
    setCheckboxState({ ...checkboxState, [key]: event.detail });
  };

  const onChange2 = event => {
    const { key } = event.currentTarget.dataset;
    setCheckboxState({ ...checkboxState, [key]: !event.detail });
  };

  return (
    <>
      <DemoBlock title={Strings.getLang('basicUsage')}>
        <Checkbox
          value={checkboxState.checkbox1}
          data-key="checkbox1"
          customClass="demo-checkbox-inline"
          onChange={onChange}
        />
        <Checkbox
          value={!checkboxState.checkbox1}
          data-key="checkbox1"
          customClass="demo-checkbox-inline"
          onChange={onChange2}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('disabledState')}>
        <Checkbox disabled value={false} customClass="demo-checkbox-inline" />
        <Checkbox disabled value customClass="demo-checkbox-inline" />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('customShape')}>
        <Checkbox
          value={checkboxState.checkboxShape}
          data-key="checkboxShape"
          shape="square"
          customClass="demo-checkbox-inline"
          onChange={onChange}
        />
        <Checkbox
          value={!checkboxState.checkboxShape}
          data-key="checkboxShape"
          shape="square"
          customClass="demo-checkbox-inline"
          onChange={onChange2}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('customColor')}>
        <Checkbox
          value={checkboxState.checkbox2}
          data-key="checkbox2"
          checkedColor="#10D0D0"
          customClass="demo-checkbox-inline"
          onChange={onChange}
        />
        <Checkbox
          value={!checkboxState.checkbox2}
          data-key="checkbox2"
          checkedColor="#10D0D0"
          customClass="demo-checkbox-inline"
          onChange={onChange2}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('customSize')}>
        <Checkbox
          iconSize="28px"
          value={checkboxState.checkboxSize}
          data-key="checkboxSize"
          customClass="demo-checkbox-inline"
          onChange={onChange}
        />
        <Checkbox
          iconSize="28px"
          value={!checkboxState.checkboxSize}
          data-key="checkboxSize"
          customClass="demo-checkbox-inline"
          onChange={onChange2}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('showText')}>
        <Checkbox
          value={checkboxState.checkbox1}
          data-key="checkbox1"
          customClass="demo-checkbox"
          onChange={onChange}
        >
          {Strings.getLang('customText')}
        </Checkbox>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('customIcon')}>
        <Checkbox
          useIconSlot
          value={checkboxState.checkbox3}
          data-key="checkbox3"
          onChange={onChange}
          slot={{
            icon: (
              <Image
                className="icon"
                mode="widthFix"
                src={checkboxState.checkbox3 ? activeIcon : inactiveIcon}
              />
            ),
          }}
          customClass="demo-checkbox"
        >
          {Strings.getLang('customIcon')}
        </Checkbox>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('disableTextClicking')}>
        <Checkbox
          labelDisabled
          value={checkboxState.checkboxLabel}
          onChange={onChange}
          customClass="demo-checkbox"
        >
          {Strings.getLang('checkbox')}
        </Checkbox>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('checkboxGroup')}>
        <CheckboxGroup
          value={result}
          onChange={event => {
            setResult(event.detail);
          }}
        >
          {list.map(item => (
            <Checkbox key={item} name={item} dataName={item} customClass="demo-checkbox">
              {Strings.getLang('checkbox')} {item}
            </Checkbox>
          ))}
        </CheckboxGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('horizontalAlignment')}>
        <CheckboxGroup
          direction="horizontal"
          value={result4}
          onChange={event => setResult4(event.detail)}
        >
          {list.map(item => (
            <Checkbox key={item} name={item} dataName={item} customClass="demo-checkbox">
              {Strings.getLang('checkbox')} {item}
            </Checkbox>
          ))}
        </CheckboxGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('theMaximumSelectableNumberIsLimitedTo2')}>
        <CheckboxGroup value={result2} max={2} onChange={event => setResult2(event.detail)}>
          {list.map(item => (
            <Checkbox key={item} name={item} dataName={item} customClass="demo-checkbox">
              {Strings.getLang('checkbox')} {item}
            </Checkbox>
          ))}
        </CheckboxGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('useWithCellComponent')}>
        <CheckboxGroup
          value={result3}
          onChange={event => {
            setResult3(event.detail);
          }}
        >
          <CellGroup>
            {list.map((item, index) => (
              <Cell
                key={item}
                title={`${Strings.getLang('checkbox')} ${item}`}
                valueClass="value-class"
                clickable
                onClick={() => toggle(index)}
              >
                <Checkbox id={`checkboxes-${index}`} name={item} dataName={item} />
              </Cell>
            ))}
          </CellGroup>
        </CheckboxGroup>
      </DemoBlock>
    </>
  );
}
