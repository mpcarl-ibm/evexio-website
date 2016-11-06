'use strict';

// Declare app level module which depends on views, and components
angular.module('evexio', [
  'ngRoute',
  'evexio.home',
  'evexio.work',
  'evexio.about',
  'evexio.blog',
  'evexio.contact',
  'evexio.post'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}])
.controller('EvexioCtrl', ['$scope', '$location', function($scope, $location) {
                           
  $scope.isActive = function (viewLocation) {
      var active = (viewLocation === $location.path());
      return active;
  };
                           
}]);
