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

### Maximum height limit

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

### Draggable `v2.7.2`

By setting the `draggable` property, the bottom sheet can support dragging to adjust height.

```jsx
import React, { useEffect, useState } from 'react';
import { BottomSheet, Button } from '@ray-js/smart-ui';
import { View, getSystemInfoSync } from '@ray-js/ray';

export default function Demo() {
  const [show, setShow] = React.useState(false);
  const [closeDragHeight, setCloseDragHeight] = useState(0);

  useEffect(() => {
    const systemInfo = getSystemInfoSync();
    setCloseDragHeight(systemInfo.windowHeight * 0.4);
  }, []);

  const toggleBottomSheet = React.useCallback(() => setShow(!show), [show]);

  return (
    <View>
      <Button type="primary" onClick={toggleBottomSheet}>
        Pop-up Menu
      </Button>
      <BottomSheet
        show={show}
        draggable
        closeDragHeight={closeDragHeight}
        midDragHeight={300}
        onClose={toggleBottomSheet}
      >
        <View style={{ backgroundColor: 'red', height: '300px' }} />
      </BottomSheet>
    </View>
  );
}
```

### Set the Range of Dragging `v2.7.2`

Control the dragging range by setting `minDragHeight`, `maxDragHeight`, `midDragHeight`, and `closeDragHeight`.

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
      <BottomSheet
        show={show}
        draggable
        midDragHeight={300}
        minDragHeight={300}
        maxDragHeight={300}
        closeDragHeight={300}
        onClose={toggleBottomSheet}
      >
        <View style={{ backgroundColor: 'red', height: '300px' }} />
      </BottomSheet>
    </View>
  );
}
```

### Draggable with Title `v2.7.2`

The dragging feature can be used together with a title.

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
      <BottomSheet
        title="Draggable with Title"
        show={show}
        draggable
        midDragHeight={300}
        minDragHeight={300}
        maxDragHeight={300}
        closeDragHeight={300}
        onClose={toggleBottomSheet}
      >
        <View style={{ backgroundColor: 'red', height: '300px' }} />
      </BottomSheet>
    </View>
  );
}
```

### Listen to Drag Position `v2.7.2`

You can listen to the panel position when dragging ends through the `onDragPosition` event.

```jsx
import React, { useState } from 'react';
import { BottomSheet, Button } from '@ray-js/smart-ui';
import { View, Text } from '@ray-js/ray';

export default function Demo() {
  const [show, setShow] = React.useState(false);
  const [dragPosition, setDragPosition] = useState<'max' | 'mid' | 'min' | ''>('');
  const toggleBottomSheet = React.useCallback(() => setShow(!show), [show]);

  const onDragPosition = React.useCallback((e: any) => {
    const position = e.detail; // 'max' | 'mid' | 'min'
    setDragPosition(position);
  }, []);

  const getDragPositionText = () => {
    const positionMap = {
      max: 'Maximum',
      mid: 'Middle',
      min: 'Minimum',
    };
    return positionMap[dragPosition as keyof typeof positionMap] || dragPosition;
  };

  return (
    <View>
      <Button type="primary" onClick={toggleBottomSheet}>
        Pop-up Menu
      </Button>
      <BottomSheet
        show={show}
        draggable
        midDragHeight={300}
        minDragHeight={100}
        maxDragHeight={600}
        onDragPosition={onDragPosition}
        onClose={toggleBottomSheet}
      >
        {dragPosition && (
          <View
            style={{
              marginTop: '16px',
              padding: '12px',
              backgroundColor: '#f0f0f0',
              borderRadius: '4px',
            }}
          >
            <Text>Current Panel Position: {getDragPositionText()}</Text>
          </View>
        )}
      </BottomSheet>
    </View>
  );
}
```

## API

### Props

| Parameter                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Type               | Default                                 |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | --------------------------------------- |
| closeDragHeight `v2.7.2` | Threshold height for closing on drag; if the height goes below this while dragging, the sheet will automatically close | _number_ | `windowHeight * 0.4` |
| closeOnClickOverlay | Whether clicking the overlay closes the menu | _boolean_ | `true` |
| contentHeight `v2.5.0` | Content area height. When this value is set, the component's max-height will be invalid. This value is ignored when draggable is set. | _number \| string_ | `false` |
| draggable `v2.7.2` | Whether dragging to adjust panel height is supported | _boolean_ | `false` |
| iconColor | Color of the close button in the title | _string_ | `--app-B4-N3` \|\| `rgba(0, 0, 0, 0.5)` |
| iconSize | Size of the close button in the title | _string \| number_ | `24` |
| lockMaxDrag `v2.8.1` | Whether to lock the maximum drag height. When set to `true`, the panel height will not exceed `max-drag-height` during dragging | _boolean_ | `false` |
| lockScroll `v2.8.1` | Whether to lock background scrolling | _boolean_ | `true` |
| maxDragHeight `v2.7.2` | Maximum allowed height when dragging | _number_ | `windowHeight * 0.5` |
| maxHeight `v2.6.0` | The maximum height of the entire component | _number \| string_ | - |
| midDragHeight `v2.7.2` | Middle state height when dragging | _number_ | `windowHeight * 0.1` |
| minDragHeight `v2.7.2` | Minimum allowed height when dragging | _number_ | `windowHeight * 0.8` |
| nativeDisabled `v2.5.0` | Whether to disable local gestures during the opening of the dialog; it will call `ty.nativeDisabled(true)` when the dialog starts the entrance animation, and call `ty.nativeDisabled(false)` at the end of the closing animation to restore the click ability of components on different layers. Since `ty.nativeDisabled` works globally, pay attention to whether to pass the `native-disabled` attribute and the timing of closing when multiple dialog components are opened simultaneously, to prevent the `native-disabled` attribute from being ineffective. | _boolean_ | `false` |
| overlay | Whether to display the overlay | _boolean_ | `true` |
| round | Whether to display rounded corners | _boolean_ | `true` |
| show | Whether to display the bottom sheet | _boolean_ | `false` |
| showClose `v2.6.1` | Whether to display the close icon. This value is ignored when draggable is set. | _boolean_ | `true` |
| title | Title | _string_ | - |
| zIndex | z-index level | _number_ | `100` |


### Events

| Event Name                  | Description                                                      | Parameters                                    |
| --------------------------- | ---------------------------------------------------------------- | --------------------------------------------- |
| onAfterEnter | Triggered after entering | - |
| onAfterLeave | Triggered after leaving | - |
| onBeforeEnter | Triggered before entering | - |
| onBeforeLeave | Triggered before leaving | - |
| onClickOverlay | Triggered when clicking overlay | - |
| onClose | Triggered when closing popup | - |
| onDragPosition `v2.7.2` | Triggered when dragging ends, returns the current panel position | _event.detail_: `'max'` \| `'mid'` \| `'min'` |
| onEnter | Triggered during entering | - |
| onLeave | Triggered during leaving | - |


### Slot

| name           | Description |
| -------------- | ----------- |
| -              | content     |
| title `v2.6.1` | Title Slot |


### External Style Classes

| Class Name   | Description           |
| ------------ | --------------------- |
| customClass | Root node style class |

### Style Variables

The component offers the following CSS variables for custom styles. For usage, please refer to the [ConfigProvider component](/material/smartui?comId=config-provider).

| Name                                               | Default Value                        | Description                                    |
| -------------------------------------------------- | ------------------------------------ | ---------------------------------------------- |
| --bottom-sheet-dragger-node-background `v2.7.2`    | _rgba(0, 0, 0, 0.3)_                 | Background color of the drag handle            |
| --bottom-sheet-dragger-node-border-radius `v2.7.2` | _2px_                                | Border radius of the drag handle               |
| --bottom-sheet-dragger-node-height `v2.7.2`        | _4px_                                | Height of the drag handle                      |
| --bottom-sheet-dragger-node-width `v2.7.2`         | _30px_                               | Width of the drag handle                       |
| --bottom-sheet-dragger-padding `v2.7.2`            | _8px 0_                              | Padding of the drag handle area                |
| --bottom-sheet-font-color                          | _var(--app-B4-N1, rgba(0, 0, 0, 1))_ | Text color of the bottom sheet                 |
| --bottom-sheet-header-color                        | _var(--app-B4-N1, rgba(0, 0, 0, 1))_ | Text color of the bottom sheet header          |
| --bottom-sheet-header-font-size                    | _17px_                               | Font size of the bottom sheet header text      |
| --bottom-sheet-header-font-weight                  | _600_                                | Font weight of the bottom sheet header text    |
| --bottom-sheet-header-height                       | _56px_                               | Height of the bottom sheet header              |
| --bottom-sheet-header-padding `v2.5.0`             | _0 16px_                             | Padding of the bottom popup header             |
| --bottom-sheet-icon-margin                         | _16px 16px 0 0_                      | Margin of the close icon in the bottom sheet   |
| --bottom-sheet-max-height                          | _50%_                                | Maximum height of the bottom sheet             |
| --bottom-sheet-min-height                          | _auto_                               | Minimum height of the bottom sheet             |
| --bottom-sheet-padding                             | _0 16px_                             | Inner padding of the bottom popup content area |
| --bottom-sheet-width                               | _100%_                               | Width of the bottom sheet                      |

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