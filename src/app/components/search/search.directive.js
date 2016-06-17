(function() {
  'use strict';

  angular
    .module('tdAngularPractice')
    .directive('search', searchDirective);

  /** @ngInject */
  function searchDirective () {
    var directive = {
      templateUrl:'app/components/search/search.html',
      restrict :'E',
      link: function () {}
    }
    return directive;
  }
})();
