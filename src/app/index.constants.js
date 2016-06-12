/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('tdAngularPractice')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('LANGUAGES', {
      'locales': {
        'en_US': 'English'
      },
      'preferredLocale': 'en_US'
    });
})();
