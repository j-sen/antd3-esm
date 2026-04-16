var Pagination = {
  // Options.jsx
  items_per_page: '/ сторінці',
  jump_to: 'Перейти',
  jump_to_confirm: 'підтвердити',
  page: '',

  // Pagination.jsx
  prev_page: 'Попередня сторінка',
  next_page: 'Наступна сторінка',
  prev_5: 'Попередні 5 сторінок',
  next_5: 'Наступні 5 сторінок',
  prev_3: 'Попередні 3 сторінки',
  next_3: 'Наступні 3 сторінки'
};

var CalendarLocale = {
  today: 'Сьогодні',
  now: 'Зараз',
  backToToday: 'Поточна дата',
  ok: 'Ok',
  clear: 'Очистити',
  month: 'Місяць',
  year: 'Рік',
  timeSelect: 'Обрати час',
  dateSelect: 'Обрати дату',
  monthSelect: 'Обрати місяць',
  yearSelect: 'Обрати рік',
  decadeSelect: 'Обрати десятиріччя',
  yearFormat: 'YYYY',
  dateFormat: 'D-M-YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'D-M-YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Попередній місяць (PageUp)',
  nextMonth: 'Наступний місяць (PageDown)',
  previousYear: 'Попередній рік (Control + left)',
  nextYear: 'Наступний рік (Control + right)',
  previousDecade: 'Попереднє десятиріччя',
  nextDecade: 'Наступне десятиріччя',
  previousCentury: 'Попереднє століття',
  nextCentury: 'Наступне століття'
};

var locale$1 = {
  placeholder: 'Оберіть час'
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var locale = {
  lang: _extends({
    placeholder: 'Оберіть дату',
    rangePlaceholder: ['Початкова дата', 'Кінцева дата']
  }, CalendarLocale),
  timePickerLocale: _extends({}, locale$1)
}; // All settings at:

var uk_UA = {
  locale: 'uk',
  Pagination: Pagination,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  Table: {
    filterTitle: 'Фільтрувати',
    filterConfirm: 'OK',
    filterReset: 'Скинути',
    selectAll: 'Обрати всі',
    selectInvert: 'Інвертувати вибір'
  },
  Modal: {
    okText: 'Гаразд',
    cancelText: 'Скасувати',
    justOkText: 'Гаразд'
  },
  Popconfirm: {
    okText: 'Гаразд',
    cancelText: 'Скасувати'
  },
  Transfer: {
    searchPlaceholder: 'Введіть текст для пошуку',
    itemUnit: 'item',
    itemsUnit: 'items'
  },
  Upload: {
    uploading: 'Завантаження ...',
    removeFile: 'Видалити файл',
    uploadError: 'Помилка завантаження',
    previewFile: 'Попередній перегляд файлу',
    downloadFile: 'Завантажити файл'
  },
  Empty: {
    description: 'Даних немає'
  }
};

export { uk_UA as default };
