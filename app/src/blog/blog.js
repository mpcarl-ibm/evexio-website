'use strict';

angular.module('evexio.blog', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/blog', {
    templateUrl: 'src/blog/blog.html',
    controller: 'BlogCtrl'
  });
}])

.controller('BlogCtrl', [function() {

}]);
