/*jslint white: true */

(function () {
  'use strict';

  var Spotify = window.Spotify = window.Spotify || {};

  Spotify.TrackModel = function (attributes) {
    return Utils.extend({}, window.MyFrame.Model(attributes));
  };
})();
