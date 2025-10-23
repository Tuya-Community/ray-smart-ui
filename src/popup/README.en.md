---
category: Feedback
---

# Popup

### Introduce

The Popup layer container is used to display Popup and information prompts, and supports multiple Popup layers.

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
import Close from '@tuya-miniapp/icons/dist/svg/Close';
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
        closeIcon={Close}
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

| Parameter                          | Description                                                                                                                                             | Type               | Default     |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ----------- |
| closeIcon | Name or URL of the close icon | _string_ | `cross` |
| closeIconPosition | Close icon position, options: `top-left`, `bottom-left`, `bottom-right` | _string_ | `top-right` |
| closeOnClickOverlay | Whether to close when clicking the overlay | _boolean_ | `true` |
| closeable | Whether to show the close icon | _boolean_ | `false` |
| customStyle | Custom popup style | _React.CSSProperties_ | - |
| duration | Animation duration in milliseconds | _number \| object_ | `300` |
| lockScroll | Whether to lock background scrolling | _boolean_ | `true` |
| overlay | Whether to show overlay | _boolean_ | `true` |
| overlayStyle | Custom overlay style | _React.CSSProperties_ | - |
| position | Popup position, options: `top`, `bottom`, `right`, `left` | _string_ | `center` |
| round | Whether to display rounded corners | _boolean_ | `false` |
| safeAreaInsetBottom | Whether to reserve bottom safe area, v2.7.1 starts to close by default | _boolean_ | `false` |
| safeAreaInsetBottomMin `v1.1.0` | Whether to reserve a minimum bottom safe area to be added when the safeArea bottom is 0, effective when safeAreaInsetBottom is true | _number_ | `0` |
| safeAreaInsetTop | Whether to reserve top safe distance (status bar height) | _boolean_ | `false` |
| safeAreaTabBar | Whether to reserve bottom tabbar safe distance (when using tabbar component & custom tabbar in mini-programs, the popup cannot cover the tabbar) | _boolean_ | `false` |
| show | Whether to display the popup | _boolean_ | `false` |
| zIndex | z-index level | _number_ | `100` |
| nativeDisabled `v2.3.8` | Whether to disable local gestures during the opening of the dialog; it will call `ty.nativeDisabled(true)` when the dialog starts the entrance animation, and call `ty.nativeDisabled(false)` at the end of the closing animation to restore the click ability of components on different layers. Since `ty.nativeDisabled` works globally, pay attention to whether to pass the `native-disabled` attribute and the timing of closing when multiple dialog components are opened simultaneously, to prevent the `native-disabled` attribute from being ineffective. | _boolean_ | `false` |

### Events

| Event Name         | Description                 | Parameters |
| ------------------ | --------------------------- | ---------- |
| onAfterEnter | Triggered after entering | - |
| onAfterLeave | Triggered after leaving | - |
| onBeforeEnter | Triggered before entering | - |
| onBeforeLeave | Triggered before leaving | - |
| onClickOverlay | Triggered when clicking overlay | - |
| onClose | Triggered when closing popup | - |
| onEnter | Triggered during entering | - |
| onLeave | Triggered during leaving | - |

### External Style Classes

| Class Name    | Description   |
| ------------- | ------------- |
| customClass | Root node style class |

### Style Variables

The component provides the following CSS variables that can be used for custom styles. For usage, refer to the [ConfigProvider Component](/material/smartui?comId=config-provider).

| Name                          | Default Value                           | Description              |
| ----------------------------- | ---------------------------------------- | ------------------------ |
| --popup-background-color      | _var(--app-B4, #ffffff)_                 | Popup background color   |
| --popup-round-border-radius   | _16px_                                   | Round border radius      |
| --popup-close-icon-size       | _24px_                                   | Close icon size          |
| --popup-close-icon-color      | _#969799_                                | Close icon color         |
| --popup-close-icon-margin     | _12px_                                   | Close icon margin        |
| --popup-close-icon-z-index    | _1_                                      | Close icon z-index       |

## FAQ

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


### Why can a popup scroll when internal elements are too high on the IDE, but it doesn't work on a mobile phone?

The `Popup` itself does not have `ScrollView` capability, so it does not inherently possess scrolling functionality. Scrolling is possible due to inconsistencies between the IDE and real mobile devices. Therefore, if scrolling is desired, it is necessary to use `ScrollView` to wrap the internal elements.

```jsx
import React from 'react';
import { Popup } from '@ray-js/smart-ui';
import { DemoBlock } from '@/components';
import { View, ScrollView } from '@ray-js/ray';

function Demo() {
  return (
    <DemoBlock title="Basic Usage">
      <Popup
        show
        position="bottom"
      >
        <ScrollView scrollY style={{ height: '400px' }}>
          <View style={{ height: '1000px' }}>
            test
          </View>
        </ScrollView>
      </Popup>
    </DemoBlock>
  );
}
```

### Popup Why is there a gap at the bottom of the pop-up box on the real machine?

The built-in bottom safety distance of the `Popup` has a margin from the bottom, giving it an effect where the popup does not connect with the bottom. If you want the popup to be connected with the bottom, please use the `BottomSheet` component, which provides the safety distance in the form of padding.