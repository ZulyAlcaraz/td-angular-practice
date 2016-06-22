(function() {
  'use strict';

  angular
    .module('tdAngularPractice')
    .directive('loader', loaderDirective);

  /** @ngInject */
  function loaderDirective () {
    var directive = {
      templateUrl:'app/components/loader/loader.html',
      restrict :'E',
      scope: {},
      replace: true,
      link: function (scope, element) {
        scope.$on('loader:startLoad', function () {
          if(element.hasClass('hidde-loader')){
            element.removeClass('hidde-loader');
          } else if (!element.hasClass('show-loader')){
            element.addClass('show-loader');
          }
        });

        scope.$on('loader:endLoad', function () {
          if(element.hasClass('show-loader')){
            element.removeClass('show-loader');
          } else if (!element.hasClass('hidde-loader')){
            element.addClass('hidde-loader');
          }
        });
      }
    }
    return directive;
  }
})();
