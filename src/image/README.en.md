---
category: Display
---

# Image

### Introduction

Image

### Introduction

```jsx
import { Image } from '@ray-js/smart-ui';
```

## Code demonstration

### Basic Usage

```jsx
import { Image } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <Image width="100px" height="100px" src="https://images.tuyacn.com/rms-static/f350c8a0-0eb2-11ef-8f06-49ae7b2fadcf-1715334722090.jpeg?tyName=cat.jpeg" />
  );
}
```

## API

### Image

| Parameter           | Description                                                                        | Type    | Default |
| ------------------- | ---------------------------------------------------------------------------------- | ------- | ------- |
| alt                 | Alternative text                                                                   | string  | -       |
| fit                 | Image Fill Mode                                                                    | string  | fill    |
| height              | Height, default unit is px                                                         | string  | number  | - |
| lazyLoad            | Lazy Loadloading?                                                                  | boolean | false   |
| radius              | Corner radius, default unit is px                                                  | string  | number  | 0 |
| round               | Display as a circle?                                                               | boolean | false   |
| showError           | Display image load failure prompt                                                  | boolean | true    |
| showLoading         | Whether to display the picture loading prompt                                      | boolean | true    |
| showMenuByLongpress | Whether to open a long -press picture to display the identification mini code menu | boolean | false   |
| src                 | Picture link                                                                       | string  | -       |
| useErrorSlot        | Whether to use error slot                                                          | boolean | false   |
| useLoadingSlot      | Whether to use loading slot                                                        | boolean | false   |
| width               | Width, with the default unit as px                                                 | string  | number  | - |
