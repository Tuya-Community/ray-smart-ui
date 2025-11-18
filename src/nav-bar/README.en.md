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

The text style of the home page is default left-aligned and bold, triggering an event when the left text is clicked; the `background` property from `v2.7.0` can be used to set the nav-bar's background color.

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
      <NavBar 
        leftText="Home" 
        leftTextType="home"
        onClickLeftText={onClickLeftText} 
      />
      <NavBar
        background="#E4EDFF"
        customClass="demo-nav-bar"
        leftText="HomeHomeHomeHomeHome"
        leftTextType="home"
        onClickLeftText={onClickLeftText}
      />
    </>
  );
}
```

### Second Page Single Icon

When the content of the middle title is relatively long, and the content on both sides is less, you can set the `sideWidth` to `min` in `v2.7.3`.

```jsx
import { showToast } from '@ray-js/ray';
import { NavBar } from '@ray-js/smart-ui';
import React from 'react';
import iconMore from '@tuya-miniapp/icons/dist/svg/More';

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

  return (
    <NavBar
      title="ScheduleScheduleScheduleSchedule"
      leftArrow
      rightIcon={iconMore}
      sideWidth="min"
      rightIconSize="24px"
      onClickRight={onClickRight}
      onClickLeft={onClickLeft}
      onClickTitle={onClickTitle}
    />
  );
}
```

### Second Page Common Cases

Demonstrates common usage scenarios of the secondary page, including using slots to customize the right-side content, text buttons on the left and right, etc.

```jsx
import { showToast } from '@ray-js/ray';
import { Icon, NavBar } from '@ray-js/smart-ui';
import React from 'react';
import iconMore from '@tuya-miniapp/icons/dist/svg/More';
import iconHouse from '@tuya-miniapp/icons/dist/svg/House';

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
        title="ScheduleScheduleScheduleSchedule"
        leftArrow
        rightIcon={iconMore}
        rightIconSize="24px"
        onClickRight={onClickRight}
        onClickLeft={onClickLeft}
        onClickTitle={onClickTitle}
        slot={{
          right: <Icon size="24px" customStyle={{ marginRight: '16px' }} name={iconHouse} />,
        }}
      />
      <NavBar
        title="ScheduleScheduleScheduleSchedule"
        rightText="Confirm"
        leftText="Cancel"
        customClass="demo-nav-bar"
        rightTextColor="#F04C4C"
        onClickRightText={onClickRightText}
        onClickLeftText={onClickLeftText}
        onClickTitle={onClickTitle}
      />
      <NavBar
        title="ScheduleScheduleScheduleSchedule"
        leftArrow
        rightText="Confirm"
        customClass="demo-nav-bar"
        rightTextColor="#F04C4C"
        onClickRightText={onClickRightText}
        onClickLeft={onClickLeft}
        onClickTitle={onClickTitle}
      />
    </>
  );
}
```

### Second Page Short Title

When there are more operations on both sides, you can set the `sideWidth` to `max` in `v2.7.3` to reduce the size of the central title area.

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

  const onClickRightText = React.useCallback(event => {
    showToast({ title: "Clicked right text", icon: 'none' });
  }, []);

  const onClickLeftText = React.useCallback(event => {
    showToast({ title: "Clicked left text", icon: 'none' });
  }, []);

  return (
    <>
      <NavBar
        title="ScheduleSchedule"
        leftArrow
        sideWidth="max"
        onClickLeft={onClickLeft}
        onClickTitle={onClickTitle}
      />
      <NavBar
        title="ScheduleSchedule"
        leftText="Cancel"
        rightText="Save"
        customClass="demo-nav-bar"
        rightTextColor="#F04C4C"
        sideWidth="max"
        onClickLeftText={onClickLeftText}
        onClickTitle={onClickTitle}
        onClickRightText={onClickRightText}
      />
      <NavBar
        title="ScheduleSchedule"
        leftArrow
        rightText="Save"
        rightTextColor="#F04C4C"
        sideWidth="max"
        customClass="demo-nav-bar"
        onClickLeft={onClickLeft}
        onClickTitle={onClickTitle}
        onClickRightText={onClickRightText}
      />
    </>
  );
}
```

### Custom Width

`sideWidth` also supports passing values like `100`, `'100px'`, `'100rpx'` to customize the widths of both sides.

```jsx
import { showToast } from '@ray-js/ray';
import { NavBar } from '@ray-js/smart-ui';
import React from 'react';
import iconMore from '@tuya-miniapp/icons/dist/svg/More';

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

  return (
    <NavBar
      title="ScheduleScheduleScheduleSchedule"
      leftArrow
      sideWidth="100px"
      rightIcon={iconMore}
      rightIconSize="24px"
      onClickRight={onClickRight}
      onClickLeft={onClickLeft}
      onClickTitle={onClickTitle}
    />
  );
}
```

### Left Title

Some secondary page titles are positioned on the left, or accompanied by an icon.

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

| Parameter             | Description                               | Type                            | Default Value                                     |
| --------------------- | ----------------------------------------- | ------------------------------- | ------------------------------------------------- |
| border                | Whether to display the bottom border     | _boolean_                       | `true` `v2.0.0` `false` `v2.7.0`                 |
| customStyle           | Custom styles for the root node          | _React.CSSProperties_           | -                                                 |
| fixed                 | Whether fixed at the top                 | _boolean_                       | `false`                                          |
| leftArrow             | Whether to show left arrow                | _boolean_                       | `false`                                          |
| leftText              | Text on the left side                    | _string_                        | `''`                                             |
| leftTextType `v2.0.0`| Style type for the left text, options are `home`, `title`, `back` | _string_ | `back`                                           |
| leftIcon `v2.0.0`    | Left icon                                | _string_                        | `''`                                             |
| leftIconSize `v2.0.0`| Size of the left icon, default is 32    | _string \| number_              | `32`                                             |
| round `v2.1.0`       | Whether to display corners                | _boolean_                       | `false`                                          |
| placeholder           | Whether to enable placeholder when fixed at the top | _boolean_ | `false`                               |
| rightText             | Text on the right side                   | _string_                        | `''`                                             |
| safeAreaInsetTop      | Whether to leave a safe top distance (status bar height) | _boolean_ | `true`                             |
| title                 | Title                                    | _string_                        | `''`                                             |
| zIndex                | Element z-index                          | _number_                        | `1`                                              |
| rightTextColor `v2.7.0` | Color of the right text                | _string_                        | -                                                 |
| rightIcon `v2.7.0`   | Right icon                               | _string_                        | -                                                 |
| rightIconColor `v2.7.0` | Right icon color                        | _string_                        | -                                                 |
| rightIconSize `v2.7.0` | Right icon size                         | _number_                        | `32px`                                           |
| leftIconColor `v2.7.0` | Left icon color                         | _string_                        | -                                                 |
| background `v2.7.0`  | Overall background color                  | _string_                        | -                                                 |

### Slot

| Name   | Description               |
| ------ | ------------------------- |
| left   | Custom content for the left area |
| right  | Custom content for the right area |
| title  | Custom title             |

### Events

| Event Name           | Description                            | Parameters |
| -------------------- | -------------------------------------- | ---------- |
| onClickLeft          | Triggered when the left back icon is clicked | -      |
| onClickRight         | Triggered when the right button is clicked | -       |
| onClickTitle `v2.0.0` | Triggered when the central title is clicked | -      |
| onClickLeftIcon `v2.0.0` | Triggered when the left icon is clicked | -      |
| onClickLeftText `v2.0.0` | Triggered when the left text is clicked | -      |
| onClickRightIcon `v2.7.0` | Triggered when the right icon is clicked | -      |
| onClickRightText `v2.7.0` | Triggered when the right text is clicked | -      |

### External Style Classes

| Class Name         | Description         |
| ------------------ | ------------------- |
| customClass        | Root node style class |
| titleClass         | Title style class   |
| leftIconClass `v2.0.0` | Left icon style class |
| rightTextClass `v2.1.0` | Right text style class |
| rightIconClass `v2.7.0` | Right icon style class |
| leftTextClass `v2.7.0` | Left text style class |

### Style Variables

The component provides the following CSS variables for custom styling. Please refer to the usage method in the [ConfigProvider component](/material/smartui?comId=config-provider).

| Name                                   | Default Value                                         | Description                |
| -------------------------------------- | ---------------------------------------------------- | -------------------------- |
| --nav-bar-height                       | _var(--app-device-navbar-height, 46px)_             | Navigation bar height      |
| --nav-bar-round-min-height `v2.1.0`   | _56px_                                              | Minimum height when rounded corners are present |
| --nav-bar-round-border-radius `v2.1.0`| _16px 16px 0px 0px_                               | Whether to display rounded corners for the navbar |
| --nav-bar-background-color             | _var(--app-B2, #ffffff)_                            | Navigation bar background color |
| --nav-bar-arrow-color                  | _var(--app-B2-N1, rgba(0, 0, 0, 1))_              | Navigation bar arrow color  |
| --nav-bar-icon-size `@deprecated v2.7.0` | _32px_                                             | Navigation bar icon size   |
| --nav-bar-icon-color                   | _var(--app-B2-N1, rgba(0, 0, 0, 1))_              | Navigation bar icon color  |
| --nav-bar-icon-margin `@deprecated v2.7.0` | _0_                                               | Navigation bar icon margin  |
| --nav-bar-text-font-size `v2.1.0`     | _16px_                                              | Navigation bar text size   |
| --nav-bar-text-color                   | _var(--app-B2-N2, rgba(0, 0, 0, 1))_              | Navigation bar text color  |
| --nav-bar-title-font-size              | _17px_                                              | Navigation bar title text size |
| --nav-bar-title-font-weight            | _600_                                              | Navigation bar title weight |
| --nav-bar-title-text-color             | _var(--app-B2-N1, rgba(0, 0, 0, 1))_              | Navigation bar title text color |
| --nav-bar-home-font-size               | _22px_                                              | Navigation bar home text size |
| --nav-bar-home-font-weight             | _600_                                              | Navigation bar home weight  |
| --nav-bar-home-text-color              | _var(--app-B2-N1, rgba(0, 0, 0, 1))_              | Navigation bar home text color |
| --nav-bar-right-text-color `v2.5.1`   | _var(--app-B2-N1, rgba(0, 0, 0, 1))_              | Navigation bar right text color |
| --nav-bar-title-max-width `v2.6.0`    | _56%_ `v2.6.0` _calc(100% - 98px - 16px)_ `v2.7.0` | Width of the navigation bar title |
| --nav-bar-side-width `v2.7.0`         | _98px_                                              | Width of both sides        |
| --nav-bar-text-padding `v2.7.0`       | _16px_                                              | Text padding on both sides |
| --nav-bar-icon-padding `v2.7.0`       | _16px_                                              | Icon padding on both sides |
| --nav-bar-title-margin `v2.7.0`       | _16px_                                              | Margin for the title       |
| --nav-bar-home-max-width `v2.7.0`     | _calc(100% - 98px - 16px)_                         | Maximum width of left title when on the homepage |
| --nav-bar-left-title-padding `v2.7.0` | _8px_                                              | Left padding in left title mode |