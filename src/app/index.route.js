(function() {
  'use strict';

  angular
    .module('tdAngularPractice')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('page', {
        url: '',
        abstract: true,
        params: {
          page: 1
        },
        resolve: {
          /** @ngInject */
          categories: function (CategoryFactory) {
            var categories = CategoryFactory.getCategories().$promise;
            return categories.then(function (responseCategories) {
              var categoriesId = CategoryFactory.getCategoriesId(responseCategories);
              return categoriesId;
            });
          },
          /** @ngInject */
          categoryList: function (CategoryFactory, categories) {
            return CategoryFactory.getCategoryList(categories);
          }
        }
      })
      .state('page.category', {
        url: '/category/:id?page',
        resolve:{
          /** @ngInject */
          videos: function ($stateParams, VideoFactory, PAGINATION) {
            if ($stateParams.id) {
              var videoParams = VideoFactory.getParamsConfiguration(null, $stateParams.page, PAGINATION.perPage);
              return VideoFactory.getByCategoryId($stateParams.id, videoParams);
            }

          }
        },
        /** @ngInject */
        onEnter: function ($state, $stateParams, categories) {
          if (!$stateParams.id && categories.length > 0) {
            $state.go('page.category', {
              id: categories[0].id,
              page: 1
            });
          }
        },
        views: {
          'content@' : {
            templateUrl: 'app/main/main.html',
            controller: 'MainController',
            controllerAs: 'vm'
          }
        }
      })
      .state('page.search', {
        url: '/search?query?page',
        resolve:{
          /** @ngInject */
          videos: function ($stateParams, VideoFactory, PAGINATION) {
            if ($stateParams.query) {
              var videoParams = VideoFactory.getParamsConfiguration($stateParams.query, $stateParams.page, PAGINATION.perPage);
              return VideoFactory.getByQuery(videoParams);
            }
          }
        },
        /** @ngInject */
        onEnter: function ($state, $stateParams, categoryList) {
          if (!$stateParams.query && categoryList.length > 0) {
            $state.go('page.category', {
              id: categoryList[0].id,
              page: 1
            });
          }
        },
        views: {
          'content@' : {
            templateUrl: 'app/main/main.html',
            controller: 'MainController',
            controllerAs: 'vm'
          }
        }
      })
      .state('page.detail', {
        url: '/detail/:id',
        resolve:{
          /** @ngInject */
          video: function ($stateParams, VideoFactory) {
            if ($stateParams.id) {
              return VideoFactory.getById($stateParams.id);
            }

          }
        },
        /** @ngInject */
        onEnter: function ($state, $stateParams, categoryList, video) {
          if (!video) {
            $state.go('page.category', {
              id: categoryList[0].id,
              page: 1
            });
          }
        },
        views: {
          'content@' : {
            templateUrl: 'app/detail/detail.html',
            controller: 'DetailController',
            controllerAs: 'vm'
          }
        }
      });

    $urlRouterProvider.otherwise('/category/');
  }

})();
