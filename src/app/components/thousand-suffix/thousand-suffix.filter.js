(function() {
	'use strict';

	angular
		.module('tdAngularPractice')
		.filter('thousandSuffix', thousandSuffixFilter);

	/** @ngInject */
	function thousandSuffixFilter ($window) {
		return function (input, decimals) {
      var exp; 
      var suffixes = ['k', 'M', 'G', 'T', 'P', 'E'];

      if($window.isNaN(input)) {
        return null;
      }

      if(input < 1000) {
        return input;
      }

      exp = Math.floor(Math.log(input) / Math.log(1000));

      return (input / Math.pow(1000, exp)).toFixed(decimals) + suffixes[exp - 1];
    };
	}
})();
