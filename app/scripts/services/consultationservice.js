'use strict';

/**
 * @ngdoc service
 * @name mytodoApp.consultationService
 * @description
 * # consultationService
 * Service in the mytodoApp.
 */
angular.module('demoApp')
  .service('ConsultationService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var service = [];
    var url = "http://"+document.location.hostname+":8080";

    //load patients
    service.getAll = function(page) {
      return $http.get(url+"/api/consultations/"+ page)
    };

    // Save a new patient
    service.save = function(patient) {
      return $http.post(url+"/api/consultations", patient);
    };

    return service;
  });
