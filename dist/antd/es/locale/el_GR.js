var Pagination = {
  // Options.jsx
  items_per_page: '/ σελίδα',
  jump_to: 'Μετάβαση',
  jump_to_confirm: 'επιβεβαιώνω',
  page: '',

  // Pagination.jsx
  prev_page: 'Προηγούμενη Σελίδα',
  next_page: 'Επόμενη Σελίδα',
  prev_5: 'Προηγούμενες 5 Σελίδες',
  next_5: 'Επόμενες 5 σελίδες',
  prev_3: 'Προηγούμενες 3 Σελίδες',
  next_3: 'Επόμενες 3 Σελίδες'
};

var CalendarLocale = {
  today: 'Σήμερα',
  now: 'Τώρα',
  backToToday: 'Πίσω στη σημερινή μέρα',
  ok: 'Ok',
  clear: 'Καθαρισμός',
  month: 'Μήνας',
  year: 'Έτος',
  timeSelect: 'Επιλογή ώρας',
  dateSelect: 'Επιλογή ημερομηνίας',
  monthSelect: 'Επιλογή μήνα',
  yearSelect: 'Επιλογή έτους',
  decadeSelect: 'Επιλογή δεκαετίας',
  yearFormat: 'YYYY',
  dateFormat: 'D/M/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'D/M/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Προηγούμενος μήνας (PageUp)',
  nextMonth: 'Επόμενος μήνας (PageDown)',
  previousYear: 'Προηγούμενο έτος (Control + αριστερά)',
  nextYear: 'Επόμενο έτος (Control + δεξιά)',
  previousDecade: 'Προηγούμενη δεκαετία',
  nextDecade: 'Επόμενη δεκαετία',
  previousCentury: 'Προηγούμενος αιώνας',
  nextCentury: 'Επόμενος αιώνας'
};

var locale$1 = {
  placeholder: 'Επιλέξτε ώρα'
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var locale = {
  lang: _extends({
    placeholder: 'Επιλέξτε ημερομηνία',
    rangePlaceholder: ['Αρχική ημερομηνία', 'Τελική ημερομηνία']
  }, CalendarLocale),
  timePickerLocale: _extends({}, locale$1)
}; // All settings at:

var el_GR = {
  locale: 'el',
  Pagination: Pagination,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  Table: {
    filterTitle: 'Μενού φίλτρων',
    filterConfirm: 'ΟΚ',
    filterReset: 'Επαναφορά',
    selectAll: 'Επιλογή τρέχουσας σελίδας',
    selectInvert: 'Αντιστροφή τρέχουσας σελίδας'
  },
  Modal: {
    okText: 'ΟΚ',
    cancelText: 'Άκυρο',
    justOkText: 'ΟΚ'
  },
  Popconfirm: {
    okText: 'ΟΚ',
    cancelText: 'Άκυρο'
  },
  Transfer: {
    searchPlaceholder: 'Αναζήτηση',
    itemUnit: 'αντικείμενο',
    itemsUnit: 'αντικείμενα'
  },
  Upload: {
    uploading: 'Μεταφόρτωση...',
    removeFile: 'Αφαίρεση αρχείου',
    uploadError: 'Σφάλμα μεταφόρτωσης',
    previewFile: 'Προεπισκόπηση αρχείου',
    downloadFile: 'Λήψη αρχείου'
  },
  Empty: {
    description: 'Δεν υπάρχουν δεδομένα'
  }
};

export { el_GR as default };
