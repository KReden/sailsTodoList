"use strict";
(function(){
  var todoApp = angular.module('todoApp');

  todoApp.controller('TodoListCtrl', ['$scope', '$rootScope', 'TodoListService', function($scope, $rootScope, TodoListService) {
  $scope.todoListForm = {};
  $scope.lists = [];
  $scope.list = {};

  var init = function(){
    getTodoList();
  };

  var getTodoList = function(){
    TodoListService.getLists().then(function(response) {
      $scope.lists = response;
    });
  };

  $scope.addTodoList = function(){
    TodoListService.addList($scope.list).then(function(response){
      getTodoList();
      $scope.list = {};
      $scope.todoListForm = {};
    })
  }

  init();

}]);
})();
