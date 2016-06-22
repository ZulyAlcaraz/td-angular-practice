(function() {
  'use strict';

  angular
    .module('tdAngularPractice')
    .directive('sideMenu', sideMenuDirective);

  /** @ngInject */
  function sideMenuDirective ($document) {
    var directive = {
      restrict :'E',
      replace: true,
      scope: {
        listItems: '='
      },
      templateUrl:'app/components/side-menu/side-menu.html',
      link: function (scope, element) {

        var closeButtom = element[0].querySelector('.close-menu');
        var openButtom = $document[0].querySelector('.show-menu');
        var aside = $document[0].querySelector('#menu');

        scope.closeMenu = function () {
          if (angular.element(aside).hasClass('show')) {
            angular.element(aside).removeClass('show');
          }
        };

        angular.element(openButtom).on('click', function () {
          if (angular.element(aside).hasClass('show')) {
            angular.element(aside).removeClass('show');
          }else {
            angular.element(aside).addClass('show');
          }
        });

        angular.element(closeButtom).on('click', function () {
          scope.closeMenu();
        });

        scope.$on('$destroy', function () {
          angular.element(openButtom).off('click');
          angular.element(closeButtom).off('click');
        });

      }
    }
    return directive;
  }
})();
