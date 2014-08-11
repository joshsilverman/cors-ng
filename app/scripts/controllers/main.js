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
    $http.get('/users.json').success(function(data) {
      debugger;
      console.log(data);
    });
  });
