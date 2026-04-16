var Pagination = {
  // Options.jsx
  items_per_page: '/ strani',
  jump_to: 'Pojdi na',
  jump_to_confirm: 'potrdi',
  page: '',

  // Pagination.jsx
  prev_page: 'Prejšnja stran',
  next_page: 'Naslednja stran',
  prev_5: 'Prejšnjih 5 strani',
  next_5: 'Naslednjih 5 strani',
  prev_3: 'Prejšnje 3 strani',
  next_3: 'Naslednje 3 strani'
};

var locale$1 = {
  placeholder: 'Izberite čas'
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var locale = {
  lang: {
    placeholder: 'Izberite datum',
    rangePlaceholder: ['Začetni datum', 'Končni datum'],
    today: 'Danes',
    now: 'Trenutno',
    backToToday: 'Nazaj na trenutni datum',
    ok: 'Ok',
    clear: 'Počisti',
    month: 'Mesec',
    year: 'Leto',
    timeSelect: 'Izberi čas',
    dateSelect: 'Izberi datum',
    monthSelect: 'Izberite mesec',
    yearSelect: 'Izberite leto',
    decadeSelect: 'Izberite desetletje',
    yearFormat: 'YYYY',
    dateFormat: 'D.M.YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'D.M.YYYY HH:mm:ss',
    monthFormat: 'MMMM',
    monthBeforeYear: true,
    previousMonth: 'Prejšnji mesec (PageUp)',
    nextMonth: 'Naslednji mesec (PageDown)',
    previousYear: 'Lansko leto (Control + left)',
    nextYear: 'Naslednje leto (Control + right)',
    previousDecade: 'Prejšnje desetletje',
    nextDecade: 'Naslednje desetletje',
    previousCentury: 'Zadnje stoletje',
    nextCentury: 'Naslednje stoletje'
  },
  timePickerLocale: _extends({}, locale$1)
}; // All settings at:

var sl_SI = {
  locale: 'sl',
  Pagination: Pagination,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  Table: {
    filterTitle: 'Filter',
    filterConfirm: 'Filtriraj',
    filterReset: 'Pobriši filter',
    selectAll: 'Izberi vse na trenutni strani',
    selectInvert: 'Obrni izbor na trenutni strani'
  },
  Modal: {
    okText: 'V redu',
    cancelText: 'Prekliči',
    justOkText: 'V redu'
  },
  Popconfirm: {
    okText: 'v redu',
    cancelText: 'Prekliči'
  },
  Transfer: {
    searchPlaceholder: 'Išči tukaj',
    itemUnit: 'Objekt',
    itemsUnit: 'Objektov'
  },
  Upload: {
    uploading: 'Nalaganje...',
    removeFile: 'Odstrani datoteko',
    uploadError: 'Napaka pri nalaganju',
    previewFile: 'Predogled datoteke',
    downloadFile: 'Prenos datoteke'
  },
  Empty: {
    description: 'Ni podatkov'
  }
};

export { sl_SI as default };
