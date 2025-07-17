import React, { useCallback, useState } from 'react';
import { DateTimePicker, Popup } from '@ray-js/smart-ui';
import { showToast, View } from '@ray-js/ray';
import { DemoBlock } from '@/components';
import Cell from 'src/cell/Cell';
import Strings from '../../i18n';

const data = {
  minHour: 10,
  maxHour: 20,
  minDate: new Date(2018, 0, 1).getTime(),
  maxDate: new Date(2019, 10, 1).getTime(),
  currentDate1: new Date(2018, 2, 31).getTime(),
  currentDate2: null,
  currentDate3: new Date(2018, 0, 1).getTime(),
  currentDate4: '12:00',
  loading: false,
  // formatter(type, value) {
  //   if (type === 'year') {
  //     return `${value}年`;
  //   }
  //   if (type === 'month') {
  //     return `${value}月`;
  //   }
  //   return value;
  // },
  // filter(type, options) {
  //   if (type === 'minute') {
  //     return options.filter(option => option % 5 === 0);
  //   }

  //   return options;
  // },
  locale: {
    year: Strings.getLang('year'),
    month: Strings.getLang('month'),
    day: Strings.getLang('day'),
    hour: Strings.getLang('time'),
    minute: Strings.getLang('point'),
    second: Strings.getLang('second'),
  },
};

export default function Demo() {
  const [currentDate5, setCurrentDate5] = useState('11:00');
  const onDateTimeInput = useCallback(event => {
    const { detail } = event;
    showToast({
      icon: 'none',
      title: new Date(detail).toLocaleString(),
    });
  }, []);
  const onDateInput = useCallback(event => {
    const { detail } = event;
    showToast({
      icon: 'none',
      title: new Date(detail).toLocaleDateString(),
    });
  }, []);
  const onYearMonthInput = useCallback(event => {
    const { detail } = event;
    const date = new Date(detail);
    showToast({
      icon: 'none',
      title: `${date.getFullYear()}/${date.getMonth() + 1}`,
    });
  }, []);
  const onTimeInput = useCallback(event => {
    const { detail } = event;

    showToast({
      icon: 'none',
      title: detail,
    });
  }, []);

  const onTimeInputSet = useCallback(event => {
    const { detail } = event;
    setCurrentDate5(detail);
    showToast({
      icon: 'none',
      title: detail,
    });
  }, []);

  const [show, setShow] = React.useState(false);

  const [disabled, setDisabled] = useState(false);
  const [time, setTime] = useState({
    hour: 10,
    minute: 0,
  });
  const onSaveTiming = useCallback(
    event => {
      if (disabled) return;
      const { detail } = event;
      const [hour, minute] = detail.split(':');
      setTime({
        hour: parseInt(hour.trim(), 10),
        minute: parseInt(minute.trim(), 10),
      });
      setShow(false);
    },
    [disabled]
  );

  const onAnimationStart = () => {
    console.log('onAnimationStart');
    setDisabled(true);
  };

  const onAnimationEnd = () => {
    console.log('onAnimationEnd');
    setDisabled(false);
  };
  const [popDomShow, setPopDomShow] = useState(false);

  return (
    <>
      <DemoBlock title={Strings.getLang('selectCompleteTime')}>
        <DateTimePicker
          showToolbar={false}
          type="datetime"
          value={data.currentDate1}
          minDate={data.minDate}
          onInput={onDateTimeInput}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('selectDateYyyyMmDd')}>
        <DateTimePicker
          type="date"
          value={data.currentDate2}
          minDate={data.minDate}
          onInput={onDateInput}
          locale={{
            year: '年',
          }}
          formatterMap={{
            month: {
              '01': 'January',
              '02': 'February',
              '03': 'March',
              '04': 'April',
              '05': 'May',
              '06': 'June',
              '07': 'July',
              '08': 'August',
              '09': 'September',
              '10': 'October',
              '11': 'November',
              '12': 'December',
            },
            day: `{{day}}${Strings.getLang('day')}`,
          }}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('selectDateYearMonth')}>
        <DateTimePicker
          type="year-month"
          value={data.currentDate3}
          minDate={data.minDate}
          locale={data.locale}
          onInput={onYearMonthInput}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('selectTime')}>
        <DateTimePicker
          type="time"
          value={data.currentDate4}
          minHour={data.minHour}
          maxHour={data.maxHour}
          onInput={onTimeInput}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('select12Time')}>
        <DateTimePicker
          type="time"
          value={currentDate5}
          is12HourClock
          columnsOrder={[2, 1, 1]}
          maxHour={24}
          minHour={1}
          fontStyles={{
            '12HourClock': {
              fontSize: '14px',
            },
          }}
          onInput={onTimeInputSet}
        />
      </DemoBlock>

      <DemoBlock title={Strings.getLang('closeValueChangeAnimation')}>
        <DateTimePicker
          type="time"
          value={currentDate5}
          changeAnimation={false}
          minHour={1}
          maxHour={24}
          onInput={onTimeInput}
        />
      </DemoBlock>
      <DemoBlock title={Strings.getLang('innerPopup')}>
        <>
          <Cell
            title={Strings.getLang('selectTime')}
            isLink
            onClick={() => {
              setShow(true);
              setPopDomShow(true);
            }}
          >
            {time.hour}:{time.minute}
          </Cell>
          <Popup
            round
            show={show}
            position="bottom"
            onAfterLeave={() => setPopDomShow(false)}
            safeAreaInsetBottom={false}
            closeOnClickOverlay={false}
          >
            <View style={{ marginBottom: '60rpx' }}>
              <DateTimePicker
                type="time"
                onAnimationStart={onAnimationStart}
                onAnimationEnd={onAnimationEnd}
                value={popDomShow ? `${time.hour}:${time.minute}` : '-1:00'}
                onConfirm={onSaveTiming}
                onCancel={() => setShow(false)}
              />
            </View>
          </Popup>
        </>
      </DemoBlock>
      <DemoBlock title={Strings.getLang('style')}>
        <DateTimePicker
          showToolbar={false}
          type="datetime"
          value={data.currentDate1}
          columnStyles={{
            year: {
              background: 'rgba(0, 0, 0, 0.4)',
            },
          }}
          fontStyles={{
            month: {
              color: 'blue',
            },
          }}
          activeStyle={{
            color: 'red',
          }}
          onInput={onDateTimeInput}
        />
      </DemoBlock>
    </>
  );
}
