(function() {
  'use strict';

  angular
    .module('tdAngularPractice')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $http, API_VIMEO) {

    $log.debug('runBlock end');
    $http.defaults.headers.common.Authorization = 'Bearer ' + API_VIMEO.token;
  }

})();
