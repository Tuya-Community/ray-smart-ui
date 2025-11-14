import React from 'react';
import { ScrollView, View, Text, getSystemInfoSync } from '@ray-js/ray';
import { BottomSheet, Button } from '@ray-js/smart-ui';
import { DemoBlock } from '@/components';
import Strings from '../../i18n';
import './index.less';

export default function Demo() {
  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);
  const [show3, setShow3] = React.useState(false);
  const [show4, setShow4] = React.useState(false);
  const [show5, setShow5] = React.useState(false);
  const [show6, setShow6] = React.useState(false);
  const [show7, setShow7] = React.useState(false);
  const [show8, setShow8] = React.useState(false);
  const [show9, setShow9] = React.useState(false);
  const [dragPosition, setDragPosition] = React.useState<'max' | 'mid' | 'min' | ''>('');
  const [closeDragHeight, setCloseDragHeight] = React.useState(0);

  React.useEffect(() => {
    const systemInfo = getSystemInfoSync();
    setCloseDragHeight(systemInfo.windowHeight * 0.4);
  }, []);

  const toggleBottomSheet1 = React.useCallback(() => setShow1(!show1), [show1]);
  const toggleBottomSheet2 = React.useCallback(() => setShow2(!show2), [show2]);
  const toggleBottomSheet3 = React.useCallback(() => setShow3(!show3), [show3]);
  const toggleBottomSheet4 = React.useCallback(() => setShow4(!show4), [show4]);
  const toggleBottomSheet5 = React.useCallback(() => setShow5(!show5), [show5]);
  const toggleBottomSheet6 = React.useCallback(() => setShow6(!show6), [show6]);
  const toggleBottomSheet7 = React.useCallback(() => setShow7(!show7), [show7]);
  const toggleBottomSheet8 = React.useCallback(() => setShow8(!show8), [show8]);
  const toggleBottomSheet9 = React.useCallback(() => setShow9(!show9), [show9]);

  const onDragPosition = React.useCallback((e: any) => {
    const position = e.detail; // 'max' | 'mid' | 'min'
    setDragPosition(position);
  }, []);

  const getDragPositionText = () => {
    const positionMap = {
      max: Strings.getLang('dragPositionMax'),
      mid: Strings.getLang('dragPositionMid'),
      min: Strings.getLang('dragPositionMin'),
    };
    return positionMap[dragPosition as keyof typeof positionMap] || dragPosition;
  };

  return (
    <>
      <DemoBlock title={Strings.getLang('basicUsage')} padding>
        <Button type="primary" onClick={toggleBottomSheet1}>
          {Strings.getLang('modalMenu')}
        </Button>
        <BottomSheet title="Title" show={show1} onClose={toggleBottomSheet1} />
      </DemoBlock>
      <DemoBlock title={Strings.getLang('custom')} padding>
        <Button type="primary" onClick={toggleBottomSheet2}>
          {Strings.getLang('modalMenu')}
        </Button>
        <BottomSheet show={show2} title="Title" onClose={toggleBottomSheet2}>
          <View className="content" />
          <View className="footer">
            <Button type="info" block>
              {Strings.getLang('completed')}
            </Button>
          </View>
        </BottomSheet>
      </DemoBlock>
      <DemoBlock title={Strings.getLang('maxHeightLimit')} padding>
        <Button type="primary" onClick={toggleBottomSheet3}>
          {Strings.getLang('modalMenu')}
        </Button>
        <BottomSheet show={show3} title="Title" onClose={toggleBottomSheet3}>
          <View style={{ backgroundColor: 'red', height: '100px' }} />
          <View style={{ backgroundColor: 'blue', height: '100px' }} />
          <View style={{ backgroundColor: 'black', height: '100px' }} />
          <View style={{ backgroundColor: 'yellow', height: '100px' }} />
          <View style={{ backgroundColor: 'pink', height: '100px' }} />
        </BottomSheet>
      </DemoBlock>
      <DemoBlock title={Strings.getLang('fixedHeight')} padding>
        <Button type="primary" onClick={toggleBottomSheet4}>
          {Strings.getLang('modalMenu')}
        </Button>
        <BottomSheet show={show4} title="Title" contentHeight="500px" onClose={toggleBottomSheet4}>
          <ScrollView scroll-y style={{ height: '300px' }}>
            <View style={{ backgroundColor: 'red', height: '100px' }} />
            <View style={{ backgroundColor: 'blue', height: '100px' }} />
            <View style={{ backgroundColor: 'black', height: '100px' }} />
            <View style={{ backgroundColor: 'yellow', height: '100px' }} />
            <View style={{ backgroundColor: 'pink', height: '100px' }} />
          </ScrollView>
          <View style={{ backgroundColor: 'white', height: '100px' }} />
          <View style={{ backgroundColor: 'orange', height: '100px' }} />
        </BottomSheet>
      </DemoBlock>
      <DemoBlock title={Strings.getLang('useTitleSlot')} padding>
        <Button type="primary" onClick={toggleBottomSheet5}>
          {Strings.getLang('modalMenu')}
        </Button>
        <BottomSheet
          show={show5}
          slot={{
            title: <View>Slot Title</View>,
          }}
          onClose={toggleBottomSheet5}
        >
          <View style={{ backgroundColor: 'orange', height: '100px' }} />
        </BottomSheet>
      </DemoBlock>
      <DemoBlock title={Strings.getLang('draggable')} padding>
        <Button type="primary" onClick={toggleBottomSheet6}>
          {Strings.getLang('modalMenu')}
        </Button>
        <BottomSheet
          show={show6}
          draggable
          closeDragHeight={closeDragHeight}
          midDragHeight={300}
          onClose={toggleBottomSheet6}
        >
          <View style={{ backgroundColor: 'red', height: '300px' }} />
        </BottomSheet>
      </DemoBlock>
      <DemoBlock title={Strings.getLang('setTheRangeOfDragging')} padding>
        <Button type="primary" onClick={toggleBottomSheet7}>
          {Strings.getLang('modalMenu')}
        </Button>
        <BottomSheet
          show={show7}
          draggable
          midDragHeight={300}
          minDragHeight={300}
          maxDragHeight={300}
          closeDragHeight={300}
          onClose={toggleBottomSheet7}
        >
          <View style={{ backgroundColor: 'red', height: '300px' }} />
        </BottomSheet>
      </DemoBlock>
      <DemoBlock title={Strings.getLang('draggableWithTitle')} padding>
        <Button type="primary" onClick={toggleBottomSheet8}>
          {Strings.getLang('modalMenu')}
        </Button>
        <BottomSheet
          title={Strings.getLang('draggableWithTitle')}
          show={show8}
          draggable
          midDragHeight={300}
          minDragHeight={300}
          maxDragHeight={300}
          closeDragHeight={300}
          onClose={toggleBottomSheet8}
        >
          <View style={{ backgroundColor: 'red', height: '300px' }} />
        </BottomSheet>
      </DemoBlock>
      <DemoBlock title={Strings.getLang('listenDragPosition')} padding>
        <Button type="primary" onClick={toggleBottomSheet9}>
          {Strings.getLang('modalMenu')}
        </Button>
        <BottomSheet
          show={show9}
          draggable
          midDragHeight={300}
          minDragHeight={100}
          maxDragHeight={600}
          onDragPosition={onDragPosition}
          onClose={toggleBottomSheet9}
        >
          {dragPosition && (
            <View
              style={{
                marginTop: '16px',
                padding: '12px',
                backgroundColor: '#f0f0f0',
                borderRadius: '4px',
              }}
            >
              <Text>
                {Strings.getLang('currentPanelPosition')}: {getDragPositionText()}
              </Text>
            </View>
          )}
        </BottomSheet>
      </DemoBlock>
    </>
  );
}
