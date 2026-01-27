---
category: 展示
assets: DragList,RecycleView,SelectDevice
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
      <Cell title="单元格" value="内容" label="描述信息" isLink />
    </CellGroup>
  );
}
```

### 卡片风格

通过 `CellGroup` 的 `inset` `v1.7.2` 属性，可以将单元格转换为圆角卡片风格, `insetBorderRadius` `v2.6.2` 可以设置圆角的值。

```jsx
import { Cell, CellGroup } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <CellGroup inset insetBorderRadius={12}>
      <Cell title="单元格" value="内容" isLink />
      <Cell title="单元格" value="内容" label="描述信息" isLink />
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

### 其他展示

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
        <Cell title="单元格" isLink />
      </CellGroup>
      <CellGroup title="分组 2">
        <Cell title="单元格" isLink />
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
import Checkmark from '@tuya-miniapp/icons/dist/svg/Checkmark';

export default function Demo() {
  return (
    <CellGroup>
      <Cell title="Title">
        <Switch checked size="24px" />
      </Cell>
      <Cell title="Title">
        <Icon name={Checkmark} color="#3678E3" size="28px" />
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
    </CellGroup>
  );
}
```

### 使用插槽

如以上用法不能满足你的需求，可以使用插槽来自定义内容。

```jsx
import { Cell, Icon, Tag } from '@ray-js/smart-ui';
import React from 'react';
import ASunmaxfill from '@tuya-miniapp/icons/dist/svg/ASunmaxfill';
import { View } from '@ray-js/ray';

export default function Demo() {
  return (
    <CellGroup>
      <Cell
        value="内容"
        icon={ASunmaxfill}
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
      <Cell title="单元格" slot={{ rightIcon: <Icon name={ASunmaxfill} /> }} />
    </CellGroup>
  );
}
```

## API

### CellGroup Props

| 参数                       | 说明                   | 类型               | 默认值  |
| -------------------------- | ---------------------- | ------------------ | ------- |
| border                     | 是否显示外边框         | _boolean_          | `true`  |
| inset                      | 是否展示为圆角卡片风格 | _boolean_          | `false` |
| title                      | 分组标题               | _string_           | `-`     |
| insetBorderRadius `v2.6.2` | 圆角卡片风格时的圆角值 | _string \| number_ | `-`     |

### CellGroup 外部样式类

| 类名        | 说明         |
| ----------- | ------------ |
| customClass | 根节点样式类 |

### Cell Props

| 参数           | 说明                                                                                                                                       | 类型                  | 默认值       |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | --------------------- | ------------ |
| arrowDirection | 箭头方向，可选值为 `left` `up` `down`                                                                                                      | _string_              | -            |
| border         | 是否显示下边框                                                                                                                             | _boolean_             | `true`       |
| clickable      | 是否开启点击反馈                                                                                                                           | _boolean_             | `false`      |
| icon           | 左侧图标 svg 值或图片链接，可选值见 [Icon 组件](/material/smartui?comId=icon)                                                              | _string_              | -            |
| isLink         | 是否展示右侧箭头并开启点击反馈                                                                                                             | _boolean_             | `false`      |
| label          | 标题下方的描述信息                                                                                                                         | _string_              | -            |
| linkType       | 链接跳转类型，可选值为 `redirectTo` [`switchTab`](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.switchTab.html) `reLaunch` | _string_              | `navigateTo` |
| required       | 是否显示表单必填星号                                                                                                                       | _boolean_             | `false`      |
| title          | 左侧标题                                                                                                                                   | _string \| number_    | -            |
| titleStyle     | 标题样式                                                                                                                                   | _React.CSSProperties_ | -            |
| titleWidth     | 标题宽度，须包含单位                                                                                                                       | _string_              | -            |
| url            | 点击后跳转的链接地址                                                                                                                       | _string_              | -            |
| useLabelSlot   | 是否使用 label slot                                                                                                                        | _boolean_             | `false`      |
| value          | 右侧内容                                                                                                                                   | _string \| number_    | -            |

### Cell Event

| 事件名  | 说明             | 参数 |
| ------- | ---------------- | ---- |
| onClick | 点击单元格时触发 | -    |

### Cell Slot

| 名称      | 说明                                                           |
| --------- | -------------------------------------------------------------- |
| -         | 自定义`value`显示内容，如果设置了`value`属性则不生效           |
| icon      | 自定义`icon`显示内容，如果设置了`icon`属性则不生效             |
| label     | 自定义`label`显示内容，需要设置 `use-label-slot`属性           |
| rightIcon | 自定义右侧按钮，默认是`arrow`，如果设置了`is-link`属性则不生效 |
| title     | 自定义`title`显示内容，如果设置了`title`属性则不生效           |

### Cell 外部样式类

| 类名        | 说明           |
| ----------- | -------------- |
| customClass | 根节点样式类   |
| labelClass  | 描述信息样式类 |
| titleClass  | 标题样式类     |
| valueClass  | 右侧内容样式类 |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/material/smartui?comId=config-provider)。

| 名称                                  | 默认值                                            | 描述                     |
| ------------------------------------- | ------------------------------------------------- | ------------------------ |
| --cell-font-size                      | _16px_                                            | 单元格字体大小           |
| --cell-line-height                    | _24px_                                            | 单元格行高               |
| --cell-vertical-padding               | _16px_                                            | 单元格垂直内边距         |
| --cell-horizontal-padding             | _16px_                                            | 单元格水平内边距         |
| --cell-text-color                     | _var(--app-B6-N1, rgba(0, 0, 0, 1))_              | 单元格文字颜色           |
| --cell-background-color               | _var(--app-B6, #fff)_                             | 单元格背景颜色           |
| --cell-active-color                   | _var(--app-B1, #f6f7fb)_                          | 单元格激活颜色           |
| --cell-required-color                 | _var(--app-M2, #f04c4c)_                          | 单元格必填项颜色         |
| --cell-label-color                    | _var(--app-B6-N3, rgba(0, 0, 0, 0.5))_            | 单元格标签文字颜色       |
| --cell-label-font-size                | _14px_                                            | 单元格标签字体大小       |
| --cell-label-line-height              | _18px_                                            | 单元格标签行高           |
| --cell-label-margin-top               | _3px_                                             | 单元格标签上边距         |
| --cell-value-color                    | _var(--app-B6-N3, rgba(0, 0, 0, 0.5))_            | 单元格值文字颜色         |
| --cell-icon-size                      | _24px_                                            | 单元格图标大小           |
| --cell-right-icon-color               | _var(--app-B6-N6, rgba(0, 0, 0, 0.2))_            | 单元格右侧图标颜色       |
| --cell-border-color `v2.1.4`          | _var(--app-B6-N7, rgba(0, 0, 0, 0.1))_            | 单元格边框颜色           |
| --cell-border-left-position `v2.1.4`  | _16px_                                            | 单元格左边框位置         |
| --cell-border-right-position `v2.1.4` | _16px_                                            | 单元格右边框位置         |
| --cell-group-background-color         | _var(--app-B6, #fff)_                             | 单元格组背景颜色         |
| --cell-group-title-color              | _var(--app-B6-N3, rgba(0, 0, 0, 0.5))_            | 单元格组标题颜色         |
| --cell-group-title-padding            | _@padding-md @padding-md @padding-xs_             | 单元格组标题内边距       |
| --cell-group-title-font-size          | _16px_                                            | 单元格组标题字体大小     |
| --cell-group-title-line-height        | _16px_                                            | 单元格组标题行高         |
| --cell-group-inset-padding            | _0 @padding-md_                                   | 单元格组嵌入内边距       |
| --cell-group-inset-border-radius      | _16px_                                            | 单元格组嵌入边框圆角半径 |
| --cell-group-inset-title-padding      | _@padding-md @padding-md @padding-xs @padding-xl_ | 单元格组嵌入标题内边距   |
