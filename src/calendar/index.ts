import _Calendar from './Calendar';
import type { SmartCalendar } from './PropTypes';

const Calendar = _Calendar as React.FC<SmartCalendar>;

export { Calendar };

export * from './PropTypes';
