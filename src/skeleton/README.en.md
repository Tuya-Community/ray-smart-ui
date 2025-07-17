---
category: Display
assets: Skeleton
---

# Skeleton

### Introduction

It is used to display a set of seat occupied graphics during the content loading process.

### Introduce

```jsx
import { Skeleton } from '@ray-js/smart-ui';
```

## Code demonstration

### Basic usage

Display the title placeholder using the `title` attribute, and configure the number of placeholder paragraph lines using the `row` attribute.

```jsx
import { Skeleton } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Skeleton title row={3} rowWidth={['100%', '100%', '80%']} />;
}
```

### Display avatar

Display avatar placeholder through `avatar` property.

```jsx
import { Skeleton } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Skeleton title avatar row={3} />
}
```

### Show subclase

Setting the `loading` attribute to `false` indicates that the content has finished loading, at which point the placeholder image will be hidden and the child components of `Skeleton` will be displayed.

```jsx
import { View } from '@ray-js/ray';
import { Skeleton, Switch, Image } from '@ray-js/smart-ui';
import React, { useState } from 'react';

export default function Demo() {
  const [show, setShow] = useState(false);
  const onChange = event => {
    setShow(event.detail);
  };

  return <View>
    <Switch checked={show} size="24px" onChange={onChange} />
    <Skeleton title avatar row={3} loading={!show}>
      <View>
        <Image
          width="32px" height="32px"
          style={styles.demoPreviewImg}
          src="https://static1.tuyacn.com/static/tuya-miniapp-doc/_next/static/images/logo-small.png"
        />
        <View style={styles.demoContent}>
          <View style={styles.demoContentH3}>About Tuya Weapp</View>
          <View style={styles.demoContentP}>
            Tuya Weapp is the mini program version of the mobile React component library. Both are based on the same visual specifications, providing consistent API interfaces to help developers quickly build mini program applications.
          </View>
        </View>
      </View>
    </Skeleton>
  </View>
}

const styles = {
  demoContent: {
    paddingTop: '6px',
  },
  demoContentH3: {
    margin: '0',
    fontSize: '18px',
    lineHeight: '20px',
  },
  demoContentP: {
    margin: '13px 0 0',
    fontSize: '14px',
    lineHeight: '20px',
  },
  demoPreviewImg: {
    flexShrink: 0,
    width: '32px',
    height: '32px',
    marginRight: '16px',
  },
};
```

## API

### Props

| Parameter    | Description                                 | Type                 | Default |
| ------------ | ------------------------------------------- | -------------------- | ------- |
| animate | Whether to enable animation | _boolean_ | `true` |
| avatar | Whether to display an avatar placeholder | _boolean_ | `false` |
| avatarShape | Shape of the avatar placeholder, options are `square` | _string_ | `round` |
| avatarSize | Size of the avatar placeholder | _string \| number_ | `32px` |
| loading | Whether to display the placeholder, when `false` content of sub-components will be shown | _boolean_ | `true` |
| row | Number of placeholder paragraph rows | _number_ | `0` |
| rowWidth | Width of the placeholder paragraphs, can be an array to set width of each row | _string \| string[]_ | `100%` |
| title | Whether to display a title placeholder | _boolean_ | `false` |
| titleWidth | Width of the title placeholder | _string \| number_ | `40%` |

### External Style Classes

| Class Name    | Description       |
| ------------- | ----------------- |
| avatarClass | Avatar placeholder style class |
| customClass | Root node style class |
| rowClass | Paragraph placeholder style class |
| titleClass | Title placeholder style class |

### Style Variables

The component provides the following CSS variables that can be used for custom styles. For usage, refer to the [ConfigProvider Component](/material/smartui?comId=config-provider).

| Name                          | Default Value                           | Description              |
| ----------------------------- | ---------------------------------------- | ------------------------ |
| --skeleton-padding            | _0 @padding-md_                         | Skeleton screen padding  |
| --skeleton-row-height         | _16px_                                  | Skeleton row height      |
| --skeleton-row-background-color | _var(--app-B3, #ffffff)_              | Skeleton row background color |
| --skeleton-row-margin-top     | _12px_                                  | Skeleton row top margin  |
| --skeleton-avatar-background-color | _var(--app-B3, #ffffff)_           | Skeleton avatar background color |
| --skeleton-animation-duration | _1.2s_                                  | Animation duration       |