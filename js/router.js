/*jslint white: true */

(function () {
  'use strict';

  var Spotify = window.Spotify = window.Spotify || {};

  Spotify.Router = function (container, inputElement, buttonElement) {
    var artistsCollection = Spotify.ArtistsCollection(),
        artistsListView = Spotify.ArtistsListView(artistsCollection),
        albumsCollection = Spotify.AlbumsCollection(),
        albumsListView = Spotify.AlbumsListView(albumsCollection),
        tracksCollection = Spotify.TracksCollection(),
        tracksListView = Spotify.TracksListView(tracksCollection),
        audioElement = document.getElementById('audio-element');

    function attachAlbumsView() {
      attachView(albumsListView);
      albumsListView.setListeners(function (tracksUrl) {
        tracksCollection.fetch(tracksUrl, attachTracksView);
      });
    }
    function attachArtistsView() {
      attachView(artistsListView);
      artistsListView.setListeners(function (albumsUrl) {
        albumsCollection.fetch(albumsUrl, attachAlbumsView);
      });
    }
    function attachView(view) {
      container.appendChild(view.render().el);
    }
    function attachTracksView() {
      attachView(tracksListView);
      tracksListView.setListeners(audioElement);
    }
    return {
      init: function () {
        buttonElement.addEventListener('click', function () {
          artistsCollection.fetch(inputElement.value, attachArtistsView);
        });
      }
    };
  };

})();
