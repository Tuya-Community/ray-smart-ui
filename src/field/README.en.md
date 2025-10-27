---
category: Data Entry
---

# Field

### Introduction

Input box

### Import

```jsx
import { Field } from '@ray-js/smart-ui';
```

## Code Demonstration

### Basic Usage

`hiddenLabel` can hide the entire left content.

```jsx
import { Field, CellGroup } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value, setValue] = React.useState('')
  const [value2, setValue2] = React.useState('')
  const onChange = (event) => {
    // event.detail is the current input value
    console.log(event.detail);
  }
  const onChange2 = (event) => {
    setValue2(event.detail)
  }
  return (
    <CellGroup>
      <Field 
        value={value}
        label="Title"
        placeholder="Please enter"
        onChange={onChange}
      />
      <Field 
        value={value} 
        label="Title"
        placeholder="Please enter"
        hiddenLabel
        onChange={onChange2}
      />
    </CellGroup>
  );
}
```

### Custom Type

Define different types of input boxes according to the `type` property; enabling the `cardMode` opens the card input mode.

```jsx
import { Field, CellGroup } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [password, setPassword] = React.useState('')
  const [num, setNum] = React.useState('')
  return (
    <CellGroup>
      <Field 
        value={password}
        type="password"
        label="Password"
        placeholder="Please enter"
      />
      <Field 
        value={num} 
        cardMode
        type="number"
        subLabel="Subtitle"
        label="Title"
        placeholder="Please enter"
      />
    </CellGroup>
  );
}
```

### Disable Input Box

`disabled` can disable the entire input box.

```jsx
import { Field, CellGroup } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [value, setValue] = React.useState('')
  const [num, setNum] = React.useState('')
  return (
    <CellGroup>
      <Field 
        value={value}
        disabled
        placeholder="Input box is disabled"
        label="Title"
      />
      <Field 
        value={num} 
        cardMode
        disabled
        subLabel="Subtitle"
        label="Title"
        placeholder="Please enter"
      />
    </CellGroup>
  );
}
```

### Display Icon

Use the slot `leftIcon` to insert the icon on the left side.

```jsx
import { Field, Icon, CellGroup } from '@ray-js/smart-ui';
import Sun from '@tuya-miniapp/icons/dist/svg/Sun'
import { Image } from '@ray-js/ray'
import React from 'react';

export default function Demo() {
  const [num, setNum] = React.useState('')
  return (
    <CellGroup>
      <Field 
        label="Title"
        placeholder="Please enter"
        slot={{
          leftIcon: <Icon name={Sun} color="#3678E3" size="22" />
        }}
      />
      <Field 
        value={num}
        cardMode
        label="Title"
        placeholder="Please enter"
        slot={{
          leftIcon: (
            <Image 
              style={{ height: '50px', width: '50px' }}
              src="https://images.tuyacn.com/rms-static/974a30f0-a624-11ef-be03-d1a4feb99779-1731986155903.png?tyName=light-img" 
            />
          )
        }}
      />
    </CellGroup>
  );
}
```

### Error Prompt

Add corresponding error prompt through the `errorMessage` property; set `interError` to override the `placeholder` content with the error message.

```jsx
import { Field, Icon, CellGroup } from '@ray-js/smart-ui';
import { Image } from '@ray-js/ray'
import React from 'react';

export default function Demo() {
  const [value, setValue] = React.useState('')
  const [num, setNum] = React.useState('')
  return (
    <CellGroup>
      <Field 
        label="Title"
        errorMessage="Please enter username"
        interError
        required
      />
      <Field 
        value={value}
        label="Title"
        placeholder="Please enter"
        errorMessage="Format error"
        required
      />
      <Field 
        value={num}
        cardMode
        label="Title"
        subLabel="Title"
        placeholder="Please enter"
        errorMessage="Format error"
        required
        slot={{
          leftIcon: (
            <Image 
              style={{ height: '50px', width: '50px' }}
              src="https://images.tuyacn.com/rms-static/974a30f0-a624-11ef-be03-d1a4feb99779-1731986155903.png?tyName=light-img" 
            />
          )
        }}
      />
    </CellGroup>
  );
}
```

### Insert Button

The button slot allows inserting a button at the end of the input box.

```jsx
import { Field, Button, CellGroup } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [num, setNum] = React.useState('')
  return (
    <CellGroup>
      <Field 
        value={num}
        label="Title"
        placeholder="Please enter verification code"
        type="number"
        inputAlign="left"
        slot={{
          button: <Button type="info" custom-class="button">Send Code</Button>
        }}
      />
    </CellGroup>
  );
}
```

### Message

When setting the type to `textarea` mode, the number of characters entered and the limit number can be displayed at the end.

```jsx
import { Field, CellGroup } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [message, setMessage] = React.useState('')
  const onChange = (event) => {
    setMessage(event.detail)
  }
  return (
    <Field 
      value={message}
      label="Matter"
      type="textarea"
      placeholder="Please leave a message"
      showWordLimit
      maxlength={200}
      onChange={onChange}
    />
  );
}
```

## API

### Props

| Parameter                    | Description                                                                                                   | Type                | Default |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------- | ------- |
| adjustPosition | Whether the page is automatically pushed up when the keyboard pops up | _boolean_ | `true` |
| alwaysEmbed `v1.9.2` | Force the input to stay in the same layer state. The default is that the input will switch to a different layer when focused (only effective on iOS) | _boolean_ | `false` |
| arrowDirection | Arrow direction, optional values are `left` `up` `down` | _string_ | - |
| autoFocus  `@deprecated Mini program not supported` | Auto focus, raise the keyboard | _boolean_ | `false` |
| autosize | Whether to adapt the content height, only effective for textarea, <br>can pass an object, such as { maxHeight: 100, minHeight: 50 }, <br>unit is `px` | _boolean \| object_ | `false` |
| border | Whether to show the inner border | _boolean_ | `false` |
| center | Whether to vertically center the content | _boolean_ | `false` |
| clearTrigger `v1.8.4` | When to show the clear icon, `always` means to display when the input box is not empty, <br>`focus` means to display when the input box is focused and not empty | _string_ | `focus` |
| clearable | Whether to enable the clear control | _boolean_ | `false` |
| clickable | Whether to enable click feedback | _boolean_ | `false` |
| confirmHold | Whether to keep the keyboard from shrinking when clicking the button on the bottom right corner of the keyboard. Invalid when type='textarea' | _boolean_ | `false` |
| confirmType | Set the text of the button on the bottom right corner of the keyboard. Only valid when type='text' | _string_ | `done` |
| cursor | Specifies the cursor position when focused | _number_ | `-1` |
| cursorSpacing | The distance between the bottom of the input box and the keyboard when focused | _number_ | `50` |
| customStyle | Custom style | _React.CSSProperties_ | - |
| disableDefaultPadding | Whether to remove the default padding on iOS, only effective for textarea | _boolean_ | `true` |
| disabled | Whether to disable the input box | _boolean_ | `false` |
| error | Whether to mark the input content in red | _boolean_ | `false` |
| errorMessage | The error message text at the bottom, will not be displayed if empty | _string_ | `''` |
| errorMessageAlign | Bottom error message text alignment, optional values are `center` `right` | _string_ | `''` |
| extraEventParams `v1.10.12` | Enable event enhanced mode, will provide additional `cursor` and `keyCode` parameters in input and change events, planned to be the default behavior in the next major version | _boolean_ | `false` |
| fixed | If the type is `textarea` and in a `position: fixed` area, you need to explicitly specify the attribute fixed as true | _boolean_ | `false` |
| focus   `@deprecated Mini program not supported` | Get focus | _boolean_ | `false` |
| holdKeyboard | Do not hide the keyboard when clicking the page while focused | _boolean_ | `false` |
| inputAlign | Input text alignment, optional values are `center` `right` | _string_ | - |
| isLink | Whether to display the right arrow and enable click feedback | _boolean_ | `false` |
| label | Text on the left side of the input box | _string_ | - |
| leftIcon | Left icon svg value or image link, optional values see [Icon component](/material/smartui?comId=icon) | _string_ | - |
| maxlength | Maximum input length, setting it to -1 will not limit the maximum length | _number_ | `-1` |
| name | Identifier when submitting in the form. Can expand the clickable area by configuring `name` | _string_ | - |
| password | Whether it is a password type | _boolean_ | `false` |
| placeholder | Placeholder text when the input box is empty | _string_ | - |
| placeholderStyle | Specify the style of the placeholder | _React.CSSProperties_ | - |
| readonly | Whether it is read-only | _boolean_ | `false` |
| required | Whether to show the required asterisk of the form | _boolean_ | `false` |
| rightIcon | Right icon svg value or image link, optional values see [Icon component](/material/smartui?comId=icon) | _string_ | - |
| selectionEnd | Cursor end position, valid when auto-focused, need to use with selection-start | _number_ | `-1` |
| selectionStart | Cursor start position, valid when auto-focused, need to use with selection-end | _number_ | `-1` |
| showConfirmBar | Whether to display the "Done" button above the keyboard, valid only for textarea | _boolean_ | `true` |
| showWordLimit | Whether to display the word count statistics, need to set the `maxlength` attribute | _boolean_ | `false` |
| size | Cell size, optional value is `large` | _string_ | - |
| titleWidth | Title width | _string_ | `6.2em` |
| type | Can be set to any native type, such as `number` `idcard` `textarea` `digit` `nickname` | _string_ | `text` |
| value | Current input value | _string \| number_ | - |
| interError `v2.1.0` | Whether the error message is inside the input box | _boolean_ | - |
| subLabel `v2.1.0` | Subtitle | _string_ | - |
| cardMode `v2.1.0` | Card mode | _boolean_ | - |
| hiddenLabel `v2.1.0` | Hide the content related to the left label | _boolean_ | - |

### Events

| Event                         | Description                                              | Callback Parameters                                                                                              |
| ----------------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| onBlur | Triggered when the input box loses focus | event.detail.value: Current input value; <br>event.detail.cursor: Cursor position (if `type` is not `textarea`, value is `0`) |
| onChange | Triggered when input content changes | event.detail: Current input value; When extra-event-params is `true`, it is [InputDetail](#InputDetail) |
| onClear | Triggered when the clear control is clicked | - |
| onClickIcon | Triggered when the trailing icon is clicked | - |
| onClickInput | Triggered when the input area is clicked | - |
| onConfirm | Triggered when the done button is clicked | event.detail: Current input value |
| onFocus | Triggered when the input box gets focus | event.detail.value: Current input value; <br>event.detail.height: Keyboard height |
| onInput | Triggered when input content changes | event.detail: Current input value; When extra-event-params is `true`, it is [InputDetail](#InputDetail) |
| onKeyboardheightchange | Triggered when the keyboard height changes | event.detail = { height: height, duration: duration } |
| onLinechange | Triggered when textarea rows change, only valid for textarea | event.detail = { height: 0, heightRpx: 0, lineCount: 0 } |
| onNicknamereview `v1.11.5` | Triggered when the user nickname review is completed, only valid when type is "nickname" | event.detail = { pass, timeout } |

### InputDetail

| Parameter  | Description                                                                                                                                                                           | Type       | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ------ |
| callback | Call this function with `{ value: string, cursor: number }` to replace the content of the input box, for specific usage refer to [wx-input](https://developers.weixin.qq.com/miniprogram/dev/component/input.html) | _function_ | - |
| cursor | Cursor position | _number_ | - |
| keyCode | Key value | _number_ | - |
| value | Current input value | _string_ | - |

### Slot

| Name       | Description                                                   |
| ---------- | -------------------------------------------------------------- |
| button | Custom input box trailing button |
| input | Custom input box, using this slot will invalidate related attributes and events of the input box |
| label | Custom input box label, if `label` attribute is set, will not effective |
| leftIcon | Custom input box head icon |
| rightIcon | Custom input box trailing icon |

### External Style Class

| Class Name                | Description      |
| ------------------------- | ---------------- |
| customClass `v1.10.21` | Root node style class |
| inputClass | Input box style class |
| labelClass | Left text style class |
| rightIconClass | Right icon style class |

### Style Variables

The component provides the following CSS variables for custom styles. For usage, please refer to the [ConfigProvider component](/material/smartui?comId=config-provider).

| Name                          | Default                                   | Description                 |
| ----------------------------- | ----------------------------------------- | --------------------------- |
| --field-label-color           | _var(--app-B6-N1, rgba(0, 0, 0, 1))_      | label color                 |
| --field-input-text-color      | _var(--app-B6-N1, rgba(0, 0, 0, 1))_    | input text color            |
| --field-input-text-font-size `v2.1.0`  | _16px_   | input text font size    |
| --field-input-error-text-color| _var(--app-M2, #f04c4c)_                  | error text color            |
| --field-placeholder-text-color| _var(--app-B6-N4, rgba(0, 0, 0, 0.4))_    | placeholder text color      |
| --field-icon-size             | _16px_                                    | icon font size              |
| --field-clear-icon-size       | _16px_                                    | clear icon font size        |
| --field-clear-icon-color      | _var(--app-B4-N4, rgba(0, 0, 0, 0.4))_    | clear icon color            |
| --field-icon-container-color  | _#969799_                                 | right icon box font color   |
| --field-error-message-color  | _var(--app-M2, #f04c4c)_   | Error prompt text color    |
| --field-error-message-text-font-size  | _14px_   | Prompt text font size    |
| --field-text-area-min-height  | _130px_   | Minimum height of textarea    |
| --field-word-limit-color  | _var(--app-B6-N4, rgba(0, 0, 0, 0.4))_   | Enter length limit text color    |
| --field-disabled-opacity `v2.1.0`  | _0.7_   | Disable transparency    |
| --field-label-font-size `v2.1.0`  | _16px_   | Label font size    |
| --field-label-line-height `v2.1.0`  | _18px_   | Label title font height    |
| --field-sub-label-font-size `v2.1.0`  | _14px_   | Subtitle font size    |
| --field-sub-label-line-height `v2.1.0`  | _16px_   | Subtitle font height    |
| --field-error-message-text-line-height `v2.1.0`  | _16px_   | Error message font height    |
| --field-subtitle-text-color `v2.1.0`  | _var(--app-B6-N3, rgba(0, 0, 0, 0.5))_   | Subtitle Color    |
| --field-left-icon-margin-right `v2.1.0`  | _10px_   | Right margin of icon    |
| --field-left-body-padding-right `v2.1.0`  | _16px_   | Right padding of the left section    |

#### card mode CSS variable
| Name                          | Default                                 | Description |
| ----------------------------- | -------------------------------------- | ---- |
| --field-card-border-radius `v2.1.0`   | _8px_   | Card border rounded corners    |
| --field-card-background `v2.1.0`   | _var(--app-B6-N7, rgba(0, 0, 0, 0.1))_   | Card input with background scenery input    |
| --field-card-width `v2.1.0`   | _105px_   | Card input width    |
| --field-card-height `v2.1.0`   | _38px_   | Card input height    |
| --field-card-padding `v2.1.0`   | _0 10px_   | Internal padding of card input box    |

#### textarea CSS variable
| Name                          | Default                                 | Description |
| ----------------------------- | -------------------------------------- | ---- |
| --field-word-limit-font-size  | _10px_   | Enter length limit for text font size    |
| --field-word-limit-line-height  | _14px_   | Enter length limit for text font height    |
| --field-word-num-full-color  | _var(--app-M2, #f04c4c)_   | The input length exceeds the limit for text color    |
| --field-textarea-background `v2.1.0`   | _var(--app-B3, #ffffff)_   | Background color of input box    |
| --field-textarea-border-radius `v2.1.0`   | _8px_   | Rounded corners of input box    |
| --field-textarea-padding `v2.1.0`   | _12px 8px_   | Enter inner margin    |
| --field-textarea-limit-padding-bottom `v2.1.0`   | _20px_   | The bottom of the input box displays the margin when limiting the number of strings    |