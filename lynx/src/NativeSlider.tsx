import React from 'react';
import type { IProps } from '@ray-js/components-ty-slider/lib/props';
// @ts-ignore -- Ray MiniApp import.
import RawSlider from '@tuya/miniapp-smart-ui-lynx/dist/slider/index';
import { withReactProps } from './common/withReactProps';

export const NativeSliderCore = withReactProps(RawSlider);
export type SliderProps = IProps & { onCancel?: () => void };
const unit = (value: string | number) => (typeof value === 'number' ? `${value}px` : value);
export function NativeSlider(props: SliderProps) {
  const customStyle = [
    ['--slider-button-width', unit(props.thumbWidth || 28)],
    ['--slider-button-height', unit(props.thumbHeight || 28)],
    ['--slider-button-border-radius', unit(props.thumbRadius || 28)],
    ['--slider-button-background-color', props.thumbColor || '#ffffff'],
    ['--slider-bar-height', unit(props.maxTrackHeight || 4)],
  ]
    .map(([key, value]) => `${key}:${value}`)
    .join(';');
  return (
    <NativeSliderCore
      range={false}
      value={props.value ?? props.defaultValue ?? 0}
      min={props.min ?? 0}
      max={props.max ?? 100}
      step={props.step ?? 1}
      disabled={props.disabled}
      vertical={props.isVertical}
      className={props.className}
      customStyle={customStyle}
      barHeight={props.maxTrackHeight || 4}
      activeColor={props.minTrackColor || String(props.barStyle?.backgroundColor || '#158CFB')}
      inactiveColor={props.maxTrackColor || String(props.trackStyle?.backgroundColor || '#d8d8d8')}
      onDragStart={() => props.onBeforeChange?.(props.value ?? props.defaultValue ?? 0)}
      onDrag={event => props.onChange?.(event.detail.value)}
      onChange={event => {
        props.onChange?.(event.detail);
        props.onAfterChange?.(event.detail);
      }}
      onCancel={() => props.onCancel?.()}
    />
  );
}

NativeSlider.defaultProps = { onCancel: undefined };
