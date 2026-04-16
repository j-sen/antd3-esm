var Pagination = {
  // Options.jsx
  items_per_page: '/ lappuse',
  jump_to: 'iet uz',
  jump_to_confirm: 'apstiprināt',
  page: '',

  // Pagination.jsx
  prev_page: 'Iepriekšējā lapa',
  next_page: 'Nākamā lapaspuse',
  prev_5: 'Iepriekšējās 5 lapas',
  next_5: 'Nākamās 5 lapas',
  prev_3: 'Iepriekšējās 3 lapas',
  next_3: 'Nākamās 3 lapas'
};

var CalendarLocale = {
  today: 'Šodien',
  now: 'Tagad',
  backToToday: 'Atpakaļ pie šodienas',
  ok: 'Ok',
  clear: 'Skaidrs',
  month: 'Mēnesis',
  year: 'Gads',
  timeSelect: 'Izvēlieties laiku',
  dateSelect: 'Izvēlieties datumu',
  monthSelect: 'Izvēlieties mēnesi',
  yearSelect: 'Izvēlieties gadu',
  decadeSelect: 'Izvēlieties desmit gadus',
  yearFormat: 'YYYY',
  dateFormat: 'D.M.YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'D.M.YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Iepriekšējais mēnesis (PageUp)',
  nextMonth: 'Nākammēnes (PageDown)',
  previousYear: 'Pagājušais gads (Control + left)',
  nextYear: 'Nākamgad (Control + right)',
  previousDecade: 'Pēdējā desmitgadē',
  nextDecade: 'Nākamā desmitgade',
  previousCentury: 'Pagājušajā gadsimtā',
  nextCentury: 'Nākamajā gadsimtā'
};

var locale$1 = {
  placeholder: 'Izvēlieties laiku'
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var locale = {
  lang: _extends({
    placeholder: 'Izvēlieties datumu',
    rangePlaceholder: ['Sākuma datums', 'Beigu datums']
  }, CalendarLocale),
  timePickerLocale: _extends({}, locale$1)
}; // All settings at:

var lv_LV = {
  locale: 'lv',
  Pagination: Pagination,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  Table: {
    filterTitle: 'Filtrēšanas izvēlne',
    filterConfirm: 'OK',
    filterReset: 'Atiestatīt',
    selectAll: 'Atlasiet pašreizējo lapu',
    selectInvert: 'Pārvērst pašreizējo lapu'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Atcelt',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Atcelt'
  },
  Transfer: {
    searchPlaceholder: 'Meklēt šeit',
    itemUnit: 'vienumu',
    itemsUnit: 'vienumus'
  },
  Upload: {
    uploading: 'Augšupielāde...',
    removeFile: 'Noņemt failu',
    uploadError: 'Augšupielādes kļūda',
    previewFile: 'Priekšskatiet failu',
    downloadFile: 'Lejupielādēt failu'
  },
  Empty: {
    description: 'Nav datu'
  }
};

export { lv_LV as default };
