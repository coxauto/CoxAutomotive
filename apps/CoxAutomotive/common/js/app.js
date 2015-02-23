'use strict';

//var BmWatson = angular.module('BmWatson', ['ngResource','ngRoute'])

var BmWatsonApp = angular.module('BmWatsonApp', ['ngResource','ngRoute','bmItemController','itemService'])

BmWatsonApp.config(["$routeProvider", function($routeProvider) {
    $routeProvider
    //.when('/', {controller: ListController, templateUrl: '/partials/list.html'}) 
    .when('/', {
        controller: "ItemController", 
        templateUrl: './templates/list.html'
    }) 
    .when('/listItem', {
        controller: "ItemController",
        templateUrl: "./templates/listItem.html"
    })
    .otherwise({
        redirectTo: "/"
    });
}]);
