var Pagination = {
  // Options.jsx
  items_per_page: '/ sivu',
  jump_to: 'Mene',
  jump_to_confirm: 'Potvrdite',
  page: '',

  // Pagination.jsx
  prev_page: 'Edellinen sivu',
  next_page: 'Seuraava sivu',
  prev_5: 'Edelliset 5 sivua',
  next_5: 'Seuraavat 5 sivua',
  prev_3: 'Edelliset 3 sivua',
  next_3: 'Seuraavat 3 sivua'
};

var CalendarLocale = {
  today: 'Tänään',
  now: 'Nyt',
  backToToday: 'Tämä päivä',
  ok: 'Ok',
  clear: 'Tyhjennä',
  month: 'Kuukausi',
  year: 'Vuosi',
  timeSelect: 'Valise aika',
  dateSelect: 'Valitse päivä',
  monthSelect: 'Valitse kuukausi',
  yearSelect: 'Valitse vuosi',
  decadeSelect: 'Valitse vuosikymmen',
  yearFormat: 'YYYY',
  dateFormat: 'D.M.YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'D.M.YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Edellinen kuukausi (PageUp)',
  nextMonth: 'Seuraava kuukausi (PageDown)',
  previousYear: 'Edellinen vuosi (Control + left)',
  nextYear: 'Seuraava vuosi (Control + right)',
  previousDecade: 'Edellinen vuosikymmen',
  nextDecade: 'Seuraava vuosikymmen',
  previousCentury: 'Edellinen vuosisata',
  nextCentury: 'Seuraava vuosisata'
};

var locale$1 = {
  placeholder: 'Valitse aika'
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var locale = {
  lang: _extends({
    placeholder: 'Valitse päivä',
    rangePlaceholder: ['Alku päivä', 'Loppu päivä']
  }, CalendarLocale),
  timePickerLocale: _extends({}, locale$1)
}; // All settings at:

var fi_FI = {
  locale: 'fi',
  Pagination: Pagination,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  Table: {
    filterTitle: 'Suodatus valikko',
    filterConfirm: 'OK',
    filterReset: 'Tyhjennä',
    selectAll: 'Valitse kaikki',
    selectInvert: 'Valitse päinvastoin',
    sortTitle: 'Lajittele'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Peruuta',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Peruuta'
  },
  Transfer: {
    searchPlaceholder: 'Etsi täältä',
    itemUnit: 'kohde',
    itemsUnit: 'kohdetta'
  },
  Upload: {
    uploading: 'Lähetetään...',
    removeFile: 'Poista tiedosto',
    uploadError: 'Virhe lähetyksessä',
    previewFile: 'Esikatsele tiedostoa',
    downloadFile: 'Lataa tiedosto'
  },
  Empty: {
    description: 'Ei kohteita'
  }
};

export { fi_FI as default };
