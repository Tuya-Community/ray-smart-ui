---
category: Data Entry
new: true
---

# Calendar

### Introduction

Added since v2.0.0, the calendar component is used to select a date or a date range.

### Import

```jsx
import { Calendar } from '@ray-js/smart-ui';
```

## Code Demo

### Select a Single Date

The code below demonstrates how to use the calendar component with a cell. After the date is selected, the `select` event will be triggered.

```jsx
import React, { useState } from 'react';
import { Calendar } from '@ray-js/smart-ui';

export default function Demo() {
  const [curDayDate, setCurDayDate] = useState<any>(new Date(2024, 0, 15).getTime());
  const minDayDate = new Date(2024, 0, 4).getTime();
  const maxDayDate = new Date(2024, 1, 20).getTime();

  const locale = {
    shortWeekDays: [
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
    ],
    subFormatter: 'YYYY' + 'Year' + 'MM' + 'Month',
  }
  
  return (
    <Calendar
      title="Calendar"
      locale={locale}
      minDate={minDayDate}
      maxDate={maxDayDate}
      defaultDate={curDayDate}
      onSelect={e => {
        setCurDayDate(e.detail);
      }}
    />
  );
}
```


### Custom Date Format

The `dayClassMap` attribute can be used to set the style for specified dates.

```jsx
import React, { useState } from 'react';
import { Calendar } from '@ray-js/smart-ui';

export default function Demo() {
  const [curDayDate, setCurDayDate] = useState<any>(new Date(2024, 0, 15).getTime());
  const minDayDate = new Date(2024, 0, 4).getTime();
  const maxDayDate = new Date(2024, 1, 20).getTime();

  const locale = {
    shortWeekDays: [
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
    ],
    subFormatter: 'YYYY' + "year" + 'MM' + "Month",
  }
  
  return (
    <Calendar
      title="Calendar"
      locale={locale}
      minDate={minDayDate}
      maxDate={maxDayDate}
      defaultDate={curDayDate}
      dayClassMap={{
        '2024-01-17': 'calendar-disabled',
      }}
      onSelect={e => {
        setCurDayDate(e.detail);
      }}
    />
  );
}
```

Define CSS classes in the `app.less` file:

> Note: CSS classes must be placed in the app.less file to take effect.

```css
.calendar-disabled {
  opacity: 0.5;
  pointer-events: none;
}
```

### Select a Weekly Range

By setting `type` to `week`, you can select a weekly time range. The `select` event returns a date array, including the start and end dates.

```jsx
import React, { useState } from 'react';
import { Calendar } from '@ray-js/smart-ui';

export default function Demo() {
  const [curWeekDayDate, setCurWeekDayDate] = useState([
    new Date(2024, 0, 15).getTime(),
    new Date(2024, 0, 21).getTime(),
  ]);
  const minWeekDayDate = new Date(2024, 0, 4).getTime();
  const maxWeekDayDate = new Date(2024, 1, 20).getTime();

  const locale = {
    shortWeekDays: [
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
    ],
    subFormatter: 'YYYY' + 'Year' + 'MM' + 'Month',
  }
  
  return (
    <Calendar
      title="Calendar"
      locale={locale}
      type="week"
      minDate={minWeekDayDate}
      maxDate={maxWeekDayDate}
      defaultDate={curWeekDayDate}
      onSelect={e => {
        setCurWeekDayDate(e.detail as any);
      }}
    />
  );
}
```

### Select a Date Range

By setting `type` to `range`, you can select a date range. The `select` event returns a date array with the first item as the start date and the second item as the end date.

```jsx
import React from 'react';
import { Calendar } from '@ray-js/smart-ui';

export default function Demo() {
  const [curRangeDayDate, setCurRangeDayDate] = useState([
    new Date(2024, 0, 10).getTime(),
    new Date(2024, 0, 20).getTime(),
  ]);
  const minRangeDayDate = new Date(2024, 0, 4).getTime();
  const maxRangeDayDate = new Date(2024, 1, 20).getTime();

  const locale = {
    shortWeekDays: [
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
    ],
    subFormatter: 'YYYY' + 'Year' + 'MM' + 'Month',
  }
  
  return (
    <Calendar
      title="Calendar"
      locale={locale}
      type="range"
      minDate={minRangeDayDate}
      maxDate={maxRangeDayDate}
      defaultDate={curRangeDayDate}
      onSelect={e => {
        setCurRangeDayDate(e.detail as any);
      }}
    />
  );
}
```

### Select a Month

By setting `type` to `month`, you can select a month. The `select` event returns the first day of the selected month.

```jsx
import React, { useState } from 'react';
import { Calendar } from '@ray-js/smart-ui';

export default function Demo() {
  const [curMonthDate, setCurMonthDate] = useState(new Date(2024, 6, 1).getTime());
  const minMonthDate = new Date(2024, 2, 1).getTime();
  const maxMonthDate = new Date(2025, 9, 31).getTime();

  const locale2 = {
    subFormatter: 'YYYY' + 'Year',
    monthsFormatter: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',,
      'Oct',
      'Nov',
      'Dec',
    ],
  };
  
  return (
    <Calendar
      title="Select month"
      locale={locale2}
      type="month"
      minDate={minMonthDate}
      maxDate={maxMonthDate}
      defaultDate={curMonthDate}
      onSelect={e => {
        setCurMonthDate(e.detail as any);
      }}
    />
  );
}
```

### Select a Year

By setting `type` to `year`, you can select a year. The `select` event returns the first day of the selected year.

```jsx
import React, { useState } from 'react';
import { Calendar } from '@ray-js/smart-ui';

export default function Demo() {
  const [curYearDate, setCurYearDate] = useState(new Date(2017, 6, 1).getTime());
  const minYearDate = new Date(2012, 0, 1).getTime();
  const maxYearDate = new Date(2029, 10, 31).getTime();
  
  return (
    <Calendar
      title='Calendar'
      type="year"
      minDate={minYearDate}
      maxDate={maxYearDate}
      defaultDate={curYearDate}
      onSelect={e => {
        setCurYearDate(e.detail as any);
      }}
    />
  );
}
```

### Custom Colors

You can customize the color of the calendar through the `color` property, which affects the selected dates and bottom buttons.

```jsx
<Calendar color="#07c160" />
```

### Custom Date Range

Use `minDate` and `maxDate` to define the range of the calendar. Note that the interval between `minDate` and `maxDate` should not be too large, as it may cause severe performance issues.

```jsx
<Calendar minDate={minDate} maxDate={maxDate} />
```

```jsx
const [minDate, setMinDate] = useState(Date.now());
const [maxDate, setMaxDate] = useState(
  new Date(new Date().getFullYear(), new Date().getMonth() + 6, new Date().getDate()).getTime()
);
```

### Custom Button Text

Set the button text through the `confirmText` property.

```jsx
<Calendar type="range" confirmText="Finish" />
```

### Custom Popup Position

Customize the popup position through the `position` property. The optional values are `top`, `left`, `right`.

```jsx
<Calendar show={show} round="false" position="right" />
```

### Customize the Start Day of the Week

Set the start day of the week through the `first-day-of-week` property.

```jsx
<Calendar first-day-of-week={1} />
```

### Inline Display

Set `poppable` to `false`, and the calendar will be displayed directly on the page instead of appearing as a popup.

```jsx
<Calendar title="Calendar" poppable={false} show-confirm={false} class="calendar" />
```

## API

### locale
The default configuration is `en`. For configuration parameters, please refer to the following JSON.
```js
{
  shortWeekDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], // Weekdays
  subFormatter: 'YYYY-MM', // Subtitle formatting, only allows YYYYMM
}
```

### Props

| Parameter               | Description                                                                                         | Type                                | Default Value        |
| ----------------------- | --------------------------------------------------------------------------------------------------- | ----------------------------------- | -------------------- |
| color | Theme color, takes effect on the bottom button and selected date | _string_ | `#ee0a24` |
| confirmText | Text of the confirmation button | _string_ | `Confirm` |
| defaultDate `v1.10.21` | Default selected date, when `type` is `range`, it is an array; passing `null` means no default selection | _timestamp \| timestamp[] \| null_ | Today |
| firstDayOfWeek | Set the starting day of the week | _0~6_ | `0` |
| locale | Locale package | _Object_ | [Default Configuration](#locale) |
| maxDate | Maximum selectable date | _timestamp_ | Six months from current date |
| minDate | Minimum selectable date | _timestamp_ | Current date |
| poppable | Show the calendar as a popup | _boolean_ | `true` |
| readonly `v1.9.1` | Readonly state, dates cannot be selected in readonly state | _boolean_ | `false` |
| rowHeight | Date row height | _number \| string_ | `64` |
| showConfirm | Show the confirmation button | _boolean_ | `true` |
| showSubtitle | Show calendar subtitle (year and month) | _boolean_ | `true` |
| showTitle | Show calendar title | _boolean_ | `true` |
| title | Calendar title | _string_ | `Date Selection` |
| dayClassMap `v2.1.0` | Date cell style | Object | null |
| type | Selection type: <br>`single` for single date selection, <br>`range` for date range selection, <br>`week` for week selection, <br>`month` for month selection, <br>`year` for year selection | _string_ | `single` |
| headerIconColor `v2.6.0` | Header bar left and right arrow icon color | _string_ | `rgba(0, 0, 0, 0.7)` |

### Range Props

When the type of Calendar is set to `range`, the following props are supported:

| Parameter               | Description                                          | Type               | Default Value                   |
| ------------------ | --------------------------------------------- | ------------------ | ------------------------ |
| maxRange `v2.3.9` | The maximum number of days selectable in the date range. By default, there is no limit. | _number \| string_ | - |
| rangePrompt `v2.3.9` | The prompt text when the range selection exceeds the maximum number of selectable days | _string \| null_ | `Days selected over x days` |
| showRangePrompt `v2.3.9` | Whether to display the prompt text when the range selection exceeds the maximum number of selectable days | _boolean_ | `true` |
| allowSameDay `v2.3.9` | Whether to allow the start and end time of the date range to be the same day | _boolean_ | `false` |

### Poppable Props

When the `poppable` of Calendar is `true`, the following props are supported:

| Parameter                | Description                       | Type      | Default Value |
| ------------------------ | --------------------------------- | --------- | ------------- |
| closeOnClickOverlay | Close when clicking the overlay | _boolean_ | `true` |
| position | Popup position, optional values are `top`, `right`, `left` | _string_ | `bottom` |
| round | Show rounded popup | _boolean_ | `true` |
| safeAreaInsetBottom | Enable bottom safe area adaptation | _boolean_ | `true` |
| show | Show the calendar popup | _boolean_ | `false` |

### Events

| Event Name                  | Description                                                     | Callback Parameter            |
| --------------------------- | --------------------------------------------------------------- | ----------------------------- |
| onClickSubtitle `v1.8.1` | Triggered when the calendar subtitle is clicked | _WechatMiniprogram.TouchEvent_ |
| onClose | Triggered when the popup layer is closed | - |
| onClosed | Triggered after the popup layer is closed and the animation ends | - |
| onConfirm | Triggered after date selection is completed; if `show-confirm` is `true`, it is triggered after clicking the confirm button | _value: Date \| Date[]_ |
| onOpen | Triggered when the popup layer is opened | - |
| onOpened | Triggered after the popup layer is opened and the animation ends | - |
| onOverRange | Triggered when the range selection exceeds the maximum selectable days | - |
| onSelect | Triggered when any date is clicked | _value: Date \| Date[]_ |
| onUnselect | Triggered when clicking a selected date if the `type` of Calendar is `multiple` | _value: Date_ |

### Methods

You can get the Calendar instance via selectComponent and call instance methods.

| Method Name | Description                        | Parameter | Return Value |
| ------------| ---------------------------------- | ----------| -------------|
| reset | Reset the selected date to the default value | - | - |

### Style Variables

The component provides the following CSS variables for custom styles. For usage, please refer to the [ConfigProvider Component](/material/smartui?comId=config-provider).  

| Name                                            | Default Value                                  | Description                           |
| ----------------------------------------------- | ---------------------------------------------- | ------------------------------------- |
| --calendar-background-color                     | _var(--app-B6, #fff)_                          | Calendar background color             |
| --calendar-popup-height `v2.5.0`                        | _848rpx_                                          | Calendar popup height                 |
| --calendar-header-box-shadow                    | _0 2px 10px rgba(125, 126, 128, 0.16)_         | Calendar header box shadow            |
| --calendar-header-title-height                  | _44px_                                         | Calendar header title height          |
| --calendar-header-title-font-size               | _16px_                                         | Calendar header title font size       |
| --calendar-header-title-font-color              | _var(--app-B4-N1, rgba(0, 0, 0, 1))_           | Calendar header title font color      |
| --calendar-header-subtitle-font-size            | _16px_                                         | Calendar header subtitle font size    |
| --calendar-weekdays-height                      | _30px_                                         | Weekdays bar height                   |
| --calendar-weekdays-font-size                   | _12px_                                         | Weekdays font size                    |
| --calendar-weekdays-font-color                  | _var(--app-B4-N1, rgba(0, 0, 0, 1))_           | Weekdays font color                   |
| --calendar-month-title-font-size                | _14px_                                         | Month title font size                 |
| --calendar-month-mark-color                     | _fade(@gray-4, 60%)_                           | Month mark color                      |
| --calendar-month-mark-font-size                 | _160px_                                        | Month mark font size                  |
| --calendar-day-height                           | _100rpx_                                       | Day cell height                       |
| --calendar-cell-item-font-size                  | _15px_                                         | Day font size                         |
| --calendar-cell-item-width                      | _104rpx_                                       | Calendar cell item width              |
| --calendar-cell-item-height                     | _104rpx_                                       | Calendar cell item height             |
| --calendar-cell-item-font-color                 | _var(--app-B4-N1, rgba(0, 0, 0, 1))_           | Calendar cell item font color         |
| --calendar-cell-item-border-radius              | _104rpx_                                       | Calendar cell item border radius      |
| --calendar-day-font-weight                      | _500_                                          | Day font weight                       |
| --calendar-day-select-border-radius             | _34rpx_                                        | Selected day border radius            |
| --calendar-range-edge-color                     | _#fff_                                         | Date range edge color                 |
| --calendar-range-edge-background-color          | _#3678e3_                                      | Date range edge background color      |
| --calendar-range-middle-color                   | _#fff_                                         | Date range middle color               |
| --calendar-range-middle-background-opacity      | _0.1_                                          | Date range middle background opacity  |
| --calendar-selected-day-size                    | _34px_                                         | Selected day size                     |
| --calendar-selected-day-color                   | _#fff_                                         | Selected day text color               |
| --calendar-info-font-size                       | _10px_                                         | Calendar info font size               |
| --calendar-info-line-height                     | _14px_                                         | Calendar info line height             |
| --calendar-selected-day-background-color        | _#3678e3_                                      | Selected day background color         |
| --calendar-day-disabled-color                   | _#c8c9cc_                                      | Disabled day color                    |
| --calendar-confirm-button-height                | _36px_                                         | Confirm button height                 |
| --calendar-confirm-button-margin                | _7px 0_                                        | Confirm button margin                 |
| --calendar-confirm-button-line-height           | _34px_                                         | Confirm button line height            |
| --calendar-text-color                           | _#000_                                         | Calendar text color                   |
| --calendar-header-save-color                    | _#1989fa_                                      | Calendar header save button color     |
| --calendar-header-icon-bg-color  `v2.6.0`                | _var(--app-B2-N9, rgba(0, 0, 0, 0.05))_        | Calendar header icon background color |
| --calendar-header-icon-color   `v2.6.0`             | _var(--app-B1-N2, rgba(0, 0, 0, 0.7))_        | Calendar header icon background color                     |
| --calendar-header-title-weight `v2.6.0`               | 600        | Calendar Header Title Font Weight                     |