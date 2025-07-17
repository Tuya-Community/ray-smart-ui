---
category: Display
---

# Icon

### Introduce

Font icon sets can be used through the icon component, or can be referenced by the Icon attribute in other components.

### Introduce

```jsx
import { Icon } from '@ray-js/smart-ui';
```

## Code demonstration

### Basic usage

The `name` attribute of `Icon` supports passing in an icon name or an image URL.

```jsx
import warningIcon from '@tuya-miniapp/icons/dist/svg/Warning';
import { View } from '@ray-js/ray';
import { Icon } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <View>
      <Icon name={warningIcon} />
      <Icon name="https://static1.tuyacn.com/static/tuya-miniapp-doc/_next/static/images/logo-small.png" />
    </View>
  );
}
```

### Prompt Information

After setting the `dot` attribute, a small red dot will be displayed at the top right corner of the icon. After setting the `info` attribute, the corresponding badge will be displayed at the top right corner of the icon.

```jsx
import warningIcon from '@tuya-miniapp/icons/dist/svg/Warning';
import { View } from '@ray-js/ray';
import { Icon } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <View style={{padding: 48}}>
      <Icon name={warningIcon} dot />
      <Icon name={warningIcon} info="9" />
      <Icon name={warningIcon} info="99+" />
    </View>
  );
}
```

### Icon color

Set the `color` attribute to control the icon color.

```jsx
import warningIcon from '@tuya-miniapp/icons/dist/svg/Warning';
import { Icon } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <Icon name={warningIcon} color="red" />
  );
}
```

### Icon size

Set the `size` attribute to control the icon size.

```jsx
import warningIcon from '@tuya-miniapp/icons/dist/svg/Warning';
import { Icon } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <Icon name={warningIcon} size="50px" />
  );
}
```

### Custom Icon

If you need to use more icons based on the existing Icon, you can import the corresponding font file and CSS file from a third-party iconfont. After that, you can use them directly in the Icon component. For example, they can be included in the `app.wxss` file.

```css
/* Introduce a third -party or custom font icon style */
@font-face {
  font-family: 'my-icon';
  src: url('./my-icon.ttf') format('truetype');
}

.my-icon {
  font-family: 'my-icon';
}

.my-icon-extra::before {
  content: '\e626';
}
```

```jsx
// Specify the class name as my-icon through class-prefix.
<Icon class-prefix="my-icon" name="extra" />
```

## API

### Props

| Parameters  | Description                                            | Type               | Default value |
| ----------- | ------------------------------------------------------ | ------------------ | ------------- |
| classPrefix | Class Prefix                                           | _string_           | `Icon`        |
| color       | Icon color                                             | _string_           | `inherit`     |
| customStyle | Custom Style                                           | _object_           | -             |
| dot         | Show red dot in upper right corner of icon             | _boolean_          | `false`       |
| info        | Text prompt in the upper right corner of the icon      | _string \| number_ | -             |
| name        | Icon name or Svg URL or image link                     | _string_           | -             |
| size        | Icon size, such as `20px`, `2em`, default unit is `px` | _string \| number_ | `inherit`     |

### Events

| Event Name | Description                      | Parameter |
| ---------- | -------------------------------- | --------- |
| onClick    | Triggered when clicking the icon | -         |

### External Style Class

| Class Name  | Description                                            |
| ----------- | ------------------------------------------------------ |
| customClass | Root node style class                                  |
| infoClass   | Text style class in the upper right corner of the icon |
