---
category: 数据录入
new: true
---

# Calendar 日历

### 介绍

v2.0.0开始加入，日历组件用于选择日期或日期区间。

### 引入

```jsx
import { Calendar } from '@ray-js/smart-ui';
```

## 代码演示

### 选择单个日期

下面演示了结合单元格来使用日历组件的用法，日期选择完成后会触发`select`事件。

```jsx
import React, { useState } from 'react';
import { Calendar } from '@ray-js/smart-ui';

export default function Demo() {
  const [curDayDate, setCurDayDate] = useState<any>(new Date(2024, 0, 15).getTime());
  const minDayDate = new Date(2024, 0, 4).getTime();
  const maxDayDate = new Date(2024, 1, 20).getTime();

  const locale = {
    shortWeekDays: [
      '日',
      '一',
      '二',
      '三',
      '四',
      '五',
      '六',
    ],
    subFormatter: 'YYYY' + "年" + 'MM' + "月",
  }
  
  return (
    <Calendar
      title="日历"
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

### 自定义日期样式

使用 `dayClassMap` 属性可设置指定日期的样式,

```jsx
import React, { useState } from 'react';
import { Calendar } from '@ray-js/smart-ui';

export default function Demo() {
  const [curDayDate, setCurDayDate] = useState<any>(new Date(2024, 0, 15).getTime());
  const minDayDate = new Date(2024, 0, 4).getTime();
  const maxDayDate = new Date(2024, 1, 20).getTime();

  const locale = {
    shortWeekDays: [
      '日',
      '一',
      '二',
      '三',
      '四',
      '五',
      '六',
    ],
    subFormatter: 'YYYY' + "年" + 'MM' + "月",
  }
  
  return (
    <Calendar
      title="日历"
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

在 `app.less` 文件中定义 css 类：

> 注意 css 类必须放在 app.less 文件中才可生效

```css
.calendar-disabled {
  opacity: 0.5;
  pointer-events: none;
}
```

### 选择单个周范围

设置`type`为`week`后可以选择一个周的时间范围，此时`select`事件返回的 date 为数组结构，数组包含开始和结束选中的日期。

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
      '日',
      '一',
      '二',
      '三',
      '四',
      '五',
      '六',
    ],
    subFormatter: 'YYYY' + "年" + 'MM' + "月",
  }
  
  return (
    <Calendar
      title="日历"
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

### 选择时间段

设置`type`为`range`后可以选择日期区间，此时`select`事件返回的 date 为数组结构，数组第一项为开始时间，第二项为结束时间。

```jsx
import React, { useState } from 'react';
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
      '日',
      '一',
      '二',
      '三',
      '四',
      '五',
      '六',
    ],
    subFormatter: 'YYYY' + "年" + 'MM' + "月",
  }
  
  return (
    <Calendar
      title="日历"
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

### 选择月份

设置`type`为`month`后可以选择月份，此时`select`事件返回的 date 为当月的第一天。

```jsx
import React, { useState } from 'react';
import { Calendar } from '@ray-js/smart-ui';

export default function Demo() {
  const [curMonthDate, setCurMonthDate] = useState(new Date(2024, 6, 1).getTime());
  const minMonthDate = new Date(2024, 2, 1).getTime();
  const maxMonthDate = new Date(2025, 9, 31).getTime();

  const locale2 = {
    subFormatter: 'YYYY' + '年',
    monthsFormatter: [
      '1月',
      '2月',
      '3月',
      '4月',
      '5月',
      '6月',
      '7月',
      '8月',
      '9月',,
      '10月',
      '11月',
      '12月',
    ],
  };
  
  return (
    <Calendar
      title="选择月份"
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


### 选择年份

设置`type`为`year`后可以选择年份，此时`select`事件返回的 date 为当年的第一天。

```jsx
import React, { useState } from 'react';
import { Calendar } from '@ray-js/smart-ui';

export default function Demo() {
  const [curYearDate, setCurYearDate] = useState(new Date(2017, 6, 1).getTime());
  const minYearDate = new Date(2012, 0, 1).getTime();
  const maxYearDate = new Date(2029, 10, 31).getTime();
  
  return (
    <Calendar
      title='日历'
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

### 弹窗模式选择某天

设置 `poppable` 为 `true` 可使用弹窗中的日历选择器：

```jsx
import React, { useState } from 'react';
import { Calendar, Cell } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  const [showDayPicker, setShowDayPicker] = useState(false);
  const [curDayDate, setCurDayDate] = useState<any>(new Date(2024, 0, 15).getTime());
  const minDayDate = new Date(2024, 0, 4).getTime();
  const maxDayDate = new Date(2026, 1, 20).getTime();

  function formatDate(date) {
    if (date) {
      const dateValue = new Date(date);
      return `${dateValue.getMonth() + 1}/${dateValue.getDate()}`;
    }
    return '';
  }

  return (
    <View>
      <Cell
        isLink
        title="选择单个日期"
        onClick={() => setShowDayPicker(!showDayPicker)}
        value={formatDate(curDayDate)}
      />
      <Calendar
        title="日历"
        minDate={minDayDate}
        maxDate={maxDayDate}
        defaultDate={curDayDate}
        confirmText="确定"
        showConfirm
        show={showDayPicker}
        onConfirm={event => {
          setCurDayDate(event.detail as any);
          setShowDayPicker(false);
        }}
        poppable
      />
    </View>
  );
}
```

### 自定义颜色

通过`color`属性可以自定义日历的颜色，对选中日期和底部按钮生效。

```jsx
<Calendar color="#07c160" />
```

### 自定义日期范围

通过`minDate`和`maxDate`定义日历的范围，需要注意的是`minDate`和`maxDate`的区间不宜过大，否则会造成严重的性能问题。

```jsx
<Calendar minDate={minDate} maxDate={maxDate} />
```

```jsx
const [minDate, setMinDate] = useState(Date.now());
const [maxDate, setMaxDate] = useState(
  new Date(new Date().getFullYear(), new Date().getMonth() + 6, new Date().getDate()).getTime()
);
```

### 自定义按钮文字

通过`confirmText`设置按钮文字

```jsx
<Calendar type="range" confirmText="完成" />
```

### 自定义弹出位置

通过`position`属性自定义弹出层的弹出位置，可选值为`top`、`left`、`right`。

```jsx
<Calendar show={show} round="false" position="right" />
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

## API

### locale
默认配置为 en，配置参数参考下面的JSON
```js
{
  shortWeekDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], // 周名称
  subFormatter: 'YYYY-MM', // 副标题格式化，只允许YYYYMM
}
```

### Props

| 参数                    | 说明                                                                | 类型                               | 默认值              |
| ----------------------- | ------------------------------------------------------------------- | ---------------------------------- | ------------------- |
| color | 主题色，对底部按钮和选中日期生效 | _string_ | `#ee0a24` |
| confirmText | 确认按钮的文字 | _string_ | `确定` |
| defaultDate `v1.10.21` | 默认选中的日期，`type`为`range`时为数组，传入 `null` 表示默认不选择 | _timestamp \| timestamp[] \| null_ | 今天 |
| firstDayOfWeek | 设置周起始日 | _0~6_ | `0` |
| locale | 多语言包 | _Object_ | [默认配置](#locale) |
| maxDate | 可选择的最大日期 | _timestamp_ | 当前日期的六个月后 |
| minDate | 可选择的最小日期 | _timestamp_ | 当前日期 |
| poppable | 是否以弹层的形式展示日历 | _boolean_ | `true` |
| readonly `v1.9.1` | 是否为只读状态，只读状态下不能选择日期 | _boolean_ | `false` |
| rowHeight | 日期行高 | _number \| string_ | `64` |
| showConfirm | 是否展示确认按钮 | _boolean_ | `true` |
| showSubtitle | 是否展示日历副标题（年月） | _boolean_ | `true` |
| showTitle | 是否展示日历标题 | _boolean_ | `true` |
| title | 日历标题 | _string_ | `日期选择` |
| dayClassMap `v2.1.0` | 日期单元格样式 | Object | null |
| type | 选择类型:<br>`single`表示选择单个日期，<br>`range`表示选择日期区间，<br>`week`表示选择周，<br>`month`表示选择月，<br>`year`表示选择年 | _string_ | `single` |
| headerIconColor  `2.6.0` | 头部栏左右箭头 icon 颜色 | _string_ | `rgba(0, 0, 0, 0.7)` |

### Range Props

当 Calendar 的 `type` 为 `range` 时，支持以下 props:

| 参数               | 说明                                          | 类型               | 默认值                   |
| ------------------ | --------------------------------------------- | ------------------ | ------------------------ |
| maxRange `v2.3.9` | 日期区间最多可选天数，默认无限制 | _number \| string_ | - |
| rangePrompt `v2.3.9` | 范围选择超过最多可选天数时的提示文案 | _string \| null_ | `Days selected over x days` |
| showRangePrompt `v2.3.9` | 范围选择超过最多可选天数时，是否展示提示文案 | _boolean_ | `true` |
| allowSameDay `v2.3.9` | 是否允许日期范围的起止时间为同一天 | _boolean_ | `false` |

### Poppable Props

当 Calendar 的 `poppable` 为 `true` 时，支持以下 props:

| 参数                   | 说明                                    | 类型      | 默认值   |
| ---------------------- | --------------------------------------- | --------- | -------- |
| closeOnClickOverlay | 是否在点击遮罩层后关闭 | _boolean_ | `true` |
| position | 弹出位置，可选值为 `top` `right` `left` | _string_ | `bottom` |
| round | 是否显示圆角弹窗 | _boolean_ | `true` |
| safeAreaInsetBottom | 是否开启底部安全区适配 | _boolean_ | `true` |
| show | 是否显示日历弹窗 | _boolean_ | `false` |

### Events

| 事件名                       | 说明                                                               | 回调参数                       |
| ---------------------------- | ------------------------------------------------------------------ | ------------------------------ |
| onClickSubtitle `v1.8.1` | 点击日历副标题时触发 | _WechatMiniprogram.TouchEvent_ |
| onClose | 关闭弹出层时触发 | - |
| onClosed | 关闭弹出层且动画结束后触发 | - |
| onConfirm | 日期选择完成后触发，若`show-confirm`为`true`，则点击确认按钮后触发 | _value: Date \| Date[]_ |
| onOpen | 打开弹出层时触发 | - |
| onOpened | 打开弹出层且动画结束后触发 | - |
| onOverRange | 范围选择超过最多可选天数时触发 | - |
| onSelect | 点击任意日期时触发 | _value: Date \| Date[]_ |
| onUnselect | 当 Calendar 的 `type` 为 `multiple` 时,点击已选中的日期时触发 | _value: Date_ |

### 方法

通过 selectComponent 可以获取到 Calendar 实例并调用实例方法。

| 方法名 | 说明                   | 参数 | 返回值 |
| ------ | ---------------------- | ---- | ------ |
| reset | 重置选中的日期到默认值 | - | - |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/material/smartui?comId=config-provider)。
| 名称                                          | 默认值                                         | 描述                                   |
| --------------------------------------------- | ---------------------------------------------- | -------------------------------------- |
| --calendar-background-color                   | _var(--app-B6, #fff)_                          | 日历背景色                             |
| --calendar-popup-height `v2.5.0`                       | _848rpx_                                          | 日历弹窗高度                           |
| --calendar-header-box-shadow                  | _0 2px 10px rgba(125, 126, 128, 0.16)_          | 日历头部盒子阴影                       |
| --calendar-header-title-height                | _44px_                                         | 日历头部标题高度                       |
| --calendar-header-title-font-size             | _16px_                                         | 日历头部标题字体大小                   |
| --calendar-header-title-font-color            | _var(--app-B4-N1, rgba(0, 0, 0, 1))_           | 日历头部标题字体颜色                   |
| --calendar-header-subtitle-font-size          | _16px_                                         | 日历头部副标题字体大小                 |
| --calendar-weekdays-height                    | _30px_                                         | 星期栏高度                             |
| --calendar-weekdays-font-size                 | _12px_                                         | 星期字体大小                           |
| --calendar-weekdays-font-color                | _var(--app-B4-N1, rgba(0, 0, 0, 1))_           | 星期字体颜色                           |
| --calendar-month-title-font-size              | _14px_                                         | 月份标题字体大小                       |
| --calendar-month-mark-color                   | _fade(@gray-4, 60%)_                           | 月份标记颜色                           |
| --calendar-month-mark-font-size               | _160px_                                        | 月份标记字体大小                       |
| --calendar-day-height                         | _100rpx_                                       | 日期单元格高度                         |
| --calendar-cell-item-font-size                | _15px_                                         | 日期字体大小                           |
| --calendar-cell-item-width                    | _104rpx_                                       | 日历单元格项宽度                        |
| --calendar-cell-item-height                   | _104rpx_                                       | 日历单元格项高度                        |
| --calendar-cell-item-font-color               | _var(--app-B4-N1, rgba(0, 0, 0, 1))_           | 日历单元格项字体颜色                   |
| --calendar-cell-item-border-radius            | _104rpx_                                       | 日历单元格项圆角半径                   |
| --calendar-day-font-weight                    | _500_                                          | 日期字体字重                           |
| --calendar-day-select-border-radius           | _34rpx_                                        | 选中的单元格边框圆角                   |
| --calendar-range-edge-color                   | _#fff_                                         | 日期范围边缘颜色                       |
| --calendar-range-edge-background-color        | _#3678e3_                                      | 日期范围边缘背景色                     |
| --calendar-range-middle-color                 | _#fff_                                         | 日期范围中间颜色                       |
| --calendar-range-middle-background-opacity    | _0.1_                                          | 日期范围中间背景透明度                 |
| --calendar-selected-day-size                  | _34px_                                         | 选中日期大小                           |
| --calendar-selected-day-color                 | _#fff_                                         | 选中日期文字颜色                       |
| --calendar-info-font-size                     | _10px_                                         | 日历信息字体大小                       |
| --calendar-info-line-height                   | _14px_                                         | 日历信息行高                           |
| --calendar-selected-day-background-color      | _#3678e3_                                      | 选中日期背景颜色                       |
| --calendar-day-disabled-color                 | _#c8c9cc_                                      | 禁用日期颜色                           |
| --calendar-confirm-button-height              | _36px_                                         | 确认按钮高度                           |
| --calendar-confirm-button-margin              | _7px 0_                                        | 确认按钮边距                           |
| --calendar-confirm-button-line-height         | _34px_                                         | 确认按钮行高                           |
| --calendar-text-color                         | _#000_                                         | 日历文字颜色                           |
| --calendar-header-save-color                  | _#1989fa_                                      | 日历头部保存按钮颜色                   |
| --calendar-header-icon-bg-color `2.6.0`              | _var(--app-B2-N9, rgba(0, 0, 0, 0.05))_        | 日历头部图标背景色                     |
| --calendar-header-icon-color `2.6.0`               | _var(--app-B1-N2, rgba(0, 0, 0, 0.7))_        | 日历头部图标背景色                     |
| --calendar-header-title-weight  `2.6.0`              | 600        | 日历头部标题字重                     |