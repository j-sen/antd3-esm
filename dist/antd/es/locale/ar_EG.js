var Pagination = {
  // Options.jsx
  items_per_page: '/ الصفحة',
  jump_to: 'الذهاب إلى',
  jump_to_confirm: 'تأكيد',
  page: '',

  // Pagination.jsx
  prev_page: 'الصفحة السابقة',
  next_page: 'الصفحة التالية',
  prev_5: 'خمس صفحات سابقة',
  next_5: 'خمس صفحات تالية',
  prev_3: 'ثلاث صفحات سابقة',
  next_3: 'ثلاث صفحات تالية'
};

var CalendarLocale = {
  today: 'اليوم',
  now: 'الأن',
  backToToday: 'العودة إلى اليوم',
  ok: 'تأكيد',
  clear: 'مسح',
  month: 'الشهر',
  year: 'السنة',
  timeSelect: 'اختيار الوقت',
  dateSelect: 'اختيار التاريخ',
  monthSelect: 'اختيار الشهر',
  yearSelect: 'اختيار السنة',
  decadeSelect: 'اختيار العقد',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'الشهر السابق (PageUp)',
  nextMonth: 'الشهر التالى(PageDown)',
  previousYear: 'العام السابق (Control + left)',
  nextYear: 'العام التالى (Control + right)',
  previousDecade: 'العقد السابق',
  nextDecade: 'العقد التالى',
  previousCentury: 'القرن السابق',
  nextCentury: 'القرن التالى'
};

var locale$1 = {
  placeholder: 'اختيار الوقت'
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var locale = {
  lang: _extends({
    placeholder: 'اختيار التاريخ',
    rangePlaceholder: ['البداية', 'النهاية']
  }, CalendarLocale),
  timePickerLocale: _extends({}, locale$1),
  dateFormat: 'DD-MM-YYYY',
  monthFormat: 'MM-YYYY',
  dateTimeFormat: 'DD-MM-YYYY HH:mm:ss',
  weekFormat: 'wo-YYYY'
}; // All settings at:

var ar_EG = {
  locale: 'ar',
  Pagination: Pagination,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  Table: {
    filterTitle: 'الفلاتر',
    filterConfirm: 'تأكيد',
    filterReset: 'إعادة ضبط',
    selectAll: 'اختيار الكل',
    selectInvert: 'إلغاء الاختيار'
  },
  Modal: {
    okText: 'تأكيد',
    cancelText: 'إلغاء',
    justOkText: 'تأكيد'
  },
  Popconfirm: {
    okText: 'تأكيد',
    cancelText: 'إلغاء'
  },
  Transfer: {
    searchPlaceholder: 'ابحث هنا',
    itemUnit: 'عنصر',
    itemsUnit: 'عناصر'
  },
  Upload: {
    uploading: 'جاري الرفع...',
    removeFile: 'احذف الملف',
    uploadError: 'مشكلة فى الرفع',
    previewFile: 'استعرض الملف',
    downloadFile: 'تحميل الملف'
  },
  Empty: {
    description: 'لا توجد بيانات'
  }
};

export { ar_EG as default };
