'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:PatientCtrl
 * @description
 * # PatientCtrl
 * Controller of the mytodoApp
 */
angular.module('demoApp')
  .controller('PatientCtrl', function ($scope, Patient) {
    $scope.patients = [];
    $scope.currentPage = 0;

    $scope.load = function() {
      Patient.getAll($scope.currentPage).success(function(data) {
        $scope.patients = data.content;
        $scope.pages = new Array(data.totalPages);
      });
    };

    $scope.load();

    $scope.gotoPage = function (p) {
      $scope.currentPage = p;
      $scope.load();
    };

    $scope.addPatient = function() {
      Patient.save($scope.patient).success(function(data) {
        $scope.load();
        $scope.patient = {};
      });
    }
  });
