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
      <Radio name="1" customClass="demo-radio-inline" />
      <Radio name="2" customClass="demo-radio-inline" />
    </RadioGroup>
  );
}
```

```css
.demo-radio-inline {
  margin: 10px 0 0 20px;
  display: inline-block !important;
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
      <Radio name="1" customClass="demo-radio-inline" />
      <Radio name="2" customClass="demo-radio-inline" />
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
      <Radio name="1" shape="square" customClass="demo-radio-inline" />
      <Radio name="2" shape="square" customClass="demo-radio-inline" />
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
      <Radio name="1" customClass="demo-radio-inline" checkedColor="#10D0D0" />
      <Radio name="2" customClass="demo-radio-inline" checkedColor="#10D0D0" />
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
      <Radio name="1" iconSize="28px" customClass="demo-radio-inline" />
      <Radio name="2" iconSize="28px" customClass="demo-radio-inline" />
    </RadioGroup>
  );
}
```

### 自定义文本

通过 children 子节点可以自定义文本内容。

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
      <Radio name="1">Radio 单选框 1</Radio>
      <Radio name="2">Radio 单选框 2</Radio>
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
      <Radio name="1" customClass="demo-radio">单选框 1</Radio>
      <Radio name="2" customClass="demo-radio">单选框 2</Radio>
    </RadioGroup>
  );
}
```

```css
.demo-radio {
  margin: 10px 0 0 20px;
}
```

### 自定义图标

通过`icon`插槽自定义图标，需要设置`useIconSlot`属性。

```jsx
import { Radio, RadioGroup, Image } from '@ray-js/smart-ui';
import React, { useState } from 'react';

const icon = {
  normal: 'https://images.tuyacn.com/content-platform/hestia/1729664215ebd89f13e54.png',
  active: 'https://images.tuyacn.com/content-platform/hestia/1730877912e76cbdb7563.png',
};

export default function Demo() {
  const [radio, setRadio] = useState('1');

  const onChange = event => {
    setRadio(event.detail);
  };

  return (
    <RadioGroup value={radio} onChange={onChange}>
      <Radio
        name="1"
        customClass="demo-radio"
        useIconSlot
        slot={{
          icon: (
            <Image
              src={radio === '1' ? icon.active : icon.normal}
              width="20px"
              height="20px"
              fit="cover"
            />
          ),
        }}
      >
        自定义 Icon
      </Radio>
      <Radio
        name="2"
        customClass="demo-radio"
        useIconSlot
        slot={{
          icon: (
            <Image
              src={radio === '2' ? icon.active : icon.normal}
              width="20px"
              height="20px"
              fit="cover"
            />
          ),
        }}
      >
        自定义 Icon
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

### 与Cell组件一起使用

此时你需要再引入`Cell`和`CellGroup`组件。

```jsx
import { Radio, RadioGroup, CellGroup, Cell } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [radio, setRadio] = useState('1');

  const onClick = event => {
    const { name } = event.currentTarget.dataset;
    setRadio(name);
  };

  return (
    <RadioGroup value={radio}>
      <CellGroup>
        <Cell
          title="Radio 1"
          clickable
          data-name="1"
          slot={{ rightIcon: <Radio name="1" /> }}
          onClick={onClick}
        />
        <Cell
          title="Radio 2"
          clickable
          data-name="2"
          slot={{ rightIcon: <Radio name="2" /> }}
          onClick={onChange}
        />
      </CellGroup>
    </RadioGroup>
  );
}
```


### 阻止默认的UI更新行为

假如你的 `UI更新` 需要在特定情况下才允许更新，如 确认框/接口行为等才允许更新，可以开启这个选项。

```jsx
import { Radio, RadioGroup } from '@ray-js/smart-ui';
import React, { useState } from 'react';
import { showModal } from '@ray-js/ray';

export default function Demo() {
  const [radio, setRadio] = useState('1');

    const onPreventDefaultChange = event => {
    const value = event.detail;
    showModal({
      content: `onChange name: ${value}`,
      showCancel: true,
      success: (res) => {
        if (res.confirm) {
          setRadioPreventDefault(value);
        }
      }
    })
  }

  return (
    <RadioGroup value={radio} preventDefault onChange={}>
      <Radio name="1">Radio 单选框 1</Radio>
      <Radio name="2">Radio 单选框 2</Radio>
    </RadioGroup>
  );
}
```

## API

### RadioGroup Props

| 参数               | 说明                            | 类型      | 默认值     |
| ------------------ | ------------------------------- | --------- | ---------- |
| direction | 排列方向，可选值为 `horizontal` | _string_ | `vertical` |
| disabled | 是否禁用所有单选框 | _boolean_ | `false` |
| name | 在表单内提交时的标识符 | _string_ | - |
| value | 当前选中项的标识符 | _any_ | - |
| preventDefault `v2.3.8` | 阻止默认的UI更新行为 | _boolean_ | `false` |

### Radio Props

| 参数           | 说明                      | 类型               | 默认值    |
| -------------- | ------------------------- | ------------------ | --------- |
| checkedColor | 选中状态颜色 | _string_ | `#1989fa` |
| disabled | 是否为禁用状态 | _boolean_ | `false` |
| iconSize | 图标大小，默认单位为`px` | _string \| number_ | `24px` |
| labelDisabled | 是否禁用文本内容点击 | _boolean_ | `false` |
| labelPosition | 文本位置，可选值为 `left` | _string_ | `right` |
| name | 标识符 | _string_ | - |
| shape | 形状，可选值为 `square` | _string_ | `round` |
| useIconSlot | 是否使用 icon 插槽 | _boolean_ | `false` |

### Radio Event

| 事件名      | 说明                     | 回调参数          |
| ----------- | ------------------------ | ----------------- |
| onChange | 当绑定值变化时触发的事件 | 当前选中项的 name |

### Radio 外部样式类

| 类名         | 说明           |
| ------------ | -------------- |
| customClass | 根节点样式类 |
| iconClass | 图标样式类 |
| labelClass | 描述信息样式类 |

### RadioGroup Event

| 事件名      | 说明                     | 回调参数          |
| ----------- | ------------------------ | ----------------- |
| onChange | 当绑定值变化时触发的事件 | 当前选中项的 name |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/material/smartui?comId=config-provider)。

| 名称                          | 默认值                                 | 描述 |
| ----------------------------- | -------------------------------------- | ---- |
| --radio-size                  | _24px_                                 | 单选框的大小 |
| --radio-border-color          | _var(--app-B6-N6, rgba(0, 0, 0, 0.2))_ | 单选框的边框颜色 |
| --radio-border-radius         | _4px_                                  | 单选框的边框圆角 |
| --radio-transition-duration   | _0.2s_                                 | 单选框的过渡持续时间 |
| --radio-label-size            | _12px_                                 | 单选框标签的字体大小 |
| --radio-label-margin          | _10px_                                 | 单选框标签的外边距 |
| --radio-label-color           | _var(--app-B6-N1, rgba(0, 0, 0, 1))_   | 单选框标签的字体颜色 |
| --radio-checked-icon-color    | _var(--app-M4, #1989fa)_               | 单选框选中状态的图标颜色 |
| --radio-disabled-label-color  | _var(--app-B6-N5, rgba(0, 0, 0, 0.3))_ | 单选框禁用状态的标签颜色 |
| --radio-disabled-opacity      | _0.3_                                  | 单选框禁用状态的透明度 |