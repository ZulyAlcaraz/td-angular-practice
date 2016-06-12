(function() {
  'use strict';

  angular
    .module('tdAngularPractice')
    .constant('LANGUAGES', {
      'locales': {
        'en_US': 'English'
      },
      'preferredLocale': 'en_US'
    });
})();
