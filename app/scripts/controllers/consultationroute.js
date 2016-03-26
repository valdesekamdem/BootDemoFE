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

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

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

    $scope.addConsultation = function() {
      ConsultationService.save($scope.consultation).success(function(data) {
        $scope.loadConsultations();
        $scope.consultation = {};
      });
    }

    $scope.loadConsultations();

  });
