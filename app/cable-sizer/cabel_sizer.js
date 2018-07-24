'use strict';

angular.module('myApp.cabel_sizer', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cabel_sizer', {
    templateUrl: 'cabel_sizer.html',
    controller: 'cableCtrl'
  });
}])

.controller('cableCtrl', [function() {

}]);