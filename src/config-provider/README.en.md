---
category: General
---

# ConfigProvider

## Introduction

Used to configure theme styles for Smart UI components.


### Import

```jsx
import { ConfigProvider } from '@ray-js/smart-ui';
```

### Customize Theme

```!info
Smart UI components organize styles through a wealth of [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties). By overriding these CSS variables, effects such as **customizing themes and dynamically switching themes** can be achieved.
```


## Examples

Take the Button component as an example, looking at the component's styles, you can see the following variables exist on the `.smart-button--primary` class name:

```css
.smart-button--primary {
  color: var(--button-primary-color, #fff);
  background: var(--button-primary-background-color, #07c160);
  border: var(--button-border-width, 1px) solid var(
      --button-primary-border-color,
      #07c160
    );
}
```


### Custom CSS Variables

#### Override via CSS

You can directly override these CSS variables in app.less, and the Button component's styles will change accordingly:

```css
/* After adding this style, the Primary Button will turn red */
page {
  --button-primary-background-color: red;
}
```
Or locally override in index.module.less

```css
.custom-box {
  --button-primary-background-color: red;
}

```

#### Override via ConfigProvider

You just need to write the CSS variables of the component you want to modify in camel case, and the component has full CSS variable type hints.

```jsx
import { ConfigProvider, Button } from '@ray-js/smart-ui';
import React, { useState } from 'react';
import { View } from '@ray-js/ray';

export default function Demo() {
  const [color, setColor] = useState('#07c160');

  return (
    <>
      <View style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
        <Button type="primary" color="red" onClick={() => setColor('red')}>
          Set Color
        </Button>
        <Button type="primary" color="green" onClick={() => setColor('green')}>
          Set Color
        </Button>
        <Button type="primary" color="blue" onClick={() => setColor('blue')}>
          Set Color
        </Button>
      </View>
      <ConfigProvider
        themeVars={{
          buttonPrimaryBorderColor: color,
          buttonPrimaryBackgroundColor: color,
        }}
      >
        <Button type="primary">Primary Button</Button>
      </ConfigProvider>
    </>
  );
}
```

### Theme Switch  `v2.7.4`

You can switch the theme mode of components through the `theme` prop, supporting `light` and `dark` modes.

```jsx
import { ConfigProvider, Cell, CellGroup } from '@ray-js/smart-ui';
import React, { useState } from 'react';
import { View, Text } from '@ray-js/ray';
import { Button } from '@ray-js/smart-ui';

export default function Demo() {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

  return (
    <>
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '24px',
          alignItems: 'center',
        }}
      >
        <Button type="primary" onClick={() => setCurrentTheme('light')}>
          Light Theme
        </Button>
        <Text>Current Theme: {currentTheme}</Text>
        <Button type="primary" onClick={() => setCurrentTheme('dark')}>
          Dark Theme
        </Button>
      </View>
      <ConfigProvider theme={currentTheme}>
        <CellGroup>
          <Cell title="Title" value="Content" />
          <Cell title="Title" value="Content" label="Description Information" isLink />
        </CellGroup>
      </ConfigProvider>
    </>
  );
}
```

## API

### Props

| Parameter   | Description         | Type          | Default Value |
| ----------- | ------------------- | ------------- | ------------- |
| themeVars | Custom theme variables | _object_ | - |
| theme `v2.7.4` | Theme mode | _'light'\/'dark'_ | - |