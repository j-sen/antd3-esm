var Pagination = {
  // Options.jsx
  items_per_page: '/ pagină',
  jump_to: 'Mergi la',
  jump_to_confirm: 'confirm',
  page: '',

  // Pagination.jsx
  prev_page: 'Pagina Anterioară',
  next_page: 'Pagina Următoare',
  prev_5: '5 Pagini Anterioare',
  next_5: '5 Pagini Următoare',
  prev_3: '3 Pagini Anterioare',
  next_3: '3 Pagini Următoare'
};

var CalendarLocale = {
  today: 'Azi',
  now: 'Acum',
  backToToday: 'Înapoi la azi',
  ok: 'Ok',
  clear: 'Șterge',
  month: 'Lună',
  year: 'An',
  timeSelect: 'selectează timpul',
  dateSelect: 'selectează data',
  weekSelect: 'Alege o săptămână',
  monthSelect: 'Alege o lună',
  yearSelect: 'Alege un an',
  decadeSelect: 'Alege un deceniu',
  yearFormat: 'YYYY',
  dateFormat: 'D/M/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'D/M/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Luna anterioară (PageUp)',
  nextMonth: 'Luna următoare (PageDown)',
  previousYear: 'Anul anterior (Control + stânga)',
  nextYear: 'Anul următor (Control + dreapta)',
  previousDecade: 'Deceniul anterior',
  nextDecade: 'Deceniul următor',
  previousCentury: 'Secolul anterior',
  nextCentury: 'Secolul următor'
};

var locale$1 = {
  placeholder: 'Selectează ora'
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var locale = {
  lang: _extends({
    placeholder: 'Selectează data',
    rangePlaceholder: ['Data start', 'Data sfârșit']
  }, CalendarLocale),
  timePickerLocale: _extends({}, locale$1)
}; // All settings at:

var ro_RO = {
  locale: 'ro',
  Pagination: Pagination,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  global: {
    placeholder: 'Selectează'
  },
  Table: {
    filterTitle: 'Filtrează',
    filterConfirm: 'OK',
    filterReset: 'Resetează',
    selectAll: 'Selectează pagina curentă',
    selectInvert: 'Inversează pagina curentă',
    sortTitle: 'Ordonează',
    expand: 'Extinde rândul',
    collapse: 'Micșorează rândul'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Anulare',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Anulare'
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Căutare',
    itemUnit: 'element',
    itemsUnit: 'elemente'
  },
  Upload: {
    uploading: 'Se transferă...',
    removeFile: 'Înlătură fișierul',
    uploadError: 'Eroare la upload',
    previewFile: 'Previzualizare fișier',
    downloadFile: 'Descărcare fișier'
  },
  Empty: {
    description: 'Fără date'
  },
  Icon: {
    icon: 'icon'
  },
  Text: {
    edit: 'editează',
    copy: 'copiază',
    copied: 'copiat',
    expand: 'extinde'
  },
  PageHeader: {
    back: 'înapoi'
  }
};

export { ro_RO as default };
