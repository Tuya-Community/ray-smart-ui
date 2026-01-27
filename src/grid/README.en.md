---
category: Layout
---

# Grid

### Introduction

The grid can horizontally divide a page into blocks of equal width, used for displaying content or for page navigation.

### Import

```jsx
import { Grid, GridItem } from '@ray-js/smart-ui';
```

## Code Demonstration

### Basic Usage

Set the icon within the grid using the `icon` attribute and the text content with the `text` attribute.

```jsx
import React from 'react';
import { Grid, GridItem } from '@ray-js/smart-ui';
import IconBubble from '@tuya-miniapp/icons/dist/svg/Bubble';

export default function Demo() {
  const array = [0, 1, 2, 3];
  return (
    <Grid>
      {array.map((item, index) => (
        <GridItem icon={IconBubble} text="Text" key={`${index + 1}`} />
      ))}
    </Grid>
  );
}
```

### Custom Number of Columns

By default, four grids are displayed in a row, but you can customize the number of columns using the `columnNum`.

```jsx
import { Grid, GridItem } from '@ray-js/smart-ui';
import IconBubble from '@tuya-miniapp/icons/dist/svg/Bubble';
import React from 'react';

export default function Demo() {
  const array = [0, 1, 2, 3, 4, 5];
  return (
    <Grid columnNum={2}>
      {array.map((item, index) => (
        <GridItem icon={IconBubble} text="Text" key={`${index + 1}`} />
      ))}
    </Grid>
  );
}
```

### Custom Content

The content displayed within the grid can be customized using slots.

```jsx
import { Grid, GridItem, Image } from '@ray-js/smart-ui';
import IconBubble from '@tuya-miniapp/icons/dist/svg/Bubble';
import React from 'react';

export default function Demo() {
  const array = [0, 1, 2];
  return (
    <Grid columnNum={2} border={false}>
      {array.map((item, index) => (
        <GridItem useSlot icon={IconBubble} text="Text" key={`${index + 1}`}>
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

### Square Grids

When the `square` attribute is set, the height of the grid will be equal to its width.

```jsx
import { Grid, GridItem } from '@ray-js/smart-ui';
import IconBubble from '@tuya-miniapp/icons/dist/svg/Bubble';
import React from 'react';

export default function Demo() {
  const array = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <Grid square>
      {array.map((item, index) => (
        <GridItem icon={IconBubble} text="Text" key={`${index + 1}`} />
      ))}
    </Grid>
  );
}
```

### Grid Spacing

The distance between grids can be set using the `gutter` attribute.

```jsx
import { Grid, GridItem } from '@ray-js/smart-ui';
import IconBubble from '@tuya-miniapp/icons/dist/svg/Bubble';
import React from 'react';

export default function Demo() {
  const array = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <Grid gutter="10px">
      {array.map((item, index) => (
        <GridItem icon={IconBubble} text="Text" key={`${index + 1}`} />
      ))}
    </Grid>
  );
}
```

### Horizontal Content

Set the `direction` attribute to `horizontal` to arrange the grid's content horizontally.

```jsx
import { Grid, GridItem } from '@ray-js/smart-ui';
import IconBubble from '@tuya-miniapp/icons/dist/svg/Bubble';
import React from 'react';

export default function Demo() {
  const array = [0, 1, 2];
  return (
    <Grid direction="horizontal" columnNum={3}>
      {array.map((item, index) => (
        <GridItem icon={IconBubble} text="Text" key={`${index + 1}`} />
      ))}
    </Grid>
  );
}
```

### Page Navigation

Page navigation can be conducted using the `url` attribute and the jump type can be controlled with `linkType`.

```jsx
import { Grid, GridItem } from '@ray-js/smart-ui';
import IconBubble from '@tuya-miniapp/icons/dist/svg/Bubble';
import IconHandPoint from '@tuya-miniapp/icons/dist/svg/HandPoint';
import React from 'react';

export default function Demo() {
  return (
    <Grid direction="horizontal" columnNum={3}>
      <GridItem icon={IconBubble} text="Navigate" linkType="navigateTo" url="/pages/home/index" />
      <GridItem icon={IconHandPoint} linkType="reLaunch" url="/pages/home/index" text="ReLaunch" />
    </Grid>
  );
}
```

### Badge Notifications

When the `dot` attribute is set, a small red dot is displayed in the upper right corner of the icon. When the `badge` attribute is set, the corresponding badge is displayed.

```jsx
import { Grid, GridItem } from '@ray-js/smart-ui';
import IconBubble from '@tuya-miniapp/icons/dist/svg/Bubble';
import IconHandPoint from '@tuya-miniapp/icons/dist/svg/HandPoint';
import React from 'react';

export default function Demo() {
  return (
    <Grid columnNum={3}>
      <GridItem icon={IconBubble} text="Text" dot />
      <GridItem icon={IconHandPoint} text="Text" badge="99+" />
    </Grid>
  );
}
```

## API

### Grid Props

| Parameter          | Description                                    | Type               | Default    |
| ------------------ | ---------------------------------------------- | ------------------ | ---------- |
| border | Whether to display a border | _boolean_ | `true` |
| center | Whether to center the grid content | _boolean_ | `true` |
| clickable | Whether to enable grid click feedback | _boolean_ | `false` |
| columnNum | Number of columns | _number_ | `4` |
| direction | Content direction, options are `horizontal` | _string_ | `vertical` |
| gutter | Space between grids, default unit is `px` | _string \| number_ | `0` |
| iconSize `v1.3.2` | Icon size, default unit is `px` | _string_ | `28px` |
| reverse `v1.7.0` | Swap icon and text positions | _boolean_ | `false` |
| square | Fix the grid as a square | _boolean_ | `false` |
| useSlot | Use customization slot | _boolean_ | `false` |

### External Grid Style Class

| Class Name    | Description    |
| ------------- | -------------- |
| customClass | Root node style class |

### GridItem Props

| Parameter            | Description                                                   | Type               | Default       |
| -------------------- | ------------------------------------------------------------- | ------------------ | ------------- |
| badge | Content of the top-right badge of the icon | _string \| number_ | - |
| dot | Show a small red dot on the top-right of the icon | _boolean_ | `false` |
| icon | Icon Svg Value or image link, see [Icon Component](/material/smartui?comId=icon) | _string_ | - |
| iconColor | Icon color | _string_ | - |
| iconPrefix `v1.7.0` | Third-party icon prefix | _string_ | `smart-icon` |
| linkType | Link jump type, options are `redirectTo` `switchTab` `reLaunch` | _string_ | `navigateTo` |
| text | Text | _string_ | - |
| url | Link address to jump to when clicked | _string_ | - |

### GridItem Events

| Event Name  | Description     | Callback Parameter |
| ----------- | --------------- | ------------------ |
| onClick | Triggered when the grid is clicked | - |

### GridItem Slots

| Name    | Description                                                |
| ------- | ---------------------------------------------------------- |
| -       | Customize all grid content, need to set `use-slot` attribute |
| icon | Custom icon, ineffective if `use-slot` or `icon` attribute is set |
| text | Custom text, ineffective if `use-slot` or `text` attribute is set |

### External GridItem Style Class

| Class Name     | Description     |
| -------------- | --------------- |
| contentClass | Content style class |
| customClass | Root node style class |
| iconClass | Icon style class |
| textClass | Text style class |

### Style Variables

The component provides the following CSS variables that can be used for custom styles. For usage, refer to the [ConfigProvider Component](/material/smartui?comId=config-provider).

| Name                          | Default Value                           | Description           |
| ----------------------------- | ---------------------------------------- | --------------------- |
| --grid-item-content-padding   | _@padding-md @padding-xs_                | Content padding       |
| --grid-item-content-background-color | _var(--app-B3, #ffffff)_         | Background color      |
| --grid-item-content-active-color | _#f2f3f5_                           | Active color          |
| --grid-item-icon-size         | _26px_                                   | Icon size             |
| --grid-item-text-color        | _var(--app-B6-N2, rgba(0, 0, 0, 0.7))_   | Text color            |
| --grid-item-text-font-size    | _12px_                                   | Text font size        |