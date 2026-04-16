var warning = {};

var hasRequiredWarning;

function requireWarning () {
	if (hasRequiredWarning) return warning;
	hasRequiredWarning = 1;

	Object.defineProperty(warning, "__esModule", {
	  value: true
	});
	warning.warning = warning$1;
	warning.note = note;
	warning.resetWarned = resetWarned;
	warning.call = call;
	warning.warningOnce = warningOnce;
	warning.noteOnce = noteOnce;
	warning.default = void 0;

	/* eslint-disable no-console */
	var warned = {};

	function warning$1(valid, message) {
	}

	function note(valid, message) {
	}

	function resetWarned() {
	  warned = {};
	}

	function call(method, valid, message) {
	  if (!valid && !warned[message]) {
	    method(false, message);
	    warned[message] = true;
	  }
	}

	function warningOnce(valid, message) {
	  call(warning$1, valid, message);
	}

	function noteOnce(valid, message) {
	  call(note, valid, message);
	}

	var _default = warningOnce;
	/* eslint-enable */

	warning.default = _default;
	return warning;
}

export { requireWarning as r };
