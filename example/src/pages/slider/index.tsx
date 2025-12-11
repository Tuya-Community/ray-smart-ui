import React from 'react';
import { Slider } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';
import { DemoBlock } from '@/components';
import Strings from '../../i18n';

export default function Demo() {
  const [value, setValue] = React.useState(30);
  const [value2, setValue2] = React.useState(30);
  const [value3, setValue3] = React.useState(30);
  const [value4, setValue4] = React.useState(30);
  const [value5, setValue5] = React.useState(30);
  const [value6, setValue6] = React.useState(30);
  const [value1, onChange1] = React.useState([20, 60]);
  return (
    <View>
      <DemoBlock padding title={Strings.getLang('standardSlider')}>
        <Slider
          maxTrackHeight="4px"
          minTrackHeight="4px"
          thumbHeight="28px"
          thumbWidth="28px"
          value={value}
          onAfterChange={value => setValue(value)}
        />
      </DemoBlock>
      <DemoBlock padding title={Strings.getLang('intervalSlider')}>
        <Slider
          value={value2}
          onAfterChange={value => setValue2(value)}
          maxTrackHeight={8}
          minTrackHeight={8}
          tickHeight="4px"
          tickWidth="4px"
          thumbHeight="18px"
          thumbWidth="18px"
          minTrackTickColor="#fff"
          maxTrackTickColor="#fff"
          isShowTicks
          step={10}
          min={0}
          max={100}
        />
      </DemoBlock>
      <DemoBlock padding title={Strings.getLang('intervalSlide2')}>
        <Slider
          isShowTicks
          step={30}
          min={0}
          max={90}
          maxTrackHeight="40px"
          maxTrackRadius="16px"
          minTrackWidth="40px"
          minTrackHeight="40px"
          minTrackRadius="16px"
          tickWidth="4px"
          tickHeight="12px"
          tickRadius="4px"
          hideThumbButton
          value={value3}
          onAfterChange={value => setValue3(value)}
        />
      </DemoBlock>
      <DemoBlock padding title={Strings.getLang('dragTheSlider')}>
        <Slider
          minTrackRadius="13px"
          minTrackHeight="22px"
          maxTrackRadius="13px"
          maxTrackHeight="26px"
          value={value4}
          thumbWidth={18}
          thumbHeight={18}
          parcel
          parcelMargin={2}
          onAfterChange={value => setValue4(value)}
        />
      </DemoBlock>
      <DemoBlock padding title={Strings.getLang('dragTheSlider2')}>
        <Slider
          minTrackRadius="8px"
          minTrackHeight="45px"
          maxTrackRadius="8px"
          maxTrackHeight="45px"
          value={value5}
          onAfterChange={value => setValue5(value)}
          thumbWidth={15}
          thumbHeight={50}
          thumbRadius={2}
          thumbStyle={{
            background: '#BBC5D4',
            border: '2px solid #FFFFFF',
            boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.5)',
          }}
        />
      </DemoBlock>
      <DemoBlock padding title={Strings.getLang('dragTheSlider')}>
        <Slider
          parcel
          parcelMargin={2}
          minTrackRadius="5px"
          minTrackHeight="22px"
          maxTrackRadius="5px"
          maxTrackHeight="26px"
          value={value6}
          thumbWidth={3}
          thumbHeight={16}
          onAfterChange={value => setValue6(value)}
        />
      </DemoBlock>
      <DemoBlock padding title={Strings.getLang('doubleSlider')}>
        <Slider.RangeSlider
          min={0}
          max={100}
          barHeight="4px"
          value={value1}
          inActiveColor="#D8D9DC"
          activeColor="#007AFF"
        />
      </DemoBlock>
      <DemoBlock padding title={Strings.getLang('vertical')}>
        <Slider
          isVertical
          step={1}
          min={0}
          max={100}
          parcel
          parcelMargin={2}
          useParcelPadding={false}
          thumbWidth={12}
          thumbHeight={2}
          thumbRadius={2}
          maxTrackWidth="48px"
          maxTrackHeight="203px"
          maxTrackRadius="8px"
          minTrackWidth="48px"
          minTrackHeight="114px"
          maxTrackColor="var(--app-B4-N7,rgba(0,0,0,.1))"
          minTrackColor="#1989FA"
          onAfterChange={setValue}
          thumbStyle={{
            borderRadius: '2px',
            width: '12px',
            height: '2px',
          }}
        />
      </DemoBlock>
    </View>
  );
}
