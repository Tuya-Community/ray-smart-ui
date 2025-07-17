import React from 'react';
import { View, Text } from '@ray-js/ray';
import { useDebounce } from 'ahooks';
import { ActionSheet, Button, DateTimePicker, Slider } from '@ray-js/smart-ui';
import { DemoBlock } from '@/components';
import styles from './index.module.less';
import Strings from '../../i18n';

const action1 = [
  { name: Strings.getLang('options') },
  { name: Strings.getLang('options') },
  { name: Strings.getLang('options'), subname: Strings.getLang('describe') },
];

const action2 = [
  { name: Strings.getLang('colorops'), color: '#ee0a24' },
  { loading: true },
  { name: Strings.getLang('disableOps'), disabled: true },
];

const minDate = new Date(2018, 0, 1).getTime();

export default function Demo() {
  const [currentDate, setCurrentDate] = React.useState(new Date(2018, 0, 1));
  const [currentDateStr, setCurrentDateStr] = React.useState(
    new Date(2018, 0, 1).toLocaleDateString()
  );
  const [actonSelect, setActionSelect] = React.useState([
    { id: 0, name: 'Action', checked: true },
    { id: 1, name: 'Action', checked: false },
    { id: 2, name: 'Action', checked: false },
    { id: 3, name: 'Action', checked: false },
    { id: 4, name: 'Action', checked: false },
    { id: 5, name: 'Action', checked: false },
    { id: 6, name: 'Action', checked: false },
    { id: 7, name: 'Action', checked: false },
  ]);
  const [showSelect, setShowSelect] = React.useState(false);
  const [showNumber, setShowNumber] = React.useState(false);
  const [showPicker, setShowPicker] = React.useState(false);
  const [currentNumber, setCurrentNumber] = React.useState(100);
  const currentNumberForSlider = useDebounce(currentNumber, { wait: 500 });
  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);
  const [show3, setShow3] = React.useState(false);
  const [show4, setShow4] = React.useState(false);
  const [show5, setShow5] = React.useState(false);
  const [ready, setReady] = React.useState(false);
  const onActionSheetReady = React.useCallback(() => setReady(true), []);
  const onSelect = React.useCallback(
    evt => {
      const { id } = evt.detail;
      const newActionSelect = actonSelect.map(item => {
        if (item.id === id) return { ...item, checked: true };
        return { ...item, checked: false };
      });
      setActionSelect(newActionSelect);
    },
    [actonSelect]
  );
  const toggleActionSheetSelect = React.useCallback(() => setShowSelect(!showSelect), [showSelect]);
  const toggleActionSheetNumber = React.useCallback(() => setShowNumber(!showNumber), [showNumber]);
  const toggleActionSheetPicker = React.useCallback(() => setShowPicker(!showPicker), [showPicker]);
  const toggleActionSheet1 = React.useCallback(() => setShow1(!show1), [show1]);
  const toggleActionSheet2 = React.useCallback(() => setShow2(!show2), [show2]);
  const toggleActionSheet3 = React.useCallback(() => setShow3(!show3), [show3]);
  const toggleActionSheet4 = React.useCallback(() => setShow4(!show4), [show4]);
  const toggleActionSheet5 = React.useCallback(() => setShow5(!show5), [show5]);
  const onChange = React.useCallback(value => {
    setCurrentNumber(value);
  }, []);
  const onInput = React.useCallback(event => {
    const { detail } = event;
    const date = new Date(detail);
    setCurrentDate(date);
  }, []);
  const onPickerConfirm = React.useCallback(() => {
    setShowPicker(false);
    setCurrentDateStr(currentDate?.toLocaleDateString());
  }, [currentDate]);

  return (
    <>
      <DemoBlock title={Strings.getLang('basicUsage')} padding>
        <Button type="primary" onClick={toggleActionSheetSelect}>
          {Strings.getLang('modalMenu')}
        </Button>
        <ActionSheet
          title="Title"
          cancelText={Strings.getLang('cancel')}
          show={showSelect}
          actions={actonSelect}
          onSelect={onSelect}
          onClose={toggleActionSheetSelect}
          onCancel={toggleActionSheetSelect}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('noSelectList')} padding>
        <Button type="primary" onClick={toggleActionSheet1}>
          {Strings.getLang('modalMenu')}
        </Button>
        <ActionSheet
          title="Title"
          cancelText={Strings.getLang('cancel')}
          show={show1}
          actions={action1}
          onClose={toggleActionSheet1}
          onCancel={toggleActionSheet1}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('optionStatus')} padding>
        <Button type="primary" onClick={toggleActionSheet2}>
          {Strings.getLang('modalMenu')}
        </Button>
        <ActionSheet show={show2} actions={action2} onClose={toggleActionSheet2} />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('showConfirmButton')} padding>
        <Button type="primary" onClick={toggleActionSheet3}>
          {Strings.getLang('modalMenu')}
        </Button>
        <ActionSheet
          show={show3}
          actions={action1}
          cancelText={Strings.getLang('cancel')}
          confirmText={Strings.getLang('confirm')}
          onClose={toggleActionSheet3}
          onCancel={toggleActionSheet3}
          onConfirm={toggleActionSheet3}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('showDescInfo')} padding>
        <Button type="primary" onClick={toggleActionSheet4}>
          {Strings.getLang('modalMenu')}
        </Button>
        <ActionSheet
          show={show4}
          actions={action1}
          description={Strings.getLang('isADesc')}
          onClose={toggleActionSheet4}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('custom')} padding>
        <Button type="primary" onClick={toggleActionSheet5}>
          {Strings.getLang('modalMenu')}
        </Button>
        <ActionSheet
          show={show5}
          title="Title"
          cancelText="Action"
          confirmText="Action"
          onClose={toggleActionSheet5}
          onCancel={toggleActionSheet5}
          onConfirm={toggleActionSheet5}
        >
          <View className={styles.content}>{Strings.getLang('custom')}</View>
        </ActionSheet>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('customValue')} padding>
        <Button type="primary" onClick={toggleActionSheetNumber}>
          {Strings.getLang('modalMenu')}
        </Button>
        <ActionSheet
          show={showNumber}
          title="Title"
          cancelText="Action"
          confirmText="Action"
          onClose={toggleActionSheetNumber}
          onCancel={toggleActionSheetNumber}
          onConfirm={toggleActionSheetNumber}
          onAfterEnter={onActionSheetReady}
        >
          <View className={styles['content-number']}>
            <View className={styles['demo-header']}>
              <Text className={styles['demo-text']}>{`${currentNumber}%`}</Text>
            </View>
            <View className={styles['demo-slider']}>
              {ready && (
                <Slider
                  minTrackRadius="8px"
                  minTrackHeight="45px"
                  maxTrackRadius="8px"
                  maxTrackHeight="45px"
                  value={currentNumberForSlider}
                  onChange={onChange}
                  thumbWidth={15}
                  thumbHeight={50}
                  thumbRadius={2}
                  thumbStyle={{
                    background: '#BBC5D4',
                    border: '2px solid #FFFFFF',
                    boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.5)',
                  }}
                />
              )}
            </View>
          </View>
        </ActionSheet>
      </DemoBlock>

      <DemoBlock title={`${Strings.getLang('customScroll')} Picker: ${currentDateStr}`} padding>
        <Button type="primary" onClick={toggleActionSheetPicker}>
          {Strings.getLang('modalMenu')}
        </Button>
        <ActionSheet
          show={showPicker}
          title="Title"
          cancelText="Action"
          confirmText="Action"
          onClose={toggleActionSheetPicker}
          onCancel={toggleActionSheetPicker}
          onConfirm={onPickerConfirm}
        >
          <DateTimePicker
            showToolbar={false}
            type="date"
            minDate={minDate}
            value={currentDate}
            onInput={onInput}
          />
        </ActionSheet>
      </DemoBlock>
    </>
  );
}
