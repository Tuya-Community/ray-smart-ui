---
category: 数据录入
---

# Checkbox 复选框

### 介绍

在一组备选项中进行多选。

### 引入

```jsx
import { Checkbox, CheckboxGroup } from '@ray-js/smart-ui';
```

## 代码演示

### 基础用法

通过`value`绑定复选框的勾选状态。

```jsx
import { Checkbox } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [checked, setChecked] = useState(true);

  const onChange = event => {
    setChecked(event.detail);
  };

  const onChange2 = event => {
    setChecked(!event.detail);
  };

  return (
    <>
      <Checkbox
        value={checked}
        customClass="demo-checkbox-inline"
        onChange={onChange}
      />
      <Checkbox
        value={!checked}
        customClass="demo-checkbox-inline"
        onChange={onChange2}
      />
    </>
  );
}
```

```css
.demo-checkbox-inline {
  margin: 10px 0 0 20px;
  display: inline-block !important;
}
```

### 禁用状态

通过设置`disabled`属性可以禁用复选框。

```jsx
import { Checkbox } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <>
      <Checkbox disabled value={false} customClass="demo-checkbox-inline" />
      <Checkbox disabled value customClass="demo-checkbox-inline" />
    </>
  );
}
```

### 自定义形状

将`shape`属性设置为`square`，复选框的形状会变成方形。

```jsx
import { Checkbox } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [checked, setChecked] = useState(true);

  const onChange = event => {
    setChecked(event.detail);
  };

  const onChange2 = event => {
    setChecked(!event.detail);
  };

  return (
    <>
      <Checkbox
        value={checked}
        shape="square"
        customClass="demo-checkbox-inline"
        onChange={onChange}
      />
      <Checkbox
        value={!checked}
        shape="square"
        customClass="demo-checkbox-inline"
        onChange={onChange2}
      />
    </>
  );
}
```

### 自定义颜色

通过`checkedColor`属性可以自定义选中状态下的图标颜色。

```jsx
import { Checkbox } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [checked, setChecked] = useState(true);

  const onChange = event => {
    setChecked(event.detail);
  };

  const onChange2 = event => {
    setChecked(!event.detail);
  };

  return (
    <>
      <Checkbox
        value={checked}
        checkedColor="#10D0D0"
        customClass="demo-checkbox-inline"
        onChange={onChange}
      />
      <Checkbox
        value={!checked}
        checkedColor="#10D0D0"
        customClass="demo-checkbox-inline"
        onChange={onChange2}
      />
    </>
  );
}
```

### 自定义大小

通过`iconSize`属性可以自定义图标的大小。

```jsx
import { Checkbox } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [checked, setChecked] = useState(true);

  const onChange = event => {
    setChecked(event.detail);
  };

  const onChange2 = event => {
    setChecked(!event.detail);
  };

  return (
    <>
      <Checkbox
        iconSize="28px"
        value={checked}
        customClass="demo-checkbox-inline"
        onChange={onChange}
      />
      <Checkbox
        iconSize="28px"
        value={!checked}
        customClass="demo-checkbox-inline"
        onChange={onChange2}
      />
    </>
  );
}
```

### 展示文本

通过子节点可自定义文本内容。

```jsx
import { Checkbox } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [checked, setChecked] = useState(true);

  const onChange = event => {
    setChecked(event.detail);
  };

  return (
    <Checkbox
      value={checked}
      customClass="demo-checkbox"
      onChange={onChange}
    >
      自定义文本
    </Checkbox>
  );
}
```

### 自定义图标

通过 icon 插槽自定义图标。

```jsx
import { Checkbox } from '@ray-js/smart-ui';
import React, { useState } from 'react';
import { Image } from '@ray-js/ray';

const activeIcon = 'https://images.tuyacn.com/content-platform/hestia/1729664215ebd89f13e54.png';
const inactiveIcon = 'https://images.tuyacn.com/content-platform/hestia/1730877912e76cbdb7563.png';

export default function Demo() {
  const [checked, setChecked] = useState(true);

  const onChange = event => {
    setChecked(event.detail);
  };

  return (
    <Checkbox
      useIconSlot
      value={checked}
      onChange={onChange}
      slot={{
        icon: (
          <Image
            mode="widthFix"
            style={{ width: 40, height: 40 }}
            src={checked ? activeIcon : inactiveIcon}
          />
        ),
      }}
      customClass="demo-checkbox"
    >
      Custom Icon
    </Checkbox>
  );
}
```

```css
.demo-checkbox {
  margin: 10px 0 0 20px;
}
```

### 禁用文本点击

通过设置`labelDisabled`属性可以禁用复选框文本点击。

```jsx
import { Checkbox } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [checked, setChecked] = useState(true);

  const onChange = event => {
    setChecked(event.detail);
  };

  return (
    <Checkbox
      labelDisabled
      value={checked}
      onChange={onChange}
      customClass="demo-checkbox"
    >
      Checkbox
    </Checkbox>
  );
}
```

### 复选框组

需要与`CheckboxGroup`一起使用，选中值是一个数组，通过`value`绑定在`CheckboxGroup`上，数组中的项即为选中的`Checkbox`的`name`属性设置的值。

```jsx
import { Checkbox, CheckboxGroup } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [result, setResult] = React.useState(['a', 'b']);
  const onChange = event => {
    setResult(event.detail);
  };

  return (
    <CheckboxGroup value={result} onChange={onChange}>
      <Checkbox name="a" dataName="a">
        复选框 a
      </Checkbox>
      <Checkbox name="b" dataName="b">
        复选框 b
      </Checkbox>
      <Checkbox name="c" dataName="c">
        复选框 c
      </Checkbox>
    </CheckboxGroup>
  );
}
```

### 限制最大可选数为2个

```jsx
import { Checkbox, CheckboxGroup } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [result, setResult] = React.useState(['a', 'b']);
  const onChange = event => {
    setResult(event.detail);
  };

  return (
    <CheckboxGroup value={result} onChange={onChange} max={2}>
      <Checkbox name="a" dataName="a">
        复选框 a
      </Checkbox>
      <Checkbox name="b" dataName="b">
        复选框 b
      </Checkbox>
      <Checkbox name="c" dataName="c">
        复选框 c
      </Checkbox>
    </CheckboxGroup>
  );
}
```

### 搭配单元格组件使用

此时你需要再引入`Cell`和`CellGroup`组件，并通过 checkbox 的 toggle 方法手动触发切换。

```jsx
import { Checkbox, CheckboxGroup, CellGroup, Cell } from '@ray-js/smart-ui';
import React, { useState } from 'react';
import { getCurrentPages } from '@ray-js/ray'

export default function Demo() {
  const list = ['a', 'b', 'c'];
  const [result, setResult] = React.useState(['a', 'b']);
  const onChange = event => {
    setResult(event.detail);
  };
  const toggle = index => {
    const pages = getCurrentPages();
    const pageInstall = pages[pages.length - 1];
    const checkbox = pageInstall.selectComponent(`#checkboxes-${index}`);
    checkbox.toggle();
  };
  return (
    <CheckboxGroup value={result} onChange={onChange}>
      <CellGroup>
        {list.map((item, index) => {
          return (
            <Cell
              key={item}
              title={`复选框 ${item}`}
              valueClass="value-class"
              clickable
              onClick={() => {
                toggle(index);
              }}
            >
              <Checkbox id={`checkboxes-${index}`} name={item} dataName={item} />
            </Cell>
          );
        })}
      </CellGroup>
    </CheckboxGroup>
  );
}
```

```css
.value-class {
  flex: none !important;
}
```

## API

### Checkbox Props

| 参数           | 说明                            | 类型               | 默认值    |
| -------------- | ------------------------------- | ------------------ | --------- |
| checkedColor | 选中状态颜色 | _string_ | `#1989fa` |
| disabled | 是否禁用单选框 | _boolean_ | `false` |
| iconSize | icon 大小 | _string \| number_ | `24px` |
| labelDisabled | 是否禁用单选框内容点击 | _boolean_ | `false` |
| labelPosition | 文本位置，可选值为 `left` | _string_ | `right` |
| name | 标识 Checkbox 名称 | _string_ | - |
| shape | 形状，可选值为 `round` `square` | _string_ | `round` |
| useIconSlot | 是否使用 icon slot | _boolean_ | `false` |
| value | 是否为选中状态 | _boolean_ | `false` |

### CheckboxGroup Props

| 参数               | 说明                            | 类型      | 默认值        |
| ------------------ | ------------------------------- | --------- | ------------- |
| direction | 排列方向，可选值为 `horizontal` | _string_ | `vertical` |
| disabled | 是否禁用所有单选框 | _boolean_ | `false` |
| max | 设置最大可选数 | _number_ | `0`（无限制） |
| name | 在表单内提交时的标识符 | _string_ | - |
| value | 所有选中项的 name | _Array_ | - |

### Checkbox Event

| 事件名      | 说明                     | 回调参数     |
| ----------- | ------------------------ | ------------ |
| onChange | 当绑定值变化时触发的事件 | 当前组件的值 |

### Checkbox 外部样式类

| 类名         | 说明           |
| ------------ | -------------- |
| customClass | 根节点样式类 |
| iconClass | 图标样式类 |
| labelClass | 描述信息样式类 |

### CheckboxGroup Event

| 事件名      | 说明                     | 回调参数     |
| ----------- | ------------------------ | ------------ |
| onChange | 当绑定值变化时触发的事件 | 当前组件的值 |

### Checkbox Slot

| 名称 | 说明       |
| ---- | ---------- |
| -    | 自定义文本 |
| icon | 自定义图标 |

### Checkbox 方法

通过 [selectComponent](/material/smartui?comId=faq) 可以获取到 checkbox 实例并调用实例方法。

| 方法名 | 参数 | 返回值 | 介绍         |
| ------ | ---- | ------ | ------------ |
| toggle | - | - | 切换选中状态 |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/material/smartui?comId=config-provider)。

| 名称                          | 默认值                                 | 描述 |
| ----------------------------- | -------------------------------------- | ---- |
| --checkbox-size               | _24px_                                 | 复选框的大小 |
| --checkbox-border-color       | _var(--app-B6-N6, rgba(0, 0, 0, 0.2))_                               | 复选框的边框颜色 |
| --checkbox-border-radius      | _4px_                                  | 复选框的边框圆角 |
| --checkbox-transition-duration| _0.2s_                                 | 复选框的过渡持续时间 |
| --checkbox-label-size         | _12px_                                 | 复选框标签的字体大小 |
| --checkbox-label-margin       | _10px_                                 | 复选框标签的外边距 |
| --checkbox-label-color        | _var(--app-B6-N1, rgba(0, 0, 0, 1))_                               | 复选框标签的颜色 |
| --checkbox-checked-icon-color | _@M4_                                  | 复选框选中状态的图标颜色 |
| --checkbox-disabled-label-color| _var(--app-B6-N1, rgba(0, 0, 0, 1))_                              | 禁用状态下复选框标签的颜色 |
| --checkbox-disabled-opacity   | _0.3_                    | 禁用状态下复选框的透明度 |