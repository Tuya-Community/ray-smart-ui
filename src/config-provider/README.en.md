---
category: Universal
---

# ConfigProvider

### Introduction

Global Configuration

### Introduce

```jsx
import { ConfigProvider } from '@ray-js/smart-ui';
```

## Code demonstration

### Basic Usage

```jsx
import { ConfigProvider, Button } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <ConfigProvider
      themeVars={{
        buttonPrimaryBorderColor: '#FFF',
      }}
    >
      <Button type="primary">Main Button</Button>
    </ConfigProvider>
  );
}
```

## API

### ConfigProvider

| Parameter | Description | Type | Default |
| --------- | -------------- | ------ | ------ |
| themeVars | Custom Theme Variables | object |        |
