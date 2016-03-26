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
    var url = "http://"+document.location.hostname+":8080/api/consultations";

    //load consultations
    service.getAll = function(page) {
      return $http.get(url+"/"+ page)
    };

    // Save a new consultation
    service.save = function(consultation) {
      return $http.post(url, consultation);
    };

    // Update a consultation
    service.update = function(consultation) {
      return $http.put(url, consultation);
    };

    // delete a consultation
    service.delete = function(id) {
      return $http.delete(url+"/" + id);
    };

    return service;
  });
