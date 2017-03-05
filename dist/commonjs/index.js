'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _aureliaFroalaEditorPlugin = require('./aurelia-froala-editor-plugin');

Object.keys(_aureliaFroalaEditorPlugin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _aureliaFroalaEditorPlugin[key];
    }
  });
});