(function() {
  'use strict';

  angular
    .module('tdAngularPractice')
    .factory('VideoFactory', videoFactory);

  /** @ngInject */
  function videoFactory ($resource, API_VIMEO, PAGINATION) {
    var videos = {};

    videos.getByCategoryId = function (categoryId, params) {
      return $resource(API_VIMEO.host + 'categories/' + categoryId + '/videos', {}, {
        get: {
          params: params
        }
      }).get().$promise;
    };

    videos.getByQuery = function (params) {
      return $resource(API_VIMEO.host + '/videos', {}, {
        get: {
          params: params
        }
      }).get().$promise;
    };

    videos.getById = function (videoId) {
      return $resource(API_VIMEO.host + 'videos/' + videoId, {}, {}).get().$promise;
    };

    videos.getParamsConfiguration = function (query, page, perPage) {
      var searchConfiguration = {
        page: page ? page : 1,
        per_page: perPage ? perPage : PAGINATION.perPage
      };

      if (query) {
        searchConfiguration.query = query;
      }

      return searchConfiguration;
    };

    return videos;
  }
})();
