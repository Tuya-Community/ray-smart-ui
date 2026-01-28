---
category: Universal
assets: CircleHandle,PressKey,TyFinger,DoubleKey
---

# Button

### Introduction

Buttons are used to trigger an action, such as submitting a form.

### Introduce

```jsx
import { Button } from '@ray-js/smart-ui';
```

## Code Demo

### Button Types

Supports five types: `default`, `primary`, `info`, `warning`, and `danger`, with `default` as the default type.

```jsx
import React from 'react';
import { Button } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  return (
    <View>
      <Button type="default">Default Button</Button>
      <Button type="primary">Main Button</Button>
      <Button type="info">Info Button</Button>
      <Button type="warning">Warning Button</Button>
      <Button type="danger">Danger Button</Button>
    </View>
  );
}
```

### Plain Button

Set the button to a plain button with the `plain` attribute. The text of a plain button is the button color, and the background is white.

```jsx
import React from 'react';
import { Button } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  return (
    <View>
      <Button plain type="primary">
        Plain Button
      </Button>
      <Button plain type="info">
        Simple Button
      </Button>
    </View>
  );
}
```

### Hairline Border

By setting the `hairline` attribute, you can enable a 0.5px border, implemented using pseudo-classes.

```jsx
import React from 'react';
import { Button } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  return (
    <View>
      <Button plain hairline type="primary">
        Thin border button
      </Button>
      <Button plain hairline type="info">
        Thin Border Button
      </Button>
    </View>
  );
}
```

### Disabled State

Use the `disabled` attribute to disable the button, at which point the button's `bind:click` event will not trigger.

```jsx
import React from 'react';
import { Button } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  return (
    <View>
      <Button disabled type="primary">
        Disabled status
      </Button>
      <Button disabled type="info">
        Disabled status
      </Button>
    </View>
  );
}
```

### Loading status

```jsx
import React from 'react';
import { Button } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  return (
    <View>
      <Button loading type="warning" loadingText="Loading..." />
      <Button loading type="warning" />
      <Button loading type="primary" />
      <Button loading type="primary" loadingType="spinner" />
    </View>
  );
}
```

### Button Shape

```jsx
import React from 'react';
import { Button } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  return (
    <View>
      <Button square type="primary">
        Square Button
      </Button>
      <Button round type="info">
        Round Button
      </Button>
    </View>
  );
}
```

### Icon Button

Set the button icon using the `icon` attribute, supporting all icons from the Icon component, or you can pass in an icon URL.

```jsx
import React from 'react';
import { Button } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';
import PlusCircleIcon from '@tuya-miniapp/icons/dist/svg/PlusCircle';
import RightIcon from '@tuya-miniapp/icons/dist/svg/Right';

export default function Demo() {
  return (
    <View>
      <Button icon={PlusCircleIcon} type="primary" />
      <Button icon={RightIcon} type="primary">
        Button
      </Button>
      <Button
        icon="https://static1.tuyacn.com/static/tuya-miniapp-doc/_next/static/images/logo-small.png"
        type="info"
      >
        Button
      </Button>
    </View>
  );
}
```

### Button Size

Supports four sizes: `large`, `normal`, `small`, and `mini`. The default size is `normal`.

```jsx
import React from 'react';
import { Button } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  return (
    <View>
      <Button type="primary" size="large">
        Large Button
      </Button>
      <Button type="primary" size="normal">
        Normal Button
      </Button>
      <Button type="primary" size="small">
        Small Button
      </Button>
      <Button type="primary" size="mini">
        Mini Button
      </Button>
    </View>
  );
}
```

### Block Level Elements

By setting the `block` property, you can make the button's element type a block-level element.

```jsx
import React from 'react';
import { Button } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  return (
    <View>
      <Button type="primary" block>
        Block-level Element
      </Button>
    </View>
  );
}
```

### Custom Color

You can customize the button color through the `color` property.

```jsx
import React from 'react';
import { Button } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  return (
    <View>
      <Button color="#7232dd">Monochrome Button</Button>
      <Button color="#7232dd" plain>
        Monochrome Button
      </Button>
      <Button color="linear-gradient(to right, #4bb0ff, #6149f6)">Gradient Color Button</Button>{' '}
    </View>
  );
}
```

## API

### Props

| Parameter    | Description                                              | Type      | Default      |
| ------------ | -------------------------------------------------------- | --------- | ------------ |
| block | Whether it's a block-level element | _boolean_ | `false` |
| buttonId | Identifier for native button component id value | _string_ | - |
| classPrefix | Icon class name prefix, same as [Icon component class-prefix](/material/smartui?comId=icon) | _string_ | `smart-icon` |
| color | Button color, supports `linear-gradient` | _string_ | - |
| customStyle | Custom style | _React.CSSProperties_ | - |
| disabled | Whether to disable the button | _boolean_ | `false` |
| hairline | Whether to use 0.5px border | _boolean_ | `false` |
| icon | Left icon or image URL, see [Icon component options](/material/smartui?comId=icon) | _string_ | - |
| id | Identifier | _string_ | - |
| loading | Whether to display loading state | _boolean_ | `false` |
| loadingSize | Loading icon size | _string_ | `20px` |
| loadingText | Loading state text | _string_ | - |
| myTextColor `v2.10.1` | Button text color | _string_ | - |
| textStyle | Button Text Style | _React.CSSProperties_ | - |
| loadingType | Loading icon type, options: `spinner` | _string_ | `circular` |
| plain | Whether it's a plain button | _boolean_ | `false` |
| rightIcon | Right icon or image URL, see [Icon component options](/material/smartui?comId=icon) | _string_ | - |
| round | Whether it's a round button | _boolean_ | `false` |
| size | Button size, options: `normal` `large` `small` `mini` | _string_ | `normal` |
| square | Whether it's a square button | _boolean_ | `false` |
| type | Button type, options: `primary` `info` `warning` `danger` | _string_ | `default` |


### Events

| Event Name  | Description                                             | Parameter |
| ----------- | ------------------------------------------------------- | --------- |
| onClick | Triggered when button is clicked, not in loading/disabled state | - |
| onError | Callback for errors when using open capabilities | - |


> Button provides a click event instead of the native tap event. When the button is disabled, the click event will not fire, but the tap event will.

### External Style Classes

| Class Name   | Description         |
| ------------ | ------------------- |
| customClass | Root node style |
| loadingClass | Loading icon style |
| hoverClass | Style when the button is pressed |

### Style Variables

The component provides the following CSS variables that can be used for custom styles. For usage, refer to the [ConfigProvider Component](/material/smartui?comId=config-provider).
| Name                                          | Default Value                                  | Description                           |
| --------------------------------------------- | ---------------------------------------------- | ------------------------------------- |
| --button-mini-height                          | _22px_                                         | Mini button height                    |
| --button-mini-min-width                       | _50px_                                         | Mini button minimum width             |
| --button-mini-font-size                       | _10px_                                         | Mini button font size                 |
| --button-small-height                         | _30px_                                         | Small button height                   |
| --button-small-font-size                      | _12px_                                         | Small button font size                |
| --button-small-min-width                      | _60px_                                         | Small button minimum width            |
| --button-normal-font-size                     | _14px_                                         | Normal button font size               |
| --button-large-height                         | _48px_                                         | Large button height                   |
| --button-default-color                        | _var(--app-B1-N1, rgba(0, 0, 0, 1))_           | Default button text color             |
| --button-default-height                       | _48px_                                         | Default button height                 |
| --button-default-font-size                    | _16px_                                         | Default button font size              |
| --button-default-background-color             | _var(--app-B3, #ffffff)_                       | Default button background color       |
| --button-default-border-color                 | _var(--app-B6-N7, rgba(0, 0, 0, 0.1))_         | Default button border color           |
| --button-primary-color                        | _#fff_                                         | Primary button text color             |
| --button-primary-background-color             | _var(--app-M3, #2dda86)_                       | Primary button background color       |
| --button-primary-border-color                 | _var(--app-M3, #2dda86)_                       | Primary button border color           |
| --button-info-color                           | _#fff_                                         | Info button text color                |
| --button-info-background-color                | _var(--app-M4, #1989fa)_                       | Info button background color          |
| --button-info-border-color                    | _var(--app-M4, #1989fa)_                       | Info button border color              |
| --button-danger-color                         | _#fff_                                         | Danger button text color              |
| --button-danger-background-color              | _var(--app-M2, #f04c4c)_                       | Danger button background color        |
| --button-danger-border-color                  | _var(--app-M2, #f04c4c)_                       | Danger button border color            |
| --button-warning-color                        | _#fff_                                         | Warning button text color             |
| --button-warning-background-color             | _var(--app-M5, #ffa000)_                       | Warning button background color       |
| --button-warning-border-color                 | _var(--app-M5, #ffa000)_                       | Warning button border color           |
| --button-line-height                          | _20px_                                         | Button line height                    |
| --button-border-width                         | _1px_                                          | Button border width                   |
| --button-border-radius                        | _10px_                                         | Button border radius                  |
| --button-round-border-radius                  | _999px_                                        | Round button border radius            |
| --button-plain-background-color               | _#fff_                                         | Plain button background color         |
| --button-disabled-opacity                     | _0.3_                                          | Disabled button opacity               |
| --button-font-weight                          | _normal_                                       | Button font weight                    |
| --button-primary-font-weight                  | _600_                                          | Primary button font weight            |