"use strict";
(function(){
  var todoApp = angular.module('todoApp');

  todoApp.service('TodoListService', ['$http', '$q', function($http, $q) {
    return {
      getLists: function() {
        var defer = $q.defer();
        $http.get('/list/getLists').success(function(resp){
          defer.resolve(resp);
        }).error( function(err) {
          defer.reject(err);
        });
        return defer.promise;
      },
      addList: function(todo) {
        var defer = $q.defer();
        $http.post('/list/addList', list).success(function(resp){
          defer.resolve(resp);
        }).error( function(err) {
          defer.reject(err);
        });
        return defer.promise;
      },
      removeList: function(updateData) {
        var defer = $q.defer();
        $http.post('/list/removeList', list).success(function(resp){
          defer.resolve(resp);
        }).error( function(err) {
          defer.reject(err);
        });
        return defer.promise;
      }
    }
  }]);
})()
