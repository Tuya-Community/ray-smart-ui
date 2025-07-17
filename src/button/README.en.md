---
category: Universal
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
      <Button loading type="primary" />
      <Button loading type="primary" loadingType="spinner" />
      <Button loading type="info" loadingText="Loading..." />
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

```js
import PlusCircleIcon from '@tuya-miniapp/icons/dist/svg/PlusCircle';
import RightIcon from '@tuya-miniapp/icons/dist/svg/Right';
```

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

| Parameter     | Description                                                      | Type      | Default      |
| ------------- | ---------------------------------------------------------------- | --------- | ------------ |
| block         | Whether it is a block-level element                                  | _boolean_ | `false`      |
| buttonId      | Identifier used as the id value of the native button component     | _string_  | -            |
| classPrefix   | Icon class name prefix, same as the [class-prefix property](#/icon) of the Icon component | _string_  | `smart-icon` |
| color         | Button color, supports `linearGradient` gradients                   | _string_  | -            |
| customStyle   | Custom styles                                                      | _object_  | -            |
| disabled      | Whether the button is disabled                                     | _boolean_ | `false`      |
| hairline      | Whether to use a 0.5px border                                      | _boolean_ | `false`      |
| icon          | Name or URL of the left icon, options see [Icon component](#/icon)  | _string_  | -            |
| id            | Identifier                                                         | _string_  | -            |
| loading       | Whether to show in loading state                                   | _boolean_ | `false`      |
| loadingSize   | Size of the loading icon                                           | _string_  | `20px`       |
| loadingText   | Text indicating loading state                                      | _string_  | -            |
| loadingType   | Type of loading icon, optional value `spinner`                     | _string_  | `circular`   |
| plain         | Whether it is a plain button                                       | _boolean_ | `false`      |
| rightIcon     | Right icon or image URL, options see [Icon component](#/icon)      | _string_  | -            |
| round         | Whether it is a round button                                       | _boolean_ | `false`      |
| size          | Button size, optional values `normal` `large` `small` `mini`       | _string_  | `normal`     |
| square        | Whether it is a square button                                      | _boolean_ | `false`      |
| type          | Button type, optional values `default` `primary` `info` `warning` `danger` | _string_  | `default`    |

### Events

| Event Name | Description | Parameter |
| ---------- | ----------- | --------- |
| onClick    | Triggered when the button is clicked, and the button is not in a loading or disabled state | -           |

> The Button provides a click event, not the native tap event. When the button is disabled, the click event will not be triggered, but the tap event will still trigger.

### External Style Classes

| Class Name    | Description          |
| ------------- | -------------------- |
| customClass   | Root node style class|
| loadingClass  | Loading icon style class |
