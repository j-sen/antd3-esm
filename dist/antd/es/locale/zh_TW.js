var Pagination = {
  // Options.jsx
  items_per_page: '條/頁',
  jump_to: '跳至',
  jump_to_confirm: '確定',
  page: '頁',

  // Pagination.jsx
  prev_page: '上一頁',
  next_page: '下一頁',
  prev_5: '向前 5 頁',
  next_5: '向後 5 頁',
  prev_3: '向前 3 頁',
  next_3: '向後 3 頁'
};

var CalendarLocale = {
  today: '今天',
  now: '此刻',
  backToToday: '返回今天',
  ok: '確定',
  timeSelect: '選擇時間',
  dateSelect: '選擇日期',
  clear: '清除',
  month: '月',
  year: '年',
  previousMonth: '上個月 (翻頁上鍵)',
  nextMonth: '下個月 (翻頁下鍵)',
  monthSelect: '選擇月份',
  yearSelect: '選擇年份',
  decadeSelect: '選擇年代',
  yearFormat: 'YYYY年',
  dayFormat: 'D日',
  dateFormat: 'YYYY年M月D日',
  dateTimeFormat: 'YYYY年M月D日 HH時mm分ss秒',
  previousYear: '上一年 (Control鍵加左方向鍵)',
  nextYear: '下一年 (Control鍵加右方向鍵)',
  previousDecade: '上一年代',
  nextDecade: '下一年代',
  previousCentury: '上一世紀',
  nextCentury: '下一世紀'
};

var locale$1 = {
  placeholder: '請選擇時間'
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var locale = {
  lang: _extends({
    placeholder: '請選擇日期',
    rangePlaceholder: ['開始日期', '結束日期']
  }, CalendarLocale),
  timePickerLocale: _extends({}, locale$1)
};
locale.lang.ok = '確 定'; // All settings at:

var zh_TW = {
  locale: 'zh-tw',
  Pagination: Pagination,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  Table: {
    filterTitle: '篩選器',
    filterConfirm: '確 定',
    filterReset: '重 置',
    selectAll: '全部選取',
    selectInvert: '反向選取'
  },
  Modal: {
    okText: '確 定',
    cancelText: '取 消',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: '確 定',
    cancelText: '取 消'
  },
  Transfer: {
    searchPlaceholder: '搜尋資料',
    itemUnit: '項目',
    itemsUnit: '項目'
  },
  Upload: {
    uploading: '正在上傳...',
    removeFile: '刪除檔案',
    uploadError: '上傳失敗',
    previewFile: '檔案預覽',
    downloadFile: '下载文件'
  },
  Empty: {
    description: '無此資料'
  },
  PageHeader: {
    back: '返回'
  }
};

export { zh_TW as default };
