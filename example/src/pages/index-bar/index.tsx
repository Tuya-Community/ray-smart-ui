import React, { useState, useEffect } from 'react';
import { View, event, usePageEvent } from '@ray-js/ray';
import { Cell, IndexBar, IndexAnchor, Tabs, Tab, Text } from '@ray-js/smart-ui';
import { DemoBlock } from '@/components';
import styles from './index.module.less';
import Strings from '../../i18n';

const indexList: string[] = [];
const charCodeOfA = 'A'.charCodeAt(0);
for (let i = 0; i < 26; i++) {
  indexList.push(String.fromCharCode(charCodeOfA + i));
}

export default function Demo() {
  const [activeTab, setActiveTab] = useState(0);

  const customIndexList = [1, 2, 3, 4, 5, 6, 8, 9, 10];

  const onChange = event => {
    setActiveTab(event.detail.name);
  };

  return (
    <>
      <Tabs active={activeTab} onChange={onChange}>
        <Tab title={Strings.getLang('basicUsage')}>
          {activeTab === 0 && (
            <IndexBar>
              {indexList.map((item, index) => (
                <View key={`${index + 1}`}>
                  <IndexAnchor index={item} />
                  <Cell title={Strings.getLang('text')} />
                  <Cell title={Strings.getLang('text')} />
                  <Cell title={Strings.getLang('text')} />
                </View>
              ))}
            </IndexBar>
          )}
        </Tab>
        <Tab title={Strings.getLang('customIndexList')}>
          {activeTab === 1 && (
            <IndexBar indexList={customIndexList}>
              {customIndexList.map((item, index) => (
                <View key={`${index + 1}`}>
                  <IndexAnchor index={item} useSlot>
                    {Strings.getLang('title')} {item}
                  </IndexAnchor>
                  <Cell title={Strings.getLang('text')} />
                  <Cell title={Strings.getLang('text')} />
                  <Cell title={Strings.getLang('text')} />
                </View>
              ))}
            </IndexBar>
          )}
        </Tab>
      </Tabs>
    </>
  );
}
