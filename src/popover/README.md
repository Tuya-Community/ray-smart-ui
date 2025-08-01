---
category: 反馈
new: true
version: v2.3.0
---

# Popover 弹出提示

### 介绍

v2.3.0开始加入，弹出层容器，用于展示弹窗、信息提示等轻量内容。

### 引入

```jsx
import { Popover } from '@ray-js/smart-ui';
```

## 代码演示

### 基础用法

```jsx
import { View } from '@ray-js/ray';
import { Popover, Icon, Button } from '@ray-js/smart-ui';
import React from 'react';
import Sun from '@tuya-miniapp/icons/dist/svg/Sun';

export default function Demo() {
  const [show, setShow] = React.useState(false);
  const showPopup = () => setShow(true);
  const onClose = () => setShow(false);

  return (
    <View style={{paddingBottom: '64px'}}>
      <View
        style={{
          padding: '10vh',
          paddingTop: 0,
          paddingLeft: 8,
        }}
      >
        <Popover
          show={show}
          onClose={() => setShow(false)}
          placement="bottomLeft"
          customStyle={{
            padding: '0px',
            width: '200px',
          }}
          slot={{
            overlay: (
              <View>
                {[1, 2, 3].map(n => (
                  <View className={styles.listItem} key={n}>
                    <Icon name={Sun} size="24px" color="#3678E3" />
                    <Text className={styles.listText}>Title</Text>
                  </View>
                ))}
              </View>
            ),
          }}
        >
          <Button>下左弹出</Button>
        </Popover>
      </View>
      <View
        style={{
          padding: '10vh',
          paddingTop: 0,
          paddingLeft: '20vw',
        }}
      >
        <Popover
          placement="bottom"
          customStyle={{
            padding: '0px',
            width: '200px',
          }}
          slot={{
            overlay: (
              <View>
                {[1, 2, 3].map(n => (
                  <View className={styles.listItem} key={n}>
                    <Icon name={Sun} size="24px" color="#3678E3" />
                    <Text className={styles.listText}>Title</Text>
                  </View>
                ))}
              </View>
            ),
          }}
        >
          <Button>下中弹出</Button>
        </Popover>
      </View>
      <View
        style={{
          padding: '10vh',
          paddingTop: 0,
          paddingLeft: '40vw',
        }}
      >
        <Popover
          placement="bottomRight"
          customStyle={{
            padding: '0px',
            width: '200px',
          }}
          slot={{
            overlay: (
              <View>
                {[1, 2, 3].map(n => (
                  <View className={styles.listItem} key={n}>
                    <Icon name={Sun} size="24px" color="#3678E3" />
                    <Text className={styles.listText}>Title</Text>
                  </View>
                ))}
              </View>
            ),
          }}
        >
          <Button>下右弹出</Button>
        </Popover>
      </View>
      <View
        style={{
          paddingLeft: 8,
          paddingTop: '10vh',
        }}
      >
        <Popover
          placement="top"
          slot={{
            overlay: <View>tip</View>,
          }}
        >
          <Button>上侧弹出</Button>
        </Popover>
      </View>
      <View
        style={{
          paddingLeft: '20vw',
          paddingTop: '10vh',
        }}
      >
        <Popover
          placement="left"
          slot={{
            overlay: <View>tip</View>,
          }}
        >
          <Button>左侧弹出</Button>
        </Popover>
      </View>
      <View
        style={{
          paddingLeft: '8px',
          paddingTop: '10vh',
        }}
      >
        <Popover
          placement="right"
          slot={{
            overlay: <View>tip</View>,
          }}
        >
          <Button>右侧弹出</Button>
        </Popover>
      </View>
      <View
        style={{
          paddingLeft: '8px',
          paddingTop: '10vh',
        }}
      >
        <Popover
          placement="bottom"
          slot={{
            overlay: <View>tip</View>,
          }}
        >
          <Button>下中弹出</Button>
        </Popover>
      </View>
    </View>
  );
}
```

less 样式如下

```less
.listItem {
  height: 96rpx;
  padding: 0 32rpx;
  line-height: 96rpx;
  display: flex;
  align-items: center;
  position: relative;
  &:nth-child(n + 2)::after {
    display: block;
    content: '';
    height: 1px;
    background-color: #ebebeb;
    width: 90%;
    position: absolute;
    right: 0;
    top: 0;
  }
}

.listText {
  margin-left: 20rpx;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.9);
}
```

### 受控用法

通过`show`属性控制弹出层是否展示。

```tsx
import { View } from '@ray-js/ray';
import { Popover, Button } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  const [show, setShow] = React.useState(false);

  return (
    <Popover placement="bottom" show={show} onClose={() => setShow(false)} onShowChange={e => setShow(e.detail)} slot={{
      overlay: <View>tip</View>
    }}>
      <Button>下方弹出</Button>
    </Popover>
  )
}
```

### 弹出位置

通过`position`属性设置弹出位置，默认居右弹出，可以设置为`top`、`topLeft`、`topRight`、`bottom`、`bottomLeft`、`bottomRight`、`left`、`leftTop`、`leftBottom`、`right`、`rightTop`、`rightBottom`。

```jsx
import { View } from '@ray-js/ray';
import { Popover, Button } from '@ray-js/smart-ui';
import React from 'react';

export default function Demo() {
  return (
    <Popover placement="right" slot={{
      overlay: <View>弹框内容</View>
    }}>
      <Button>右侧弹出</Button>
    </Popover>
  );
}
```

## API

### Props
| 参数             | 说明                                                                                                                                                           | 类型                  | 默认值  |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ------- |
| customStyle      | 自定义弹出层样式                                                                                                                                               | _React.CSSProperties_ | -       |
| duration         | 延迟关闭的时间(ms)                                                                                                                                             | number                | `3000`  |
| placement        | 弹出层的位置，支持值：`top`、`topLeft`、`topRight`、`bottom`、`bottomLeft`、`bottomRight`、`left`、`leftTop`、`leftBottom`、`right`、`rightTop`、`rightBottom` | _string_              | `right` |
| show             | 控制弹出层是否显示，并监听状态变化，值变更时更新 `currentShow`                                                                                                 | _boolean_             | `false` |
| trigger `v2.5.0` | 控制弹出层触发方式，支持 `tap`、`longpress`                                                                                                                    | _string_              | `tap`   |

### Events

| 事件名       | 说明            | 参数 |
| ------------ | --------------- | ---- |
| onClose      | 关闭时触发      | -    |
| onShowChange | 显示/隐藏时触发 | -    |

### Popover Slot

| 名称    | 说明     |
| ------- | -------- |
| overlay | 弹窗内容 |

### 外部样式类

| 类名        | 说明         |
| ----------- | ------------ |
| customClass | 根节点样式类 |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/material/smartui?comId=config-provider)。

| 名称                       | 默认值                              | 描述         |
| -------------------------- | ----------------------------------- | ------------ |
| --popover-background-color | #fff                                | 弹出层背景色 |
| --popover-border-radius    | 12px                                | 弹出层圆角   |
| --popover-box-shadow       | 0px 6px 12px 0px rgba(0, 0, 0, 0.1) | 弹出层阴影   |
| --popover-padding          | 12px                                | 弹出层内边距 |
