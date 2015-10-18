/*jslint white: true */

(function () {
  'use strict';

  var Spotify = window.Spotify = window.Spotify || {};

  Spotify.TracksCollection = function () {
    var Model = Spotify.TrackModel,
        _collection;
    function setCollection(elements) {
      _collection = elements.map(function (modelInfo) {
        return Model(modelInfo);
      });
    }
    function handleErrors(error) {
      debugger;
    }
    return {
      fetch: function (tracksUrl, callback) {
        Utils.get({
          url: tracksUrl,
          success: function (data) {
            setCollection(data.items);
            callback();
          },
          error: handleErrors
        });
      },
      collection: function () {
        return _collection;
      }
    };
  };

})();
