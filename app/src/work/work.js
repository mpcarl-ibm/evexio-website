'use strict';

angular.module('evexio.work', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/work', {
    templateUrl: 'src/work/work.html',
    controller: 'WorkCtrl'
  });
}])

.controller('WorkCtrl', [function() {

}]);
