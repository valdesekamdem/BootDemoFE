'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:ConsultationrouteCtrl
 * @description
 * # ConsultationrouteCtrl
 * Controller of the mytodoApp
 */
angular.module('demoApp')
  .controller('ConsultationrouteCtrl', function ($scope, Patient) {
    $scope.patients = [];
    $scope.currentPage = 0;
    $scope.consultation = {};

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

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

    $scope.selectPatient = function(patient){
      $scope.consultation.patient = patient;
      $('#myModal').modal('toggle')
    };

  });
