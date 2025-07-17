---
category: Layout
---

# Tab

### Introduction

The tab components are used to switch between different content areas.

### Introduce

```jsx
import { Tabs, Tab } from '@ray-js/smart-ui';
```

## Code demonstration

### Basic usage

Set the index of the currently active tab through `active`. By default, the first tab is activated.

```jsx
import { showToast } from '@ray-js/ray';
import React, { useState } from 'react';
import { Tabs, Tab } from '@ray-js/smart-ui';

export default function Demo() {
  const [active, setActive] = useState(1);
  const onChange = e => {
    showToast({
      icon: 'none',
      title: `Switch ${e.detail.title}`,
    });
  };

  return (
    <Tabs active={active} onChange={onChange}>
      <Tab title="Label 1">content 1</Tab>
      <Tab title="Label 2">content 2</Tab>
      <Tab title="Label 3">content 3</Tab>
      <Tab title="Label 4">content 4</Tab>
    </Tabs>
  );
}
```

### Match by name

When the `name` attribute is specified for a tab, the value of `active` is the `name` of the current tab (it cannot match the tab by the index value at this time).

```jsx
import { showToast } from '@ray-js/ray';
import React, { useState } from 'react';
import { Tabs, Tab } from '@ray-js/smart-ui';

export default function Demo() {
  const [active, setActive] = useState('a');
  const onChange = e => {
    showToast({
      icon: 'none',
      title: `Switch ${e.detail.title}`,
    });
  };

  return (
    <Tabs active={active} onChange={onChange}>
      <Tab title="Label 1" name="a">
        content 1
      </Tab>
      <Tab title="Label 2" name="b">
        content 2
      </Tab>
      <Tab title="Label 3" name="c">
        content 3
      </Tab>
    </Tabs>
  );
}
```

### Horizontal scroll

When there are more than 5 tags, the tab can be scrolled horizontally.

```jsx
import React, { useState } from 'react';
import { Tabs, Tab } from '@ray-js/smart-ui';

export default function Demo() {
  const [active, setActive] = useState('a');

  return (
    <Tabs active={active}>
      <Tab title="Label 1">content 1</Tab>
      <Tab title="Label 2">content 2</Tab>
      <Tab title="Label 3">content 3</Tab>
      <Tab title="Label 4">content 4</Tab>
      <Tab title="Label 5">content 5</Tab>
      <Tab title="Label 6">content 6</Tab>
    </Tabs>
  );
}
```

### Disabled label

Set the `disabled` attribute to disable the tab. If you need to listen for click events on the disabled tab, you can listen for the `disabled` event on `Tabs`.

```jsx
import React from 'react';
import { Tabs, Tab } from '@ray-js/smart-ui';
import { showToast } from '@ray-js/ray';

export default function Demo() {
  const onClickDisabled = e => {
    showToast({
      icon: 'none',
      title: `${e.detail.title} Have been disabled`,
    });
  };

  return (
    <Tabs onDisabled={onClickDisabled}>
      <Tab title="Label 1">content 1</Tab>
      <Tab title="Label 2" disabled>
        content 2
      </Tab>
      <Tab title="Label 3">content 3</Tab>
    </Tabs>
  );
}
```

### Style

`Tab` supports two style types: `line` and `card`. The default style is `line`, and you can change the style using the `type` attribute.

```jsx
import React from 'react';
import { Tabs, Tab } from '@ray-js/smart-ui';

export default function Demo() {
  return (
    <Tabs type="card">
      <Tab title="Label 1">content 1</Tab>
      <Tab title="Label 2">content 2</Tab>
      <Tab title="Label 3">content 3</Tab>
    </Tabs>
  );
}
```

### Click event

You can bind a `click` event on `Tabs`, and obtain the title and identifier of the clicked tab in the `event.detail` of the callback parameters.

```jsx
import React from 'react';
import { Tabs, Tab } from '@ray-js/smart-ui';
import { showToast } from '@ray-js/ray';

export default function Demo() {
  const onClick = e => {
    showToast({
      title: `Clicked ${e.detail.title}`,
      icon: 'none',
    });
  };

  return (
    <Tabs onClick={onClick}>
      <Tab title="Label 1">content 1</Tab>
      <Tab title="Label 2">content 2</Tab>
    </Tabs>
  );
}
```

### Adhesive layout

The `sticky` attribute enables sticky layout. In sticky layout, when the Tab scrolls to the top, it will automatically stick to the top.

```jsx
<Tabs sticky>
  <Tab title="Label 1">content 1</Tab>
  <Tab title="Label 2">content 2</Tab>
  <Tab title="Label 3">content 3</Tab>
  <Tab title="Label 4">content 4</Tab>
</Tabs>
```

### Switch animation

You can use `animated` to specify whether to enable animations when switching tabs.

```jsx
import React from 'react';
import { Tabs, Tab } from '@ray-js/smart-ui';

export default function Demo() {
  return (
    <Tabs animated>
      <Tab title="Label 1">content 1</Tab>
      <Tab title="Label 2">content 2</Tab>
      <Tab title="Label 3">content 3</Tab>
      <Tab title="Label 4">content 4</Tab>
    </Tabs>
  );
}
```

### Sliding

You can enable swiping to switch tabs via the `swipeable` attribute.

```jsx
import React from 'react';
import { Tabs, Tab } from '@ray-js/smart-ui';

export default function Demo() {
  return (
    <Tabs swipeable>
      <Tab title="Label 1">content 1</Tab>
      <Tab title="Label 2">content 2</Tab>
      <Tab title="Label 3">content 3</Tab>
      <Tab title="Label 4">content 4</Tab>
    </Tabs>
  );
}
```

### Nested popup

If Tabs are nested within components or nodes that hide content, such as smart-popup, the underline will not display correctly when the Tabs are shown.

At this point, you can manually control the rendering of Tabs using `show` to avoid this scenario.

```jsx
import React from 'react';
import { Tabs, Tab, Popup, Button } from '@ray-js/smart-ui';

export default function Demo() {
  const [show, setShow] = React.useState(false)
  return (
    <>
      <Button onClick={() => setShow(!show)}>
        Switch display
      </Button>
      <Popup show={show} onClickOverlay={() => setShow(false)}>
        {show ? (
          <Tabs>
            <Tab title="Label 1">content 1</Tab>
            <Tab title="Label 2">content 2</Tab>
            <Tab title="Label 3">content 3</Tab>
            <Tab title="Label 4">content 4</Tab>
          </Tabs>
        ) : null}
      </Popup>
    </>
  );
}
```

### Asynchronous switch

The `beforeChange` event allows you to execute specific logic before switching tabs, achieving pre-switch validation and asynchronous switching purposes.

```jsx
import React, { useState } from 'react';
import { Tabs, Tab } from '@ray-js/smart-ui';
import { showToast, showModal } from '@ray-js/ray';

export default function Demo() {
  const [active, setActive] = useState(1);
  const onChange = e => {
    showToast({
      icon: 'none',
      title: `Switch ${e.detail.title}`,
    });
  };
  const onBeforeChange = e => {
    const { callback, title } = e.detail;

    showModal({
      title: 'Asynchronous switch',
      content: `Are you sure you want to switch to the ${title} tab?`,
      success: res => {
        if (res.confirm) {
          callback(true);
        } else if (res.cancel) {
          callback(false);
        }
      },
    });
  };

  return (
    <Tabs active={active} swipeable useBeforeChange onChange={onChange} onBeforeChange={onBeforeChange}>
      <Tab title="Label 1">content 1</Tab>
      <Tab title="Label 2">content 2</Tab>
      <Tab title="Label 3">content 3</Tab>
      <Tab title="Label 4">content 4</Tab>
    </Tabs>
  );
}
```

## API

### Tabs Props

| Parameters         | Description                                                                                                             | Type        | Default value |        |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------- | ----------- | ------------- | ------ |
| active             | The identifier of the currently selected label                                                                          | \_string \  | number\_      | `0`    |
| animated           | Whether to turn on the transition animation when the switch label content is turned on                                  | _boolean_   | `false`       |        |
| border             | Whether to display the outer border, only effective in `line` style                                                     | _boolean_   | `false`       |        |
| color              | Tag theme color                                                                                                         | _string_    | `#ee0a24`     |        |
| duration           | Animation time, unit seconds                                                                                            | _number_    | `0.3`         |        |
| ellipsis           | Whether the titles that are omitted too long                                                                            | _boolean_   | `true`        |        |
| lazyRender         | Whether to open the tab page content delay rendering                                                                    | _boolean_   | `true`        |        |
| lineHeight         | Bottom bar height, default unit 'px'                                                                                    | \_string \  | number\_      | `3px`  |
| lineWidth          | Bottom bar width, default unit `px`                                                                                     | \_string \  | number\_      | `40px` |
| offsetTop          | The minimum distance from the top in a sticky positioning layout, in units of `px`.                                     | _number_    | -             |        |
| sticky             | Whether to use viscosity positioning                                                                                    | _boolean_   | `false`       |        |
| swipeThreshold     | Rolling threshold, the number of labels exceeding the threshold and the total width exceeds the width of the label bar. | _number_    | `5`           |        |
| swipeable          | Whether to turn on the gesture sliding and switching                                                                    | _boolean_   | `false`       |        |
| titleActiveColor   | Title Select the Innocent Color                                                                                         | _string_    | -             |        |
| titleInactiveColor | Title default state color                                                                                               | _string_    | -             |        |
| type               | Style options, selectable values are `card`                                                                             | _string_    | `line`        |        |
| useBeforeChange    | Whether to open the pre -switch to check                                                                                | _boolean_   | `false`       |        |
| zIndex             | z-index Level                                                                                                           | _number_    | `1`           |        |

### Tab Props

| Parameters | Description                                              | Type        | Default value |                      |
| ---------- | -------------------------------------------------------- | ----------- | ------------- | -------------------- |
| disabled   | Whether to disable labels                                | _boolean_   | `false`       |                      |
| dot        | Whether to display a small red dot                       | _boolean_   | -             |                      |
| info       | Prompt information in the upper right corner of the icon | \_string \  | number\_      | -                    |
| name       | Tag name, as a matching identifier                       | \_string \  | number\_      | Index value of label |
| title      | title                                                    | _string_    | -             |                      |
| titleStyle | Custom title style                                       | _object_    | -             |                      |

### Tabs Slot

| Name     | Description              |
| -------- | ------------------------ |
| navLeft  | The content of the title |
| navRight | Title right content      |

### Tab Slot

| Name | Description |
| ---- | ----------- |
| -    | Tab content |

### Tabs Event

| Event Name     | Description                                                                                                                                                                      | Parameters                                                                                                                                                                                                                                                                      |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onBeforeChange | Triggers before a tab switch. Returning `false` in the callback function can stop the tab switch. When binding the event, the `useBeforeChange` attribute must be set to `true`. | `event.detail.name`: identifier of the currently switched tab, `event.detail.title`: title of the currently switched tab, `event.detail.index`: index of the currently switched tab, `event.detail.callback`: callback function, call `callback(false)` to terminate tab switch |
| onChange       | Triggered when the current activated label changes                                                                                                                               | name: label identifier, title: title                                                                                                                                                                                                                                            |
| onDisabled     | Triggered when clicking the disabled label                                                                                                                                       | name: label identifier, title: title                                                                                                                                                                                                                                            |
| onScroll       | Triggence when rolling                                                                                                                                                           | { scrollTop: Distance from top, isFixed: Is fixed to top }                                                                                                                                                                                                                      |
| onclick        | Triggered when clicking the label                                                                                                                                                | name：Label，title：title                                                                                                                                                                                                                                                       |

### External style

| Class Name     | Description                |
| -------------- | -------------------------- |
| customClass    | Root node nodes            |
| navClass       | Tag bar style              |
| tabActiveClass | Tag activation state class |
| tabClass       | Tag style                  |
| wrapClass      | Tagbar root node style     |

### method

You can get Tabs instances and call the instance method through selectComponent.

| Method Name | Parameter | Return Value | Introduction                                                                                                                     |
| ----------- | --------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| resize      | -         | -            | When the size of the outer element or the component display the state change, you can call this method to trigger the redemption |

## Common problem

### When the component is displayed from the hidden state, the bottom strip position is wrong?

When the Tabs component is mounted, it obtains its own width and calculates the position of the bottom bar. If the component is initially hidden, the obtained width will always be 0, so the position of the bottom bar cannot be displayed.

#### Solution

Method 1: Use show to control the display of components, causing the components to reinitialize.

```jsx
<View>{show ? <Tabs /> : null}</view>
```

Methods 2: The resmed method of calling the component to actively trigger the re -painting.

```jsx
const pages = getCurrentPages();
const curPage = pages[pages.length - 1];
curPage.selectComponent('#tabs').resize();

<Tabs id="tabs" />;
```
