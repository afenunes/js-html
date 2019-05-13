"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function li(items) {
  return items.map(function (item) {
    return "<li>".concat(item, "</li>");
  });
}

var _default = li;
exports.default = _default;