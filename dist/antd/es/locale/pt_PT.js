var Pagination = {
  // Options.jsx
  items_per_page: '/ página',
  jump_to: 'Saltar',
  jump_to_confirm: 'confirmar',
  page: '',

  // Pagination.jsx
  prev_page: 'Página Anterior',
  next_page: 'Página Seguinte',
  prev_5: 'Recuar 5 Páginas',
  next_5: 'Avançar 5 Páginas',
  prev_3: 'Recuar 3 Páginas',
  next_3: 'Avançar 3 Páginas'
};

var CalendarLocale = {
  today: 'Hoje',
  now: 'Agora',
  backToToday: 'Hoje',
  ok: 'Ok',
  clear: 'Limpar',
  month: 'Mês',
  year: 'Ano',
  timeSelect: 'Selecionar hora',
  dateSelect: 'Selecionar data',
  monthSelect: 'Selecionar mês',
  yearSelect: 'Selecionar ano',
  decadeSelect: 'Selecionar década',
  yearFormat: 'YYYY',
  dateFormat: 'D/M/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'D/M/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Mês anterior (PageUp)',
  nextMonth: 'Mês seguinte (PageDown)',
  previousYear: 'Ano anterior (Control + left)',
  nextYear: 'Ano seguinte (Control + right)',
  previousDecade: 'Década anterior',
  nextDecade: 'Década seguinte',
  previousCentury: 'Século anterior',
  nextCentury: 'Século seguinte'
};

var locale$1 = {
  placeholder: 'Hora'
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var locale = {
  lang: _extends(_extends({}, CalendarLocale), {
    placeholder: 'Data',
    rangePlaceholder: ['Data inicial', 'Data final'],
    today: 'Hoje',
    now: 'Agora',
    backToToday: 'Hoje',
    ok: 'Ok',
    clear: 'Limpar',
    month: 'Mês',
    year: 'Ano',
    timeSelect: 'Hora',
    dateSelect: 'Selecionar data',
    monthSelect: 'Selecionar mês',
    yearSelect: 'Selecionar ano',
    decadeSelect: 'Selecionar década',
    yearFormat: 'YYYY',
    dateFormat: 'D/M/YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'D/M/YYYY HH:mm:ss',
    monthFormat: 'MMMM',
    monthBeforeYear: false,
    previousMonth: 'Mês anterior (PageUp)',
    nextMonth: 'Mês seguinte (PageDown)',
    previousYear: 'Ano anterior (Control + left)',
    nextYear: 'Ano seguinte (Control + right)',
    previousDecade: 'Última década',
    nextDecade: 'Próxima década',
    previousCentury: 'Último século',
    nextCentury: 'Próximo século'
  }),
  timePickerLocale: _extends(_extends({}, locale$1), {
    placeholder: 'Hora'
  })
}; // All settings at:

var pt_PT = {
  locale: 'pt',
  Pagination: Pagination,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  Table: {
    filterTitle: 'Filtro',
    filterConfirm: 'Aplicar',
    filterReset: 'Reiniciar',
    selectAll: 'Selecionar página atual',
    selectInvert: 'Inverter seleção',
    sortTitle: 'Ordenação'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Cancelar',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Cancelar'
  },
  Transfer: {
    searchPlaceholder: 'Procurar...',
    itemUnit: 'item',
    itemsUnit: 'itens'
  },
  Upload: {
    uploading: 'A carregar...',
    removeFile: 'Remover',
    uploadError: 'Erro ao carregar',
    previewFile: 'Pré-visualizar',
    downloadFile: 'Baixar'
  },
  Empty: {
    description: 'Sem resultados'
  }
};

export { pt_PT as default };
