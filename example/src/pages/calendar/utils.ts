const formatDate = date => {
  if (date) {
    const myDate = new Date(date);

    return myDate.getMonth() + 1 + '/' + myDate.getDate();
  }
  return '';
};

const formatFullDate = date => {
  if (date) {
    const myDate = new Date(date);
    return myDate.getFullYear() + '/' + formatDate(date);
  }
  return '';
};

const formatMultiple = dates => {
  if (dates.length) {
    return '选择了 ' + dates.length + '个日期';
  }
  return '';
};

const formatRange = dateRange => {
  if (dateRange.length) {
    return formatDate(dateRange[0]) + ' - ' + formatDate(dateRange[1]);
  }
  return '';
};

module.exports = {
  formatDate: formatDate,
  formatFullDate: formatFullDate,
  formatMultiple: formatMultiple,
  formatRange: formatRange,
};
