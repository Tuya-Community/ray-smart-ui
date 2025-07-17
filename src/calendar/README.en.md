<!-- ---
category: Data Entry
--- -->

# Calendar

### Introduction

Calendar components are used to select the date or date interval.

### Introduce

```jsx
import { Calendar, Cell } from '@ray-js/smart-ui';
```

## Code demonstration

### Choose a single date

The following demonstrates how to use the calendar component with cell merging. A 'confirm' event will be triggered after the date selection is complete.

```jsx
import React, { useState } from 'react';
import { Calendar, Cell } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState('');

  const onDisplay = () => {
    setShow(true);
  };

  const onClose = () => {
    setShow(false);
  };

  const formatDate = value => {
    date = new Date(date);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  };

  const onConfirm = event => {
    setShow(false);
    setDate(event.detail);
  };
  return (
    <View>
      <Cell title="Choose a single date" value={date} onClick={onDisplay} />
      <Calendar show={show} onClose={onClose} onConfirm={onConfirm} />
    </View>
  );
}
```

### Choose multiple dates

After setting `type` to `multiple`, you can select multiple dates. At this time, the `confirm` event returns the date as an array structure, which contains several selected dates.

```jsx
import React from 'react';
import { Calendar, Cell } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');

  const onDisplay = () => {
    setShow(true);
  };
  const onConfirm = event => {
    setShow(false);
    setText(`Chose ${event.detail.length} Date`);
  };

  const onClose = () => {
    setShow(false);
  };
  return (
    <View>
      <Cell title="Choose multiple dates" value={text} onClick={onDisplay} />
      <Calendar show={show} type="multiple" onClose={onClose} onConfirm={onConfirm} />
    </View>
  );
}
```

### Selection Date range

When the `type` is set to `range`, you can select a date range. In this case, the `confirm` event returns the date as an array structure, with the first item being the start date and the second item being the end date.

```jsx
import React from 'react';
import { Calendar, Cell } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');

  const onDisplay = () => {
    setShow(true);
  };
  const formatDate = date => {
    date = new Date(date);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  };
  const onConfirm = event => {
    const [start, end] = event.detail;

    setShow(false);
    setText(`${formatDate(start)} - ${formatDate(end)}`);
  };
  const onClose = () => {
    setShow(false);
  };

  return (
    <View>
      <Cell title="Selection Date range" value={text} onClick="onDisplay" />
      <Calendar show={show} type="range" onClose={onClose} bind:confirm={onConfirm} />
    </View>
  );
}
```

> Tips: By default, the start and end dates cannot be the same day. You can set the allow-same-day attribute to allow selecting the same day.

### Fast choice

Setting `showConfirm` to `false` hides the confirm button, and in this case, the `confirm` event will be triggered immediately after selection is complete.

```jsx
<Calendar show={show} showConfirm={false} />
```

### Custom color

The `color` attribute allows you to customize the calendar's color, affecting the selected date and the bottom button.

```jsx
<Calendar show={show} color="#07c160" />
```

### Custom Date range

Define the range of the calendar using `minDate` and `maxDate`. It is important to note that the interval between `minDate` and `maxDate` should not be too large, as it may cause severe performance issues.

```jsx
<Calendar show={show} minDate={minDate} maxDate={maxDate} />
```

```jsx
const [show, setShow] = useState(false);

const [minDate, setMinDate] = useState(Date.now());
const [maxDate, setMaxDate] = useState(
  new Date(new Date().getFullYear(), new Date().getMonth() + 6, new Date().getDate()).getTime()
);
```

### Custom button text

Set the button text through `confirmText` and set the text when the button is disabled through `confirmDisabledText`.

```jsx
<Calendar show={show} type="range" confirmText="Finish" confirmDisabledText="Please select the end time" />
```

### Custom date copy

Use the 'formatter' function to format the content of each cell on the calendar.

```jsx
<Calendar show={show} type="range" formatter={formatter} />
```

```jsx
const formatter = day => {
  const month = day.date.getMonth() + 1;
  const date = day.date.getDate();

  if (month === 5) {
    if (date === 1) {
      day.topInfo = 'Labor Day';
    } else if (date === 4) {
      day.topInfo = 'May 4th Youth Festival';
    } else if (date === 11) {
      day.text = 'today';
    }
  }

  if (day.type === 'start') {
    day.bottomInfo = 'Stay';
  } else if (day.type === 'end') {
    day.bottomInfo = 'Leave the store';
  }

  return day;
};
```

### Custom pop -up position

Customize the pop-up position with the `position` attribute. Optional values are `top`, `left`, and `right`.

```jsx
<Calendar show={show} round="false" position="right" />
```

### The maximum range of the date interval

When selecting a date range, you can specify the maximum number of selectable days with the `max-range` attribute. If the selected range exceeds the maximum number of selectable days, a corresponding message will be displayed.

```jsx
<Calendar type="range" max-range={3} />
```

### Customization of the beginning of Week

Set which day of the week the week starts on using the 'first-day-of-week' attribute.

```jsx
<Calendar first-day-of-week={1} />
```

### Flat display

Set `poppable` to `false`, and the calendar will be displayed directly on the page instead of appearing as a pop-up.

```jsx
<Calendar title="日历" poppable={false} show-confirm={false} class="calendar" />
```

```css
.calendar {
  --calendar-height: 618px;
}
```

> Tips: When customizing the height of the calendar, ensure that when scrolling to the current month, all dates are displayed within the .Calendar__body. Otherwise, there may be a situation where the header month is not synchronized with the current month during scrolling. Currently, the preset height for the flat type is 618px, and the popup type height is 90%.

## API

### Props

| Parameters          | Description                                                                                                                                        | Type                               | Default value                  |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | ------------------------------ |
| color               | The theme color, the bottom button and the selection date take effect                                                                              | _string_                           | `#ee0a24`                      |
| confirmDisabledText | The confirmation button is in the text when the state is disabled                                                                                  | _string_                           | `确定`                         |
| confirmText         | Confirm the text of the button                                                                                                                     | _string_                           | `Sure`                         |
| defaultDate         | The default selected date. When the `type` is `multiple` or `range`, it is an array. Passing `null` means no default selection.                    | _timestamp \| timestamp[] \| null_ | 今天                           |
| firstDayOfWeek      | Set Zhou Qi Shi Shi                                                                                                                                | _0~6_                              | `0`                            |
| formatter           | Date formatization function                                                                                                                        | _(day: Day) => Day_                | -                              |
| locale `1.2.0`      | Multi -language package                                                                                                                            | _Object_                           | For details Locale Props       |
| maxDate             | Optional maximum date                                                                                                                              | _timestamp_                        | Six months of the current date |
| minDate             | Optional minimum date                                                                                                                              | _timestamp_                        | Current date                   |
| poppable            | Whether the calendar is displayed in the form of a bullet layer                                                                                    | _boolean_                          | `true`                         |
| readonly            | Whether it is read only, you can't choose the date in the read state                                                                               | _boolean_                          | `false`                        |
| rowHeight           | Date high                                                                                                                                          | _number \| string_                 | `64`                           |
| showConfirm         | Whether to show the confirmation button                                                                                                            | _boolean_                          | `true`                         |
| showMark            | Whether the month background watermark is displayed                                                                                                | _boolean_                          | `true`                         |
| showSubtitle        | Whether to show the deputy title of the calendar (year month)                                                                                      | _boolean_                          | `true`                         |
| showTitle           | Whether to show the title of the calendar                                                                                                          | _boolean_                          | `true`                         |
| title               | Calendar title                                                                                                                                     | _string_                           | `Date selection`               |
| type                | Choice type:<br>`single`Indicates choosing a single date,<br>`multiple`See choosing multiple date,<br>`range`Indicates the selection date interval | _string_                           | `single`                       |

### Locale Props

The default configuration is en. Please refer to the JSON below for configuration parameters.

```js
{
  shortWeekDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], // Weekly name
  subFormatter: 'YYYY-MM', // The subtitle is formatted, only YYYYMM is allowed
  rangeStart: 'Start',// Starting copy of the scope
  rangeEnd: 'End', // Ending copy of the scope
}
```

### Poppable Props

When Calendar's `poppable` is `true`, the following props are supported:

| Parameters          | Description                                              | Type      | Default value |
| ------------------- | -------------------------------------------------------- | --------- | ------------- |
| closeOnClickOverlay | Whether to close it after clicking the mask layer        | _boolean_ | `true`        |
| position            | Popup position, optional values are `top` `right` `left` | _string_  | `bottom`      |
| round               | Whether to display a rounded corner pop -up window       | _boolean_ | `true`        |
| safeAreaInsetBottom | Whether to open the bottom security zone to adapt        | _boolean_ | `true`        |
| show                | Whether to display the calendar pop -up window           | _boolean_ | `false`       |

### Range Props

When the `type` of Calendar is `range`, the following props are supported:

| Parameters      | Description                                                                                           | Type               | Default value                                        |
| --------------- | ----------------------------------------------------------------------------------------------------- | ------------------ | ---------------------------------------------------- |
| allowSameDay    | Whether the starting time of the allowable date range is the same day                                 | _boolean_          | `false`                                              |
| maxRange        | The number of days can be selected at most, and there is no limit by default                          | _number \| string_ | -                                                    |
| rangePrompt     | The range selection of the reminder copy of the most optional days                                    | _string \| null_   | `The number of days selected cannot exceed xx days.` |
| showRangePrompt | When the range selection exceeds the maximum optional days, whether to display the prompt copywriting | _boolean_          | `true`                                               |

### Multiple Props

When the type of Calendar is set to 'multiple', the following props are supported:

| Parameters | Description                         | Type               | Default value |
| ---------- | ----------------------------------- | ------------------ | ------------- |
| minRange   | Date to minimize the number of days | _number \| string_ | `1`           |

### Day Data structure

Each date in the calendar corresponds to a Day object, and the content of the Day object can be customized through the 'formatter' attribute.

| Key Name   | Description                                                                        | Type     |
| ---------- | ---------------------------------------------------------------------------------- | -------- |
| bottomInfo | The prompt information below                                                       | _string_ |
| className  | Custom className                                                                   | _string_ |
| date       | The Date object corresponding to the date                                          | _Date_   |
| text       | Text displayed in the middle                                                       | _string_ |
| topInfo    | The prompt information above                                                       | _string_ |
| type       | Date Type: Available options are `selected`, `start`, `middle`, `end`, `disabled`. | _string_ |

### Events

| Event Name      | Description                                                                                                                | Return parameters       |
| --------------- | -------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| onClickSubtitle | Triggered when clicking on the vice title of the calendar                                                                  |                         |
| onClose         | Triggered when the pop -up layer is turned off                                                                             | -                       |
| onClosed        | Turn off the pop -up layer and trigger after the animation is over                                                         | -                       |
| onConfirm       | Triggered after date selection is complete. If `showConfirm` is `true`, it is triggered after clicking the confirm button. | _value: Date \| Date[]_ |
| onOpen          | Triggered when opening the pop -up layer                                                                                   | -                       |
| onOpened        | Open the pop -up layer and trigger after the animation is over                                                             | -                       |
| onOverRange     | The range selection is triggered when the maximum optional days                                                            | -                       |
| onSelect        | Triggered when clicking any date                                                                                           | _value: Date \| Date[]_ |
| onUnselect      | When the `type` of Calendar is `multiple`, triggers when a selected date is clicked.                                       | _value: Date_           |

### Slots

| Name   | Description                |
| ------ | -------------------------- |
| footer | Custom bottom area content |
| title  | Custom title               |

### method

You can get the Calendar instance and call the instance method through the SelectComponent.

| Method Name | Description                                  | Parameters | Return Value |
| ----------- | -------------------------------------------- | ---------- | ------------ |
| reset       | Reset the selected date to the default value | -          | -            |
