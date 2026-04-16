var Pagination = {
  // Options.jsx
  items_per_page: '/ pagina',
  jump_to: 'Ga naar',
  jump_to_confirm: 'bevestigen',
  page: '',

  // Pagination.jsx
  prev_page: 'Vorige pagina',
  next_page: 'Volgende pagina',
  prev_5: 'Vorige 5 pagina\'s',
  next_5: 'Volgende 5 pagina\'s',
  prev_3: 'Vorige 3 pagina\'s',
  next_3: 'Volgende 3 pagina\'s'
};

var CalendarLocale = {
  today: 'Vandaag',
  now: 'Nu',
  backToToday: 'Terug naar vandaag',
  ok: 'Ok',
  clear: 'Reset',
  month: 'Maand',
  year: 'Jaar',
  timeSelect: 'Selecteer tijd',
  dateSelect: 'Selecteer datum',
  monthSelect: 'Kies een maand',
  yearSelect: 'Kies een jaar',
  decadeSelect: 'Kies een decennium',
  yearFormat: 'YYYY',
  dateFormat: 'D-M-YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'D-M-YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Vorige maand (PageUp)',
  nextMonth: 'Volgende maand (PageDown)',
  previousYear: 'Vorig jaar (Control + left)',
  nextYear: 'Volgend jaar (Control + right)',
  previousDecade: 'Vorig decennium',
  nextDecade: 'Volgend decennium',
  previousCentury: 'Vorige eeuw',
  nextCentury: 'Volgende eeuw'
};

var locale$1 = {
  placeholder: 'Selecteer tijd'
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var locale = {
  lang: _extends({
    placeholder: 'Selecteer datum',
    rangePlaceholder: ['Begin datum', 'Eind datum']
  }, CalendarLocale),
  timePickerLocale: _extends({}, locale$1)
}; // All settings at:

var nl_BE = {
  locale: 'nl-be',
  Pagination: Pagination,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  Table: {
    filterTitle: 'FilterMenu',
    filterConfirm: 'OK',
    filterReset: 'Reset',
    selectAll: 'Selecteer huidige pagina',
    selectInvert: 'Selecteer huidige pagina'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Annuleer',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Annuleer'
  },
  Transfer: {
    searchPlaceholder: 'Zoek hier',
    itemUnit: 'item',
    itemsUnit: 'items'
  },
  Upload: {
    uploading: 'Uploaden...',
    removeFile: 'Bestand verwijderen',
    uploadError: 'Upload fout',
    previewFile: 'Preview bestand',
    downloadFile: 'Download bestand'
  },
  Empty: {
    description: 'Geen gegevens'
  }
};

export { nl_BE as default };
