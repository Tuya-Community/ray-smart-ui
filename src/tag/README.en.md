---
category: Display
new: true
---

# Tag

> Introduced in v2.0.0

### Introduction

Used for marking keywords and summarizing main content.

### Import

```jsx
import { Tag } from '@ray-js/smart-ui';
```

## Code Examples

### Basic Usage

Control the tag color with the `type` property, default is gray.

```jsx
import { Tag } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  return (
    <View>
      <Tag type="primary">Tag</Tag>
      <Tag type="success">Tag</Tag>
      <Tag type="danger">Tag</Tag>
      <Tag type="warning">Tag</Tag>
    </View>
  );
}
```

### Rounded Style

Set `round` for rounded style.

```jsx
import { Tag } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  return (
    <View>
      <Tag round type="primary">Tag</Tag>
      <Tag round type="success">Tag</Tag>
      <Tag round type="danger">Tag</Tag>
      <Tag round type="warning">Tag</Tag>
    </View>
  );
}
```

### Mark Style

Set `mark` for mark style (semi-rounded).

```jsx
import { Tag } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  return (
    <View>
      <Tag mark type="primary">Tag</Tag>
      <Tag mark type="success">Tag</Tag>
      <Tag mark type="danger">Tag</Tag>
      <Tag mark type="warning">Tag</Tag>
    </View>
  );
}
```

### Hollow Style

Set `plain` for hollow style.

```jsx
import { Tag } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  return (
    <View>
      <Tag plain type="primary">Tag</Tag>
      <Tag plain type="success">Tag</Tag>
      <Tag plain type="danger">Tag</Tag>
      <Tag plain type="warning">Tag</Tag>
    </View>
  );
}
```

### Custom Colors

```jsx
import { Tag } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  return (
    <View>
      <Tag color="rgba(16, 208, 208, 1)">Tag</Tag>
      <Tag color="rgba(16, 208, 208, 0.2)" text-color="rgba(16, 208, 208, 1)">Tag</Tag>
      <Tag color="rgba(16, 208, 208, 1)" plain>Tag</Tag>
    </View>
  );
}
```

### Tag Size

```jsx
import { Tag } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  return (
    <View>
      <Tag type="danger">Tag</Tag>
      <Tag type="danger" size="medium">Tag</Tag>
      <Tag type="danger" size="large">Tag</Tag>
    </View>
  );
}
```

### Closable Tag

Add `closeable` attribute to indicate a tag can be closed. Closing the tag triggers `close` event, where you can execute logic to hide the tag.

```jsx
import { Tag } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  return (
    <View>
      <Tag closeable size="medium" type="primary" id="primary" onClose="onClose">
        Tag
      </Tag>
      <Tag closeable size="medium" type="success" id="success" onClose="onClose">
        Tag
      </Tag>
    </View>
  );
}
```

## API

### Props

| Parameter  | Description                                               | Type      | Default |
| ---------- | --------------------------------------------------------- | --------- | ------- |
| closeable | Whether it's a closeable tag | _boolean_ | `false` |
| color | Tag color | _string_ | - |
| mark | Whether it's a mark style | _boolean_ | `false` |
| plain | Whether it's a hollow style | _boolean_ | `false` |
| round | Whether it's a round style | _boolean_ | `false` |
| size | Size, optional values are `large` `medium` | _string_ | - |
| textColor | Text color, has higher priority than the `color` attribute | _string_ | `white` |
| type | Type, optional values are `primary` `success` `danger` `warning` | _string_ | - |

### Slot

| Name | Description       |
| ---- | ----------------- |
| -    | Custom Tag content |

### Events

| Event name | Description       | Callback parameters |
| ---------- | ----------------- | ------------------- |
| onClose | Triggered when the tag is closed | - |

### External Style Classes

| Class name    | Description          |
| ------------- | -------------------- |
| customClass | Root node style class |

### Style Variables

The component provides the following CSS variables for custom styles. For the usage method, please refer to the [ConfigProvider component](/material/smartui?comId=config-provider).

| Name | Default Value | Description |
| --------------------------------- | ------------------ | ---- |
| --tag-padding        | _2px 8px_                           | Component padding    |
| --tag-text-color        | _#fff_                         | Text color    |
| --tag-border-radius  | _4px_    | Component outer radius    |
| --tag-line-height  | _17px_    | Default text line height    |
| --tag-medium-line-height  | _20px_    | Medium size text line height    |
| --tag-large-line-height  | _22px_    | Large size text line height    |
| --tag-font-size  | _12px_  | Default font size   |
| --tag-medium-font-size  | _14px_    | Medium size font size    |
| --tag-large-font-size  | _16px_    | Large size font size    |
| --tag-round-border-radius  | _999px_    | Round mode component outer radius    |
| --tag-default-color  | _#969799_    | Default mode background color or border color    |
| --tag-danger-color  | _#ee0a24_    | Danger mode background color or border color    |
| --tag-primary-color  | _#1989fa_    | Primary mode background color or border color    |
| --tag-success-color  | _#07c160_    | Success mode background color or border color    |
| --tag-warning-color  | _#ff976a_    | Warning mode background color or border color    |
| --tag-plain-background-color  | _transparent_    | Hollow mode background color    |