(function() {
  'use strict';

  angular
    .module('tdAngularPractice')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
