---
category: Data Entry
---

# Field

### Introduce

Input box

### Introduce

```jsx
import { Field } from '@ray-js/smart-ui';
```

## Code demonstration

### Basic usage

```jsx
import { Field } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value] = React.useState('')
  return <Field value={value} placeholder="Please enter the user name" border={false} clearable />;
}
```

## API

### Props

| Parameters                | Description                                                                                                                                                                                   | Type    | Default value |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------------- |
| adjustPosition            | Whether the keyboard is pushed on the page automatically                                                                                                                                      | boolean | true          |
| alwaysEmbed        | Forced Input is in the same level, when the default Focus will be cut to an extraordinary state (only effective under iOS)                                                                    | boolean | false         |
| arrowDirection            | The direction of the arrow, the optional value is left up down                                                                                                                                | string  | -             |
| autoFocus                 | Automatic focus, pull up the keyboard                                                                                                                                                         | boolean | false         |
| autosize                  | Whether to auto-adjust the content height, effective only for textarea. You can pass an object, such as { maxHeight: 100, minHeight: 50 }, with units in px.                                  |
| border                    | Whether to display the inner border                                                                                                                                                           | boolean | true          |
| center                    | Whether to make the content vertically                                                                                                                                                        | boolean | false         |
| clearTrigger       | Timing for showing the clear icon: 'always' means it shows when the input box is not empty, 'focus' means it shows when the input box is focused and not empty.                               | string  | focus         |
| clearable                 | Whether to use the removal control                                                                                                                                                            | boolean | false         |
| clickable                 | Do you turn on a click feedback                                                                                                                                                               | boolean | false         |
| confirmHold               | Whether to keep the keyboard open when clicking the bottom right button, ineffective when type='textarea'.                                                                                    | boolean | false         |
| confirmType               | Set the text of the button in the lower right corner of the keyboard, effective only when type='text'.                                                                                        | string  | done          |
| cursor                    | Set the cursor position when focusing                                                                                                                                                         | number  | -1            |
| cursorSpacing             | The distance between the bottom of the input box and the keyboard when the input box is focused.                                                                                              | number  | 50            |
| customStyle               | Custom style                                                                                                                                                                                  | object  | -             |
| disableDefaultPadding     | Remove default padding on iOS, applicable only to textarea                                                                                                                                    | boolean | true          |
| disabled                  | Whether to disable the input box                                                                                                                                                              | boolean | false         |
| error                     | Whether the content will be marked with red                                                                                                                                                   | boolean | false         |
| errorMessage              | The bottom error prompt copywriting, not displayed in the air                                                                                                                                 | string  | ''            |
| errorMessageAlign         | Bottom error message alignment options can be center or right.                                                                                                                                | string  | ''            |
| extraEventParams | Enabling the event enhancement mode will provide additional cursor and keyCode parameters in input and change events. This is scheduled to be the default behavior in the next major version. | boolean | false         |
| fixed                     | If type is textarea and it is in an area with position:fixed, the specified attribute fixed needs to be set to true.                                                                          | boolean | false         |
| focus                     | Focus                                                                                                                                                                                         | boolean | false         |
| holdKeyboard              | When focused, do not close the keyboard when clicking on the page.                                                                                                                            | boolean | false         |
| inputAlign                | Input box content alignment options, selectable value is center right                                                                                                                         | string  | left          |
| isLink                    | Whether to show the right arrow and turn on the click feedback                                                                                                                                | boolean | false         |
| label                     | Text on the left side of the input box                                                                                                                                                        | string  | -             |
| leftIcon                  | Name or image link of the left icon, optional values can be found in the Icon component                                                                                                       | string  | -             |
| maxlength                 | The maximum input length is not limited to the maximum length when set to -1                                                                                                                  | number  | -1            |
| name                      | The identifier when submitted in the form.You can expand the click area by configuration name                                                                                                 | string  | -             |
| password                  | Whether it is a password type                                                                                                                                                                 | boolean | false         |
| placeholder               | The input box is the place where time is empty                                                                                                                                                | string  | -             |
| placeholderStyle          | Specify the style of Placeholder                                                                                                                                                              | object  | -             |
| readonly                  | Whether to read only                                                                                                                                                                          | boolean | false         |
| required                  | Whether the display form must fill in the star number                                                                                                                                         | boolean | false         |
| rightIcon                 | The right icon name or picture link, the optional value see icon component                                                                                                                    | string  | -             |
| selectionEnd              | The end position of the cursor is effective when it is automatically aggregated.                                                                                                              | number  | -1            |
| selectionStart            | The starting position of the cursor is effective when it is automatically aggregated.                                                                                                         | number  | -1            |
| showConfirmBar            | Whether to display the "button" of the button above the keyboard is only effective for Textarea                                                                                               | boolean | true          |
| showWordLimit             | Whether to display the number statistics, you need to set up the MaxLength property                                                                                                           | boolean | false         |
| size                      | The cell size, the optional value is large                                                                                                                                                    | string  | -             |
| titleWidth                | Title width                                                                                                                                                                                   | string  | 6.2em         |
| type                      | Can be set to any native type, such as number, idcard, textarea, digit nickname                                                                                                               | string  | text          |
| value                     | The value of the current input                                                                                                                                                                | string  | number        | - |

### Events

| Event | Description | Callback Parameters |
| --- | --- | --- |
| onInput | Triggered when content is input | event.detail: Current input value; When extraEventParams is `true`, it is `InputDetail` |
| onChange | Triggered when content is input | event.detail: Current input value; When extraEventParams is `true`, it is `InputDetail` |
| onConfirm | Triggered when the complete button is clicked | event.detail: Current input value |
| onClickIcon | Triggered when the tail icon is clicked | - |
| onFocus | Triggered when the input box is focused | event.detail.value: Current input value; <br>event.detail.height: Keyboard height |
| onBlur | Triggered when the input box loses focus | event.detail.value: Current input value; <br>event.detail.cursor: Cursor position (if `type` is not `textarea`, the value is `0`) |
| onClear | Triggered when the clear control is clicked | - |
| onClickInput | Triggered when the input area is clicked | - |
| onlinechange | Called when the number of input lines changes, only effective for textarea | event.detail = { height: 0, heightRpx: 0, lineCount: 0 } |
| onKeyboardHeightChange | Triggered when the keyboard height changes | event.detail = { height: height, duration: duration } |

### InputDetail

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| value | Current input value | _string_ | - |
| cursor | Cursor position | _number_ | - |
| keyCode | Key value | _number_ | - |

### Slot

| Name | Description |
| ---------- | ---------------------------------------------------------- |
| label | Custom input field label, does not take effect if the `label` attribute is set |
| leftIcon | Custom input field head icon |
| rightIcon | Custom input field tail icon |
| button | Custom input field tail button |
| input | Custom input field, using this slot will invalidate related properties and events of the input field |

### External Style

| Class Name | Description |
| ----------------------- | -------------- |
| customClass | Root node style class |
| labelClass | Left text style class |
| inputClass | Input field style class |
| rightIconClass | Right icon style class |
