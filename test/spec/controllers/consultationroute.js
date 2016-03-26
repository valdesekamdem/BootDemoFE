'use strict';

describe('Controller: ConsultationrouteCtrl', function () {

  // load the controller's module
  beforeEach(module('mytodoApp'));

  var ConsultationrouteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConsultationrouteCtrl = $controller('ConsultationrouteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ConsultationrouteCtrl.awesomeThings.length).toBe(3);
  });
});
