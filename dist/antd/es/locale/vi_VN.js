var Pagination = {
  // Options.jsx
  items_per_page: '/ trang',
  jump_to: 'Đến',
  jump_to_confirm: 'xác nhận',
  page: '',

  // Pagination.jsx
  prev_page: 'Trang Trước',
  next_page: 'Trang Kế',
  prev_5: 'Về 5 Trang Trước',
  next_5: 'Đến 5 Trang Kế',
  prev_3: 'Về 3 Trang Trước',
  next_3: 'Đến 3 Trang Kế'
};

var CalendarLocale = {
  today: 'Hôm nay',
  now: 'Bây giờ',
  backToToday: 'Trở về hôm nay',
  ok: 'Ok',
  clear: 'Xóa',
  month: 'Tháng',
  year: 'Năm',
  timeSelect: 'Chọn thời gian',
  dateSelect: 'Chọn ngày',
  weekSelect: 'Chọn tuần',
  monthSelect: 'Chọn tháng',
  yearSelect: 'Chọn năm',
  decadeSelect: 'Chọn thập kỷ',
  yearFormat: 'YYYY',
  dateFormat: 'D/M/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'D/M/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Tháng trước (PageUp)',
  nextMonth: 'Tháng sau (PageDown)',
  previousYear: 'Năm trước (Control + left)',
  nextYear: 'Năm sau (Control + right)',
  previousDecade: 'Thập kỷ trước',
  nextDecade: 'Thập kỷ sau',
  previousCentury: 'Thế kỷ trước',
  nextCentury: 'Thế kỷ sau'
};

var locale$1 = {
  placeholder: 'Chọn thời gian'
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var locale = {
  lang: _extends({
    placeholder: 'Chọn thời điểm',
    rangePlaceholder: ['Ngày bắt đầu', 'Ngày kết thúc']
  }, CalendarLocale),
  timePickerLocale: _extends({}, locale$1)
}; // All settings at:

var vi_VN = {
  locale: 'vi',
  Pagination: Pagination,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  Table: {
    filterTitle: 'Bộ ',
    filterConfirm: 'OK',
    filterReset: 'Tạo Lại',
    selectAll: 'Chọn Tất Cả',
    selectInvert: 'Chọn Ngược Lại'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Huỷ',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Huỷ'
  },
  Transfer: {
    searchPlaceholder: 'Tìm ở đây',
    itemUnit: 'mục',
    itemsUnit: 'mục'
  },
  Upload: {
    uploading: 'Đang tải lên...',
    removeFile: 'Gỡ bỏ tập tin',
    uploadError: 'Lỗi tải lên',
    previewFile: 'Xem thử tập tin',
    downloadFile: 'Tải tập tin'
  },
  Empty: {
    description: 'Trống'
  }
};

export { vi_VN as default };
