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
            return CategoryFactory.get().$promise;
          },
          /** @ngInject */
          categoryList: function (CategoryFactory, categories) {
            var categoryList = categories.data;
            categoryList.map(function (category) {
              category.id = category.uri.split('/').pop();
            });
            return categoryList;
          }
        }
      })
      .state('page.category', {
        url: '/category/:id?page',
        resolve:{
          /** @ngInject */
          videos: function ($stateParams, VideoFactory) {
            if ($stateParams.id) {
              var videoParams = {
                page: $stateParams.page,
                per_page: 12
              };
              return VideoFactory.getByCategoryId($stateParams.id, videoParams).$promise;
            }
            
          }
        },
        onEnter: function ($state, $stateParams, categoryList) {
          if (!$stateParams.id && categoryList.length > 0) {
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
      });

    $urlRouterProvider.otherwise('/category/');
  }

})();
