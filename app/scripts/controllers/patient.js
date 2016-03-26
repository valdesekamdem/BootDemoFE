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
    $scope.patient = {};
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

    var onSaveFinished = function(result) {
      $scope.load();
      $scope.patient = {};
    };

    /*Create a new patient if the patient id is empty
    Else update the existing patient*/
    $scope.savePatient = function() {
      if ($scope.patient.id === null) {
        Patient.save($scope.patient).success(onSaveFinished);
      } else {
        Patient.update($scope.patient).success(onSaveFinished);
      }
    };

    /*When user on update of an item. This method takes the item index in parameter, finds the corresponding
    patient in the patients table and sets it to the current patient*/
    $scope.update = function(index) {
      $scope.patient = angular.copy($scope.patients[index]);
    };

    var onDeleteFinished = function() {
      $scope.load();
    };

    $scope.delete = function(id) {
      Patient.delete(id).success(onDeleteFinished)
    };

  });
