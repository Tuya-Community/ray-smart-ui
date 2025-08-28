---
category: Display
assets: DragList,RecycleView,SelectDevice
---

# Cell

### Introduction

A Cell is a single display item in a list.

### Import

```jsx
import { Cell, CellGroup } from '@ray-js/smart-ui';
```

## Code Demos

### Basic Usage

`Cell` can be used alone or in combination with `CellGroup`. `CellGroup` can provide top and bottom margins for `Cell`.

```jsx
import { Cell, CellGroup } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <CellGroup>
      <Cell title="Cell" value="Content" isLink />
      <Cell title="Cell" value="Content" label="Description" border={false} isLink />
    </CellGroup>
  );
}
```

### Card Style

The `inset` `v1.7.2` attribute of `CellGroup` can convert cells into a rounded card style, and `insetBorderRadius` `v2.6.2` can set the value of the rounded corners.

```jsx
import { Cell, CellGroup } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <CellGroup inset insetBorderRadius={12}>
      <Cell title="Cell" value="Content" isLink />
      <Cell title="Cell" value="Content" label="Description" border={false} isLink />
    </CellGroup>
  );
}
```

### Cell Size

The `size` attribute can be used to control the size of the cell.

```jsx
import { Cell, CellGroup } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <CellGroup inset>
      <Cell title="Cell" value="Content" size="large" />
      <Cell title="Cell" value="Content" size="large" label="Description" />
    </CellGroup>
  );
}
```

### Display Icons

Display icons on the left side of the title using the `icon` attribute.

```jsx
import { Cell, CellGroup } from '@ray-js/smart-ui';
import React from 'react';
import SunIcon from '@tuya-miniapp/icons/dist/svg/Sun';

export default function Demo() {
  return (
    <CellGroup inset>
      <Cell title="Cell" icon={SunIcon} />
    </CellGroup>
  );
}
```

### Other Displays

Set the `isLink` attribute to display an arrow on the right side of the cell, and control the arrow direction through the `arrowDirection` attribute.

```jsx
import { Cell, CellGroup } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <CellGroup inset>
      <Cell title="Cell" isLink />
      <Cell title="Cell" isLink value="Content" />
      <Cell title="Cell" isLink value="Content" arrowDirection="down" />
    </CellGroup>
  );
}
```

### Page Navigation

Use the `url` attribute to enable page navigation, and control the type of navigation with `linkType`.

```jsx
import { Cell, CellGroup } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <CellGroup inset>
      <Cell isLink title="Cell" linkType="navigateTo" url="/pages/home/index" />
    </CellGroup>
  );
}
```

### Group Titles

Assign group titles using the `title` attribute of `CellGroup`.

```jsx
import { Cell, CellGroup } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <>
      <CellGroup title="Group 1">
        <Cell title="Cell" isLink border={false} />
      </CellGroup>
      <CellGroup title="Group 2">
        <Cell title="Cell" isLink border={false} />
      </CellGroup>
    </>
  );
}
```

### Other Types

Also can be displayed with other components

```jsx
import { Cell, Checkbox, Icon, Switch } from '@ray-js/smart-ui';
import React from 'react';
import Checkmark from '@tuya-miniapp/icons/dist/svg/Checkmark';

export default function Demo() {
  return (
    <>
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

### Using Slots

If the above usages don't meet your needs, you can use slots to customize content.

```jsx
import { Cell, Icon, Tag } from '@ray-js/smart-ui';
import React from 'react';
import ASunmaxfill from '@tuya-miniapp/icons/dist/svg/ASunmaxfill';
import { View } from '@ray-js/ray';

export default function Demo() {
  return (
    <>
      <Cell
        value="Content"
        icon={ASunmaxfill}
        isLink
        slot={{
          title: (
            <View>
              <View className="demo-cell-title">Cell</View>
              <Tag type="danger">Tag</Tag>
            </View>
          ),
        }}
      />
      <Cell
        title="Cell"
        border={false}
        slot={{ rightIcon: <Icon name={ASunmaxfill} /> }}
      />
    </>
  );
}
```

## API

### CellGroup Props

| Parameter | Description                 | Type      | Default |
| --------- | --------------------------- | --------- | ------- |
| border | Whether to show the border | _boolean_ | `true` |
| inset | Show as rounded card style | _boolean_ | `false` |
| title | Group title | _string_ | `-` |
| insetBorderRadius `v2.6.2` | Corner radius value when in rounded card style | _string \| number_ | `-` |

### CellGroup External Classes

| Class Name    | Description       |
| ------------- | ----------------- |
| customClass | Root node style |

### Cell Props

| Parameter        | Description                                                 | Type               | Default       |
| ---------------- | ----------------------------------------------------------- | ------------------ | ------------- |
| arrowDirection | Arrow direction, options are `left` `up` `down` | _string_ | - |
| border | Whether to show the bottom border | _boolean_ | `true` |
| clickable | Whether to enable click feedback | _boolean_ | `false` |
| icon | Left icon svg value or image URL, see available options in [Icon Component](/material/smartui?comId=icon) | _string_ | - |
| isLink | Whether to show the right arrow and enable click feedback | _boolean_ | `false` |
| label | Description information below the title | _string_ | - |
| linkType | Link type to navigate, options are `redirectTo` `switchTab` `reLaunch` | _string_ | `navigateTo` |
| required | Whether to show the required asterisk | _boolean_ | `false` |
| title | Left title | _string \| number_ | - |
| titleStyle | Title style | _React.CSSProperties_ | - |
| titleWidth | Title width (include units) | _string_ | - |
| url | URL to navigate to on click | _string_ | - |
| useLabelSlot | Whether to use the label slot | _boolean_ | `false` |
| value | Right side content | _string \| number_ | - |

### Cell Event

| Event Name | Description               | Parameters |
| ---------- | ------------------------- | ---------  |
| onClick | Triggered when the cell is clicked | - |

### Cell Slot

| Name       | Description                                                 |
| ---------- | ----------------------------------------------------------- |
| -          | Custom `value` content; ineffective if `value` attribute is set |
| icon | Custom `icon` content; ineffective if `icon` attribute is set |
| label | Custom `label` content; requires setting the `use-label-slot` attribute |
| rightIcon | Custom right button, defaults to `arrow`; ineffective if `is-link` attribute is set |
| title | Custom `title` content; ineffective if `title` attribute is set |

### Cell External Classes

| Class Name   | Description     |
| -------------| ----------------|
| customClass | Root node style |
| labelClass | Description style |
| titleClass | Title style |
| valueClass | Right content style |

### Style Variables

The component provides the following CSS variables that can be used for custom styles. For usage, refer to the [ConfigProvider Component](/material/smartui?comId=config-provider).

| Name                                      | Default Value                                 | Description                               |
| ----------------------------------------- | ---------------------------------------------- | ----------------------------------------- |
| --cell-font-size                          | _16px_                                        | Cell font size                            |
| --cell-line-height                        | _24px_                                        | Cell line height                          |
| --cell-vertical-padding                   | _16px_                                        | Cell vertical padding                     |
| --cell-horizontal-padding                 | _16px_                                        | Cell horizontal padding                   |
| --cell-text-color                         | _var(--app-B6-N1, rgba(0, 0, 0, 1))_          | Cell text color                           |
| --cell-background-color                   | _var(--app-B6, #fff)_                         | Cell background color                     |
| --cell-active-color                       | _var(--app-B1, #f6f7fb)_                      | Cell active color                         |
| --cell-required-color                     | _var(--app-M2, #f04c4c)_                      | Cell required field color                 |
| --cell-label-color                        | _var(--app-B6-N3, rgba(0, 0, 0, 0.5))_        | Cell label text color                     |
| --cell-label-font-size                    | _14px_                                        | Cell label font size                      |
| --cell-label-line-height                  | _18px_                                        | Cell label line height                    |
| --cell-label-margin-top                   | _3px_                                         | Cell label top margin                     |
| --cell-value-color                        | _var(--app-B6-N3, rgba(0, 0, 0, 0.5))_        | Cell value text color                     |
| --cell-icon-size                          | _24px_                                        | Cell icon size                            |
| --cell-right-icon-color                   | _var(--app-B6-N6, rgba(0, 0, 0, 0.2))_        | Cell right icon color                     |
| --cell-border-color `v2.1.4`              | _var(--app-B6-N7, rgba(0, 0, 0, 0.1))_        | Cell border color                         |
| --cell-border-left-position `v2.1.4`      | _16px_                                        | Cell left border position                 |
| --cell-border-right-position `v2.1.4`     | _16px_                                        | Cell right border position                |
| --cell-group-background-color             | _var(--app-B6, #fff)_                         | Cell group background color               |
| --cell-group-title-color                  | _var(--app-B6-N3, rgba(0, 0, 0, 0.5))_        | Cell group title color                    |
| --cell-group-title-padding                | _@padding-md @padding-md @padding-xs_         | Cell group title padding                  |
| --cell-group-title-font-size              | _16px_                                        | Cell group title font size                |
| --cell-group-title-line-height            | _16px_                                        | Cell group title line height              |
| --cell-group-inset-padding                | _0 @padding-md_                               | Cell group inset padding                  |
| --cell-group-inset-border-radius          | _16px_                                        | Cell group inset border radius            |
| --cell-group-inset-title-padding          | _@padding-md @padding-md @padding-xs @padding-xl_ | Cell group inset title padding            |