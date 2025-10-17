---
category: Display
---

# Loading

### Introduce

Load the icon to indicate the transition state in the load.

### Introduce

```js
import { Loading } from '@ray-js/smart-ui';
```

## Code demonstration

### Load

```jsx
import { Loading } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';
import React from 'react';

export default function Demo() {
  return (
    <View>
      <Loading />
      <Loading type="spinner" />
    </View>
  );
}
```

### Custom color

```jsx
import { Loading } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';
import React from 'react';

export default function Demo() {
  return (
    <View>
      <Loading color="#1989fa" />
      <Loading type="spinner" color="#1989fa" />
    </View>
  );
}
```

### Load copywriting

```jsx
import { Loading } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <Loading size="24px">loading...</Loading>
  );
}
```

### Vertical arrangement

```jsx
import { Loading } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <Loading size="24px" vertical>
      loading...
    </Loading>
  );
}
```

## API

### Props

| Parameter         | Description                   | Type               | Default    |
| ----------------- | ----------------------------- | ------------------ | ---------- |
| color | Color | _string_ | `#c9c9c9` |
| size | Size of the loading icon, default unit is `px` | _string \| number_ | `30px` |
| textSize `v1.0.0` | Text size, default unit is `px` | _string \| number_ | `14px` |
| type | Type, optional value is `spinner` | _string_ | `circular` |
| vertical `v1.0.0` | Whether to vertically align icons and text | _boolean_ | `false` |

### Slots

| Name | Description |
| ---- | ----------- |
| -    | Loading text |

### External Style Classes

| Class Name    | Description    |
| ------------- | -------------- |
| customClass | Root node style |
### Style Variables

The component provides the following CSS variables that can be used for custom styles. For usage, refer to the [ConfigProvider Component](/material/smartui?comId=config-provider).

| Name                                   | Default Value                           | Description                    |
| -------------------------------------- | ---------------------------------------- | ------------------------------ |
| --loading-text-color                   | _#969799_                                | Text color                     |
| --loading-text-font-size               | _14px_                                   | Text font size                 |
| --loading-text-line-height             | _20px_                                   | Text line height               |
| --loading-spinner-color                | _#1989FA_                                | Spinner color                  |
| --loading-spinner-size                 | _30px_                                   | Spinner size                   |
| --loading-spinner-animation-duration   | _0.8s_                                   | Animation duration             |