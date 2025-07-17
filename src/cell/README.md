---
category: 展示
---

# Cell 单元格

### 介绍

单元格为列表中的单个展示项。

### 引入

```jsx
import { Cell, CellGroup } from '@ray-js/smart-ui';
```

## 代码演示

### 基础用法

`Cell`可以单独使用，也可以与`CellGroup`搭配使用。`CellGroup`可以为`Cell`提供上下外边框。

```jsx
import { Cell, CellGroup } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <CellGroup>
      <Cell title="单元格" value="内容" isLink />
      <Cell title="单元格" value="内容" label="描述信息" border={false} isLink />
    </CellGroup>
  );
}
```

### 卡片风格

通过 `CellGroup` 的 `inset` 属性，可以将单元格转换为圆角卡片风格（从 1.7.2 版本开始支持）。

```jsx
import { Cell, CellGroup } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <CellGroup inset>
      <Cell title="单元格" value="内容" isLink />
      <Cell title="单元格" value="内容" label="描述信息" border={false} isLink />
    </CellGroup>
  );
}
```

### 单元格大小

通过`size`属性可以控制单元格的大小。

```jsx
import { Cell, CellGroup } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <CellGroup inset>
      <Cell title="单元格" value="内容" size="large" />
      <Cell title="单元格" value="内容" size="large" label="描述信息" />
    </CellGroup>
  );
}
```

### 展示图标

通过`icon`属性在标题左侧展示图标。

```jsx
import { Cell, CellGroup } from '@ray-js/smart-ui';
import React from 'react';
import SunIcon from '@tuya-miniapp/icons/dist/svg/Sun';

export default function Demo() {
  return (
    <CellGroup inset>
      <Cell title="单元格" icon={SunIcon} />
    </CellGroup>
  );
}
```

### 展示箭头

设置`isLink`属性后会在单元格右侧显示箭头，并且可以通过`arrowDirection`属性控制箭头方向。

```jsx
import { Cell, CellGroup } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <CellGroup inset>
      <Cell title="单元格" isLink />
      <Cell title="单元格" isLink value="内容" />
      <Cell title="单元格" isLink value="内容" arrowDirection="down" />
    </CellGroup>
  );
}
```

### 页面跳转

可以通过`url`属性进行页面跳转，通过`linkType`属性控制跳转类型。

```jsx
import { Cell, CellGroup } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <CellGroup inset>
      <Cell isLink title="单元格" linkType="navigateTo" url="/pages/home/index" />
    </CellGroup>
  );
}
```

### 分组标题

通过`CellGroup`的`title`属性可以指定分组标题。

```jsx
import { Cell, CellGroup } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <>
      <CellGroup title="分组 1">
        <Cell title="单元格" isLink border={false} />
      </CellGroup>
      <CellGroup title="分组 2">
        <Cell title="单元格" isLink border={false} />
      </CellGroup>
    </>
  );
}
```

### 其他类型

也可配合其他组件进行展示

```jsx
import { Cell, Checkbox, Icon, Switch } from '@ray-js/smart-ui';
import React from 'react';
import * as icons from '@tuya-miniapp/icons';

export default function Demo() {
  return (
    <>
      <Cell title="Title">
        <Switch checked size="24px" />
      </Cell>
      <Cell title="Title">
        <Icon name={icons.Checkmark} color="#3678E3" size="28px" />
      </Cell>
      <Cell title="Title">
        <Checkbox value={false} shape="square" />
      </Cell>
      <Cell title="Title">
        <Checkbox value={false} />
      </Cell>
      <Cell
        title="Title"
        label="Bedroom"
        isLink
        border={false}
        slot={{
          icon: (
            <Icon
              className="demo-cell-icon"
              name="https://static1.tuyacn.com/static/tuya-miniapp-doc/_next/static/images/logo-small.png"
              size="50px"
            />
          ),
        }}
      />
    </>
  );
}
```

### 使用插槽

如以上用法不能满足你的需求，可以使用插槽来自定义内容。

```jsx
import { Cell, Icon, Tag } from '@ray-js/smart-ui';
import React from 'react';
import * as icons from '@tuya-miniapp/icons';
import { View } from '@ray-js/ray';

export default function Demo() {
  return (
    <>
      <Cell
        value="内容"
        icon={icons.ASunmaxfill}
        isLink
        slot={{
          title: (
            <View>
              <View className="demo-cell-title">单元格</View>
              <Tag type="danger">标签</Tag>
            </View>
          ),
        }}
      />
      <Cell
        title="单元格"
        border={false}
        slot={{ rightIcon: <Icon name={icons.ASunmaxfill} /> }}
      />
    </>
  );
}
```

## API

### CellGroup Props

| 参数   | 说明                   | 类型      | 默认值  |
| ------ | ---------------------- | --------- | ------- |
| border | 是否显示外边框         | _boolean_ | `true`  |
| inset  | 是否展示为圆角卡片风格 | _boolean_ | `false` |
| title  | 分组标题               | _string_  | `-`     |

### CellGroup 外部样式类

| 类名        | 说明         |
| ----------- | ------------ |
| customClass | 根节点样式类 |

### Cell Props

| 参数           | 说明                                                                       | 类型               | 默认值       |
| -------------- | -------------------------------------------------------------------------- | ------------------ | ------------ |
| arrowDirection | 箭头方向，可选值为 `left` `up` `down`                                      | _string_           | -            |
| border         | 是否显示下边框                                                             | _boolean_          | `true`       |
| children       | 自定义`value`显示内容，如果设置了`value`属性则不生效                       | _React.ReactNode_  | -            |
| clickable      | 是否开启点击反馈                                                           | _boolean_          | `false`      |
| icon           | 左侧图标名称或图片链接，可选值见 [Icon 组件](/material/smartui?comId=icon) | _string_           | -            |
| isLink         | 是否展示右侧箭头并开启点击反馈                                             | _boolean_          | `false`      |
| label          | 标题下方的描述信息                                                         | _string_           | -            |
| linkType       | 链接跳转类型，可选值为 `redirectTo` `switchTab` `reLaunch`                 | _string_           | `navigateTo` |
| required       | 是否显示表单必填星号                                                       | _boolean_          | `false`      |
| title          | 左侧标题                                                                   | _string \| number_ | -            |
| titleStyle     | 标题样式                                                                   | _object_           | -            |
| titleWidth     | 标题宽度，须包含单位                                                       | _string_           | -            |
| url            | 点击后跳转的链接地址                                                       | _string_           | -            |
| useLabelSlot   | 是否使用 label slot                                                        | _boolean_          | `false`      |
| value          | 右侧内容                                                                   | _string \| number_ | -            |

### Cell Event

| 事件名  | 说明             | 参数 |
| ------- | ---------------- | ---- |
| onClick | 点击单元格时触发 | -    |

### Cell Slot

| 名称             | 说明                                                          |
| ---------------- | ------------------------------------------------------------- |
| `slot.icon`      | 自定义`icon`显示内容，如果设置了`icon`属性则不生效            |
| `slot.label`     | 自定义`label`显示内容，需要设置 `useLabelSlot`属性            |
| `slot.rightIcon` | 自定义右侧按钮，默认是`arrow`，如果设置了`isLink`属性则不生效 |
| `slot.title`     | 自定义`title`显示内容，如果设置了`title`属性则不生效          |

### Cell 外部样式类

| 类名        | 说明           |
| ----------- | -------------- |
| customClass | 根节点样式类   |
| labelClass  | 描述信息样式类 |
| titleClass  | 标题样式类     |
| valueClass  | 右侧内容样式类 |
