var Pagination = {
  // Options.jsx
  items_per_page: '/ síðu',
  jump_to: 'Síða',
  jump_to_confirm: 'staðfest',
  page: '',

  // Pagination.jsx
  prev_page: 'Fyrri síða',
  next_page: 'Næsta síða',
  prev_5: 'Til baka 5 síður',
  next_5: 'Áfram 5 síður',
  prev_3: 'Til baka 3 síður',
  next_3: 'Áfram 3 síður'
};

var CalendarLocale = {
  today: 'Í dag',
  now: 'Núna',
  backToToday: 'Til baka til dagsins í dag',
  ok: 'Í lagi',
  clear: 'Hreinsa',
  month: 'Mánuður',
  year: 'Ár',
  timeSelect: 'Velja tíma',
  dateSelect: 'Velja dag',
  monthSelect: 'Velja mánuð',
  yearSelect: 'Velja ár',
  decadeSelect: 'Velja áratug',
  yearFormat: 'YYYY',
  dateFormat: 'D/M/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'D/M/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Fyrri mánuður (PageUp)',
  nextMonth: 'Næsti mánuður (PageDown)',
  previousYear: 'Fyrra ár (Control + left)',
  nextYear: 'Næsta ár (Control + right)',
  previousDecade: 'Fyrri áratugur',
  nextDecade: 'Næsti áratugur',
  previousCentury: 'Fyrri öld',
  nextCentury: 'Næsta öld'
};

var locale$1 = {
  placeholder: 'Velja tíma'
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var locale = {
  lang: _extends({
    placeholder: 'Veldu dag',
    rangePlaceholder: ['Upphafsdagur', 'Lokadagur']
  }, CalendarLocale),
  timePickerLocale: _extends({}, locale$1)
}; // All settings at:

var is_IS = {
  locale: 'is',
  Pagination: Pagination,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  Table: {
    filterTitle: 'Afmarkanir',
    filterConfirm: 'Staðfesta',
    filterReset: 'Núllstilla',
    selectAll: 'Velja allt',
    selectInvert: 'Viðsnúa vali'
  },
  Modal: {
    okText: 'Áfram',
    cancelText: 'Hætta við',
    justOkText: 'Í lagi'
  },
  Popconfirm: {
    okText: 'Áfram',
    cancelText: 'Hætta við'
  },
  Transfer: {
    searchPlaceholder: 'Leita hér',
    itemUnit: 'færsla',
    itemsUnit: 'færslur'
  },
  Upload: {
    uploading: 'Hleð upp...',
    removeFile: 'Fjarlægja skrá',
    uploadError: 'Villa við að hlaða upp',
    previewFile: 'Forskoða skrá',
    downloadFile: 'Hlaða niður skrá'
  },
  Empty: {
    description: 'Engin gögn'
  }
};

export { is_IS as default };
