import React from 'react';

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

export default Playground;
