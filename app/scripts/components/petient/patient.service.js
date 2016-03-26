/**
 * Created by valdese on 3/26/16.
 *
 * Patient service to communicate with backend
 */
angular.module('demoApp')
  .factory('Patient', function($http) {
    var service = [];
    var url = "http://"+document.location.hostname+":8080/api/patients";

    //load patients
    service.getAll = function(page) {
      return $http.get(url+"/"+ page)
    };

    // Save a new patient
    service.save = function(patient) {
      return $http.post(url, patient);
    };

    // Update a patient
    service.update = function(patient) {
      return $http.put(url, patient);
    };

    // delete a patient
    service.delete = function(id) {
      return $http.delete(url+"/" + id);
    };

    return service;
  });
