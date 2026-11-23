import { createContext, useContext } from 'react';
import { getCurrentPages } from '@ray-js/ray';

export type SmartUIRenderer = 'native' | 'webview';
export const SmartUIRendererContext = createContext<SmartUIRenderer>('webview');
export const useSmartUIRenderer = () => useContext(SmartUIRendererContext);

type PageContext = { route?: string; selectComponent?: (...args: any[]) => any };
type Boundary = { page?: PageContext; route?: string; renderer: SmartUIRenderer };
// Each mounted page owns its entry. There is no process-wide current renderer.
const boundaries = new Map<object, Boundary>();
const normalize = (route?: string) => (route || '').replace(/^\//, '');
export function registerPageBoundary(owner: object, boundary: Boundary) {
  boundaries.set(owner, boundary);
  return () => { boundaries.delete(owner); };
}
export function resolveInstanceRenderer(context?: PageContext): SmartUIRenderer {
  const page = context?.route ? context : getCurrentPages().slice(-1)[0];
  const entries = Array.from(boundaries.values()).reverse();
  const exact = entries.find(value => page && value.page === page);
  if (exact) return exact.renderer;
  const route = normalize(page?.route);
  return entries.find(value => route && normalize(value.route || value.page?.route) === route)
    ?.renderer || 'webview';
}
