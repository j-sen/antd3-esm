var Pagination = {
  // Options.jsx
  items_per_page: '/ halaman',
  jump_to: 'Menuju',
  jump_to_confirm: 'konfirmasi',
  page: '',

  // Pagination.jsx
  prev_page: 'Halaman Sebelumnya',
  next_page: 'Halaman Berikutnya',
  prev_5: '5 Halaman Sebelumnya',
  next_5: '5 Halaman Berikutnya',
  prev_3: '3 Halaman Sebelumnya',
  next_3: '3 Halaman Berikutnya'
};

var CalendarLocale = {
  today: 'Hari ini',
  now: 'Sekarang',
  backToToday: 'Kembali ke hari ini',
  ok: 'Baik',
  clear: 'Bersih',
  month: 'Bulan',
  year: 'Tahun',
  timeSelect: 'pilih waktu',
  dateSelect: 'pilih tanggal',
  weekSelect: 'Pilih satu minggu',
  monthSelect: 'Pilih satu bulan',
  yearSelect: 'Pilih satu tahun',
  decadeSelect: 'Pilih satu dekade',
  yearFormat: 'YYYY',
  dateFormat: 'D/M/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'D/M/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Bulan sebelumnya (PageUp)',
  nextMonth: 'Bulan selanjutnya (PageDown)',
  previousYear: 'Tahun lalu (Control + kiri)',
  nextYear: 'Tahun selanjutnya (Kontrol + kanan)',
  previousDecade: 'Dekade terakhir',
  nextDecade: 'Dekade berikutnya',
  previousCentury: 'Abad terakhir',
  nextCentury: 'Abad berikutnya'
};

var locale$1 = {
  placeholder: 'Pilih waktu'
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var locale = {
  lang: _extends({
    placeholder: 'Pilih tanggal',
    rangePlaceholder: ['Mulai tanggal', 'Tanggal akhir']
  }, CalendarLocale),
  timePickerLocale: _extends({}, locale$1)
}; // All settings at:

var id_ID = {
  locale: 'id',
  Pagination: Pagination,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  Table: {
    filterTitle: 'Saring',
    filterConfirm: 'OK',
    filterReset: 'Hapus',
    selectAll: 'Pilih semua di halaman ini',
    selectInvert: 'Balikkan pilihan di halaman ini',
    sortTitle: 'Urutkan'
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
    titles: ['', ''],
    searchPlaceholder: 'Cari',
    itemUnit: 'item',
    itemsUnit: 'item'
  },
  Upload: {
    uploading: 'Mengunggah...',
    removeFile: 'Hapus file',
    uploadError: 'Kesalahan pengunggahan',
    previewFile: 'File pratinjau',
    downloadFile: 'Unduh berkas'
  },
  Empty: {
    description: 'Tidak ada data'
  }
};

export { id_ID as default };
