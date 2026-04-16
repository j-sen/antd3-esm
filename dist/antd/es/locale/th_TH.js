var Pagination = {
  // Options.jsx
  items_per_page: '/ หน้า',
  jump_to: 'ไปยัง',
  jump_to_confirm: 'ยืนยัน',
  page: '',

  // Pagination.jsx
  prev_page: 'หน้าก่อนหน้า',
  next_page: 'หน้าถัดไป',
  prev_5: 'ย้อนกลับ 5 หน้า',
  next_5: 'ถัดไป 5 หน้า',
  prev_3: 'ย้อนกลับ 3 หน้า',
  next_3: 'ถัดไป 3 หน้า'
};

var CalendarLocale = {
  today: 'วันนี้',
  now: 'ตอนนี้',
  backToToday: 'กลับไปยังวันนี้',
  ok: 'ตกลง',
  clear: 'ลบล้าง',
  month: 'เดือน',
  year: 'ปี',
  timeSelect: 'เลือกเวลา',
  dateSelect: 'เลือกวัน',
  monthSelect: 'เลือกเดือน',
  yearSelect: 'เลือกปี',
  decadeSelect: 'เลือกทศวรรษ',
  yearFormat: 'YYYY',
  dateFormat: 'D/M/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'D/M/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'เดือนก่อนหน้า (PageUp)',
  nextMonth: 'เดือนถัดไป (PageDown)',
  previousYear: 'ปีก่อนหน้า (Control + left)',
  nextYear: 'ปีถัดไป (Control + right)',
  previousDecade: 'ทศวรรษก่อนหน้า',
  nextDecade: 'ทศวรรษถัดไป',
  previousCentury: 'ศตวรรษก่อนหน้า',
  nextCentury: 'ศตวรรษถัดไป'
};

var locale$1 = {
  placeholder: 'เลือกเวลา'
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var locale = {
  lang: _extends({
    placeholder: 'เลือกวันที่',
    rangePlaceholder: ['วันเริ่มต้น', 'วันสิ้นสุด']
  }, CalendarLocale),
  timePickerLocale: _extends({}, locale$1)
}; // All settings at:

var th_TH = {
  locale: 'th',
  Pagination: Pagination,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  global: {
    placeholder: 'กรุณาเลือก'
  },
  Table: {
    filterTitle: 'ตัวกรอง',
    filterConfirm: 'ยืนยัน',
    filterReset: 'รีเซ็ต',
    selectAll: 'เลือกทั้งหมดในหน้านี้',
    selectInvert: 'เลือกสถานะตรงกันข้าม',
    sortTitle: 'เรียง',
    expand: 'แสดงแถวข้อมูล',
    collapse: 'ย่อแถวข้อมูล'
  },
  Modal: {
    okText: 'ตกลง',
    cancelText: 'ยกเลิก',
    justOkText: 'ตกลง'
  },
  Popconfirm: {
    okText: 'ตกลง',
    cancelText: 'ยกเลิก'
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'ค้นหา',
    itemUnit: 'ชิ้น',
    itemsUnit: 'ชิ้น'
  },
  Upload: {
    uploading: 'กำลังอัปโหลด...',
    removeFile: 'ลบไฟล์',
    uploadError: 'เกิดข้อผิดพลาดในการอัปโหลด',
    previewFile: 'ดูตัวอย่างไฟล์',
    downloadFile: 'ดาวน์โหลดไฟล์'
  },
  Empty: {
    description: 'ไม่มีข้อมูล'
  },
  Icon: {
    icon: 'ไอคอน'
  },
  Text: {
    edit: 'แก้ไข',
    copy: 'คัดลอก',
    copied: 'คัดลอกแล้ว',
    expand: 'ขยาย'
  },
  PageHeader: {
    back: 'ย้อนกลับ'
  }
};

export { th_TH as default };
