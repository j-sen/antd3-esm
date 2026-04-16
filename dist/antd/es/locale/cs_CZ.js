var Pagination = {
  // Options.jsx
  items_per_page: '/ strana',
  jump_to: 'Přejít',
  jump_to_confirm: 'potvrdit',
  page: '',

  // Pagination.jsx
  prev_page: 'Předchozí strana',
  next_page: 'Následující strana',
  prev_5: 'Předchozích 5 stran',
  next_5: 'Následujících 5 stran',
  prev_3: 'Předchozí 3 strany',
  next_3: 'Následující 3 strany'
};

var CalendarLocale = {
  today: 'Dnes',
  now: 'Nyní',
  backToToday: 'Zpět na dnešek',
  ok: 'Ok',
  clear: 'Vymazat',
  month: 'Měsíc',
  year: 'Rok',
  timeSelect: 'Vybrat čas',
  dateSelect: 'Vybrat datum',
  monthSelect: 'Vyberte měsíc',
  yearSelect: 'Vyberte rok',
  decadeSelect: 'Vyberte dekádu',
  yearFormat: 'YYYY',
  dateFormat: 'D.M.YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'D.M.YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Předchozí měsíc (PageUp)',
  nextMonth: 'Následující (PageDown)',
  previousYear: 'Předchozí rok (Control + left)',
  nextYear: 'Následující rok (Control + right)',
  previousDecade: 'Předchozí dekáda',
  nextDecade: 'Následující dekáda',
  previousCentury: 'Předchozí století',
  nextCentury: 'Následující století'
};

var locale$1 = {
  placeholder: 'Vybrat čas'
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var locale = {
  lang: _extends({
    placeholder: 'Vybrat datum',
    rangePlaceholder: ['Od', 'Do']
  }, CalendarLocale),
  timePickerLocale: _extends({}, locale$1)
}; // All settings at:

var cs_CZ = {
  locale: 'cs',
  Pagination: Pagination,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  Table: {
    filterTitle: 'Filtr',
    filterConfirm: 'Potvrdit',
    filterReset: 'Obnovit'
  },
  Modal: {
    okText: 'Ok',
    cancelText: 'Storno',
    justOkText: 'Ok'
  },
  Popconfirm: {
    okText: 'Ok',
    cancelText: 'Storno'
  },
  Transfer: {
    searchPlaceholder: 'Vyhledávání',
    itemUnit: 'položka',
    itemsUnit: 'položek'
  },
  Upload: {
    uploading: 'Nahrávání...',
    removeFile: 'Odstranit soubor',
    uploadError: 'Chyba při nahrávání',
    previewFile: 'Zobrazit soubor',
    downloadFile: 'Stáhnout soubor'
  },
  Empty: {
    description: 'Žádná data'
  }
};

export { cs_CZ as default };
