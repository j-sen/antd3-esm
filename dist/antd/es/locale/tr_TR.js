var Pagination = {
  // Options.jsx
  items_per_page: '/ sayfa',
  jump_to: 'Git',
  jump_to_confirm: 'onayla',
  page: '',

  // Pagination.jsx
  prev_page: 'Önceki Sayfa',
  next_page: 'Sonraki Sayfa',
  prev_5: 'Önceki 5 Sayfa',
  next_5: 'Sonraki 5 Sayfa',
  prev_3: 'Önceki 3 Sayfa',
  next_3: 'Sonraki 3 Sayfa'
};

var CalendarLocale = {
  today: 'Bugün',
  now: 'Şimdi',
  backToToday: 'Bugüne Geri Dön',
  ok: 'tamam',
  clear: 'Temizle',
  month: 'Ay',
  year: 'Yıl',
  timeSelect: 'Zaman Seç',
  dateSelect: 'Tarih Seç',
  monthSelect: 'Ay Seç',
  yearSelect: 'Yıl Seç',
  decadeSelect: 'On Yıl Seç',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Önceki Ay (PageUp)',
  nextMonth: 'Sonraki Ay (PageDown)',
  previousYear: 'Önceki Yıl (Control + Sol)',
  nextYear: 'Sonraki Yıl (Control + Sağ)',
  previousDecade: 'Önceki On Yıl',
  nextDecade: 'Sonraki On Yıl',
  previousCentury: 'Önceki Yüzyıl',
  nextCentury: 'Sonraki Yüzyıl'
};

var locale$1 = {
  placeholder: 'Zaman Seç'
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var locale = {
  lang: _extends({
    placeholder: 'Tarih Seç',
    rangePlaceholder: ['Başlangıç Tarihi', 'Bitiş Tarihi']
  }, CalendarLocale),
  timePickerLocale: _extends({}, locale$1)
}; // All settings at:

var tr_TR = {
  locale: 'tr',
  Pagination: Pagination,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  global: {
    placeholder: 'Lütfen seçiniz'
  },
  Table: {
    filterTitle: 'Menü Filtrele',
    filterConfirm: 'Tamam',
    filterReset: 'Sıfırla',
    selectAll: 'Hepsini Seç',
    selectInvert: 'Tersini Seç',
    sortTitle: 'Sırala'
  },
  Modal: {
    okText: 'Tamam',
    cancelText: 'İptal',
    justOkText: 'Tamam'
  },
  Popconfirm: {
    okText: 'Tamam',
    cancelText: 'İptal'
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Arama',
    itemUnit: 'Öğe',
    itemsUnit: 'Öğeler'
  },
  Upload: {
    uploading: 'Yükleniyor...',
    removeFile: "Dosyay\u0131 kald\u0131r",
    uploadError: 'Yükleme Hatası',
    previewFile: "Dosyay\u0131 \xD6nizle",
    downloadFile: 'Dosyayı indir'
  },
  Empty: {
    description: 'Veri Yok'
  },
  Icon: {
    icon: 'icon'
  },
  Text: {
    edit: 'düzenle',
    copy: 'kopyala',
    copied: 'kopyalandı',
    expand: 'genişlet'
  }
};

export { tr_TR as default };
