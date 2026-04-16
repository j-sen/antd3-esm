var Pagination = {
  // Options.jsx
  items_per_page: '/ ページ',
  jump_to: '移動',
  jump_to_confirm: '確認する',
  page: 'ページ',

  // Pagination.jsx
  prev_page: '前のページ',
  next_page: '次のページ',
  prev_5: '前 5ページ',
  next_5: '次 5ページ',
  prev_3: '前 3ページ',
  next_3: '次 3ページ'
};

var CalendarLocale = {
  today: '今日',
  now: '現在時刻',
  backToToday: '今日に戻る',
  ok: '決定',
  timeSelect: '時間を選択',
  dateSelect: '日時を選択',
  clear: 'クリア',
  month: '月',
  year: '年',
  previousMonth: '前月 (ページアップキー)',
  nextMonth: '翌月 (ページダウンキー)',
  monthSelect: '月を選択',
  yearSelect: '年を選択',
  decadeSelect: '年代を選択',
  yearFormat: 'YYYY年',
  dayFormat: 'D日',
  dateFormat: 'YYYY年M月D日',
  dateTimeFormat: 'YYYY年M月D日 HH時mm分ss秒',
  previousYear: '前年 (Controlを押しながら左キー)',
  nextYear: '翌年 (Controlを押しながら右キー)',
  previousDecade: '前の年代',
  nextDecade: '次の年代',
  previousCentury: '前の世紀',
  nextCentury: '次の世紀'
};

var locale$1 = {
  placeholder: '時刻を選択'
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var locale = {
  lang: _extends({
    placeholder: '日付を選択',
    rangePlaceholder: ['開始日付', '終了日付']
  }, CalendarLocale),
  timePickerLocale: _extends({}, locale$1)
}; // All settings at:

var ja_JP = {
  locale: 'ja',
  Pagination: Pagination,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  Table: {
    filterTitle: 'メニューをフィルター',
    filterConfirm: 'OK',
    filterReset: 'リセット',
    selectAll: 'すべてを選択',
    selectInvert: '選択を反転'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'キャンセル',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'キャンセル'
  },
  Transfer: {
    searchPlaceholder: 'ここを検索',
    itemUnit: 'アイテム',
    itemsUnit: 'アイテム'
  },
  Upload: {
    uploading: 'アップロード中...',
    removeFile: 'ファイルを削除',
    uploadError: 'アップロードエラー',
    previewFile: 'ファイルをプレビュー',
    downloadFile: 'ダウンロードファイル'
  },
  Empty: {
    description: 'データがありません'
  }
};

export { ja_JP as default };
