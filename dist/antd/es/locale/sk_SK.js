var Pagination = {
  // Options.jsx
  items_per_page: '/ strana',
  jump_to: 'Choď na',
  jump_to_confirm: 'potvrdit',
  page: '',

  // Pagination.jsx
  prev_page: 'Predchádzajúca strana',
  next_page: 'Nasledujúca strana',
  prev_5: 'Predchádzajúcich 5 strán',
  next_5: 'Nasledujúcich 5 strán',
  prev_3: 'Predchádzajúce 3 strany',
  next_3: 'Nasledujúce 3 strany'
};

var CalendarLocale = {
  today: 'Dnes',
  now: 'Teraz',
  backToToday: 'Späť na dnes',
  ok: 'Ok',
  clear: 'Vymazať',
  month: 'Mesiac',
  year: 'Rok',
  timeSelect: 'Vybrať čas',
  dateSelect: 'Vybrať dátum',
  weekSelect: 'Vybrať týždeň',
  monthSelect: 'Vybrať mesiac',
  yearSelect: 'Vybrať rok',
  decadeSelect: 'Vybrať dekádu',
  yearFormat: 'YYYY',
  dateFormat: 'D.M.YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'D.M.YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Predchádzajúci mesiac (PageUp)',
  nextMonth: 'Nasledujúci mesiac (PageDown)',
  previousYear: 'Predchádzajúci rok (Control + left)',
  nextYear: 'Nasledujúci rok (Control + right)',
  previousDecade: 'Predchádzajúca dekáda',
  nextDecade: 'Nasledujúca dekáda',
  previousCentury: 'Predchádzajúce storočie',
  nextCentury: 'Nasledujúce storočie'
};

var locale$1 = {
  placeholder: 'Vybrať čas'
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var locale = {
  lang: _extends({
    placeholder: 'Vybrať dátum',
    rangePlaceholder: ['Od', 'Do']
  }, CalendarLocale),
  timePickerLocale: _extends({}, locale$1)
}; // All settings at:

var sk_SK = {
  locale: 'sk',
  Pagination: Pagination,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  global: {
    placeholder: 'Prosím vyberte'
  },
  Table: {
    filterTitle: 'Filter',
    filterConfirm: 'OK',
    filterReset: 'Obnoviť',
    selectAll: 'Vybrať všetko',
    selectInvert: 'Vybrať opačné',
    sortTitle: 'Zoradiť',
    expand: 'Rozbaliť riadok',
    collapse: 'Zbaliť riadok'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Zrušiť',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Zrušiť'
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Vyhľadávanie',
    itemUnit: 'položka',
    itemsUnit: 'položiek'
  },
  Upload: {
    uploading: 'Nahrávanie...',
    removeFile: 'Odstrániť súbor',
    uploadError: 'Chyba pri nahrávaní',
    previewFile: 'Zobraziť súbor',
    downloadFile: 'Stiahnuť súbor'
  },
  Empty: {
    description: 'Žiadne dáta'
  },
  Icon: {
    icon: 'ikona'
  },
  Text: {
    edit: 'Upraviť',
    copy: 'Kopírovať',
    copied: 'Skopírované',
    expand: 'Zväčšiť'
  },
  PageHeader: {
    back: 'Späť'
  }
};

export { sk_SK as default };
