(function() {
  'use strict';

  angular
    .module('tdAngularPractice')
    .directive('search', searchDirective);

  /** @ngInject */
  function searchDirective ($rootScope) {
    var directive = {
      templateUrl:'app/components/search/search.html',
      restrict :'E',
      link: function (scope) {
        scope.search = function () {
          if(scope.query){
            $rootScope.$broadcast('search:query', scope.query);
          }
        };

        scope.keyPress = function (keyEvent) {
          if(keyEvent.which === 13){
            scope.search();
          }
        };
      }
    }
    return directive;
  }
})();
