import React, { useEffect, useState } from 'react';
// @ts-ignore -- MiniApp component handled by Ray.
import RawPopup from '@tuya/miniapp-smart-ui-lynx/dist/popup/index';
// @ts-ignore -- MiniApp component handled by Ray.
import RawActionSheet from '@tuya/miniapp-smart-ui-lynx/dist/action-sheet/index';
import type { SmartPopup, SmartActionSheet } from './types';
import { withReactProps } from './common/withReactProps';

function lazyChildren<P extends { show?: boolean; children?: React.ReactNode }>(
  Target: React.ComponentType<P>
): React.FC<P> {
  return function Lazy(props: P) {
    const [opened, setOpened] = useState(!!props.show);
    useEffect(() => {
      if (props.show) setOpened(true);
    }, [props.show]);
    return <Target {...props}>{opened ? props.children : null}</Target>;
  };
}
export const NativePopup = lazyChildren(
  withReactProps(RawPopup) as React.ComponentType<SmartPopup>
);
export const NativeActionSheet = lazyChildren(
  withReactProps(RawActionSheet) as React.ComponentType<SmartActionSheet>
);
