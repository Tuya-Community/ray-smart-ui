import ProgressBar from '@ray-js/components-ty-progress-bar';
import { IProps } from '@ray-js/components-ty-progress-bar/lib/props';
import ProgressCircle from '@ray-js/components-ty-progress-circle';
import { IProps as IProgressCircleProps } from '@ray-js/components-ty-progress-circle/lib/props';

function Progress(props: IProps) {
  return <ProgressBar {...props} />;
}

export type ProgressProps = IProps;
export type ProgressCircleProps = IProgressCircleProps;

Progress.Circle = ProgressCircle;

export { Progress };
