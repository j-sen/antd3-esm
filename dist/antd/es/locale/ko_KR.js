var Pagination = {
  // Options.jsx
  items_per_page: '/ 쪽',
  jump_to: '이동하기',
  jump_to_confirm: '확인하다',
  page: '',

  // Pagination.jsx
  prev_page: '이전 페이지',
  next_page: '다음 페이지',
  prev_5: '이전 5 페이지',
  next_5: '다음 5 페이지',
  prev_3: '이전 3 페이지',
  next_3: '다음 3 페이지'
};

var CalendarLocale = {
  today: '오늘',
  now: '현재 시각',
  backToToday: '오늘로 돌아가기',
  ok: '확인',
  clear: '지우기',
  month: '월',
  year: '년',
  timeSelect: '시간 선택',
  dateSelect: '날짜 선택',
  monthSelect: '달 선택',
  yearSelect: '연 선택',
  decadeSelect: '연대 선택',
  yearFormat: 'YYYY년',
  dateFormat: 'YYYY-MM-DD',
  dayFormat: 'Do',
  dateTimeFormat: 'YYYY-MM-DD HH:mm:ss',
  monthBeforeYear: false,
  previousMonth: '이전 달 (PageUp)',
  nextMonth: '다음 달 (PageDown)',
  previousYear: '이전 해 (Control + left)',
  nextYear: '다음 해 (Control + right)',
  previousDecade: '이전 연대',
  nextDecade: '다음 연대',
  previousCentury: '이전 세기',
  nextCentury: '다음 세기'
};

var locale$1 = {
  placeholder: '날짜 선택'
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var locale = {
  lang: _extends({
    placeholder: '날짜 선택',
    rangePlaceholder: ['시작일', '종료일']
  }, CalendarLocale),
  timePickerLocale: _extends({}, locale$1)
}; // All settings at:

var ko_KR = {
  locale: 'ko',
  Pagination: Pagination,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  Table: {
    filterTitle: '필터 메뉴',
    filterConfirm: '확인',
    filterReset: '초기화',
    selectAll: '모두 선택',
    selectInvert: '선택 반전'
  },
  Modal: {
    okText: '확인',
    cancelText: '취소',
    justOkText: '확인'
  },
  Popconfirm: {
    okText: '확인',
    cancelText: '취소'
  },
  Transfer: {
    searchPlaceholder: '여기에 검색하세요',
    itemUnit: '개',
    itemsUnit: '개'
  },
  Upload: {
    uploading: '업로드 중...',
    removeFile: '파일 삭제',
    uploadError: '업로드 실패',
    previewFile: '파일 미리보기',
    downloadFile: '파일 다운로드'
  },
  Empty: {
    description: '데이터 없음'
  }
};

export { ko_KR as default };
