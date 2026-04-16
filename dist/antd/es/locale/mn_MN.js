var Pagination = {
  // Options.jsx
  items_per_page: '/ хуудас',
  jump_to: 'Шилжих',
  jump_to_confirm: 'сонгох',
  page: '',

  // Pagination.jsx
  prev_page: 'Өмнөх хуудас',
  next_page: 'Дараагийн хуудас',
  prev_5: 'Дараагийн 5 хуудас',
  next_5: 'Дараагийн 5 хуудас',
  prev_3: 'Дараагийн 3 хуудас',
  next_3: 'Дараагийн 3 хуудас'
};

var CalendarLocale = {
  today: 'Өнөөдөр',
  now: 'Одоо',
  backToToday: 'Өнөөдөрлүү буцах',
  ok: 'Ok',
  clear: 'Цэвэрлэх',
  month: 'Сар',
  year: 'Жил',
  timeSelect: 'Цаг сонгох',
  dateSelect: 'Огноо сонгох',
  weekSelect: '7 хоног сонгох',
  monthSelect: 'Сар сонгох',
  yearSelect: 'Жил сонгох',
  decadeSelect: 'Арван сонгох',
  yearFormat: 'YYYY',
  dateFormat: 'YYYY/MM/DD',
  dayFormat: 'DD',
  dateTimeFormat: 'YYYY/MM/DD HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Өмнөх сар (PageUp)',
  nextMonth: 'Дараа сар (PageDown)',
  previousYear: 'Өмнөх жил (Control + left)',
  nextYear: 'Дараа жил (Control + right)',
  previousDecade: 'Өмнөх арван',
  nextDecade: 'Дараа арван',
  previousCentury: 'Өмнөх зуун',
  nextCentury: 'Дараа зуун'
};

var locale$1 = {
  placeholder: 'Цаг сонгох'
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var locale = {
  lang: _extends({
    placeholder: 'Огноо сонгох',
    rangePlaceholder: ['Эхлэх огноо', 'Дуусах огноо']
  }, CalendarLocale),
  timePickerLocale: _extends({}, locale$1)
}; // All settings at:

var mn_MN = {
  locale: 'mn-mn',
  Pagination: Pagination,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  Table: {
    filterTitle: 'Хайх цэс',
    filterConfirm: 'OK',
    filterReset: 'Цэвэрлэх',
    selectAll: 'Бүгдийг сонгох',
    selectInvert: 'Бусдыг сонгох'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Цуцлах',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Цуцлах'
  },
  Transfer: {
    searchPlaceholder: 'Хайх',
    itemUnit: 'Зүйл',
    itemsUnit: 'Зүйлүүд'
  },
  Upload: {
    uploading: 'Хуулж байна...',
    removeFile: 'Файл устгах',
    uploadError: 'Хуулахад алдаа гарлаа',
    previewFile: 'Файлыг түргэн үзэх',
    downloadFile: 'Файлыг татах'
  },
  Empty: {
    description: 'Мэдээлэл байхгүй байна'
  }
};

export { mn_MN as default };
