(function() {
	'use strict';

	angular
		.module('tdAngularPractice')
		.controller('DetailController', detailController);

	/** @ngInject */
	function detailController (categoryList, video, $sce) {
		var vm = this;
		vm.categoryList = categoryList;
		vm.video = video;
		vm.videoHtml = $sce.trustAsHtml(vm.video.embed.html);
	}
})();
