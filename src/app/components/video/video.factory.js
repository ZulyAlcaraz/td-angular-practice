(function() {
  'use strict';

  angular
    .module('tdAngularPractice')
    .factory('VideoFactory', videoFactory);

  /** @ngInject */
  function videoFactory ($resource, API_VIMEO) {
      var videos = {};

      videos.getByCategoryId = function (categoryId, params) {
        return $resource(API_VIMEO.host + 'categories/' + categoryId + '/videos', {}, {
          get: {
            params: params
          }
        }).get();
      };

      videos.getByQuery = function (params) {
        return $resource(API_VIMEO.host + '/videos', {}, {
          get: {
            params: params
          }
        }).get();
      };

      videos.getById = function (videoId) {
        return $resource(API_VIMEO.host + 'videos/' + videoId, {}, {}).get();
      };

      return videos;
  }
})();