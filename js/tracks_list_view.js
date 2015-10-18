/*jslint white: true */

(function () {
  'use strict';

  var Spotify = window.Spotify = window.Spotify || {};

  Spotify.TracksListView = function (collection) {
    var _viewElements,
        View = Spotify.TrackView;
    function template(viewElements) {
      var el = Templates.resultsElement();
      var panel = Templates.panelElement();
      var panelHeader = Templates.panelHeaderElement('Tracks');
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
      setListeners: function(audioElement) {
        _viewElements.forEach(function (viewElement) {
          viewElement.setListener(audioElement);
        })
      }
    };
  };

})();
