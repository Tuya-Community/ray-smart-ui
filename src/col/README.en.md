---
category: Layout
---

# Layout

### Introduction

Layout provides two components, `Row` and `Col`, for grid layout.

### Import

```jsx
import { Row, Col } from '@ray-js/smart-ui';
```

## Code Demonstration

### Basic Usage

The Layout component provides a `24-column grid`. You can set the column width percentage by adding the `span` attribute in `Col`. Additionally, you can set the column offset width by adding the `offset` attribute, calculated in the same way as span.

```jsx
import { Row, Col } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';
import React from 'react';

export default function Demo() {
  return (
    <View>
      <Row>
        <Col span="8" customClass={styles.dark}>
          span: 8
        </Col>
        <Col span="8" customClass={styles.light}>
          span: 8
        </Col>
        <Col span="8" customClass={styles.dark}>
          span: 8
        </Col>
      </Row>
      <Row>
        <Col span="4" customClass={styles.dark}>
          span: 4
        </Col>
        <Col span="10" offset="4" customClass={styles.light}>
          offset: 4, span: 10
        </Col>
      </Row>
      <Row>
        <Col offset="12" span="12" customClass={styles.dark}>
          offset: 12, span: 12
        </Col>
      </Row>
    </View>
  );
}
```

less style:

```less
.dark,
.light {
  color: #fff;
  font-size: 13px;
  line-height: 30px;
  text-align: center;
  margin-bottom: 10px;
  background-clip: content-box;
}

.dark {
  background-color: #39a9ed;
}

.light {
  background-color: #66c6f2;
}
```

### Adding Spacing Between Column Elements

You can set the spacing between column elements using the `gutter` attribute. The default spacing is 0.

```jsx
import { Row, Col } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <Row gutter="20">
      <Col span="8" customClass={styles.dark}>
        span: 8
      </Col>
      <Col span="8" customClass={styles.light}>
        span: 8
      </Col>
      <Col span="8" customClass={styles.dark}>
        span: 8
      </Col>
    </Row>
  );
}
```
less 样式：

```less
.dark,
.light {
  color: #fff;
  font-size: 13px;
  line-height: 30px;
  text-align: center;
  margin-bottom: 10px;
  background-clip: content-box;
}

.dark {
  background-color: #39a9ed;
}

.light {
  background-color: #66c6f2;
}
```


## API

### Row Props

| Parameter | Description                                  | Type               | Default |
| --------- | -------------------------------------------- | ------------------ | ------- |
| gutter | Spacing between column elements (in px) | _string \| number_ | - |

### Col Props

| Parameter | Description           | Type               | Default |
| --------- | --------------------- | ------------------ | ------- |
| offset | Column element offset | _string \| number_ | - |
| span | Column element width | _string \| number_ | - |

### External Style Classes

| Class Name    | Description     |
| ------------- | --------------- |
| customClass | Root node style |
### Style Variables

The component provides the following CSS variables that can be used for custom styles. For usage, refer to the [ConfigProvider Component](/material/smartui?comId=config-provider).

| Name                                          | Default Value                                 | Description                                |
| --------------------------------------------- | --------------------------------------------- | ------------------------------------------ |
| --collapse-item-transition-duration           | _0.3s_                                        | Duration of the collapse item transition   |
| --collapse-item-content-padding               | _15px_                                        | Padding for the collapse item content      |
| --collapse-item-content-font-size             | _13px_                                        | Font size of the collapse item content     |
| --collapse-item-content-line-height           | _1.5_                                         | Line height of the collapse item content   |
| --collapse-item-content-text-color            | _#969799_                                     | Text color of the collapse item content    |
| --collapse-item-content-background-color      | _var(--app-B6, #fff)_                         | Background color of the collapse item content |
| --collapse-item-title-disabled-color          | _#c8c9cc_                                     | Color of the disabled collapse item title  |