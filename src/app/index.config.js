(function() {
  'use strict';

  angular
    .module('tdAngularPractice')
    .config(config);

  /** @ngInject */
  function config($logProvider, $translateProvider, tmhDynamicLocaleProvider, LOCALES) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set configuration for translate
    $translateProvider.useMissingTranslationHandlerLog();
    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider
      .useStaticFilesLoader({
          prefix: 'languages/',
          suffix: '.json'
      })
      .registerAvailableLanguageKeys(['en', 'es'], LOCALES.localesMap)
      .preferredLanguage(LOCALES.preferredLocale)
      .fallbackLanguage(LOCALES.preferredLocale);

    $translateProvider.useLocalStorage();
    tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');
  }

})();
