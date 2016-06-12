(function() {
  'use strict';

  angular
    .module('tdAngularPractice')
    .config(config);

  /** @ngInject */
  function config($logProvider, $translateProvider, tmhDynamicLocaleProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

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
