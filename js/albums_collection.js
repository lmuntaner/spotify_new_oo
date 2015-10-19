/*jslint white: true */

(function () {
  'use strict';

  var Spotify = window.Spotify = window.Spotify || {};

  Spotify.AlbumsCollection = function () {
    var Model = Spotify.AlbumModel,
        _collection;
    var collectionModule = window.MyFrame.CollectionModule(Model, _collection);
    return {
      fetch: function (albumsUrl, callback) {
        Utils.get({
          url: albumsUrl,
          success: function (data) {
            collectionModule.setCollection(data.items);
            callback();
          },
          error: collectionModule.handleErrors
        });
      },
      collection: collectionModule.collection
    };
  };

})();
