import { Circle } from '@ray-js/smart-ui';
import { DemoBlock } from '@/components';
import { View } from '@ray-js/ray';
import Strings from '../../i18n';

export default function Demo() {
  return (
    <>
      <DemoBlock padding title={Strings.getLang('basicUsage')}>
        <Circle percent={50} />
      </DemoBlock>
      <DemoBlock padding title={Strings.getLang('roundedGap')}>
        <View
          style={{
            display: 'flex',
          }}
        >
          <Circle percent={50} mode="angle" />
          <Circle percent={50} mode="angle2" />
        </View>
      </DemoBlock>
      <DemoBlock padding title={Strings.getLang('doNotUseRoundedCorners')}>
        <Circle percent={50} mode="angle" round={false} />
      </DemoBlock>
      <DemoBlock padding title={Strings.getLang('customColor')}>
        <View
          style={{
            display: 'flex',
          }}
        >
          <Circle percent={50} mode="angle" round={false} fillColor="#DE23CB" />
          <Circle
            percent={50}
            mode="angle2"
            round={false}
            fillColorStops={{
              '0%': '#2361DE',
              '50%': '#23DEB5',
            }}
          />
        </View>
      </DemoBlock>
      <DemoBlock padding title={Strings.getLang('customWidth')}>
        <Circle percent={60} mode="angle" trackWidth={15} round={false} />
      </DemoBlock>
    </>
  );
}
