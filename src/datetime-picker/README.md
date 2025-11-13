---
category: 数据录入
assets: CountdownActionSheet,LampScheduleSetFunction
---

# DateTimePicker 时间选择

### 介绍

用于选择时间，支持日期、时分等时间维度，通常与 [弹出层](/material/smartui?comId=popup) 组件配合使用。

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

`value` 为时间戳；通过传入 `locale` 属性加入单位描述；通过传入 `formatterMap` `v2.2.0` 属性可以对内部的日期进行替换。

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
        day: '{{day}}天'
      }}
      fontStyles={{
        day: {
          fontFamily: 'Manrope',
        },
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


### 选择时间-12小时模式`v2.6.0`

当设置`type: 'time'`时，可以开启`is12HourClock`属性实现12小时选择模式；`amText`、`pmText` 可以分别设置上午和下午的文案。  
`columnsOrder`属性可以设置列的顺序，对应列的order越大，就会越靠后，同css的`flex order` 属性，只是从样式层面改变列的顺序，逻辑还是不变。  
`fontStyles` 和 `columnStyles` 内的 `12HourClock` `v2.6.0` 可以修改对应12小时时区的样式。

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

### 关闭值改变动画 `v2.2.0`

`changeAnimation` 属性设置为`false`可以关闭因为`value`属性改变导致的组件更新动画效果。  

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
      onInput={onTimeInput} 
    />
  );
}
```

### 嵌套 Popup `v2.3.2`

当是Popup嵌套时我们往往会有确定和取消事件，为了方式关闭弹框的时候动画没有执行完毕，需要使用 `onAnimationStart` 和 `onAnimationEnd` 事件对 `onConfirm` 的回调执行做一个禁用的效果，等到动画执行完毕在可以点击确认。  
其次为了解决用户点击取消后的恢复之前选中效果，可以设置 `show: false` 时 `value="-1:00"` 这样在次打开弹框时由于`value`不一样会触发组件重新定位到当前选中的时间。

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
      <Cell title="选择时间" isLink onClick={showPicker}>
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

### 样式风格 `v2.3.7`

`activeStyle` 可以修改选中项的样式；`columnStyles` 可以设置每一列的样式；`fontStyles` 可以设置每一列文字的样式。

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
          background: 'rgba(0, 0, 0, 0.1)',
        },
      }}
      fontStyles={{
        month: {
          color: 'rgb(23, 138, 237)',
        },
      }}
      activeStyle={{
        color: 'rgb(235, 87, 41)',
      }}
      onInput={onDateTimeInput}
    />
  );
}
```

## API

### Props

| 参数                | 说明                                                                           | 类型                       | 默认值     |
| ------------------- | ------------------------------------------------------------------------------ | -------------------------- | ---------- |
| cancelButtonText | 取消按钮文字 | _string_ | `取消` |
| confirmButtonText | 确认按钮文字 | _string_ | `确认` |
| itemHeight | 选项高度 | _number_ | `44` |
| loading | 是否显示加载状态 | _boolean_ | `false` |
| locale | 设置时间单位 | Locale |  |
| maxDate | 可选的最大时间，精确到分钟 | _number_ | 十年后 |
| maxHour | 可选的最大小时，针对 time 类型 | _number_ | `23` |
| maxMinute | 可选的最大分钟，针对 time 类型 | _number_ | `59` |
| minDate | 可选的最小时间，精确到分钟 | _number_ | 十年前 |
| minHour | 可选的最小小时，针对 time 类型 | _number_ | `0` |
| minMinute | 可选的最小分钟，针对 time 类型 | _number_ | `0` |
| showToolbar | 是否显示顶部栏 | _boolean_ | `true` |
| title | 顶部栏标题 | _string_ | `''` |
| type | 类型，可选值为 `date` `time` `year-month` <br> <strong>不建议动态修改</strong> | _string_ | `datetime` |
| value | 当前选中值 | _string \| number \| Date_ | - |
| visibleItemCount | 可见的选项个数 | _number_ | `6` |
| formatterMap `v2.2.0` | 字符串替换(`type` 可选值为 `year`, `month`, `day`, `hour`, `minute`) | _Record<type, string \| Record<string, string>>_ | - |
| changeAnimation `v2.2.0` | 组件受数据驱动选择值改变时是否需要动画过度效果（不包含手指交互滚动的动画） | _boolean_ | `false` |
| is12HourClock `v2.6.0` | 当设置 `type: 'time'` 时，此属性可开启12小时选择模式 | _boolean_ | `false` |
| amText `v2.2.0` | 12小时选择模式时上午的文案 | _string_ | `AM` |
| pmText `v2.2.0` | 12小时选择模式时下午的文案 | _string_ | `PM` |
| columnsOrder `v2.2.0` | 设置列的顺序，同`flex order`属性，只是从样式角度修改列的顺序，逻辑还是不变 | _string[]_ | `[]` |
| animationTime `v2.3.7` | 过渡动画以及选择回调延迟的时间(单位ms) | _number_ | `800` `v2.3.7` `300` `v2.6.0` |
| columnStyles `v2.3.7` | 任意列的样式 | _Record\<string, string>_ | - |
| fontStyles `v2.3.7` | 任意列的字体样式 | _Record\<string, string>_ | - |
| activeStyle `v2.3.7` | 选中项的样式 | _string_ | - |

### Events

| 事件名称     | 说明                     | 回调参数   |
| ------------ | ------------------------ | ---------- |
| onCancel | 点击取消按钮时触发的事件 | - |
| onChange | 当值变化时触发的事件 | 组件实例 |
| onConfirm | 点击完成按钮时触发的事件 | 当前 value |
| onInput | 当值变化时触发的事件 | 当前 value |
| onAnimationStart `v2.3.2` | 组件内部动画开始 | - |
| onAnimationEnd `v2.3.2` | 组件内部动画结束 | - |

### change 事件

在`change`事件中，可以获取到组件实例，对组件进行相应的更新等操作：

| 函数                           | 说明                                       |
| ------------------------------ | ------------------------------------------ |
| getColumnValue(index) | 获取对应列中选中的值 |
| getColumnValues(index) | 获取对应列中所有的备选值 |
| getValues() | 获取所有列中被选中的值，返回一个数组 |
| setColumnValue(index, value) | 设置对应列中选中的值 |
| setColumnValues(index, values) | 设置对应列中所有的备选值 |
| setValues(values) | `values`为一个数组，设置所有列中被选中的值 |

### 外部样式类

| 类名          | 说明         |
| ------------- | ------------ |
| activeClass | 选中项样式类 |
| columnClass | 列样式类 |
| toolbarClass | 顶部栏样式类 |

### Locale 结构

| 属性   | 说明     |
| ------ | -------- |
| day | 日单位 |
| hour | 小时单位 |
| minute | 分钟单位 |
| month | 月单位 |
| second | 秒单位 |
| year | 年单位 |


### 样式变量

其他CSS变量请参考 picker 组件文档说明 - 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/material/smartui?comId=config-provider)。

| 名称                          | 默认值                                 | 描述 |
| ----------------------------- | -------------------------------------- | ---- |
| --hairline-border-image-color `v2.6.0` | _var(--smart-ui-border-image, linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0)))_ | 分割线的 border-image 样式 |