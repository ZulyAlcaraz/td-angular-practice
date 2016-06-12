(function() {
  'use strict';

  angular
    .module('tdAngularPractice')
    .config(config);

  /** @ngInject */
  function config($logProvider, $translateProvider, tmhDynamicLocaleProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set configuration for translate
    $translateProvider.useMissingTranslationHandlerLog();
    $translateProvider.useStaticFilesLoader({
        prefix: 'resources/locale-',
        suffix: '.json'
    });
    $translateProvider.preferredLanguage('en_US');
    $translateProvider.useLocalStorage();

    tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');
  }

})();
