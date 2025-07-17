import React from 'react';
import { Tabs, Tab, SmartEventHandler, Popup, Button } from '@ray-js/smart-ui';
import { showToast, showModal, View } from '@ray-js/ray';
import { DemoBlock } from '@/components';
import { SmartTabsBeforeEventDetail } from 'src/@types';
import styles from './index.module.less';
import Strings from '../../i18n';

export default function Demo() {
  const tabs2 = [1, 2];
  const tabs3 = [1, 2, 3];
  const tabs4 = [1, 2, 3, 4];
  const tabs6 = [1, 2, 3, 4, 5, 6];

  const tabs7 = [
    { name: 'tab_week1', content: '12' },
    { name: 'tab_week2', content: '13' },
    { name: 'tab_week3', content: '14' },
    { name: 'tab_week4', content: '15' },
    { name: 'tab_week5', content: '16' },
    { name: 'tab_week6', content: '17' },
    { name: 'tab_week0', content: '18' },
  ];

  const tabsWithName = [
    { name: 'a', index: 1 },
    { name: 'b', index: 2 },
    { name: 'c', index: 3 },
  ];

  const onChange = e => {
    showToast({
      icon: 'none',
      title: `${Strings.getLang('switchTo')} ${e.detail.title}`,
    });
  };
  const onClickDisabled = e => {
    showToast({
      icon: 'none',
      title: `${e.detail.title} ${Strings.getLang('disabled')}`,
    });
  };
  const onClick = e => {
    showToast({
      title: `${Strings.getLang('click')} ${e.detail.title}`,
      icon: 'none',
    });
  };

  const onBeforeChange: SmartEventHandler<SmartTabsBeforeEventDetail> = e => {
    const { callback, title } = e.detail;

    showModal({
      title: Strings.getLang('asynchronousSwitch'),
      content: `${Strings.getLang('areYouSureYouWantToSwitchTo')} ${title} tab？`,
      success: res => {
        if (res.confirm) {
          callback(true);
        } else if (res.cancel) {
          callback(false);
        }
      },
    });
  };

  const [show, setShow] = React.useState(false);
  const [showComp, setShowComp] = React.useState(false);

  return (
    <>
      <DemoBlock title={Strings.getLang('basicUsage')} padding>
        <Tabs active={1} onChange={onChange}>
          {tabs4.map(item => {
            return (
              <Tab title={`${Strings.getLang('label')} ${item}`} key={item}>
                <View className={styles.content}>
                  {Strings.getLang('content')} {item}
                </View>
              </Tab>
            );
          })}
        </Tabs>
      </DemoBlock>
      <DemoBlock title={Strings.getLang('byNameMatching')} padding>
        <Tabs active="b">
          {tabsWithName.map(item => {
            return (
              <Tab
                title={`${Strings.getLang('label')} ${item.index}`}
                name={item.name}
                key={item.index}
              >
                <View className={styles.content}>
                  {Strings.getLang('content')} {item.index}
                </View>
              </Tab>
            );
          })}
        </Tabs>
      </DemoBlock>
      <DemoBlock title={Strings.getLang('horizontalScrolling')} padding>
        <Tabs>
          {tabs6.map(item => {
            return (
              <Tab title={`${Strings.getLang('label')} ${item}`} key={item}>
                <View className={styles.content}>
                  {Strings.getLang('content')} {item}
                </View>
              </Tab>
            );
          })}
        </Tabs>
      </DemoBlock>
      <DemoBlock title={Strings.getLang('disableTags')} padding>
        <Tabs onDisabled={onClickDisabled}>
          {tabs3.map((item, index) => {
            return (
              <Tab title={`${Strings.getLang('label')} ${item}`} key={item} disabled={index === 1}>
                <View className={styles.content}>
                  {Strings.getLang('content')} {item}
                </View>
              </Tab>
            );
          })}
        </Tabs>
      </DemoBlock>
      <DemoBlock title={Strings.getLang('style')} padding>
        <Tabs type="card" tabClass={styles['special-tab']}>
          {tabs3.map(item => {
            return (
              <Tab title={`${Strings.getLang('label')} ${item}`} key={item}>
                <View className={styles.content}>
                  {Strings.getLang('content')} {item}
                </View>
              </Tab>
            );
          })}
        </Tabs>
      </DemoBlock>
      <DemoBlock title={Strings.getLang('clickEvent')} padding>
        <Tabs onClick={onClick}>
          {tabs2.map(item => {
            return (
              <Tab title={`${Strings.getLang('label')} ${item}`} key={item}>
                <View className={styles.content}>
                  {Strings.getLang('content')} {item}
                </View>
              </Tab>
            );
          })}
        </Tabs>
      </DemoBlock>
      <DemoBlock title={Strings.getLang('stickyLayout')} padding>
        <Tabs sticky zIndex={3}>
          {tabs4.map(item => {
            return (
              <Tab title={`${Strings.getLang('label')} ${item}`} key={item}>
                <View className={styles.content}>
                  {Strings.getLang('content')} {item}
                </View>
              </Tab>
            );
          })}
        </Tabs>
      </DemoBlock>
      <DemoBlock title={Strings.getLang('toggleAnimation')} padding>
        <Tabs animated>
          {tabs4.map(item => {
            return (
              <Tab title={`${Strings.getLang('label')} ${item}`} key={item}>
                <View className={styles.content}>
                  {Strings.getLang('content')} {item}
                </View>
              </Tab>
            );
          })}
        </Tabs>
      </DemoBlock>
      <DemoBlock title={Strings.getLang('slideToSwitch')} padding>
        <Tabs swipeable>
          {tabs4.map(item => {
            return (
              <Tab title={`${Strings.getLang('label')} ${item}`} key={item}>
                <View className={styles.content}>
                  {Strings.getLang('content')} {item}
                </View>
              </Tab>
            );
          })}
        </Tabs>
      </DemoBlock>
      <DemoBlock title={Strings.getLang('innerPopup')} padding>
        <Button onClick={() => setShow(!show)}>{Strings.getLang('switchShow')}</Button>
        <Popup
          show={show}
          position="bottom"
          onClickOverlay={() => setShow(false)}
          onBeforeEnter={() => setShowComp(true)}
          onAfterLeave={() => setShowComp(false)}
        >
          {showComp ? (
            <Tabs active={1}>
              <Tab title="标签 1">{Strings.getLang('customContent')} 1</Tab>
              <Tab title="标签 2">{Strings.getLang('customContent')} 2</Tab>
              <Tab title="标签 3">{Strings.getLang('customContent')} 3</Tab>
              <Tab title="标签 4">{Strings.getLang('customContent')} 4</Tab>
            </Tabs>
          ) : null}
        </Popup>
      </DemoBlock>
      <DemoBlock title={Strings.getLang('asynchronousSwitch')} padding>
        <Tabs
          active={1}
          swipeable
          useBeforeChange
          onChange={onChange}
          onBeforeChange={onBeforeChange}
        >
          {tabs4.map(item => {
            return (
              <Tab title={`${Strings.getLang('label')} ${item}`} key={item}>
                <View className={styles.content}>
                  {Strings.getLang('content')} {item}
                </View>
              </Tab>
            );
          })}
        </Tabs>
      </DemoBlock>
      <DemoBlock title={Strings.getLang('tabSubTitle')} padding>
        <Tabs active={1} swipeable onChange={onChange} swipeThreshold={7}>
          {tabs7.map(item => {
            return (
              <Tab
                title={`${Strings.getLang(item.name as any)}`}
                subtitle={item.content}
                key={item.name}
              />
            );
          })}
        </Tabs>
      </DemoBlock>
    </>
  );
}
