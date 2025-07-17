import React, { useState, useCallback } from 'react';
import { View, showModal } from '@ray-js/ray';
import { DropdownItem, DropdownMenu, Cell, Switch, Button } from '@ray-js/smart-ui';
import { DemoBlock } from '@/components';
import styles from './index.module.less';
import Strings from '../../i18n';

const option1 = [
  { text: Strings.getLang('allProducts'), value: 0 },
  { text: Strings.getLang('newProduct'), value: 1 },
  { text: Strings.getLang('promotionalItem'), value: 2 },
];
const option2 = [
  { text: Strings.getLang('defaultSorting'), value: 'a' },
  { text: Strings.getLang('sortByTopReviews'), value: 'b' },
  { text: Strings.getLang('sortBySales'), value: 'c' },
];

export default function Demo() {
  const [switch1, setSwitch1] = useState(true);
  const [switch2, setSwitch2] = useState(false);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState('a');

  const onSwitch1Change = useCallback(({ detail }) => {
    setSwitch1(detail);
  }, []);
  const onSwitch2Change = useCallback(({ detail }) => {
    setSwitch2(detail);
  }, []);

  const onBeforeChange = useCallback(({ detail: { status, callback } }) => {
    showModal({
      title: Strings.getLang('asynchronousOpenClose'),
      content: `${Strings.getLang('areYouSure')}${status ? Strings.getLang('open') : Strings.getLang('close')}${Strings.getLang('dropdownMenu')}`,
      success: res => {
        if (res.confirm) {
          callback(true);
        } else if (res.cancel) {
          callback(false);
        }
      },
    });
  }, []);

  const onConfirm = useCallback(() => {
    const pages = getCurrentPages();
    const curPage = pages[pages.length - 1];
    curPage.selectComponent('#item').toggle();
  }, []);

  return (
    <>
      <DemoBlock title={Strings.getLang('basicUsage')}>
        <DropdownMenu>
          <DropdownItem value={value1} options={option1} />
          <DropdownItem value={value2} options={option2} />
        </DropdownMenu>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('customMenuContent')}>
        <DropdownMenu>
          <DropdownItem value={value1} options={option1} />
          <DropdownItem id="item" title={Strings.getLang('filter')}>
            <Cell title={Strings.getLang('freeShipping')}>
              <Switch
                size="24px"
                style={{ height: '26px' }}
                checked={switch1}
                activeColor="#ee0a24"
                onChange={onSwitch1Change}
              />
            </Cell>
            <Cell title={Strings.getLang('groupBuying')}>
              <Switch
                size="24px"
                style={{ height: '26px' }}
                checked={switch2}
                activeColor="#ee0a24"
                onChange={onSwitch2Change}
              />
            </Cell>
            <View style={{ padding: '5px 16px' }}>
              <Button type="danger" block round onClick={onConfirm}>
                {Strings.getLang('confirm')}
              </Button>
            </View>
          </DropdownItem>
        </DropdownMenu>
      </DemoBlock>

      <DemoBlock custom-class="white" title={Strings.getLang('customizeSelectedStateColor')}>
        <DropdownMenu active-color="#1989fa">
          <DropdownItem value={value1} options={option1} />
          <DropdownItem value={value2} options={option2} />
        </DropdownMenu>
      </DemoBlock>

      <DemoBlock custom-class="white" title={Strings.getLang('expandUpwards')}>
        <DropdownMenu direction="up">
          <DropdownItem value={value1} options={option1} />
          <DropdownItem value={value2} options={option2} />
        </DropdownMenu>
      </DemoBlock>

      <DemoBlock custom-class="white" title={Strings.getLang('disableMenu')}>
        <DropdownMenu>
          <DropdownItem value={value1} disabled options={option1} />
          <DropdownItem value={value2} disabled options={option2} />
        </DropdownMenu>
      </DemoBlock>

      <DemoBlock custom-class="white" title={Strings.getLang('asynchronousOnOff')}>
        <DropdownMenu>
          <DropdownItem
            value={value1}
            options={option1}
            useBeforeToggle
            onBeforeToggle={onBeforeChange}
          />
        </DropdownMenu>
      </DemoBlock>
    </>
  );
}
