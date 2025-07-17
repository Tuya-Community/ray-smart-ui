import React from 'react';
import { NavBar, Icon } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';
import RightIcon from '@tuya-miniapp/icons/dist/svg/Right';
import { DemoBlock } from '@/components';
import styles from './index.module.less';
import Strings from '../../i18n';

export default function Demo() {
  const onClickLeft = React.useCallback(event => {
    console.log(Strings.getLang('clickTheBackButton'));
  }, []);

  const onClickRight = React.useCallback(event => {
    ty.showToast({ title: Strings.getLang('clickedTheButton') });
  }, []);

  return (
    <>
      <DemoBlock title={Strings.getLang('basicUsage')}>
        <NavBar
          customStyle={{ background: 'red' }}
          title={Strings.getLang('title')}
          leftText={Strings.getLang('return')}
          leftArrow
          onClickLeft={onClickLeft}
          onClickRight={onClickRight}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('useSlot')}>
        <NavBar
          title={Strings.getLang('title')}
          leftText={Strings.getLang('return')}
          leftArrow
          slot={{
            right: (
              <View>
                <Icon name={RightIcon} size="16px" customClass={styles.icon} />
              </View>
            ),
          }}
        />
      </DemoBlock>
    </>
  );
}
