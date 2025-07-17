import CircleComp from './Circle';
import { SmartCircle } from './PropTypes';

function Circle(props: SmartCircle) {
  return (
    <CircleComp
      // @ts-ignore 属性修改，breaking change 向下兼容
      size={props.size || '100px'}
      // @ts-ignore 属性修改，breaking change 向下兼容
      trackWidth={props['stroke-width'] || 10}
      // @ts-ignore 属性修改，breaking change 向下兼容
      trackColor={props['layer-color'] || '#d3d3d3'}
      // @ts-ignore 属性修改，breaking change 向下兼容
      fillColor={props.color || '#007AFF'}
      // @ts-ignore 属性修改，breaking change 向下兼容
      percent={props.value}
      customStyle={props.style}
      {...props}
    />
  );
}
export { Circle };

export { SmartCircleProps, SmartCircle } from './PropTypes';
