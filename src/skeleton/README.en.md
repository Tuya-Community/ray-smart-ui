---
category: Display
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
  return <Skeleton title row={3} />;
}
```

### Display avatar

Display avatar placeholder through `avatar` property.

```jsx
import { Skeleton } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return <Skeleton title avatar row="3" />
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
    <Skeleton title avatar row="3" loading={!show}>
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

| Parameters  | Description                                                                                               | Type                 | Default value |
| ----------- | --------------------------------------------------------------------------------------------------------- | -------------------- | ------------- |
| animate     | Whether to start an animation                                                                             | _boolean_            | `true`        |
| avatar      | Whether to display the avatar occupies map                                                                | _boolean_            | `false`       |
| avatarShape | Avatar placeholder shape, optional value is `square`.                                                     | _string_             | `round`       |
| avatarSize  | Avatar seat occupancy diagram                                                                             | _string \| number_   | `32px`        |
| loading     | Show placeholder image or not. When passed `false`, the content of the child component will be displayed. | _boolean_            | `true`        |
| row         | Duanchu seats                                                                                             | _number_             | `0`           |
| rowWidth    | The width of the seat occupies is passed, and the width of each line can be set to set the array          | _string \| string[]_ | `100%`        |
| title       | Whether to display the title of the title                                                                 | _boolean_            | `false`       |
| titleWidth  | The width of the title of the title                                                                       | _string \| number_   | `40%`         |

### External style

| Class Name  | Description                           |
| ----------- | ------------------------------------- |
| avatarClass | Avatar occupy style category          |
| customClass | Root node nodes                       |
| rowClass    | Paragraphs occupying pattern category |
| titleClass  | Title Title Style Category            |
