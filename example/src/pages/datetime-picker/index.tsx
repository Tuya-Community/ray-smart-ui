import React, { useCallback } from 'react';
import { DateTimePicker } from '@ray-js/smart-ui';
import { showToast } from '@ray-js/ray';
import { DemoBlock } from '@/components';
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
          locale={data.locale}
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
    </>
  );
}
