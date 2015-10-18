/*jslint white: true */

(function () {
  'use strict';

  function ready(fn) {
    if (document.readyState != 'loading'){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  var Spotify = window.Spotify = window.Spotify || {};
  Spotify.rootUrl = "https://api.spotify.com/v1/";

  var Initializer = Spotify.Initializer = function (){
    return {
      init: function () {
        var resultsContainer = document.getElementById('results-container'),
            inputElement = document.getElementById('search-term-input'),
            buttonElement = document.getElementById('search-button');
        var router = Spotify.Router(resultsContainer, inputElement, buttonElement);
        router.init();
      }
    }
  }

  var initializer = Initializer();
  ready(initializer.init);

})();
