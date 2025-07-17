import React, { useState } from 'react';
import { View } from '@ray-js/ray';
import { Cell, CellGroup, Calendar } from '@ray-js/smart-ui';
import { DemoBlock } from '@/components';
import { formatFullDate, formatRange, formatMultiple } from './utils';
import Strings from '../../i18n';

type Type = 'single' | 'multiple' | 'range';

type Position = 'bottom' | 'top' | 'right' | 'left';

const defaultState = {
  date: {
    maxRange: [],
    selectSingle: null,
    selectRange: [],
    selectMultiple: [],
    quickSelect1: null,
    quickSelect2: [],
    customColor: [],
    customConfirm: [],
    customRange: null,
    customDayText: [],
    customPosition: null,
  },
  type: 'single',
  round: true,
  color: '',
  minDate: Date.now(),
  maxDate: new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 6,
    new Date().getDate()
  ).getTime(),
  maxRange: undefined,
  position: 'bottom',
  formatter: undefined,
  showConfirm: false,
  showCalendar: false,
  tiledMinDate: new Date(2012, 0, 10).getTime(),
  tiledMaxDate: new Date(2012, 2, 20).getTime(),
  confirmText: Strings.getLang('confirm'),
  confirmDisabledText: Strings.getLang('confirm'),
  firstDayOfWeek: 0,
  id: '',
};

const CalendarPage = () => {
  const [date, setDate] = useState(defaultState.date);
  const [type, setType] = useState<Type>(defaultState.type as Type);
  const [round, setRound] = useState(defaultState.round);
  const [maxRange, setMaxRange] = useState(defaultState.maxRange);
  const [color, setColor] = useState(defaultState.color);
  const [minDate, setMinDate] = useState(defaultState.minDate);
  const [maxDate, setMaxDate] = useState(defaultState.maxDate);
  const [position, setPosition] = useState<Position>(defaultState.position as Position);
  const [formatter, setFormatter] = useState(defaultState.formatter);
  const [showConfirm, setShowConfirm] = useState(defaultState.showConfirm);
  const [showCalendar, setShowCalendar] = useState(defaultState.showCalendar);
  const [tiledMinDate, setTiledMinDate] = useState(defaultState.tiledMinDate);
  const [tiledMaxDate, setTiledMaxDate] = useState(defaultState.tiledMaxDate);
  const [confirmText, setConfirmText] = useState(defaultState.confirmText);
  const [confirmDisabledText, setConfirmDisabledText] = useState(defaultState.confirmDisabledText);
  const [firstDayOfWeek, setFirstDayOfWeek] = useState(defaultState.firstDayOfWeek);
  const [id, setId] = useState(defaultState.id);

  const dayFormatter = day => {
    const month = day.date.getMonth() + 1;
    const date = day.date.getDate();
    const formatDay = { ...day };
    if (month === 5) {
      if (date === 1) {
        formatDay.topInfo = Strings.getLang('labourDay');
      } else if (date === 4) {
        formatDay.topInfo = Strings.getLang('mayFourthYouthDay');
      } else if (date === 11) {
        formatDay.text = Strings.getLang('today');
      }
    }

    if (day.type === 'start') {
      formatDay.bottomInfo = Strings.getLang('enterTheStore');
    } else if (day.type === 'end') {
      formatDay.bottomInfo = Strings.getLang('checkOut');
    }

    return formatDay;
  };

  const resetSettings = () => {
    setRound(defaultState.round);
    setColor(defaultState.color);
    setMinDate(defaultState.minDate);
    setMaxDate(defaultState.maxDate);
    setMaxRange(defaultState.maxRange);
    setPosition(defaultState.position as Position);
    setFormatter(defaultState.formatter);
    setShowConfirm(true);
    setConfirmText(defaultState.confirmText);
    setConfirmDisabledText(defaultState.confirmDisabledText);
  };

  const show = (type: Type, id: string) => {
    resetSettings();

    setId(id);
    setType(type);
    setShowCalendar(true);

    switch (id) {
      case 'quickSelect1':
      case 'quickSelect2':
        setShowConfirm(false);
        break;
      case 'customColor':
        setColor('#07c160');
        break;
      case 'customConfirm':
        setConfirmText(Strings.getLang('completed'));
        setConfirmDisabledText(Strings.getLang('completed'));

        break;
      case 'customRange':
        setMinDate(new Date(2010, 0, 1).getTime());
        setMaxDate(new Date(2010, 0, 31).getTime());

        break;
      case 'customDayText':
        setMinDate(new Date(2010, 4, 1).getTime());
        setMaxDate(new Date(2010, 4, 31).getTime());

        break;
      case 'customPosition':
        setRound(false);
        setPosition('right');

        break;
      case 'maxRange':
        setMaxRange(3);
        break;
      default:
        console.log(111);
    }
  };

  const onConfirm = event => {
    const newDate = { ...date };
    setShowCalendar(false);
    newDate[id] = Array.isArray(event.detail)
      ? event.detail.map(date => date.valueOf())
      : event.detail.valueOf();
    setDate(newDate);
  };

  const onSelect = event => {
    console.log(event);
  };

  const onUnselect = event => {
    console.log(event);
  };
  const onOpen = () => {
    console.log('open');
  };

  const onOpened = () => {
    console.log('opened');
  };

  const onClose = () => {
    setShowCalendar(false);
  };

  const onClosed = () => {
    console.log('closed');
  };

  return (
    <>
      <DemoBlock title={Strings.getLang('basicUsage')}>
        <CellGroup>
          <Cell title={Strings.getLang('selectASingleDate')} isLink onClick={() => show('single', 'selectSingle')}>
            <View>{formatFullDate(date.selectSingle)}</View>
          </Cell>
          <Cell title={Strings.getLang('selectMultipleDates')} isLink onClick={() => show('multiple', 'selectMultiple')}>
            <View>{formatMultiple(date.selectMultiple)}</View>
          </Cell>
          <Cell title={Strings.getLang('selectDateRange')} isLink onClick={() => show('range', 'selectRange')}>
            <View>{formatRange(date.selectRange)}</View>
          </Cell>
        </CellGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('quickSelect')}>
        <CellGroup>
          <Cell title={Strings.getLang('selectASingleDate')} isLink onClick={() => show('single', 'quickSelect1')}>
            <View>{formatFullDate(date.quickSelect1)}</View>
          </Cell>

          <Cell title={Strings.getLang('selectDateRange')} isLink onClick={() => show('range', 'quickSelect2')}>
            <View>{formatRange(date.quickSelect2)}</View>
          </Cell>
        </CellGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('customCalendar')}>
        <CellGroup>
          <Cell title={Strings.getLang('customColor')} isLink onClick={() => show('range', 'customColor')}>
            <View>{formatRange(date.customColor)}</View>
          </Cell>

          <Cell title={Strings.getLang('customDateRange')} isLink onClick={() => show('single', 'customRange')}>
            <View>{formatFullDate(date.customRange)}</View>
          </Cell>

          <Cell title={Strings.getLang('customButtonText')} isLink onClick={() => show('range', 'customConfirm')}>
            <View>{formatRange(date.customConfirm)}</View>
          </Cell>
          <Cell title={Strings.getLang('customDateText')} isLink onClick={() => show('range', 'customDayText')}>
            <View>{formatRange(date.customDayText)}</View>
          </Cell>
          <Cell title={Strings.getLang('customPopupPosition')} isLink onClick={() => show('range', 'customPosition')}>
            <View>{formatFullDate(date.customPosition)}</View>
          </Cell>
          <Cell title={Strings.getLang('maximumDateRange')} isLink onClick={() => show('range', 'maxRange')}>
            <View>{formatRange(date.maxRange)}</View>
          </Cell>
        </CellGroup>
      </DemoBlock>

      <DemoBlock title={Strings.getLang('tileDisplay')}>
        <CellGroup>
          <Calendar
            title={Strings.getLang('calendar')}
            poppable={false}
            showConfirm={false}
            minDate={tiledMinDate}
            maxDate={tiledMaxDate}
            firstDayOfWeek={firstDayOfWeek}
            className="tiled-calendar"
          />
        </CellGroup>
      </DemoBlock>
      <Calendar
        show={showCalendar}
        type={type}
        color={color}
        round={round}
        position={position}
        minDate={minDate}
        maxDate={maxDate}
        maxRange={maxRange}
        showConfirm={showConfirm}
        confirmText={confirmText}
        confirmDisabledText={confirmDisabledText}
        firstDayOfWeek={firstDayOfWeek}
        onConfirm={onConfirm}
        onSelect={onSelect}
        onUnselect={onUnselect}
        onOpen={onOpen}
        onOpened={onOpened}
        onClose={onClose}
        onClosed={onClosed}
      />
    </>
  );
};

export default CalendarPage;
