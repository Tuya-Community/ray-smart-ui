import React, { useState } from 'react';

import { DemoBlock } from '@/components';
import { Text, View } from '@ray-js/ray';
import { Button, Icon, Popover } from '@ray-js/smart-ui';
import Sun from '@tuya-miniapp/icons/dist/svg/Sun';
import styles from './index.module.less';

import Strings from '../../i18n';

export default function Demo() {
  const [show, setShow] = useState(false);
  return (
    <>
      <DemoBlock title={Strings.getLang('basicUsage')}>
        <View
          style={{
            padding: '10vh',
            paddingTop: 0,
            paddingLeft: 8,
          }}
        >
          <Popover
            show={show}
            onClose={() => setShow(false)}
            placement="bottomLeft"
            customStyle={{
              padding: '0px',
              width: '200px',
            }}
            slot={{
              overlay: (
                <View>
                  {[1, 2, 3].map(n => (
                    <View className={styles.listItem} key={n}>
                      <Icon name={Sun} size="24px" color="#3678E3" />
                      <Text className={styles.listText}>Title</Text>
                    </View>
                  ))}
                </View>
              ),
            }}
          >
            <Button>{Strings.getLang('popupOnTheLowerLeft')}</Button>
          </Popover>
        </View>
        <View
          style={{
            padding: '10vh',
            paddingTop: 0,
            paddingLeft: '20vw',
          }}
        >
          <Popover
            placement="bottom"
            customStyle={{
              padding: '0px',
              width: '200px',
            }}
            slot={{
              overlay: (
                <View>
                  {[1, 2, 3].map(n => (
                    <View className={styles.listItem} key={n}>
                      <Icon name={Sun} size="24px" color="#3678E3" />
                      <Text className={styles.listText}>Title</Text>
                    </View>
                  ))}
                </View>
              ),
            }}
          >
            <Button>{Strings.getLang('popUpInTheMiddle')}</Button>
          </Popover>
        </View>
        <View
          style={{
            padding: '10vh',
            paddingTop: 0,
            paddingLeft: '60vw',
          }}
        >
          <Popover
            placement="bottomRight"
            customStyle={{
              padding: '0px',
              width: '200px',
            }}
            slot={{
              overlay: (
                <View>
                  {[1, 2, 3].map(n => (
                    <View className={styles.listItem} key={n}>
                      <Icon name={Sun} size="24px" color="#3678E3" />
                      <Text className={styles.listText}>Title</Text>
                    </View>
                  ))}
                </View>
              ),
            }}
          >
            <Button>{Strings.getLang('popUpAtTheBottomRight')}</Button>
          </Popover>
        </View>
        <View
          style={{
            paddingLeft: 8,
            paddingTop: '10vh',
          }}
        >
          <Popover
            placement="top"
            slot={{
              overlay: <View>tip</View>,
            }}
          >
            <Button>{Strings.getLang('popOutFromTheTop')}</Button>
          </Popover>
        </View>
        <View
          style={{
            paddingLeft: '20vw',
            paddingTop: '10vh',
          }}
        >
          <Popover
            placement="left"
            slot={{
              overlay: <View>tip</View>,
            }}
          >
            <Button>{Strings.getLang('popOutFromTheLeft')}</Button>
          </Popover>
        </View>
        <View
          style={{
            paddingLeft: '8px',
            paddingTop: '10vh',
          }}
        >
          <Popover
            placement="right"
            slot={{
              overlay: <View>tip</View>,
            }}
          >
            <Button>{Strings.getLang('popUpOnTheRightSide')}</Button>
          </Popover>
        </View>
        <View
          style={{
            paddingLeft: '8px',
            paddingTop: '10vh',
          }}
        >
          <Popover
            placement="bottom"
            slot={{
              overlay: <View>tip</View>,
            }}
          >
            <Button>{Strings.getLang('popUpInTheMiddle')}</Button>
          </Popover>
        </View>
      </DemoBlock>
    </>
  );
}
