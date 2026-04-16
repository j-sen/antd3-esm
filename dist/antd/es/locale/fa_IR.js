var Pagination = {
  // Options.jsx
  items_per_page: '/ صفحه',
  jump_to: 'برو به',
  jump_to_confirm: 'تایید',
  page: '',

  // Pagination.jsx
  prev_page: 'صفحه قبلی',
  next_page: 'صفحه بعدی',
  prev_5: '۵ صفحه قبلی',
  next_5: '۵ صفحه بعدی',
  prev_3: '۳ صفحه قبلی',
  next_3: '۳ صفحه بعدی'
};

var CalendarLocale = {
  today: 'امروز',
  now: 'اکنون',
  backToToday: 'بازگشت به روز',
  ok: 'باشه',
  clear: 'پاک کردن',
  month: 'ماه',
  year: 'سال',
  timeSelect: 'انتخاب زمان',
  dateSelect: 'انتخاب تاریخ',
  monthSelect: 'یک ماه را انتخاب کنید',
  yearSelect: 'یک سال را انتخاب کنید',
  decadeSelect: 'یک دهه را انتخاب کنید',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'ماه قبل (PageUp)',
  nextMonth: 'ماه بعد (PageDown)',
  previousYear: 'سال قبل (Control + left)',
  nextYear: 'سال بعد (Control + right)',
  previousDecade: 'دهه قبل',
  nextDecade: 'دهه بعد',
  previousCentury: 'قرن قبل',
  nextCentury: 'قرن بعد'
};

var locale$1 = {
  placeholder: 'انتخاب زمان'
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var locale = {
  lang: _extends({
    placeholder: 'انتخاب تاریخ',
    rangePlaceholder: ['تاریخ شروع', 'تاریخ پایان']
  }, CalendarLocale),
  timePickerLocale: _extends({}, locale$1)
}; // All settings at:

var fa_IR = {
  locale: 'fa',
  Pagination: Pagination,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  Table: {
    filterTitle: 'منوی فیلتر',
    filterConfirm: 'تایید',
    filterReset: 'پاک کردن',
    selectAll: 'انتخاب صفحه‌ی کنونی',
    selectInvert: 'معکوس کردن انتخاب‌ها در صفحه ی کنونی'
  },
  Modal: {
    okText: 'تایید',
    cancelText: 'لغو',
    justOkText: 'تایید'
  },
  Popconfirm: {
    okText: 'تایید',
    cancelText: 'لغو'
  },
  Transfer: {
    searchPlaceholder: 'جستجو',
    itemUnit: '',
    itemsUnit: ''
  },
  Upload: {
    uploading: 'در حال آپلود...',
    removeFile: 'حذف فایل',
    uploadError: 'خطا در آپلود',
    previewFile: 'مشاهده‌ی فایل',
    downloadFile: 'دریافت فایل'
  },
  Empty: {
    description: 'داده‌ای موجود نیست'
  }
};

export { fa_IR as default };
