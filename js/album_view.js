/*jslint white: true */

(function () {
  'use strict';

  var Spotify = window.Spotify = window.Spotify || {};

  Spotify.AlbumView = function (model) {
    function template () {
      var el = Templates.listItem();
      el.text = model.get('name');
      return el
    }
    return {
      render: function () {
        this.el = template();
        return this;
      },
      setListener: function (callback) {
        this.el.addEventListener('click', function(event) {
          event.preventDefault();
          var url = model.get('href') + '/tracks';
          callback(url);
        })
      }
    };
  };

})();
