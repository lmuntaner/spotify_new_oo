/*jslint white: true */

(function () {
  'use strict';

  var Spotify = window.Spotify = window.Spotify || {};

  Spotify.ArtistModel = function (attributes) {
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
