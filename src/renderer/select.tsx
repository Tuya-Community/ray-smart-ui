import React from 'react';
import { getCurrentPages } from '@ray-js/ray';
import { useSmartUIRenderer, resolveInstanceRenderer } from './index';

type Component = React.ElementType;
type Props = Record<string, any>;
const kebab = (name: string) => name.replace(/[A-Z]/g, value => `-${value.toLowerCase()}`);

/** Metadata is local to a rendered component; mode is never stored globally. */
export function nativeSlotMetadata(props: Props) {
  const slots = props.slot && typeof props.slot === 'object' ? props.slot : {};
  const names = Object.keys(slots)
    .filter(key => React.isValidElement(slots[key]))
    .map(kebab);
  React.Children.forEach(props.children, child => {
    if (React.isValidElement<Props>(child) && typeof child.props.slot === 'string')
      names.push(child.props.slot);
  });
  return {
    lynxHasDefaultSlot: React.Children.toArray(props.children).some(
      child => !React.isValidElement<Props>(child) || !child.props.slot
    ),
    lynxSlotNames: Array.from(new Set(names)),
  };
}

function sliderProps(props: Props) {
  if (props.minTrackRadius !== undefined && props.minTrackRadius !== 'inherit') return props;
  const radius = props.trackStyle?.borderRadius;
  return {
    ...props,
    minTrackRadius:
      radius == null || radius === 'inherit' || radius === 'unset'
        ? props.maxTrackRadius ?? '4px'
        : radius,
  };
}

export function selectComponent(webview: Component, lynx: Component, name: string) {
  const Selected = React.forwardRef<unknown, Props>((props, ref) => {
    const pageIsLynx = useSmartUIRenderer() === 'native';
    const { renderMode, ...rest } = props;
    const native = renderMode ? renderMode === 'lynx' : pageIsLynx;
    const Target = native ? lynx : webview;
    const values =
      native && name === 'Slider' ? { ...sliderProps(rest), renderMode: 'lynx' } : rest;
    return React.createElement(Target, {
      ...values,
      ...(native ? nativeSlotMetadata(rest) : {}),
      ...(ref == null ? {} : { ref }),
    });
  });
  Selected.displayName = `SmartUI(${name})`;
  if (name === 'Slider') {
    Object.assign(Selected, {
      RangeSlider: selectComponent(
        (webview as any).RangeSlider,
        (lynx as any).RangeSlider,
        'RangeSlider'
      ),
    });
  }
  return Selected;
}

export function currentInstancePage(options?: Props) {
  const context = options && typeof options === 'object' ? options.context : undefined;
  return (typeof context === 'function' ? context() : context) || getCurrentPages().slice(-1)[0];
}

/** Preserve the function API and its static methods, including their receivers. */
export function selectInstance<T extends (...args: any[]) => any>(webview: T, lynx: T): T {
  const choose = (page = currentInstancePage()) =>
    resolveInstanceRenderer(page) === 'native' ? lynx : webview;
  const request = (key: string | null, args: any[]) => {
    const page = currentInstancePage(args[0]);
    const target = choose(page);
    const method = key ? (target as any)[key] : target;
    if (page && typeof page.selectComponent === 'function') {
      const value = args[0];
      const options = typeof value === 'string' ? { message: value } : value || {};
      return Reflect.apply(method, target, [{ ...options, context: page }, ...args.slice(1)]);
    }
    return Reflect.apply(method, target, args);
  };
  const Selected = function selectedInstance(...args: any[]) {
    return request(null, args);
  };
  const both = new Set([
    'clear',
    'close',
    'stopLoading',
    'setDefaultOptions',
    'resetDefaultOptions',
  ]);
  Array.from(new Set([...Object.keys(webview), ...Object.keys(lynx)])).forEach(key => {
    const descriptor =
      Object.getOwnPropertyDescriptor(webview, key) || Object.getOwnPropertyDescriptor(lynx, key);
    if (typeof (webview as any)[key] === 'function' || typeof (lynx as any)[key] === 'function') {
      Object.defineProperty(Selected, key, {
        enumerable: true,
        value: (...args: any[]) => {
          if (both.has(key)) {
            if (typeof (webview as any)[key] === 'function')
              Reflect.apply((webview as any)[key], webview, args);
            if (typeof (lynx as any)[key] === 'function')
              return Reflect.apply((lynx as any)[key], lynx, args);
            return undefined;
          }
          return request(key, args);
        },
      });
    } else {
      Object.defineProperty(Selected, key, {
        enumerable: descriptor?.enumerable,
        get: () => (choose() as any)[key],
      });
    }
  });
  return Selected as unknown as T;
}
