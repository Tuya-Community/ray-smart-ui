import _CountDown from './CountDown';
import type { SmartCountDown } from './PropTypes';

const CountDown = _CountDown as React.FC<SmartCountDown>;

export { CountDown };

export * from './PropTypes';
