'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('demoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [];
    var exist = false;
    $scope.addTodo = function() {
      for (var tdo in $scope.todos) {
        if ($scope.todos[tdo] === $scope.todo) {
          exist = true;
          break;
        }
      }
      if (exist) {
        $(function() {
          alert("This task already exist !");
          $scope.todo = '';
        });
      } else {
        if ($scope.todo === '' || $scope.todo === undefined) {
          $(function() {
            alert("Empty value !")
          });
        } else {
          $scope.todos.push($scope.todo);
          $scope.todo = '';
        }
      }
    }
    $scope.removeTodo = function(index) {
      $scope.todos.splice(index, 1);
    }
  });
