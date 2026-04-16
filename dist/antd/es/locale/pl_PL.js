var Pagination = {
  // Options.jsx
  items_per_page: '/ stronę',
  jump_to: 'Idź do',
  jump_to_confirm: 'potwierdzać',
  page: '',

  // Pagination.jsx
  prev_page: 'Poprzednia strona',
  next_page: 'Następna strona',
  prev_5: 'Poprzednie 5 stron',
  next_5: 'Następne 5 stron',
  prev_3: 'Poprzednie 3 strony',
  next_3: 'Następne 3 strony'
};

var CalendarLocale = {
  today: 'Dzisiaj',
  now: 'Teraz',
  backToToday: 'Ustaw dzisiaj',
  ok: 'Ok',
  clear: 'Wyczyść',
  month: 'Miesiąc',
  year: 'Rok',
  timeSelect: 'Ustaw czas',
  dateSelect: 'Ustaw datę',
  monthSelect: 'Wybierz miesiąc',
  yearSelect: 'Wybierz rok',
  decadeSelect: 'Wybierz dekadę',
  yearFormat: 'YYYY',
  dateFormat: 'D/M/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'D/M/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Poprzedni miesiąc (PageUp)',
  nextMonth: 'Następny miesiąc (PageDown)',
  previousYear: 'Ostatni rok (Ctrl + left)',
  nextYear: 'Następny rok (Ctrl + right)',
  previousDecade: 'Ostatnia dekada',
  nextDecade: 'Następna dekada',
  previousCentury: 'Ostatni wiek',
  nextCentury: 'Następny wiek'
};

var locale$1 = {
  placeholder: 'Wybierz godzinę'
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var locale = {
  lang: _extends({
    placeholder: 'Wybierz datę',
    rangePlaceholder: ['Data początkowa', 'Data końcowa']
  }, CalendarLocale),
  timePickerLocale: _extends({}, locale$1)
}; // All settings at:

var pl_PL = {
  locale: 'pl',
  Pagination: Pagination,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  Table: {
    filterTitle: 'Menu filtra',
    filterConfirm: 'OK',
    filterReset: 'Wyczyść',
    selectAll: 'Zaznacz bieżącą stronę',
    selectInvert: 'Odwróć zaznaczenie'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Anuluj',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Anuluj'
  },
  Transfer: {
    searchPlaceholder: 'Szukaj',
    itemUnit: 'obiekt',
    itemsUnit: 'obiekty'
  },
  Upload: {
    uploading: 'Wysyłanie...',
    removeFile: 'Usuń plik',
    uploadError: 'Błąd wysyłania',
    previewFile: 'Podejrzyj plik',
    downloadFile: 'Pobieranie pliku'
  },
  Empty: {
    description: 'Brak danych'
  }
};

export { pl_PL as default };
