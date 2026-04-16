var Pagination = {
  // Options.jsx
  items_per_page: '/ strani',
  jump_to: 'Idi na',
  page: '',

  // Pagination.jsx
  prev_page: 'Prethodna strana',
  next_page: 'Sledeća strana',
  prev_5: 'Prethodnih 5 Strana',
  next_5: 'Sledećih 5 Strana',
  prev_3: 'Prethodnih 3 Strane',
  next_3: 'Sledećih 3 Strane'
};

var CalendarLocale = {
  today: 'Danas',
  now: 'Sada',
  backToToday: 'Vrati se na danas',
  ok: 'U redu',
  clear: 'Obriši',
  month: 'Mesec',
  year: 'Godina',
  timeSelect: 'Izaberi vreme',
  dateSelect: 'Izaberi datum',
  monthSelect: 'Izaberi mesec',
  yearSelect: 'Izaberi godinu',
  decadeSelect: 'Izaberi deceniju',
  yearFormat: 'YYYY',
  dateFormat: 'DD.MM.YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'DD.MM.YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Prethodni mesec (PageUp)',
  nextMonth: 'Sledeći mesec (PageDown)',
  previousYear: 'Prethodna godina (Control + left)',
  nextYear: 'Sledeća godina (Control + right)',
  previousDecade: 'Prethodna decenija',
  nextDecade: 'Sledeća decenija',
  previousCentury: 'Prethodni vek',
  nextCentury: 'Sledeći vek'
};

var locale$1 = {
  placeholder: 'Izaberite vreme'
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var locale = {
  lang: _extends({
    placeholder: 'Izaberite datum',
    rangePlaceholder: ['Početni datum', 'Krajnji datum']
  }, CalendarLocale),
  timePickerLocale: _extends({}, locale$1)
}; // All settings at:

var sr_RS = {
  locale: 'sr',
  Pagination: Pagination,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  Table: {
    filterTitle: 'Filter',
    filterConfirm: 'Primeni filter',
    filterReset: 'Resetuj filter',
    selectAll: 'Obeleži sve na trenutnoj strani',
    selectInvert: 'Obrni selekciju na trenutnoj stranici'
  },
  Modal: {
    okText: 'U redu',
    cancelText: 'Otkaži',
    justOkText: 'U redu'
  },
  Popconfirm: {
    okText: 'U redu',
    cancelText: 'Otkaži'
  },
  Transfer: {
    searchPlaceholder: 'Pretražite ovde',
    itemUnit: 'stavka',
    itemsUnit: 'stavki'
  },
  Upload: {
    uploading: 'Slanje...',
    removeFile: 'Ukloni fajl',
    uploadError: 'Greška prilikom slanja',
    previewFile: 'Pogledaj fajl',
    downloadFile: 'Preuzmi datoteku'
  },
  Empty: {
    description: 'Nema podataka'
  }
};

export { sr_RS as default };
