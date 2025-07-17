// @ts-ignore
import _Notify, { NotifyInstance } from './Notify';
import type { SmartNotifyProps } from './PropTypes';

const Notify = _Notify as React.FC<SmartNotifyProps>;

export { Notify, NotifyInstance };

export { SmartNotifyProps, SmartNotify, SmartNotifyOptions } from './PropTypes';
