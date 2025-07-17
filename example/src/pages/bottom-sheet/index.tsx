import React from 'react';
import { ScrollView, View } from '@ray-js/ray';
import { BottomSheet, Button } from '@ray-js/smart-ui';
import { DemoBlock } from '@/components';
import Strings from '../../i18n';
import './index.less';

export default function Demo() {
  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);
  const [show3, setShow3] = React.useState(false);
  const [show4, setShow4] = React.useState(false);

  const toggleBottomSheet1 = React.useCallback(() => setShow1(!show1), [show1]);
  const toggleBottomSheet2 = React.useCallback(() => setShow2(!show2), [show2]);
  const toggleBottomSheet3 = React.useCallback(() => setShow3(!show3), [show3]);
  const toggleBottomSheet4 = React.useCallback(() => setShow4(!show4), [show4]);

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
        <BottomSheet show={show4} title="Title" onClose={toggleBottomSheet4}>
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
    </>
  );
}
