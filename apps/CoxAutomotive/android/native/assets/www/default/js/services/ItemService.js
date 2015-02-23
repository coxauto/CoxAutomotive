
/* JavaScript content from js/services/ItemService.js in folder common */
var itemService = angular.module("itemService", ["ngResource"]);

itemService.factory('ItemService', ['$http', function($http) {
	//console.log("Inside WatsonService");

	return {
		saveItem: function(successHandler, errorHandler, criteria) {
			console.log("In saveItem block: " + criteria);

			var xhrRequest = {
				headers: {'Content-Type': 'application/json'},
				method: 'post',
				url: '/api/saveItem',
				data: criteria
			};

			$http(xhrRequest)
			.success(function(data, status, headers, config) {
				successHandler(data)
			})
			.error(function(data, status, headers, config) {
				errorHandler(data);
			})
		},

		listItem: function(successHandler, errorHandler) {
			var xhrRequest = {
				method: 'get',
				url: 'http://as-bm-watson.mybluemix.net/api/listItem'
			};

			$http(xhrRequest)
			.success(function(data, status, headers, config) {
				successHandler(data)
			})
			.error(function(data, status, headers, config) {
				errorHandler(data);
			})
		}
	}
}]);