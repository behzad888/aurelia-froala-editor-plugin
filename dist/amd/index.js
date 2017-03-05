define(['exports', './aurelia-froala-editor-plugin'], function (exports, _aureliaFroalaEditorPlugin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_aureliaFroalaEditorPlugin).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _aureliaFroalaEditorPlugin[key];
      }
    });
  });
});