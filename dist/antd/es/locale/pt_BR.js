var Pagination = {
  // Options.jsx
  items_per_page: '/ página',
  jump_to: 'Vá até',
  jump_to_confirm: 'confirme',
  page: '',

  // Pagination.jsx
  prev_page: 'Página anterior',
  next_page: 'Próxima página',
  prev_5: '5 páginas anteriores',
  next_5: '5 próximas páginas',
  prev_3: '3 páginas anteriores',
  next_3: '3 próximas páginas'
};

var CalendarLocale = {
  today: 'Hoje',
  now: 'Agora',
  backToToday: 'Voltar para hoje',
  ok: 'Ok',
  clear: 'Limpar',
  month: 'Mês',
  year: 'Ano',
  timeSelect: 'Selecionar tempo',
  dateSelect: 'Selecionar data',
  monthSelect: 'Escolher mês',
  yearSelect: 'Escolher ano',
  decadeSelect: 'Escolher década',
  yearFormat: 'YYYY',
  dateFormat: 'D/M/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'D/M/YYYY HH:mm:ss',
  monthBeforeYear: false,
  previousMonth: 'Mês anterior (PageUp)',
  nextMonth: 'Próximo mês (PageDown)',
  previousYear: 'Ano anterior (Control + esquerda)',
  nextYear: 'Próximo ano (Control + direita)',
  previousDecade: 'Década anterior',
  nextDecade: 'Próxima década',
  previousCentury: 'Século anterior',
  nextCentury: 'Próximo século'
};

var locale$1 = {
  placeholder: 'Hora'
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var locale = {
  lang: _extends({
    placeholder: 'Selecionar data',
    rangePlaceholder: ['Data de início', 'Data de fim']
  }, CalendarLocale),
  timePickerLocale: _extends({}, locale$1)
}; // All settings at:

var pt_BR = {
  locale: 'pt-br',
  Pagination: Pagination,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  Table: {
    filterTitle: 'Filtro',
    filterConfirm: 'OK',
    filterReset: 'Resetar',
    selectAll: 'Selecionar página atual',
    selectInvert: 'Inverter seleção'
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
    searchPlaceholder: 'Procurar',
    itemUnit: 'item',
    itemsUnit: 'items'
  },
  Upload: {
    uploading: 'Enviando...',
    removeFile: 'Remover arquivo',
    uploadError: 'Erro no envio',
    previewFile: 'Visualizar arquivo',
    downloadFile: 'Baixar arquivo'
  },
  Empty: {
    description: 'Não há dados'
  },
  Text: {
    edit: 'editar',
    copy: 'copiar',
    copied: 'copiado',
    expand: 'expandir'
  }
};

export { pt_BR as default };
