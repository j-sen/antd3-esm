var Pagination = {
  // Options.jsx
  items_per_page: '/ sida',
  jump_to: 'Gå till',
  jump_to_confirm: 'bekräfta',
  page: '',

  // Pagination.jsx
  prev_page: 'Föreg sida',
  next_page: 'Nästa sida',
  prev_5: 'Föreg 5 sidor',
  next_5: 'Nästa 5 sidor',
  prev_3: 'Föreg 3 sidor',
  next_3: 'Nästa 3 sidor'
};

var CalendarLocale = {
  today: 'I dag',
  now: 'Nu',
  backToToday: 'Till idag',
  ok: 'Ok',
  clear: 'Avbryt',
  month: 'Månad',
  year: 'År',
  timeSelect: 'Välj tidpunkt',
  dateSelect: 'Välj datum',
  monthSelect: 'Välj månad',
  yearSelect: 'Välj år',
  decadeSelect: 'Välj årtionde',
  yearFormat: 'YYYY',
  dateFormat: 'YYYY-MM-DD',
  dayFormat: 'D',
  dateTimeFormat: 'YYYY-MM-DD H:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Förra månaden (PageUp)',
  nextMonth: 'Nästa månad (PageDown)',
  previousYear: 'Föreg år (Control + left)',
  nextYear: 'Nästa år (Control + right)',
  previousDecade: 'Föreg årtionde',
  nextDecade: 'Nästa årtionde',
  previousCentury: 'Föreg århundrade',
  nextCentury: 'Nästa århundrade'
};

var locale$1 = {
  placeholder: 'Välj tid'
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var locale = {
  lang: _extends({
    placeholder: 'Välj datum',
    rangePlaceholder: ['Startdatum', 'Slutdatum']
  }, CalendarLocale),
  timePickerLocale: _extends({}, locale$1)
}; // All settings at:

var sv_SE = {
  locale: 'sv',
  Pagination: Pagination,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  Table: {
    filterTitle: 'Filtermeny',
    filterConfirm: 'OK',
    filterReset: 'Rensa'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Avbryt',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Avbryt'
  },
  Transfer: {
    searchPlaceholder: 'Sök',
    itemUnit: 'element',
    itemsUnit: 'element'
  },
  Empty: {
    description: 'Ingen information'
  },
  Text: {
    edit: 'editera',
    copy: 'kopiera',
    copied: 'kopierad',
    expand: 'expandera'
  },
  Upload: {
    uploading: 'Uppladdning...',
    removeFile: 'Ta bort fil',
    uploadError: 'Uppladdningsfel',
    previewFile: 'Förhandsgranska filen',
    downloadFile: 'Nedladdning fil'
  }
};

export { sv_SE as default };
