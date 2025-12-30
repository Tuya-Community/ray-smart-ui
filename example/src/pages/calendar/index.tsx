import React, { useState } from 'react';

import { DemoBlock } from '@/components';
import { Calendar, Cell } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';
import styles from './index.module.less';

import Strings from '../../i18n';

export default function Demo() {
  const [curDayDate, setCurDayDate] = useState<any>(new Date(2024, 0, 15).getTime());
  const minDayDate = new Date(2024, 0, 4).getTime();
  const maxDayDate = new Date(2026, 1, 20).getTime();

  const [curWeekDayDate, setCurWeekDayDate] = useState([
    new Date(2024, 0, 15).getTime(),
    new Date(2024, 0, 21).getTime(),
  ]);
  const minWeekDayDate = new Date(2024, 0, 4).getTime();
  const maxWeekDayDate = new Date(2024, 1, 20).getTime();

  // range
  const [curRangeDayDate, setCurRangeDayDate] = useState([
    new Date(2024, 0, 10).getTime(),
    new Date(2024, 0, 20).getTime(),
  ]);
  const minRangeDayDate = new Date(2024, 0, 4).getTime();
  const maxRangeDayDate = new Date(2024, 1, 20).getTime();

  const [curMonthDate, setCurMonthDate] = useState(new Date(2024, 6, 1).getTime());
  const minMonthDate = new Date(2024, 2, 1).getTime();
  const maxMonthDate = new Date(2025, 9, 31).getTime();

  const [curYearDate, setCurYearDate] = useState(new Date(2017, 6, 1).getTime());
  const minYearDate = new Date(2012, 0, 1).getTime();
  const maxYearDate = new Date(2029, 10, 31).getTime();

  const [showDayPicker, setShowDayPicker] = useState(false);

  const locale = {
    shortWeekDays: [
      Strings.getLang('week0'),
      Strings.getLang('week1'),
      Strings.getLang('week2'),
      Strings.getLang('week3'),
      Strings.getLang('week4'),
      Strings.getLang('week5'),
      Strings.getLang('week6'),
    ],
    subFormatter: `YYYY${Strings.getLang('year')}MM${Strings.getLang('month')}`,
  };
  const locale2 = {
    subFormatter: `YYYY${Strings.getLang('year')}`,
    monthsFormatter: [
      Strings.getLang('cal_Jan'),
      Strings.getLang('cal_Feb'),
      Strings.getLang('cal_Mar'),
      Strings.getLang('cal_Apr'),
      Strings.getLang('cal_May'),
      Strings.getLang('cal_Jun'),
      Strings.getLang('cal_Jul'),
      Strings.getLang('cal_Aug'),
      Strings.getLang('cal_Sept'),
      Strings.getLang('cal_Oct'),
      Strings.getLang('cal_Nov'),
      Strings.getLang('cal_Dec'),
    ],
  };

  function formatDate(date) {
    if (date) {
      const dateValue = new Date(date);
      return `${dateValue.getMonth() + 1}/${dateValue.getDate()}`;
    }
    return '';
  }

  function formatWeekRange(dateRange) {
    if (dateRange.length) {
      return `${formatDate(dateRange[0])} - ${formatDate(dateRange[1])}`;
    }
    return '';
  }

  function formatRange(dateRange) {
    if (dateRange.length) {
      return `${formatDate(dateRange[0])} - ${formatDate(dateRange[1])}`;
    }
    return '';
  }

  function formatFullDate(date) {
    if (date) {
      const dateValue = new Date(date);
      return `${dateValue.getFullYear()}/${formatDate(dateValue)}`;
    }
    return '';
  }

  const [type, setType] = useState('single');

  return (
    <>
      <DemoBlock title={`${Strings.getLang('calendarSelectDay')}`}>
        <View className={styles.dateTitle}>
          {Strings.getLang('calendarCurSelect')}: {formatDate(curDayDate)}
        </View>
        <Calendar
          title={Strings.getLang('calendar')}
          locale={locale}
          minDate={minDayDate}
          maxDate={maxDayDate}
          defaultDate={curDayDate}
          // utcOffset={-540}
          onSelect={e => {
            setCurDayDate(e.detail);
          }}
          dayClassMap={{
            '2024-01-17': 'calendar-disabled',
          }}
        />
      </DemoBlock>
      <DemoBlock title={`${Strings.getLang('customDateFormat')}`}>
        <View className={styles.dateTitle}>
          {Strings.getLang('calendarCurSelect')}: {formatDate(curDayDate)}
        </View>
        <Calendar
          title={Strings.getLang('calendar')}
          locale={locale}
          minDate={minDayDate}
          maxDate={maxDayDate}
          defaultDate={curDayDate}
          onSelect={e => {
            setCurDayDate(e.detail);
          }}
          dayClassMap={{
            '2024-01-17': 'calendar-disabled',
          }}
        />
      </DemoBlock>
      <DemoBlock title={`${Strings.getLang('calendarSelectWeek')}`}>
        <View className={styles.dateTitle}>
          {Strings.getLang('calendarCurSelect')}: {formatWeekRange(curWeekDayDate)}
        </View>
        <Calendar
          title={Strings.getLang('calendar')}
          locale={locale}
          type="week"
          minDate={minWeekDayDate}
          maxDate={maxWeekDayDate}
          defaultDate={curWeekDayDate}
          firstDayOfSelectWeek={1}
          onSelect={e => {
            setCurWeekDayDate(e.detail as any);
          }}
        />
      </DemoBlock>
      <DemoBlock title={`${Strings.getLang('calendarSelectRange')}`}>
        <View className={styles.dateTitle}>
          {Strings.getLang('calendarCurSelect')}: {formatRange(curRangeDayDate)}
        </View>
        <Calendar
          title={Strings.getLang('calendar')}
          locale={locale}
          type="range"
          minDate={minRangeDayDate}
          maxDate={maxRangeDayDate}
          defaultDate={curRangeDayDate}
          onSelect={e => {
            setCurRangeDayDate(e.detail as any);
          }}
        />
      </DemoBlock>
      <DemoBlock title={`${Strings.getLang('calendarSelectMonth')}`}>
        <View className={styles.dateTitle}>
          {Strings.getLang('calendarCurSelect')}: {formatFullDate(curMonthDate)}
        </View>
        <Calendar
          title={Strings.getLang('calendar')}
          locale={locale2}
          type="month"
          minDate={minMonthDate}
          maxDate={maxMonthDate}
          defaultDate={curMonthDate}
          onSelect={e => {
            setCurMonthDate(e.detail as any);
          }}
        />
      </DemoBlock>

      <DemoBlock title={`${Strings.getLang('calendarSelectOneYear')}`}>
        <View className={styles.dateTitle}>
          {Strings.getLang('calendarCurSelect')}: {formatFullDate(curYearDate)}
        </View>
        <Calendar
          title={Strings.getLang('calendar')}
          type="year"
          minDate={minYearDate}
          maxDate={maxYearDate}
          defaultDate={curYearDate}
          onSelect={e => {
            setCurYearDate(e.detail as any);
          }}
        />
      </DemoBlock>

      <DemoBlock title={`${Strings.getLang('calendarModalSelectDay')}`}>
        <View className={styles.dateTitle}>
          {Strings.getLang('calendarCurSelect')}: {formatDate(curDayDate)}
        </View>
        <View className={styles.controls}>
          <View
            className={styles.controls_item}
            onClick={() => setType('single')}
            style={{
              color: type === 'single' ? '#3678e3' : '',
            }}
          >
            {Strings.getLang('day')}
          </View>
          <View
            className={styles.controls_item}
            onClick={() => setType('month')}
            style={{
              color: type === 'month' ? '#3678e3' : '',
            }}
          >
            {Strings.getLang('month')}
          </View>
          <View
            className={styles.controls_item}
            onClick={() => setType('year')}
            style={{
              color: type === 'year' ? '#3678e3' : '',
            }}
          >
            {Strings.getLang('year')}
          </View>
        </View>
        <Cell
          isLink
          title={Strings.getLang('calendarDay')}
          onClick={() => setShowDayPicker(!showDayPicker)}
          value={formatDate(curDayDate)}
        />
        <Calendar
          title={Strings.getLang('calendar')}
          minDate={minDayDate}
          maxDate={maxDayDate}
          type={type as any}
          defaultDate={curDayDate}
          confirmText={Strings.getLang('confirm')}
          showConfirm
          show={showDayPicker}
          onConfirm={event => {
            setCurDayDate(event.detail as any);
            setShowDayPicker(false);
          }}
          poppable
        />
      </DemoBlock>
    </>
  );
}
