---
category: Feedback
---

# Popup

### Introduce

The pop -up layer container is used to display pop -ups and information prompts, and supports multiple pop -up layers.

### Introduce

```jsx
import { Popup } from '@ray-js/smart-ui';
```

## Code demonstration

### Basic usage

Control whether the pop -up layer is displayed through the `show` attribute.

```jsx
import { View } from '@ray-js/ray';
import { Popup, Cell } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [show, setShow] = React.useState(false);
  const showPopup = () => setShow(true);
  const onClose = () => setShow(false);

  return (
    <View>
      <Cell title="Show the pop -up layer" isLink onClick={showPopup} />
      <Popup show={show} onClose={onClose}>
        content
      </Popup>
    </View>
  );
}
```

### Popping position

Set the pop-up position using the `position` attribute. By default, it will pop up in the center, but you can set it to `top`, `bottom`, `left`, or `right`.

```jsx
import { View } from '@ray-js/ray';
import { Popup, Cell } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [show, setShow] = React.useState(false);
  const showPopup = () => setShow(true);
  const onClose = () => setShow(false);

  return (
    <View>
      <Cell title="Show the pop -up layer" isLink onClick={showPopup} />
      <Popup show={show} position="top" customStyle={{ height: '20%' }} onClose={onClose} />
    </View>
  );
}
```

### Turn off the icon

After setting the `closeable` attribute, a close icon will be displayed at the top right corner of the popup. You can customize the icon using the `closeIcon` attribute, and you can position the icon using the `closeIconPosition` attribute.

```jsx
import { View } from '@ray-js/ray';
import { Popup, Cell } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [show, setShow] = React.useState(false);
  const showPopup = () => setShow(true);
  const onClose = () => setShow(false);

    const [show1, setShow1] = React.useState(false);
  const showPopup1 = () => setShow1(true);
  const onClose1 = () => setShow1(false);

    const [show2, setShow2] = React.useState(false);
  const showPopup2 = () => setShow2(true);
  const onClose2 = () => setShow2(false);
  

  return (
    <View>
      <Cell title="Show off the icon" isLink onClick={showPopup} />
      <Cell title="Custom icon" isLink onClick={showPopup1} />
      <Cell title="Icon position" isLink onClick={showPopup2} />
      <Popup
        show={show}
        closeable
        position="bottom"
        customStyle={{ height: '20%' }}
        onClose={onClose}
      />
      <Popup
        show={show1}
        closeable
        closeIcon="close"
        position="bottom"
        customStyle={{ height: '20%' }}
        onClose={onClose1}
      />
      <Popup
        show={show2}
        closeable
        closeIconPosition="top-left"
        position="bottom"
        customStyle={{ height: '20%' }}
        onClose={onClose2}
      />
    </View>
  );
}
```

### Rounded popup window

After setting the `round` attribute, the popup will apply different rounded corner styles based on its position.

```jsx
import { View } from '@ray-js/ray';
import { Popup, Cell } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [show, setShow] = React.useState(false);
  const showPopup = () => setShow(true);
  const onClose = () => setShow(false);

  return (
    <View>
      <Cell title="Display rounded popup window" isLink onClick={showPopup} />
      <Popup show={show} round position="bottom" customStyle={{ height: '20%' }} onClose={onClose} />
    </View>
  );
}
```

## API

### Props

| Parameter           | Description                                                                                                                                         | Type               | Default Value |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------- |
| closeIcon           | Turn off the icon name or picture link                                                                                                              | _string_           | `cross`       |
| closeIconPosition   | Close icon position, optional values are `top-left`, `bottom-left`, `bottom-right`                                                                  | _string_           | `top-right`   |
| closeOnClickOverlay | Whether to close it after clicking the mask layer                                                                                                   | _boolean_          | `true`        |
| closeable           | Whether to show off the icon                                                                                                                        | _boolean_          | `false`       |
| customStyle         | Custom pop -up layer style                                                                                                                          | _object_           | `''`          |
| duration            | The animation duration, the unit is milliseconds                                                                                                    | _number \| object_ | `300`         |
| lockScroll          | Whether to lock the background rolling                                                                                                              | _boolean_          | `true`        |
| overlay             | Whether to display the mask layer                                                                                                                   | _boolean_          | `true`        |
| overlayStyle        | Custom mask layer style                                                                                                                             | _object_           | `''`          |
| position            | Popup position, optional values are 'top', 'bottom', 'right', 'left'                                                                                | _string_           | `center`      |
| round               | Whether to display a rounded corner                                                                                                                 | _boolean_          | `false`       |
| safeAreaInsetBottom | Whether to reserve a bottom safe area for iPhoneX                                                                                                   | _boolean_          | `true`        |
| safeAreaInsetTop    | Whether to leave the top safe distance (the state column height)                                                                                    | _boolean_          | `false`       |
| safeAreaTabBar      | Whether to reserve bottom tabbar safe distance (popup component level cannot cover tabbar when using tabbar component & mini program custom tabbar) | _boolean_          | `false`       |
| show                | Whether to display the pop -up layer                                                                                                                | _boolean_          | `false`       |
| zIndex              | z-index Level                                                                                                                                       | _number_           | `100`         |
<!-- | rootPortal | 是否从页面中脱离出来，用于解决各种 fixed 失效问题，微信基础库 >= `2.25.2 ` | _boolean_ | `false` | -->

### Events

| Event Name     | Description                                    | Parameters |
| -------------- | ---------------------------------------------- | ---------- |
| onAfterEnter   | Trigger after entering                         | -          |
| onAfterLeave   | Trigger after leaving                          | -          |
| onBeforeEnter  | Before entering                                | -          |
| onBeforeLeave  | Triggence before leaving                       | -          |
| onClickOverlay | Trigger when clicking the mask layer           | -          |
| onClose        | Triggered when the pop -up layer is turned off | -          |
| onEnter        | Enter the trigger                              | -          |
| onLeave        | Triggered in the departure                     | -          |

### External style

| Class Name  | Description     |
| ----------- | --------------- |
| customClass | Root node nodes |

## Common problem

### Popup What should I do if the nested components involving the positioning of the layout positioning are rendered?

Due to some components, such as the `Slider` component and the `Textarea` component using the `auto-height` attribute, it may not be fully rendered when the `Popup` opens. This prevents us from obtaining their DOM, leading to positioning issues. The solution is to start rendering such components after the `onAfterEnter` event callback of the `Popup`. This ensures that these components are properly rendered when accessing the DOM. Please refer to the following example:

```jsx
import React from 'react';
import { Cell, Popup } from '@ray-js/smart-ui';
import { DemoBlock } from '@/components';
import { View, Slider } from '@ray-js/ray';

function Demo() {
  const [show, setShow] = React.useState(false);
  const [isReady, setIsReady] = React.useState(false);
  const showBasic = () => setShow(true);
  const handleChange = e => setValue(e.detail.value);

  return (
    <DemoBlock title="Basic usage">
      <Cell title="Show the pop -up layer" isLink onClick={showBasic} />
      <Popup
        show={show}
        position="bottom"
        onClose={hideBasic}
        onAfterEnter={() => setIsReady(true)}
      >
        <View style={{ padding: '32px', position: 'relative' }}>
          {isReady && <Slider value={value} max={100} min={0} onChange={handleChange} />}
        </View>
      </Popup>
    </DemoBlock>
  );
}
```
