// @ts-ignore
import _Slider from '@tuya-miniapp/smart-ui/dist/slider/index';
import { SmartSlider } from './PropTypes';

const Slider = _Slider as React.FC<SmartSlider>;

export type RangeSliderProps = Omit<SmartSlider, 'range'>;

const RangeSlider = (props: RangeSliderProps) => {
  return <Slider {...props} range />;
};

export default RangeSlider;
