// import React from 'react';
// import { View } from '@ray-js/ray';
// import { Button, Notify, NotifyInstance } from '@ray-js/smart-ui';
// import { DemoBlock } from '@/components';

// export default function Demo() {
//   const showNotify = React.useCallback(() => {
//     NotifyInstance({ context: this, message: '通知内容' });
//   }, []);

//   const showNotifyByType = React.useCallback(event => {
//     const { type } = event.currentTarget.dataset;
//     NotifyInstance({
//       type,
//       context: this,
//       message: '通知内容',
//     });
//   }, []);

//   const showCustomColor = React.useCallback(() => {
//     NotifyInstance({
//       context: this,
//       message: '自定义颜色',
//       color: '#ad0000',
//       background: '#ffe1e1',
//     });
//     NotifyInstance.clear();
//   }, []);

//   const showCustomDuration = React.useCallback(() => {
//     NotifyInstance({
//       context: this,
//       duration: 1000,
//       message: '自定义时长',
//     });
//   }, []);

//   const showSafe = React.useCallback(() => {
//     NotifyInstance({
//       context: this,
//       message: '通知内容',
//       safeAreaInsetTop: true,
//     });
//   }, []);

//   return (
//     <>
//       <DemoBlock padding title="基础用法">
//         <Button type="danger" onClick={showNotify}>
//           基础用法
//         </Button>
//       </DemoBlock>

//       <DemoBlock padding title="通知类型">
//         <View className="demo-margin-bottom">
//           <Button
//             className="demo-margin-right"
//             type="info"
//             data-type="primary"
//             onClick={showNotifyByType}
//           >
//             主要通知
//           </Button>
//           <Button type="primary" data-type="success" onClick={showNotifyByType}>
//             成功通知
//           </Button>
//         </View>
//         <View className="demo-margin-bottom">
//           <Button
//             className="demo-margin-right"
//             type="danger"
//             data-type="danger"
//             onClick={showNotifyByType}
//           >
//             危险通知
//           </Button>
//           <Button type="warning" data-type="warning" onClick={showNotifyByType}>
//             警告通知
//           </Button>
//         </View>
//       </DemoBlock>

//       <DemoBlock padding title="自定义通知">
//         <Button type="primary" className="demo-margin-right" onClick={showCustomColor}>
//           自定义颜色
//         </Button>
//         <Button type="primary" onClick={showCustomDuration}>
//           自定义时长
//         </Button>
//       </DemoBlock>

//       <DemoBlock padding title="插入状态栏高度">
//         <Button type="primary" className="demo-margin-right" onClick={showSafe}>
//           插入状态栏高度
//         </Button>
//       </DemoBlock>

//       <Notify id="van-notify" />
//     </>
//   );
// }
