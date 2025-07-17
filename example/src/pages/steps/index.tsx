// import React from 'react';
// import { showToast } from '@ray-js/ray';
// import { Button, Steps } from '@ray-js/smart-ui';
// import { Checkmark2, Right } from '@tuya-miniapp/icons';
// import { DemoBlock } from '@/components';

// const steps = [
//   {
//     text: '步骤一',
//     desc: '描述信息',
//   },
//   {
//     text: '步骤二',
//     desc: '描述信息',
//   },
//   {
//     text: '步骤三',
//     desc: '描述信息',
//   },
//   {
//     text: '步骤四',
//     desc: '描述信息',
//   },
// ];
// const customIconSteps = steps.map(item => ({
//   ...item,
//   inactiveIcon: Right,
//   activeIcon: Checkmark2,
// }));

// export default function Demo() {
//   const [active, setActive] = React.useState(1);
//   const nextStep = () => {
//     setActive((active + 1) % 4);
//   };

//   const onClickStep = event => {
//     showToast({
//       icon: 'none',
//       title: `Index: ${event.detail}`,
//     });
//   };

//   return (
//     <>
//       <DemoBlock title="基础用法">
//         <Steps
//           steps={steps}
//           active={active}
//           onClickStep={onClickStep}
//           className="demo-margin-bottom"
//         />
//         <Button className="demo-margin-left" onClick={nextStep}>
//           下一步
//         </Button>
//       </DemoBlock>

//       <DemoBlock title="自定义样式">
//         <Steps
//           steps={steps}
//           active={active}
//           activeIcon={Checkmark2}
//           activeColor="#38f"
//           inactiveIcon={Right}
//         />
//       </DemoBlock>

//       <DemoBlock title="自定义图标">
//         <Steps steps={customIconSteps} active={active} />
//       </DemoBlock>

//       <DemoBlock title="竖向步骤条">
//         <Steps steps={steps} active={active} direction="vertical" activeColor="#ee0a24" />
//       </DemoBlock>
//     </>
//   );
// }
