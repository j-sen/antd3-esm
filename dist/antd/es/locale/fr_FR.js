var Pagination = {
  // Options.jsx
  items_per_page: '/ page',
  jump_to: 'Aller à',
  jump_to_confirm: 'confirmer',
  page: '',

  // Pagination.jsx
  prev_page: 'Page précédente',
  next_page: 'Page suivante',
  prev_5: '5 Pages précédentes',
  next_5: '5 Pages suivantes',
  prev_3: '3 Pages précédentes',
  next_3: '3 Pages suivantes'
};

var CalendarLocale = {
  today: 'Aujourd\'hui',
  now: 'Maintenant',
  backToToday: 'Aujourd\'hui',
  ok: 'Ok',
  clear: 'Rétablir',
  month: 'Mois',
  year: 'Année',
  timeSelect: 'Sélectionner l\'heure',
  dateSelect: 'Sélectionner la date',
  monthSelect: 'Choisissez un mois',
  yearSelect: 'Choisissez une année',
  decadeSelect: 'Choisissez une décennie',
  yearFormat: 'YYYY',
  dateFormat: 'DD/MM/YYYY',
  dayFormat: 'DD',
  dateTimeFormat: 'DD/MM/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Mois précédent (PageUp)',
  nextMonth: 'Mois suivant (PageDown)',
  previousYear: 'Année précédente (Ctrl + gauche)',
  nextYear: 'Année prochaine (Ctrl + droite)',
  previousDecade: 'Décennie précédente',
  nextDecade: 'Décennie suivante',
  previousCentury: 'Siècle précédent',
  nextCentury: 'Siècle suivant'
};

var locale$1 = {
  placeholder: "Sélectionner l'heure"
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var locale = {
  lang: _extends({
    placeholder: 'Sélectionner une date',
    rangePlaceholder: ['Date de début', 'Date de fin']
  }, CalendarLocale),
  timePickerLocale: _extends({}, locale$1)
}; // All settings at:

var fr_FR = {
  locale: 'fr',
  Pagination: Pagination,
  DatePicker: locale,
  TimePicker: locale$1,
  Calendar: locale,
  Table: {
    filterTitle: 'Filtrer',
    filterConfirm: 'OK',
    filterReset: 'Réinitialiser'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Annuler',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Annuler'
  },
  Transfer: {
    searchPlaceholder: 'Recherche',
    itemUnit: 'élément',
    itemsUnit: 'éléments'
  },
  Empty: {
    description: 'Aucune donnée'
  },
  Upload: {
    uploading: 'Téléchargement...',
    removeFile: 'Effacer le fichier',
    uploadError: 'Erreur de téléchargement',
    previewFile: 'Fichier de prévisualisation',
    downloadFile: 'Télécharger un fichier'
  },
  Text: {
    edit: 'éditer',
    copy: 'copier',
    copied: 'copie effectuée',
    expand: 'développer'
  }
};

export { fr_FR as default };
