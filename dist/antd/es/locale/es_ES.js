var Pagination = {
  // Options.jsx
  items_per_page: '/ página',
  jump_to: 'Ir a',
  jump_to_confirm: 'confirmar',
  page: '',

  // Pagination.jsx
  prev_page: 'Página anterior',
  next_page: 'Página siguiente',
  prev_5: '5 páginas previas',
  next_5: '5 páginas siguientes',
  prev_3: '3 páginas previas',
  next_3: '3 páginas siguientes'
};

var CalendarLocale = {
  today: 'Hoy',
  now: 'Ahora',
  backToToday: 'Volver a hoy',
  ok: 'Aceptar',
  clear: 'Limpiar',
  month: 'Mes',
  year: 'Año',
  timeSelect: 'Seleccionar hora',
  dateSelect: 'Seleccionar fecha',
  monthSelect: 'Elegir un mes',
  yearSelect: 'Elegir un año',
  decadeSelect: 'Elegir una década',
  yearFormat: 'YYYY',
  dateFormat: 'D/M/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'D/M/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Mes anterior (PageUp)',
  nextMonth: 'Mes siguiente (PageDown)',
  previousYear: 'Año anterior (Control + left)',
  nextYear: 'Año siguiente (Control + right)',
  previousDecade: 'Década anterior',
  nextDecade: 'Década siguiente',
  previousCentury: 'Siglo anterior',
  nextCentury: 'Siglo siguiente'
};

var locale$1 = {
  placeholder: 'Seleccionar hora'
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var locale = {
  lang: _extends({
    placeholder: 'Seleccionar fecha',
    rangePlaceholder: ['Fecha inicial', 'Fecha final']
  }, CalendarLocale),
  timePickerLocale: _extends({}, locale$1)
}; // All settings at:

var es_ES = {
  locale: 'es',
  Pagination: Pagination,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  global: {
    placeholder: 'Seleccione'
  },
  Table: {
    filterTitle: 'Filtrar menú',
    filterConfirm: 'Aceptar',
    filterReset: 'Reiniciar',
    selectAll: 'Seleccionar todo',
    selectInvert: 'Invertir selección',
    sortTitle: 'Ordenar'
  },
  Modal: {
    okText: 'Aceptar',
    cancelText: 'Cancelar',
    justOkText: 'Aceptar'
  },
  Popconfirm: {
    okText: 'Aceptar',
    cancelText: 'Cancelar'
  },
  Transfer: {
    searchPlaceholder: 'Buscar aquí',
    itemUnit: 'elemento',
    itemsUnit: 'elementos'
  },
  Upload: {
    uploading: 'Subiendo...',
    removeFile: 'Eliminar archivo',
    uploadError: 'Error al subir el archivo',
    previewFile: 'Vista previa',
    downloadFile: 'Descargar archivo'
  },
  Empty: {
    description: 'No hay datos'
  },
  Icon: {
    icon: 'ícono'
  },
  Text: {
    edit: 'editar',
    copy: 'copiar',
    copied: 'copiado',
    expand: 'expandir'
  },
  PageHeader: {
    back: 'volver'
  }
};

export { es_ES as default };
