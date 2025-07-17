<!-- ---
category: 数据录入
--- -->

# Calendar 日历

### 介绍

日历组件用于选择日期或日期区间。

### 引入

```jsx
import { Calendar, Cell } from '@ray-js/smart-ui';
```

## 代码演示

### 选择单个日期

下面演示了结合单元格来使用日历组件的用法，日期选择完成后会触发`confirm`事件。

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
      <Cell title="选择单个日期" value={date} onClick={onDisplay} />
      <Calendar show={show} onClose={onClose} onConfirm={onConfirm} />
    </View>
  );
}
```

### 选择多个日期

设置`type`为`multiple`后可以选择多个日期，此时`confirm`事件返回的 date 为数组结构，数组包含若干个选中的日期。

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
    setText(`选择了 ${event.detail.length} 个日期`);
  };

  const onClose = () => {
    setShow(false);
  };
  return (
    <View>
      <Cell title="选择多个日期" value={text} onClick={onDisplay} />
      <Calendar show={show} type="multiple" onClose={onClose} onConfirm={onConfirm} />
    </View>
  );
}
```

### 选择日期区间

设置`type`为`range`后可以选择日期区间，此时`confirm`事件返回的 date 为数组结构，数组第一项为开始时间，第二项为结束时间。

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
      <Cell title="选择日期区间" value={text} onClick="onDisplay" />
      <Calendar show={show} type="range" onClose={onClose} bind:confirm={onConfirm} />
    </View>
  );
}
```

> Tips: 默认情况下，日期区间的起止时间不能为同一天，可以通过设置 allow-same-day 属性来允许选择同一天。

### 快捷选择

将`showConfirm`设置为`false`可以隐藏确认按钮，这种情况下选择完成后会立即触发`confirm`事件。

```jsx
<Calendar show={show} showConfirm={false} />
```

### 自定义颜色

通过`color`属性可以自定义日历的颜色，对选中日期和底部按钮生效。

```jsx
<Calendar show={show} color="#07c160" />
```

### 自定义日期范围

通过`minDate`和`maxDate`定义日历的范围，需要注意的是`minDate`和`maxDate`的区间不宜过大，否则会造成严重的性能问题。

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

### 自定义按钮文字

通过`confirmText`设置按钮文字，通过`confirmDisabledText`设置按钮禁用时的文字。

```jsx
<Calendar show={show} type="range" confirmText="完成" confirmDisabledText="请选择结束时间" />
```

### 自定义日期文案

通过传入`formatter`函数来对日历上每一格的内容进行格式化

```jsx
<Calendar show={show} type="range" formatter={formatter} />
```

```jsx
const formatter = day => {
  const month = day.date.getMonth() + 1;
  const date = day.date.getDate();

  if (month === 5) {
    if (date === 1) {
      day.topInfo = '劳动节';
    } else if (date === 4) {
      day.topInfo = '五四青年节';
    } else if (date === 11) {
      day.text = '今天';
    }
  }

  if (day.type === 'start') {
    day.bottomInfo = '入住';
  } else if (day.type === 'end') {
    day.bottomInfo = '离店';
  }

  return day;
};
```

### 自定义弹出位置

通过`position`属性自定义弹出层的弹出位置，可选值为`top`、`left`、`right`。

```jsx
<Calendar show={show} round="false" position="right" />
```

### 日期区间最大范围

选择日期区间时，可以通过`max-range`属性来指定最多可选天数，选择的范围超过最多可选天数时，会弹出相应的提示文案。

```jsx
<Calendar type="range" max-range={3} />
```

### 自定义周起始日

通过 `first-day-of-week` 属性设置一周从哪天开始。

```jsx
<Calendar first-day-of-week={1} />
```

### 平铺展示

将`poppable`设置为`false`，日历会直接展示在页面内，而不是以弹层的形式出现。

```jsx
<Calendar title="日历" poppable={false} show-confirm={false} class="calendar" />
```

```css
.calendar {
  --calendar-height: 618px;
}
```

> Tips: 注意，在自定义 calendar 的高度时，需要确保，滚动到当前月份时，所有的日期要展现在.Calendar\_\_body 内，否则可能会出现滚动时头部月份与当前月份不同步的情况。目前平铺型预设高度 618px,弹窗型高度 90%。

## API

### Props

| 参数                | 说明                                                                                               | 类型                               | 默认值             |
| ------------------- | -------------------------------------------------------------------------------------------------- | ---------------------------------- | ------------------ |
| color               | 主题色，对底部按钮和选中日期生效                                                                   | _string_                           | `#ee0a24`          |
| confirmDisabledText | 确认按钮处于禁用状态时的文字                                                                       | _string_                           | `确定`             |
| confirmText         | 确认按钮的文字                                                                                     | _string_                           | `确定`             |
| defaultDate         | 默认选中的日期，`type`为`multiple`或`range`时为数组，传入 `null` 表示默认不选择                    | _timestamp \| timestamp[] \| null_ | 今天               |
| firstDayOfWeek      | 设置周起始日                                                                                       | _0~6_                              | `0`                |
| formatter           | 日期格式化函数                                                                                     | _(day: Day) => Day_                | -                  |
| locale `1.2.0`      | 多语言包                                                                                           | _Object_                           | 详见 Locale Props  |
| maxDate             | 可选择的最大日期                                                                                   | _timestamp_                        | 当前日期的六个月后 |
| minDate             | 可选择的最小日期                                                                                   | _timestamp_                        | 当前日期           |
| poppable            | 是否以弹层的形式展示日历                                                                           | _boolean_                          | `true`             |
| readonly            | 是否为只读状态，只读状态下不能选择日期                                                             | _boolean_                          | `false`            |
| rowHeight           | 日期行高                                                                                           | _number \| string_                 | `64`               |
| showConfirm         | 是否展示确认按钮                                                                                   | _boolean_                          | `true`             |
| showMark            | 是否显示月份背景水印                                                                               | _boolean_                          | `true`             |
| showSubtitle        | 是否展示日历副标题（年月）                                                                         | _boolean_                          | `true`             |
| showTitle           | 是否展示日历标题                                                                                   | _boolean_                          | `true`             |
| title               | 日历标题                                                                                           | _string_                           | `日期选择`         |
| type                | 选择类型:<br>`single`表示选择单个日期，<br>`multiple`表示选择多个日期，<br>`range`表示选择日期区间 | _string_                           | `single`           |

### Locale Props

默认配置为 en，配置参数参考下面的 JSON

```js
{
  shortWeekDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], // 周名称
  subFormatter: 'YYYY-MM', // 副标题格式化，只允许YYYYMM
  rangeStart: 'Start',// 选择范围的开始文案
  rangeEnd: 'End', // 选择范围的结束文案
}
```

### Poppable Props

当 Calendar 的 `poppable` 为 `true` 时，支持以下 props:

| 参数                | 说明                                    | 类型      | 默认值   |
| ------------------- | --------------------------------------- | --------- | -------- |
| closeOnClickOverlay | 是否在点击遮罩层后关闭                  | _boolean_ | `true`   |
| position            | 弹出位置，可选值为 `top` `right` `left` | _string_  | `bottom` |
| round               | 是否显示圆角弹窗                        | _boolean_ | `true`   |
| safeAreaInsetBottom | 是否开启底部安全区适配                  | _boolean_ | `true`   |
| show                | 是否显示日历弹窗                        | _boolean_ | `false`  |

### Range Props

当 Calendar 的 `type` 为 `range` 时，支持以下 props:

| 参数            | 说明                                         | 类型               | 默认值                   |
| --------------- | -------------------------------------------- | ------------------ | ------------------------ |
| allowSameDay    | 是否允许日期范围的起止时间为同一天           | _boolean_          | `false`                  |
| maxRange        | 日期区间最多可选天数，默认无限制             | _number \| string_ | -                        |
| rangePrompt     | 范围选择超过最多可选天数时的提示文案         | _string \| null_   | `选择天数不能超过 xx 天` |
| showRangePrompt | 范围选择超过最多可选天数时，是否展示提示文案 | _boolean_          | `true`                   |

### Multiple Props

当 Calendar 的 `type` 为 `multiple` 时，支持以下 props:

| 参数     | 说明             | 类型               | 默认值 |
| -------- | ---------------- | ------------------ | ------ |
| minRange | 日期最少可选天数 | _number \| string_ | `1`    |

### Day 数据结构

日历中的每个日期都对应一个 Day 对象，通过`formatter`属性可以自定义 Day 对象的内容。

| 键名       | 说明                                                               | 类型     |
| ---------- | ------------------------------------------------------------------ | -------- |
| bottomInfo | 下方的提示信息                                                     | _string_ |
| className  | 自定义 className                                                   | _string_ |
| date       | 日期对应的 Date 对象                                               | _Date_   |
| text       | 中间显示的文字                                                     | _string_ |
| topInfo    | 上方的提示信息                                                     | _string_ |
| type       | 日期类型，可选值为`selected`、`start`、`middle`、`end`、`disabled` | _string_ |

### Events

| 事件名          | 说明                                                              | 回调参数                |
| --------------- | ----------------------------------------------------------------- | ----------------------- |
| onClickSubtitle | 点击日历副标题时触发                                              |                         |
| onClose         | 关闭弹出层时触发                                                  | -                       |
| onClosed        | 关闭弹出层且动画结束后触发                                        | -                       |
| onConfirm       | 日期选择完成后触发，若`showConfirm`为`true`，则点击确认按钮后触发 | _value: Date \| Date[]_ |
| onOpen          | 打开弹出层时触发                                                  | -                       |
| onOpened        | 打开弹出层且动画结束后触发                                        | -                       |
| onOverRange     | 范围选择超过最多可选天数时触发                                    | -                       |
| onSelect        | 点击任意日期时触发                                                | _value: Date \| Date[]_ |
| onUnselect      | 当 Calendar 的 `type` 为 `multiple` 时,点击已选中的日期时触发     | _value: Date_           |

### Slots

| 名称   | 说明               |
| ------ | ------------------ |
| footer | 自定义底部区域内容 |
| title  | 自定义标题         |

### 方法

通过 selectComponent 可以获取到 Calendar 实例并调用实例方法。

| 方法名 | 说明                   | 参数 | 返回值 |
| ------ | ---------------------- | ---- | ------ |
| reset  | 重置选中的日期到默认值 | -    | -      |
