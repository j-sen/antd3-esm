var Pagination = {
  // Options.jsx
  items_per_page: '/ leheküljel',
  jump_to: 'Hüppa',
  jump_to_confirm: 'Kinnitage',
  page: '',

  // Pagination.jsx
  prev_page: 'Eelmine leht',
  next_page: 'Järgmine leht',
  prev_5: 'Eelmised 5 lehekülge',
  next_5: 'Järgmised 5 lehekülge',
  prev_3: 'Eelmised 3 lehekülge',
  next_3: 'Järgmised 3 lehekülge'
};

var CalendarLocale = {
  today: 'Täna',
  now: 'Praegu',
  backToToday: 'Tagasi tänase juurde',
  ok: 'Ok',
  clear: 'Tühista',
  month: 'Kuu',
  year: 'Aasta',
  timeSelect: 'Vali aeg',
  dateSelect: 'Vali kuupäev',
  monthSelect: 'Vali kuu',
  yearSelect: 'Vali aasta',
  decadeSelect: 'Vali dekaad',
  yearFormat: 'YYYY',
  dateFormat: 'D.M.YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'D.M.YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Eelmine kuu (PageUp)',
  nextMonth: 'Järgmine kuu (PageDown)',
  previousYear: 'Eelmine aasta (Control + left)',
  nextYear: 'Järgmine aasta (Control + right)',
  previousDecade: 'Eelmine dekaad',
  nextDecade: 'Järgmine dekaad',
  previousCentury: 'Eelmine sajand',
  nextCentury: 'Järgmine sajand'
};

var locale$1 = {
  placeholder: 'Vali aeg'
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var locale = {
  lang: _extends({
    placeholder: 'Vali kuupäev',
    rangePlaceholder: ['Algus kuupäev', 'Lõpu kuupäev']
  }, CalendarLocale),
  timePickerLocale: _extends({}, locale$1)
}; // All settings at:

var et_EE = {
  locale: 'et',
  Pagination: Pagination,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  Table: {
    filterTitle: 'Filtri menüü',
    filterConfirm: 'OK',
    filterReset: 'Nulli',
    selectAll: 'Vali kõik',
    selectInvert: 'Inverteeri valik'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Tühista',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Tühista'
  },
  Transfer: {
    searchPlaceholder: 'Otsi siit',
    itemUnit: 'kogus',
    itemsUnit: 'kogus'
  },
  Upload: {
    uploading: 'Üleslaadimine...',
    removeFile: 'Eemalda fail',
    uploadError: 'Üleslaadimise tõrge',
    previewFile: 'Faili eelvaade',
    downloadFile: 'Laadige fail alla'
  },
  Empty: {
    description: 'Andmed puuduvad'
  }
};

export { et_EE as default };
