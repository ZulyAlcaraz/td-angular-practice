(function() {
  'use strict';

  angular
    .module('tdAngularPractice')
    .controller('MainController', mainController);

  /** @ngInject */
  function mainController($state, $stateParams, categoryList, videos, PAGINATION) {
  	var vm = this;
  	vm.categoryList = categoryList;
  	vm.maxSize = PAGINATION.maxSize;
  	vm.perPage = PAGINATION.perPage;
  	vm.page = $stateParams.page;
  	vm.totalItems = videos.total
  	vm.videos = videos.data;

  	vm.gridOptions = {
      cssGrid : false,
      refreshOnImgLoad: false,
      gridWidth: 295,
      gutterSize: 10
    };
  	
  	vm.videos.map(function (video) {
      video.id = video.uri.split('/').pop();
    });

    vm.changePage = function () {
    	$state.go('.', { page: vm.page});
    };
  }

})();
