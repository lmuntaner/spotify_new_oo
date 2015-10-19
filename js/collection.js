/*jslint white: true */

(function () {
  'use strict';

  var MyFrame = window.MyFrame = window.MyFrame || {};

  MyFrame.CollectionModule = function (Model, _collection) {
    return {
      setCollection: function(elements) {
        _collection = elements.map(function (modelInfo) {
          return Model(modelInfo);
        });
      },
      handleErrors: function(error) {
        debugger;
      },
      collection: function () {
        return _collection;
      }
    };
  };

})();
