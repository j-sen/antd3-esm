var Pagination = {
  // Options.jsx
  items_per_page: '/ Seite',
  jump_to: 'Gehe zu',
  jump_to_confirm: 'bestätigen',
  page: '',

  // Pagination.jsx
  prev_page: 'Vorherige Seite',
  next_page: 'Nächste Seite',
  prev_5: '5 Seiten zurück',
  next_5: '5 Seiten vor',
  prev_3: '3 Seiten zurück',
  next_3: '3 Seiten vor'
};

var CalendarLocale = {
  today: 'Heute',
  now: 'Jetzt',
  backToToday: 'Zurück zu Heute',
  ok: 'OK',
  clear: 'Zurücksetzen',
  month: 'Monat',
  year: 'Jahr',
  timeSelect: 'Zeit wählen',
  dateSelect: 'Datum wählen',
  monthSelect: 'Wähle einen Monat',
  yearSelect: 'Wähle ein Jahr',
  decadeSelect: 'Wähle ein Jahrzehnt',
  yearFormat: 'YYYY',
  dateFormat: 'D.M.YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'D.M.YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Vorheriger Monat (PageUp)',
  nextMonth: 'Nächster Monat (PageDown)',
  previousYear: 'Vorheriges Jahr (Ctrl + left)',
  nextYear: 'Nächstes Jahr (Ctrl + right)',
  previousDecade: 'Vorheriges Jahrzehnt',
  nextDecade: 'Nächstes Jahrzehnt',
  previousCentury: 'Vorheriges Jahrhundert',
  nextCentury: 'Nächstes Jahrhundert'
};

var locale$1 = {
  placeholder: 'Zeit auswählen'
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var locale = {
  lang: _extends({
    placeholder: 'Datum auswählen',
    rangePlaceholder: ['Startdatum', 'Enddatum']
  }, CalendarLocale),
  timePickerLocale: _extends({}, locale$1)
}; // All settings at:

var de_DE = {
  locale: 'de',
  Pagination: Pagination,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  Table: {
    filterTitle: 'Filter-Menü',
    filterConfirm: 'OK',
    filterReset: 'Zurücksetzen',
    selectAll: 'Selektiere Alle',
    selectInvert: 'Selektion Invertieren'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Abbrechen',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Abbrechen'
  },
  Transfer: {
    searchPlaceholder: 'Suchen',
    itemUnit: 'Eintrag',
    itemsUnit: 'Einträge'
  },
  Upload: {
    uploading: 'Hochladen...',
    removeFile: 'Datei entfernen',
    uploadError: 'Fehler beim Hochladen',
    previewFile: 'Dateivorschau',
    downloadFile: 'Download-Datei'
  },
  Empty: {
    description: 'Keine Daten'
  }
};

export { de_DE as default };
