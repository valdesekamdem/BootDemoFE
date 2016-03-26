'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:ConsultationrouteCtrl
 * @description
 * # ConsultationrouteCtrl
 * Controller of the mytodoApp
 */
angular.module('demoApp')
  .controller('ConsultationrouteCtrl', function ($scope, ConsultationService, Patient) {
    $scope.patients = [];
    $scope.consultations = [];
    $scope.currentPage = 0;
    $scope.currentConsultationPage = 0;
    $scope.consultation = {};

    $scope.loadConsultations = function() {
      ConsultationService.getAll($scope.currentConsultationPage).success(function(data) {
        $scope.consultations = data.content;
        $scope.consultationPages = new Array(data.totalPages);
      });
    };

    $scope.load = function() {
      Patient.getAll($scope.currentPage).success(function(data) {
        $scope.patients = data.content;
        $scope.pages = new Array(data.totalPages);
      });
    };

    $scope.gotoPage = function (p) {
      $scope.currentPage = p;
      $scope.load();
    };

    $scope.gotoConsultationPage = function (p) {
      $scope.currentConsultationPage = p;
      $scope.loadConsultations();
    };

    $scope.selectPatient = function(patient){
      $scope.consultation.patient = patient;
      $('#myModal').modal('toggle')
    };

    var onSaveFinished = function(result) {
      $scope.loadConsultations();
      $scope.consultation = {};
    };

    /*Create a new consultation if the consultation id is empty
     Else update the existing consultation*/
    $scope.saveConsultation = function() {
      if ($scope.consultation.id === null) {
        ConsultationService.save($scope.consultation).success(onSaveFinished);
      } else {
        ConsultationService.update($scope.consultation).success(onSaveFinished);
      }
    };

    $scope.loadConsultations();

    $scope.update = function(index) {
      $scope.consultation = angular.copy($scope.consultations[index]);
    };

    var onDeleteFinished = function() {
      $scope.loadConsultations();
    };

    $scope.delete = function(id) {
      ConsultationService.delete(id).success(onDeleteFinished)
    };
  });
