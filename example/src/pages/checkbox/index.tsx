import React from 'react';
import { Checkbox, CheckboxGroup, CellGroup, Cell, Image } from '@ray-js/smart-ui';
import { DemoBlock } from '@/components';
import styles from './index.module.less';
import Strings from '../../i18n';

const activeIcon =
  'https://static1.tuyacn.com/static/tuya-miniapp-doc/_next/static/images/logo-small.png';
const inactiveIcon =
  'https://static1.tuyacn.com/static/tuya-miniapp-doc/_next/static/images/logo-small2.png';
const list = ['a', 'b', 'c'];

export default function Demo() {
  const [checkbox1, setCheckbox1] = React.useState(true);
  const [checkbox2, setCheckbox2] = React.useState(true);
  const [checkbox3, setCheckbox3] = React.useState(true);
  const [checkboxLabel, setCheckboxLabel] = React.useState(true);
  const [checkboxSize, setCheckboxSize] = React.useState(true);
  const [checkboxShape, setCheckboxShape] = React.useState(true);
  const [result, setResult] = React.useState(['a', 'b']);
  const [result2, setResult2] = React.useState([]);
  const [result3, setResult3] = React.useState([]);
  const [result4, setResult4] = React.useState([]);

  const toggle = index => {
    const pages = getCurrentPages();
    const pageInstall = pages[pages.length - 1];
    const checkbox = pageInstall.selectComponent(`#checkboxes-${index}`);
    checkbox.toggle();
  };

  return (
    <>
      <DemoBlock title={Strings.getLang('basicUsage')}>
        <Checkbox
          value={checkbox1}
          onChange={event => {
            setCheckbox1(event.detail);
          }}
          customClass={styles['demo-checkbox']}
        >
          {Strings.getLang('checkbox')}
        </Checkbox>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('disabledState')}>
        <Checkbox disabled value={false} customClass={styles['demo-checkbox']}>
          {Strings.getLang('checkbox')}
        </Checkbox>
        <Checkbox disabled value customClass={styles['demo-checkbox']}>
          {Strings.getLang('checkbox')}
        </Checkbox>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('customShape')}>
        <Checkbox
          value={checkboxShape}
          shape="square"
          onChange={event => {
            setCheckboxShape(event.detail);
          }}
          customClass={styles['demo-checkbox']}
        >
          {Strings.getLang('checkbox')}
        </Checkbox>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('customColor')}>
        <Checkbox
          value={checkbox2}
          checkedColor="#07c160"
          onChange={event => {
            setCheckbox2(event.detail);
          }}
          customClass={styles['demo-checkbox']}
        >
          {Strings.getLang('checkbox')}
        </Checkbox>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('customSize')}>
        <Checkbox
          iconSize="25px"
          value={checkboxSize}
          onChange={event => {
            setCheckboxSize(event.detail);
          }}
          customClass={styles['demo-checkbox']}
        >
          {Strings.getLang('checkbox')}
        </Checkbox>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('customIcon')}>
        <Checkbox
          useIconSlot
          value={checkbox3}
          onChange={event => {
            setCheckbox3(event.detail);
          }}
          customClass={styles['demo-checkbox']}
        >
          {Strings.getLang('customIcon')}
          <image slot="icon" className={styles.icon} src={checkbox3 ? activeIcon : inactiveIcon} />
        </Checkbox>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('disableTextClicking')}>
        <Checkbox
          labelDisabled
          value={checkboxLabel}
          onChange={event => {
            setCheckboxLabel(event.detail);
          }}
          customClass={styles['demo-checkbox']}
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
            <Checkbox key={item} name={item} dataName={item} customClass={styles['demo-checkbox']}>
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
            <Checkbox key={item} name={item} dataName={item} customClass={styles['demo-checkbox']}>
              {Strings.getLang('checkbox')} {item}
            </Checkbox>
          ))}
        </CheckboxGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('theMaximumSelectableNumberIsLimitedTo2')}>
        <CheckboxGroup value={result2} max={2} onChange={event => setResult2(event.detail)}>
          {list.map(item => (
            <Checkbox key={item} name={item} dataName={item} customClass={styles['demo-checkbox']}>
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
                valueClass={styles['"value-class"']}
                clickable
                onClick={() => toggle(index)}
              >
                <Checkbox
                  id={`checkboxes-${index}`}
                  name={item}
                  dataName={item}
                  onClick={e => e.stopPropagation()}
                />
              </Cell>
            ))}
          </CellGroup>
        </CheckboxGroup>
      </DemoBlock>
    </>
  );
}
