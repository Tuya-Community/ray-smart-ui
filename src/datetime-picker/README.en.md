---
category: Data Entry
---

# DateTimePicker

### Introduction

Used for selecting time, supporting various time dimensions such as date, hours and minutes. It is usually used in conjunction with the [Popup](#/popup) component.

### Introduction

```jsx
import { DateTimePicker } from '@ray-js/smart-ui';
```

## Code Demo

### Select full time

`value` For timestamp.

```jsx
import React, { useCallback } from 'react';
import { DateTimePicker } from '@ray-js/smart-ui';
import { showToast } from '@ray-js/ray';

export default function Demo() {
  const onDateTimeInput = useCallback(event => {
    const { detail } = event;
    showToast({
      icon: 'none',
      title: new Date(detail).toLocaleString(),
    });
  }, []);
  return (
    <DateTimePicker
      type="datetime"
      value={new Date(2018, 2, 31).getTime()}
      minDate={new Date(2018, 0, 1).getTime()}
      maxDate={new Date(2019, 10, 1).getTime()}
      onInput={onDateTimeInput}
    />
  );
}
```

### Select date (Y-M-D)

`value` is a timestamp, and unit descriptions can be added by passing the `locale` attribute.

```jsx
import React, { useCallback } from 'react';
import { DateTimePicker } from '@ray-js/smart-ui';
import { showToast } from '@ray-js/ray';

export default function Demo() {
  const onDateInput = useCallback(event => {
    const { detail } = event;
    showToast({
      icon: 'none',
      title: new Date(detail).toLocaleString(),
    });
  }, []);
  return (
    <DateTimePicker
      type="date"
      value={new Date(2018, 2, 31).getTime()}
      minDate={new Date(2018, 0, 1).getTime()}
      maxDate={new Date(2019, 10, 1).getTime()}
      locale={{
        year: 'Year',
        month: 'month',
        day: 'Day',
      }}
      onInput={onDateInput}
    />
  );
}
```

### Select Date (Year Month)

`value` For timestamp.

```jsx
import React, { useCallback } from 'react';
import { DateTimePicker } from '@ray-js/smart-ui';
import { showToast } from '@ray-js/ray';

export default function Demo() {
  const onDateInput = useCallback(event => {
    const { detail } = event;
    const date = new Date(detail);
    showToast({
      icon: 'none',
      title: `${date.getFullYear()}/${date.getMonth() + 1}`,
    });
  }, []);
  return (
    <DateTimePicker
      type="year-month"
      value={new Date(2018, 2, 31).getTime()}
      minDate={new Date(2018, 0, 1).getTime()}
      locale={{
        year: 'Year',
        month: 'Month',
        day: 'Day',
      }}
      onInput={onDateInput}
    />
  );
}
```

### Select Time

`value` is a string.

```jsx
import React, { useCallback } from 'react';
import { DateTimePicker } from '@ray-js/smart-ui';
import { showToast } from '@ray-js/ray';

export default function Demo() {
  const onTimeInput = useCallback(event => {
    const { detail } = event;

    showToast({
      icon: 'none',
      title: detail,
    });
  }, []);
  return (
    <DateTimePicker type="time" value="12:00" min-hour={10} max-hour={20} onInput={onTimeInput} />
  );
}
```

## API

### Props

| Parameter         | Description                                                                    | Type                       | Default Value |
| ----------------- | ------------------------------------------------------------------------------ | -------------------------- | ------------- |
| cancelButtonText  | Cancel button text                                                                   | _string_                   | `Cancel`        |
| confirmButtonText | Confirm the button text                                                                   | _string_                   | `confirm`        |
| item-height       | Height                                                                       | _number_                   | `44`          |
| loading           | Whether to display loading status                                                               | _boolean_                  | `false`       |
| locale            | Set time unit                                                                   | Locale                     |               |
| maxDate           | Optional the maximum time, accurate to minutes                                                     | _number_                   | After ten years        |
| maxHour           | Optional minimum, for Time type                                                 | _number_                   | `23`          |
| maxMinute         | Optional the largest minute, for Time type                                                 | _number_                   | `59`          |
| minDate           | The minimum option, accurate to minutes                                                     | _number_                   | Ten years ago        |
| minHour           | Optional minimum hour, for Time type                                                 | _number_                   | `0`           |
| minMinute         | Optional minimum minute, for Time type                                                 | _number_                   | `0`           |
| show-toolbar      | Whether to display the top column                                                                 | _boolean_                  | `true`        |
| title             | Top column title                                                                     | _string_                   | `''`          |
| type              | Type, optional values are `date` `time` `year-month` <br> <strong>Dynamic modification is not recommended</strong> | _string_                   | `datetime`    |
| value             | Current selected value                                                         | _string \| number \| Date_ | -             |
| visibleItemCount  | Visible number of options                                                                 | _number_                   | `6`           |

### Events

| Event Name | Description | Callback Parameters |
| --------- | ------------------------ | ---------- |
| onCancel  | Event triggered when the cancel button is clicked | -          |
| onChange  | Event triggered when the value changes | Component instance |
| onConfirm | Event triggered when the done button is clicked | Current value |
| onInput   | Event triggered when the value changes | Current value |

### change Event

In the `change` event, you can obtain the component instance to perform corresponding updates and other operations on the component:

| Function | Description |
| ------------------------------ | ------------------------------------------ |
| getColumnValue(index)          | Get the selected values in the corresponding column                       |
| getColumnValues(index)         | Get all alternative values in the corresponding column                   |
| getValues()                    | Get selected values from all columns and return an array       |
| setColumnValue(index, value)   | Set the selected value in the corresponding column                       |
| setColumnValues(index, values) | Set all alternative values in the corresponding column                   |
| setValues(values)              | `values` is an array that sets the selected values in all columns |

### External Style Class

| Class Name | Description |
| ------------ | ------------ |
| activeClass  | Selected Item Style Class |
| columnClass  | Column Style Class     |
| toolbarClass | Top bar style class |

### Locale Structure

| Attribute | Description |
| ------ | -------- |
| day    | Japanese unit   |
| hour   | Hourly unit |
| minute | Minute unit |
| month  | Monthly unit   |
| second | Second unit   |
| year   | Annual unit   |
