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
    function setCollection(elements) {
      _collection = elements.map(function (modelInfo) {
        return Model(modelInfo);
      });
    }
    function handleErrors(error) {
      debugger;
    }
    return {
      fetch: function (term, callback) {
        Utils.get({
          url: url(term),
          success: function (data) {
            setCollection(data.artists.items);
            callback();
          },
          error: handleErrors
        });
      },
      collection: function () {
        return _collection
      }
    };
  };

})();
