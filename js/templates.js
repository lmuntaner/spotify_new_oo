/*jslint white: true */

(function () {
  'use strict';

  var Templates = window.Templates = window.Templates || {};

  Templates.resultsElement = function() {
    var element = document.createElement('div');
    element.className += 'col-md-4';
    return element;
  };

  Templates.panelElement = function() {
    var panel = document.createElement('div');
    panel.className += 'panel panel-info';
    return panel;
  };

  Templates.panelHeaderElement = function(header) {
    var panelHeader = document.createElement('div');
    panelHeader.className += 'panel-heading';
    panelHeader.innerHTML = header;
    return panelHeader;
  };

  Templates.panelBodyElement = function(elementViews) {
    var panelBody = document.createElement('div');
    panelBody.className += 'panel-body';
    var listContainer = document.createElement('div');
    listContainer.className += 'list-group';
    elementViews.forEach(function (elementView) {
      listContainer.appendChild(elementView.render().el);
    });
    panelBody.appendChild(listContainer);
    return panelBody;
  };

  Templates.listItem = function() {
    var el = document.createElement('a');
    el.setAttribute('href', '#');
    el.className += 'list-group-item';
    return el
  };
})();
