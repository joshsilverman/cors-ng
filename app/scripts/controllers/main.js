'use strict';

/**
 * @ngdoc function
 * @name ngApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngApp
 */
angular.module('ngApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('http://localhost:8080/users.json').success(function(data) {
      debugger;
      console.log(data);
    });
  });
