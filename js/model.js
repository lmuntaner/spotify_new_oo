/*jslint white: true */

(function () {
  'use strict';

  var MyFrame = window.MyFrame = window.MyFrame || {};

  MyFrame.Model = function (attributes) {
    return {
      get: function(key) {
        return attributes[key];
      },
      set: function(key, value) {
        attributes[key] = value;
      }
    };
  };
})();
