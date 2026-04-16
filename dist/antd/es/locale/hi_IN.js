var Pagination = {
  // Options.jsx
  items_per_page: '/ पृष्ठ',
  jump_to: 'इस पर चलें',
  jump_to_confirm: 'पुष्टि करें',
  page: '',

  // Pagination.jsx
  prev_page: 'पिछला पृष्ठ',
  next_page: 'अगला पृष्ठ',
  prev_5: 'पिछले 5 पृष्ठ',
  next_5: 'अगले 5 पृष्ठ',
  prev_3: 'पिछले 3 पृष्ठ',
  next_3: 'अगले 3 पेज'
};

var CalendarLocale = {
  today: 'आज',
  now: 'अभी',
  backToToday: 'आज तक',
  ok: 'ठीक',
  clear: 'स्पष्ट',
  month: 'महीना',
  year: 'साल',
  timeSelect: 'समय का चयन करें',
  dateSelect: 'तारीख़ चुनें',
  weekSelect: 'एक सप्ताह चुनें',
  monthSelect: 'एक महीना चुनें',
  yearSelect: 'एक वर्ष चुनें',
  decadeSelect: 'एक दशक चुनें',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'पिछला महीना (पेजअप)',
  nextMonth: 'अगले महीने (पेजडाउन)',
  previousYear: 'पिछले साल (Ctrl + बाएं)',
  nextYear: 'अगले साल (Ctrl + दाहिना)',
  previousDecade: 'पिछला दशक',
  nextDecade: 'अगले दशक',
  previousCentury: 'पीछ्ली शताब्दी',
  nextCentury: 'अगली सदी'
};

var locale$1 = {
  placeholder: 'समय का चयन करें'
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var locale = {
  lang: _extends({
    placeholder: 'तारीख़ चुनें',
    rangePlaceholder: ['प्रारंभ तिथि', 'समाप्ति तिथि']
  }, CalendarLocale),
  timePickerLocale: _extends({}, locale$1)
}; // All settings at:

var hi_IN = {
  locale: 'hi',
  Pagination: Pagination,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  // locales for all comoponents
  global: {
    placeholder: 'कृपया चुनें'
  },
  Table: {
    filterTitle: 'सूची बंद करें',
    filterConfirm: 'अच्छी तरह से',
    filterReset: 'रीसेट',
    emptyText: 'कोई जानकारी नहीं',
    selectAll: 'वर्तमान पृष्ठ का चयन करें',
    selectInvert: 'वर्तमान पृष्ठ घुमाएं',
    sortTitle: 'द्वारा क्रमबद्ध करें'
  },
  Modal: {
    okText: 'अच्छी तरह से',
    cancelText: 'रद्द करना',
    justOkText: 'अच्छी तरह से'
  },
  Popconfirm: {
    okText: 'अच्छी तरह से',
    cancelText: 'रद्द करना'
  },
  Transfer: {
    titles: ['', ''],
    notFoundContent: 'नहीं मिला',
    searchPlaceholder: 'यहां खोजें',
    itemUnit: 'तत्त्व',
    itemsUnit: 'विषय-वस्तु'
  },
  Select: {
    notFoundContent: 'नहीं मिला'
  },
  Upload: {
    uploading: 'अपलोडिंग...',
    removeFile: 'फ़ाइल निकालें',
    uploadError: 'अपलोड में त्रुटि',
    previewFile: 'फ़ाइल पूर्वावलोकन',
    downloadFile: 'फ़ाइल डाउनलोड करें'
  }
};

export { hi_IN as default };
