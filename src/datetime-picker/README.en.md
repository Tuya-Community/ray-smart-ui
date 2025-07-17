---
category: Data Entry
assets: CountdownActionSheet,LampScheduleSetFunction
---

# DateTimePicker

### Introduction

Used for selecting time, supporting date, hours and minutes, and other time dimensions. It's typically used in conjunction with the [Popup](/material/smartui?comId=popup) component.

### Import

```jsx
import { DateTimePicker } from '@ray-js/smart-ui';
```

## Code Examples

### Select Complete Time

`value` is a timestamp.

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

### Select Date (Year, Month, Day)

`value` is a timestamp; pass in the `locale` attribute to add unit descriptions; pass in the `formatterMap` `v2.2.0` attribute to replace internal dates.

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
        day: '{{day}} day'
      }}
      onInput={onDateInput}
    />
  );
}
```

### Select Date (Year, Month)

`value` is a timestamp.

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
    <DateTimePicker 
      type="time" 
      value="12:00" 
      minHour={10} 
      maxHour={20} 
      onInput={onTimeInput} 
    />
  );
}
```

### Select Time - 12-hour mode `v2.3.0`

When setting `type: 'time'`, you can enable the `is12HourClock` attribute to achieve 12-hour selection mode; `amText` and `pmText` can set the texts for AM and PM respectively.  
The `columnsOrder` attribute can set the order of the columns, with a higher order placing the column further back, akin to the `flex order` attribute in CSS, but only from a style perspective without changing the logic.

```jsx
import React, { useCallback, useState } from 'react';
import { DateTimePicker } from '@ray-js/smart-ui';
import { showToast } from '@ray-js/ray';

export default function Demo() {
  const [currentDate, setCurrentDate] = useState('11:00');

  const onTimeInput = useCallback(event => {
    const { detail } = event;
    setCurrentDate(detail)
    showToast({
      icon: 'none',
      title: detail,
    });
  }, []);
  return (
    <DateTimePicker 
      type="time" 
      value={currentDate}
      is12HourClock
      columnsOrder={[2, 1, 1]}
      maxHour={24}
      minHour={1}
      fontStyles={{
        '12HourClock': {
          fontSize: '14px',
        },
      }}
      onInput={onTimeInput} 
    />
  );
}
```

### Disable Value Change Animation `v2.2.0`

Setting the `changeAnimation` attribute to `false` can disable the component's update animation effect caused by changes to the `value` attribute.  

```jsx
import React, { useCallback, useState } from 'react';
import { DateTimePicker } from '@ray-js/smart-ui';
import { showToast } from '@ray-js/ray';

export default function Demo() {
  const [currentDate, setCurrentDate] = useState('11:00');

  const onTimeInput = useCallback(event => {
    const { detail } = event;
    setCurrentDate(detail)
    showToast({
      icon: 'none',
      title: detail,
    });
  }, []);

  return (
    <DateTimePicker 
      type="time" 
      value={currentDate}
      changeAnimation={false}
      maxHour={24}
      minHour={1}
      onInput={onTimeInput} 
    />
  );
}
```

### Nested Popup `v2.3.2`

When nested as Popup, we often have confirm and cancel events. To prevent the animation from not completing when closing the dialog, use the `onAnimationStart` and `onAnimationEnd` events to disable the `onConfirm` callback, allowing it to be clicked after the animation is complete.  
Secondly, to restore the previously selected effect after the user clicks cancel, set `show: false` with `value="-1:00"` so that when reopened the dialog will reposition to the currently selected time because the `value` is different.

```jsx
import React, { useCallback, useState } from 'react';
import { DateTimePicker, Cell, Popup } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  const [show, setShow] = React.useState(false);
  const [popDomShow, setPopDomShow] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [time, setTime] = useState({
    hour: 10,
    minute: 0,
  });

  const showPicker = () => {
    setPopDomShow(true);
    setShow(true);
  }
  const onSaveTiming = event => {
    if (disabled) return;
    const { detail } = event;
    const [hour, minute] = detail.split(':');
    setTime({
      hour: parseInt(hour.trim(), 10),
      minute: parseInt(minute.trim(), 10),
    });
    setShow(false);
  }

  const onAnimationStart = () => {
    console.log('onAnimationStart');
    setDisabled(true);
  };

  const onAnimationEnd = () => {
    console.log('onAnimationEnd');
    setDisabled(false);
  };

  return (
    <>
      <Cell title="Select Time" isLink onClick={showPicker}>
        {time.hour}:{time.minute}
      </Cell>
      <Popup
        round
        show={show}
        position="bottom"
        safeAreaInsetBottom={false}
        closeOnClickOverlay={false}
        onAfterLeave={() => setPopDomShow(false)}
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
  );
}
```


### Style `v2.3.7`

`activeStyle` can modify the style of the selected item; `columnStyles` can set the style of each column; `fontStyles` can set the text style for each column.

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
      showToolbar={false}
      type="datetime"
      value={new Date(2018, 2, 31).getTime()}
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
  );
}
```

## API

### Props

| Parameter            | Description                                                                | Type                       | Default    |
| -------------------- | -------------------------------------------------------------------------- | -------------------------- | ---------- |
| cancelButtonText | Cancel button text | _string_ | `Cancel` |
| confirmButtonText | Confirm button text | _string_ | `Confirm` |
| filter | Option filter function (`type` possible values are `year`, `month`, `day`, `hour`, `minute`) | _(type, values) => values_ | - |
| itemHeight | Option height | _number_ | `44` |
| loading | Whether to show loading state | _boolean_ | `false` |
| locale | Set time unit | Locale |  |
| maxDate | Maximum selectable time, precise to the minute | _number_ | Ten years later |
| maxHour | Maximum selectable hour, for the `time` type | _number_ | `23` |
| maxMinute | Maximum selectable minute, for the `time` type | _number_ | `59` |
| minDate | Minimum selectable time, precise to the minute | _number_ | Ten years ago |
| minHour | Minimum selectable hour, for the `time` type | _number_ | `0` |
| minMinute | Minimum selectable minute, for the `time` type | _number_ | `0` |
| showToolbar | Whether to display the top toolbar | _boolean_ | `true` |
| title | Top toolbar title | _string_ | `''` |
| type | Type, options are `date`, `time`, `year-month`<br><strong>dynamic modification not recommended</strong> | _string_ | `datetime` |
| value | Current selected value | _string \| number \| Date_ | - |
| visibleItemCount | Number of visible options | _number_ | `6` |
| formatterMap `v2.2.0` | String replacement (`type` possible values are `year`, `month`, `day`, `hour`, `minute`) | _Record<type, string \| Record<string, string>>_ | - |
| changeAnimation `v2.2.0` | Whether the component needs an animation transition effect when the selected value changes | _boolean_ | `true` |
| is12HourClock `v2.2.0` | When setting `type: 'time'`, this property can enable the 12-hour selection mode | _boolean_ | `false` |
| amText `v2.2.0` | Text for AM in 12-hour selection mode | _string_ | `AM` |
| pmText `v2.2.0` | Text for PM in 12-hour selection mode | _string_ | `PM` |
| columnsOrder `v2.2.0` | Set the order of columns, same as the `flex order` property, only changing the order from a styling perspective, not the logic | _string[]_ | `[]` |
| animationTime `v2.3.7` | Transition animation and the delay time for selection callback (Unit: ms) | _number_ | `800` |
| columnStyles `v2.3.7` | Style of any column | _Record\<string, string>_ | - |
| fontStyles `v2.3.7` | Font style of any column | _Record\<string, string>_ | - |
| activeStyle `v2.3.7` | Selected Item Style | _string_ | - |

### Events

| Event Name       | Description                                    | Callback Parameters |
| ---------------- | ---------------------------------------------- | ------------------- |
| onCancel | Event triggered when clicking the cancel button | - |
| onChange | Event triggered when the value changes | Component instance |
| onConfirm | Event triggered when clicking the confirm button | Current value |
| onInput | Event triggered when the value changes | Current value |
| onAnimationStart `v2.3.2` | Component internal animation starts | - |
| onAnimationEnd `v2.3.2` | The internal animation of the component has ended. | - |

### Change Event

In the `change` event, you can get the component instance to perform corresponding updates and other operations on the component:

| Function                        | Description                                   |
| ------------------------------- | --------------------------------------------- |
| getColumnValue(index) | Get the value selected in the corresponding column |
| getColumnValues(index) | Get all candidate values in the corresponding column |
| getValues() | Get the selected values in all columns, returning an array |
| setColumnValue(index, value) | Set the value selected in the corresponding column |
| setColumnValues(index, values) | Set all candidate values in the corresponding column |
| setValues(values) | `values` is an array, set the selected values in all columns |

### External Style Classes

| Class Name       | Description          |
| ---------------- | --------------------- |
| activeClass | Selected item class |
| columnClass | Column class |
| toolbarClass | Top toolbar class |

### Locale Structure

| Attribute | Description    |
| --------- | -------------- |
| day | Day unit |
| hour | Hour unit |
| minute | Minute unit |
| month | Month unit |
| second | Second unit |
| year | Year unit |

### Style Variables

Please refer to the picker component documentation for style variable descriptions.