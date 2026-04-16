var Pagination = {
  // Options.jsx
  items_per_page: '/ பக்கம்',
  jump_to: 'அடுத்த',
  jump_to_confirm: 'உறுதிப்படுத்தவும்',
  page: '',

  // Pagination.jsx
  prev_page: 'முந்தைய பக்கம்',
  next_page: 'அடுத்த பக்கம்',
  prev_5: 'முந்தைய 5 பக்கங்கள்',
  next_5: 'அடுத்த 5 பக்கங்கள்',
  prev_3: 'முந்தைய 3 பக்கங்கள்',
  next_3: 'அடுத்த 3 பக்கங்கள்'
};

var CalendarLocale = {
  today: 'இன்று',
  now: 'இப்போது',
  backToToday: 'இன்றுக்கு திரும்பு',
  ok: 'சரி',
  clear: 'அழி',
  month: 'மாதம்',
  year: 'வருடம்',
  timeSelect: 'நேரத்தைத் தேர்ந்தெடு',
  dateSelect: 'தேதியைத் தேர்ந்தெடு',
  weekSelect: 'வாரத்தைத் தேர்வுசெய்க',
  monthSelect: 'மாதத்தைத் தேர்வுசெய்க',
  yearSelect: 'வருடத்தைத் தேர்வுசெய்க',
  decadeSelect: 'தசாப்தத்தைத் தேர்வுசெய்க',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'முந்தைய மாதம் (PageUp)',
  nextMonth: 'அடுத்த மாதம் (PageDown)',
  previousYear: 'முந்தைய வருடம் (Control + left)',
  nextYear: 'அடுத்த வருடம் (Control + right)',
  previousDecade: 'முந்தைய தசாப்தம்',
  nextDecade: 'அடுத்த தசாப்தம்',
  previousCentury: 'முந்தைய நூற்றாண்டு',
  nextCentury: 'அடுத்த நூற்றாண்டு'
};

var locale$1 = {
  placeholder: 'நேரத்தைத் தேர்ந்தெடுக்கவும்'
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var locale = {
  lang: _extends({
    placeholder: 'தேதியைத் தேர்ந்தெடுக்கவும்',
    rangePlaceholder: ['தொடக்க தேதி', 'கடைசி தேதி']
  }, CalendarLocale),
  timePickerLocale: _extends({}, locale$1)
}; // All settings at:

var ta_IN = {
  locale: 'ta',
  Pagination: Pagination,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  // locales for all comoponents
  global: {
    placeholder: 'தேதியைத் தேர்ந்தெடுக்கவும்'
  },
  Table: {
    filterTitle: 'பட்டியலை மூடு',
    filterConfirm: 'சரி',
    filterReset: 'மீட்டமை',
    emptyText: 'தகவல் இல்லை',
    selectAll: 'அனைத்தையும் தேர்வுசெய்',
    selectInvert: 'தலைகீழாக மாற்று',
    sortTitle: 'தலைப்பை வரிசைப்படுத்தவும்'
  },
  Modal: {
    okText: 'சரி',
    cancelText: 'ரத்து செய்யவும்',
    justOkText: 'பரவாயில்லை, சரி'
  },
  Popconfirm: {
    okText: 'சரி',
    cancelText: 'ரத்து செய்யவும்'
  },
  Transfer: {
    titles: ['', ''],
    notFoundContent: 'உள்ளடக்கம் கிடைக்கவில்லை',
    searchPlaceholder: 'இங்கு தேடவும்',
    itemUnit: 'தகவல்',
    itemsUnit: 'தகவல்கள்'
  },
  Upload: {
    uploading: 'பதிவேற்றுகிறது...',
    removeFile: 'கோப்பை அகற்று',
    uploadError: 'பதிவேற்றுவதில் பிழை',
    previewFile: 'கோப்பை முன்னோட்டமிடுங்கள்',
    downloadFile: 'பதிவிறக்க கோப்பு'
  },
  Empty: {
    description: 'தகவல் இல்லை'
  },
  Icon: {
    icon: 'உருவம்'
  },
  Text: {
    edit: 'திருத்து',
    copy: 'நகல் எடு',
    copied: 'நகல் எடுக்கப்பட்டது',
    expand: 'விரிவாக்கவும்'
  },
  PageHeader: {
    back: 'பின் செல்லவும்'
  }
};

export { ta_IN as default };
