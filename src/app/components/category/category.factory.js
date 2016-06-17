(function() {
  'use strict';

  angular
    .module('tdAngularPractice')
    .factory('CategoryFactory', categoryFactory);

  /** @ngInject */
  function categoryFactory ($resource, API_VIMEO) {
    var category = $resource(API_VIMEO.host + 'categories');
    return category;
  }
})();
