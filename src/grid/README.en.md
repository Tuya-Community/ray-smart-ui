---
category: Layout
---

# Grid

### Introduce

Gongge can separate the page into a block of equal width in the horizontal direction to display the content or perform page navigation.

### Introduce

```jsx
import { Grid, GridItem } from '@ray-js/smart-ui';
```

## Code demonstration

### Basic usage

Set the icon inside the grid with the `icon` property, and the text content is set.

```jsx
import { Grid, GridItem } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const array = [0, 1, 2, 3];
  return (
    <Grid>
      {array.map((item, index) => (
        <GridItem icon="photo-o" text="文字" key={`${index + 1}`} />
      ))}
    </Grid>
  );
}
```

### Customized column number

The four grids are displayed by default, and the number of columns can be customized through the `columnnum`.

```jsx
import { Grid, GridItem } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const array = [0, 1, 2, 3, 4, 5];
  return (
    <Grid columnNum="3">
      {array.map((item, index) => (
        <GridItem icon="photo-o" text="character" key={`${index + 1}`} />
      ))}
    </Grid>
  );
}
```

### Custom content

Through the slot, the content of the lattice can be customized.

```jsx
import { Grid, GridItem, Image } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const array = [0, 1, 2];
  return (
    <Grid columnNum="3" border={false}>
      {array.map((item, index) => (
        <GridItem useSlot icon="photo-o" text="character" key={`${index + 1}`}>
          <Image
            width="90px"
            height="90px"
            fit="contain"
            src="https://static1.tuyacn.com/static/tuya-miniapp-doc/_next/static/images/logo-small.png"
          />
        </GridItem>
      ))}
    </Grid>
  );
}
```

### Square grid

After setting the `square` attribute, the height of the grid will be consistent with the width.

```jsx
import { Grid, GridItem, } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const array = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <Grid square>
      {array.map((item, index) => (
        <GridItem icon="photo-o" text="文字" key={`${index + 1}`} />
      ))}
    </Grid>
  );
}
```

### Plaid distance

Set the distance between the grid through the `Gutter` property.

```jsx
import { Grid, GridItem, } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const array = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <Grid gutter="10px">
      {array.map((item, index) => (
        <GridItem icon="photo-o" text="文字" key={`${index + 1}`} />
      ))}
    </Grid>
  );
}
```

### Horizontal

Set the `Direction` property to` horizontal` to make the contents of the palace stand horizontally.

```jsx
import { Grid, GridItem, } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const array = [0, 1, 2];
  return (
    <Grid direction="horizontal" columnNum="3">
      {array.map((item, index) => (
        <GridItem icon="photo-o" text="character" key={`${index + 1}`} />
      ))}
    </Grid>
  );
}
```

### Page jump

You can use the `url` property to jump the page, and control the jump type through the` linktype` attribute.

```jsx
import { Grid, GridItem, } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <Grid direction="horizontal" columnNum="2">
      <GridItem
        icon="photo-o"
        text="Navigate Jump"
        linkType="navigateTo"
        url="/pages/home/index"
      />
      <GridItem
        icon="search"
        linkType="reLaunch"
        url="/pages/home/index"
        text="ReLaunch Jump"
      />
    </Grid>
  );
}

```

### Prompt information

After setting the `dot` property, a small red dot will be displayed in the upper right corner of the icon.After setting the `Badge` attribute, the corresponding logo will be displayed in the upper right corner of the icon.

```jsx
import { Grid, GridItem, } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <Grid columnNum="2">
      <GridItem icon="home-o" text="character" dot />
      <GridItem icon="search" text="character" badge="99+" />
    </Grid>
  );
}
```

## API

### Grid Props

| Parameters | Description                                                                       | Type               | Default value |
| ---------- | --------------------------------------------------------------------------------- | ------------------ | ------------- |
| border     | Whether to display the border                                                     | _boolean_          | `true`        |
| center     | Whether to display the grid content in the middle                                 | _boolean_          | `true`        |
| clickable  | Do you turn on the grid and click feedback                                        | _boolean_          | `false`       |
| columnNum  | Column number                                                                     | _number_           | `4`           |
| direction  | The direction of the grid content arrangement, the optional value is `horizontal` | _string_           | `vertical`    |
| gutter     | The distance between the grid, the default unit is`px`                            | _string \| number_ | `0`           |
| iconSize   | The icon size, the default unit is`px`                                            | _string_           | `28px`        |
| reverse    | Whether to change the position of the icon and text                               | _boolean_          | `false`       |
| square     | Whether to fix the grid into a square                                             | _boolean_          | `false`       |
| useSlot    | Whether to use the slot of the custom content                                     | _boolean_          | `false`       |

### Grid External style

| Class Name  | Description     |
| ----------- | --------------- |
| customClass | Root node nodes |

### GridItem Props

| Parameters | Description                                                                       | Type               | Default value |
| ---------- | --------------------------------------------------------------------------------- | ------------------ | ------------- |
| badge      | The content of the logo in the upper right corner of the icon                     | _string \| number_ | -             |
| dot        | Whether to display the little red dot in the upper right corner of the icon       | _boolean_          | `false`       |
| icon       | Icon name or image link, optional values can be found in [Icon Component](#/icon) | _string_           | -             |
| iconColor  | Icon color                                                                        | _string_           | -             |
| iconPrefix | Third -party icon prefix                                                          | _string_           | `smart-icon`  |
| linkType   | Link jump types, optional values are `redirectTo`, `switchTab`, `reLaunch`.       | _string_           | `navigateTo`  |
| text       | character                                                                         | _string_           | -             |
| url        | Click the link to jump after jumping                                              | _string_           | -             |

### GridItem Events

| Event Name | Description                    | Return parameters |
| ---------- | ------------------------------ | ----------------- |
| onClick    | Trigger when clicking the grid | -                 |

### GridItem Slots

| Name | Description                                                                        |
| ---- | ---------------------------------------------------------------------------------- |
| -    | To customize all the content of the grid, the `useSlot` attribute needs to be set. |
| icon | Custom icons do not work if either the 'useSlot' or 'icon' attribute is set.       |
| text | Custom text. If `useSlot` or `text` attributes are set, it will not take effect.   |

### GridItem External style

| Class Name   | Description     |
| ------------ | --------------- |
| contentClass | Content pattern |
| customClass  | Root node nodes |
| iconClass    | Icon style      |
| textClass    | Text style      |
