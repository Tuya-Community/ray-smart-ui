---
category: Layout
assets: TyTabs
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
import React from 'react';
import { Tabs, Tab } from '@ray-js/smart-ui';

export default function Demo() {
  return (
    <Tabs sticky zIndex={3}>
      <Tab title="Label 1">content 1</Tab>
      <Tab title="Label 2">content 2</Tab>
      <Tab title="Label 3">content 3</Tab>
      <Tab title="Label 4">content 4</Tab>
    </Tabs>
  );
}
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

### Nested Popup

If Tabs are nested within components or nodes that hide content, such as smart-popup, the underline will not display correctly when the Tabs are shown.

At this point, you can manually control the rendering of Tabs using `show` to avoid this scenario.

```jsx
import React from 'react';
import { Tabs, Tab, Popup, Button } from '@ray-js/smart-ui';

export default function Demo() {
  const [show, setShow] = React.useState(false)
  const [showComp, setShowComp] = React.useState(false)
  return (
    <>
      <Button onClick={() => setShow(!show)}>
        Switch display
      </Button>
      <Popup 
        show={show} 
        position="bottom"
        onClickOverlay={() => setShow(false)}
        onBeforeEnter={() => setShowComp(true)}
        onAfterLeave={() => setShowComp(false)}
      >
        {showComp ? (
          <Tabs  active={1}>
            <Tab title="标签 1">内容 1</Tab>
            <Tab title="标签 2">内容 2</Tab>
            <Tab title="标签 3">内容 3</Tab>
            <Tab title="标签 4">内容 4</Tab>
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


### SubTitle

You can set a subtitle through `subtitle`

```tsx
import React, { useState } from 'react';
import { Tabs, Tab } from '@ray-js/smart-ui';
import { showToast, showModal } from '@ray-js/ray';

export default function Demo() {
  const tabs7 = [
    { name: 'Monday', content: '12' },
    { name: 'Tuesday', content: '13' },
    { name: 'Wednesday', content: '14' },
    { name: 'Thursday', content: '15' },
    { name: 'Friday', content: '16' },
    { name: 'Saturday', content: '17' },
    { name: 'Sunday', content: '18' },
  ];


  const onChange = e => {
    showToast({
      icon: 'none',
      title: `Switch to ${e.detail.title}`,
    });
  };

  return (
    <Tabs
      active={1}
      swipeable
      onChange={onChange}
      swipeThreshold={7}
    >
      {tabs7.map(item => {
        return (
          <Tab
            title={item.name}
            subtitle={item.content}
            key={item.name}
          />
        );
      })}
    </Tabs>
  );
}
```

## API

### Tabs Props

| Parameter                    | Description                                                                                       | Type               | Default   |
| ---------------------------- | ------------------------------------------------------------------------------------------------- | ------------------ | --------- |
| active | Identifier of the currently selected tab | _string_ | `0` |
| animated | Whether to enable the transition animation when switching tab content | _boolean_ | `false` |
| border | Whether to show border, only effective in `line` style | _boolean_ | `false` |
| color | Label theme color, only available in non `card` mode color | _string_ | `#ee0a24` |
| duration | Animation duration in seconds | _number_ | `0.3` |
| ellipsis | Whether to truncate long title text | _boolean_ | `true` |
| lazyRender | Whether to enable lazy rendering of tab page content (not destroy) | _boolean_ | `true` |
| inactiveDestroy `v2.1.0` | Whether to destroy the tab slot content when the tab is not selected | _boolean_ | `false` |
| lineHeight | Height of the bottom bar, default unit `px` | _string \| number_ | `3px` |
| lineWidth | Width of the bottom bar, default unit `px` | _string \| number_ | `40px` |
| offsetTop | Minimum distance from the top in sticky positioning layout, unit `px` | _number_ | - |
| sticky | Whether to use sticky positioning layout | _boolean_ | `false` |
| swipeThreshold | Scroll threshold, tab starts scrolling horizontally when the number of tabs exceeds the threshold | _number_ | `5` |
| swipeable | Whether to enable gesture swipe switching | _boolean_ | `false` |
| titleActiveColor | Color of selected title | _string_ | - |
| titleInactiveColor | Color of default title | _string_ | - |
| type | Style type, optional value is `card` | _string_ | `line` |
| useBeforeChange `v1.10.10` | Whether to enable pre-switch verification | _boolean_ | `false` |
| zIndex | z-index level | _number_ | `1` |

### Tab Props

| Parameter               | Description                        | Type               | Default         |
| ----------------------- | ---------------------------------- | ------------------ | --------------- |
| disabled | Whether to disable the tab | _boolean_ | `false` |
| dot | Whether to show a small dot | _boolean_ | - |
| info | Message prompt at icon corner | _string \| number_ | - |
| name | Tab name, as a matching identifier | _string_ | Tab index value |
| title | Title | _string_ | - |
| titleStyle | Custom title style | _React.CSSProperties_ | - |
| subtitle `v2.3.5` | Secondary Title | _string_ | - |
| subtitleStyle `v2.3.5` | Custom secondary heading style | _string_ | - |

### Tabs Slot

| Name      | Description                            |
| --------- | -------------------------------------- |
| navLeft | Content on the left side of the title |
| navRight | Content on the right side of the title |

### Tab Slot

| Name | Description |
| ---- | ----------- |
| -    | Tab content |

### Tabs Event

| Event Name                    | Description                                                                                                                                             | Parameters                                                                                                                                                                                                                                                                                   |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onBeforeChange `v1.10.10` | Triggered before tab switching, returning `false` in the callback can stop tab switching, and the `use-before-change` attribute should be set to `true` | `event.detail.name`: The identifier of the currently switching tab, `event.detail.title`: The title of the currently switching tab, `event.detail.index`: The index of the currently switching tab, `event.detail.callback`: Callback function, call `callback(false)` to stop tab switching |
| onChange | Triggered when the active tab changes | name: Tab identifier, title: Title |
| onClick | Triggered when a tab is clicked | name: Tab identifier, title: Title |
| onDisabled | Triggered when a disabled tab is clicked | name: Tab identifier, title: Title |
| onScroll | Triggered during scrolling | { scrollTop: Distance from the top, isFixed: Whether it is fixed to the top } |

### External Style Classes

| Class Name       | Description                   |
| ---------------- | ----------------------------- |
| customClass | Root node style class |
| navClass | Tab bar style class |
| tabActiveClass | Active tab style class |
| tabClass | Tab style class |
| wrapClass | Tab bar root node style class |

### Style Variables

The component provides the following CSS variables for custom styles. For usage, refer to the [ConfigProvider Component](/material/smartui?comId=config-provider).

| Name                                      | Default Value                           | Description                       |
| ----------------------------------------- | --------------------------------------- | --------------------------------- |
| --tabs-background-color                   | _var(--app-B3, #fff)_                   | Background color                  |
| --tabs-default-color                      | _var(--app-M4)_                         | Default text color                |
| --tabs-line-height                        | _32px_                                  | Default text line height          |
| --tabs-sub-line-height `v2.3.5`           | _64px_                                  | Default sub text line height      |
| --tabs-bottom-bar-height                  | _3px_                                   | Bottom slider height              |
| --tabs-bottom-bar-color                   | _var(--tabs-default-color)_             | Bottom slider background color    |
| --tabs-card-text-color                    | _var(--app-B6-N3)_                      | Card mode text color              |
| --tabs-card-text-active-color             | _var(--app-B6-N1)_                      | Card mode active text color       |
| --tabs-card-height                        | _32px_                                  | Card mode slider height           |
| --tabs-card-border-radius                 | _8px_                                   | Card mode radius                  |
| --tabs-card-active-border-radius `v2.0.0` | _6px_                                   | Card mode slider radius           |
| --tabs-card-active-background-color       | _var(--app-B3, #fff)_                   | Card mode slider background color |
| --tabs-card-active-top `v2.0.0`           | _0_                                     | Card mode slider top positioning  |
| --tabs-card-active-left `v2.0.0`          | _0_                                     | Card mode slider left positioning |
| --tabs-card-padding `v2.0.0`              | _2px_                                   | Card mode padding                 |
| --tab-panel-background-color `v2.0.0`     | _var(--app-B3)_                         | Panel background color            |
| --tab-panel-text-color `v2.0.0`           | _var(--app-B3-N1)_                      | Panel text color                  |
| --tabs-card-background-color `v2.1.0`     | _var(--app-B6-N9, rgba(0, 0, 0, 0.05))_ | Card mode background color        |

### Methods

You can get the Tabs instance through [selectComponent](/material/smartui?comId=faq) and call instance methods.

| Method Name | Parameter | Return Value | Description                                                                                               |
| ----------- | --------- | ------------ | --------------------------------------------------------------------------------------------------------- |
| resize | - | - | When the size or display state of the outer element changes, you can call this method to trigger a redraw |

## FAQ

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