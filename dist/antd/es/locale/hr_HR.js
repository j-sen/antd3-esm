var Pagination = {
  // Options.jsx
  items_per_page: '/ str',
  jump_to: 'Idi na',
  jump_to_confirm: 'potvrdi',
  page: '',

  // Pagination.jsx
  prev_page: 'Prijašnja stranica',
  next_page: 'Sljedeća stranica',
  prev_5: 'Prijašnjih 5 stranica',
  next_5: 'Sljedećih 5 stranica',
  prev_3: 'Prijašnje 3 stranice',
  next_3: 'Sljedeće 3 stranice'
};

var CalendarLocale = {
  today: 'Danas',
  now: 'Sad',
  backToToday: 'Natrag na danas',
  ok: 'Ok',
  clear: 'Očisti',
  month: 'Mjesec',
  year: 'Godina',
  timeSelect: 'odaberite vrijeme',
  dateSelect: 'odaberite datum',
  weekSelect: 'Odaberite tjedan',
  monthSelect: 'Odaberite mjesec',
  yearSelect: 'Odaberite godinu',
  decadeSelect: 'Odaberite desetljeće',
  yearFormat: 'YYYY',
  dateFormat: 'D.M.YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'D.M.YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Prošli mjesec (PageUp)',
  nextMonth: 'Sljedeći mjesec (PageDown)',
  previousYear: 'Prošla godina (Control + left)',
  nextYear: 'Sljedeća godina (Control + right)',
  previousDecade: 'Prošlo desetljeće',
  nextDecade: 'Sljedeće desetljeće',
  previousCentury: 'Prošlo stoljeće',
  nextCentury: 'Sljedeće stoljeće'
};

var locale$1 = {
  placeholder: 'Odaberite vrijeme'
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var locale = {
  lang: _extends({
    placeholder: 'Odaberite datum',
    rangePlaceholder: ['Početni datum', 'Završni datum']
  }, CalendarLocale),
  timePickerLocale: _extends({}, locale$1)
}; // All settings at:

var hr_HR = {
  locale: 'hr',
  Pagination: Pagination,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  global: {
    placeholder: 'Molimo označite'
  },
  Table: {
    filterTitle: 'Filter meni',
    filterConfirm: 'OK',
    filterReset: 'Reset',
    selectAll: 'Označi trenutnu stranicu',
    selectInvert: 'Invertiraj trenutnu stranicu',
    sortTitle: 'Sortiraj'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Odustani',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Odustani'
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Pretraži ovdje',
    itemUnit: 'stavka',
    itemsUnit: 'stavke'
  },
  Upload: {
    uploading: 'Upload u tijeku...',
    removeFile: 'Makni datoteku',
    uploadError: 'Greška kod uploada',
    previewFile: 'Pogledaj datoteku',
    downloadFile: 'Preuzmi datoteku'
  },
  Empty: {
    description: 'Nema podataka'
  },
  Icon: {
    icon: 'ikona'
  },
  Text: {
    edit: 'uredi',
    copy: 'kopiraj',
    copied: 'kopiranje uspješno',
    expand: 'proširi'
  }
};

export { hr_HR as default };
