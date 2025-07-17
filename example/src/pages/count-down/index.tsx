import React, { useCallback, useState } from 'react';
import { CountDown, Grid, GridItem } from '@ray-js/smart-ui';
import { Text, View, showToast } from '@ray-js/ray';
import PlayIcon from '@tuya-miniapp/icons/dist/svg/Play';
import PauseIcon from '@tuya-miniapp/icons/dist/svg/Pause';
import RepeatIcon from '@tuya-miniapp/icons/dist/svg/Repeat';
import { DemoBlock } from '@/components';
import styles from './index.module.less';
import Strings from '../../i18n';

const data = {
  time: 30 * 60 * 60 * 1000,
};

export default function Demo() {
  const [timeData, setTimeData] = useState<any>({});

  const handleChange = useCallback(e => {
    setTimeData(e.detail);
  }, []);
  const start = useCallback(() => {
    const pages = getCurrentPages();
    const pageInstall = pages[pages.length - 1];
    const countdown = pageInstall.selectComponent('.control-count-down');
    countdown.start();
  }, []);

  const pause = useCallback(() => {
    const pages = getCurrentPages();
    const pageInstall = pages[pages.length - 1];
    const countdown = pageInstall.selectComponent('.control-count-down');
    countdown.pause();
  }, []);

  const reset = useCallback(() => {
    const pages = getCurrentPages();
    const pageInstall = pages[pages.length - 1];
    const countdown = pageInstall.selectComponent('.control-count-down');
    countdown.reset();
  }, []);

  const finished = useCallback(() => {
    showToast({
      title: Strings.getLang('countdownEnds'),
    });
  }, []);

  return (
    <>
      <DemoBlock title={Strings.getLang('basicUsage')}>
        <CountDown time={data.time} />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('customFormat')}>
        <CountDown
          time={data.time}
          format={`DD ${Strings.getLang('day')} HH ${Strings.getLang('time')} mm ${Strings.getLang(
            'point'
          )} ss ${Strings.getLang('second')}`}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('millisecondLevelRendering')}>
        <CountDown millisecond time={data.time} format="HH:mm:ss:SSS" />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('customStyle')}>
        <CountDown useSlot time={data.time} onChange={handleChange}>
          <View>
            <Text className={styles.item}>{timeData.hours}</Text>
            <Text className={styles.item}>{timeData.minutes}</Text>
            <Text className={styles.item}>{timeData.seconds}</Text>
          </View>
        </CountDown>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('manualControl')}>
        <CountDown
          className="control-count-down"
          millisecond
          time={3000}
          autoStart={false}
          format="ss:SSS"
          onFinish={finished}
        />
        <Grid clickable column-num="3">
          <GridItem text={Strings.getLang('start')} icon={PlayIcon} onClick={start} />
          <GridItem text={Strings.getLang('pause')} icon={PauseIcon} onClick={pause} />
          <GridItem text={Strings.getLang('reset')} icon={RepeatIcon} onClick={reset} />
        </Grid>
      </DemoBlock>
    </>
  );
}
