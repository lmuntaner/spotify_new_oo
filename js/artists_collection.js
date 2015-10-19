/*jslint white: true */

(function () {
  'use strict';

  var Spotify = window.Spotify = window.Spotify || {};

  Spotify.ArtistsCollection = function () {
    var Model = Spotify.ArtistModel,
        _collection;
    function url(term) {
      var termUrl = Spotify.rootUrl + "search?q=" + term + "&type=artist";
      return encodeURI(termUrl);
    }
    var collectionModule = window.MyFrame.CollectionModule(Model, _collection);
    return {
      fetch: function (term, callback) {
        Utils.get({
          url: url(term),
          success: function (data) {
            collectionModule.setCollection(data.artists.items);
            callback();
          },
          error: collectionModule.handleErrors
        });
      },
      collection: collectionModule.collection
    };
  };

})();
