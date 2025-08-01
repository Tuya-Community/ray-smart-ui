---
category: Feedback
---

# ActionSheet

### Introduction

A modal panel that pops up from the bottom, containing multiple options related to the current context.

### Introduce

```jsx
import { ActionSheet } from '@ray-js/smart-ui';
```

## Code Demonstration

### Basic Usage

You need to pass in an array of `actions`, where each item is an object. The object's properties are listed in the table below in the documentation.

```jsx
import React from 'react';
import { ActionSheet, Button } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  const [show, setShow] = React.useState(false);
  const [actions, setActions] = React.useState([
    { id: 0, name: 'Action', checked: true },
    { id: 1, name: 'Action', checked: false },
    { id: 2, name: 'Action', checked: false },
  ]);

  const onCancel = () => setShow(false);
  const onClose = () => console.log('close');
  const onSelect = evt => {
    const { id } = evt.detail;
    const newActions = actions.map(item => {
      if (item.id === id) return { ...item, checked: true };
      return { ...item, checked: false };
    });
    setActions(newActions);
  };

  return (
    <View>
      <ActionSheet 
        show={show} 
        title="Title"
        cancelText="Cancel"
        actions={actions} 
        onClose={onClose} 
        onSelect={onSelect} 
        onCancel={onCancel}
      />
      <Button onClick={() => setShow(true)}>check</Button>
    </View>
  );
}
```

### Unselected List

After setting the `actions[idx].checked` property to `false`, the list can be displayed without any selection.

```jsx
import React from 'react';
import { ActionSheet, Button } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  const actions = [{ name: 'Action' }, { name: 'Action' }, { name: 'Action' }];
  const [show, setShow] = React.useState(false);

  return (
    <View>
      <ActionSheet 
        show={show} 
        actions={actions} 
        title="Title"
        cancelText="Cancel"
        onCancel={() => setShow(false)}
      />
      <Button onClick={() => setShow(true)}>Click to Show</Button>
    </View>
  );
}
```


### Option Status

Options can be set to loading state or disabled state.

```jsx
import React from 'react';
import { ActionSheet, Button } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  const actions = [
    { name: 'Use status.', color: '#ee0a24' },
    { loading: true },
    { ,name: 'Disable Option', disabled: true },
  ];
  const [show, setShow] = React.useState(false);

  return (
    <View>
      <ActionSheet 
        show={show} 
        actions={actions} 
        cancelText="Cancel" 
        onCancel={() => setShow(false)}
      />
      <Button onClick={() => setShow(true)}>Click to show</Button>
    </View>
  );
}
```


### Display Cancel/Confirm Buttons

By setting the `cancelText` and `confirmText` properties, cancel or confirm buttons will appear at the bottom, which, when clicked, will close the current menu.

```jsx
import React from 'react';
import { ActionSheet, Button } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  const [show, setShow] = React.useState(false);
  const actions = [{ name: 'Action' }, { name: 'Action' }, { name: 'Action' }];

  return (
    <View>
      <ActionSheet 
        show={show} 
        actions={actions} 
        cancelText="Cancel" 
        confirmText="Confirm" 
        onCancel={() => setShow(false)}
      />
      <Button onClick={() => setShow(true)}>Click to display</Button>
    </View>
  );
}
```

### Display Description Information

When the `description` attribute is set, the description will be displayed above the options.

```jsx
import React from 'react';
import { ActionSheet, Button } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  const [show, setShow] = React.useState(false);
  const actions = [{ name: 'Action' }, { name: 'Action' }, { name: 'Action' }];

  return (
    <View>
      <ActionSheet 
        show={show} 
        actions={actions} 
        description="This is a description message."
        onCancel={() => setShow(false)}
      />
      <Button onClick={() => setShow(true)}>Click to show</Button>
    </View>
  );
}
```

### Custom

Display the title bar by setting the `title` attribute, and use slots to customize menu content.

```jsx
import React from 'react';
import { ActionSheet, Button } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  const [show, setShow] = React.useState(false);

  return (
    <View>
      <ActionSheet show={show} title="Title" onCancel={() => setShow(false)}>
        <View>Content</View>
      </ActionSheet>
      <Button onClick={() => setShow(true)}>Click to show</Button>
    </View>
  );
}
```

### Custom Double Select `v2.6.0`

When `useTitleSlot` is `true`, you can use slots to customize the title content, supporting complex dual-selector scenarios.


```jsx
import React from 'react';
import { ActionSheet, Button, DateTimePicker, Picker, SmartEventHandler, SmartPickerBaseEventDetail } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';
import styles from './index.module.less';

export default function Demo() {
  const [show, setShow] = React.useState(false);
  const [current12Date, setCurrent12Date] = useState('12:00');
  const [tempColumnIdx, setTempColumnIdx] = useState(3);

  const onCurrent12DateInput: SmartEventHandler<string> = event => {
    setCurrent12Date(event.detail);
  };

  const onTempColumnChange: SmartEventHandler<SmartPickerBaseEventDetail> = event => {
    const { index } = event.detail;
    setTempColumnIdx(index as number);
  };

  return (
    <View>
      <ActionSheet 
        show={show} 
        cancel-text="Cancel"
        confirm-text="Confirm"
        slot={{
          title: (
            <View className={styles['demo-custom-double-select-header']}>
              <View>Time</View>
              <View>Temp</View>
            </View>
          ),
        }}
        useTitleSlot 
        onCancel={() => setShow(false)}
        onClose={() => setShow(false)}
        onConfirm={() => setShow(false)}
      >
        <View className={styles['demo-custom-double-select-content']}>
          <DateTimePicker
            className={styles.flex1}
            type="time"
            data-type="time"
            is-12-hour-clock
            show-toolbar={false}
            value={current12Date}
            onInput={onCurrent12DateInput}
          />
          <Picker
            className={styles.flex1}
            unit="℃"
            activeIndex={tempColumnIdx}
            columns={tempColumns}
            onChange={onTempColumnChange}
          />
        </View>
      </ActionSheet>
      <Button onClick={() => setShow(true)}>Click to display</Button>
    </View>
  );
}
```

index.module.less
```css
.demo-custom-double-select-header {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.demo-custom-double-select-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.flex1 {
  flex: 1;
}
```

## API

### Props

| Parameter                         | Description                                                                                                         | Type      | Default             |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------- | --------- | ------------------- |
| actions | Menu options | _Array_ | `[]` |
| activeColor | Selected state color of the icon in the list option | _string_ | `--app-M1` |
| cancelText | Text of the cancel button | _string_ | - |
| closeOnClickAction | Whether to close after clicking an option | _boolean_ | `true` |
| closeOnClickOverlay | Whether clicking the overlay closes the menu | _boolean_ | `true` |
| confirmText | Text of the confirm button | _string_ | - |
| description | Description information above the options | _string_ | - |
| overlay | Whether to display the overlay | _boolean_ | `true` |
| round | Whether to show rounded corners | _boolean_ | `true` |
| safeAreaInsetBottom | Whether to leave a safe distance at the bottom for iPhoneX | _boolean_ | `true` |
| safeAreaInsetBottomMin `v1.1.0` | Whether to reserve a minimum bottom safe distance for when safeArea is 0, only effective when safeAreaInsetBottom is true | _number_ | `16` |
| show | Whether to display the action panel | _boolean_ | - |
| title | Title | _string_ | - |
| useTitleSlot `v2.6.0` | Whether to enable title slot | _boolean_ | `false` |
| zIndex | z-index level | _number_ | `100` |
| nativeDisabled `v2.5.0` | Whether to disable local gestures during the opening of the dialog; it will call `ty.nativeDisabled(true)` when the dialog starts the entrance animation, and call `ty.nativeDisabled(false)` at the end of the closing animation to restore the click ability of components on different layers. Since `ty.nativeDisabled` works globally, pay attention to whether to pass the `native-disabled` attribute and the timing of closing when multiple dialog components are opened simultaneously, to prevent the `native-disabled` attribute from being ineffective. | _boolean_ | `false` |

### Events

| Event Name          | Description                                             | Parameter                      |
| ------------------- | ------------------------------------------------------- | ------------------------------ |
| onAfterEnter | Triggered after the overlay enters | - |
| onAfterLeave | Triggered after the overlay leaves | - |
| onBeforeEnter | Triggered before the overlay enters | - |
| onBeforeLeave | Triggered before the overlay leaves | - |
| onCancel | Triggered when the cancel button is clicked | - |
| onClickOverlay | Triggered when the overlay is clicked | - |
| onClose | Triggered when closed | - |
| onConfirm | Triggered when the confirm button is clicked | - |
| onEnter | Triggered when the overlay is entering | - |
| onLeave | Triggered when the overlay is leaving | - |
| onSelect | Triggered when an option is selected, not triggering in disabled or loading state | event.detail: Option object |


### actions

`actions` in `API` is an array of objects, where each object configures each column with the following `key`:

| Key Name    | Description                   | Type      | Default |
| ----------- | ----------------------------- | --------- | ------- |
| className | Adds an extra class name to the corresponding column | _string_ | - |
| color | Text color of the option | _string_ | - |
| disabled | Whether it's in disabled state | _boolean_ | - |
| loading | Whether it's in loading state | _boolean_ | - |
| name | Title | _string_ | - |
| subname | Subtitle | _string_ | - |
| sendMessageImg | Message card image in session, effective when openType="contact" | _string_ | Screenshot |
| sendMessagePath | Path to navigate to the mini-program when clicking on the message card in session, effective when openType="contact" | _string_ | Current sharing path |
| sendMessageTitle | Title of the message card in session, effective when openType="contact" | _string_ | Current title |
| showMessageCard | Whether to display the message card in session. When this parameter is set to true, the user will see "Possible mini-program to send" in the lower right corner when entering the customer service session, which allows for quick mini-program message sending upon clicking. Effective when openType="contact" | _string_ | `false` |


### External Style Classes

| Class Name     | Description            |
| -------------- | ---------------------- |
| customClass | Root node style class |
| listClass | Style class for `actions` container |

### Style Variables

The component provides the following CSS variables for custom styles. For usage, see the [ConfigProvider component](/material/smartui?comId=config-provider).

| Name                           | Default Value                           | Description |
| -----------------------------  | --------------------------------------  | ----------- |
| --action-sheet-width | _calc(100% - 32px)_ | Width of the popup |
| --action-sheet-left | _16px_ | Left position of the popup in absolute positioning |
| --action-sheet-max-height | _90%_ | Maximum height of the popup |
| --action-sheet-margin | _0 0 16px_ | Margin of the popup |
| --action-sheet-active-color | _var(--app-B1, #f6f7fb)_ | The color of the selected icon and the background color of the list when pressed |
| --action-sheet-item-disabled-opacity | _0.3_ | Opacity of the disabled list |
| --action-sheet-header-border-color | _var(--app-B4-N7, rgba(0, 0, 0, 0.1))_ | Border color of the header |
| --action-sheet-header-height | _56px_ | Height of the header |
| --action-sheet-header-color | _var(--app-B4-N3, rgba(0, 0, 0, 0.5))_ | Font color of the header |
| --action-sheet-header-font-size | _16px_ | Font size of the header |
| --action-sheet-header-font-weight | _normal_ | Font weight of the header |
| --action-sheet-description-color | _var(--app-B4-N3, rgba(0, 0, 0, 0.5))_ | Color of the description text |
| --action-sheet-description-font-size | _14px_ | Font size of the description text |
| --action-sheet-description-line-height | _20px_ | Line height of the description text |
| --action-sheet-item-background | _var(--app-B4, #ffffff)_ | Background color of the list |
| --action-sheet-item-border-radius | _0_ | Border radius of the list |
| --action-sheet-item-icon-margin | _0px 16px 0 0_ | Icon margin size of the list |
| --action-sheet-item-icon-color | _var(--app-M1, #3678e3)_ | Icon color of the list |
| --action-sheet-item-icon-size | _28px_ | Icon size of the list |
| --action-sheet-item-font-size | _16px_ | Font size of the list text |
| --action-sheet-item-font-weight | _normal_ | Font weight of the list text |
| --action-sheet-item-line-height | _24px_ | Line height of the list text |
| --action-sheet-item-text-color | _var(--app-B4-N1, rgba(0, 0, 0, 1))_ | Text color of the list |
| --action-sheet-subname-color | _var(--app-B4-N3, rgba(0, 0, 0, 0.5))_ | Font color of the second-level name in the list |
| --action-sheet-subname-font-size | _12px_ | Font size of the second-level name in the list |
| --action-sheet-subname-line-height | _20px_ | - |
| --action-sheet-confirm-text-color | _var(--app-B4-N1, rgba(0, 0, 0, 1))_ | Font color of the confirm button |
| --action-sheet-confirm-font-weight | _500_ | Font weight of the confirm button |
| --action-sheet-cancel-text-color | _var(--app-B4-N3, rgba(0, 0, 0, 0.5))_ | Font color of the cancel button |
| --action-sheet-footer-padding-top | _8px_ | Top padding of the footer content |
| --action-sheet-footer-padding-color | _var(--app-B4-N9, rgba(0, 0, 0, 0.05))_ | Spacing color between the footer content and the list |
| --action-sheet-active-icon-color `v2.2.0` | _var(--app-M1, #3678e3)_ | Color of the selected icon in the list |

## FAQ

### The positioning is abnormal when the Slider is used in the ActionSheet subcomponent. What is the situation?

As the `Slider` component may not be fully rendered when the `ActionSheet` opens, we cannot obtain its DOM, which causes positioning issues. The solution is to start rendering the `Slider` component after the `onAfterEnter` event callback of `ActionSheet`. This ensures that the `Slider` is properly rendered when obtaining the DOM. Please refer to the following example:

```tsx
import React from 'react';
import { View, Text } from '@ray-js/ray';
import { useDebounce } from 'ahooks';
import { ActionSheet, Slider } from '@ray-js/smart-ui';
import styles from './index.module.less';

function Demo() {
  const [ready, setReady] = React.useState(false);
  const [currentNumber, setCurrentNumber] = React.useState(100);
  const currentNumberForSlider = useDebounce(currentNumber, { wait: 500 });
  const onActionSheetReady = React.useCallback(() => setReady(true), []);
  const [showNumber, setShowNumber] = React.useState(false);
  const onChange = React.useCallback(value => {
    setCurrentNumber(value);
  }, []);
  const toggleActionSheetNumber = React.useCallback(() => setShowNumber(!showNumber), [showNumber]);

  return (
    <ActionSheet
      show={showNumber}
      title="Title"
      cancelText="Action"
      confirmText="Action"
      onClose={toggleActionSheetNumber}
      onCancel={toggleActionSheetNumber}
      onConfirm={toggleActionSheetNumber}
      onAfterEnter={onActionSheetReady}
    >
      <View className={styles['content-number']}>
        <View className={styles['demo-header']}>
          <Text className={styles['demo-text']}>{`${currentNumber}%`}</Text>
        </View>
        <View className={styles['demo-slider']}>
          {ready && (
            <Slider
              minTrackRadius="8px"
              minTrackHeight="45px"
              maxTrackRadius="8px"
              maxTrackHeight="45px"
              value={currentNumberForSlider}
              onChange={onChange}
              thumbWidth={15}
              thumbHeight={50}
              thumbRadius={2}
              thumbStyle={{
                background: '#BBC5D4',
                border: '2px solid #FFFFFF',
                boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.5)',
              }}
            />
          )}
        </View>
      </View>
    </ActionSheet>
  );
}
```