/*jslint white: true */

(function () {
  'use strict';

  window.Utils = window.Utils || {};

  Utils.get = function (options) {
    var request = new XMLHttpRequest();
    var url = options.url;
    var successCallback = options.success;
    var errorCallback = options.error;

    request.open('GET', url, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(request.responseText);
        successCallback(data);
      } else {
        debugger;
      }
    };

    request.onerror = function() {
      debugger;
    };

    request.send();
  }
})();
