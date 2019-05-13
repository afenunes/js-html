"use strict";

function acronym(title) {
  var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (title) {
    return "<acronym title=\"".concat(title, "\">").concat(content, "</acronym>");
  }

  return "<acronym>".concat(content, "</acronym>");
}