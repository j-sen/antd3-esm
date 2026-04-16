var Pagination = {
  // Options.jsx
  items_per_page: '/ oldal', // '/ page',
  jump_to: 'Ugrás', // 'Goto',
  jump_to_confirm: 'megerősít', // 'confirm',
  page: '',

  // Pagination.jsx
  prev_page: 'Előző oldal', // 'Previous Page',
  next_page: 'Következő oldal', // 'Next Page',
  prev_5: 'Előző 5 oldal', // 'Previous 5 Pages',
  next_5: 'Következő 5 oldal', // 'Next 5 Pages',
  prev_3: 'Előző 3 oldal', // 'Previous 3 Pages',
  next_3: 'Következő 3 oldal' // 'Next 3 Pages',
};

var CalendarLocale = {
  today: 'Ma', // 'Today',
  now: 'Most', // 'Now',
  backToToday: 'Vissza a mai napra', // 'Back to today',
  ok: 'Ok',
  clear: 'Törlés', // 'Clear',
  month: 'Hónap', // 'Month',
  year: 'Év', // 'Year',
  timeSelect: 'Időpont kiválasztása', // 'Select time',
  dateSelect: 'Dátum kiválasztása', // 'Select date',
  monthSelect: 'Hónap kiválasztása', // 'Choose a month',
  yearSelect: 'Év kiválasztása', // 'Choose a year',
  decadeSelect: 'Évtized kiválasztása', // 'Choose a decade',
  yearFormat: 'YYYY',
  dateFormat: 'YYYY/MM/DD', // 'M/D/YYYY',
  dayFormat: 'DD', // 'D',
  dateTimeFormat: 'YYYY/MM/DD HH:mm:ss', // 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Előző hónap (PageUp)', // 'Previous month (PageUp)',
  nextMonth: 'Következő hónap (PageDown)', // 'Next month (PageDown)',
  previousYear: 'Múlt év (Control + left)', // 'Last year (Control + left)',
  nextYear: 'Jövő év (Control + right)', // 'Next year (Control + right)',
  previousDecade: 'Előző évtized', // 'Last decade',
  nextDecade: 'Következő évtized', // 'Next decade',
  previousCentury: 'Múlt évszázad', // 'Last century',
  nextCentury: 'Jövő évszázad' // 'Next century',
};

var locale$1 = {
  placeholder: 'Válasszon időt'
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var locale = {
  lang: _extends({
    placeholder: 'Válasszon dátumot',
    rangePlaceholder: ['Kezdő dátum', 'Befejezés dátuma']
  }, CalendarLocale),
  timePickerLocale: _extends({}, locale$1)
}; // All settings at:

var hu_HU = {
  locale: 'hu',
  Pagination: Pagination,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  Table: {
    filterTitle: 'Szűrők',
    filterConfirm: 'Alkalmazás',
    filterReset: 'Visszaállítás',
    selectAll: 'Jelenlegi oldal kiválasztása',
    selectInvert: 'Jelenlegi oldal inverze',
    sortTitle: 'Rendezés'
  },
  Modal: {
    okText: 'Alkalmazás',
    cancelText: 'Visszavonás',
    justOkText: 'Alkalmazás'
  },
  Popconfirm: {
    okText: 'Alkalmazás',
    cancelText: 'Visszavonás'
  },
  Transfer: {
    searchPlaceholder: 'Keresés',
    itemUnit: 'elem',
    itemsUnit: 'elemek'
  },
  Upload: {
    uploading: 'Feltöltés...',
    removeFile: 'Fájl eltávolítása',
    uploadError: 'Feltöltési hiba',
    previewFile: 'Fájl előnézet',
    downloadFile: 'Fájl letöltése'
  },
  Empty: {
    description: 'Nincs adat'
  }
};

export { hu_HU as default };
