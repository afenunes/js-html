"use strict";

function a(href) {
  var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (href) {
    return "<a href=\"".concat(href, "\">").concat(content, "</a>");
  }

  return "<a>".concat(content, "</a>");
}