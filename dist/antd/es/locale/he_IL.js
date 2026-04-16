var Pagination = {
  // Options.jsx
  items_per_page: '/ עמוד',
  jump_to: 'עבור אל',
  jump_to_confirm: 'אישור',
  page: '',

  // Pagination.jsx
  prev_page: 'העמוד הקודם',
  next_page: 'העמוד הבא',
  prev_5: '5 עמודים קודמים',
  next_5: '5 עמודים הבאים',
  prev_3: '3 עמודים קודמים',
  next_3: '3 עמודים הבאים'
};

var CalendarLocale = {
  today: 'היום',
  now: 'עכשיו',
  backToToday: 'חזור להיום',
  ok: 'אישור',
  clear: 'איפוס',
  month: 'חודש',
  year: 'שנה',
  timeSelect: 'בחר שעה',
  dateSelect: 'בחר תאריך',
  weekSelect: 'בחר שבוע',
  monthSelect: 'בחר חודש',
  yearSelect: 'בחר שנה',
  decadeSelect: 'בחר עשור',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'חודש קודם (PageUp)',
  nextMonth: 'חודש הבא (PageDown)',
  previousYear: 'שנה שעברה (Control + left)',
  nextYear: 'שנה הבאה (Control + right)',
  previousDecade: 'העשור הקודם',
  nextDecade: 'העשור הבא',
  previousCentury: 'המאה הקודמת',
  nextCentury: 'המאה הבאה'
};

var locale$1 = {
  placeholder: 'בחר שעה'
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var locale = {
  lang: _extends({
    placeholder: 'בחר תאריך',
    rangePlaceholder: ['תאריך התחלה', 'תאריך סיום']
  }, CalendarLocale),
  timePickerLocale: _extends({}, locale$1)
}; // All settings at:

var he_IL = {
  locale: 'he',
  Pagination: Pagination,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  Table: {
    filterTitle: 'תפריט סינון',
    filterConfirm: 'אישור',
    filterReset: 'איפוס',
    selectAll: 'בחר הכל',
    selectInvert: 'הפוך בחירה'
  },
  Modal: {
    okText: 'אישור',
    cancelText: 'ביטול',
    justOkText: 'אישור'
  },
  Popconfirm: {
    okText: 'אישור',
    cancelText: 'ביטול'
  },
  Transfer: {
    searchPlaceholder: 'חפש כאן',
    itemUnit: 'פריט',
    itemsUnit: 'פריטים'
  },
  Upload: {
    uploading: 'מעלה...',
    removeFile: 'הסר קובץ',
    uploadError: 'שגיאת העלאה',
    previewFile: 'הצג קובץ',
    downloadFile: 'הורד קובץ'
  },
  Empty: {
    description: 'אין מידע'
  }
};

export { he_IL as default };
