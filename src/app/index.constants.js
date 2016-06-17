(function() {
	'use strict';

	angular
		.module('tdAngularPractice')

		.constant('API_VIMEO', {
			'token' : '3203355a36af0c7b46932508d90321eb',
			'host'  : 'https://api.vimeo.com/'
		})

		.constant('PAGINATION', {
			'maxSize' : 4,
			'perPage' : 12
		})

		.constant('LOCALES', {
			'locales': {
				'en': 'English',
				'es': 'Español'
			},
			'localesMap' : {
				'en_US' : 'en',
				'en_UK' : 'en'
			},
			'preferredLocale': 'en'
		});
		
})();
