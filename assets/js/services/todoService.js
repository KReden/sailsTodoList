"use strict";
(function(){
  var todoApp = angular.module('todoApp');

  todoApp.service('TodoService', ['$http', '$q', function($http, $q) {
    return {
      'getTodos': function() {
        var defer = $q.defer();
        $http.get('/todo/getTodos').success(function(resp){
          defer.resolve(resp);
        }).error( function(err) {
          defer.reject(err);
        });
        return defer.promise;
      },
      'addTodo': function(todo) {
        var defer = $q.defer();
        $http.post('/todo/addTodo', todo).success(function(resp){
          defer.resolve(resp);
        }).error( function(err) {
          defer.reject(err);
        });
        return defer.promise;
      },
      'toggleTodo': function(updateData) {
        var defer = $q.defer();
        $http.post('/todo/toggleTodo', updateData).success(function(resp){
          defer.resolve(resp);
        }).error( function(err) {
          defer.reject(err);
        });
        return defer.promise;
      }
    }
  }]);
})()
