import ProgressCircle from './Circle';
import ProgressBar from './Progress';
import { SmartCircle, SmartProgressProps } from './PropTypes';

function Progress(props: SmartProgressProps) {
  return (
    <ProgressBar
      // @ts-ignore 属性修改，breaking change 向下兼容
      color={props.fillColor}
      // @ts-ignore 属性修改，breaking change 向下兼容
      percentage={props.percent}
      // @ts-ignore 属性修改，breaking change 向下兼容
      stroke-width={props.height}
      // @ts-ignore 属性修改，breaking change 向下兼容
      trackColor={props.trackColor}
      show-pivot={false}
      {...props}
    />
  );
}

function Circle(props: SmartCircle) {
  return (
    <ProgressCircle
      // @ts-ignore 属性修改，breaking change 向下兼容
      size={props.size}
      // @ts-ignore 属性修改，breaking change 向下兼容
      trackWidth={props['stroke-width']}
      // @ts-ignore 属性修改，breaking change 向下兼容
      trackColor={props['layer-color']}
      // @ts-ignore 属性修改，breaking change 向下兼容
      fillColor={props.color}
      // @ts-ignore 属性修改，breaking change 向下兼容
      percent={props.value}
      {...props}
    />
  );
}

Progress.Circle = Circle;

export { Progress, SmartProgressProps, SmartCircle };
