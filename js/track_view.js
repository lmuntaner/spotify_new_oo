/*jslint white: true */

(function () {
  'use strict';

  var Spotify = window.Spotify = window.Spotify || {};

  Spotify.TrackView = function (model) {
    function template () {
      var el = Templates.listItem();
      el.setAttribute('data-preview_url', model.get('preview_url'));
      el.text = model.get('name');
      return el
    }
    return {
      render: function () {
        this.el = template();
        return this;
      },
      setListener: function (audioElement) {
        this.el.addEventListener('click', function(event) {
          event.preventDefault();
          var preview_url = model.get('preview_url');
          audioElement.setAttribute('src', preview_url);
          audioElement.play();
        })
      }
    };
  };

})();
