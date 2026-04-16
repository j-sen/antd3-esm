var Pagination = {
  // Options.jsx
  items_per_page: '/ pàgina',
  jump_to: 'Anar a',
  jump_to_confirm: 'Confirma',
  page: '',

  // Pagination.jsx
  prev_page: 'Pàgina prèvia',
  next_page: 'Pàgina següent',
  prev_5: '5 pàgines prèvies',
  next_5: '5 pàgines següents',
  prev_3: '3 pàgines prèvies',
  next_3: '3 pàgines següents'
};

var CalendarLocale = {
  today: 'Avui',
  now: 'Ara',
  backToToday: 'Tornar a avui',
  ok: 'Acceptar',
  clear: 'Netejar',
  month: 'Mes',
  year: 'Any',
  timeSelect: 'Seleccionar hora',
  dateSelect: 'Seleccionar data',
  monthSelect: 'Escollir un mes',
  yearSelect: 'Escollir un any',
  decadeSelect: 'Escollir una dècada',
  yearFormat: 'YYYY',
  dateFormat: 'D/M/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'D/M/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Mes anterior (PageUp)',
  nextMonth: 'Mes següent (PageDown)',
  previousYear: 'Any anterior (Control + left)',
  nextYear: 'Mes següent (Control + right)',
  previousDecade: 'Dècada anterior',
  nextDecade: 'Dècada següent',
  previousCentury: 'Segle anterior',
  nextCentury: 'Segle següent'
};

var locale$1 = {
  placeholder: 'Seleccionar hora'
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var locale = {
  lang: _extends({
    placeholder: 'Seleccionar data',
    rangePlaceholder: ['Data inicial', 'Data final']
  }, CalendarLocale),
  timePickerLocale: _extends({}, locale$1)
}; // All settings at:

var ca_ES = {
  locale: 'ca',
  Pagination: Pagination,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  Table: {
    filterTitle: 'Filtrar Menu',
    filterConfirm: 'OK',
    filterReset: 'Restablir'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Cancel·lar',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Cancel·lar'
  },
  Transfer: {
    searchPlaceholder: 'Cercar aquí',
    itemUnit: 'item',
    itemsUnit: 'items'
  },
  Upload: {
    uploading: 'Carregant...',
    removeFile: 'Elimina el fitxer',
    uploadError: 'Error de càrrega',
    previewFile: 'Vista prèvia del fitxer',
    downloadFile: "Descarrega l'arxiu"
  },
  Empty: {
    description: 'Sense dades'
  }
};

export { ca_ES as default };
