var Pagination = {
  // Options.jsx
  items_per_page: '/ halaman',
  jump_to: 'Lompat ke',
  jump_to_confirm: 'Sahkan',
  page: '',

  // Pagination.jsx
  prev_page: 'Halaman sebelumnya',
  next_page: 'Halam seterusnya',
  prev_5: '5 halaman sebelum',
  next_5: '5 halaman seterusnya',
  prev_3: '3 halaman sebelumnya',
  next_3: '3 halaman seterusnya'
};

var CalendarLocale = {
  today: 'Hari ini',
  now: 'Sekarang',
  backToToday: 'Kembali ke hari ini',
  ok: 'Ok',
  timeSelect: 'Pilih masa',
  dateSelect: 'Pilih tarikh',
  weekSelect: 'Pilih minggu',
  clear: 'Padam',
  month: 'Bulan',
  year: 'Tahun',
  previousMonth: 'Bulan lepas',
  nextMonth: 'Bulan depan',
  monthSelect: 'Pilih bulan',
  yearSelect: 'Pilih tahun',
  decadeSelect: 'Pilih dekad',
  yearFormat: 'YYYY',
  dayFormat: 'D',
  dateFormat: 'M/D/YYYY',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  previousYear: 'Tahun lepas (Ctrl+left)',
  nextYear: 'Tahun depan (Ctrl+right)',
  previousDecade: 'Dekad lepas',
  nextDecade: 'Dekad depan',
  previousCentury: 'Abad lepas',
  nextCentury: 'Abad depan'
};

var locale$1 = {
  placeholder: 'Sila pilih masa'
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var locale = {
  lang: _extends({
    placeholder: 'Pilih tarikh',
    rangePlaceholder: ['Tarikh mula', 'Tarikh akhir']
  }, CalendarLocale),
  timePickerLocale: _extends({}, locale$1)
}; // All settings at:

var ms_MY = {
  locale: 'ms-my',
  Pagination: Pagination,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  global: {
    placeholder: 'Sila pilih'
  },
  PageHeader: {
    back: 'Kembali'
  },
  Text: {
    edit: 'Sunting',
    copy: 'Salin',
    copied: 'Berjaya menyalin',
    expand: 'Kembang'
  },
  Empty: {
    description: 'Tiada data'
  },
  Table: {
    filterTitle: 'Cari dengan tajuk',
    filterConfirm: 'Ok',
    filterReset: 'Menetapkan semula',
    emptyText: 'Tiada data',
    selectAll: 'Pilih semua',
    selectInvert: 'Terbalikkan'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Batal',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Batal'
  },
  Transfer: {
    notFoundContent: 'Tidak dijumpai',
    searchPlaceholder: 'Carian di sini',
    itemUnit: 'item',
    itemsUnit: 'item'
  },
  Icon: {
    icon: 'ikon'
  },
  Select: {
    notFoundContent: 'Tidak Dijumpai'
  },
  Upload: {
    uploading: 'Sedang memuat naik...',
    removeFile: 'Buang fail',
    uploadError: 'Masalah muat naik',
    previewFile: 'Tengok fail',
    downloadFile: 'Muat turun fail'
  }
};

export { ms_MY as default };
