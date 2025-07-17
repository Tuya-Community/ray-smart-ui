import BaseSlider from '@ray-js/components-ty-slider';
import { IProps } from '@ray-js/components-ty-slider/lib/props';

import RangeSlider, { RangeSliderProps } from './RangeSlider';
import { withReactProps } from '../common/withReactProps';

function Slider(props: IProps) {
  return <BaseSlider {...props} />;
}

Slider.RangeSlider = withReactProps<
  Omit<
    RangeSliderProps,
    | 'bind:change'
    | 'bind:drag-end'
    | 'bind:drag-start'
    | 'bind:drag'
    | 'bar-height'
    | 'active-color'
    | 'inactive-color'
  > & {
    onChange?: (
      args: Omit<Parameters<RangeSliderProps['bind:change']>[0], 'detail'> & { detail: number[] }
    ) => ReturnType<RangeSliderProps['bind:change']>;
    onDragEnd?: RangeSliderProps['bind:drag-end'];
    onDragStart?: RangeSliderProps['bind:drag-start'];
    onDrag?: RangeSliderProps['bind:drag'];
    barHeight?: RangeSliderProps['bar-height'];
    activeColor?: RangeSliderProps['active-color'];
    inActiveColor?: RangeSliderProps['inactive-color'];
  }
>(RangeSlider);

export { Slider };
``;
