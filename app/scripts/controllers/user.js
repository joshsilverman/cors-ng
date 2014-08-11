'use strict';

/**
 * @ngdoc function
 * @name ngApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the ngApp
 */
angular.module('ngApp')
  .controller('UserCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
