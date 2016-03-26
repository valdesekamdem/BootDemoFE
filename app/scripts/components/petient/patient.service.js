/**
 * Created by valdese on 3/26/16.
 *
 * Patient service to communicate with backend
 */
angular.module('demoApp')
  .factory('Patient', function($http) {
    var service = [];
    var url = "http://"+document.location.hostname+":8080";

    //load patients
    service.getAll = function(page) {
      return $http.get(url+"/api/patients/"+ page)
    };

    // Save a new patient
    service.save = function(patient) {
      return $http.post(url+"/api/patients", patient);
    };

    return service;
  });
