"use strict";

function abbr(title) {
  var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (title) {
    return "<abbr title=\"".concat(title, "\">").concat(content, "</abbr>");
  }

  return "<abbr>".concat(content, "</abbr>");
}