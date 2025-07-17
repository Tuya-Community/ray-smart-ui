import _Tag from './Tag';
import type { SmartTag } from './PropTypes';

const Tag = _Tag as React.FC<SmartTag>;

export { Tag };

export { SmartTag, SmartTagEvents, SmartTagExternalClassName, SmartTagProps } from './PropTypes';
