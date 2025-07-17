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

| 参数          | 说明                                             | 类型              | 默认值       |
| ------------- | ------------------------------------------------ | ----------------- | ------------ |
| active        | 当前步骤                                         | _number_          | 0            |
| activeColor   | 激活状态颜色                                     | _string_          | `#07c160`    |
| activeIcon    | 激活状态底部图标，可选值见 [Icon 组件](#/icon)   | _string_          | `checked`    |
| direction     | 显示方向，可选值为 `horizontal` `vertical`       | _string_          | `horizontal` |
| inactiveColor | 未激活状态颜色                                   | _string_          | `#969799`    |
| inactiveIcon  | 未激活状态底部图标，可选值见 [Icon 组件](#/icon) | _string_          | -            |
| steps         | 步骤配置集合，见下面配置项                       | _Step 配置项数组_ | `[]`         |

### Events

| 事件名称    | 说明                 | 回调参数                    |
| ----------- | -------------------- | --------------------------- |
| onClickStep | 点击步骤时触发的事件 | event.detail:当前步骤的索引 |

### 外部样式类

| 类名        | 说明           |
| ----------- | -------------- |
| customClass | 根节点样式类   |
| descClass   | 描述信息样式类 |

### Step 配置项

| 键名         | 说明                                                     | 类型     |
| ------------ | -------------------------------------------------------- | -------- |
| activeIcon   | 当前步骤激活状态底部图标                                 | _string_ |
| desc         | 当前步骤描述信息                                         | _string_ |
| inactiveIcon | 当前步骤未激活状态底部图标，可选值见 [Icon 组件](#/icon) | _string_ |
| text         | 当前步骤名称                                             | _string_ |
