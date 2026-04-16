var Pagination = {
  // Options.jsx
  items_per_page: '/ leathanach',
  jump_to: 'Téigh',
  jump_to_confirm: 'dheimhnigh',
  page: '',

  // Pagination.jsx
  prev_page: 'Leathanach Roimhe Seo',
  next_page: 'An chéad leathanach eile',
  prev_5: '5 leathanach roimhe seo',
  next_5: 'Ar Aghaidh 5 Leathanaigh',
  prev_3: '3 leathanach roimhe seo',
  next_3: 'Ar Aghaidh 3 Leathanaigh'
};

var CalendarLocale = {
  today: 'inniu',
  now: 'anois',
  backToToday: 'Ar ais inniu',
  ok: 'ceart go leor',
  clear: 'soiléir',
  month: 'mhí',
  year: 'bhliain',
  timeSelect: 'roghnaigh am',
  dateSelect: 'roghnaigh dáta',
  weekSelect: 'Roghnaigh seachtain',
  monthSelect: 'Roghnaigh mí',
  yearSelect: 'Roghnaigh bliain',
  decadeSelect: 'Roghnaigh deich mbliana',
  yearFormat: 'YYYY',
  dateFormat: 'D/M/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'D/M/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'An mhí roimhe seo (PageUp)',
  nextMonth: 'An mhí seo chugainn (PageDown)',
  previousYear: 'Anuraidh (Control + left)',
  nextYear: 'An bhliain seo chugainn (Control + right)',
  previousDecade: 'Le deich mbliana anuas',
  nextDecade: 'Deich mbliana amach romhainn',
  previousCentury: 'An chéid seo caite',
  nextCentury: 'An chéad aois eile'
};

var locale$1 = {
  placeholder: 'Roghnaigh am'
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var locale = {
  lang: _extends({
    placeholder: 'Select date',
    rangePlaceholder: ['Start date', 'End date']
  }, CalendarLocale),
  timePickerLocale: _extends({}, locale$1)
}; // All settings at:

var ga_IE = {
  locale: 'ga_IE',
  Pagination: Pagination,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  Table: {
    filterTitle: 'Scagaire roghchlár',
    filterConfirm: 'Ceart go leor',
    filterReset: 'Athshocraigh',
    selectAll: 'Roghnaigh an leathanach reatha',
    selectInvert: 'Inbhéartaigh an leathanach reatha'
  },
  Modal: {
    okText: 'Ceart go leor',
    cancelText: 'Cealaigh',
    justOkText: 'Ceart go leor'
  },
  Popconfirm: {
    okText: 'Ceart go leor',
    cancelText: 'Cealaigh'
  },
  Transfer: {
    searchPlaceholder: 'Cuardaigh anseo',
    itemUnit: 'mír',
    itemsUnit: 'míreanna'
  },
  Upload: {
    uploading: 'Uaslódáil ...',
    removeFile: 'Bain comhad',
    uploadError: 'Earráid uaslódáil',
    previewFile: 'Comhad réamhamhairc',
    downloadFile: 'Íoslódáil an comhad'
  },
  Empty: {
    description: 'Gan aon sonraí'
  }
};

export { ga_IE as default };
