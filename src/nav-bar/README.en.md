---
category: Navigation
---

# NavBar

### Introduction

Provides navigation functionality for pages, commonly used at the top of pages.

### Import

```jsx
import { NavBar } from '@ray-js/smart-ui';
```

## Code Demonstrations

### Home Page

On the home page, the text style is left-aligned and bold by default. Clicking on the left text triggers an event.

```jsx
import { showToast } from '@ray-js/ray';
import { NavBar } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const onClickLeftText = React.useCallback(event => {
    showToast({ title: "clickToLeftText", icon: 'none' });
  }, []);

  return (
    <NavBar leftText="Home" leftTextType="home" onClickLeftText={onClickLeftText} />
  );
}
```

### Secondary Page

On secondary pages, the text style is centered, with a back arrow on the left. Clicking on the central text or left arrow triggers an event.

```jsx
import { showToast } from '@ray-js/ray';
import { NavBar } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const onClickLeft = React.useCallback(event => {
    showToast({ title: "clickToReturn", icon: 'none' });
  }, []);

  const onClickTitle = React.useCallback(event => {
    showToast({ title: "clickToTitle", icon: 'none' });
  }, []);

  return (
    <NavBar title="Home" leftArrow onClickLeft={onClickLeft} onClickTitle={onClickTitle} />
  );
}
```

### Custom Icons

You can customize the icon style for a richer display.

```jsx
import { showToast } from '@ray-js/ray';
import { NavBar } from '@ray-js/smart-ui';
import React from 'react';
import iconHouse from '@tuya-miniapp/icons/dist/svg/House';

export default function Demo() {
  const onClickLeft = React.useCallback(event => {
    showToast({ title: "clickToReturn", icon: 'none' });
  }, []);

  const onClickLeftIcon = React.useCallback(event => {
    showToast({ title: "clickToLeftIcon", icon: 'none' });
  }, []);

  const onClickLeftText = React.useCallback(event => {
    showToast({ title: "clickToLeftText", icon: 'none' });
  }, []);

  const onClickTitle = React.useCallback(event => {
    showToast({ title: "clickToTitle", icon: 'none' });
  }, []);

  const onClickRight = React.useCallback(event => {
    showToast({ title: "clickToRight", icon: 'none' });
  }, []);

  return (
    <NavBar
      title="Home"
      leftArrow
      leftIcon={iconHouse}
      leftIconSize="32px"
      leftIconClass="nav-bar-icon-home"
      onClickLeft={onClickLeft}
      onClickLeftIcon={onClickLeftIcon}
      onClickLeftText={onClickLeftText}
      onClickTitle={onClickTitle}
      onClickRight={onClickRight}
    />
  );
}
```

```css
.nav-bar-icon-home {
  margin-left: 16px;
}
```

### Left Title

On some secondary pages, the title is on the left or accompanied by an icon.

```jsx
import { showToast } from '@ray-js/ray';
import { NavBar } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const onClickLeft = React.useCallback(event => {
    showToast({ title: "clickToReturn", icon: 'none' });
  }, []);

  const onClickLeftIcon = React.useCallback(event => {
    showToast({ title: "clickToLeftIcon", icon: 'none' });
  }, []);

  const onClickLeftText = React.useCallback(event => {
    showToast({ title: "clickToLeftText", icon: 'none' });
  }, []);

  const onClickTitle = React.useCallback(event => {
    showToast({ title: "clickToTitle", icon: 'none' });
  }, []);

  const onClickRight = React.useCallback(event => {
    showToast({ title: "clickToRight", icon: 'none' });
  }, []);

  return (
    <>
      <NavBar
        leftArrow
        leftText="Home"
        leftTextType="title"
        onClickLeft={onClickLeft}
        onClickLeftText={onClickLeftText}
        onClickRight={onClickRight}
      />

      <NavBar
        customClass="demo-nav-bar"
        leftArrow
        leftText="Home"
        leftTextType="title"
        leftIcon="https://images.tuyacn.com/content-platform/hestia/1729664215ebd89f13e54.png"
        onClickLeft={onClickLeft}
        onClickLeftIcon={onClickLeftIcon}
        onClickLeftText={onClickLeftText}
        onClickRight={onClickRight}
      />
    </>
  );
}
```

```css
.demo-nav-bar {
  margin-top: 24px;
}
```

### Left and Right Text

In situations where there is text on both the left and right, you can combine with `round` and `safe-area-inset-top` for navigation bars suitable for different scenarios.

```jsx
import { showToast } from '@ray-js/ray';
import { NavBar } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const onClickLeft = React.useCallback(event => {
    showToast({ title: "clickToReturn", icon: 'none' });
  }, []);

  const onClickLeftText = React.useCallback(event => {
    showToast({ title: "clickToLeftText", icon: 'none' });
  }, []);

  const onClickTitle = React.useCallback(event => {
    showToast({ title: "clickToTitle", icon: 'none' });
  }, []);

  const onClickRight = React.useCallback(event => {
    showToast({ title: "clickToRight", icon: 'none' });
  }, []);

  return (
    <>
      <NavBar
        title="Home"
        rightText="Button"
        leftText="Return"
        leftArrow
        onClickLeft={onClickLeft}
        onClickLeftText={onClickLeftText}
        onClickTitle={onClickTitle}
        onClickRight={onClickRight}
      />

      <NavBar
        custom-class="demo-nav-bar"
        title="Timer Settings"
        round
        safeAreaInsetTop={false}
        leftText="Cancel"
        rightText="Save"
        rightTextClass="demo-nav-bar__right"
        onClickLeft={onClickLeft}
        onClickLeftText={onClickLeftText}
        onClickTitle={onClickTitle}
        onClickRight={onClickRight}
      />

      <NavBar
        custom-class="demo-nav-bar"
        title="Settings"
        round
        safeAreaInsetTop={false}
        leftArrow
        rightText="Reset"
        rightTextClass="demo-nav-bar__right"
        onClickLeft={onClickLeft}
        onClickLeftText={onClickLeftText}
        onClickTitle={onClickTitle}
        onClickRight={onClickRight}
      />
    </>
  );
}
```

```css
.demo-nav-bar__right {
  --nav-bar-text-color: #007AFF;
}
```

### Using Slots

Customize content through slots.

```jsx
import { showToast, View } from '@ray-js/ray';
import { Icon, NavBar } from '@ray-js/smart-ui';
import React from 'react';
import iconRight from '@tuya-miniapp/icons/dist/svg/Right';

export default function Demo() {
  const onClickLeft = React.useCallback(event => {
    showToast({ title: "clickToReturn", icon: 'none' });
  }, []);

  const onClickLeftText = React.useCallback(event => {
    showToast({ title: "clickToLeftText", icon: 'none' });
  }, []);

  const onClickTitle = React.useCallback(event => {
    showToast({ title: "clickToTitle", icon: 'none' });
  }, []);

  const onClickRight = React.useCallback(event => {
    showToast({ title: "clickToRight", icon: 'none' });
  }, []);

  return (
    <NavBar
      title="Home"
      leftText="Return"
      leftArrow
      onClickLeft={onClickLeft}
      onClickLeftText={onClickLeftText}
      onClickTitle={onClickTitle}
      onClickRight={onClickRight}
      slot={{
        right: (
          <View>
            <Icon name={iconRight} size="16px" />
          </View>
        ),
      }}
    />
  );
}
```

## API

### Props

| Parameter           | Description                             | Type      | Default  |
| ------------------- | --------------------------------------- | --------- | -------  |
| border | Whether to show bottom border | _boolean_ | `true` |
| customStyle | Custom styles for root node | _React.CSSProperties_ | - |
| fixed | Whether to fix at the top | _boolean_ | `false` |
| leftArrow | Whether to show the left arrow | _boolean_ | `false` |
| leftText | Text on the left side | _string_ | `''` |
| leftTextType `v2.0.0` | The style type of the text on the left side, with a range of `home`、`title`、`back` | _string_ | `back` |
| leftIcon `v2.0.0` | Left Icon | _string_ | `''` |
| leftIconSize `v2.0.0` | Left-side icon size, default is 32 | _string \| number_ | `32` |
| round `v2.1.0` | Whether to show rounded corners | _boolean_ | `false` |
| placeholder | Whether to leave space when fixed at top | _boolean_ | `false` |
| rightText | Text on the right side | _string_ | `''` |
| safeAreaInsetTop | Leave top safe distance (status bar height) | _boolean_ | `true` |
| title | Title | _string_ | `''` |
| zIndex | Element z-index | _number_ | `1` |

### Slot

| Name  | Description                |
| ----- | -------------------------- |
| left | Custom left area content |
| right | Custom right area content |
| title | Custom title |

### Events

| Event Name         | Description               | Parameter |
| ------------------ | ------------------------- | --------- |
| onClickLeft | Triggered on clicking left back icon | - |
| onClickRight | Triggered on clicking right button | - |
| onClickTitle `v2.0.0` | Triggered on the central title is clicked | - |
| onClickLeftIcon `v2.0.0` | Triggered on clicking left icon | - |
| onClickLeftText `v2.0.0` | Triggered on clicking left text | - |

### External Style Classes

| Class Name     | Description          |
| -------------- | -------------------- |
| customClass | Root node style class |
| titleClass | Title style class |
| leftIconClass `v2.0.0` | Left icon style class |
| rightTextClass `v2.1.0` | Right text style class |

### Style Variables

The component offers the following CSS variables for custom styles. For usage, please refer to the [ConfigProvider component](/material/smartui?comId=config-provider).

| Name                          | Default Value                            | Description |
| ----------------------------- | ---------------------------------------- | ----------- |
| --nav-bar-height | _var(--app-device-navbar-height, 46px)_ | Navigation bar height |
| --nav-bar-round-min-height `v2.1.0`    | _56px_                               | Minimum height when the navigation bar has rounded corners |
| --nav-bar-round-border-radius `v2.1.0` | 16px 16px 0px 0px                  | Border radius for the navigation bar rounded corners       |
| --nav-bar-background-color | _var(--app-B2, #ffffff)_ | Navigation bar background color |
| --nav-bar-arrow-color | _var(--app-B2-N1, rgba(0, 0, 0, 1))_ | Navigation bar arrow color |
| --nav-bar-icon-size | _32px_ | Navigation bar icon size |
| --nav-bar-icon-color | _var(--app-B2-N1, rgba(0, 0, 0, 1))_ | Navigation bar icon color |
| --nav-bar-icon-margin | _0_ | Navigation bar icon margin |
| --nav-bar-text-font-size `v2.1.0`      | _16px_                               | Navigation bar text font size |
| --nav-bar-text-color | _var(--app-B2-N1, rgba(0, 0, 0, 1))_ | Navigation bar text color |
| --nav-bar-title-font-size | _var(--font-size-lg)_ | Navigation bar title font size |
| --nav-bar-title-font-weight | _600_ | Navigation bar title font weight |
| --nav-bar-title-text-color | _var(--app-B2-N1, rgba(0, 0, 0, 1))_ | Navigation bar title text color |
| --nav-bar-home-font-size | _22px_ | Navigation bar home font size |
| --nav-bar-home-font-weight | _600_ | Navigation bar home font weight |
| --nav-bar-home-text-color | _var(--app-B2-N1, rgba(0, 0, 0, 1))_ | Navigation bar home text color |
| --nav-bar-right-text-color `v2.5.1`     | _var(--app-B2-N1, rgba(0, 0, 0, 1))_   | Text color on the right side of the navigation bar |