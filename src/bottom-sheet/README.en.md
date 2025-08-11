---
category: Feedback
---

# BottomSheet

### Introduction

The bottom popup panel; the difference from `Popup` and `ActionSheet` is that the safe area is covered by padding, suitable for scenarios where seamless integration with the bottom is required, introduced since v2.0.0.

### Import

```jsx
import { BottomSheet } from '@ray-js/smart-ui';
```

## Code Demos

### Basic Usage

Pass a `title` text, and a bottom popup with a title will pop up.

```jsx
import React from 'react';
import { BottomSheet, Button } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  const [show, setShow] = React.useState(false);
  const toggleBottomSheet = React.useCallback(() => setShow(!show), [show]);

  return (
    <View>
      <Button type="primary" onClick={toggleBottomSheet}>
        Pop-up Menu
      </Button>
      <BottomSheet title="Title" show={show} onClose={toggleBottomSheet} />
    </View>
  );
}
```

### Custom

Customize the panel by passing in child element nodes.

```jsx
import React from 'react';
import { BottomSheet, Button } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  const [show, setShow] = React.useState(false);
  const toggleBottomSheet = React.useCallback(() => setShow(!show), [show]);

  return (
    <View>
      <Button type="primary" onClick={toggleBottomSheet}>
        Pop-up Menu
      </Button>
      <BottomSheet show={show} title="Title" onClose={toggleBottomSheet}>
        <View className="content" />
        <View className="footer">
          <Button type="info" block>Completed</Button>
        </View>
      </BottomSheet>
    </View>
  );
}
```

```css
.content {
  display: flex;
  justify-content: center;
  font-size: 20px;
  background: var(--app-B1, #f6f7fb);
  color: var(--app-B4-N1, #3d3d3d);
}

.footer {
  margin: 16px 0;
}
```

### Maximum Height Restriction

The default maximum height of the bottom popup window is not allowed to exceed 50% of the screen, but the maximum height can be customized via `--bottom-sheet-max-height`. In v2.5.0 and later, when the content reaches the maximum height, the component will automatically scroll internally!

```jsx
import React from 'react';
import { BottomSheet, Button } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  const [show, setShow] = React.useState(false);
  const toggleBottomSheet = React.useCallback(() => setShow(!show), [show]);

  return (
    <View>
      <Button type="primary" onClick={toggleBottomSheet}>
        Pop-up Menu
      </Button>
      <BottomSheet show={show} title="Title" onClose={toggleBottomSheet}>
        <View style={{ backgroundColor: 'red', height: '100px' }} />
        <View style={{ backgroundColor: 'blue', height: '100px' }} />
        <View style={{ backgroundColor: 'black', height: '100px' }} />
        <View style={{ backgroundColor: 'yellow', height: '100px' }} />
        <View style={{ backgroundColor: 'pink', height: '100px' }} />
      </BottomSheet>
    </View>
  );
}
```

### Fixed Height `v2.5.0`

The `contentHeight` can be used to set the height of the content area. Once `contentHeight` is set, the maximum height of the component becomes ineffective, allowing you to customize and write content inside.

```jsx
import React from 'react';
import { BottomSheet, Button } from '@ray-js/smart-ui';
import { View, ScrollView } from '@ray-js/ray';

export default function Demo() {
  const [show, setShow] = React.useState(false);
  const toggleBottomSheet = React.useCallback(() => setShow(!show), [show]);

  return (
    <View>
      <Button type="primary" onClick={toggleBottomSheet}>
        Popup Menu
      </Button>
      <BottomSheet 
        show={show} 
        title="Title" 
        content-height="500px" 
        onClose={toggleBottomSheet}
      >
        <ScrollView scroll-y style={{ height: '300px' }}>
          <View style={{ backgroundColor: 'red', height: '100px' }} />
          <View style={{ backgroundColor: 'blue', height: '100px' }} />
          <View style={{ backgroundColor: 'black', height: '100px' }} />
          <View style={{ backgroundColor: 'yellow', height: '100px' }} />
          <View style={{ backgroundColor: 'pink', height: '100px' }} />
        </ScrollView>
        <View style={{ backgroundColor: 'white', height: '100px' }} />
        <View style={{ backgroundColor: 'orange', height: '100px' }} />
      </BottomSheet>
    </View>
  );
}
```

### Insert title using slot `v2.6.1`

```jsx
import React from 'react';
import { BottomSheet, Button } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  const [show, setShow] = React.useState(false);
  const toggleBottomSheet = React.useCallback(() => setShow(!show), [show]);

  return (
    <View>
      <Button type="primary" onClick={toggleBottomSheet}>
        Popup Menu
      </Button>
      <BottomSheet 
        show={show} 
        slot={{
          title: <View>Slot Title</View>
        }}
        onClose={toggleBottomSheet}
      >
        <View style={{ backgroundColor: 'orange', height: '100px' }} />
      </BottomSheet>
    </View>
  );
}
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| show | Whether to display the bottom sheet | _boolean_ | `false` |
| title | Title | _string_ | - |
| iconSize | Size of the close button in the title | _string \| number_ | `24` |
| iconColor | Color of the close button in the title | _string_ | `--app-B4-N3` \|\| `rgba(0, 0, 0, 0.5)` |
| round | Whether to display rounded corners | _boolean_ | `true` |
| zIndex | z-index level | _number_ | `100` |
| overlay | Whether to display the overlay | _boolean_ | `true` |
| closeOnClickOverlay | Whether clicking the overlay closes the menu | _boolean_ | `true` |
| nativeDisabled `v2.5.0` | Whether to disable local gestures during the opening of the dialog; it will call `ty.nativeDisabled(true)` when the dialog starts the entrance animation, and call `ty.nativeDisabled(false)` at the end of the closing animation to restore the click ability of components on different layers. Since `ty.nativeDisabled` works globally, pay attention to whether to pass the `native-disabled` attribute and the timing of closing when multiple dialog components are opened simultaneously, to prevent the `native-disabled` attribute from being ineffective. | _boolean_ | `false` |
| contentHeight `v2.5.0` | Content area height. When this value is set, the component's max-height will be invalid. | _number \| string_ | `false` |
| maxHeight `v2.6.0` | The maximum height of the entire component | _number \| string_ | - |
| showClose `v2.6.1` | Whether to display the close icon | _boolean_ | - |


### Events

| Event Name         | Description                 | Parameters |
| ------------------ | --------------------------- | ---------- |
| onClose | Triggered when closing popup | - |
| onBeforeEnter | Triggered before entering | - |
| onEnter | Triggered during entering | - |
| onAfterEnter | Triggered after entering | - |
| onBeforeLeave | Triggered before leaving | - |
| onLeave | Triggered during leaving | - |
| onAfterLeave | Triggered after leaving | - |
| onClickOverlay | Triggered when clicking overlay | - |


### Slot

| name          | Description           |
| ------------- | -------------- |
| - | content |
| title `v2.6.1` | Title Slot |


### External Style Classes

| Class Name    | Description   |
| ------------- | ------------- |
| customClass | Root node style class |

### Style Variables

The component offers the following CSS variables for custom styles. For usage, please refer to the [ConfigProvider component](/material/smartui?comId=config-provider).

| Name                          | Default Value                            | Description |
| ----------------------------- | ---------------------------------------- | ----------- |
| --bottom-sheet-width        | _100%_                           | Width of the bottom sheet    |
| --bottom-sheet-min-height        | _auto_                         | Minimum height of the bottom sheet    |
| --bottom-sheet-max-height  | _50%_    | Maximum height of the bottom sheet    |
| --bottom-sheet-padding  | _0 16px_    | Inner padding of the bottom popup content area    |
| --bottom-sheet-icon-margin  | _16px 16px 0 0_    | Margin of the close icon in the bottom sheet    |
| --bottom-sheet-header-height  | _56px_    | Height of the bottom sheet header    |
| --bottom-sheet-header-color  | _var(--app-B4-N1, rgba(0, 0, 0, 1))_  | Text color of the bottom sheet header   |
| --bottom-sheet-header-font-size  | _17px_    | Font size of the bottom sheet header text    |
| --bottom-sheet-header-font-weight  | _600_    | Font weight of the bottom sheet header text    |
| --bottom-sheet-font-color  | _var(--app-B4-N1, rgba(0, 0, 0, 1))_    | Text color of the bottom sheet    |
| --bottom-sheet-header-padding `v2.5.0`  | _0 16px_    | Padding of the bottom popup header    |

## FAQ

### The component's content height cannot be increased beyond a certain point

The BottomSheet component has a max-height limit internally to restrict its maximum height. You need to override the component's styles to achieve this, for example:

```css
.my-bottom-sheet {
  --bottom-sheet-max-height: 100%;
}
```
In version 2.5.0 and later, you can set `contentHeight` to adjust the height of the content area, at which point max-height will become ineffective.

### Issue of Unable to Scroll When Component Content is Too Tall on Real Device

1. You can upgrade to the latest v2.5.0 to fix this issue, it will automatically scroll when too tall.
2. Or wrap a ScrollView component around the content area, below is an example with max-height set to 50%, where `env(safe-area-inset-bottom)` is the bottom safe area.

```jsx
<BottomSheet show>
  <ScrollView style={{ height: 'calc(50vh - 56px - env(safe-area-inset-bottom))'}} scrollY>
    <View style={{ height: 2000 }}><View>
  <ScrollView>
</BottomSheet>
```

### Content with absolute positioning at the bottom of the component gets obscured on the actual device.

After upgrading to the latest v2.5.0, you can refer to the Fixed Height example to place content that requires absolute positioning at the bottom, and wrap the remaining content with a ScrollView.