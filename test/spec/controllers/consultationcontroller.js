'use strict';

describe('Controller: ConsultationcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('mytodoApp'));

  var ConsultationcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConsultationcontrollerCtrl = $controller('ConsultationcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ConsultationcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
