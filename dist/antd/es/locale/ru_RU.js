var Pagination = {
  // Options.jsx
  items_per_page: '/ стр.',
  jump_to: 'Перейти',
  jump_to_confirm: 'подтвердить',
  page: '',

  // Pagination.jsx
  prev_page: 'Назад',
  next_page: 'Вперед',
  prev_5: 'Предыдущие 5',
  next_5: 'Следующие 5',
  prev_3: 'Предыдущие 3',
  next_3: 'Следующие 3'
};

var CalendarLocale = {
  today: 'Сегодня',
  now: 'Сейчас',
  backToToday: 'Текущая дата',
  ok: 'Ok',
  clear: 'Очистить',
  month: 'Месяц',
  year: 'Год',
  timeSelect: 'Выбрать время',
  dateSelect: 'Выбрать дату',
  monthSelect: 'Выбрать месяц',
  yearSelect: 'Выбрать год',
  decadeSelect: 'Выбрать десятилетие',
  yearFormat: 'YYYY',
  dateFormat: 'D-M-YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'D-M-YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Предыдущий месяц (PageUp)',
  nextMonth: 'Следующий месяц (PageDown)',
  previousYear: 'Предыдущий год (Control + left)',
  nextYear: 'Следующий год (Control + right)',
  previousDecade: 'Предыдущее десятилетие',
  nextDecade: 'Следущее десятилетие',
  previousCentury: 'Предыдущий век',
  nextCentury: 'Следующий век'
};

/**
 * Created by Andrey Gayvoronsky on 13/04/16.
 */
var locale$1 = {
  placeholder: 'Выберите время'
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var locale = {
  lang: _extends({
    placeholder: 'Выберите дату',
    rangePlaceholder: ['Начальная дата', 'Конечная дата']
  }, CalendarLocale),
  timePickerLocale: _extends({}, locale$1)
}; // All settings at:

var ru_RU = {
  locale: 'ru',
  Pagination: Pagination,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  Table: {
    filterTitle: 'Фильтр',
    filterConfirm: 'OK',
    filterReset: 'Сбросить',
    selectAll: 'Выбрать всё',
    selectInvert: 'Инвертировать выбор',
    sortTitle: 'Сортировка'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Отмена',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Отмена'
  },
  Transfer: {
    searchPlaceholder: 'Поиск',
    itemUnit: 'элем.',
    itemsUnit: 'элем.'
  },
  Upload: {
    uploading: 'Загрузка...',
    removeFile: 'Удалить файл',
    uploadError: 'При загрузке произошла ошибка',
    previewFile: 'Предпросмотр файла',
    downloadFile: 'Загрузить файл'
  },
  Empty: {
    description: 'Нет данных'
  },
  Text: {
    edit: 'редактировать',
    copy: 'копировать',
    copied: 'скопировано',
    expand: 'раскрыть'
  },
  PageHeader: {
    back: 'назад'
  }
};

export { ru_RU as default };
