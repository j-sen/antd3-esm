var Pagination = {
  // Options.jsx
  items_per_page: '/ страница',
  jump_to: 'Към',
  jump_to_confirm: 'потвърждавам',
  page: '',

  // Pagination.jsx
  prev_page: 'Предишна страница',
  next_page: 'Следваща страница',
  prev_5: 'Предишни 5 страници',
  next_5: 'Следващи 5 страници',
  prev_3: 'Предишни 3 страници',
  next_3: 'Следващи 3 страници'
};

var CalendarLocale = {
  today: 'Днес',
  now: 'Сега',
  backToToday: 'Към днес',
  ok: 'Добре',
  clear: 'Изчистване',
  month: 'Месец',
  year: 'Година',
  timeSelect: 'Избор на час',
  dateSelect: 'Избор на дата',
  monthSelect: 'Избор на месец',
  yearSelect: 'Избор на година',
  decadeSelect: 'Десетилетие',
  yearFormat: 'YYYY',
  dateFormat: 'D M YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'D M YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Предишен месец (PageUp)',
  nextMonth: 'Следващ месец (PageDown)',
  previousYear: 'Последна година (Control + left)',
  nextYear: 'Следваща година (Control + right)',
  previousDecade: 'Предишно десетилетие',
  nextDecade: 'Следващо десетилетие',
  previousCentury: 'Последен век',
  nextCentury: 'Следващ век'
};

var locale$1 = {
  placeholder: 'Избор на час'
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var locale = {
  lang: _extends({
    placeholder: 'Избор на дата',
    rangePlaceholder: ['Начална', 'Крайна']
  }, CalendarLocale),
  timePickerLocale: _extends({}, locale$1)
}; // All settings at:

var bg_BG = {
  locale: 'bg',
  Pagination: Pagination,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  Table: {
    filterTitle: 'Филтриране',
    filterConfirm: 'Добре',
    filterReset: 'Нулриане',
    selectAll: 'Избор на текуща страница',
    selectInvert: 'Обръщане'
  },
  Modal: {
    okText: 'Добре',
    cancelText: 'Отказ',
    justOkText: 'Добре'
  },
  Popconfirm: {
    okText: 'Добре',
    cancelText: 'Отказ'
  },
  Transfer: {
    searchPlaceholder: 'Търсене',
    itemUnit: 'избор',
    itemsUnit: 'избори'
  },
  Upload: {
    uploading: 'Качване...',
    removeFile: 'Премахване',
    uploadError: 'Грешка при качването',
    previewFile: 'Преглед',
    downloadFile: 'Свали файл'
  },
  Empty: {
    description: 'Няма данни'
  }
};

export { bg_BG as default };
