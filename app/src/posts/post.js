'use strict';

angular.module('evexio.post', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/post', {
    templateUrl: 'src/posts/post.html',
    controller: 'PostCtrl'
  });
}])

.controller('PostCtrl', [function() {

}]);
