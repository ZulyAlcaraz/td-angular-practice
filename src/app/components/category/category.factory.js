(function() {
  'use strict';

  angular
    .module('tdAngularPractice')
    .factory('CategoryFactory', categoryFactory);

  /** @ngInject */
  function categoryFactory ($resource, API_VIMEO) {
    var category = {};

    category.getCategories = function () {
      return $resource(API_VIMEO.host + 'categories').get();
    };

    category.getCategoriesId = function (categories) {
      var categoriesId = categories.data;
      categoriesId.map(function (category) {
        category.id = category.uri.split('/').pop();
      });
      return categoriesId;
    };

    category.getCategoryList = function (categories) {
      var categoryList = [];

      if(categories){
        categoryList = categories.map(function(category){
          var categoryItem = {};
          categoryItem.state = 'page.category';
          categoryItem.name = category.name;
          categoryItem.params = {id: category.id, page: 1};
          return categoryItem;
        });
      }

      return categoryList;
    };

    return category;
  }
})();
