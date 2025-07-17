---
category: Display
---

# Image

### Introduction

Image

### Import

```jsx
import { Image } from '@ray-js/smart-ui';
```

## Code Demonstration

### Basic Usage
The basic usage is consistent with the native [image](https://developers.weixin.qq.com/miniprogram/dev/component/image.html) tag, where you can set native attributes like `src`, `width`, `height`, etc.
```jsx
import { Image } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <Image width="100px" height="100px" src="https://images.tuyacn.com/rms-static/f350c8a0-0eb2-11ef-8f06-49ae7b2fadcf-1715334722090.jpeg?tyName=cat.jpeg" />
  );
}
```

### Fill Mode

The `fit` attribute allows setting the image fill mode, with selectable values listed in the table below.

```jsx
import { Image } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <Image 
      width="100px" 
      height="100px"
      fit="contain"
      src="https://images.tuyacn.com/rms-static/f350c8a0-0eb2-11ef-8f06-49ae7b2fadcf-1715334722090.jpeg?tyName=cat.jpeg" />
  );
}
```

### Round Picture

The `round` attribute can set the picture to become round. Note that when the picture's width and height are not equal and `fit` is set to `contain` or `scale-down`, a complete circle cannot be filled.
```jsx
import { Image } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <Image 
      width="100px" 
      height="100px"
      round
      src="https://images.tuyacn.com/rms-static/f350c8a0-0eb2-11ef-8f06-49ae7b2fadcf-1715334722090.jpeg?tyName=cat.jpeg" />
  );
}
```

### Image Lazy Loading

Images are lazy-loaded and only start loading when about to enter a certain range (three screens above and below).

```jsx
import { Image } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <Image 
      width="100px" 
      height="100px"
      lazyLoad
      src="https://images.tuyacn.com/rms-static/f350c8a0-0eb2-11ef-8f06-49ae7b2fadcf-1715334722090.jpeg?tyName=cat.jpeg" />
  );
}
```

### Loading Indicator

The `Image` component provides a default loading indicator, supporting customized content through the `loading` slot.

```jsx
import { Image, Loading } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <Image 
      width="100px"
      height="100px"
      useLoadingSlot 
      slot={{
        loading: <Loading type="spinner" size="20" vertical />
      }} 
    />
  );
}
```

### Loading Failure Indicator

The `Image` component offers a default loading failure indicator, supporting customized content through the `error` slot.

```jsx
import { Image } from '@ray-js/smart-ui';
import { Text } from '@ray-js/ray'
import React from 'react';

export default function Demo() {
  return (
    <Image 
      width="100px"
      height="100px"
      useErrorSlot
      src="error-test"
      slot={{
        error: <Text>Loading Failed</Text>
      }} 
    />
  );
}
```

### Change Image Color `v2.3.3`

The `tintColor` property allows direct modification of the image color, similar to the RN's tintColor property. It is implemented via a CSS mask, so be sure to conduct user compatibility checks before using it.

```jsx
import { Image } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <Image 
      src="https://static1.tuyacn.com/static/tuya-miniapp-doc/_next/static/images/logo-small.png" 
      width="100px" 
      height="100px"
      tintColor="rgba(255, 255, 25, 0.8)"
    />
  );
}
```

## API

### Props

| Parameter              | Description                             | Type               | Default  |
| ---------------------- | --------------------------------------- | ------------------ | ------- |
| alt | Alternative text | _string_ | - |
| fit | Image fill mode | _string_ | _fill_ |
| height | Height, default unit is `px` | _string \| number_ | - |
| lazyLoad | Whether to lazy load | _boolean_ | `false` |
| radius | Corner size, default unit is `px` | _string \| number_ | `0` |
| round | Whether to display as circular | _boolean_ | `false` |
| showError | Whether to show image load failure prompt | _boolean_ | `true` |
| showLoading | Whether to show image loading prompt | _boolean_ | `true` |
| showMenuByLongpress | Whether to enable long press image to display recognition mini-program code menu | _boolean_ | `false` |
| src | Image link | _string_ | - |
| useErrorSlot | Whether to use error slot | _boolean_ | `false` |
| useLoadingSlot | Whether to use loading slot | _boolean_ | `false` |
| webp `v1.10.11` | Whether to decode webp format | _boolean_ | `false` |
| width | Width, default unit is `px` | _string \| number_ | - |
| tintColor `v2.3.3` | Modify the image color, similar to RN's tintColor, using CSS mask implementation | _string_ | - |


### Image Fill Modes

| Name      | Meaning                                                |
| --------- | ------------------------------------------------------ |
| contain | Scale the image while maintaining aspect ratio, so the long side fully displays |
| cover | Scale the image while maintaining aspect ratio, so the short side fully displays, cropping the long side |
| fill | Stretch the image to fill the element |
| heightFix | Adjust width automatically with fixed height, maintaining original aspect ratio |
| none | Retain original image size |
| widthFix | Adjust height automatically with fixed width, maintaining original aspect ratio |

### Events

| Event Name | Description            | Callback Parameters |
| ---------- | ---------------------- | ------------------ |
| onClick | Triggered on image click | event: Event |
| onError | Triggered on image load failure | event: Event |
| onLoad | Triggered when image load is complete | event: Event |

### Slots

| Name    | Description                         |
| ------- | ----------------------------------- |
| error | Custom prompt for load failure |
| loading | Custom prompt during loading |

### External Style Classes

| Class Name       | Description       |
| ---------------- | ----------------- |
| customClass | Root node style |
| errorClass | Error style |
| imageClass | Image style |
| loadingClass | Loading style |

### Style Variables

The component provides the following CSS variables for custom styling. For usage, refer to the [ConfigProvider component](/material/smartui?comId=config-provider).

| Name                               | Default Value                        | Description     |
| ---------------------------------- | ------------------------------------ | --------------- |
| --image-placeholder-text-color    | _#969799_                            | Loading description text |
| --image-placeholder-font-size     | _14px_                               | Loading text font size |
| --image-placeholder-background-color | _#f7f8fa_                          | Loading overlay background color |
| --image-loading-icon-size         | _32px_                               | Loading icon size |
| --image-loading-icon-color        | _#dcdee0_                            | Loading icon color |
| --image-error-size `v2.0.0`                | _32px_                               | Default image on load error |