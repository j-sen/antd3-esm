var Pagination = {
  // Options.jsx
  items_per_page: '/ rûpel',
  jump_to: 'Biçe',
  jump_to_confirm: 'piştrast bike',
  page: '',

  // Pagination.jsx
  prev_page: 'Rûpelê Pêş',
  next_page: 'Rûpelê Paş',
  prev_5: '5 Rûpelên Pêş',
  next_5: '5 Rûpelên Paş',
  prev_3: '3 Rûpelên Pêş',
  next_3: '3 Rûpelên Paş'
};

var CalendarLocale = {
  today: 'Îro',
  now: 'Niha',
  backToToday: 'Vegere îro',
  ok: 'Temam',
  clear: 'Paqij bike',
  month: 'Meh',
  year: 'Sal',
  timeSelect: 'Demê hilbijêre',
  dateSelect: 'Dîrok hilbijêre',
  monthSelect: 'Meh hilbijêre',
  yearSelect: 'Sal hilbijêre',
  decadeSelect: 'Dehsal hilbijêre',
  yearFormat: 'YYYY',
  dateFormat: 'D/M/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'D/M/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Meha peş (PageUp))',
  nextMonth: 'Meha paş (PageDown)',
  previousYear: 'Sala peş (Control + şep)',
  nextYear: 'Sala paş (Control + rast)',
  previousDecade: 'Dehsalen peş',
  nextDecade: 'Dehsalen paş',
  previousCentury: 'Sedsalen peş',
  nextCentury: 'Sedsalen paş'
};

var locale$1 = {
  placeholder: 'Demê hilbijêre'
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var locale = {
  lang: _extends({
    placeholder: 'Dîrok hilbijêre',
    rangePlaceholder: ['Dîroka destpêkê', 'Dîroka dawîn']
  }, CalendarLocale),
  timePickerLocale: _extends({}, locale$1)
}; // All settings at:

var ku_IQ = {
  locale: 'ku-iq',
  Pagination: Pagination,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  Table: {
    filterTitle: 'Menuê peldanka',
    filterConfirm: 'Temam',
    filterReset: 'Jê bibe',
    selectAll: 'Hemî hilbijêre',
    selectInvert: 'Hilbijartinan veguhere'
  },
  Modal: {
    okText: 'Temam',
    cancelText: 'Betal ke',
    justOkText: 'Temam'
  },
  Popconfirm: {
    okText: 'Temam',
    cancelText: 'Betal ke'
  },
  Transfer: {
    searchPlaceholder: 'Lêgerîn',
    itemUnit: 'tişt',
    itemsUnit: 'tişt'
  },
  Upload: {
    uploading: 'Bardike...',
    removeFile: 'Pelê rabike',
    uploadError: 'Xeta barkirine',
    previewFile: 'Pelê pêşbibîne',
    downloadFile: 'Pelê dakêşin'
  },
  Empty: {
    description: 'Agahî tune'
  }
};

export { ku_IQ as default };
