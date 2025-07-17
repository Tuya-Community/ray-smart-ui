---
category: Layout
---

# Layout

### Introduction

Layout provides `Row` and `Col` components for row and column layout.

### Introduce

```jsx
import { Row, Col } from '@ray-js/smart-ui';
```

## Code Demonstration

### Basic Usage

The Layout component offers a '24-column grid'. You can set the width percentage of a column by adding the 'span' attribute to a 'Col'. Additionally, you can add the 'offset' attribute to set the column's offset width, calculated the same way as span.

```jsx
import { Row, Col } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';
import React from 'react';

export default function Demo() {
  return (
    <View>
      <Row>
        <Col span="8">span: 8</Col>
        <Col span="8">span: 8</Col>
        <Col span="8">span: 8</Col>
      </Row>
      <Row>
        <Col span="4">span: 4</Col>
        <Col span="10" offset="4">
          offset: 4, span: 10
        </Col>
      </Row>
      <Row>
        <Col offset="12" span="12">
          offset: 12, span: 12
        </Col>
      </Row>
    </View>
  );
}
```

### Set column element spacing

The `gutter` property can be used to set the spacing between column elements, with a default spacing of 0.

```jsx
import { Row, Col } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <Row gutter="20">
      <Col span="8">span: 8</Col>
      <Col span="8">span: 8</Col>
      <Col span="8">span: 8</Col>
    </Row>
  );
}
```

## API

### Row Props

| Parameter | Description                             | Type               | Default Value |
| --------- | --------------------------------------- | ------------------ | ------------- |
| gutter    | Spacing between column elements (in px) | _string \| number_ | -             |

### Col Props

| Parameter | Description                    | Type               | Default |
| --------- | ------------------------------ | ------------------ | ------- |
| offset    | Column element offset distance | _string \| number_ | -       |
| span      | Column Element Width           | _string \| number_ | -       |

### External Style Class

| Class Name  | Description           |
| ----------- | --------------------- |
| customClass | Root node style class |
