import React, { useCallback } from 'react';
import {
  SwipeCell,
  CellGroup,
  Cell,
  Dialog,
  DialogInstance,
  Toast,
  ToastInstance,
  SmartSwipeCellPosition,
  SmartEventHandler,
} from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';
import { DemoBlock } from '@/components';
import styles from './index.module.less';
import Strings from '../../i18n';

export default function Demo() {
  const handleOpen = useCallback(event => {
    const { position, name } = event.detail;
    switch (position) {
      case 'left':
        ToastInstance({
          context: this,
          message: `${name}${position}${Strings.getLang('partialViewOpenEventTriggered')}`,
        });
        break;
      case 'right':
        ToastInstance({
          context: this,
          message: `${name}${position}${Strings.getLang('partialViewOpenEventTriggered')}`,
        });
        break;
      default:
    }
  }, []);
  const handleClose = useCallback(event => {
    const { position, instance } = event.detail;
    switch (position) {
      case 'left':
      case 'cell':
        instance.close();
        break;
      case 'right':
        DialogInstance.confirm({
          context: this,
          message: Strings.getLang('areYouSureYouWantToDelete'),
        })
          .then(() => {
            instance.close();
          })
          .catch(() => {
            console.log('cancel');
          });
        break;
      default:
    }
  }, []);

  const onHandleTabClose: SmartEventHandler<SmartSwipeCellPosition> = event => {
    console.log(event.detail, '--position');
  };

  const handleClick = useCallback(() => {
    // showToast({
    //   icon: 'none',
    //   title: '点我',
    // });
  }, []);

  return (
    <>
      <DemoBlock title={Strings.getLang('basicUsage')}>
        <SwipeCell
          rightWidth={65}
          leftWidth={65}
          slot={{
            left: <View className={styles.left}>{Strings.getLang('choose')}</View>,
            right: <View className={styles.right}>{Strings.getLang('delete')}</View>,
          }}
          onOpen={handleOpen}
          onClick={handleClick}
          onTabClose={onHandleTabClose}
        >
          <CellGroup>
            <Cell title={Strings.getLang('cell')} value={Strings.getLang('content')} />
          </CellGroup>
        </SwipeCell>
      </DemoBlock>
      <DemoBlock title={Strings.getLang('asynchronousClose')}>
        <SwipeCell
          id="swipe-cell"
          rightWidth={65}
          left-width={65}
          slot={{
            left: <View className={styles.left}>{Strings.getLang('choice')}</View>,
            right: <View className={styles.right}>{Strings.getLang('delete')}</View>,
          }}
          asyncClose
          onClose={handleClose}
        >
          <CellGroup>
            <Cell title={Strings.getLang('cell')} value={Strings.getLang('content')} />
          </CellGroup>
        </SwipeCell>
      </DemoBlock>
      <DemoBlock title={Strings.getLang('promptOpened')}>
        <SwipeCell
          id="swipe-cell"
          rightWidth={65}
          leftWidth={65}
          slot={{
            left: <View className={styles.left}>{Strings.getLang('choose')}</View>,
            right: <View className={styles.right}>{Strings.getLang('delete')}</View>,
          }}
          onOpen={handleOpen}
        >
          <CellGroup>
            <Cell title={Strings.getLang('cell')} value={Strings.getLang('content')} />
          </CellGroup>
        </SwipeCell>
      </DemoBlock>
      <Dialog id="smart-dialog" />
      <Toast id="smart-toast" />
    </>
  );
}
