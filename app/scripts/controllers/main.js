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
    $http.get('http://dev.localhost/users.json', {withCredentials: true, useXDomain: true})
      .success(function(data) {
        console.log(data);
    });
  });
