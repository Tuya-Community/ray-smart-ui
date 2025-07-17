---
category: 数据录入
---

# Radio 单选框

### 介绍

在一组备选项中进行单选。

### 引入

```jsx
import { Radio, RadioGroup } from '@ray-js/smart-ui';
```

## 代码演示

### 基础用法

通过`value`绑定值当前选中项的 name 。

```jsx
import { Radio, RadioGroup } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [radio, setRadio] = useState('1');

  const onChange = event => {
    setRadio(event.detail);
  };

  return (
    <RadioGroup value={radio} onChange={onChange}>
      <Radio name="1">单选框 1</Radio>
      <Radio name="2">单选框 2</Radio>
    </RadioGroup>
  );
}
```

### 水平排列

将`direction`属性设置为`horizontal`后，单选框组会变成水平排列。

```jsx
import { Radio, RadioGroup } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [radio, setRadio] = useState('1');

  const onChange = event => {
    setRadio(event.detail);
  };

  return (
    <RadioGroup value={radio} onChange={onChange} direction="horizontal">
      <Radio name="1">单选框 1</Radio>
      <Radio name="2">单选框 2</Radio>
    </RadioGroup>
  );
}
```

### 禁用状态

通过`disabled`属性禁止选项切换，在`Radio`上设置`disabled`可以禁用单个选项。

```jsx
import { Radio, RadioGroup } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [radio, setRadio] = useState('1');

  const onChange = event => {
    setRadio(event.detail);
  };

  return (
    <RadioGroup disabled value={radio} onChange={onChange}>
      <Radio name="1">单选框 1</Radio>
      <Radio name="2">单选框 2</Radio>
    </RadioGroup>
  );
}
```

### 自定义形状

将`shape`属性设置为`square`，单选框的形状会变成方形。

```jsx
import { Radio, RadioGroup } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [radio, setRadio] = useState('1');

  const onChange = event => {
    setRadio(event.detail);
  };

  return (
    <RadioGroup value={radio} onChange={onChange}>
      <Radio name="1" shape="square">
        单选框 1
      </Radio>
      <Radio name="2" shape="square">
        单选框 2
      </Radio>
    </RadioGroup>
  );
}
```

### 自定义颜色

通过`checkedColor`属性设置选中状态的图标颜色。

```jsx
import { Radio, RadioGroup } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [radio, setRadio] = useState('1');

  const onChange = event => {
    setRadio(event.detail);
  };

  return (
    <RadioGroup value={radio} onChange={onChange}>
      <Radio name="1" checkedColor="#07c160">
        单选框 1
      </Radio>
      <Radio name="2" checkedColor="#07c160">
        单选框 2
      </Radio>
    </RadioGroup>
  );
}
```

### 自定义大小

通过`iconSize`属性可以自定义图标的大小。

```jsx
import { Radio, RadioGroup } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [radio, setRadio] = useState('1');

  const onChange = event => {
    setRadio(event.detail);
  };

  return (
    <RadioGroup value={radio} onChange={onChange}>
      <Radio name="1" iconSize="24px">
        单选框 1
      </Radio>
      <Radio name="2">单选框 2</Radio>
    </RadioGroup>
  );
}
```

### 自定义图标

通过`icon`插槽自定义图标，需要设置`useIconSlot`属性。

```jsx
import { Radio, RadioGroup, Image } from '@ray-js/smart-ui';
import React, { useState } from 'react';

const icon = {
  normal: 'https://static1.tuyacn.com/static/tuya-miniapp-doc/_next/static/images/logo-small.png',
  active: 'https://static1.tuyacn.com/static/tuya-miniapp-doc/_next/static/images/logo-small.png',
};

export default function Demo() {
  const [radio4, setRadio] = useState('1');

  const onChange = event => {
    setRadio(event.detail);
  };

  return (
    <RadioGroup value={radio4} dataKey="radio4" onChange={onChange}>
      <Radio name="1" useIconSlot>
        自定义图标
        <Image
          slot="icon"
          src={radio4 === '1' ? icon.active : icon.normal}
          width="20px"
          height="20px"
          fit="cover"
        />
      </Radio>
      <Radio name="2" useIconSlot>
        自定义图标
        <Image
          slot="icon"
          src={radio4 === '2' ? icon.active : icon.normal}
          width="20px"
          height="20px"
          fit="cover"
        />
      </Radio>
    </RadioGroup>
  );
}
```

### 禁用文本点击

通过设置`labelDisabled`属性可以禁用单选框文本点击。

```jsx
import { Radio, RadioGroup } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [radioLabel, setRadio] = useState('1');

  const onChange = event => {
    setRadio(event.detail);
  };

  return (
    <RadioGroup value={radioLabel} onChange={onChange}>
      <Radio labelDisabled name="1">
        单选框 1
      </Radio>
      <Radio label-disabled name="2">
        单选框 2
      </Radio>
    </RadioGroup>
  );
}
```

### 与 Cell 组件一起使用

此时你需要再引入`Cell`和`CellGroup`组件。

```jsx
import { Radio, RadioGroup, CellGroup, Cell } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [radio, setRadio] = useState('1');

 const onChange = (event) => {
    setRadio(event.detail);
  };

 const onClick = (event) => {
    const { name } = event.currentTarget.dataset;
    setRadio(name);
  };
  return (
    <RadioGroup value={radio}>
      <CellGroup>
        <Cell title="单选框 1" clickable dataName="1" onClick={onClick}>
          <Radio slot="right-icon" name="1" />
        </Cell>
        <Cell title="单选框 2" clickable dataName="2" onClick={onClick}>
          <Radio slot="right-icon" name="2" />
        </Cell>
      </CellGroup>
    </RadioGroup>
  );
}
```

## API

### RadioGroup Props

| 参数      | 说明                   | 类型      | 默认值     |
| --------- | ---------------------- | --------- | ---------- |
| name      | 在表单内提交时的标识符 | _string_  | -          |
| value     | 当前选中项的标识符     | _any_     | -          |
| disabled  | 是否禁用所有单选框     | _boolean_ | `false`    |
| direction | 排列方向，可选值为     | _string_  | `vertical` |

### Radio Props

| 参数          | 说明                      | 类型               | 默认值    |
| ------------- | ------------------------- | ------------------ | --------- |
| name          | 标识符                    | _string_           | -         |
| shape         | 形状，可选值为 `square`   | _string_           | `round`   |
| disabled      | 是否为禁用状态            | _boolean_          | `false`   |
| labelDisabled | 是否禁用文本内容点击      | _boolean_          | `false`   |
| labelPosition | 文本位置，可选值为 `left` | _string_           | `right`   |
| iconSize      | 图标大小，默认单位为`px`  | _string \| number_ | `20px`    |
| checkedColor  | 选中状态颜色              | _string_           | `#1989fa` |
| useIconSlot   | 是否使用 icon 插槽        | _boolean_          | `false`   |

### Radio Event

| 事件名   | 说明                     | 回调参数          |
| -------- | ------------------------ | ----------------- |
| onChange | 当绑定值变化时触发的事件 | 当前选中项的 name |

### Radio 外部样式类

| 类名        | 说明           |
| ----------- | -------------- |
| customClass | 根节点样式类   |
| iconClass   | 图标样式类     |
| labelClass  | 描述信息样式类 |

### RadioGroup Event

| 事件名   | 说明                     | 回调参数          |
| -------- | ------------------------ | ----------------- |
| onChange | 当绑定值变化时触发的事件 | 当前选中项的 name |
