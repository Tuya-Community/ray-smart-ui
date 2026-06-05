import React from 'react';
import ReactDOM from 'react-dom';
import * as SmartUiComponents from '@ray-js/smart-ui';
import * as RayComponents from '@ray-js/ray';
import CodeSandbox from '@ray-js/code-sandbox';
import * as icons from '@tuya-miniapp/icons';
import Strings from '../../i18n';

const Playground: React.FC = () => {
  return (
    <CodeSandbox
      grammarErrText={Strings.getLang('grammarErrText')}
      refreshButtonText={Strings.getLang('refreshButtonText')}
      loadingText={Strings.getLang('loadingText')}
      context={{
        '@ray-js/smart-ui': SmartUiComponents,
        '@ray-js/ray': RayComponents,
        '@tuya-miniapp/icons': icons,
      }}
    />
  );
};

if (typeof window !== 'undefined') {
  // 改造渲染函数：支持动态组件名和配置项
  // @ts-ignore
  window.renderComponentToParent = function (
    containerId: string,
    componentName: string,
    props: Record<string, any> = {}
  ) {
    try {
      const parentTarget = window.parent.document.getElementById(containerId);
      if (!parentTarget) {
        console.error(`未找到父页面容器: ${containerId}`);
        return;
      }

      // 1. 从 SmartUiComponents 中动态提取组件 (例如：'Button')
      // @ts-ignore
      const TargetComponent = SmartUiComponents[componentName];

      if (!TargetComponent) {
        console.error(`在 @ray-js/smart-ui 中未找到组件: ${componentName}`);
        return;
      }

      // 2. 使用 React.createElement 动态创建组件实例，并传入父页面给的 props
      const element = React.createElement(TargetComponent, props);

      // 3. 渲染到父页面
      // 注意：如果父页面是 React 18，且子页面也是，建议改用 createRoot，这里沿用你的 ReactDOM.render
      ReactDOM.render(element, parentTarget);
    } catch (e) {
      console.error('动态渲染失败：', e);
    }
  };
}

export default Playground;
