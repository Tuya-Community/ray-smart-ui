import React, { useEffect, useRef } from 'react';
import { getCurrentPages } from '@ray-js/ray';
import { Dialog } from '../dialog';
import { Toast } from '../toast';
import {
  SmartUIRendererContext,
  SmartUIRenderer,
  registerPageBoundary,
} from '../renderer';

export interface SmartUIPageProps {
  renderer?: SmartUIRenderer;
  route?: string;
  context?: { route?: string; selectComponent?: (...args: any[]) => any };
  children?: React.ReactNode;
}

/** Statically imported by page entries so Ray can collect Dialog/Toast hosts. */
export function SmartUIPage({ renderer = 'webview', route, context, children }: SmartUIPageProps) {
  const owner = useRef({});
  const initialPage = useRef(context || getCurrentPages().slice(-1)[0]);
  // Ray/React 17 pages render synchronously. Register before children run their
  // mount callbacks, and remove only this boundary when its page unmounts.
  const unregister = registerPageBoundary(owner.current, {
    page: context || initialPage.current,
    route,
    renderer,
  });
  useEffect(() => unregister, []);
  return (
    <SmartUIRendererContext.Provider value={renderer}>
      {children}
      <Dialog id="smart-dialog" />
      <Toast id="smart-toast" />
    </SmartUIRendererContext.Provider>
  );
}
