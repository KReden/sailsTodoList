"use strict";
(function(){
  var todoApp = angular.module('todoApp');

  todoApp.controller('TodoCtrl', ['$scope', '$rootScope', 'TodoService', function($scope, $rootScope, TodoService) {
  $scope.todoForm = {};
  $scope.todo = {list: 1}
  $scope.todos = [];
  $scope.priorities = ['low', 'medium', 'high'];
  $scope.count = 0;

  var init = function(){
    updateTodoList();
  };

  var updateTodoList = function(){
    TodoService.getTodos().then(function(response) {
      $scope.todos = response;
    });
  };

  $scope.test = function(){
    $scope.count = $scope.count + 1
  };

  $scope.addTodo = function() {
    TodoService.addTodo($scope.todo).then(function(response) {
      updateTodoList();
      $scope.todo = {list: 1};
      $scope.todoForm = {};
    });
  };

  $scope.toggleTodo = function(id, completed) {
    var updateData = {id: id, completed: completed};
    TodoService.toggleTodo(updateData).then(function(response) {
      updateTodoList();
    });
  };

  init();

}]);
})();
