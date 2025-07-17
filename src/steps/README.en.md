<!-- ---
category: Display
--- -->

# Steps

### Introduction

It is used to show all aspects of the operation process, so that users can understand the position of the current operation in the overall process.

### Introduce

```jsx
import { Steps } from '@ray-js/smart-ui';
```

## 代码演示

### 基础用法

```jsx
import { Steps } from '@ray-js/smart-ui';

export default function Demo() {
  const steps = [
    {
      text: '步骤一',
      desc: '描述信息',
    },
    {
      text: '步骤二',
      desc: '描述信息',
    },
    {
      text: '步骤三',
      desc: '描述信息',
    },
    {
      text: '步骤四',
      desc: '描述信息',
    },
  ];

  return <Steps steps={steps} active={2} />;
}
```

### 自定义样式

可以通过 `activeIcon` 和 `activeColor` 属性设置激活状态下的图标和颜色。

```jsx
import CheckmarkIcon from '@tuya-miniapp/icons/dist/svg/Checkmark';
import RightIcon from '@tuya-miniapp/icons/dist/svg/Right';

<Steps
  steps={steps}
  active={active}
  activeIcon={CheckmarkIcon}
  activeColor="#38f"
  inactiveIcon={RightIcon}
/>;
```

### 自定义图标

可以通过 `inactiveIcon` 和 `activeIcon` 属性分别设置每一项的图标。

```jsx
import CheckmarkIcon from '@tuya-miniapp/icons/dist/svg/Checkmark';
import RightIcon from '@tuya-miniapp/icons/dist/svg/Right';

const steps = [
  {
    text: '步骤一',
    desc: '描述信息',
    inactiveIcon: Right,
    activeIcon: Checkmark2
  },
  {
    text: '步骤二',
    desc: '描述信息',
    inactiveIcon: Right,
    activeIcon: Checkmark2
  },
]

<Steps steps={steps} active={active} />
```

### 竖向步骤条

可以通过设置`direction`属性来改变步骤条的显示方式。

```jsx
<Steps steps={steps} active={active} direction="vertical" activeColor="#ee0a24" />
```

## API

### Steps Props

| Parameter      | Description                                        | Type                | Default       |
| -------------- | -------------------------------------------------- | ------------------- | ------------- |
| active | Current step | _number_ | 0 |
| activeColor | Active state color | _string_ | `#07c160` |
| activeIcon | Icon at the bottom in the active state | _string_ | `checked` |
| direction | Display direction; options are `horizontal` `vertical` | _string_ | `horizontal` |
| inactiveColor | Color in the inactive state | _string_ | `#969799` |
| inactiveIcon | Icon at the bottom in the inactive state | _string_ | - |
| steps | Collection of step configurations | _Array of Step Configs_ | `[]` |

### Events

| Event Name     | Description                | Callback Parameters         |
| -------------- | -------------------------- | --------------------------- |
| onClickStep | Event triggered when a step is clicked | event.detail: Index of the current step |

### External Style Classes

| Class Name     | Description               |
| -------------- | ------------------------- |
| customClass | Root node style class |
| descClass | Style class for description info |

### Step Config

| Key           | Description                                         | Type     |
| ------------- | --------------------------------------------------- | -------- |
| activeIcon | Icon at the bottom in the active state | _string_ |
| desc | Description info for the current step | _string_ |
| inactiveIcon | Icon at the bottom in the inactive state | _string_ |
| text | Name of the current step | _string_ |

### Style Variables

The component provides the following CSS variables that can be used for custom styles. For usage, refer to the [ConfigProvider Component](/material/smartui?comId=config-provider).

| Name                          | Default Value                             | Description |
| ----------------------------- | ----------------------------------------- | ----------- |
| --steps-background-color | _var(--app-B3, #ffffff)_ | - |