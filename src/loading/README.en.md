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

| Parameters | Description                                            | Type               | Default value |
| ---------- | ------------------------------------------------------ | ------------------ | ------------- |
| color      | color                                                  | _string_           | `#c9c9c9`     |
| size       | Loading icon size, default unit is 'px'.               | _string \| number_ | `30px`        |
| textSize   | The default unit for font size is 'px'.                | _string \| number_ | `14px`        |
| type       | Type with an optional value of `spinner`.              | _string_           | `circular`    |
| vertical   | Whether to vertically align the icons and text content | _boolean_          | `false`       |

### Slots

| 名称 | 说明             |
| ---- | ---------------- |
| -    | Load copywriting |

### External style

| Class Name  | Description     |
| ----------- | --------------- |
| customClass | Root node nodes |
