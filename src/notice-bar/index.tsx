import BaseNoticeBar from './NoticeBar';
import type { SmartNoticeBar } from './PropTypes';

const NoticeBar = BaseNoticeBar as React.FC<SmartNoticeBar>;

export { NoticeBar };

export {
  SmartNoticeBarSlot,
  SmartNoticeBar,
  SmartNoticeBarEvents,
  SmartNoticeBarProps,
} from './PropTypes';
