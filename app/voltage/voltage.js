'use strict';

angular.module('myApp.voltage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/voltage', {
    templateUrl: 'voltage/voltage.html',
    controller: 'voltageCtrl'
  });
}])

.controller('voltageCtrl', [function() {

}]);