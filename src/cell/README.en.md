---
category: Display
---

# Cell

### Introduction

A cell is a single display item in the list.

### Introduce

```jsx
import { Cell, CellGroup } from '@ray-js/smart-ui';
```

## Code Demonstration

### Basic Usage

`Cell` can be used independently or together with `CellGroup`. `CellGroup` can provide top and bottom borders for `Cell`.

```jsx
import { Cell, CellGroup } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <CellGroup>
      <Cell title="Cell" value="Content" isLink />
      <Cell title="Cell" value="Content" label="Description Information" border={false} isLink />
    </CellGroup>
  );
}
```

### Card Style

With the `inset` property of `CellGroup`, you can transform cells into round-cornered card style (supported since version 1.7.2).

```jsx
import { Cell, CellGroup } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <CellGroup inset>
      <Cell title="Cell" value="Content" isLink />
      <Cell title="Cell" value="Content" label="Description Information" border={false} isLink />
    </CellGroup>
  );
}
```

### Cell Size

The size of the cell can be controlled by the `size` attribute.

```jsx
import { Cell, CellGroup } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <CellGroup inset>
      <Cell title="Cell" value="Content" size="large" />
      <Cell title="Cell" value="Content" size="large" label="Description Information" />
    </CellGroup>
  );
}
```

### Display Icon

Display an icon on the left side of the title through the `icon` attribute.

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

### Show Arrow

Setting the `isLink` property will display an arrow on the right side of the cell, and the `arrowDirection` property can control the arrow's direction.

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

### Page Redirect

You can navigate the page using the `url` property and control the navigation type using the `linkType` property.

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

### Group Title

The `title` attribute of `CellGroup` can be used to specify the group title.

```jsx
import { Cell, CellGroup } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <>
      <CellGroup title="Group 1">
        <Cell title="cell" isLink border={false} />
      </CellGroup>
      <CellGroup title="Group 2">
        <Cell title="cell" isLink border={false} />
      </CellGroup>
    </>
  );
}
```

### Other Types

Can also be displayed with other components

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

### Use slots

If the above usage does not meet your needs, you can use slots to customize the content.

```jsx
import { Cell, Icon, Tag } from '@ray-js/smart-ui';
import React from 'react';
import * as icons from '@tuya-miniapp/icons';
import { View } from '@ray-js/ray';

export default function Demo() {
  return (
    <>
      <Cell
        value="content"
        icon={icons.ASunmaxfill}
        isLink
        slot={{
          title: (
            <View>
              <View className="demo-cell-title">Cell</View>
              <Tag type="danger">Label</Tag>
            </View>
          ),
        }}
      />
      <Cell
        title="Cell"
        border={false}
        slot={{ rightIcon: <Icon name={icons.ASunmaxfill} /> }}
      />
    </>
  );
}
```

## API

### CellGroup Props

| Parameter | Description                          | Type      | Default Value |
| --------- | ------------------------------------ | --------- | ------------- |
| border    | Whether to display the outer frame   | _boolean_ | `true`        |
| inset     | Whether to show a rounded card style | _boolean_ | `false`       |
| title     | Group title                          | _string_  | `-`           |

### CellGroup External Style Class

| Class Name  | Description           |
| ----------- | --------------------- |
| customClass | Root node style class |

### Cell Props

| Parameter      | Description                                                                                      | Type               | Default Value |
| -------------- | ------------------------------------------------------------------------------------------------ | ------------------ | ------------- |
| arrowDirection | Arrow direction, optional values are `left` `up` `down`.                                         | _string_           | -             |
| border         | Show bottom border?                                                                              | _boolean_          | `true`        |
| children       | Customize the `value` display content. If the `value` attribute is set, it will not take effect. | _React.ReactNode_  | -             |
| clickable      | Enable click feedback?                                                                           | _boolean_          | `false`       |
| icon           | Left icon name or image link, optional values see [Icon Component](/material/smartui?comId=icon) | _string_           | -             |
| isLink         | Whether to display the right arrow and enable click feedback.                                    | _boolean_          | `false`       |
| label          | Description information below the title                                                          | _string_           | -             |
| linkType       | Link jump types, optional values are `redirectTo`, `switchTab`, `reLaunch`                       | _string_           | `navigateTo`  |
| required       | Show required field asterisks                                                                    | _boolean_          | `false`       |
| title          | Left Title                                                                                       | _string \| number_ | -             |
| titleStyle     | Title Style                                                                                      | _object_           | -             |
| titleWidth     | Title width, must include unit                                                                   | _string_           | -             |
| url            | The link address to which you will be redirected after clicking                                  | _string_           | -             |
| useLabelSlot   | Whether to use label slot                                                                        | _boolean_          | `false`       |
| value          | Content on the right                                                                             | _string \| number_ | -             |

### Cell Event

| Event Name | Description                    | Parameters |
| ---------- | ------------------------------ | ---------- |
| onClick    | Triggered when cell is clicked | -          |

### Cell Slot

| Name             | Description                                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------------------------- |
| `slot.icon`      | Custom `icon` display content, if the `icon` attribute is set, it will not take effect.                       |
| `slot.label`     | To customize the `label` display content, you need to set the `useLabelSlot` property.                        |
| `slot.rightIcon` | Customize the right button, the default is `arrow`. If the `isLink` property is set, it will not take effect. |
| `slot.title`     | Custom `title` display content, ineffective if the `title` attribute is set.                                  |

### Cell External Style Class

| Class Name  | Description                   |
| ----------- | ----------------------------- |
| customClass | Root node nodes               |
| labelClass  | Description information style |
| titleClass  | Title style                   |
| valueClass  | Right content sample category |
