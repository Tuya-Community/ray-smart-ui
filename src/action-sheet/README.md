---
category: 反馈
---

# ActionSheet 动作面板

### 介绍

底部弹起的模态面板，包含与当前情境相关的多个选项。

### 引入

```jsx
import { ActionSheet } from '@ray-js/smart-ui';
```

## 代码演示

### 基础用法

需要传入一个`actions`的数组，数组的每一项是一个对象，对象属性见文档下方表格。

```jsx
import React from 'react';
import { ActionSheet, Button } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  const [show, setShow] = React.useState(false);
  const [actions, setActions] = React.useState([
    { id: 0, name: 'Action', checked: true },
    { id: 1, name: 'Action', checked: false },
    { id: 2, name: 'Action', checked: false },
  ]);

  const onCancel = () => setShow(false);
  const onClose = () => console.log('close');
  const onSelect = evt => {
    const { id } = evt.detail;
    const newActions = actions.map(item => {
      if (item.id === id) return { ...item, checked: true };
      return { ...item, checked: false };
    });
    setActions(newActions);
  };

  return (
    <View>
      <ActionSheet 
        show={show} 
        title="Title"
        cancelText="取消"
        actions={actions} 
        onClose={onClose} 
        onSelect={onSelect} 
        onCancel={onCancel}
      />
      <Button onClick={() => setShow(true)}>点击展示</Button>
    </View>
  );
}
```

### 无选中列表

设置`actions[idx].checked`属性为`false`后，可以展示无选中状态的列表。

```jsx
import React from 'react';
import { ActionSheet, Button } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  const actions = [{ name: 'Action' }, { name: 'Action' }, { name: 'Action' }];
  const [show, setShow] = React.useState(false);

  return (
    <View>
      <ActionSheet 
        show={show} 
        actions={actions} 
        title="Title"
        cancelText="取消"
        onCancel={() => setShow(false)}
      />
      <Button onClick={() => setShow(true)}>点击展示</Button>
    </View>
  );
}
```


### 选项状态

选项可以设置为加载状态或禁用状态。

```jsx
import React from 'react';
import { ActionSheet, Button } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  const actions = [
    { name: '着色选项', color: '#ee0a24' },
    { loading: true },
    { name: '禁用选项', disabled: true },
  ];
  const [show, setShow] = React.useState(false);

  return (
    <View>
      <ActionSheet 
        show={show} 
        actions={actions} 
        cancelText="取消" 
        confirmText="确认" 
        onCancel={() => setShow(false)}
        onClose={() => setShow(false)}
        onConfirm={() => setShow(false)}
      />
      <Button onClick={() => setShow(true)}>点击展示</Button>
    </View>
  );
}
```


### 展示确认按钮

设置`cancelText`、`confirmText`属性后，会在底部展示取消或确认按钮，点击后关闭当前菜单。

```jsx
import React from 'react';
import { ActionSheet, Button } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  const [show, setShow] = React.useState(false);
  const actions = [{ name: 'Action' }, { name: 'Action' }, { name: 'Action' }];

  return (
    <View>
      <ActionSheet 
        show={show} 
        actions={actions} 
        cancelText="取消" 
        confirmText="确认" 
        onCancel={() => setShow(false)}
        onClose={() => setShow(false)}
        onConfirm={() => setShow(false)}
      />
      <Button onClick={() => setShow(true)}>点击展示</Button>
    </View>
  );
}
```

### 展示描述信息

设置`description`属性后，会在选项上方显示描述信息。

```jsx
import React from 'react';
import { ActionSheet, Button } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  const [show, setShow] = React.useState(false);
  const actions = [{ name: 'Action' }, { name: 'Action' }, { name: 'Action' }];

  return (
    <View>
      <ActionSheet 
        show={show} 
        actions={actions} 
        description="这是一段描述信息" 
        onCancel={() => setShow(false)}
        onClose={() => setShow(false)}
        onConfirm={() => setShow(false)}
      />
      <Button onClick={() => setShow(true)}>点击展示</Button>
    </View>
  );
}
```

### 自定义

通过设置`title`属性展示标题栏，同时可以使用插槽自定义菜单内容。

```jsx
import React from 'react';
import { ActionSheet, Button } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  const [show, setShow] = React.useState(false);

  return (
    <View>
      <ActionSheet 
        show={show} 
        title="标题"
        onCancel={() => setShow(false)}
        onClose={() => setShow(false)}
        onConfirm={() => setShow(false)}
      >
        <View>内容</View>
      </ActionSheet>
      <Button onClick={() => setShow(true)}>点击展示</Button>
    </View>
  );
}
```

### 自定义数值

内部嵌套 Slider 组件使用，注意 Slider 组件的渲染时机要在弹框完全进入后，否则会影响其定位。

```jsx
import React from 'react';
import { ActionSheet, Button, Slider } from '@ray-js/smart-ui';
import { View, Text } from '@ray-js/ray';
import { useDebounce } from 'ahooks';
import styles from './index.module.less';

export default function Demo() {
  const [show, setShow] = React.useState(false);
  const [ready, setReady] = React.useState(false);
  const [currentNumber, setCurrentNumber] = React.useState(100);
  
  const currentNumberForSlider = useDebounce(currentNumber, { wait: 500 });

  const onChange = React.useCallback(value => {
    setCurrentNumber(value);
  }, []);

  return (
    <View>
      <ActionSheet 
        show={show} 
        title="标题"
        onCancel={() => setShow(false)}
        onClose={() => setShow(false)}
        onConfirm={() => setShow(false)}
        onAfterEnter={() => setReady(true)}
        onAfterLeave={() => setReady(false)}
      >
        <View className={styles['content-number']}>
          <View className={styles['demo-header']}>
            <Text className={styles['demo-text']}>{`${currentNumber}%`}</Text>
          </View>
          <View className={styles['demo-slider']}>
            {ready && (
              <Slider
                minTrackRadius="8px"
                minTrackHeight="45px"
                maxTrackRadius="8px"
                maxTrackHeight="45px"
                value={currentNumberForSlider}
                onChange={onChange}
                thumbWidth={15}
                thumbHeight={50}
                thumbRadius={2}
                thumbStyle={{
                  background: '#BBC5D4',
                  border: '2px solid #FFFFFF',
                  boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.5)',
                }}
              />
            )}
          </View>
        </View>
      </ActionSheet>
      <Button onClick={() => setShow(true)}>点击展示</Button>
    </View>
  );
}
```

index.module.less  

```css
.content-number {
  padding: 10px 39px;
  background: var(--app-B1, #f6f7fb);
  text-align: center;
  color: var(--app-B4-N1, #000);
}

.demo-header {
  padding: 10px 39px;
}

.demo-text {
  font-size: 40px;
  font-weight: 600;
  line-height: 46px;
}

.demo-slider {
  margin: 23px 0;
  min-height: 45px;
}
```


### 自定义滚动

```jsx
import React from 'react';
import { ActionSheet, Button, DateTimePicker } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';

export default function Demo() {
  const [show, setShow] = React.useState(false);
  const [currentDate, setCurrentDate] = React.useState(new Date(2018, 0, 1));

  const onInput = React.useCallback(event => {
    const { detail } = event;
    const date = new Date(detail);
    setCurrentDate(date);
  }, []);
  
  return (
    <View>
      <ActionSheet 
        show={show} 
        title="标题"
        onCancel={() => setShow(false)}
        onClose={() => setShow(false)}
        onConfirm={() => setShow(false)}
      >
        <DateTimePicker
          showToolbar={false}
          type="date"
          minDate={new Date(2018, 0, 1).getTime()}
          value={currentDate}
          onInput={onInput}
        />
      </ActionSheet>
      <Button onClick={() => setShow(true)}>点击展示</Button>
    </View>
  );
}
```



### 自定义双列选择器 `v2.6.0`

当 `useTitleSlot` 为 `true` 时，可以使用插槽自定义标题内容，支持复杂的双选择器场景。


```jsx
import React from 'react';
import { ActionSheet, Button, DateTimePicker, Picker, SmartEventHandler, SmartPickerBaseEventDetail } from '@ray-js/smart-ui';
import { View } from '@ray-js/ray';
import styles from './index.module.less';

export default function Demo() {
  const [show, setShow] = React.useState(false);
  const [current12Date, setCurrent12Date] = useState('12:00');
  const [tempColumnIdx, setTempColumnIdx] = useState(3);

  const onCurrent12DateInput: SmartEventHandler<string> = event => {
    setCurrent12Date(event.detail);
  };

  const onTempColumnChange: SmartEventHandler<SmartPickerBaseEventDetail> = event => {
    const { index } = event.detail;
    setTempColumnIdx(index as number);
  };

  return (
    <View>
      <ActionSheet 
        show={show} 
        cancelText="Cancel"
        confirmText="Confirm"
        slot={{
          title: (
            <View className={styles['demo-custom-double-select-header']}>
              <View>Time</View>
              <View>Temp</View>
            </View>
          ),
        }}
        useTitleSlot 
        onCancel={() => setShow(false)}
        onClose={() => setShow(false)}
        onConfirm={() => setShow(false)}
      >
        <View className={styles['demo-custom-double-select-content']}>
          <DateTimePicker
            className={styles.flex1}
            type="time"
            is12HourClock
            showToolbar={false}
            value={current12Date}
            onInput={onCurrent12DateInput}
          />
          <Picker
            className={styles.flex1}
            unit="℃"
            activeIndex={tempColumnIdx}
            columns={tempColumns}
            onChange={onTempColumnChange}
          />
        </View>
      </ActionSheet>
      <Button onClick={() => setShow(true)}>点击展示</Button>
    </View>
  );
}
```

index.module.less
```css
.demo-custom-double-select-header {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.demo-custom-double-select-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.flex1 {
  flex: 1;
}
```

## API

### Props

| 参数         | 说明                      | 类型      | 默认值              |
| ----------------------- | -------------------------------------------- | --------- | ------------------- |
| actions | 菜单选项 | _Array_ | `[]` |
| activeColor | 列表选项中 icon 的选中态颜色 | _string_ | `--app-M1` |
| cancelText | 取消按钮文字 | _string_ | - |
| closeOnClickAction | 是否在点击选项后关闭 | _boolean_ | `true` |
| closeOnClickOverlay | 点击遮罩是否关闭菜单 | _boolean_ | `true` |
| confirmText | 确认按钮文字 | _string_ | - |
| description | 选项上方的描述信息 | _string_ | - |
| overlay | 是否显示遮罩层 | _boolean_ | `true` |
| round | 是否显示圆角 | _boolean_ | `true` |
| safeAreaInsetBottom | 是否为 iPhoneX 留出底部安全距离 | _boolean_ | `true` |
| safeAreaInsetBottomMin `v1.1.0` | 是否需要预留出一个最小的底部安全距离，用于在 safeArea 底部为 0 时进行追加，需要在 safeAreaInsetBottom 为 true 时生效 | _number_ | `16` |
| show | 是否显示动作面板 | _boolean_ | - |
| title | 标题 | _string_ | - |
| useTitleSlot `v2.6.0` | 是否启用标题 Slot | _boolean_ | `false` |
| zIndex | z-index 层级 | _number_ | `100` |
| nativeDisabled `v2.5.0` | 开启弹框期间是否禁用本地手势; 会在弹框开始进入动画时调用 `ty.nativeDisabled(true)`, 在弹框关闭动画结束时调用 `ty.nativeDisabled(false)` 恢复异层组件的点击能力；由于`ty.nativeDisabled` 是全局生效的，所以多个弹框组件同时打开时注意是否传 `native-disabled`属性和关闭的时机，防止 `native-disabled` 属性失效 | _boolean_ | `false` |

### Events

| 事件名             | 说明                                     | 参数                         |
| ------------------ | ---------------------------------------- | ---------------------------- |
| onAfterEnter | 遮罩进入后触发 | - |
| onAfterLeave | 遮罩离开后触发 | - |
| onBeforeEnter | 遮罩进入前触发 | - |
| onBeforeLeave | 遮罩离开前触发 | - |
| onCancel | 取消按钮点击时触发 | - |
| onClickOverlay | 点击遮罩层时触发 | - |
| onClose | 关闭时触发 | - |
| onConfirm | 确认按钮点击时触发 | - |
| onEnter | 遮罩进入中触发 | - |
| onLeave | 遮罩离开中触发 | - |
| onSelect | 选中选项时触发，禁用或加载状态下不会触发 | event.detail: 选项对应的对象 |

### actions

`API`中的`actions`为一个对象数组，数组中的每一个对象配置每一列，每一列有以下`key`：

| 键名      | 说明                          | 类型      | 默认值 |
| --------- | ----------------------------- | --------- | ------ |
| className | 为对应列添加额外的 class 类名 | _string_ | - |
| color | 选项文字颜色 | _string_ | - |
| disabled | 是否为禁用状态 | _boolean_ | - |
| loading | 是否为加载状态 | _boolean_ | - |
| name | 标题 | _string_ | - |
| subname | 二级标题 | _string_ | - |
| sendMessageImg | 会话内消息卡片图片，openType="contact"时有效 | _string_ | 截图 |
| sendMessagePath | 会话内消息卡片点击跳转小程序路径，openType="contact"时有效 | _string_ | 当前分享路径 |
| sendMessageTitle | 会话内消息卡片标题，openType="contact"时有效 | _string_ | 当前标题 |
| showMessageCard | 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，openType="contact"时有效 | _string_ | `false` |

### 外部样式类

| 类名         | 说明                |
| ------------ | ------------------- |
| customClass | 根节点样式类 |
| listClass | `actions`容器样式类 |


### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/material/smartui?comId=config-provider)。

| 名称                          | 默认值                                 | 描述 |
| ----------------------------- | -------------------------------------- | ---- |
| --action-sheet-width | _calc(100% - 32px)_ | 弹窗的宽度 |
| --action-sheet-left | _16px_ | 弹窗绝对定位左侧的位置 |
| --action-sheet-max-height | _90%_ | 弹窗的最大高度 |
| --action-sheet-margin | _0 0 16px_ | 弹窗的边距 |
| --action-sheet-active-color | _var(--app-B1, #f6f7fb)_ | 选中图标的颜色,以及按下时列表的背景色 |
| --action-sheet-item-disabled-opacity | _0.3_ | 禁用列表的透明度 |
| --action-sheet-header-border-color | _var(--app-B4-N7, rgba(0, 0, 0, 0.1))_ | 头部的边框色 |
| --action-sheet-header-height | _56px_ | 头部的高度 |
| --action-sheet-header-color | _var(--app-B4-N3, rgba(0, 0, 0, 0.5))_ | 头部的字体颜色 |
| --action-sheet-header-font-size | _16px_ | 头部的字体大小 |
| --action-sheet-header-font-weight | _normal_ | 头部的字重 |
| --action-sheet-description-color | _var(--app-B4-N3, rgba(0, 0, 0, 0.5))_ | 说明文字的颜色 |
| --action-sheet-description-font-size | _14px_ | 说明文字的字体大小 |
| --action-sheet-description-line-height | _20px_ | 说明文字的行高 |
| --action-sheet-item-background | _var(--app-B4, #ffffff)_ | 列表的背景色 |
| --action-sheet-item-border-radius | _0_ | 列表的边框圆角 |
| --action-sheet-item-icon-margin | _0px 16px 0 0_ | 列表的图标大小边距 |
| --action-sheet-item-icon-color | _var(--app-M1, #3678e3)_ | 列表的图标颜色 |
| --action-sheet-item-icon-size | _28px_ | 列表的图标大小 |
| --action-sheet-item-font-size | _16px_ | 列表的文字字体大小 |
| --action-sheet-item-font-weight | _normal_ | 列表的文字字重 |
| --action-sheet-item-line-height | _24px_ | 列表的文字的行高 |
| --action-sheet-item-text-color | _var(--app-B4-N1, rgba(0, 0, 0, 1))_ | 列表的文字的颜色 |
| --action-sheet-subname-color | _var(--app-B4-N3, rgba(0, 0, 0, 0.5))_ | 列表二级名称的字体颜色 |
| --action-sheet-subname-font-size | _12px_ | 列表二级名称的字体大小 |
| --action-sheet-subname-line-height | _20px_ | - |
| --action-sheet-confirm-text-color | _var(--app-B4-N1, rgba(0, 0, 0, 1))_ | 确认按钮的字体颜色 |
| --action-sheet-confirm-font-weight | _500_ | 确认按钮的字体字重 |
| --action-sheet-cancel-text-color | _var(--app-B4-N3, rgba(0, 0, 0, 0.5))_ | 取消按钮的字体颜色 |
| --action-sheet-footer-padding-top | _8px_ | 底部内容的顶部内边距 |
| --action-sheet-footer-padding-color | _var(--app-B4-N9, rgba(0, 0, 0, 0.05))_ | 底部内容的距离列表的间隔色 |

## 常见问题

### ActionSheet 子组件使用 Slider 渲染定位异常，是什么情况？

由于 `Slider` 组件在 `ActionSheet` 打开时可能尚未完全渲染，因此我们无法获取其 DOM，从而导致定位出现问题。解决方案是在 `ActionSheet` 的 `onAfterEnter` 事件回调之后再开始渲染 `Slider` 组件。这样，我们可以确保 `Slider` 能够在获取 DOM 时被正常渲染。请参考以下示例：

```tsx
import React from 'react';
import { View, Text } from '@ray-js/ray';
import { useDebounce } from 'ahooks';
import { ActionSheet, Slider } from '@ray-js/smart-ui';
import styles from './index.module.less';

function Demo() {
  const [ready, setReady] = React.useState(false);
  const [currentNumber, setCurrentNumber] = React.useState(100);
  const currentNumberForSlider = useDebounce(currentNumber, { wait: 500 });
  const onActionSheetReady = React.useCallback(() => setReady(true), []);
  const [showNumber, setShowNumber] = React.useState(false);
  const onChange = React.useCallback(value => {
    setCurrentNumber(value);
  }, []);
  const toggleActionSheetNumber = React.useCallback(() => setShowNumber(!showNumber), [showNumber]);

  return (
    <ActionSheet
      show={showNumber}
      title="Title"
      cancelText="Action"
      confirmText="Action"
      onClose={toggleActionSheetNumber}
      onCancel={toggleActionSheetNumber}
      onConfirm={toggleActionSheetNumber}
      onAfterEnter={onActionSheetReady}
    >
      <View className={styles['content-number']}>
        <View className={styles['demo-header']}>
          <Text className={styles['demo-text']}>{`${currentNumber}%`}</Text>
        </View>
        <View className={styles['demo-slider']}>
          {ready && (
            <Slider
              minTrackRadius="8px"
              minTrackHeight="45px"
              maxTrackRadius="8px"
              maxTrackHeight="45px"
              value={currentNumberForSlider}
              onChange={onChange}
              thumbWidth={15}
              thumbHeight={50}
              thumbRadius={2}
              thumbStyle={{
                background: '#BBC5D4',
                border: '2px solid #FFFFFF',
                boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.5)',
              }}
            />
          )}
        </View>
      </View>
    </ActionSheet>
  );
}
```