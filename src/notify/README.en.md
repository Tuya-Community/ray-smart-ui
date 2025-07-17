<!-- ---
category: Feedback
--- -->

# Notify Message Prompt

### Introduction

Display message prompts at the top of the page, supporting both function calls and component calls.

### Import

```jsx
import { Notify, NotifyInstance } from '@ray-js/smart-ui';
```

## Code Demonstration

### Basic Usage

```js
import { Notify, NotifyInstance } from '@ray-js/smart-ui';

NotifyInstance('Notification content');
```

```jsx
// Add custom node inside the page
<Notify id="smart-notify" />
```

### Notification Types

Support four notification types: `primary`, `success`, `warning`, and `danger`, with `danger` being the default.

```js
// Primary notification
NotifyInstance({ type: 'primary', message: 'Notification content' });

// Success notification
NotifyInstance({ type: 'success', message: 'Notification content' });

// Danger notification
NotifyInstance({ type: 'danger', message: 'Notification content' });

// Warning notification
NotifyInstance({ type: 'warning', message: 'Notification content' });
```

### Custom Notifications

Customize the color and duration of message notifications.

```js
NotifyInstance({
  message: 'Custom color',
  color: '#ad0000',
  background: '#ffe1e1',
});

NotifyInstance({
  message: 'Custom duration',
  duration: 1000,
});
```

### Custom Selector

```js
NotifyInstance({
  message: 'Custom node selector',
  duration: 1000,
  selector: '#custom-selector',
});
```

```jsx
// Add custom node inside the page
<Notify id="custom-selector" />
```

## API

### Methods

| Method        | Description   | Parameters            | Return Value  |
|---------------|---------------|-----------------------|---------------|
| Notify | Displays prompt | `options \| message` | notify instance |
| Notify.clear | Closes prompt | `options` | `void` |

### Options

| Parameter        | Description                                           | Type       | Default Value  |
|------------------|-------------------------------------------------------|------------|----------------|
| background | Background color | _string_ | - |
| color | Font color | _string_ | `#fff` |
| context | Selector's selection range, can pass the component's this as context | _object_ | Current page |
| duration | Display duration (ms), notify won't disappear if value is 0 | _number_ | `3000` |
| message | Display text, supports line breaks using `\n` | _string_ | `''` |
| onClick | Callback function on click | _Function_ | - |
| onClose | Callback function on close | _Function_ | - |
| onOpened | Callback function after fully displayed | _Function_ | - |
| safeAreaInsetTop | Leave safe distance at the top (status bar height) | _boolean_ | `false` |
| selector | Custom node selector | _string_ | `smart-notify` |
| top | Top distance | _number_ | `0` |
| type | Type, optional values are `primary` `success` `warning` | _string_ | `danger` |

### Style Variables

The component provides the following CSS variables that can be used for custom styles. For usage, refer to the [ConfigProvider Component](/material/smartui?comId=config-provider).

| Name                                | Default Value                           | Description                |
| ----------------------------------- | ---------------------------------------- | -------------------------- |
| --notify-padding                    | _6px 15px_                               | Notification padding       |
| --notify-font-size                  | _14px_                                   | Notification font size     |
| --notify-line-height                | _20px_                                   | Notification line height   |
| --notify-primary-background-color   | _#1989fa_                                | Primary notification color |
| --notify-success-background-color   | _#07c160_                                | Success notification color |
| --notify-danger-background-color    | _#ee0a24_                                | Danger notification color  |
| --notify-warning-background-color   | _#ff976a_                                | Warning notification color |