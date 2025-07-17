<!-- ---
category: Display
--- -->

# Tag

### Introduction

Used to mark keywords and general content.

### Introduce

```jsx
import { Tag } from '@ray-js/smart-ui';
```

## Code demonstration

### Basic usage

Control the tag color through the `type` attribute, default is gray.

```jsx
import { Tag } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  return (
    <View>
      <Tag type="primary">Label</Tag>
      <Tag type="success">Label</Tag>
      <Tag type="danger">Label</Tag>
      <Tag type="warning">Label</Tag>
    </View>
  );
}
```

### Hollow style

Setting the `plain` attribute to a hollow style.

```jsx
<Tag plain type="primary">Label</Tag>
<Tag plain type="success">Label</Tag>
<Tag plain type="danger">Label</Tag>
<Tag plain type="warning">Label</Tag>
```

### Rounded style

Set to rounded style via `round`.

```jsx
<Tag round type="primary">Label</Tag>
<Tag round type="success">Label</Tag>
<Tag round type="danger">Label</Tag>
<Tag round type="warning">Label</Tag>
```

### Label

Set as markup style (semi-rounded corners) through `mark`.

```jsx
<Tag mark type="primary">Label</Tag>
<Tag mark type="success">Label</Tag>
<Tag mark type="danger">Label</Tag>
<Tag mark type="warning">Label</Tag>
```

### Custom color

```jsx
<Tag color="#f2826a">Label</Tag>
<Tag color="#7232dd">Label</Tag>
<Tag color="#7232dd" plain>Label</Tag>
<Tag color="#ffe1e1" textColor="#ad0000">Label</Tag>
```

### Label

```jsx
<Tag type="danger">Label</Tag>
<Tag type="danger" size="medium">Label</Tag>
<Tag type="danger" size="large">Label</Tag>
```

### Close label

Adding the `closeable` attribute makes the tag closable. Closing the tag triggers the `close` event, where you can execute the logic to hide the tag.

```jsx
<Tag closeable size="medium" type="success" id="success" onClose="onClose">
  Label
</Tag>
```

## API

### Props

| Parameters | Description                                                         | Type      | Default value |
| ---------- | ------------------------------------------------------------------- | --------- | ------------- |
| closeable  | Whether it is a closure label                                       | _boolean_ | `false`       |
| color      | Tag color                                                           | _string_  | -             |
| mark       | Whether it is a tag style                                           | _boolean_ | `false`       |
| plain      | Whether it is hollow                                                | _boolean_ | `false`       |
| round      | Whether it is a rounded style                                       | _boolean_ | `false`       |
| size       | Size, optional values are `large` and `medium`                      | _string_  | -             |
| textColor  | Text color, with higher priority than the 'color' attribute.        | _string_  | `white`       |
| type       | Type, optional values are `primary`, `success`, `danger`, `warning` | _string_  | -             |

### Slot

| Name | Description                |
| ---- | -------------------------- |
| -    | Custom Tag Display Content |

### Events

| Event Name | Description                      | Return parameters |
| ---------- | -------------------------------- | ----------------- |
| onClose    | Triggered when closing the label | -                 |

### External style

| Class Name  | Description     |
| ----------- | --------------- |
| customClass | Root node nodes |
