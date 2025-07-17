---
category: 数据录入
---

# DateTimePicker 时间选择

### 介绍

用于选择时间，支持日期、时分等时间维度，通常与 [弹出层](#/popup) 组件配合使用。

### 引入

```jsx
import { DateTimePicker } from '@ray-js/smart-ui';
```

## 代码演示

### 选择完整时间

`value` 为时间戳。

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

### 选择日期（年月日）

`value` 为时间戳，通过传入 `locale` 属性加入单位描述。

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
        year: '年',
        month: '月',
        day: '日',
      }}
      onInput={onDateInput}
    />
  );
}
```

### 选择日期（年月）

`value` 为时间戳。

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
        year: '年',
        month: '月',
        day: '日',
      }}
      onInput={onDateInput}
    />
  );
}
```

### 选择时间

`value` 为字符串。

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

| 参数              | 说明                                                                           | 类型                       | 默认值     |
| ----------------- | ------------------------------------------------------------------------------ | -------------------------- | ---------- |
| value             | 当前选中值                                                                     | _string \| number \| Date_ | -          |
| type              | 类型，可选值为 `date` `time` `year-month` <br> <strong>不建议动态修改</strong> | _string_                   | `datetime` |
| minDate           | 可选的最小时间，精确到分钟                                                     | _number_                   | 十年前     |
| maxDate           | 可选的最大时间，精确到分钟                                                     | _number_                   | 十年后     |
| minHour           | 可选的最小小时，针对 time 类型                                                 | _number_                   | `0`        |
| maxHour           | 可选的最大小时，针对 time 类型                                                 | _number_                   | `23`       |
| minMinute         | 可选的最小分钟，针对 time 类型                                                 | _number_                   | `0`        |
| maxMinute         | 可选的最大分钟，针对 time 类型                                                 | _number_                   | `59`       |
| title             | 顶部栏标题                                                                     | _string_                   | `''`       |
| show-toolbar      | 是否显示顶部栏                                                                 | _boolean_                  | `true`     |
| loading           | 是否显示加载状态                                                               | _boolean_                  | `false`    |
| item-height       | 选项高度                                                                       | _number_                   | `44`       |
| confirmButtonText | 确认按钮文字                                                                   | _string_                   | `确认`     |
| cancelButtonText  | 取消按钮文字                                                                   | _string_                   | `取消`     |
| visibleItemCount  | 可见的选项个数                                                                 | _number_                   | `6`        |
| locale            | 设置时间单位                                                                   | Locale                     |            |

### Events

| 事件名称  | 说明                     | 回调参数   |
| --------- | ------------------------ | ---------- |
| onInput   | 当值变化时触发的事件     | 当前 value |
| onChange  | 当值变化时触发的事件     | 组件实例   |
| onConfirm | 点击完成按钮时触发的事件 | 当前 value |
| onCancel  | 点击取消按钮时触发的事件 | -          |

### change 事件

在`change`事件中，可以获取到组件实例，对组件进行相应的更新等操作：

| 函数                           | 说明                                       |
| ------------------------------ | ------------------------------------------ |
| getColumnValue(index)          | 获取对应列中选中的值                       |
| setColumnValue(index, value)   | 设置对应列中选中的值                       |
| getColumnValues(index)         | 获取对应列中所有的备选值                   |
| setColumnValues(index, values) | 设置对应列中所有的备选值                   |
| getValues()                    | 获取所有列中被选中的值，返回一个数组       |
| setValues(values)              | `values`为一个数组，设置所有列中被选中的值 |

### 外部样式类

| 类名         | 说明         |
| ------------ | ------------ |
| activeClass  | 选中项样式类 |
| toolbarClass | 顶部栏样式类 |
| columnClass  | 列样式类     |

### Locale 结构

| 属性   | 说明     |
| ------ | -------- |
| year   | 年单位   |
| month  | 月单位   |
| day    | 日单位   |
| hour   | 小时单位 |
| minute | 分钟单位 |
| second | 秒单位   |
