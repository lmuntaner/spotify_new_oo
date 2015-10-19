/*jslint white: true */

(function () {
  'use strict';

  var Spotify = window.Spotify = window.Spotify || {};

  Spotify.TracksCollection = function () {
    var Model = Spotify.TrackModel,
        _collection;
    var collectionModule = window.MyFrame.CollectionModule(Model, _collection);
    return {
      fetch: function (tracksUrl, callback) {
        Utils.get({
          url: tracksUrl,
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
