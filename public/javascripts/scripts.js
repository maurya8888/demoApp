'use strict';

/* App Module */

var ijp = angular.module('ijp',[
		'ijpControllers',
		'ijpServices',
	]);

var ijpServices = angular.module('ijpServices', ['ngResource']);

ijpServices.factory('carousel', ['$resource', function($resource) {
	return $resource('', {},{
        carouseldata: {url:'/ajaxcontent/carouseldata.json', method:'GET', isArray:true}
	});
}]);

var ijpControllers = angular.module('ijpControllers',[]);

ijpControllers.controller('carouselCtrl', ['$scope','carousel', function($scope, carousel) {
	carousel.carouseldata(function(data) {
		$scope.carouseldata = data;
	})
}]);