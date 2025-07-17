import React, { useState, useMemo, useCallback } from 'react';
import { TreeSelect, Image } from '@ray-js/smart-ui';
import { DemoBlock } from '@/components';
import { View, Text } from '@ray-js/ray';
import Strings from '../../i18n';

const config = {
  pro1Name: Strings.getLang('zhejiang'),
  pro1: [
    {
      text: Strings.getLang('hangzhou'),
      id: 1,
    },
    {
      text: Strings.getLang('wenzhou'),
      id: 2,
    },
    {
      text: Strings.getLang('ningbo'),
      id: 3,
      disabled: true,
    },
    {
      text: Strings.getLang('yiwu'),
      id: 4,
    },
  ],
  pro2Name: Strings.getLang('jiangsu'),
  pro2: [
    {
      text: Strings.getLang('nanjing'),
      id: 5,
    },
    {
      text: Strings.getLang('wuxi'),
      id: 6,
    },
    {
      text: Strings.getLang('xuzhou'),
      id: 7,
    },
    {
      text: Strings.getLang('suzhou'),
      id: 8,
    },
  ],
  pro3Name: Strings.getLang('fujian'),
  pro3: [
    {
      text: Strings.getLang('quanzhou'),
      id: 9,
    },
    {
      text: Strings.getLang('xiamen'),
      id: 10,
    },
  ],
};
const items = [
  {
    text: config.pro1Name,
    options: config.pro1,
  },
  {
    text: config.pro2Name,
    options: config.pro2,
  },
  {
    text: config.pro3Name,
    disabled: true,
    options: config.pro3,
  },
];

export default function Demo() {
  const badgeItems = useMemo(() => {
    return items.slice(0, 2).map((item, index) => {
      if (index === 0) {
        return { ...item, dot: true };
      }
      if (index === 1) {
        return { ...item, badge: 5 };
      }

      return item;
    });
  }, []);
  const [mainActiveIndex, setmainActiveIndex] = useState(0);
  const [activeId, setactiveId] = useState(0);
  const [mainActiveIndexMulti, setmainActiveIndexMulti] = useState(0);
  const [activeIdMulti, setactiveIdMulti] = useState([]);

  const onClickNav = useCallback(({ detail }) => {
    setmainActiveIndex(detail.index || 0);
  }, []);

  const onClickItem = useCallback(
    ({ detail }) => {
      const id = activeId === detail.id ? null : detail.id;
      setactiveId(id);
    },
    [activeId]
  );

  const onClickNavMulti = useCallback(({ detail }) => {
    setmainActiveIndexMulti(detail.index || 0);
  }, []);

  const onClickItemMulti = useCallback(
    ({ detail }) => {
      const result = [...activeIdMulti];
      const idx = result.indexOf(detail.id);
      if (idx > -1) {
        result.splice(idx, 1);
      } else {
        result.push(detail.id);
      }

      setactiveIdMulti(result);
    },
    [activeIdMulti]
  );

  return (
    <>
      <DemoBlock title={Strings.getLang('singleSelectionMode')}>
        <TreeSelect
          items={items}
          mainActiveIndex={mainActiveIndex}
          activeId={activeId}
          onClickItem={onClickItem}
          onClickNav={onClickNav}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('multipleChoiceMode')}>
        <TreeSelect
          max={2}
          items={items}
          mainActiveIndex={mainActiveIndexMulti}
          activeId={activeIdMulti}
          onClickItem={onClickItemMulti}
          onClickNav={onClickNavMulti}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('customContent')}>
        <TreeSelect
          items={[
            { text: `${Strings.getLang('grouping')} 1` },
            { text: `${Strings.getLang('grouping')} 2` },
          ]}
          height="55vw"
          mainActiveIndex={mainActiveIndex}
          activeId={activeId}
          onClickItem={onClickItem}
          onClickNav={onClickNav}
          slot={{
            content: (
              <View style={{ width: '100%', height: '100%', paddingTop: 80, textAlign: 'center' }}>
                <Text>
                  {mainActiveIndex === 0
                    ? Strings.getLang('thisIsCustomContent1')
                    : Strings.getLang('thisIsCustomContent2')}
                </Text>
              </View>
            ),
          }}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('logoTips')}>
        <TreeSelect
          items={badgeItems}
          mainActiveIndex={mainActiveIndex}
          activeId={activeId}
          onClickItem={onClickItem}
          onClickNav={onClickNav}
        />
      </DemoBlock>
    </>
  );
}
