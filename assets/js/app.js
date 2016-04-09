"use strict";
(function(){
  var todoApp = angular.module('todoApp', [
    'ngRoute',
    'ngMaterial',
    'ngMessages'
  ]);

  todoApp.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.when('/', {
        templateUrl: '/templates/todo.html',
        controller: 'TodoCtrl'
      }).otherwise({
        redirectTo: '/',
        caseInsensitiveMatch: true
      })
    }]);
})();
