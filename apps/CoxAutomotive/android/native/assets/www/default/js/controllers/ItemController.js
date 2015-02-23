
/* JavaScript content from js/controllers/ItemController.js in folder common */
var bmItemController = angular.module('bmItemController', []);

bmItemController.controller('ItemController', ['$scope', '$http', 'ItemService', function($scope, $http, ItemService) {
  	
  	/*$http.get('/items').success(function(body) {
    	console.log(body[0].attributes.name);
    	$scope.items = body;
  	});*/

	$scope.myitem = "";
	$scope.itemList = "";
	$scope.testMyItem = "Otong";

	$scope.saveItem = function() {
  		var data = {
  			'item': $scope.myitem
  		}
  		var response = ItemService.saveItem(
  			$scope.saveItem_SuccessHandler,
  			$scope.saveItem_ErrorHandler,
  			data
  		);
  	}
    $scope.saveItem_SuccessHandler = function(response) {
    	console.log("saveItem-RESPONSE: " + response);
        console.log("array length: " + response.length);
        $scope.myitem = "";
        $scope.listItem();
  	}
  	$scope.saveItem_ErrorHandler = function(error) {
  		console.log("ERROR: " + error);
  	}

  	$scope.listItem = function() {
  		console.log("GETTING LIST of ITEMS ...")
  		var response = ItemService.listItem($scope.listItem_SuccessHandler,	$scope.listItem_ErrorHandler);
  	}
    $scope.listItem_SuccessHandler = function(response) {
    	$scope.itemList = [];

    	if(angular.isArray(response) && response.length > 0) {
    		console.log("COPY RESPONSE ARRAY TO ITEMLIST");
    		$scope.itemList = response;

    		console.log(JSON.stringify($scope.itemList[0].attributes.item));
    	}

    	$scope.testMyItem = "Sapi";
    	console.log("$scope.itemList-RESPONSE: " + JSON.stringify($scope.itemList));
        console.log("array length: " + $scope.itemList.length);
  	}
  	$scope.listItem_ErrorHandler = function(error) {
  		console.log("ERROR: " + error);
  	}

  	$scope.listItem();
}]);