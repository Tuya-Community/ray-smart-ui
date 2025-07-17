// @ts-ignore
import _Slider from '@tuya-miniapp/smart-ui/lib/slider/index';
import { SmartSlider } from './PropTypes';

const Slider = _Slider as React.FC<SmartSlider>;

export type RangeSliderProps = Omit<SmartSlider, 'range'>;

const RangeSlider = (props: RangeSliderProps) => {
  return <Slider {...props} range />;
};

export default RangeSlider;
