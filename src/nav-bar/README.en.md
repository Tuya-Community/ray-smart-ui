---
category: Navigation
---

# NavBar

### Introduction

Provides navigation functionality for the page, commonly used at the top of the page.

### Import

```jsx
import { NavBar } from '@ray-js/smart-ui';
```

## Code Demonstrations

### Home Page

The text style on the homepage is left-aligned and bold by default. Clicking on the text on the left triggers an event; the background `v2.7.0` property can set the background color of the nav-bar.


```jsx
import { showToast } from '@ray-js/ray';
import { NavBar } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const onClickLeftText = React.useCallback(event => {
    showToast({ title: "Clicked left text", icon: 'none' });
  }, []);

  return (
    <>
      <NavBar leftText="HomeHomeHomeHomeHome" leftTextType="home" onClickLeftText={onClickLeftText} />
      <NavBar
        background="#E4EDFF"
        leftText="HomeHomeHomeHomeHome"
        leftTextType="home"
        onClickLeftText={onClickLeftText}
      />
    </>
  );
}
```

### Secondary Page

The text style on the secondary page is centered, with a back arrow displayed on the left. An event is triggered when the central text or left arrow is clicked.

```jsx
import { showToast } from '@ray-js/ray';
import { NavBar } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const onClickLeft = React.useCallback(event => {
    showToast({ title: "Clicked back", icon: 'none' });
  }, []);

  const onClickTitle = React.useCallback(event => {
    showToast({ title: "Clicked central text", icon: 'none' });
  }, []);

  const onClickRight = React.useCallback(event => {
    showToast({ title: "Clicked right side", icon: 'none' });
  }, []);

  const onClickRightText = React.useCallback(event => {
    showToast({ title: "Clicked right text", icon: 'none' });
  }, []);

  const onClickLeftText = React.useCallback(event => {
    showToast({ title: "Clicked left text", icon: 'none' });
  }, []);

  return (
    <>
      <NavBar
        title="Home"
        leftArrow
        onClickLeft={onClickLeft}
        onClickRight={onClickRight}
        onClickTitle={onClickTitle}
      />
      <NavBar
        title="Home"
        rightText="Delete"
        rightTextColor="#F04C4C"
        leftArrow
        onClickLeft={onClickLeft}
        onClickRightText={onClickRightText}
        onClickTitle={onClickTitle}
      />
      <NavBar
        title="Home"
        rightText="Delete"
        rightTextColor="#F04C4C"
        leftText="Cancel"
        onClickLeftText={onClickLeftText}
        onClickRightText={onClickRightText}
        onClickTitle={onClickTitle}
      />
    </>
  );
}
```

### Right Icon

Icons can be displayed on the right side, supporting custom icon styles and using slots.

```jsx
import { showToast } from '@ray-js/ray';
import { Icon, NavBar } from '@ray-js/smart-ui';
import React from 'react';
import iconMore from '@tuya-miniapp/icons/dist/svg/More';
import iconHouse from '@tuya-miniapp/icons/dist/svg/House';

export default function Demo() {
  const onClickRightIcon = React.useCallback(event => {
    showToast({ title: "Clicked right icon", icon: 'none' });
  }, []);

  return (
    <>
      <NavBar
        title="Settings"
        leftArrow
        rightIcon={iconMore}
        rightIconSize="32px"
        rightIconColor="var(--app-B2-N1, rgba(0, 0, 0, 1))"
        onClickRightIcon={onClickRightIcon}
      />
      <NavBar
        title="Settings"
        leftArrow
        rightIcon={iconMore}
        rightIconSize="32px"
        rightIconColor="var(--app-B2-N1, rgba(0, 0, 0, 1))"
        slot={{
          right: (
            <Icon
              size="32px"
              customStyle={{ marginRight: '16px' }}
              name={iconHouse}
              color="var(--app-B2-N1, rgba(0, 0, 0, 1))"
            />
          ),
        }}
        onClickRightIcon={onClickRightIcon}
      />
    </>
  );
}
```

### Custom Icons

Customizable icon styles for a richer display.

```jsx
import { showToast } from '@ray-js/ray';
import { NavBar } from '@ray-js/smart-ui';
import React from 'react';
import iconHouse from '@tuya-miniapp/icons/dist/svg/House';

export default function Demo() {
  const onClickLeft = React.useCallback(event => {
    showToast({ title: "Clicked back", icon: 'none' });
  }, []);

  const onClickLeftIcon = React.useCallback(event => {
    showToast({ title: "Clicked left icon", icon: 'none' });
  }, []);

  const onClickTitle = React.useCallback(event => {
    showToast({ title: "Clicked central text", icon: 'none' });
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
      onClickTitle={onClickTitle}
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

Some secondary page titles are on the left or accompanied by an icon.

```jsx
import { showToast } from '@ray-js/ray';
import { NavBar } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const onClickLeft = React.useCallback(event => {
    showToast({ title: "Clicked back", icon: 'none' });
  }, []);

  const onClickLeftIcon = React.useCallback(event => {
    showToast({ title: "Clicked left icon", icon: 'none' });
  }, []);

  const onClickLeftText = React.useCallback(event => {
    showToast({ title: "Clicked left text", icon: 'none' });
  }, []);

  const onClickRight = React.useCallback(event => {
    showToast({ title: "Clicked right side", icon: 'none' });
  }, []);

  return (
    <NavBar
      leftText="Home"
      leftTextType="title"
      leftIcon="https://images.tuyacn.com/content-platform/hestia/1729664215ebd89f13e54.png"
      onClickLeft={onClickLeft}
      onClickLeftIcon={onClickLeftIcon}
      onClickLeftText={onClickLeftText}
      onClickRight={onClickRight}
    />
  );
}
```

## API

### Props

| Parameter            | Description                                      | Type      | Default  |
| --------------------- | ----------------------------------------------- | --------- | -------- |
| border               | Whether to show bottom border                   | _boolean_ | `true`   |
| customStyle          | Custom styles for the root node                 | _React.CSSProperties_ | -      |
| fixed                | Whether to fix at the top                       | _boolean_ | `false`  |
| leftArrow            | Whether to show left arrow                      | _boolean_ | `false`  |
| leftText             | Left-side text                                  | _string_  | `''`     |
| leftTextType `v2.0.0` | Style type for left text, range is `home`, `title`, `back` | _string_  | `back`   |
| leftIcon `v2.0.0`    | Left-side icon                                 | _string_  | `''`     |
| leftIconSize `v2.0.0` | Size of left icon, default is 32                | _string \| number_ | `32`    |
| round `v2.1.0`      | Whether to show rounded corners                 | _boolean_ | `false`  |
| placeholder           | Whether to enable placeholder when fixed at the top | _boolean_ | `false`  |
| rightText            | Right-side text                                 | _string_  | `''`     |
| safeAreaInsetTop     | Whether to reserve top safe area (status bar height) | _boolean_ | `true`   |
| title                | Title                                           | _string_  | `''`     |
| zIndex               | Element z-index                                 | _number_  | `1`      |

### Slot

| Name  | Description               |
| ----- | ------------------------- |
| left  | Custom content for left area  |
| right | Custom content for right area |
| title | Custom title                |

### Events

| Event Name          | Description                                   | Parameters |
| ------------------- | --------------------------------------------- | ---------- |
| onClickLeft        | Triggered when clicking the left return icon | -          |
| onClickRight       | Triggered when clicking the right button     | -          |
| onClickTitle `v2.0.0` | Triggered when clicking the central title  | -          |
| onClickLeftIcon `v2.0.0` | Triggered when clicking the left icon | -          |
| onClickLeftText `v2.0.0` | Triggered when clicking the left text | -          |

### External Style Classes

| Class Name       | Description                |
| ---------------- | -------------------------- |
| customClass      | Root node style class      |
| titleClass       | Title style class          |
| leftIconClass `v2.0.0` | Left icon style class     |
| rightTextClass `v2.1.0` | Right text style class    |

### Style Variables

The component provides the following CSS variables for custom styling. Please refer to the [ConfigProvider component](/material/smartui?comId=config-provider) for usage.

| Name                           | Default Value                                          | Description         |
|--------------------------------|-------------------------------------------------------|---------------------|
| --nav-bar-height               | _var(--app-device-navbar-height, 46px)_              | Navigation bar height|
| --nav-bar-round-min-height `v2.1.0` | _56px_                                          | Minimum height when navigation bar has rounded corners |
| --nav-bar-round-border-radius `v2.1.0` | _16px 16px 0px 0px_                         | Whether to show rounded corners for the navigation bar |
| --nav-bar-background-color     | _var(--app-B2, #ffffff)_                             | Navigation bar background color |
| --nav-bar-arrow-color          | _var(--app-B2-N1, rgba(0, 0, 0, 1))_                | Navigation bar arrow color |
| --nav-bar-icon-size            | _32px_                                               | Navigation bar icon size |
| --nav-bar-icon-color           | _var(--app-B2-N1, rgba(0, 0, 0, 1))_                | Navigation bar icon color |
| --nav-bar-icon-margin          | _0_                                                  | Navigation bar icon margin |
| --nav-bar-text-font-size `v2.1.0` | _16px_                                           | Navigation bar text size |
| --nav-bar-text-color           | _var(--app-B2-N1, rgba(0, 0, 0, 1))_                | Navigation bar text color |
| --nav-bar-title-font-size      | _var(--font-size-lg)_                               | Navigation bar title text size |
| --nav-bar-title-font-weight    | _600_                                               | Navigation bar title font weight |
| --nav-bar-title-text-color     | _var(--app-B2-N1, rgba(0, 0, 0, 1))_                | Navigation bar title text color |
| --nav-bar-home-font-size       | _22px_                                              | Navigation bar home text size |
| --nav-bar-home-font-weight     | _600_                                               | Navigation bar home font weight |
| --nav-bar-home-text-color      | _var(--app-B2-N1, rgba(0, 0, 0, 1))_                | Navigation bar home text color |
| --nav-bar-right-text-color `v2.5.1` | _var(--app-B2-N1, rgba(0, 0, 0, 1))_           | Navigation bar right text color |
| --nav-bar-title-max-width `v2.6.0` | _56%_                                            | Width of the navigation bar title |