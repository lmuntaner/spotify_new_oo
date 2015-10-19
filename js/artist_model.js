/*jslint white: true */

(function () {
  'use strict';

  var Spotify = window.Spotify = window.Spotify || {};

  Spotify.ArtistModel = function (attributes) {
    return Utils.extend({}, window.MyFrame.Model(attributes));
  };
})();
