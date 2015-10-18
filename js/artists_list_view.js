/*jslint white: true */

(function () {
  'use strict';

  var Spotify = window.Spotify = window.Spotify || {};

  Spotify.ArtistsListView = function (collection) {
    var _viewElements,
        View = Spotify.ArtistView;
    function template(viewElements) {
      var el = Templates.resultsElement();
      var panel = Templates.panelElement();
      var panelHeader = Templates.panelHeaderElement('Artists');
      panel.appendChild(panelHeader);
      var panelBody = Templates.panelBodyElement(viewElements);
      panel.appendChild(panelBody);
      el.appendChild(panel);
      return el;
    }
    return {
      render: function() {
        _viewElements = collection.collection().map(function (model) {
          return View(model);
        });
        this.el = template(_viewElements);
        return this;
      },
      setListeners: function(callback) {
        _viewElements.forEach(function (viewElement) {
          viewElement.setListener(callback);
        })
      }
    };
  };

})();
