---
category: 布局
assets: TyTabs
---

# Tab 标签页

### 介绍

选项卡组件，用于在不同的内容区域之间进行切换。

### 引入

```jsx
import { Tabs, Tab } from '@ray-js/smart-ui';
```

## 代码演示

### 基础用法

通过`active`设定当前激活标签对应的索引值，默认情况下启用第一个标签。

```jsx
import { showToast } from '@ray-js/ray';
import React, { useState } from 'react';
import { Tabs, Tab } from '@ray-js/smart-ui';

export default function Demo() {
  const [active, setActive] = useState(1);
  const onChange = e => {
    showToast({
      icon: 'none',
      title: `切换到 ${e.detail.title}`,
    });
  };

  return (
    <Tabs active={active} onChange={onChange}>
      <Tab title="标签 1">内容 1</Tab>
      <Tab title="标签 2">内容 2</Tab>
      <Tab title="标签 3">内容 3</Tab>
      <Tab title="标签 4">内容 4</Tab>
    </Tabs>
  );
}
```

### 通过名称匹配

在标签指定`name`属性的情况下，`active`的值为当前标签的`name`（此时无法通过索引值来匹配标签）。

```jsx
import { showToast } from '@ray-js/ray';
import React, { useState } from 'react';
import { Tabs, Tab } from '@ray-js/smart-ui';

export default function Demo() {
  const [active, setActive] = useState('a');
  const onChange = e => {
    showToast({
      icon: 'none',
      title: `切换到 ${e.detail.title}`,
    });
  };

  return (
    <Tabs active={active} onChange={onChange}>
      <Tab title="标签 1" name="a">
        内容 1
      </Tab>
      <Tab title="标签 2" name="b">
        内容 2
      </Tab>
      <Tab title="标签 3" name="c">
        内容 3
      </Tab>
    </Tabs>
  );
}
```


### 样式风格

`Tab`支持两种样式风格：`line`和`card`，默认为`line`样式，可以通过`type`属性修改样式风格。

```jsx
import React from 'react';
import { Tabs, Tab } from '@ray-js/smart-ui';

export default function Demo() {
  return (
    <Tabs type="card">
      <Tab title="标签 1">内容 1</Tab>
      <Tab title="标签 2">内容 2</Tab>
      <Tab title="标签 3">内容 3</Tab>
    </Tabs>
  );
}
```

### 横向滚动

多于 5 个标签时，Tab 可以横向滚动。

```jsx
import React, { useState } from 'react';
import { Tabs, Tab } from '@ray-js/smart-ui';

export default function Demo() {
  const [active, setActive] = useState('a');

  return (
    <Tabs active={active}>
      <Tab title="标签 1">内容 1</Tab>
      <Tab title="标签 2">内容 2</Tab>
      <Tab title="标签 3">内容 3</Tab>
      <Tab title="标签 4">内容 4</Tab>
      <Tab title="标签 5">内容 5</Tab>
      <Tab title="标签 6">内容 6</Tab>
    </Tabs>
  );
}
```

### 禁用标签

设置`disabled`属性即可禁用标签。如果需要监听禁用标签的点击事件，可以在`Tabs`上监听`disabled`事件。

```jsx
import React from 'react';
import { Tabs, Tab } from '@ray-js/smart-ui';
import { showToast } from '@ray-js/ray';

export default function Demo() {
  const onClickDisabled = e => {
    showToast({
      icon: 'none',
      title: `${e.detail.title} 已被禁用`,
    });
  };

  return (
    <Tabs onDisabled={onClickDisabled}>
      <Tab title="标签 1">内容 1</Tab>
      <Tab title="标签 2" disabled>
        内容 2
      </Tab>
      <Tab title="标签 3">内容 3</Tab>
    </Tabs>
  );
}
```

### 点击事件

可以在`Tabs`上绑定`click`事件，在回调参数的`event.detail`中可以取得被点击标签的标题和标识符。

```jsx
import React from 'react';
import { Tabs, Tab } from '@ray-js/smart-ui';
import { showToast } from '@ray-js/ray';

export default function Demo() {
  const onClick = e => {
    showToast({
      title: `点击 ${e.detail.title}`,
      icon: 'none',
    });
  };

  return (
    <Tabs onClick={onClick}>
      <Tab title="标签 1">内容 1</Tab>
      <Tab title="标签 2">内容 2</Tab>
    </Tabs>
  );
}
```

### 粘性布局

通过`sticky`属性可以开启粘性布局，粘性布局下，当 Tab 滚动到顶部时会自动吸顶。

```jsx
import React from 'react';
import { Tabs, Tab } from '@ray-js/smart-ui';

export default function Demo() {
  return (
    <Tabs sticky zIndex={3}>
      <Tab title="标签 1">内容 1</Tab>
      <Tab title="标签 2">内容 2</Tab>
      <Tab title="标签 3">内容 3</Tab>
      <Tab title="标签 4">内容 4</Tab>
    </Tabs>
  );
}
```

### 切换动画

可以通过`animated`来设置是否启用切换 tab 时的动画。

```jsx
import React from 'react';
import { Tabs, Tab } from '@ray-js/smart-ui';

export default function Demo() {
  return (
    <Tabs animated>
      <Tab title="标签 1">内容 1</Tab>
      <Tab title="标签 2">内容 2</Tab>
      <Tab title="标签 3">内容 3</Tab>
      <Tab title="标签 4">内容 4</Tab>
    </Tabs>
  );
}
```

### 滑动切换

通过`swipeable`属性可以开启滑动切换标签页。

```jsx
import React from 'react';
import { Tabs, Tab } from '@ray-js/smart-ui';

export default function Demo() {
  return (
    <Tabs swipeable>
      <Tab title="标签 1">内容 1</Tab>
      <Tab title="标签 2">内容 2</Tab>
      <Tab title="标签 3">内容 3</Tab>
      <Tab title="标签 4">内容 4</Tab>
    </Tabs>
  );
}
```

### 嵌套 Popup

如果将 Tabs 嵌套在 smart-popup 等会隐藏内容的组件或节点内，当 Tabs 显示时下划线将不会正常显示。

此时可以通过使用 `show` 手动控制 Tabs 的渲染来规避这种场景。

```jsx
import React from 'react';
import { Tabs, Tab, Popup, Button } from '@ray-js/smart-ui';

export default function Demo() {
  const [show, setShow] = React.useState(false)
  const [showComp, setShowComp] = React.useState(false)
  return (
    <>
      <Button onClick={() => setShow(!show)}>
        切换展示
      </Button>
      <Popup 
        show={show} 
        position="bottom"
        onClickOverlay={() => setShow(false)}
        onBeforeEnter={() => setShowComp(true)}
        onAfterLeave={() => setShowComp(false)}
      >
        {showComp ? (
          <Tabs  active={1}>
            <Tab title="标签 1">内容 1</Tab>
            <Tab title="标签 2">内容 2</Tab>
            <Tab title="标签 3">内容 3</Tab>
            <Tab title="标签 4">内容 4</Tab>
          </Tabs>
        ) : null}
      </Popup>
    </>
  );
}
```

### 异步切换

通过 `beforeChange` 事件可以在切换标签前执行特定的逻辑，实现切换前校验、异步切换的目的

```jsx
import React, { useState } from 'react';
import { Tabs, Tab } from '@ray-js/smart-ui';
import { showToast, showModal } from '@ray-js/ray';

export default function Demo() {
  const [active, setActive] = useState(1);
  const onChange = e => {
    showToast({
      icon: 'none',
      title: `切换到 ${e.detail.title}`,
    });
  };
  const onBeforeChange = e => {
    const { callback, title } = e.detail;

    showModal({
      title: '异步切换',
      content: `确定要切换至 ${title} tab吗？`,
      success: res => {
        if (res.confirm) {
          callback(true);
        } else if (res.cancel) {
          callback(false);
        }
      },
    });
  };

  return (
    <Tabs active={active} swipeable useBeforeChange onChange={onChange} onBeforeChange={onBeforeChange}>
      <Tab title="标签 1">内容 1</Tab>
      <Tab title="标签 2">内容 2</Tab>
      <Tab title="标签 3">内容 3</Tab>
      <Tab title="标签 4">内容 4</Tab>
    </Tabs>
  );
}
```

### 副标题

通过 `subtitle` 可以设置二级标题

```tsx
import React, { useState } from 'react';
import { Tabs, Tab } from '@ray-js/smart-ui';
import { showToast, showModal } from '@ray-js/ray';

export default function Demo() {
  const tabs7 = [
    { name: '周一', content: '12' },
    { name: '周二', content: '13' },
    { name: '周三', content: '14' },
    { name: '周四', content: '15' },
    { name: '周五', content: '16' },
    { name: '周六', content: '17' },
    { name: '周日', content: '18' },
  ];


  const onChange = e => {
    showToast({
      icon: 'none',
      title: `切换到 ${e.detail.title}`,
    });
  };

  return (
    <Tabs
      active={1}
      swipeable
      onChange={onChange}
      swipeThreshold={7}
    >
      {tabs7.map(item => {
        return (
          <Tab
            title={item.name}
            subtitle={item.content}
            key={item.name}
          />
        );
      })}
    </Tabs>
  );
}
```

## API

### Tabs Props

| 参数                         | 说明                                                           | 类型               | 默认值    |
| ---------------------------- | -------------------------------------------------------------- | ------------------ | --------- |
| active | 当前选中标签的标识符 | _string_ | `0` |
| animated | 是否开启切换标签内容时的转场动画 | _boolean_ | `false` |
| border | 是否展示外边框，仅在 `line` 风格下生效 | _boolean_ | `false` |
| color | 标签主题色，仅在非`card`模式可用 | _string_ | `#ee0a24` |
| duration | 动画时间，单位秒 | _number_ | `0.3` |
| ellipsis | 是否省略过长的标题文字 | _boolean_ | `true` |
| lazyRender | 是否开启标签页内容延迟渲染(不销毁组件) | _boolean_ | `true` |
| inactiveDestroy `v2.1.0` | 标签未被选择时是否销毁tab插槽内容 | _boolean_ | `false` |
| lineHeight | 底部条高度，默认单位`px` | _string \| number_ | `3px` |
| lineWidth | 底部条宽度，默认单位`px` | _string \| number_ | `40px` |
| offsetTop | 粘性定位布局下与顶部的最小距离，单位`px` | _number_ | - |
| sticky | 是否使用粘性定位布局 | _boolean_ | `false` |
| swipeThreshold | 滚动阈值，标签数量超过阈值且总宽度超过标签栏宽度时开始横向滚动 | _number_ | `5` |
| swipeable | 是否开启手势滑动切换 | _boolean_ | `false` |
| titleActiveColor | 标题选中态颜色 | _string_ | - |
| titleInactiveColor | 标题默认态颜色 | _string_ | - |
| type | 样式风格，可选值为`card` | _string_ | `line` |
| useBeforeChange `v1.10.10` | 是否开启切换前校验 | _boolean_ | `false` |
| zIndex | z-index 层级 | _number_ | `1` |

### Tab Props

| 参数        | 说明                       | 类型               | 默认值       |
| ----------- | -------------------------- | ------------------ | ------------ |
| disabled | 是否禁用标签 | _boolean_ | `false` |
| dot | 是否显示小红点 | _boolean_ | - |
| info | 图标右上角提示信息 | _string \| number_ | - |
| name | 标签名称，作为匹配的标识符 | _string_ | - |
| title | 标题 | _string_ | - |
| titleStyle | 自定义标题样式 | _React.CSSProperties_ | - |
| subtitle `v2.3.5` | 二级标题 | _string_ | - |
| subtitleStyle `v2.3.5` | 自定义二级标题样式 | _string_ | - |

### Tabs Slot

| 名称      | 说明         |
| --------- | ------------ |
| navLeft | 标题左侧内容 |
| navRight | 标题右侧内容 |

### Tab Slot

| 名称 | 说明       |
| ---- | ---------- |
| -    | 标签页内容 |

### Tabs Event

| 事件名    | 说明    | 参数         |
| ----- | -------------- | --------- |
| onBeforeChange `v1.10.10` | tab 切换前会触发，在回调函数中返回 `false` 可终止 tab 切换，绑定事件的同时需要将`use-before-change`属性设置为`true` | `event.detail.name`: 当前切换的 tab 标识符， `event.detail.title`: 当前切换的 tab 标题， `event.detail.index`: 当前切换的 tab 下标，`event.detail.callback`: 回调函数，调用`callback(false)`终止 tab 切换 |
| onChange | 当前激活的标签改变时触发 | name：标签标识符，title：标题 |
| onClick | 点击标签时触发 | name：标签标识符，title：标题 |
| onDisabled | 点击被禁用的标签时触发 | name：标签标识符，title：标题 |
| onScroll | 滚动时触发 | { scrollTop: 距离顶部位置, isFixed: 是否吸顶 } |

### 外部样式类

| 类名             | 说明               |
| ---------------- | ------------------ |
| customClass | 根节点样式类 |
| navClass | 标签栏样式类 |
| tabActiveClass | 标签激活态样式类 |
| tabClass | 标签样式类 |
| wrapClass | 标签栏根节点样式类 |


### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/material/smartui?comId=config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| --tabs-background-color | _var(--app-B3, #fff)_ | 背景色    |
| --tabs-default-color | _var(--app-M4)_ | 默认文字颜色    |
| --tabs-line-height | _32px_ | 默认文字字高    |
| --tabs-sub-line-height `2.3.5` | _64px_ | 默认二级文字字高    |
| --tabs-bottom-bar-height  | _3px_ | 底部滑块高度    |
| --tabs-bottom-bar-color | _var(--tabs-default-color)_ | 底部滑块背景色    |
| --tabs-card-text-color | _var(--app-B6-N3)_ | card模式文字颜色    |
| --tabs-card-text-active-color | _var(--app-B6-N1)_ | card模式选中的文字颜色    |
| --tabs-card-height | _32px_ | card模式滑块高度    |
| --tabs-card-border-radius | _8px_ | card模式radius    |
| --tabs-card-active-border-radius `v2.0.0` | _6px_ | card模式滑块radius    |
| --tabs-card-active-background-color | _var(--app-B3, #fff)_ | card模式滑块背景色  |
| --tabs-card-active-top `v2.0.0`  | _0_    | card模式滑块top定位    |
| --tabs-card-active-left `v2.0.0`  | _0_    | card模式滑块left定位    |
| --tabs-card-padding `v2.0.0`  | _2px_    | card模式padding   |
| --tab-panel-background-color `v2.0.0`  | _var(--app-B3)_    | panel背景色   |
| --tab-panel-text-color `v2.0.0`  | _var(--app-B3-N1)_    | panel文字颜色   |
| --tabs-card-background-color `v2.1.0`  | _var(--app-B6-N9, rgba(0, 0, 0, 0.05))_    | 卡片模式背景颜色   |

### 方法

通过 selectComponent 可以获取到 Tabs 实例并调用实例方法。

| 方法名 | 参数 | 返回值 | 介绍                                                       |
| ------ | ---- | ------ | ---------------------------------------------------------- |
| resize | - | - | 外层元素大小或组件显示状态变化时，可以调用此方法来触发重绘 |

## 常见问题

### 组件从隐藏状态切换到显示状态时，底部条位置错误？

Tabs 组件在挂载时，会获取自身的宽度，并计算出底部条的位置。如果组件一开始处于隐藏状态，则获取到的宽度永远为 0，因此无法展示底部条位置。

#### 解决方法

方法一，使用 show 来控制组件展示，使组件重新初始化。

```jsx
<View>{show ? <Tabs /> : null}</view>
```

方法二，调用组件的 resize 方法来主动触发重绘。

```jsx
const pages = getCurrentPages();
const curPage = pages[pages.length - 1];
curPage.selectComponent('#tabs').resize();

<Tabs id="tabs" />;
```