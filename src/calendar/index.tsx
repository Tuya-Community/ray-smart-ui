/* eslint-disable prefer-destructuring */
import _Calendar from './Calendar';
import type { SmartCalendar } from './PropTypes';

const SmartCalendar = _Calendar as React.FC<SmartCalendar>;

const wrapUtc = (dt: number, targetOffset: number) => {
  const date = new Date(dt);
  const offset = date.getTimezoneOffset(); // 获取当前时区的偏移

  // 假设我们想要将时间调整为 UTC+8（比如北京时区）
  const timeDifference = offset - targetOffset; // 计算差值

  // 创建一个新的日期对象，将其调整为目标时区
  const adjustedDate = new Date(date.getTime() + timeDifference * 60000); // 时间差转换为毫秒

  return adjustedDate.getTime();
};

const unwrapUtc = (dt: number | Date, targetOffset: number) => {
  const date = new Date(dt);
  const offset = date.getTimezoneOffset(); // 获取当前时区的偏移

  // 计算反向差值
  const timeDifference = targetOffset - offset; // 目标时区偏移量和当前时区偏移量之间的差异

  // 创建一个新的日期对象，将其调整回 UTC
  const utcDate = new Date(date.getTime() - timeDifference * 60000); // 时间差转换为毫秒

  return utcDate.getTime();
};

export const Calendar: React.FC<SmartCalendar> = props => {
  if (props.utcOffset === undefined) {
    return <SmartCalendar {...props} />;
  }

  const utcOffset = props.utcOffset;

  let defaultDate = props.defaultDate;
  let maxDate = props.maxDate;
  let minDate = props.minDate;

  if (utcOffset) {
    if (props.defaultDate) {
      if (Array.isArray(props.defaultDate)) {
        defaultDate = props.defaultDate.map(date => wrapUtc(date, utcOffset));
      } else {
        defaultDate = wrapUtc(props.defaultDate, utcOffset);
      }
    }
    if (props.maxDate) {
      maxDate = wrapUtc(props.maxDate, utcOffset);
    }
    if (props.minDate) {
      minDate = wrapUtc(props.minDate, utcOffset);
    }
  }

  return (
    <SmartCalendar
      {...props}
      defaultDate={defaultDate}
      minDate={minDate}
      maxDate={maxDate}
      onConfirm={event => {
        if (props.onConfirm) {
          let detail = event.detail;

          if (utcOffset) {
            if (Array.isArray(event.detail)) {
              detail = event.detail.map(date => new Date(unwrapUtc(date, utcOffset)));
            } else {
              detail = new Date(unwrapUtc(event.detail, utcOffset));
            }
          }

          props.onConfirm({
            ...event,
            detail,
          });
        }
      }}
      onSelect={event => {
        if (props.onSelect) {
          let detail = event.detail;

          if (utcOffset) {
            if (Array.isArray(event.detail)) {
              detail = event.detail.map(date => new Date(unwrapUtc(date, utcOffset)));
            } else {
              detail = new Date(unwrapUtc(event.detail, utcOffset));
            }
          }

          props.onSelect({
            ...event,
            detail,
          });
        }
      }}
    />
  );
};

export {
  SmartCalendar,
  SmartCalendarEvents,
  SmartCalendarPoppableProps,
  SmartCalendarProps,
  SmartCalendarRangeProps,
  Day,
} from './PropTypes';
