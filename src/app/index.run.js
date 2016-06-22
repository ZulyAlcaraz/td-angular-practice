(function() {
  'use strict';

  angular
    .module('tdAngularPractice')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $state, $log, $http, API_VIMEO) {

    $http.defaults.headers.common.Authorization = 'Bearer ' + API_VIMEO.token;

    var deregistrationSearchEvent = $rootScope.$on('search:query', function (event, query) {
      $state.go('page.search', { query: query, page: 1 });
    });

    var deregistrationStateChangeStart = $rootScope.$on('$stateChangeStart', function(event, toState) {
      if (toState.resolve) {
        $rootScope.$broadcast('loader:startLoad', '');
      }
    });

    var deregistrationStateChangeSuccess = $rootScope.$on('$stateChangeSuccess', function(event, toState) {
      if (toState.resolve) {
        $rootScope.$broadcast('loader:endLoad', '');
      }
    });

    $rootScope.$on('$destroy', function () {
      deregistrationSearchEvent();
      deregistrationStateChangeStart();
      deregistrationStateChangeSuccess();
    });

    $log.debug('runBlock end');
  }

})();
