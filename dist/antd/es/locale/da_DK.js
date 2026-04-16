var Pagination = {
  // Options.jsx
  items_per_page: '/ side',
  jump_to: 'Gå til',
  jump_to_confirm: 'bekræft',
  page: '',

  // Pagination.jsx
  prev_page: 'Forrige Side',
  next_page: 'Næste Side',
  prev_5: 'Forrige 5 Sider',
  next_5: 'Næste 5 Sider',
  prev_3: 'Forrige 3 Sider',
  next_3: 'Næste 3 Sider'
};

var CalendarLocale = {
  today: 'I dag',
  now: 'Nu',
  backToToday: 'Gå til i dag',
  ok: 'Ok',
  clear: 'Annuller',
  month: 'Måned',
  year: 'År',
  timeSelect: 'Vælg tidspunkt',
  dateSelect: 'Vælg dato',
  monthSelect: 'Vælg måned',
  yearSelect: 'Vælg år',
  decadeSelect: 'Vælg årti',
  yearFormat: 'YYYY',
  dateFormat: 'D/M/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'D/M/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Forrige måned(PageUp)',
  nextMonth: 'Næste måned (PageDown)',
  previousYear: 'Forrige år (Control + left)',
  nextYear: 'Næste r (Control + right)',
  previousDecade: 'Forrige årti',
  nextDecade: 'Næste årti',
  previousCentury: 'Forrige århundrede',
  nextCentury: 'Næste århundrede'
};

var locale$1 = {
  placeholder: 'Vælg tid'
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var locale = {
  lang: _extends({
    placeholder: 'Vælg dato',
    rangePlaceholder: ['Startdato', 'Slutdato']
  }, CalendarLocale),
  timePickerLocale: _extends({}, locale$1)
}; // All settings at:

var da_DK = {
  locale: 'da',
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  Pagination: Pagination,
  Table: {
    filterTitle: 'Filtermenu',
    filterConfirm: 'OK',
    filterReset: 'Nulstil',
    selectAll: 'Vælg alle',
    selectInvert: 'Inverter valg'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Afbryd',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Afbryd'
  },
  Transfer: {
    searchPlaceholder: 'Søg her',
    itemUnit: 'element',
    itemsUnit: 'elementer'
  },
  Upload: {
    uploading: 'Uploader...',
    removeFile: 'Fjern fil',
    uploadError: 'Fejl ved upload',
    previewFile: 'Forhåndsvisning',
    downloadFile: 'Download fil'
  },
  Empty: {
    description: 'Ingen data'
  }
};

export { da_DK as default };
