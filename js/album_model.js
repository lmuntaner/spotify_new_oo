/*jslint white: true */

(function () {
  'use strict';

  var Spotify = window.Spotify = window.Spotify || {};

  Spotify.AlbumModel = function (attributes) {
    return Utils.extend({}, window.MyFrame.Model(attributes));
  };
})();
