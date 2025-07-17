import { withReactProps } from '../common/withReactProps';
import _Image from './Image';
import type { SmartImage } from './PropTypes';

const Image = withReactProps(_Image as React.ElementType) as React.FC<SmartImage>;

export { Image };

export {
  SmartImage,
  SmartImageEvents,
  SmartImageExternalClassName,
  SmartImageProps,
  SmartImageErrorEventDetail,
  SmartImageLoadEventDetail,
} from './PropTypes';
