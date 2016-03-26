'use strict';

/**
 * @ngdoc overview
 * @name mytodoApp
 * @description
 * # mytodoApp
 *
 * Main module of the application.
 */
angular
  .module('demoApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/patients', {
        templateUrl: 'views/patient/patient.html',
        controller: 'PatientCtrl'
      })
      .when('/consultations', {
        templateUrl: 'views/consultationroute.html',
        controller: 'ConsultationrouteCtrl',
        controllerAs: 'ConsultationRoute'
      })
      .otherwise({
        redirectTo: '/'
      });

  });
