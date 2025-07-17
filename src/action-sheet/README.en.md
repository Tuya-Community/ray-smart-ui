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

  const onClose = () => setShow(false);
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
      <ActionSheet show={show} actions={actions} onClose={onClose} onSelect={onSelect} />
      <Button onClick={() => setShow(true)}>check</Button>
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
      <ActionSheet show={show} actions={actions} cancelText="Cancel" />
      <Button onClick={() => setShow(true)}>Click to show</Button>
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
      <ActionSheet show={show} actions={actions} cancelText="Cancel" />
      <Button onClick={() => setShow(true)}>Click to Show</Button>
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
      <ActionSheet show={show} actions={actions} cancelText="Cancel" confirmText="Confirm" />
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
      <ActionSheet show={show} actions={actions} description="This is a description message." />
      <Button onClick={() => setShow(true)}>Click to show</Button>
    </View>
  );
}
```

### Custom Panel

Display the title bar by setting the `title` attribute, and use slots to customize menu content.

```jsx
import React from 'react';
import { ActionSheet, Button } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  const [show, setShow] = React.useState(false);

  return (
    <View>
      <ActionSheet show={show} title="Title">
        <View>Content</View>
      </ActionSheet>
      <Button onClick={() => setShow(true)}>Click to show</Button>
    </View>
  );
}
```

## API

### Props

| Parameters          | Description                                         | Type      | Default Value |
| ------------------- | --------------------------------------------------- | --------- | ------------- |
| actions             | Menu Options                                        | _Array_   | `[]`          |
| cancelText          | Cancel button text                                  | _string_  | -             |
| closeOnClickAction  | Close after clicking the option?                    | _boolean_ | `true`        |
| closeOnClickOverlay | Click whether the mask is turned off the menu       | _boolean_ | `true`        |
| confirmText         | Confirm the button text                             | _string_  | -             |
| description         | Description information above the option            | _string_  | -             |
| overlay             | Whether to display the mask layer                   | _boolean_ | -             |
| round               | Whether to display a rounded corner                 | _boolean_ | `true`        |
| safeAreaInsetBottom | Is the safety distance at the bottom of the iPhoneX | _boolean_ | `true`        |
| show                | Whether to display action panels                    | _boolean_ | -             |
| title               | title                                               | _string_  | -             |
| zIndex              | z-index Level                                       | _number_  | `100`         |

### Events

| Event Name     | Instructions                                                                                | Parameter                                     |
| -------------- | ------------------------------------------------------------------------------------------- | --------------------------------------------- |
| onAfterEnter   | Triggered after the mask enters                                                             | -                                             |
| onAfterLeave   | Trigger after the mask leaves                                                               | -                                             |
| onBeforeEnter  | Drives before the mask                                                                      | -                                             |
| onBeforeLeave  | Triggered before the mask leave                                                             | -                                             |
| onCancel       | Triggered when clicking the cancel button                                                   | -                                             |
| onClickOverlay | Trigger when clicking the mask layer                                                        | -                                             |
| onClose        | Triggeon when closed                                                                        | -                                             |
| onConfirm      | Triggered when the confirmation button is clicked                                           | -                                             |
| onEnter        | Drives in the mask                                                                          | -                                             |
| onLeave        | Triggered in the mask                                                                       | -                                             |
| onSelect       | Triggered when selecting the option, and the disable or loading state will not be triggered | event.detail: Object corresponding to options |

### actions

`actions` in the `API` is an array of objects, each object configures each column, and each column has the following `key`:

| Key Name  | Description                                                    | Type      | Default Value |
| --------- | -------------------------------------------------------------- | --------- | ------------- |
| checked   | Whether it is selected                                         | _boolean_ | -             |
| className | Add an additional Class class name to the corresponding column | _string_  | -             |
| color     | Option text color                                              | _string_  | -             |
| disabled  | Whether it is a disabled state                                 | _boolean_ | -             |
| loading   | Whether it is loading                                          | _boolean_ | -             |
| name      | title                                                          | _string_  | -             |
| subname   | 2nd title                                                      | _string_  | -             |

### External style

| Class Name  | Instruction                    |
| ----------- | ------------------------------ |
| customClass | Root node style class          |
| listClass   | `actions`Container style class |

## Frequently Asked Questions

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
