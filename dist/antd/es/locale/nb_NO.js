var Pagination = {
  // Options.jsx
  items_per_page: '/ side',
  jump_to: 'Gå til side',
  page: '',

  // Pagination.jsx
  prev_page: 'Forrige side',
  next_page: 'Neste side',
  prev_5: '5 forrige',
  next_5: '5 neste',
  prev_3: '3 forrige',
  next_3: '3 neste'
};

var CalendarLocale = {
  today: 'I dag',
  now: 'Nå',
  backToToday: 'Gå til i dag',
  ok: 'Ok',
  clear: 'Annuller',
  month: 'Måned',
  year: 'År',
  timeSelect: 'Velg tidspunkt',
  dateSelect: 'Velg dato',
  monthSelect: 'Velg måned',
  yearSelect: 'Velg år',
  decadeSelect: 'Velg årti',
  yearFormat: 'YYYY',
  dateFormat: 'DD.MM.YYYY',
  dayFormat: 'DD',
  dateTimeFormat: 'DD.MM.YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Forrige måned(PageUp)',
  nextMonth: 'Neste måned (PageDown)',
  previousYear: 'Forrige år (Control + left)',
  nextYear: 'Neste år (Control + right)',
  previousDecade: 'Forrige tiår',
  nextDecade: 'Neste tiår',
  previousCentury: 'Forrige århundre',
  nextCentury: 'Neste århundre'
};

var locale$1 = {
  placeholder: 'Velg tid'
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var locale = {
  lang: _extends({
    placeholder: 'Velg dato',
    rangePlaceholder: ['Startdato', 'Sluttdato']
  }, CalendarLocale),
  timePickerLocale: _extends({}, locale$1)
}; // All settings at:

var nb_NO = {
  locale: 'nb',
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  Pagination: Pagination,
  Table: {
    filterTitle: 'Filtermeny',
    filterConfirm: 'OK',
    filterReset: 'Nullstill',
    selectAll: 'Velg alle',
    selectInvert: 'Inverter valg'
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
    searchPlaceholder: 'Søk her',
    itemUnit: 'element',
    itemsUnit: 'elementer'
  },
  Upload: {
    uploading: 'Laster opp...',
    removeFile: 'Fjern fil',
    uploadError: 'Feil ved opplastning',
    previewFile: 'Forhåndsvisning',
    downloadFile: 'Last ned fil'
  },
  Empty: {
    description: 'Ingen data'
  }
};

export { nb_NO as default };
