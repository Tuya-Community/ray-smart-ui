import React from 'react';
import { Image, Loading } from '@ray-js/smart-ui';
import { Text, View } from '@ray-js/ray';
import { DemoBlock } from '@/components';
import Strings from '../../i18n';

export default function Demo() {
  const imgSrc =
    'https://images.tuyacn.com/rms-static/f350c8a0-0eb2-11ef-8f06-49ae7b2fadcf-1715334722090.jpeg?tyName=cat.jpeg';
  return (
    <View>
      <DemoBlock padding title={Strings.getLang('basicUsage')}>
        <Image width="100px" height="100px" src={imgSrc} />
      </DemoBlock>
      <DemoBlock padding title={Strings.getLang('fillMode')}>
        <Image width="100px" height="100px" fit="contain" src={imgSrc} />
        <Image width="100px" height="100px" fit="cover" src={imgSrc} />
        <Image width="100px" height="100px" fit="fill" src={imgSrc} />
        <Image width="100px" height="100px" fit="none" src={imgSrc} />
      </DemoBlock>
      <DemoBlock padding title={Strings.getLang('circularImage')}>
        <Image round width="100px" height="100px" fit="contain" src={imgSrc} />
        <Image round width="100px" height="100px" fit="cover" src={imgSrc} />
        <Image round width="100px" height="100px" fit="fill" src={imgSrc} />
        <Image round width="100px" height="100px" fit="none" src={imgSrc} />
      </DemoBlock>
      <DemoBlock padding title={Strings.getLang('loadingPrompt')}>
        <Image width="100px" height="100px" useLoadingSlot>
          <Loading slot="loading" type="spinner" size="20" vertical />
        </Image>
      </DemoBlock>
      <DemoBlock padding title={Strings.getLang('loadingFailedMessage')}>
        <Image width="100px" height="100px" useErrorSlot>
          <Text type="error">{Strings.getLang('loadFailed')}</Text>
        </Image>
      </DemoBlock>
    </View>
  );
}
