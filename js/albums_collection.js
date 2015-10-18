/*jslint white: true */

(function () {
  'use strict';

  var Spotify = window.Spotify = window.Spotify || {};

  Spotify.AlbumsCollection = function () {
    var Model = Spotify.AlbumModel,
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
      fetch: function (albumsUrl, callback) {
        Utils.get({
          url: albumsUrl,
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
