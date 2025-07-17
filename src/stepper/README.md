---
category: 数据录入
---

# Stepper 步进器

### 介绍

步进器由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字。

### 引入

```jsx
import { Stepper } from '@ray-js/smart-ui';
```

## 代码演示

### 基础用法

通过`value`设置输入值，可以通过`onChange`事件监听到输入值的变化。

```jsx
import { Stepper } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const onChange = event => {
    console.log(event.detail);
  };

  return <Stepper value={1} onChange={onChange} />;
}
```

### 步长设置

通过`step`属性设置每次点击增加或减少按钮时变化的值，默认为`1`。

```jsx
import { Stepper } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Stepper value={1} step="2" />;
}
```

### 限制输入范围

通过`min`和`max`属性限制输入值的范围。

```jsx
import { Stepper } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Stepper value={5} min="5" max="8" />
}
```

### 限制输入整数

设置`integer`属性后，输入框将限制只能输入整数。

```jsx
import { Stepper } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Stepper value={1} integer />
}
```

### 禁用状态

通过设置`disabled`属性来禁用步进器，禁用状态下无法点击按钮或修改输入框。

```jsx
import { Stepper } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Stepper value={1} disabled />
}
```

### 关闭长按

通过设置`longpress`属性决定步进器是否开启长按手势。

```jsx
import { Stepper } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Stepper value={1} longPress={false} />
}
```

### 固定小数位数

通过设置`decimalLength`属性可以保留固定的小数位数。

```jsx
import { Stepper } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Stepper value={1} step="0.2" decimalLength={1} />
}
```

### 异步变更

如果需要异步地修改输入框的值，可以设置`asyncChange`属性，并在`onChange`事件中手动修改`value`。

```jsx
import { Stepper } from '@ray-js/smart-ui';
import React, { useState } from 'react';
import { showLoading, hideLoading } from '@ray-js/ray';

export default function Demo() {
  const [value, setValue] = useState(1);
  const onChange = event => {
    showLoading({ title: '', mask: true });

    setTimeout(() => {
      hideLoading();
      setValue(event.detail);
    }, 500);
  };

  return <Stepper value={value} asyncChange onChange={onChange} />
}
```

### 自定义大小

通过`inputWidth`属性设置输入框宽度，通过`buttonSize`属性设置按钮大小和输入框高度。

```jsx
import { Stepper } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Stepper value={1} inputWidth="40px" buttonSize="32px" />
}
```

## API

### Props

| 参数                 | 说明                                                                            | 类型               | 默认值  |
| -------------------- | ------------------------------------------------------------------------------- | ------------------ | ------- |
| name                 | 在表单内提交时的标识符                                                          | _string_           | -       |
| value                | 输入值                                                                          | _string \| number_ | 最小值  |
| min                  | 最小值                                                                          | _string \| number_ | `1`     |
| max                  | 最大值                                                                          | _string \| number_ | -       |
| step                 | 步长                                                                            | _string \| number_ | `1`     |
| integer              | 是否只允许输入整数                                                              | _boolean_          | `false` |
| disabled             | 是否禁用                                                                        | _boolean_          | `false` |
| disableInput         | 是否禁用输入框                                                                  | _boolean_          | `false` |
| asyncChange          | 是否开启异步变更，开启后需要手动控制输入值                                      | _boolean_          | `false` |
| inputWidth           | 输入框宽度，默认单位为 `px`                                                     | _string \| number_ | `32px`  |
| buttonSize           | 按钮大小，默认单位为 `px`，输入框高度会和按钮大小保持一致                       | _string \| number_ | `28px`  |
| showPlus             | 是否显示增加按钮                                                                | _boolean_          | `true`  |
| showMinus            | 是否显示减少按钮                                                                | _boolean_          | `true`  |
| decimalLength        | 固定显示的小数位数                                                              | _number_           | -       |
| theme                | 样式风格，可选值为 `round`                                                      | _string_           | -       |
| disablePlus          | 是否禁用增加按钮                                                                | _boolean_          | -       |
| disableMinus         | 是否禁用减少按钮                                                                | _boolean_          | -       |
| longPress            | 是否开启长按手势                                                                | _boolean_          | `true`  |
| alwaysEmbed | 强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效) | _boolean_          | `false` |

### Events

| 事件名      | 说明                     | 回调参数                   |
| ----------- | ------------------------ | -------------------------- |
| onChange    | 当绑定值变化时触发的事件 | event.detail: 当前输入的值 |
| onOverlimit | 点击不可用的按钮时触发   | -                          |
| onPlus      | 点击增加按钮时触发       | -                          |
| onMinus     | 点击减少按钮时触发       | -                          |
| onFocus     | 输入框聚焦时触发         | -                          |
| onBlur      | 输入框失焦时触发         | -                          |

### Slot

| 名称  | 说明     |
| ----- | -------- |
| plus  | 加号按钮 |
| minus | 减号按钮 |

### 外部样式类

| 类名        | 说明           |
| ----------- | -------------- |
| customClass | 根节点样式类   |
| inputClass  | 输入框样式类   |
| plusClass   | 加号按钮样式类 |
| minusClass  | 减号按钮样式类 |
