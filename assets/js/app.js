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
        templateUrl: '/templates/list.html',
        controller: 'TodoListCtrl'
      }).otherwise({
        redirectTo: '/',
        caseInsensitiveMatch: true
      })
    }]);
})();
