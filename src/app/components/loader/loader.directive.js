(function() {
	'use strict';

	angular
		.module('tdAngularPractice')
		.directive('loader', loaderDirective);

	/** @ngInject */
	function loaderDirective ($state) {
		var directive;
		directive = {
			templateUrl: 'app/components/loader/loader.html',
			restrict: 'E',
			scope: {},
			replace: true,
			link: function (scope, element) {
        scope.state = $state;
        
				scope.$on('loader:startLoad', function () {
					if (element.hasClass('hidde-loader')) {
						element.removeClass('hidde-loader');
					}
				});

				scope.$on('loader:endLoad', function () {
					if (!element.hasClass('hidde-loader')) {
						element.addClass('hidde-loader');
					}
				});
			}
		};
		return directive;
	}
})();
